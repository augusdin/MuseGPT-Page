import{D as _}from"../../../assets/js/config.cdcd2794.js";function L(e){let r,t,o,s,a,c,n;return b(),{feed:y,reset:b};function b(){r=!0,t="",o=0,s=-1,a=void 0,c=void 0,n=""}function y(p){t=t?t+p:p,r&&P(t)&&(t=t.slice(M.length)),r=!1;const d=t.length;let i=0,h=!1;for(;i<d;){h&&(t[i]===`
`&&++i,h=!1);let u=-1,m=s,l;for(let g=o;u<0&&g<d;++g)l=t[g],l===":"&&m<0?m=g-i:l==="\r"?(h=!0,u=g-i):l===`
`&&(u=g-i);if(u<0){o=d-i,s=m;break}else o=0,s=-1;v(t,i,m,u),i+=u+1}i===d?t="":i>0&&(t=t.slice(i))}function v(p,d,i,h){if(h===0){n.length>0&&(e({type:"event",id:a,event:c||void 0,data:n.slice(0,-1)}),n="",a=void 0),c=void 0;return}const u=i<0,m=p.slice(d,d+(u?h:i));let l=0;u?l=h:p[d+i+1]===" "?l=i+2:l=i+1;const g=d+l,O=h-l,T=p.slice(g,g+O).toString();if(m==="data")n+=T?"".concat(T,`
`):`
`;else if(m==="event")c=T;else if(m==="id"&&!T.includes("\0"))a=T;else if(m==="retry"){const E=parseInt(T,10);Number.isNaN(E)||e({type:"reconnect-interval",value:E})}}}const M=[239,187,191];function P(e){return M.every((r,t)=>e.charCodeAt(t)===r)}const x={},C=(e,r,t)=>{r.status==="complete"&&(I(t),chrome.scripting.executeScript({target:{tabId:t.id},func:()=>{var o=document.getElementById("musegpt-tips");o&&o.remove()}}),chrome.tabs.onUpdated.removeListener(C))},A=(e,r,t)=>{r.status==="complete"&&(I(t,"popup-active-auto"),chrome.scripting.executeScript({target:{tabId:t.id},func:()=>{var o=document.getElementById("musegpt-tips");o&&o.remove()}}),chrome.tabs.onUpdated.removeListener(A))},S=()=>{if(document.getElementById("musegpt_reload_tips"))return;const e=document.createElement("div");e.id="musegpt_reload_tips";const r=document.createElement("style");r.innerHTML=`
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
  `,e.style.cssText=`
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
  `,e.innerText=chrome.i18n.getMessage("background_script_refresh_tips_text");const t=document.createElement("span");t.className="musegpt_refresh-btn",t.innerText=chrome.i18n.getMessage("background_script_refresh_tips_refresh_btn"),t.onclick=()=>{e.remove(),location.reload()};const o=document.createElement("span");o.className="musegpt_close-btn",o.innerText="\u2715",o.onclick=()=>e.remove(),e.appendChild(t),e.appendChild(o),document.head.appendChild(r),document.body.appendChild(e)},N=()=>{if(!document.getElementById("musegpt-tips")){const r=document.createElement("div");r.style.cssText=`
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
    `,r.id="musegpt-tips";const t=document.createElement("div");t.style.cssText=`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    `;const o=document.createElement("span");o.style.cssText=`
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid white;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    `;const s=document.createElement("span");s.style.cssText=`
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      position: absolute;
    `,t.appendChild(o),t.appendChild(s),r.appendChild(t);const a=document.createElement("span"),c=document.createTextNode(chrome.i18n.getMessage("background_script_loading_tips"));a.appendChild(c),r.appendChild(a);const n=document.createElement("style");n.textContent=`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,document.head.appendChild(n),document.body.appendChild(r),setTimeout(()=>{r.style.opacity="1"},50)}},I=async(e,r="popup-active")=>{chrome.tabs.sendMessage(e.id,{message:r},t=>{chrome.runtime.lastError?(chrome.runtime.lastError.message,(e==null?void 0:e.status)==="complete"&&r==="popup-active"&&(chrome.scripting.executeScript({target:{tabId:e.id},func:S,injectImmediately:!0}),chrome.scripting.executeScript({target:{tabId:e.id},func:()=>{var o=document.getElementById("musegpt-tips");o&&o.remove()}}))):(chrome.tabs.onUpdated.removeListener(A),chrome.tabs.onUpdated.removeListener(C))})},k=async()=>{const{museOptions:e}=await chrome.storage.local.get(["museOptions"]),r=e;return r&&r.hasOwnProperty("openAIApiKey")&&r.openAIApiKey.trim()!==""?!0:(chrome.runtime.openOptionsPage(),!1)};chrome.tabs.onUpdated.addListener((e,r,t)=>{var o;r.status==="complete"&&(x[e]={ready:!0,shown:((o=x[e])==null?void 0:o.shown)||!1},chrome.tabs.query({active:!0,currentWindow:!0},s=>{s.length>0&&s[0].id===e&&x[e].ready&&(setTimeout(()=>{w(t,!0)},100),x[e].shown=!0)}))});chrome.tabs.onActivated.addListener(e=>{chrome.tabs.get(e.tabId,r=>{const t=x[r.id];t&&t.ready&&!t.shown&&(setTimeout(()=>{w(r,!0)},100),x[r.id].shown=!0)})});chrome.tabs.onRemoved.addListener(e=>{delete x[e]});chrome.tabs.onUpdated.addListener((e,r,t)=>{r.status});const w=async(e,r=!1)=>{chrome.tabs.get(e.id,t=>{t.status,t.status==="loading"&&(r?chrome.tabs.onUpdated.addListener(A):chrome.tabs.onUpdated.addListener(C),chrome.scripting.executeScript({target:{tabId:e.id},func:N,injectImmediately:!0}))}),r?I(e,"popup-active-auto"):I(e)};chrome.action.onClicked.addListener(async e=>{await k()&&w(e)});chrome.commands.onCommand.addListener(async e=>{e==="_execute_action"&&await k()&&chrome.tabs.query({active:!0,currentWindow:!0},r=>{const t=r[0];w(t)})});chrome.runtime.onInstalled.addListener(e=>{e.reason=="update",e.reason==="install"&&k()});let f;async function*D(e){const r=e.getReader();try{for(;;){const{done:t,value:o}=await r.read();if(t)return;yield o}}finally{r.releaseLock()}}const B=async(e,r)=>{const{onmessage:t,onerror:o}=r;if(!e.ok){o(e);return}const s=L(a=>{a.type==="event"&&t(a.data)});for await(const a of D(e.body)){const c=new TextDecoder().decode(a);s.feed(c)}},U=async(e,r)=>{try{f||(f=new AbortController);const{museOptions:t}=await chrome.storage.local.get(["museOptions"]);if(!t&&!t.openAIApiKey){e.postMessage({messageId:"error-fetch",errorContent:"fetch OpenAI API error: configuration uninitialized"}),console.error("fetch OpenAI API error: configuration uninitialized");return}const o=t,s=o.openAIModel||_.openAIModel,a=o.openAIApiKey,c=o.openAITemperature||_.openAITemperature;e.postMessage({messageId:"fetch-api-begin",options:{prompts:r,model:s,temperature:c}});const n=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({messages:r,model:`${s}`,temperature:c,stream:!0}),signal:f.signal});if(e.postMessage({messageId:"fetch-api-done",options:{prompts:r,model:s},apiResponse:n}),!n.ok)return console.error("error:fetch error,response:",n),e.postMessage({messageId:"error-fetch",errorContent:`fetch OpenAI API error,statusText :${n.statusText}`,response:{status:n.status,statusText:n.statusText,url:n.url}}),n;let b="";await B(n,{onmessage(y){if(y==="[DONE]")return e&&e.postMessage({messageId:"onmessage-done",chatContent:b}),n;let v;try{v=JSON.parse(y)}catch(d){return console.error("parsing msg to JSON fail"),e.postMessage({messageId:"error-parsing-json",errorContent:`parsing msg to JSON fail,error: ${d}`}),n}let p;v.choices&&v.choices[0].delta&&(p=v.choices[0].delta.content),p&&(b+=p,e.postMessage({messageId:"onmessage-receving",chatContent:b}))},onerror(y){e.postMessage({messageId:"error-onstreaming",errorContent:`on streaming error: ${y}`}),console.error("on streaming error:",y)}})}catch(t){t.message.includes("disconnected port")&&t.message.includes("port")?console.error("The port is disconnected"):e.postMessage({messageId:"error-onstreaming",errorContent:`on fetching error: ${t.message}, stack: ${t}`})}};chrome.runtime.onConnect.addListener(e=>{e.onMessage.addListener(r=>{if(r.task==="get-page-summary"){const t=r.prompts;U(e,t)}}),e.onDisconnect.addListener(()=>{f&&(f.abort(),f=void 0)})});chrome.runtime.onMessage.addListener((e,r,t)=>{if(e.method==="open-option-page"&&(chrome.runtime.openOptionsPage(),t()),e.method==="abort-fetching-openai"&&(f.abort(),f=void 0,t()),e.method==="http-fetch-text")return fetch(e.url,e.options).then(async o=>{if(!o.ok)throw console.error("HTTP error in background:",o),new Error(`HTTP error! status: ${o.status}, statusText: ${o.statusText}`);return await o.text()}).then(o=>{t({data:o})}).catch(o=>{t({error:o.message})}),!0;if(e.method==="http-fetch")return fetch(e.url,e.options).then(o=>{if(!o.ok)throw console.error("HTTP error in background:",o),new Error(`HTTP error! status: ${o.status}, statusText: ${o.statusText}`);return o.json()}).then(o=>{t({data:o})}).catch(o=>t({error:o.message})),!0});
