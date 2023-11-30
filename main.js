(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"db983a0922633a90aa73.svg",n=t.p+"c23e7855e1cb8ac7c36d.svg",a=t.p+"91c54d35a1d823193fe7.svg",o=t.p+"ba3686e4a3d64a9dc5cf.svg",c=t.p+"4843a199da459ce5d58c.svg",i=t.p+"9858829fbac6db396ed7.svg",r=t.p+"7c3d1014174434d5d708.svg",s=t.p+"9f89c012c14bc7187187.svg",d=t.p+"90fd14198e4b9af0dd81.svg",u=t.p+"27d773eaaa631862b96f.svg",l=t.p+"41a01da10b2c84abde09.svg",m=t.p+"14b8fdcb58e3ad112ec3.svg",h={Ash:{icon:e},Clear:{day:{icon:n},night:{icon:a}},Clouds:{icon:o},Drizzle:{icon:c},Dust:{icon:i},Sand:{icon:i},Haze:{icon:r},Fog:{icon:r},Mist:{icon:s},Rain:{icon:d},Smoke:{icon:u},Snow:{icon:l},Squall:{icon:m},Tornado:{icon:m},Thunderstorm:{icon:t.p+"989e9cae9a9800e23f85.svg"}};function p(t,e="d"){return"Clear"===t?"d"===e?h[t].day.icon:h[t].night.icon:h[t].icon}const y={LocationNotFound:1,LocationSearchEmpty:2},g=document.getElementById("error");function f(t){switch(t){case y.LocationNotFound:g.style.height="40px",g.textContent="Location not found";break;case y.LocationSearchEmpty:g.style.height="40px",g.textContent="Cannot be empty!"}}function w(){g.style.height="0px",g.textContent=""}function v(t,e){return new Date(t).toLocaleDateString("en-US",{weekday:e})}class b{constructor(){this.location="",this.description="",this.pressure=0,this.humidity=0,this.windSpeed=0,this.temperature=0,this.weatherIcon=""}}class C{constructor(){this.temperature=0,this.fullDayName="",this.shortDayNam="",this.weatherIcon=""}}const E=document.getElementsByClassName("info-small"),x=document.getElementById("temperature"),N=document.getElementsByClassName("week-day"),S=document.getElementsByClassName("icon"),$=document.getElementById("location"),D=document.getElementsByClassName("icon")[0],I=document.getElementsByClassName("column");function B(t,e){E[e].textContent=`${t.temperature}°C`,N[e].children[0].textContent=t.fullDayName,N[e].children[1].textContent=t.ShortDayName,S[e+1].children[0].src=t.weatherIcon}const L="6af93c0daeb0749c5631a37be0ef4bc8";async function T(t,e="metric"){let n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=${e}&appid=${L}`;try{const t=await fetch(n,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(`Invalid query - ${t.message}`)}catch(t){throw t}}async function k(t,e="metric"){let n=`https://api.openweathermap.org/data/2.5/forecast?q=${t}&units=${e}&appid=${L}`;try{const t=await fetch(n,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(`Invalid query - ${t.message}`)}catch(t){throw t}}async function q(t="Tallinn"){try{const[n,a]=await Promise.all([T(t),k(t)]);(function(t){$.textContent=t.location,I[0].children[1].textContent=t.description,I[1].textContent=`Pressure: ${t.pressure}`,I[2].textContent=`Humidity: ${t.humidity}%`,I[3].textContent=`Wind: ${t.windSpeed}`,x.textContent=`${t.temperature}°C`,D.children[0].src=t.weatherIcon})((e=function(t){let e=new b,n=[];e.location=t[0].name,e.description=t[0].weather[0].description,e.pressure=t[0].main.pressure,e.humidity=t[0].main.humidity,e.windSpeed=t[0].wind.speed,e.temperature=Math.round(t[0].main.temp),e.weatherIcon=p(t[0].weather[0].main);for(let e=8;e<40;e+=8){let o=new C,c=t[1].list.slice(e,e+8);o.temperature=Math.round((a=c,Math.max(...a.map((t=>t.main.temp))))),o.fullDayName=v(1e3*c[0].dt,"long"),o.shortDayName=v(1e3*c[0].dt,"short"),o.weatherIcon=p(c[0].weather[0].main),n.push(o)}var a;return{currentDay:e,forecastDays:n}}([n,a])).currentDay),function(t){for(let e=0;e<4;e++)B(t[e],e)}(e.forecastDays)}catch(t){n=t,console.log(n),f(y.LocationNotFound),setTimeout(w,1700)}var e,n}const F=document.getElementsByName("Location")[0];document.getElementById("search-btn").addEventListener("click",(t=>async function(t){t.stopPropagation(),t.preventDefault(),F.validity.valueMissing&&(f(y.LocationSearchEmpty),setTimeout(w,1700),1)||await q(F.value),F.value=""}(t))),q()})();