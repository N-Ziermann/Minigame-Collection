(this.webpackJsonpminigame_site=this.webpackJsonpminigame_site||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/clean_screen.fac063b7.png"},24:function(e,t,a){e.exports=a.p+"static/media/find_cactus.5f0bd832.png"},25:function(e,t,a){e.exports=a.p+"static/media/magnifying_glass.6ac593b5.png"},26:function(e,t,a){e.exports=a.p+"static/media/mole_tab.dc212caa.png"},27:function(e,t,a){e.exports=a.p+"static/media/photo_ufo.6ce119ec.png"},28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),i=(a(33),a(4)),l=a(5),s=a(6),m=a(7),u=(a(18),a(11)),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Minigame-Collection-App"),c.a.createElement("h5",null,c.a.createElement(u.b,{to:"/",className:"Header-UI"},"Home "),c.a.createElement(u.b,{to:"/games",className:"Header-UI"},"Minigame List ")))}}]),a}(c.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("p",null,"Site made with React ",c.a.createElement("br",null),"Game made in Godot")}}]),a}(c.a.Component),h=a(13),f=(a(39),a(40),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={position:0},n.turn_carrousel=n.turn_carrousel.bind(Object(h.a)(n)),n}return Object(l.a)(a,[{key:"turn_carrousel",value:function(e){e>0?this.state.position<this.props.items.length-1?this.setState((function(t){return{position:t.position+e}})):this.setState({position:0}):e<0&&(this.state.position>0?this.setState((function(t){return{position:t.position+e}})):this.setState({position:this.props.items.length-1}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"}),c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"},c.a.createElement("img",{className:"carrousel-body",src:this.props.items[this.state.position]})),c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"}),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"left",onClick:function(){return e.turn_carrousel(-1)}})),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"right",onClick:function(){return e.turn_carrousel(1)}})),c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"})))}}]),a}(c.a.Component)),b=a(23),E=a.n(b),v=a(24),g=a.n(v),j=a(25),O=a.n(j),N=a(26),k=a.n(N),_=a(27),w=a.n(_),y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(p,null),c.a.createElement(f,{items:[E.a,g.a,O.a,k.a,w.a]}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(d,null)))}}]),a}(c.a.Component),x=a(9),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(x.a,{exact:!0,path:"/",component:p}),c.a.createElement(x.a,{exact:!0,path:"/games",component:y}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,null,c.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.0d0904aa.chunk.js.map