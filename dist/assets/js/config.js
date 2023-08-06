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
function addHmrIntoView(watchPath) {
  let pendingReload = false;
  initReloadClient({
    watchPath,
    onUpdate: () => {
      if (document == null ? void 0 : document.hidden) {
        pendingReload = true;
        return;
      }
      reload();
    }
  });
  function reload() {
    pendingReload = false;
    window == null ? void 0 : window.location.reload();
  }
  function reloadWhenTabIsVisible() {
    if (document) {
      !(document == null ? void 0 : document.hidden) && pendingReload && reload();
    }
  }
  if (document) {
    document == null ? void 0 : document.addEventListener("visibilitychange", reloadWhenTabIsVisible);
  }
}
typeof window !== "undefined" && addHmrIntoView("public/_locales");
function i18n(key) {
  return chrome.i18n.getMessage(key);
}
const MAINPROMPT = i18n("config_MAINPROMPT");
const PROMPT_SUFFIX = i18n("config_PROMPT_SUFFIX");
const buildInPrompots = [
  {
    key: "0",
    name: i18n("config_prompt_item1_name"),
    host: "bilibili.com",
    prompt: i18n("config_prompt_item1_content")
  },
  {
    key: "1",
    name: i18n("config_prompt_item2_name"),
    host: "youtube.com",
    prompt: i18n("config_prompt_item2_content")
  },
  {
    key: "2",
    name: i18n("config_prompt_item3_name"),
    host: "github.com",
    prompt: i18n("config_prompt_item3_content")
  }
];
const MAXPAGECONTENT = 8e3;
const languageMap = {
  af: "Afrikaans",
  ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  bg: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
  bn: "\u09AC\u09BE\u0982\u09B2\u09BE",
  ca: "catal\xE0",
  cs: "\u010De\u0161tina",
  da: "dansk",
  de: "Deutsch",
  el: "\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
  "en-US": "English (United States)",
  "en-GB": "English (United Kingdom)",
  es: "espa\xF1ol",
  et: "eesti",
  fa: "\u0641\u0627\u0631\u0633\u06CC",
  fi: "suomi",
  fr: "fran\xE7ais",
  gu: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0",
  he: "\u05E2\u05D1\u05E8\u05D9\u05EA",
  hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
  hr: "hrvatski",
  hu: "magyar",
  id: "Indonesia",
  it: "italiano",
  ja: "\u65E5\u672C\u8A9E",
  kn: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1",
  ko: "\uD55C\uAD6D\uC5B4",
  lt: "lietuvi\u0173",
  lv: "latvie\u0161u",
  ml: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02",
  mr: "\u092E\u0930\u093E\u0920\u0940",
  ms: "Bahasa Melayu",
  nl: "Nederlands",
  no: "norsk",
  pl: "polski",
  "pt-BR": "portugu\xEAs (Brasil)",
  "pt-PT": "portugu\xEAs (Portugal)",
  ro: "rom\xE2n\u0103",
  ru: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439",
  sk: "sloven\u010Dina",
  sl: "sloven\u0161\u010Dina",
  sr: "\u0441\u0440\u043F\u0441\u043A\u0438",
  sv: "svenska",
  ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
  te: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41",
  th: "\u0E44\u0E17\u0E22",
  tr: "T\xFCrk\xE7e",
  uk: "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
  ug: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5\u200E",
  vi: "Ti\u1EBFng Vi\u1EC7t",
  "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
  "zh-TW": "\u7E41\u4F53\u4E2D\u6587",
  "zh-HK": "\u7E41\u4F53\u4E2D\u6587"
};
const videoDomains = [
  "youku.com",
  "pornhub",
  "bilibili.com",
  "v.qq",
  "xvideos.com"
];
[
  i18n("config_categorie_social_media"),
  i18n("config_categorie_news"),
  i18n("config_categorie_e_commerce"),
  i18n("config_categorie_entertainment"),
  i18n("config_categorie_education"),
  i18n("config_categorie_search_engine"),
  i18n("config_categorie_email"),
  i18n("config_categorie_weather"),
  i18n("config_categorie_developer"),
  i18n("config_categorie_streaming"),
  i18n("config_categorie_ai"),
  i18n("config_categorie_adult"),
  i18n("config_categorie_video_games"),
  i18n("config_categorie_professional_networking"),
  i18n("config_categorie_fitness"),
  i18n("config_categorie_health"),
  i18n("config_categorie_finance"),
  i18n("config_categorie_travel"),
  i18n("config_categorie_sports"),
  i18n("config_categorie_food"),
  i18n("config_categorie_cooking"),
  i18n("config_categorie_job_search"),
  i18n("config_categorie_real_estate"),
  i18n("config_categorie_music"),
  i18n("config_categorie_photography"),
  i18n("config_categorie_science"),
  i18n("config_categorie_politics"),
  i18n("config_categorie_current_affairs"),
  i18n("config_categorie_technology"),
  i18n("config_categorie_digital"),
  i18n("config_categorie_crypto"),
  i18n("config_categorie_make_money"),
  i18n("config_categorie_short_video"),
  i18n("config_categorie_save_money"),
  i18n("config_categorie_art"),
  i18n("config_categorie_renting")
];
const selectedCategory = [
  i18n("config_categorie_social_media"),
  i18n("config_categorie_e_commerce"),
  i18n("config_categorie_entertainment"),
  i18n("config_categorie_education"),
  i18n("config_categorie_ai"),
  i18n("config_categorie_health"),
  i18n("config_categorie_music"),
  i18n("config_categorie_renting"),
  i18n("config_categorie_science"),
  i18n("config_categorie_current_affairs"),
  i18n("config_categorie_technology"),
  i18n("config_categorie_digital"),
  i18n("config_categorie_short_video"),
  i18n("config_categorie_art"),
  i18n("config_categorie_other")
];
const language_code = chrome.i18n.getUILanguage();
const DEFAULT_OPTIONS = {
  openAIModel: "gpt-3.5-turbo-16k",
  openAITemperature: 0.8,
  isFollowSystemTheme: true,
  userChosenTheme: "light",
  autoExtractSubtitles: {
    enableOnBilibiliVideo: true,
    enableOnYoutubeVideo: true
  },
  autoPopup: {
    enableOnBilibiliVideo: false,
    enableOnYoutubeVideo: false
  },
  openAIApiKey: void 0
};
const DEFAULT_PROMPTOPTIONS = {
  language: languageMap[language_code],
  categories: selectedCategory,
  category: selectedCategory.join(","),
  useKey: "main",
  prompts: buildInPrompots
};
export {
  DEFAULT_OPTIONS as D,
  MAINPROMPT as M,
  PROMPT_SUFFIX as P,
  addHmrIntoView as a,
  DEFAULT_PROMPTOPTIONS as b,
  MAXPAGECONTENT as c,
  i18n as i,
  videoDomains as v
};
