if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const r=e=>s(e,n),f={module:{uri:n},exports:t,require:r};a[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/RHYxPHZL-hhpz2FOKLdYF/_buildManifest.js",revision:"51a079fe9cd49e2c08c6251715dd00bc"},{url:"/_next/static/RHYxPHZL-hhpz2FOKLdYF/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/RHYxPHZL-hhpz2FOKLdYF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/114-9eb44649011371ed.js",revision:"9eb44649011371ed"},{url:"/_next/static/chunks/140-5d732b16c9d12ef0.js",revision:"5d732b16c9d12ef0"},{url:"/_next/static/chunks/145-14de3bba5a7fb9eb.js",revision:"14de3bba5a7fb9eb"},{url:"/_next/static/chunks/167.8fcd6bd4fe817753.js",revision:"8fcd6bd4fe817753"},{url:"/_next/static/chunks/189-9e6ae073d3fea3a2.js",revision:"9e6ae073d3fea3a2"},{url:"/_next/static/chunks/192-59f9ad5fd4691fc6.js",revision:"59f9ad5fd4691fc6"},{url:"/_next/static/chunks/207-03949eae0de205b7.js",revision:"03949eae0de205b7"},{url:"/_next/static/chunks/29107295-1494f237b9e407ad.js",revision:"1494f237b9e407ad"},{url:"/_next/static/chunks/322-1b7ba3fc2b70063d.js",revision:"1b7ba3fc2b70063d"},{url:"/_next/static/chunks/48-9af363df033839dd.js",revision:"9af363df033839dd"},{url:"/_next/static/chunks/491-f3f47344bec1eca8.js",revision:"f3f47344bec1eca8"},{url:"/_next/static/chunks/536-11e080cc496e465f.js",revision:"11e080cc496e465f"},{url:"/_next/static/chunks/542-087de2f42acfd80e.js",revision:"087de2f42acfd80e"},{url:"/_next/static/chunks/556-c18b445b81130df2.js",revision:"c18b445b81130df2"},{url:"/_next/static/chunks/682-91fea667ecbc0bfa.js",revision:"91fea667ecbc0bfa"},{url:"/_next/static/chunks/75fc9c18-c7bf0df5a4fee36b.js",revision:"c7bf0df5a4fee36b"},{url:"/_next/static/chunks/764-c427d2c2141616c0.js",revision:"c427d2c2141616c0"},{url:"/_next/static/chunks/832-88d627f82bdaa5b4.js",revision:"88d627f82bdaa5b4"},{url:"/_next/static/chunks/872-22ff7ed0a277bdd9.js",revision:"22ff7ed0a277bdd9"},{url:"/_next/static/chunks/873-5721a0f8447ee957.js",revision:"5721a0f8447ee957"},{url:"/_next/static/chunks/939-f97098fc089054a7.js",revision:"f97098fc089054a7"},{url:"/_next/static/chunks/953-86d66a87337d1fae.js",revision:"86d66a87337d1fae"},{url:"/_next/static/chunks/eabe11fc.566c91326f1737f6.js",revision:"566c91326f1737f6"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"bb5c596eafb42b22"},{url:"/_next/static/chunks/main-a6275548926825f2.js",revision:"a6275548926825f2"},{url:"/_next/static/chunks/pages/_app-a6468f5714aa4c3a.js",revision:"a6468f5714aa4c3a"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"a3f18418a2205cb8"},{url:"/_next/static/chunks/pages/crews-705c4e8828b9eef4.js",revision:"705c4e8828b9eef4"},{url:"/_next/static/chunks/pages/crews/%5BcrewId%5D-3140e02b51d2b9fd.js",revision:"3140e02b51d2b9fd"},{url:"/_next/static/chunks/pages/crews/%5BcrewId%5D/chat-cd47c0cca42b676c.js",revision:"cd47c0cca42b676c"},{url:"/_next/static/chunks/pages/crews/%5BcrewId%5D/edit-26cb5775377f336b.js",revision:"26cb5775377f336b"},{url:"/_next/static/chunks/pages/crews/write-e8cc7fa58b56191a.js",revision:"e8cc7fa58b56191a"},{url:"/_next/static/chunks/pages/findid-a31ad9d2bc04a598.js",revision:"a31ad9d2bc04a598"},{url:"/_next/static/chunks/pages/findpw-bfe686282d36b74a.js",revision:"bfe686282d36b74a"},{url:"/_next/static/chunks/pages/index-b789ba0f4f266c95.js",revision:"b789ba0f4f266c95"},{url:"/_next/static/chunks/pages/join-9774936511ff27fc.js",revision:"9774936511ff27fc"},{url:"/_next/static/chunks/pages/login-241c3bf48e024ee3.js",revision:"241c3bf48e024ee3"},{url:"/_next/static/chunks/pages/mypage-a345fac79a6468d3.js",revision:"a345fac79a6468d3"},{url:"/_next/static/chunks/pages/mypage/applylist-4c4f50562eedd2e9.js",revision:"4c4f50562eedd2e9"},{url:"/_next/static/chunks/pages/mypage/chargelist-4dec153a5f85ed92.js",revision:"4dec153a5f85ed92"},{url:"/_next/static/chunks/pages/mypage/pickedlist-3976f31a37ee4c6a.js",revision:"3976f31a37ee4c6a"},{url:"/_next/static/chunks/pages/mypage/updateinfo-beb9616a6a386f27.js",revision:"beb9616a6a386f27"},{url:"/_next/static/chunks/pages/mypage/uploadlist-c1c7b185ea2f8bc2.js",revision:"c1c7b185ea2f8bc2"},{url:"/_next/static/chunks/pages/mypage/uselist-eae18dd5da71c17c.js",revision:"eae18dd5da71c17c"},{url:"/_next/static/chunks/pages/reviews-5d4d4683b75c65e0.js",revision:"5d4d4683b75c65e0"},{url:"/_next/static/chunks/pages/reviews/write-29f0f9c577a56e7c.js",revision:"29f0f9c577a56e7c"},{url:"/_next/static/chunks/pages/social-52c0313c0cdaf6da.js",revision:"52c0313c0cdaf6da"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-154c8631caa3a9b0.js",revision:"154c8631caa3a9b0"},{url:"/_next/static/css/9acd28ac2c8f7c22.css",revision:"9acd28ac2c8f7c22"},{url:"/_next/static/css/c5b29dc406dcd07e.css",revision:"c5b29dc406dcd07e"},{url:"/fonts/Pretendard-Bold.woff",revision:"d93573b4d0c2d6b0cd2df2eb87a1d677"},{url:"/fonts/Pretendard-ExtraBold.woff",revision:"89373147524ab520e26ea0e58bb632c5"},{url:"/fonts/Pretendard-Medium.woff",revision:"7bab4a8a2580411ea263b78fb93436fa"},{url:"/fonts/Pretendard-Regular.woff",revision:"db095fbdc6e9c9a1cea9577fcb8e0f7a"},{url:"/images/commons/basic-profile.png",revision:"79423428772bf28e6476356cd57a66bc"},{url:"/images/commons/hamberger-white.png",revision:"adaf1b1811345044bc1d4e4ff8400084"},{url:"/images/commons/hamberger.png",revision:"d44257945c08fe03a7c53ef79cdb0f42"},{url:"/images/commons/menu-off.png",revision:"c88db8ca7cdc0806a4b3f1cf68921b23"},{url:"/images/commons/profile-img.png",revision:"f40504c20818b62d68e5ff1cdfb62806"},{url:"/images/crew/location.png",revision:"6019700be48fa1c03c66aef2d2c17cb7"},{url:"/images/crew/time.png",revision:"194f79699894eed30997408302df0fa2"},{url:"/images/detail/chat.png",revision:"2ecfc0f2ff9ae3dfc03ea8e6d3d3f2d0"},{url:"/images/detail/dot.png",revision:"d8e7908686d3bca8bfd8dcee0ae720b6"},{url:"/images/detail/location.png",revision:"565bbb98e32d240bdd6800130c4bbbc8"},{url:"/images/detail/orange-dot.png",revision:"595c6c9a3485ac64110deb2f3def09c8"},{url:"/images/detail/profile-detail.png",revision:"fd85701499f5aa407d1dd1b2fd1966d1"},{url:"/images/detail/route.png",revision:"023f89934fe4bcacb3e5f08a624ee292"},{url:"/images/join/photo-upload.png",revision:"f7063f1769e794d5a8ea87465604f4c3"},{url:"/images/login/google-login.png",revision:"60e6a1a95f52cb418c123a818c2cbb50"},{url:"/images/login/id-check.png",revision:"05162397b30ec3d635dd49635d50f588"},{url:"/images/login/kakao-login.png",revision:"37a97bc6ad02fc6effac601c32fdef5d"},{url:"/images/login/naver-login.png",revision:"6390139a4da5c426c78bde994a3a021c"},{url:"/images/main/down-arrow.png",revision:"7aa84f72608c554147894210e9862ef4"},{url:"/images/main/logo-green.png",revision:"b57540e63b7ca3573a6b04b2421dc6ab"},{url:"/images/main/logo-white.png",revision:"127b854ff81572f48ec1695b652c5ccf"},{url:"/images/main/main-bg01.png",revision:"12096bc9023e75d46abe93cd1d4efb92"},{url:"/images/main/main-bg02.png",revision:"7eb82ff365c7a69f6530115b58294a58"},{url:"/images/main/main-bg03.png",revision:"105bf86cec651dd9d0c9232680f5176b"},{url:"/images/main/main-sub-text01.png",revision:"6f3f731446a24effabbd3c3aa3e91c7d"},{url:"/images/main/main-sub-text02.png",revision:"0d2eee0848fca8ab15126c0ce98044c5"},{url:"/images/main/main-text.png",revision:"e350b5a24b987f231c43ca2ca1a18faf"},{url:"/images/main/top3-bg.png",revision:"e3a89e87fec511f976fa0f2bb6b554f7"},{url:"/images/mypage/banner01.png",revision:"8f980a1c359d98cd733359530e97e93a"},{url:"/images/mypage/cancel.png",revision:"825213cc6aba9e54935b4ecee38ae05f"},{url:"/images/mypage/clock-icon.png",revision:"ee00bf88dd9339122679e0745b285aa7"},{url:"/images/mypage/gps-icon.png",revision:"e2c7cae4815b282102db3ed512f68c9a"},{url:"/images/mypage/m-banner01.png",revision:"110036ca7c77ea3f4ba54bd30392d213"},{url:"/images/review/location.png",revision:"33474676d0f49d628c613a7a585c896d"},{url:"/images/write/camera.png",revision:"c0a7c6b3000a7b12ee544e42c2698f70"},{url:"/manifest.json",revision:"1d7362e79b0ec595de6db2ffd11550b9"},{url:"/pwa/icon-192x192.png",revision:"18b11d7aa1fbd94ba0742f28002f809f"},{url:"/pwa/icon-256x256.png",revision:"8aa37bd63506813dfc966f6e86e1137e"},{url:"/pwa/icon-384x384.png",revision:"ed51819378b22527346175a0f27ad2c1"},{url:"/pwa/icon-512x512.png",revision:"f9ec3d5099dc1f8e4011c56a8835835c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
