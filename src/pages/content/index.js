const u="modulepreload",m=function(s){return"/"+s},i={},d=function(t,o,f){return!o||o.length===0?t():Promise.all(o.map(e=>{if(e=m(e),e in i)return;i[e]=!0;const n=e.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":u,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((l,a)=>{r.addEventListener("load",l),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())};d(()=>{(t=>import(t))("../../../assets/js/app_index.9a66a939.js")},[]);
