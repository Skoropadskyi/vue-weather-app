(function(){"use strict";var e={261:function(e,t,a){var i=a(5130),s=a(6768);const r={class:"wrapper-bg"};function o(e,t,a,i,o,n){const l=(0,s.g2)("HeaderSite"),c=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bF)(l),(0,s.bF)(c)])}const n=e=>((0,s.Qi)("data-v-0ef722a1"),e=e(),(0,s.jt)(),e),l=n((()=>(0,s.Lk)("a",{href:"#",class:"logo"},"Weather",-1))),c=[l];function d(e,t,a,i,r,o){return(0,s.uX)(),(0,s.CE)("header",null,c)}var h={name:"HeaderSite"},u=a(1241);const p=(0,u.A)(h,[["render",d],["__scopeId","data-v-0ef722a1"]]);var m=p,g={components:{HeaderSite:m}};const y=(0,u.A)(g,[["render",o]]);var v=y,f=a(1387),C=a(4232);const b={class:"container"},w={class:"form"},k={key:0,class:"result-list"},M={key:0,class:"result-list__text"},_={key:1,class:"result-list__text"},S=["onClick"];function x(e,t,a,r,o,n){const l=(0,s.g2)("CardWeather");return(0,s.uX)(),(0,s.CE)("div",b,[(0,s.Lk)("form",w,[(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.searchCity=e),onInput:t[1]||(t[1]=(...e)=>n.getSearchCity&&n.getSearchCity(...e)),placeholder:"Пошук міста"},null,544),[[i.Jo,o.searchCity]]),o.mapboxSearchCity?((0,s.uX)(),(0,s.CE)("ul",k,[o.errorSearch?((0,s.uX)(),(0,s.CE)("p",M," Щось пішло не так, спробуйте ще раз. ")):(0,s.Q3)("",!0),o.errorSearch||0!==o.mapboxSearchCity.length?((0,s.uX)(!0),(0,s.CE)(s.FK,{key:2},(0,s.pI)(o.mapboxSearchCity,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:"result-list__text cursor",onClick:t=>n.coordinatesCity(e)},(0,C.v_)(e.place_name),9,S)))),128)):((0,s.uX)(),(0,s.CE)("p",_," Немає результатів, що відповідають вашому запиту. "))])):(0,s.Q3)("",!0)]),(0,s.bF)(l,{weather:o.weather},null,8,["weather"])])}var L=a(4373);const A=e=>((0,s.Qi)("data-v-4625d323"),e=e(),(0,s.jt)(),e),E={key:0,class:"wrapper"},I={key:0,class:"card-wrapper"},V=A((()=>(0,s.Lk)("div",{class:"block-plus"},[(0,s.Lk)("div",{class:"plus"},"+")],-1))),O=[V],X={key:1,class:"card-wrapper"},j={class:"city-name"},W={class:"current-temp"},T={class:"weather-desc"},$={class:"wrapper-temp"},F=["src"],H=A((()=>(0,s.Lk)("h3",{class:"title-chart"},"Погодинна погода",-1))),J=["id"],Q=["onClick"],R={class:"city-name"},N={class:"current-temp"},q={class:"weather-desc"},D={class:"wrapper-temp"},P=["src"],z=A((()=>(0,s.Lk)("h3",{class:"title-chart"},"Погодинна погода",-1))),B=["id"];function Z(e,t,a,i,r,o){const n=(0,s.g2)("Modal"),l=(0,s.g2)("ModalAdd");return r.getCitiesStorage.length>=0&&null!==r.getCitiesStorage?((0,s.uX)(),(0,s.CE)("div",E,[r.getCitiesStorage.length<=4?((0,s.uX)(),(0,s.CE)("div",I,O)):(0,s.Q3)("",!0),null!==a.weather?((0,s.uX)(),(0,s.CE)("div",X,[(0,s.Lk)("p",{class:"card-add",onClick:t[0]||(t[0]=e=>o.addCity())},"Додати"),(0,s.Lk)("p",j,(0,C.v_)(a.weather.name),1),(0,s.Lk)("h1",W,(0,C.v_)(Math.round(a.weather.main.temp))+"°",1),(0,s.Lk)("p",T,(0,C.v_)(a.weather.weather[0].description),1),(0,s.Lk)("div",$,[(0,s.Lk)("p",null,"Max: "+(0,C.v_)(Math.round(a.weather.main.temp_max))+"°",1),(0,s.Lk)("p",null,"Min: "+(0,C.v_)(Math.round(a.weather.main.temp_min))+"°",1)]),(0,s.Lk)("img",{class:"w-[150px] h-auto",src:`http://openweathermap.org/img/wn/${a.weather.weather[0].icon}@2x.png`,alt:""},null,8,F),(0,s.Lk)("div",null,[H,(0,s.Lk)("canvas",{style:{width:"360px"},id:a.weather.name},null,8,J)])])):(0,s.Q3)("",!0),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.savedCities,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"card-wrapper saved-city"},[(0,s.Lk)("p",{class:"card-add",onClick:t=>o.showRemoveModal(e.name)},"Видалити",8,Q),(0,s.Lk)("p",R,(0,C.v_)(e.name),1),(0,s.Lk)("h1",N,(0,C.v_)(Math.round(e.main.temp))+"°",1),(0,s.Lk)("p",q,(0,C.v_)(e.weather[0].description),1),(0,s.Lk)("div",D,[(0,s.Lk)("p",null,"Max: "+(0,C.v_)(Math.round(e.main.temp_max))+"°",1),(0,s.Lk)("p",null,"Min: "+(0,C.v_)(Math.round(e.main.temp_min))+"°",1)]),(0,s.Lk)("img",{class:"w-[150px] h-auto",src:`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,alt:""},null,8,P),(0,s.Lk)("div",null,[z,(0,s.Lk)("canvas",{style:{width:"360px"},id:e.name},null,8,B)])])))),128)),r.isModalVisible?((0,s.uX)(),(0,s.Wv)(n,{key:2,isVisible:r.isModalVisible,title:"Підтвердіть видалення",message:"Ви дійсно хочете видалити це місто?",onConfirm:o.removeCity,onCancel:o.hideRemoveModal},null,8,["isVisible","onConfirm","onCancel"])):(0,s.Q3)("",!0),r.isModalMaxVisible?((0,s.uX)(),(0,s.Wv)(l,{key:3,isVisible:r.isModalMaxVisible,title:"Максимальна кількість міст",message:"Ви можете додати максимум 5 міст. Видаліть одне з існуючих міст.",onCancel:o.hideMaxCityModal},null,8,["isVisible","onCancel"])):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0)}a(4114);var K=a(3456);const U={key:0,class:"modal-overlay"},Y={class:"modal"},G={style:{"padding-bottom":"15px"}};function ee(e,t,a,i,r,o){return a.isVisible?((0,s.uX)(),(0,s.CE)("div",U,[(0,s.Lk)("div",Y,[(0,s.Lk)("h3",G,(0,C.v_)(a.title),1),(0,s.Lk)("p",null,(0,C.v_)(a.message),1),(0,s.Lk)("a",{class:"gradient-button red",onClick:t[0]||(t[0]=(...e)=>o.confirm&&o.confirm(...e))},"Видалити"),(0,s.Lk)("a",{class:"gradient-button green",onClick:t[1]||(t[1]=(...e)=>o.cancel&&o.cancel(...e))},"Скасувати")])])):(0,s.Q3)("",!0)}var te={name:"ModalDelete",props:["isVisible","title","message"],methods:{confirm(){this.$emit("confirm")},cancel(){this.$emit("cancel")}}};const ae=(0,u.A)(te,[["render",ee],["__scopeId","data-v-faab1fd2"]]);var ie=ae;const se={key:0,class:"modal-overlay"},re={class:"modal"},oe={style:{"padding-bottom":"15px"}};function ne(e,t,a,i,r,o){return a.isVisible?((0,s.uX)(),(0,s.CE)("div",se,[(0,s.Lk)("div",re,[(0,s.Lk)("h3",oe,(0,C.v_)(a.title),1),(0,s.Lk)("p",null,(0,C.v_)(a.message),1),(0,s.Lk)("a",{class:"gradient-button",onClick:t[0]||(t[0]=(...e)=>o.cancel&&o.cancel(...e))},"Скасувати")])])):(0,s.Q3)("",!0)}var le={name:"ModalAdd",props:["isVisible","title","message"],methods:{cancel(){this.$emit("cancel")}}};const ce=(0,u.A)(le,[["render",ne],["__scopeId","data-v-5a053e34"]]);var de=ce,he={name:"CardWeather",components:{ModalAdd:de,Modal:ie},props:["weather"],data(){return{savedCities:[],getCitiesStorage:[],forecast:null,isModalVisible:!1,isModalMaxVisible:!1,cityToRemove:null}},async created(){null!==localStorage.getItem("savedCities")&&(this.getCitiesStorage=JSON.parse(localStorage.getItem("savedCities")),this.getSavedCitiesWeather())},methods:{async addCity(){let e=JSON.parse(localStorage.getItem("savedCities"))||[];e.length<5?(e.push(this.weather.name),localStorage.setItem("savedCities",JSON.stringify(e)),window.location.reload()):this.showMaxCityModal()},showRemoveModal(e){this.cityToRemove=e,this.isModalVisible=!0},showMaxCityModal(){this.isModalMaxVisible=!0},hideRemoveModal(){this.isModalVisible=!1,this.cityToRemove=null},hideMaxCityModal(){this.isModalMaxVisible=!1},removeCity(){let e=JSON.parse(localStorage.getItem("savedCities"))||[];e=e.filter((e=>e!==this.cityToRemove)),localStorage.setItem("savedCities",JSON.stringify(e)),this.getSavedCitiesWeather(),this.hideRemoveModal(),window.location.reload()},async getSavedCitiesWeather(){let e=[];for(let t of this.getCitiesStorage){const a=await L.A.get(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=942c0d4e498af8f5f472ad47e9cc2358&units=metric&lang=ua`);e.push(a.data)}this.savedCities=e,this.getHourlyForecast()},async getHourlyForecast(){for(let e of this.getCitiesStorage){const t=await L.A.get(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=942c0d4e498af8f5f472ad47e9cc2358&units=metric&lang=ua`),a=t.data.list.slice(0,9),i=a.map((e=>new Date(1e3*e.dt).getHours())),s=a.map((e=>e.main.temp)),r=document.getElementById(e);new K.Ay(r,{type:"line",data:{labels:i,datasets:[{label:"Температура повітря, °C",data:s,borderWidth:1,backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 255, 255, 0.5)",color:"rgba(255, 255, 255, 1)"}]},options:{scales:{y:{beginAtZero:!0}}}})}}}};const ue=(0,u.A)(he,[["render",Z],["__scopeId","data-v-4625d323"]]);var pe=ue,me={name:"HomeView",components:{CardWeather:pe},data(){return{weather:null,searchCity:"",queryTimeout:null,mapboxSearchCity:null,errorSearch:null,lat:"",lon:"",myLineChart:null,forecast:null}},methods:{async getSearchCity(){clearTimeout(this.queryTimeout),this.queryTimeout=setTimeout((async()=>{if(""!==this.searchCity)try{const e=await L.A.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchCity}.json?access_token=pk.eyJ1Ijoib2xlZy1zMzEiLCJhIjoiY2x5NXNscm02MDJkOTJzc2F3dm83eWIwdiJ9.ASYS41xvI-m9yRWUhAHlaA&types=place`);this.mapboxSearchCity=e.data.features}catch{this.errorSearch=!0}}),300)},coordinatesCity(e){this.lat=e.geometry.coordinates[1],this.lon=e.geometry.coordinates[0],this.lat&&""!==this.lon&&(this.getWeather(),this.searchCity="",this.mapboxSearchCity=null)},async getWeather(){try{const e=await L.A.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=942c0d4e498af8f5f472ad47e9cc2358&units=metric&lang=ua`);this.weather=e.data,this.getHourlyForecast()}catch(e){console.log(e)}},async getHourlyForecast(){this.forecast=await L.A.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=942c0d4e498af8f5f472ad47e9cc2358&units=metric&lang=ua`),this.myLineChart?(this.myLineChart.destroy(),this.addChart()):this.addChart()},addChart(){const e=this.forecast.data.list.slice(0,9),t=e.map((e=>new Date(1e3*e.dt).getHours())),a=e.map((e=>e.main.temp)),i=document.getElementById(this.weather.name);this.myLineChart=new K.Ay(i,{type:"line",data:{labels:t,datasets:[{label:"Температура повітря, °C",data:a,borderWidth:1,backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 255, 255, 0.5)",color:"rgba(255, 255, 255, 1)"}]},options:{scales:{y:{beginAtZero:!0}}}})}}};const ge=(0,u.A)(me,[["render",x],["__scopeId","data-v-1c390db8"]]);var ye=ge;const ve=[{path:"/",name:"home",component:ye}],fe=(0,f.aE)({history:(0,f.Bt)(),routes:ve});var Ce=fe,be=a(782),we=(0,be.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.Ef)(v).use(we).use(Ce).mount("#app")}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,r){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],r=e[d][2];for(var n=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(n=!1,r<o&&(o=r));if(n){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,o=i[0],n=i[1],l=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(l)var d=l(a)}for(t&&t(i);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},i=self["webpackChunkweather_project_test"]=self["webpackChunkweather_project_test"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(261)}));i=a.O(i)})();
//# sourceMappingURL=app.c0224dfe.js.map