"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/dva-boot-admin/index.html","c73832e5c96661c70a2cb55b223ff814"],["/dva-boot-admin/static/css/main.d34db05f.css","49f51084a3d0115bdd2c5d847e3675b0"],["/dva-boot-admin/static/js/0.4e4a8eb9.chunk.js","be0113dfa31bae75039d4e58c096b647"],["/dva-boot-admin/static/js/1.5cbb08d8.chunk.js","37a3a4cf56a815f3b0c79d40b60f4189"],["/dva-boot-admin/static/js/10.ee2fe9f5.chunk.js","0ab97ba986c8f5d0bfc7104335dee4b2"],["/dva-boot-admin/static/js/11.f753d532.chunk.js","c7b9c0448771c00dec7704d1d18cf3ac"],["/dva-boot-admin/static/js/12.60833313.chunk.js","a7f58b44a73fc2cb43e31bad765ac5a4"],["/dva-boot-admin/static/js/13.4a2d18bb.chunk.js","6fbbd623b56dd1f09bfea32ff05f56f5"],["/dva-boot-admin/static/js/14.f3d84ca7.chunk.js","0b3b2330c13977803e4faab931457787"],["/dva-boot-admin/static/js/15.f2211eb6.chunk.js","04b019a74a46753d2bee842ea6ec27b5"],["/dva-boot-admin/static/js/16.c8b817a4.chunk.js","d52d20aa019e2b7dedceedf83dc2732d"],["/dva-boot-admin/static/js/17.21965236.chunk.js","1fd7a0060b8ff061db8b8c46908cbb30"],["/dva-boot-admin/static/js/18.57b03abf.chunk.js","96436cd14f8da064973f9cda61cf42fe"],["/dva-boot-admin/static/js/19.5c62e90d.chunk.js","2ae1a9bf7201bbc7ca4a77535ee6487e"],["/dva-boot-admin/static/js/2.fe84f2f4.chunk.js","cd9bf1a77f7fe7480e201449dec91a04"],["/dva-boot-admin/static/js/20.d6dc36d7.chunk.js","5e96060b74bb0e59463dff6066e97bad"],["/dva-boot-admin/static/js/21.c422def0.chunk.js","62d556303d696293b571f728ac9a3867"],["/dva-boot-admin/static/js/22.cf147dc7.chunk.js","c9cba3b5d5949f26454bde9751a5bf3e"],["/dva-boot-admin/static/js/23.fc8ffc75.chunk.js","d46cada9aeb36d9906c0676ae4e426a4"],["/dva-boot-admin/static/js/24.fc9c4e35.chunk.js","04f8a349322829da8f66d6f3255b77a3"],["/dva-boot-admin/static/js/25.b5c6d86d.chunk.js","cc37f7ef02e67485905862c728736801"],["/dva-boot-admin/static/js/26.01928d58.chunk.js","1e28f3f7425644aab46c30a9f0f8c997"],["/dva-boot-admin/static/js/27.d13dfb9b.chunk.js","8d8ea08c7116272c0c551235f08696cb"],["/dva-boot-admin/static/js/28.acda8dc3.chunk.js","646bf8e2cf17ec0576272c2a447a89ed"],["/dva-boot-admin/static/js/29.6188ce98.chunk.js","5d17d3fd28c1af7de9eebee7154583c2"],["/dva-boot-admin/static/js/3.17a99c2a.chunk.js","445adad83aff5650cd8da36892eb86f4"],["/dva-boot-admin/static/js/30.c9f0d2cf.chunk.js","898fbe9b2204fbe03b5b7905f8788c95"],["/dva-boot-admin/static/js/31.8f9f40c3.chunk.js","b2d7b7c8be6c332f6c3a4b7a044cceef"],["/dva-boot-admin/static/js/32.0d8f8879.chunk.js","9654763b2882aebc14c00a93f4b8b78e"],["/dva-boot-admin/static/js/33.c54b525c.chunk.js","a20e6b143468ac6301270ecb261a4408"],["/dva-boot-admin/static/js/34.85d435f9.chunk.js","ce6f62f2d0f154d4f625fd61bd954b72"],["/dva-boot-admin/static/js/35.9084d891.chunk.js","444aff3c655d4ff64881d3a13393c087"],["/dva-boot-admin/static/js/4.75fd9610.chunk.js","c2b0483a96dd1ec3bd4083c0ef65b2ae"],["/dva-boot-admin/static/js/5.e9a87757.chunk.js","27bb57a325bd82f43401d20ce778aa1b"],["/dva-boot-admin/static/js/6.fa270432.chunk.js","d10519d6e0047144052eaf805796a795"],["/dva-boot-admin/static/js/7.966853e2.chunk.js","21c5c413ebf7eac0491e1a44d37732da"],["/dva-boot-admin/static/js/8.936a48b2.chunk.js","f17830bb73f63955c1b6c806e3f03902"],["/dva-boot-admin/static/js/9.2d941d7f.chunk.js","31a377fb22eaed431e71b18f7c2149a4"],["/dva-boot-admin/static/js/main.904eb988.js","1808a3bef81fc8df7c1e57de9648e2b6"],["/dva-boot-admin/static/media/avatar.595f9bc9.jpg","595f9bc9380b1cad5f61fdec19cda60b"],["/dva-boot-admin/static/media/error.089007e7.gif","089007e721e1f22809c0313b670a36f1"],["/dva-boot-admin/static/media/icomoon.126e4331.woff","126e4331e53423d1abb4eccece156889"],["/dva-boot-admin/static/media/icomoon.2d91cfbf.eot","2d91cfbf8d15f00768ee253f34088290"],["/dva-boot-admin/static/media/icomoon.b2e5b09c.ttf","b2e5b09ce21940c5a6bef6b7717319a1"],["/dva-boot-admin/static/media/icomoon.c092c786.svg","c092c7869fb0f22d52658eb660e44a52"],["/dva-boot-admin/static/media/pattern.c4113510.png","c4113510cff7beeda3fb0f77f2919b63"],["/dva-boot-admin/static/media/topbar-bg.eef71d63.jpg","eef71d63d83b49c46d954e9f41e8ff5e"],["/dva-boot-admin/static/media/workers.3bb77abc.png","3bb77abcf801d53bbda8fe52e4c240b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(a){if(!a.redirected)return Promise.resolve(a);return("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})})},createCacheKey=function(a,e,t,c){var n=new URL(a);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,e){var t=new URL(a);return t.hash="",t.search=t.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!e.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(t){return Promise.all(t.map(function(t){if(!e.has(t.url))return a.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/dva-boot-admin/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});