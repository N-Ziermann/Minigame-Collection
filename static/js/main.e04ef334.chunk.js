(this.webpackJsonpminigame_site=this.webpackJsonpminigame_site||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/clean_screen.fac063b7.png"},24:function(e,t,a){e.exports=a.p+"static/media/find_cactus.5f0bd832.png"},25:function(e,t,a){e.exports=a.p+"static/media/magnifying_glass.6ac593b5.png"},26:function(e,t,a){e.exports=a.p+"static/media/mole_tab.dc212caa.png"},27:function(e,t,a){e.exports=a.p+"static/media/photo_ufo.6ce119ec.png"},28:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),o=a.n(l),i=(a(33),a(3)),r=a(4),s=a(5),m=a(6),u=(a(18),a(12)),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Minigame-Collection-App"),c.a.createElement("h5",null,c.a.createElement(u.b,{to:"/",className:"Header-UI"},"Home "),c.a.createElement(u.b,{to:"/games",className:"Header-UI"},"Games")))}}]),a}(c.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("p",null,"Site made with React ",c.a.createElement("br",null),"Game made in Godot")}}]),a}(c.a.Component),p=a(11),f=(a(39),a(40),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={position:0},n.turn_carrousel=n.turn_carrousel.bind(Object(p.a)(n)),n}return Object(r.a)(a,[{key:"turn_carrousel",value:function(e){e>0?this.state.position<this.props.items.length-1?this.setState((function(t){return{position:t.position+e}})):this.setState({position:0}):e<0&&(this.state.position>0?this.setState((function(t){return{position:t.position+e}})):this.setState({position:this.props.items.length-1}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-2 col-sm-2 col-2"}),c.a.createElement("div",{className:"col-lg-4 col-md-8 col-sm-8 col-8"},c.a.createElement("img",{className:"carrousel-body",src:this.props.items[this.state.position]})),c.a.createElement("div",{className:"col-lg-4 col-md-2 col-sm-2 col-2"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"}),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"left",onClick:function(){return e.turn_carrousel(-1)}})),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"right",onClick:function(){return e.turn_carrousel(1)}})),c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"})))}}]),a}(c.a.Component)),v=a(23),E=a.n(v),g=a(24),b=a.n(g),j=a(25),O=a.n(j),N=a(26),y=a.n(N),k=a(27),w=a.n(k),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(d,null),c.a.createElement(f,{items:[E.a,b.a,O.a,y.a,w.a]}),c.a.createElement("br",null),c.a.createElement(h,null)))}}]),a}(c.a.Component),_=(a(41),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={gameHeight:10},n.adjustGameHeight=n.adjustGameHeight.bind(Object(p.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(d,null),c.a.createElement("h3",{style:{textDecoration:"underline"}},"Requires WebGL2! ",c.a.createElement("br",null)," Doesn't support Safari and old Browsers!"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-2 col-sm-2 col-1"}),c.a.createElement("div",{className:"col-lg-4 col-md-8 col-sm-8 col-10",id:"GameContainer"},c.a.createElement("iframe",{frameBorder:"0",src:"https://itch.io/embed-upload/2087081?color=000000",allowFullScreen:!0,width:"100%",height:this.state.gameHeight},c.a.createElement("a",{href:"https://salkiniklas.itch.io/minigame-collection"},"Play Minigame-Collection on itch.io"))),c.a.createElement("div",{className:"col-lg-4 col-md-2 col-sm-2 col-1"})),c.a.createElement(h,null)))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.adjustGameHeight),this.adjustGameHeight()}},{key:"adjustGameHeight",value:function(){var e=document.getElementById("GameContainer").clientWidth;this.setState({gameHeight:e/9*15})}}]),a}(c.a.Component)),G=a(9),H=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),document.body.style.backgroundColor="grey",n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(G.a,{exact:!0,path:"/",component:_}),c.a.createElement(G.a,{exact:!0,path:"/games",component:C}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,null,c.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.e04ef334.chunk.js.map