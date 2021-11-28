(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{121:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return i}));var b=a(0),n=a.n(b);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,b)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,b,n=function(t,e){if(null==t)return{};var a,b,n={},r=Object.keys(t);for(b=0;b<r.length;b++)a=r[b],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(b=0;b<r.length;b++)a=r[b],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var j=n.a.createContext({}),d=function(t){var e=n.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=d(t.components);return n.a.createElement(j.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},N=n.a.forwardRef((function(t,e){var a=t.components,b=t.mdxType,r=t.originalType,l=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),p=d(a),N=b,i=p["".concat(l,".").concat(N)]||p[N]||m[N]||r;return a?n.a.createElement(i,c(c({ref:e},j),{},{components:a})):n.a.createElement(i,c({ref:e},j))}));function i(t,e){var a=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var r=a.length,l=new Array(r);l[0]=N;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:b,l[1]=c;for(var j=2;j<r;j++)l[j]=a[j];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}N.displayName="MDXCreateElement"},78:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return d}));var b=a(2),n=a(6),r=(a(0),a(121)),l={id:"keycodes_basic",title:"Basic Keycodes",slug:"/keycodes_basic"},c={unversionedId:"keycodes/keycodes_basic",id:"keycodes/keycodes_basic",isDocsHomePage:!1,title:"Basic Keycodes",description:"These keycodes are based on Universal Serial Bus HID Usage Tables Document Version 1.12",source:"@site/docs/keycodes/basic.md",slug:"/keycodes_basic",permalink:"/docs/keycodes_basic",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/keycodes/basic.md",version:"current",sidebar:"someSidebar",previous:{title:"Customizing Adafruit BSP",permalink:"/docs/customize_BSP"},next:{title:"Extended Keycodes",permalink:"/docs/keycodes_extended"}},O=[],j={rightToc:O};function d(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(r.b)("wrapper",Object(b.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"These keycodes are based on ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf"}),"Universal Serial Bus HID Usage Tables")," Document Version 1.12\nChapter 10: Keyboard/Keypad Page(0x07) - Page 53"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Usage ID (HEX)"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Usage Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Keycode Identifiers"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"00"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Reserved (No Event)"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_NO        XXXXXXX")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"01"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ErrorRollOver"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_ROLL_OVER   KC_TRANSPARENT   ","_","_","_","_","_","_","_","   KC_TRNS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"02"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard PostFail"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_POST_FAIL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"03"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ErrorUndefined"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_UNDEFINED")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"04"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard a and A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"05"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard b and B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_B")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"06"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard c and C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_C")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"07"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard d and D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_D")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"08"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard e and E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_E")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"09"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard f and F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard g and G"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_G")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard h and H"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_H")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard i and I"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_I")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard j and J"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_J")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard k and K"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_K")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard l and L"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_L")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"10"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard m and M"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_M")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"11"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard n and N"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_N")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"12"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard o and O"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_O")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"13"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard p and P"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_P")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"14"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard q and Q"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_Q")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"15"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard r and R"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_R")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"16"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard s and S"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_S")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"17"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard t and T"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"18"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard u and U"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_U")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"19"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard v and V"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_V")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard w and W"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_W")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard x and X"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_X")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard y and Y"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_Y")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard z and Z"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_Z")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 1 and !"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 2 and @"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"20"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 3 and #"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"21"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 4 and $"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"22"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 5 and %"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"23"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 6 and ^"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"24"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 7 and &"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"25"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 8 and *"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"26"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 9 and ("),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"27"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard 0 and )"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"28"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ENTER"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_ENTER    KC_ENT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"29"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ESCAPE"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_ESCAPE   KC_ESC")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard BACKSPACE"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_BSPACE   KC_BSPC")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard TAB"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_TAB")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard SPACE"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_SPACE   KC_SPC")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard - and ","_"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_MINUS   KC_MINS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard = and +"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_EQUAL    KC_EQL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard [ and {"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_LBRACKET   KC_LBRC")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"30"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ] and }"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_RBRACKET   KC_RBRC")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"31"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ","\\"," and ","|"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_BSLASH    KC_BSLS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"32"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Non-US # and ~"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_NONUS_HASH   KC_NUHS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"33"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ; and :"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_SCOLON     KC_SCLN")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"34"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ' and \""),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_QUOTE     KC_QUOT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"35"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard ","`"," and Tilde"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_GRAVE    KC_GRV")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"36"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard , and <"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_COMMA      KC_COMM")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"37"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard . and >"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_DOT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"38"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard / and ?"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_SLASH       KC_SLSH")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"39"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard CAPS LOCK"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_CAPSLOCK    KC_CAPS   KC_CLCK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"3A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"3B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F2"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"3C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F3"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"3D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F4"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"3E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F5"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"3F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F6"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"40"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F7"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"41"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F8"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"42"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F9"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"43"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F10"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"44"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F11"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F11")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"45"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F12"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F12")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"46"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard PrintScreen"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_PSCREEN")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"47"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Scroll Lock"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_SCROLLLOCK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"48"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Pause"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_PAUSE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"49"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Insert"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_INSERT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"4A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Home"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_HOME")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"4B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Page Up"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_PGUP")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"4C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Delete"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_DELETE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"4D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard End"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_END")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"4E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Page Down"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_PGDOWN")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"4F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Right Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_RIGHT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"50"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Left Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_LEFT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"51"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Down Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_DOWN")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"52"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Up Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_UP")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"53"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Num Lock"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_NUMLOCK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"54"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad /"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_SLASH")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"55"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad *"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_ASTERISK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"56"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad -"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_MINUS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"57"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad +"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_PLUS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"58"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad Enter"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_ENTER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"59"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 1 and End"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 2 and Down Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 3 and Page Down"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 4 and Left Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 5"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 6 and Right Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 7 and Home"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"60"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 8 and Up Arrow"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"61"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 9 and PageUp"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"62"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad 0 and Insert"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"63"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad . and Delete"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_DOT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"64"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard non-US ","\\"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_NONUS_BSLASH")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"65"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Application"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_APPLICATION")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"66"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Power"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_POWER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"67"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad ="),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_KP_EQUAL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"68"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F13"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F13")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"69"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F14"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F14")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6A"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F15"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F15")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6B"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F16"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6C"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F17"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F17")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6D"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F18"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F18")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6E"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F19"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F19")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6F"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F20"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F20")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"70"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F21"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F21")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"71"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F22"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F22")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"72"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F23"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F23")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"73"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard F24"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_F24")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Left Control"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_LCTRL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Left Shift"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_LSHIFT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E2"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Left Alt"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_LALT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E3"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keyboard Left GUI"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_LGUI")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E4"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad Right Control"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_RCTRL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E5"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad Right Shift"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_RSHIFT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E6"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad Right Alt"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_RALT")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"E7"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Keypad Right GUI"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"KC_RGUI")))),Object(r.b)("p",null,"Table is still a work in progress.  Refer to ",Object(r.b)("inlineCode",{parentName:"p"},"hid_keycodes.h")," and ",Object(r.b)("inlineCode",{parentName:"p"},"advanced_keycodes.h")," for a detailed list of keycodes."))}d.isMDXComponent=!0}}]);