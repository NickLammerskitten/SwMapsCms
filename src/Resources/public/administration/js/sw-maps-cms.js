(function(){var e={769:function(){},186:function(){},925:function(){},942:function(e,n,o){var t=o(769);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),o(346).Z("73d2a1f9",t,!0,{})},57:function(e,n,o){var t=o(186);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),o(346).Z("59472e1f",t,!0,{})},59:function(e,n,o){var t=o(925);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),o(346).Z("23cd66aa",t,!0,{})},346:function(e,n,o){"use strict";function t(e,n){for(var o=[],t={},r=0;r<n.length;r++){var s=n[r],a=s[0],i={id:e+":"+r,css:s[1],media:s[2],sourceMap:s[3]};t[a]?t[a].parts.push(i):o.push(t[a]={id:a,parts:[i]})}return o}o.d(n,{Z:function(){return m}});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,c=!1,p=function(){},d=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,n,o,r){c=o,d=r||{};var a=t(e,n);return g(a),function(n){for(var o=[],r=0;r<a.length;r++){var i=s[a[r].id];i.refs--,o.push(i)}n?g(a=t(e,n)):a=[];for(var r=0;r<o.length;r++){var i=o[r];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete s[i.id]}}}}function g(e){for(var n=0;n<e.length;n++){var o=e[n],t=s[o.id];if(t){t.refs++;for(var r=0;r<t.parts.length;r++)t.parts[r](o.parts[r]);for(;r<o.parts.length;r++)t.parts.push(h(o.parts[r]));t.parts.length>o.parts.length&&(t.parts.length=o.parts.length)}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(h(o.parts[r]));s[o.id]={id:o.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function h(e){var n,o,t=document.querySelector("style["+u+'~="'+e.id+'"]');if(t){if(c)return p;t.parentNode.removeChild(t)}if(f){var r=l++;n=b.bind(null,t=i||(i=v()),r,!1),o=b.bind(null,t,r,!0)}else n=y.bind(null,t=v()),o=function(){t.parentNode.removeChild(t)};return n(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap)&&n(e=t):o()}}var w=function(){var e=[];return function(n,o){return e[n]=o,e.filter(Boolean).join("\n")}}();function b(e,n,o,t){var r=o?"":t.css;if(e.styleSheet)e.styleSheet.cssText=w(n,r);else{var s=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(s,a[n]):e.appendChild(s)}}function y(e,n){var o=n.css,t=n.media,r=n.sourceMap;if(t&&e.setAttribute("media",t),d.ssrId&&e.setAttribute(u,n.id),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={id:t,exports:{}};return e[t](s,s.exports,o),s.exports}o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="bundles/swmapscms/",window?.__sw__?.assetPath&&(o.p=window.__sw__.assetPath+"/bundles/swmapscms/"),o(942),Shopware.Component.register("sw-cms-component-googleMaps",{template:'{% block sw_cms_block_googleMaps %}\n    <div class="sw-cms-component-googleMaps">\n        <div class="sw-cms-component-googleMaps-iframe-wrapper">\n            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d575.516626333143!2d7.602092832119301!3d51.92038448773828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9a56b3975b279%3A0xdb3097b8a3a7f89!2sJunges%20Gem%C3%BCse!5e0!3m2!1sde!2sde!4v1714475164536!5m2!1sde!2sde"\n                style="border:0;"\n                allowfullscreen=""\n                loading="lazy"\n                referrerpolicy="no-referrer-when-downgrade">\n            </iframe>\n        </div>\n    </div>\n{% endblock %}'}),o(57),Shopware.Component.register("sw-cms-block-googleMaps",{template:"{% block sw_cms_block_googleMaps %}\n    <sw-cms-component-googleMaps />\n{% endblock %}"}),o(59),Shopware.Component.register("sw-cms-preview-googleMaps",{template:'{% block sw_cms_block_googleMaps_preview %}\n    <div class="sw-cms-block-preview-googleMaps">\n            Google Maps Einbindung\n    </div>\n{% endblock %}'}),Shopware.Service("cmsService").registerCmsBlock({name:"googleMaps",category:"maps",label:"Google Maps",component:"sw-cms-block-googleMaps",previewComponent:"sw-cms-preview-googleMaps",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{}})})();