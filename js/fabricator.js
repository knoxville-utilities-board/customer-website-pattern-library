!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=33)}({33:function(e,t,n){"use strict";n.r(t);n(34)},34:function(e,t,n){"use strict";n(35);var a=window.fabricator={};a.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:"(min-width: 60em)"},a.options.menu=window.matchMedia(a.options.mq).matches,a.test={},a.test.sessionStorage=function(){try{return sessionStorage.setItem("_f","_f"),sessionStorage.removeItem("_f"),!0}catch(e){return!1}}(),a.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(a.options)),a.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle")},a.getOptions=function(){return a.test.sessionStorage?JSON.parse(sessionStorage.fabricator):a.options},a.buildColorChips=function(){for(var e,t=document.querySelectorAll(".f-color-chip"),n=t.length-1;n>=0;n--)e=t[n].querySelector(".f-color-chip__color").innerHTML,t[n].style.borderTopColor=e,t[n].style.borderBottomColor=e;return this},a.setActiveItem=function(){var e=function(){for(var e=(window.location.pathname+window.location.hash).replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/gi,function(e,t,n,a){return(n=n||"")+(a=a||"").split(".")[0]})||"index.html",t=a.dom.menuItems.length-1;t>=0;t--){var n=a.dom.menuItems[t];n.getAttribute("href").replace(/^\//g,"")===e?n.classList.add("f-active"):n.classList.remove("f-active")}};return window.addEventListener("hashchange",e),e(),this},a.menuToggle=function(){var e=a.dom.menuToggle,t=a.getOptions(),n=function(){t.menu=!a.dom.root.classList.contains("f-menu-active"),a.dom.root.classList.toggle("f-menu-active"),a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(t))};e.addEventListener("click",function(){n()});for(var r=function(){window.matchMedia(a.options.mq).matches||n()},i=0;i<a.dom.menuItems.length;i++)a.dom.menuItems[i].addEventListener("click",r);return this},a.allItemsToggles=function(){for(var e={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},t=document.querySelectorAll(".f-controls [data-f-toggle-control]"),n=a.getOptions(),r=function(t,r){for(var i=document.querySelector(".f-controls [data-f-toggle-control="+t+"]"),o=e[t],s=0;s<o.length;s++)r?o[s].classList.remove("f-item-hidden"):o[s].classList.add("f-item-hidden");r?i.classList.add("f-active"):i.classList.remove("f-active"),n.toggles[t]=r,a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(n))},i=0;i<t.length;i++)t[i].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-f-toggle-control"),n=e.currentTarget.className.indexOf("f-active")<0;r(t,n)});for(var o in n.toggles)n.toggles.hasOwnProperty(o)&&r(o,n.toggles[o]);return this},a.singleItemToggle=function(){for(var e=document.querySelectorAll(".f-item-group [data-f-toggle-control]"),t=function(e){var t=this.parentNode.parentNode.parentNode,n=e.currentTarget.getAttribute("data-f-toggle-control");t.querySelector("[data-f-toggle="+n+"]").classList.toggle("f-item-hidden")},n=0;n<e.length;n++)e[n].addEventListener("click",t);return this},a.bindCodeAutoSelect=function(){for(var e=document.querySelectorAll(".f-item-code"),t=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e.querySelector("code")),t.removeAllRanges(),t.addRange(n)},n=e.length-1;n>=0;n--)e[n].addEventListener("click",t.bind(this,e[n]))},a.setInitialMenuState=function(){var e=document.querySelector("html"),t=window.matchMedia(a.options.mq),n=function(t){t.matches&&a.getOptions().menu?e.classList.add("f-menu-active"):e.classList.remove("f-menu-active")};return t.addListener(n),n(t),this},a.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect()},35:function(e,t,n){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var a=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){switch(t.util.type(e)){case"Object":var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=t.util.clone(e[a]));return n;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){var i=(r=r||t.languages)[e];if(2==arguments.length){for(var o in a=arguments[1])a.hasOwnProperty(o)&&(i[o]=a[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o]);s[l]=i[l]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,!0===e,n)},highlightElement:function(a,r,i){for(var o,s,l=a;l&&!e.test(l.className);)l=l.parentNode;if(l&&(o=(l.className.match(e)||[,""])[1],s=t.languages[o]),s){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=a.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var u={element:a,language:o,grammar:s,code:c};if(t.hooks.run("before-highlight",u),r&&self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),o),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),t.hooks.run("after-highlight",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",u)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n,a){var r=t.Token,i=[e],o=n.rest;if(o){for(var s in o)n[s]=o[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===t.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],g=u.inside,d=!!u.lookbehind,f=0,p=u.alias;u=u.pattern||u;for(var m=0;m<i.length;m++){var h=i[m];if(i.length>e.length)break e;if(!(h instanceof r))if(u.lastIndex=0,y=u.exec(h)){d&&(f=y[1].length);var y,v=y.index-1+f,b=v+(y=y[0].slice(f)).length,w=h.slice(0,v+1),S=h.slice(b+1),k=[m,1];w&&k.push(w);var A=new r(s,g?t.tokenize(y,g):y,p);k.push(A),S&&k.push(S),Array.prototype.splice.apply(i,k)}}}}return i},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var o="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}t.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return(a=a[a.length-1])&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();e.exports&&(e.exports=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,function:/[-a-z0-9]+(?=\()/i},a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:a.languages.markup.tag.inside},rest:a.languages.css},alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,function:/(?!\d)[a-z0-9_$]+(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:a.languages.markup.tag.inside},rest:a.languages.javascript},alias:"language-javascript"}})}});