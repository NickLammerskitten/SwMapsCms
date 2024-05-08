(function(){var e={186:function(){},925:function(){},57:function(e,t,n){var r=n(186);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("59472e1f",r,!0,{})},59:function(e,t,n){var r=n(925);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("23cd66aa",r,!0,{})},346:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},s=0;s<t.length;s++){var o=t[s],a=o[0],i={id:e+":"+s,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(i):n.push(r[a]={id:a,parts:[i]})}return n}n.d(t,{Z:function(){return f}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,p=!1,c=function(){},d=null,u="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,s){p=n,d=s||{};var a=r(e,t);return m(a),function(t){for(var n=[],s=0;s<a.length;s++){var i=o[a[s].id];i.refs--,n.push(i)}t?m(a=r(e,t)):a=[];for(var s=0;s<n.length;s++){var i=n[s];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete o[i.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(v(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],s=0;s<n.parts.length;s++)a.push(v(n.parts[s]));o[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+u+'~="'+e.id+'"]');if(r){if(p)return c;r.parentNode.removeChild(r)}if(g){var s=l++;t=w.bind(null,r=i||(i=h()),s,!1),n=w.bind(null,r,s,!0)}else t=b.bind(null,r=h()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function w(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,s);else{var o=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function b(e,t){var n=t.css,r=t.media,s=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(u,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="bundles/swmapscms/",window?.__sw__?.assetPath&&(n.p=window.__sw__.assetPath+"/bundles/swmapscms/"),n(57),Shopware.Component.register("sw-cms-block-googleMaps",{template:'{% block sw_cms_block_googleMaps %}\n    <div>\n        <h2>Junges Gemuese</h2>\n\n        {% if imageUrl != \'\' %}\n            <img alt="Map"\n                border="0"\n                :src="imageUrl">\n        {% else %}\n            <h2>No URL given</h2>\n        {% endif %}\n    </div>\n{% endblock %}',inject:["systemConfigApiService"],props:{googleMapsApiKey:{type:String,required:!0}},data(){return{googleMapsApiKey:null,imageUrl:""}},created(){this.getImageUrl().then(e=>this.imageUrl=e)},methods:{async fetchApiKey(){return(await this.systemConfigApiService.getValues("SwMapsCms.config",null))["SwMapsCms.config.googleMapsApiKey"]},async getImageUrl(){return await this.fetchApiKey().then(e=>{this.googleMapsApiKey=e;let t={center:"51.920960,7.603800",zoom:14,size:"450x450",markers:"color:green%7Clabel:Junges Gemuese%7C51.920960,7.603800",key:this.googleMapsApiKey},n=new URLSearchParams(t);return`https://maps.googleapis.com/maps/api/staticmap?${n.toString()}`})}}}),n(59),Shopware.Component.register("sw-cms-preview-googleMaps",{template:'{% block sw_cms_block_googleMaps_preview %}\n    <div class="sw-cms-block-preview-googleMaps">\n            Google Maps Einbindung\n    </div>\n{% endblock %}'}),Shopware.Service("cmsService").registerCmsBlock({name:"googleMaps",category:"maps",label:"Google Maps",component:"sw-cms-block-googleMaps",previewComponent:"sw-cms-preview-googleMaps",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{}})})();