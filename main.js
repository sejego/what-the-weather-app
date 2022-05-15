(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"db983a0922633a90aa73.svg",n=e.p+"c23e7855e1cb8ac7c36d.svg",c=e.p+"91c54d35a1d823193fe7.svg",a=e.p+"ba3686e4a3d64a9dc5cf.svg",o=e.p+"4843a199da459ce5d58c.svg",i=e.p+"9858829fbac6db396ed7.svg",s=e.p+"7c3d1014174434d5d708.svg",r=e.p+"9f89c012c14bc7187187.svg",d=e.p+"90fd14198e4b9af0dd81.svg",u=e.p+"27d773eaaa631862b96f.svg",m=e.p+"41a01da10b2c84abde09.svg",l=e.p+"14b8fdcb58e3ad112ec3.svg",p={Ash:{icon:t},Clear:{day:{icon:n},night:{icon:c}},Clouds:{icon:a},Drizzle:{icon:o},Dust:{icon:i},Sand:{icon:i},Haze:{icon:s},Fog:{icon:s},Mist:{icon:r},Rain:{icon:d},Smoke:{icon:u},Snow:{icon:m},Squall:{icon:l},Tornado:{icon:l},Thunderstorm:{icon:e.p+"989e9cae9a9800e23f85.svg"}};document.getElementsByClassName("info-small");const g=document.getElementById("temperature"),f=(document.getElementsByClassName("week-day"),document.getElementsByClassName("icons"),document.getElementById("location")),h=document.getElementsByClassName("icon")[0],y=document.getElementsByClassName("column");const b=document.querySelector("span.error");function v(e){switch(e){case 1:b.textContent="Location not found";break;case 2:b.textContent="Cannot be empty!"}}function w(){b.textContent=""}const C=document.getElementsByName("Location")[0],E=document.getElementById("search-btn");C.addEventListener("input",(function(e){C.validity.valueMissing&&(v(2),setTimeout(w,2500))})),E.addEventListener("click",(async function(){await async function(e="Los Angeles",t="metric"){let n=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&appid=6af93c0daeb0749c5631a37be0ef4bc8`;try{const e=await fetch(n,{mode:"cors"});if(200==e.status)return await e.json();throw new Error(`Invalid query - ${e.message}`)}catch(e){return e}}(C.value).then((e=>{!function(e){!function(e){f.textContent=e.name,y[0].textContent=`Currently: ${e.weather[0].description}`,y[1].textContent=`Pressure: ${e.main.pressure}`,y[2].textContent=`Humidity: ${e.main.humidity}%`,y[3].textContent=`Wind: ${e.wind.speed}`;let t=Math.round(e.main.temp);g.textContent=`${t}°C`,h.children[0].src=function(e,t="d"){return"Clear"===e?"d"===t?p[e].day.icon:p[e].night.icon:p[e].icon}(e.weather[0].main)}(e)}(e)})).catch((e=>{v(1),setTimeout(w,2500)}))}),!1)})();