(this.webpackJsonpminigame_site=this.webpackJsonpminigame_site||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/clean_screen.fac063b7.png"},25:function(e,t,a){e.exports=a.p+"static/media/find_cactus.5f0bd832.png"},26:function(e,t,a){e.exports=a.p+"static/media/magnifying_glass.6ac593b5.png"},27:function(e,t,a){e.exports=a.p+"static/media/mole_tab.dc212caa.png"},28:function(e,t,a){e.exports=a.p+"static/media/photo_ufo.6ce119ec.png"},29:function(e,t,a){e.exports=a(43)},34:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(21),o=a.n(l),i=(a(34),a(3)),r=a(4),s=a(5),m=a(6),d=(a(18),a(12)),u=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Minigame-Collection-App"),c.a.createElement("h5",null,c.a.createElement(d.b,{to:"/",className:"Header-UI"},"Home "),c.a.createElement(d.b,{to:"/games",className:"Header-UI"},"Games")))}}]),a}(c.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("p",null,"Site made with React ",c.a.createElement("br",null),"Game made in Godot")}}]),a}(c.a.Component),p=a(11),E=(a(40),a(20),a(41),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={position:0},n.turn_carrousel=n.turn_carrousel.bind(Object(p.a)(n)),n}return Object(r.a)(a,[{key:"turn_carrousel",value:function(e){e>0?this.state.position<this.props.items.length-1?this.setState((function(t){return{position:t.position+e}})):this.setState({position:0}):e<0&&(this.state.position>0?this.setState((function(t){return{position:t.position+e}})):this.setState({position:this.props.items.length-1}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-2 col-sm-2 col-1"}),c.a.createElement("div",{className:"col-lg-4 col-md-8 col-sm-8 col-10",id:"PhoneBody"},c.a.createElement("div",{id:"Speaker"},c.a.createElement("div",{id:"innerSpeaker"})),c.a.createElement("img",{src:this.props.items[this.state.position],style:{width:"95%"}}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"}),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"left",onClick:function(){return e.turn_carrousel(-1)}})),c.a.createElement("div",{className:"col-md-2 col-sm-2 col-2"},c.a.createElement("div",{className:"right",onClick:function(){return e.turn_carrousel(1)}})),c.a.createElement("div",{className:"col-md-4 col-sm-4 col-4"})))}}]),a}(c.a.Component)),v=a(24),g=a.n(v),b=a(25),f=a.n(b),j=a(26),N=a.n(j),k=a(27),w=a.n(k),O=a(28),y=a.n(O),_=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement(E,{items:[g.a,f.a,N.a,w.a,y.a]}),c.a.createElement("br",null),c.a.createElement(h,null)))}}]),a}(c.a.Component),C=(a(42),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={gameHeight:10},n.adjustGameHeight=n.adjustGameHeight.bind(Object(p.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(u,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-2 col-sm-2 col-1"}),c.a.createElement("div",{className:"col-lg-4 col-md-8 col-sm-8 col-10",id:"PhoneBody"},c.a.createElement("div",{id:"Speaker"},c.a.createElement("div",{id:"innerSpeaker"})),c.a.createElement("iframe",{frameBorder:"0",src:"https://itch.io/embed-upload/2087081?color=000000",allowFullScreen:!0,width:"100%",height:this.state.gameHeight},c.a.createElement("a",{href:"https://salkiniklas.itch.io/minigame-collection"},"Play Minigame-Collection on itch.io"))),c.a.createElement("div",{className:"col-lg-4 col-md-2 col-sm-2 col-1"})),c.a.createElement("br",null),c.a.createElement("h5",{className:"important"},"Incomplete WebGL1 Version! ",c.a.createElement("br",null)," Due to browser compatibility issues"),c.a.createElement("br",null),c.a.createElement(x,null),c.a.createElement("br",null),c.a.createElement(h,null)))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.adjustGameHeight),this.adjustGameHeight()}},{key:"adjustGameHeight",value:function(){var e=document.getElementById("PhoneBody").clientWidth;this.setState({gameHeight:e/9*15})}}]),a}(c.a.Component)),x=function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-1 col-2"}),c.a.createElement("div",{className:"col-lg-4 col-md-10 col-10 row"},c.a.createElement("div",{className:"col-lg-2 col-md-3 col-0"}),c.a.createElement("a",{id:"ButtonBody",className:"col-lg-10 col-md-7 col-12 row",href:"https://github.com/N-Ziermann/Minigame-Collection/releases/download/v_1.0.0/Minigame-Collection.apk"},c.a.createElement("div",{className:"col-lg-4 col-md-4 col-5"},c.a.createElement("img",{id:"AndroidLogo",src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fdb%2FAndroid_robot_2014.svg%2F872px-Android_robot_2014.svg.png&f=1&nofb=1"})),c.a.createElement("div",{className:"col-lg-8 col-md-8 col-7",id:"DownloadTextBody"},c.a.createElement("h5",{id:"DownloadText"},"Download",c.a.createElement("br",null),"for",c.a.createElement("br",null),"Android")))),c.a.createElement("div",{className:"col-lg-4 col-1"}))},S=C,H=a(9),B=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),document.body.style.backgroundColor="#212935",n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(H.a,{exact:!0,path:"/",component:S}),c.a.createElement(H.a,{exact:!0,path:"/games",component:_}))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,null,c.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a14858ce.chunk.js.map