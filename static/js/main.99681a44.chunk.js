(this.webpackJsonptexteditor=this.webpackJsonptexteditor||[]).push([[0],{34:function(e,t,a){e.exports=a(51)},39:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),r=a.n(l),o=(a(39),a(3)),u=(a(40),a(41),a(42),a(43),a(44),a(30));function i(e){var t=e.language,a=e.value,n=e.onChange;return c.a.createElement("div",{className:"editor-container"},c.a.createElement(u.Controlled,{onBeforeChange:function(e,t,a){n(a)},value:a,className:"clay",options:{lineWrapping:!0,lint:!0,mode:t,lineNumbers:!0,theme:"material"}}))}function s(e,t){var a="text-editor-"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),l=Object(o.a)(c,2),r=l[0],u=l[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(r))}),[a,r]),[r,u]}a(45);var m=a(55),p=a(56);var f=function(){var e=s("html",""),t=Object(o.a)(e,2),a=t[0],l=t[1],r=s("css",""),u=Object(o.a)(r,2),f=u[0],g=u[1],d=s("js",""),v=Object(o.a)(d,2),E=v[0],b=v[1],h=Object(n.useState)(""),O=Object(o.a)(h,2),y=O[0],S=O[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){S("<html>\n          <body>".concat(a,"</body>\n          <style>").concat(f,"</style>\n          <script>").concat(E,"<\/script>\n        </html"))}),250);return function(){return clearTimeout(e)}}),[a,f,E]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"place"},c.a.createElement(m.a,{defaultActiveKey:"HTML",id:"uncontrolled-tab-example"},c.a.createElement(p.a,{eventKey:"HTML",title:"HTML",className:"pane top-pane"},c.a.createElement(i,{language:"xml",value:a,onChange:l})),c.a.createElement(p.a,{eventKey:"CSS",title:"CSS",className:"pane top-pane"},c.a.createElement(i,{language:"css",value:f,onChange:g})),c.a.createElement(p.a,{eventKey:"JS",title:"JS",className:"pane top-pane"},c.a.createElement(i,{language:"js",value:E,onChange:b})),c.a.createElement(p.a,{eventKey:"Output",title:"Output",className:"pane"},c.a.createElement("iframe",{srcDoc:y,title:"Output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.99681a44.chunk.js.map