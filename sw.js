if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const d=e=>i(e,o),f={module:{uri:o},exports:r,require:d};s[o]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6d5f4b1c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icons/favicon-32x32.png",revision:"a07f423b8bbf4a50c2c449b96795fcb6"},{url:"assets/icons/icon-192x192.png",revision:"5c21fbedd839fc478c36bc1d669f88e2"},{url:"assets/icons/icon-256x256.png",revision:"4ff79e7ec3323f8c9ab47fcc68bf4297"},{url:"assets/icons/icon-384x384.png",revision:"e70e99d84151b2ae0988ce10adae7461"},{url:"assets/icons/icon-512x512.png",revision:"5c6f588f72033b326545362b113f9c82"},{url:"design/desktop-design-theme-1.jpg",revision:"0b1126cecb4ca47c7b8fec5eb0313f3d"},{url:"design/desktop-design-theme-2.jpg",revision:"f4eaf748d96f7002ec0c2363eb09b587"},{url:"design/desktop-design-theme-3.jpg",revision:"32637bc4c4e4c6b9d4ca8393323208e4"},{url:"design/desktop-preview.jpg",revision:"ea784695ed618689bd3828ec82aa0e97"},{url:"design/mobile-design-theme-1.jpg",revision:"f539eb0fd761344200100f91629aaee1"},{url:"design/mobile-design-theme-2.jpg",revision:"7eded7c42cbd8179cd2aeb09be530cfe"},{url:"design/mobile-design-theme-3.jpg",revision:"b476dbb1c758023a8137eaedf5995630"},{url:"index.html",revision:"73879df521a431f489a867a71d2a3b9e"},{url:"js/index.js",revision:"c336d2f7f10890173bf3d268158f03c3"},{url:"manifest.json",revision:"c2aff6980a889b09af4ae3b5b1075476"},{url:"README.md",revision:"355af56daf58c42fdf4768f4e847f1ba"},{url:"styles/desktop.css",revision:"7062c5cc23db4ccb78c38230734982eb"},{url:"styles/mobile.css",revision:"20313d5bce8f7c95af6b3786b208125c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
