import { D as DEFAULT_OPTIONS } from "../../../assets/js/config.js";
const LOCAL_RELOAD_SOCKET_PORT = 8081;
const LOCAL_RELOAD_SOCKET_URL = `ws://localhost:${LOCAL_RELOAD_SOCKET_PORT}`;
const UPDATE_PENDING_MESSAGE = "wait_update";
const UPDATE_REQUEST_MESSAGE = "do_update";
const UPDATE_COMPLETE_MESSAGE = "done_update";
class MessageInterpreter {
  constructor() {
  }
  static send(message) {
    return JSON.stringify(message);
  }
  static receive(serializedMessage) {
    return JSON.parse(serializedMessage);
  }
}
let needToUpdate = false;
function initReloadClient({ watchPath, onUpdate }) {
  const socket = new WebSocket(LOCAL_RELOAD_SOCKET_URL);
  function sendUpdateCompleteMessage() {
    socket.send(MessageInterpreter.send({ type: UPDATE_COMPLETE_MESSAGE }));
  }
  socket.addEventListener("message", (event) => {
    const message = MessageInterpreter.receive(String(event.data));
    switch (message.type) {
      case UPDATE_REQUEST_MESSAGE: {
        if (needToUpdate) {
          sendUpdateCompleteMessage();
          needToUpdate = false;
          onUpdate();
        }
        return;
      }
      case UPDATE_PENDING_MESSAGE: {
        if (!needToUpdate) {
          needToUpdate = message.path.includes(watchPath);
        }
        return;
      }
    }
  });
  socket.onclose = () => {
    console.warn(`Reload server disconnected.
Please check if the WebSocket server is running properly on ${LOCAL_RELOAD_SOCKET_URL}. This feature detects changes in the code and helps the browser to reload the extension or refresh the current tab.`);
  };
  return socket;
}
function addHmrIntoScript(watchPath) {
  initReloadClient({
    watchPath,
    onUpdate: () => {
      chrome.runtime.reload();
    }
  });
}
function createParser(onParse) {
  let isFirstChunk;
  let buffer;
  let startingPosition;
  let startingFieldLength;
  let eventId;
  let eventName;
  let data;
  reset();
  return {
    feed,
    reset
  };
  function reset() {
    isFirstChunk = true;
    buffer = "";
    startingPosition = 0;
    startingFieldLength = -1;
    eventId = void 0;
    eventName = void 0;
    data = "";
  }
  function feed(chunk) {
    buffer = buffer ? buffer + chunk : chunk;
    if (isFirstChunk && hasBom(buffer)) {
      buffer = buffer.slice(BOM.length);
    }
    isFirstChunk = false;
    const length = buffer.length;
    let position = 0;
    let discardTrailingNewline = false;
    while (position < length) {
      if (discardTrailingNewline) {
        if (buffer[position] === "\n") {
          ++position;
        }
        discardTrailingNewline = false;
      }
      let lineLength = -1;
      let fieldLength = startingFieldLength;
      let character;
      for (let index = startingPosition; lineLength < 0 && index < length; ++index) {
        character = buffer[index];
        if (character === ":" && fieldLength < 0) {
          fieldLength = index - position;
        } else if (character === "\r") {
          discardTrailingNewline = true;
          lineLength = index - position;
        } else if (character === "\n") {
          lineLength = index - position;
        }
      }
      if (lineLength < 0) {
        startingPosition = length - position;
        startingFieldLength = fieldLength;
        break;
      } else {
        startingPosition = 0;
        startingFieldLength = -1;
      }
      parseEventStreamLine(buffer, position, fieldLength, lineLength);
      position += lineLength + 1;
    }
    if (position === length) {
      buffer = "";
    } else if (position > 0) {
      buffer = buffer.slice(position);
    }
  }
  function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        onParse({
          type: "event",
          id: eventId,
          event: eventName || void 0,
          data: data.slice(0, -1)
        });
        data = "";
        eventId = void 0;
      }
      eventName = void 0;
      return;
    }
    const noValue = fieldLength < 0;
    const field = lineBuffer.slice(index, index + (noValue ? lineLength : fieldLength));
    let step = 0;
    if (noValue) {
      step = lineLength;
    } else if (lineBuffer[index + fieldLength + 1] === " ") {
      step = fieldLength + 2;
    } else {
      step = fieldLength + 1;
    }
    const position = index + step;
    const valueLength = lineLength - step;
    const value = lineBuffer.slice(position, position + valueLength).toString();
    if (field === "data") {
      data += value ? "".concat(value, "\n") : "\n";
    } else if (field === "event") {
      eventName = value;
    } else if (field === "id" && !value.includes("\0")) {
      eventId = value;
    } else if (field === "retry") {
      const retry = parseInt(value, 10);
      if (!Number.isNaN(retry)) {
        onParse({
          type: "reconnect-interval",
          value: retry
        });
      }
    }
  }
}
const BOM = [239, 187, 191];
function hasBom(buffer) {
  return BOM.every((charCode, index) => buffer.charCodeAt(index) === charCode);
}
addHmrIntoScript("pages/background");
addHmrIntoScript("pages/content/style.scss");
console.log(">>>background loaded?");
const tabsReady = {};
const handleUpdate = (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log(`The current active tab ${tabId} has finished loading.`);
    sendMessageToMuseGPTPanel(tab);
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        var tipsDiv = document.getElementById("musegpt-tips");
        if (tipsDiv) {
          tipsDiv.remove();
        }
      }
    });
    chrome.tabs.onUpdated.removeListener(handleUpdate);
  }
};
const handleUpdateAutoPop = (tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log(`The current active tab ${tabId} has finished loading.`);
    sendMessageToMuseGPTPanel(tab, "popup-active-auto");
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        var tipsDiv = document.getElementById("musegpt-tips");
        if (tipsDiv) {
          tipsDiv.remove();
        }
      }
    });
    chrome.tabs.onUpdated.removeListener(handleUpdateAutoPop);
  }
};
const injectRefreshTipsScript = () => {
  if (document.getElementById("musegpt_reload_tips"))
    return;
  const tip = document.createElement("div");
  tip.id = "musegpt_reload_tips";
  const style = document.createElement("style");
  style.innerHTML = `
    .musegpt_close-btn {
      cursor: pointer;
      user-select: none;
      margin-left: 15px;
      height: 100%;
      
      // \u56FE\u6807
      font-size: 16px; 
      color: #ddd;
  
      // \u6269\u5927\u70B9\u51FB\u533A\u57DF  
      padding: 8px;
      
      // \u4F7F\u7528\u5B9A\u4F4D\u548Ctranslate\u5C45\u4E2D
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .musegpt_close-btn:hover {
      background: rgba(0,0,0,0.1);
      color: #fff;
    }

    .musegpt_refresh-btn {
      cursor: pointer;
      color: rgba(255, 165, 0, 0.7);
      text-decoration: none;
    }

    .musegpt_refresh-btn:hover {
      color: rgba(255, 165, 0, 1);
    }
  `;
  tip.style.cssText = `
    position: fixed; 
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.85);
    color: #fff;
    padding: 13px 17px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(128,128,128,0.8);
    z-index: 99999;
    font-size: 16px;
    border: 1px solid rgba(128, 128, 128, 0.7);
  `;
  tip.innerText = chrome.i18n.getMessage("background_script_refresh_tips_text");
  const refreshBtn = document.createElement("span");
  refreshBtn.className = "musegpt_refresh-btn";
  refreshBtn.innerText = chrome.i18n.getMessage(
    "background_script_refresh_tips_refresh_btn"
  );
  refreshBtn.onclick = () => {
    tip.remove();
    location.reload();
  };
  const closeBtn = document.createElement("span");
  closeBtn.className = "musegpt_close-btn";
  closeBtn.innerText = "\u2715";
  closeBtn.onclick = () => tip.remove();
  tip.appendChild(refreshBtn);
  tip.appendChild(closeBtn);
  document.head.appendChild(style);
  document.body.appendChild(tip);
};
const injectLoadingTips = () => {
  const tipsDiv = document.getElementById("musegpt-tips");
  if (!tipsDiv) {
    const div = document.createElement("div");
    div.style.cssText = `
      top: 10px;
      right: 10px;
      position: fixed;
      z-index: 9999;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      border-radius: 10px;
      padding: 10px;
      transition: opacity 0.3s;
      opacity: 0;
      box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    div.id = "musegpt-tips";
    const spinnerContainer = document.createElement("div");
    spinnerContainer.style.cssText = `
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    `;
    const spinner = document.createElement("span");
    spinner.style.cssText = `
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid white;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    `;
    const ring = document.createElement("span");
    ring.style.cssText = `
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      position: absolute;
    `;
    spinnerContainer.appendChild(spinner);
    spinnerContainer.appendChild(ring);
    div.appendChild(spinnerContainer);
    const textSpan = document.createElement("span");
    const text = document.createTextNode(
      chrome.i18n.getMessage("background_script_loading_tips")
    );
    textSpan.appendChild(text);
    div.appendChild(textSpan);
    const style = document.createElement("style");
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(div);
    setTimeout(() => {
      div.style.opacity = "1";
    }, 50);
  }
};
const sendMessageToMuseGPTPanel = async (tab, message = "popup-active") => {
  chrome.tabs.sendMessage(tab.id, { message }, (response) => {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError.message);
      if ((tab == null ? void 0 : tab.status) === "complete" && message === "popup-active") {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: injectRefreshTipsScript,
          injectImmediately: true
        });
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            var tipsDiv = document.getElementById("musegpt-tips");
            if (tipsDiv) {
              tipsDiv.remove();
            }
          }
        });
      }
    } else {
      chrome.tabs.onUpdated.removeListener(handleUpdateAutoPop);
      chrome.tabs.onUpdated.removeListener(handleUpdate);
      console.warn(
        "background->recived message from content,response:",
        response
      );
    }
  });
};
const initConfig = async () => {
  const { museOptions } = await chrome.storage.local.get(["museOptions"]);
  const options = museOptions;
  if (options && options.hasOwnProperty("openAIApiKey") && options.openAIApiKey.trim() !== "") {
    return true;
  } else {
    chrome.runtime.openOptionsPage();
    return false;
  }
};
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  var _a;
  if (changeInfo.status === "complete") {
    tabsReady[tabId] = { ready: true, shown: ((_a = tabsReady[tabId]) == null ? void 0 : _a.shown) || false };
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0 && tabs[0].id === tabId && tabsReady[tabId].ready) {
        setTimeout(() => {
          initMuseGPTPanel(tab, true);
        }, 100);
        tabsReady[tabId].shown = true;
      }
    });
  }
});
chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log("\u7528\u6237\u5F53\u524Dtab\u5DF2\u6FC0\u6D3B");
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    const currentTab = tabsReady[tab.id];
    if (currentTab && currentTab.ready && !currentTab.shown) {
      setTimeout(() => {
        initMuseGPTPanel(tab, true);
      }, 100);
      tabsReady[tab.id].shown = true;
    }
  });
});
chrome.tabs.onRemoved.addListener((tabId) => {
  console.log("\u5DF2\u5220\u9664:", tabId);
  delete tabsReady[tabId];
  console.log("\u5F53\u524D\u7684tabsReady:", tabsReady);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete")
    ;
});
const initMuseGPTPanel = async (tab, isAutoPop = false) => {
  chrome.tabs.get(tab.id, (currentTab) => {
    console.log(currentTab.status);
    if (currentTab.status === "loading") {
      if (isAutoPop) {
        chrome.tabs.onUpdated.addListener(handleUpdateAutoPop);
      } else {
        chrome.tabs.onUpdated.addListener(handleUpdate);
      }
      console.log("page is loading");
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectLoadingTips,
        injectImmediately: true
      });
    }
  });
  if (isAutoPop) {
    sendMessageToMuseGPTPanel(tab, "popup-active-auto");
  } else {
    sendMessageToMuseGPTPanel(tab);
  }
};
chrome.action.onClicked.addListener(async (tab) => {
  if (await initConfig()) {
    initMuseGPTPanel(tab);
  }
});
chrome.commands.onCommand.addListener(async (command) => {
  if (command === "_execute_action") {
    if (await initConfig()) {
      console.log("the key pressed:", command);
      chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => {
          const currentTab = tabs[0];
          initMuseGPTPanel(currentTab);
        }
      );
    }
  }
});
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == "update") {
    console.warn("\uFF01\uFF01\u8BF7\u6CE8\u610F:\u63D2\u4EF6\u5DF2\u66F4\u65B0\uFF0C\u5DF2\u5237\u65B0\u6240\u6709\u5DF2\u6253\u5F00\u7684\u9875\u9762!");
  }
  if (details.reason === "install") {
    console.warn("\uFF01\uFF01\u8BF7\u6CE8\u610F:\u63D2\u4EF6\u5DF2\u5B89\u88C5\uFF0C\u6682\u672A\u5237\u65B0\u6240\u6709\u9875\u9762");
    initConfig();
  }
});
let ctrl;
async function* asyncStream(eventStream) {
  const rdr = eventStream.getReader();
  try {
    while (true) {
      const { done, value } = await rdr.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    rdr.releaseLock();
  }
}
const processEventStream = async (fetchResponse, handles) => {
  const { onmessage, onerror } = handles;
  if (!fetchResponse.ok) {
    onerror(fetchResponse);
    return;
  }
  const parser = createParser((event) => {
    if (event.type === "event") {
      onmessage(event.data);
    }
  });
  for await (const streamChunk of asyncStream(fetchResponse.body)) {
    const str = new TextDecoder().decode(streamChunk);
    parser.feed(str);
  }
};
const fetchOpenAIAPI = async (port, prompts) => {
  try {
    if (!ctrl) {
      ctrl = new AbortController();
    }
    const { museOptions } = await chrome.storage.local.get(["museOptions"]);
    console.warn("muse options:", museOptions);
    if (!museOptions) {
      if (!museOptions.openAIApiKey) {
        port.postMessage({
          messageId: "error-fetch",
          errorContent: `fetch OpenAI API error: configuration uninitialized`
        });
        console.error("fetch OpenAI API error: configuration uninitialized");
        return;
      }
    }
    const options = museOptions;
    const model = options.openAIModel || DEFAULT_OPTIONS.openAIModel;
    const apiToken = options.openAIApiKey;
    const temperature = options.openAITemperature || DEFAULT_OPTIONS.openAITemperature;
    port.postMessage({
      messageId: "fetch-api-begin",
      options: { prompts, model, temperature }
    });
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`
        },
        body: JSON.stringify({
          messages: prompts,
          model: `${model}`,
          temperature,
          stream: true
        }),
        signal: ctrl.signal
      }
    );
    console.warn("background===>fetchOpenAI==>response:", response);
    port.postMessage({
      messageId: "fetch-api-done",
      options: { prompts, model },
      apiResponse: response
    });
    if (!response.ok) {
      console.error("error:fetch error,response:", response);
      port.postMessage({
        messageId: "error-fetch",
        errorContent: `fetch OpenAI API error,statusText :${response.statusText}`,
        response: {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        }
      });
      return response;
    }
    let chatContent = "";
    await processEventStream(response, {
      onmessage(msg) {
        if (msg === "[DONE]") {
          if (port) {
            port.postMessage({ messageId: "onmessage-done", chatContent });
          }
          return response;
        }
        let parsedMsg;
        try {
          parsedMsg = JSON.parse(msg);
        } catch (err) {
          console.error("parsing msg to JSON fail");
          port.postMessage({
            messageId: "error-parsing-json",
            errorContent: `parsing msg to JSON fail,error: ${err}`
          });
          return response;
        }
        let chatToken;
        if (parsedMsg.choices && parsedMsg.choices[0].delta) {
          chatToken = parsedMsg.choices[0].delta.content;
        }
        if (chatToken) {
          chatContent += chatToken;
          port.postMessage({ messageId: "onmessage-receving", chatContent });
        }
      },
      onerror(err) {
        port.postMessage({
          messageId: "error-onstreaming",
          errorContent: `on streaming error: ${err}`
        });
        console.error("on streaming error:", err);
      }
    });
  } catch (error) {
    if (error.message.includes("disconnected port") && error.message.includes("port")) {
      console.error("The port is disconnected");
    } else {
      port.postMessage({
        messageId: "error-onstreaming",
        errorContent: `on fetching error: ${error.message}, stack: ${error}`
      });
    }
  }
};
chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    console.warn("background==>Received message from popup:", msg);
    if (msg.task === "get-page-summary") {
      const prompts = msg.prompts;
      console.log("background--->", prompts);
      fetchOpenAIAPI(port, prompts);
    }
  });
  port.onDisconnect.addListener(() => {
    console.warn("The port is disconnected");
    if (ctrl) {
      ctrl.abort();
      ctrl = void 0;
    }
  });
});
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.method === "open-option-page") {
    console.warn("open option page");
    chrome.runtime.openOptionsPage();
    sendResponse();
  }
  if (request.method === "abort-fetching-openai") {
    ctrl.abort();
    ctrl = void 0;
    sendResponse();
  }
  if (request.method === "http-fetch-text") {
    console.warn("background->fetching,request:", request);
    fetch(request.url, request.options).then(async (response) => {
      if (!response.ok) {
        console.error("HTTP error in background:", response);
        throw new Error(
          `HTTP error! status: ${response.status}, statusText: ${response.statusText}`
        );
      }
      console.log("response text first step is ok, response", response);
      const responseText = await response.text();
      return responseText;
    }).then((data) => {
      sendResponse({ data });
    }).catch((error) => {
      sendResponse({ error: error.message });
    });
    return true;
  }
  if (request.method === "http-fetch") {
    console.warn("background->fetching,request:", request);
    fetch(request.url, request.options).then((response) => {
      if (!response.ok) {
        console.error("HTTP error in background:", response);
        throw new Error(
          `HTTP error! status: ${response.status}, statusText: ${response.statusText}`
        );
      }
      console.log("response first step is ok, response", response);
      const responseJson = response.json();
      console.log("responseJson:", responseJson);
      return responseJson;
    }).then((data) => {
      sendResponse({ data });
    }).catch((error) => sendResponse({ error: error.message }));
    return true;
  }
});
