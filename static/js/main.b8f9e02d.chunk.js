(this.webpackJsonpminigame_site=this.webpackJsonpminigame_site||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/clean_screen.fac063b7.png"},22:function(e,t,a){e.exports=a.p+"static/media/find_cactus.5f0bd832.png"},23:function(e,t,a){e.exports=a.p+"static/media/magnifying_glass.6ac593b5.png"},24:function(e,t,a){e.exports=a.p+"static/media/mole_tab.dc212caa.png"},25:function(e,t,a){e.exports=a.p+"static/media/photo_ufo.6ce119ec.png"},28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(20),l=a.n(o),r=(a(33),a(4)),i=a(5),s=a(6),m=a(7),u=(a(18),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Minigame-Collection-App"),c.a.createElement("h5",null,c.a.createElement("a",{href:"/Minigame-Collection",className:"Header-UI"},"Home "),c.a.createElement("a",{href:"/Minigame-Collection/games",className:"Header-UI"},"Games")))}}]),a}(c.a.Component)),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("p",null,"Site made with React ",c.a.createElement("br",null),"Game made in Godot")}}]),a}(c.a.Component),p=a(13),h=(a(34),a(35),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={position:0},n.turn_carrousel=n.turn_carrousel.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"turn_carrousel",value:function(e){e>0?this.state.position<this.props.items.length-1?this.setState((function(t){return{position:t.position+e}})):this.setState({position:0}):e<0&&(this.state.position>0?this.setState((function(t){return{position:t.position+e}})):this.setState({position:this.props.items.length-1}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-2 col-sm-2 col-2"}),c.a.createElement("div",{className:"col-lg-4 col-md-8 col-sm-8 col-8"},c.a.createElement("img",{className:"carrousel-body",src:this.props.items[this.state.position]})),c.a.createElement("div",{className:"col-lg-4 col-md-2 col-sm-2 col-2"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"}),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"left",onClick:function(){return e.turn_carrousel(-1)}})),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"right",onClick:function(){return e.turn_carrousel(1)}})),c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"})))}}]),a}(c.a.Component)),f=a(21),v=a.n(f),E=a(22),b=a.n(E),g=a(23),j=a.n(g),O=a(24),N=a.n(O),k=a(25),y=a.n(k),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement(h,{items:[v.a,b.a,j.a,N.a,y.a]}),c.a.createElement("br",null),c.a.createElement(d,null)))}}]),a}(c.a.Component),_=a(9);function w(){var e=document.URL.replace(/^(?:\/\/|[^/]+)*\//,"");return 0==(e=(e=e.replace("Minigame-Collection","")).replace(/\/$/,"")).length&&(e="/"),e}var x=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this,e),document.body.style.backgroundColor="grey",n.state={pathRequested:w()},n}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("script",null,"console.log(",this.state.pathRequested,")"),"/"==this.state.pathRequested?c.a.createElement(_.a,{component:u}):"/games"==this.state.pathRequested?c.a.createElement(_.a,{component:C}):c.a.createElement("h1",null," Path Not Found "))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(12);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M.a,{basename:"/Minigame-Collection"},c.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b8f9e02d.chunk.js.map