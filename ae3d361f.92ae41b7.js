(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(121)),i={id:"trouble_gpios",title:"Testing GPIOs"},s={unversionedId:"trouble/trouble_gpios",id:"trouble/trouble_gpios",isDocsHomePage:!1,title:"Testing GPIOs",description:"Prerequisites",source:"@site/docs/trouble/gpios.md",slug:"/trouble/trouble_gpios",permalink:"/docs/trouble/trouble_gpios",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/trouble/gpios.md",version:"current",sidebar:"someSidebar",previous:{title:"Flashing/Uploading",permalink:"/docs/trouble/trouble_flash"},next:{title:"Testing keyboards",permalink:"/docs/trouble/trouble_keyboard"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Available Testers",id:"available-testers",children:[]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can flash an Arduino Sketch (program) to your controller.  If not, go to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/trouble/trouble_flash"}),"Flashing/Uploading"),".")),Object(o.b)("h2",{id:"available-testers"},"Available Testers"),Object(o.b)("p",null,"There are a few programs that can be flashed to the controller to help with troubleshooting your hardware and identify if the GPIOs are working correctly."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/master/arduino_tests/GPIO_Tester"}),"GPIO Tester")),": scans all GPIOs and indicates what values it reads depending if internal pull-up or internal pull-down resistors are enabled."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/master/arduino_tests/board_tester"}),"Board tester")),": Used for testing new BlueMmicro and BluMicro840 boards: will blink each GPIOs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/master/arduino_tests/BlueMacro_board_tester"}),"BlueMacro board tester")),": Used for testing new BlueMacro840 boards: will blink each GPIOs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/master/arduino_tests/KB_Key_Tester"}),"KB Key Tester")),": Scans each GPIOs and identifies which ones are connected. If they are connected through a diode, the positive and negative sides will be shown. If no diodes is present, GPIOs will be shown on both positive and negative GPIOs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/master/arduino_tests/KB_Matrix_Tester"}),"KB Matrix Tester")),":Scans each GPIOs and accumulates the detected positive and negative GPIOs into an array you can use in your hardware_config.h file. If no diodes are present, GPIOs will be shown on both positive and negative GPIOs.")),Object(o.b)("p",null,"For an example of one of them, watch this video:"),Object(o.b)("figure",{class:"video-container"},Object(o.b)("iframe",{src:"//www.youtube.com/embed/BobS_HYZilM",frameborder:"0",allowfullscreen:!0,width:"100%"})))}u.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(f,s(s({ref:t},l),{},{components:r})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);