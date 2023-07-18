import{D as E}from"../../../assets/js/config.cdcd2794.js";function L(e){let o,t,r,n,a,c,s;return x(),{feed:y,reset:x};function x(){o=!0,t="",r=0,n=-1,a=void 0,c=void 0,s=""}function y(p){t=t?t+p:p,o&&P(t)&&(t=t.slice(_.length)),o=!1;const d=t.length;let i=0,h=!1;for(;i<d;){h&&(t[i]===`
`&&++i,h=!1);let m=-1,u=n,l;for(let g=r;m<0&&g<d;++g)l=t[g],l===":"&&u<0?u=g-i:l==="\r"?(h=!0,m=g-i):l===`
`&&(m=g-i);if(m<0){r=d-i,n=u;break}else r=0,n=-1;v(t,i,u,m),i+=m+1}i===d?t="":i>0&&(t=t.slice(i))}function v(p,d,i,h){if(h===0){s.length>0&&(e({type:"event",id:a,event:c||void 0,data:s.slice(0,-1)}),s="",a=void 0),c=void 0;return}const m=i<0,u=p.slice(d,d+(m?h:i));let l=0;m?l=h:p[d+i+1]===" "?l=i+2:l=i+1;const g=d+l,O=h-l,T=p.slice(g,g+O).toString();if(u==="data")s+=T?"".concat(T,`
`):`
`;else if(u==="event")c=T;else if(u==="id"&&!T.includes("\0"))a=T;else if(u==="retry"){const k=parseInt(T,10);Number.isNaN(k)||e({type:"reconnect-interval",value:k})}}}const _=[239,187,191];function P(e){return _.every((o,t)=>e.charCodeAt(t)===o)}const b={},C=(e,o,t)=>{o.status==="complete"&&(I(t),chrome.scripting.executeScript({target:{tabId:t.id},func:()=>{var r=document.getElementById("musegpt-tips");r&&r.remove()}}),chrome.tabs.onUpdated.removeListener(C))},A=(e,o,t)=>{o.status==="complete"&&(I(t,"popup-active-auto"),chrome.scripting.executeScript({target:{tabId:t.id},func:()=>{var r=document.getElementById("musegpt-tips");r&&r.remove()}}),chrome.tabs.onUpdated.removeListener(A))},S=()=>{if(document.getElementById("musegpt_reload_tips"))return;const e=document.createElement("div");e.id="musegpt_reload_tips";const o=document.createElement("style");o.innerHTML=`
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
  `,e.innerText=chrome.i18n.getMessage("background_script_refresh_tips_text");const t=document.createElement("span");t.className="musegpt_refresh-btn",t.innerText=chrome.i18n.getMessage("background_script_refresh_tips_refresh_btn"),t.onclick=()=>{e.remove(),location.reload()};const r=document.createElement("span");r.className="musegpt_close-btn",r.innerText="\u2715",r.onclick=()=>e.remove(),e.appendChild(t),e.appendChild(r),document.head.appendChild(o),document.body.appendChild(e)},N=()=>{if(!document.getElementById("musegpt-tips")){const o=document.createElement("div");o.style.cssText=`
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
    `,o.id="musegpt-tips";const t=document.createElement("div");t.style.cssText=`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    `;const r=document.createElement("span");r.style.cssText=`
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid white;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    `;const n=document.createElement("span");n.style.cssText=`
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      position: absolute;
    `,t.appendChild(r),t.appendChild(n),o.appendChild(t);const a=document.createElement("span"),c=document.createTextNode(chrome.i18n.getMessage("background_script_loading_tips"));a.appendChild(c),o.appendChild(a);const s=document.createElement("style");s.textContent=`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,document.head.appendChild(s),document.body.appendChild(o),setTimeout(()=>{o.style.opacity="1"},50)}},I=async(e,o="popup-active")=>{chrome.tabs.sendMessage(e.id,{message:o},t=>{chrome.runtime.lastError?(chrome.runtime.lastError.message,(e==null?void 0:e.status)==="complete"&&o==="popup-active"&&(chrome.scripting.executeScript({target:{tabId:e.id},func:S,injectImmediately:!0}),chrome.scripting.executeScript({target:{tabId:e.id},func:()=>{var r=document.getElementById("musegpt-tips");r&&r.remove()}}))):(chrome.tabs.onUpdated.removeListener(A),chrome.tabs.onUpdated.removeListener(C))})},M=async()=>{const{museOptions:e}=await chrome.storage.local.get(["museOptions"]),o=e;return o&&o.hasOwnProperty("openAIApiKey")&&o.openAIApiKey.trim()!==""?!0:(chrome.runtime.openOptionsPage(),!1)};chrome.tabs.onUpdated.addListener((e,o,t)=>{var r;o.status==="complete"&&(b[e]={ready:!0,shown:((r=b[e])==null?void 0:r.shown)||!1},chrome.tabs.query({active:!0,currentWindow:!0},n=>{n.length>0&&n[0].id===e&&b[e].ready&&(setTimeout(()=>{w(t,!0)},100),b[e].shown=!0)}))});chrome.tabs.onActivated.addListener(e=>{chrome.tabs.get(e.tabId,o=>{const t=b[o.id];t&&t.ready&&!t.shown&&(setTimeout(()=>{w(o,!0)},100),b[o.id].shown=!0)})});chrome.tabs.onRemoved.addListener(e=>{delete b[e]});chrome.tabs.onUpdated.addListener((e,o,t)=>{o.status});const w=async(e,o=!1)=>{await M()&&(chrome.tabs.get(e.id,t=>{t.status,t.status==="loading"&&(o?chrome.tabs.onUpdated.addListener(A):chrome.tabs.onUpdated.addListener(C),chrome.scripting.executeScript({target:{tabId:e.id},func:N,injectImmediately:!0}))}),o?I(e,"popup-active-auto"):I(e))};chrome.action.onClicked.addListener(async e=>{w(e)});chrome.commands.onCommand.addListener(e=>{e==="_execute_action"&&chrome.tabs.query({active:!0,currentWindow:!0},o=>{const t=o[0];w(t)})});chrome.runtime.onInstalled.addListener(e=>{e.reason=="update",e.reason==="install"&&M()});let f;async function*D(e){const o=e.getReader();try{for(;;){const{done:t,value:r}=await o.read();if(t)return;yield r}}finally{o.releaseLock()}}const B=async(e,o)=>{const{onmessage:t,onerror:r}=o;if(!e.ok){r(e);return}const n=L(a=>{a.type==="event"&&t(a.data)});for await(const a of D(e.body)){const c=new TextDecoder().decode(a);n.feed(c)}},U=async(e,o)=>{try{f||(f=new AbortController);const{museOptions:t}=await chrome.storage.local.get(["museOptions"]);if(!t&&!t.openAIApiKey){e.postMessage({messageId:"error-fetch",errorContent:"fetch OpenAI API error: configuration uninitialized"}),console.error("fetch OpenAI API error: configuration uninitialized");return}const r=t,n=r.openAIModel||E.openAIModel,a=r.openAIApiKey,c=r.openAITemperature||E.openAITemperature;e.postMessage({messageId:"fetch-api-begin",options:{prompts:o,model:n,temperature:c}});const s=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({messages:o,model:`${n}`,temperature:c,stream:!0}),signal:f.signal});if(e.postMessage({messageId:"fetch-api-done",options:{prompts:o,model:n},apiResponse:s}),!s.ok)return console.error("error:fetch error,response:",s),e.postMessage({messageId:"error-fetch",errorContent:`fetch OpenAI API error,response:${s}`}),s;let x="";await B(s,{onmessage(y){if(y==="[DONE]")return e&&e.postMessage({messageId:"onmessage-done",chatContent:x}),s;let v;try{v=JSON.parse(y)}catch(d){return console.error("parsing msg to JSON fail"),e.postMessage({messageId:"error-parsing-json",errorContent:`parsing msg to JSON fail,error: ${d}`}),s}let p;v.choices&&v.choices[0].delta&&(p=v.choices[0].delta.content),p&&(x+=p,e.postMessage({messageId:"onmessage-receving",chatContent:x}))},onerror(y){e.postMessage({messageId:"error-onstreaming",errorContent:`on streaming error: ${y}`}),console.error("on streaming error:",y)}})}catch(t){t.message.includes("disconnected port")&&t.message.includes("port")?console.error("The port is disconnected"):e.postMessage({messageId:"error-onstreaming",errorContent:`on fetching error: ${t.message}, stack: ${t}`})}};chrome.runtime.onConnect.addListener(e=>{e.onMessage.addListener(o=>{if(o.task==="get-page-summary"){const t=o.prompts;U(e,t)}}),e.onDisconnect.addListener(()=>{f&&(f.abort(),f=void 0)})});chrome.runtime.onMessage.addListener((e,o,t)=>{if(e.method==="open-option-page"&&(chrome.runtime.openOptionsPage(),t()),e.method==="abort-fetching-openai"&&(f.abort(),f=void 0,t()),e.method==="http-fetch-text")return fetch(e.url,e.options).then(async r=>{if(!r.ok)throw console.error("HTTP error in background:",r),new Error(`HTTP error! status: ${r.status}, statusText: ${r.statusText}`);return await r.text()}).then(r=>{t({data:r})}).catch(r=>{t({error:r.message})}),!0;if(e.method==="http-fetch")return fetch(e.url,e.options).then(r=>{if(!r.ok)throw console.error("HTTP error in background:",r),new Error(`HTTP error! status: ${r.status}, statusText: ${r.statusText}`);return r.json()}).then(r=>{t({data:r})}).catch(r=>t({error:r.message})),!0});
