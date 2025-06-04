import{i as n,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",h="50666263-41be0f694eb808efe4a214ed6";function p(o){const s=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function d(o){return o.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:r,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${s}" alt="${i}" width="360" height="200" />
          </a>
          <ul class="info-list">
              <li class="info-item">
                <h3 class="item-title">Likes</h3>
                <p class="item-descr">${e}</p>
              </li>
              <li class="info-item">
                <h3 class="item-title">Views</h3>
                <p class="item-descr">${r}</p>
              </li>
              <li class="info-item">
                <h3 class="item-title">Comments</h3>
                <p class="item-descr">${l}</p>
              </li>
              <li class="info-item">
                <h3 class="item-title">Downloads</h3>
                <p class="item-descr">${u}</p>
              </li>
            </ul>
        </li>
    `).join("")}const a=document.querySelector(".loader-js"),g=document.querySelector(".form-js"),y=document.querySelector(".input-js"),c=document.querySelector(".gallery-js");g.addEventListener("submit",b);function b(o){o.preventDefault(),c.innerHTML="";const s=y.value.trim();if(!s){n.show({message:"Sorry, the request cannot be empty. Please try again...",position:"topRight",closeOnClick:!0,progressBar:!1,messageColor:"white",backgroundColor:"#ef4040"});return}a.style.display="block",p(s).then(t=>{if(!t.hits.length){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnClick:!0,progressBar:!1,messageColor:"white",backgroundColor:"#ef4040"});return}console.log(t.hits),c.insertAdjacentHTML("beforeend",d(t.hits)),new m(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt"}).refresh()}).catch(t=>n.show({title:"X",message:`${t.message}`,position:"center",color:"red"})).finally(()=>{o.target.reset(),a.style.display="none"})}
//# sourceMappingURL=index.js.map
