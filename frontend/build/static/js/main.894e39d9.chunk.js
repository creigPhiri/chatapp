(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(70)},67:function(e,t){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(33),c=a.n(s),i=a(35),r=a(2),m=a(3),l=a(6),u=a(4),h=a(5),d=a(1),b=function(e){return o.a.createElement("div",{className:"message"},o.a.createElement("div",{className:"message-username"},e.username),o.a.createElement("div",{className:"message-text"},e.text))},g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).messages=a.props.messageData,a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"message-list"},this.messages.map(function(e,t){return o.a.createElement(b,{key:t,text:e.text,username:e.username})}))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={roomName:""},e.submitHandle=function(t){t.preventDefault(),e.props.addRoom(e.state.roomName),e.setState({roomName:""})},e.changeHandle=function(t){e.setState({roomName:t.target.value})},e.submitHandle=e.submitHandle.bind(Object(d.a)(Object(d.a)(e))),e.changeHandle=e.changeHandle.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"new-room-form"},o.a.createElement("form",{onSubmit:this.submitHandle},o.a.createElement("input",{onChange:this.changeHandle,value:this.state.roomName,type:"text",placeholder:"NewRoomForm",required:!0}),o.a.createElement("button",{id:"create-room-btn",type:"submit"},"+")))}}]),t}(n.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"switchRoom",value:function(e){this.props.switchRoom(e)}},{key:"componentDidMount",value:function(){}},{key:"renderElement",value:function(e,t){var a=this,n=e===this.props.selectedRoom?{color:"#fffffa",fontSize:"1.2rem"}:{};return o.a.createElement("li",{key:t,className:"room "},o.a.createElement("a",{style:n,href:"#".concat(e),onClick:function(){return a.switchRoom(e)}}," "," ".concat(e)))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"rooms-list"},o.a.createElement("ul",null,o.a.createElement("h3",{style:j.headerStyle},"Available Rooms"),this.props.roomList.map(function(t,a){return e.renderElement(t,a)})))}}]),t}(n.Component),j={headerStyle:{fontSize:22}},v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({message:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.sendMessage(a.state.message),a.setState({message:""})},a.state={message:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"send-message-form",onSubmit:this.handleSubmit},o.a.createElement("input",{onChange:this.handleChange,value:this.state.message,placeholder:"Type message here and hit ENTER",type:"text"}))}}]),t}(n.Component),O=a(34),k=a.n(O),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={messages:[],roomList:[],roomName:null,username:null},a.updateMessages=function(e){var t=[];(t=a.state.messages).push({username:e.username,text:e.message}),a.setState({messages:t})},console.log("user ".concat(a.state.username)),a.sendMessageHandle=a.sendMessage.bind(Object(d.a)(Object(d.a)(a))),a.addRoomHandle=a.addRoom.bind(Object(d.a)(Object(d.a)(a))),a.switchRoomHandle=a.switchRoom.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("chatting in room ".concat(this.state.roomName)),this.socket=k.a.connect("localhost:3000"),this.socket.on("connect",function(){return console.log("connected")}),this.socket.on("new_message",function(t){e.updateMessages(t)}),this.socket.on("initialize",function(t){e.updateRooms(t.rooms),e.setState({roomName:t.rooms[0],username:t.usernameValue}),console.log("initialize .... ".concat(JSON.stringify(e.state.roomName)))}),this.socket.on("createRoom",function(t){e.updateRooms(t.rooms)}),this.socket.on("switchRoom",function(t){console.log("socket method",t.roomName),e.setState({roomName:t.roomName})})}},{key:"switchRoom",value:function(e){console.log("joining ".concat(e)),this.setState({roomName:e,messageData:[]}),this.socket.emit("switchRoom",{roomName:e})}},{key:"updateRooms",value:function(e){this.setState({roomList:e})}},{key:"sendMessage",value:function(e){this.socket.emit("new_message",{message:e})}},{key:"addRoom",value:function(e){var t=Object(i.a)(this.state.roomList);t.push(e),this.setState({roomList:t}),this.socket.emit("createRoom",{roomName:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(p,{switchRoom:this.switchRoomHandle,selectedRoom:this.state.roomName,roomList:this.state.roomList}),o.a.createElement(g,{messageData:this.state.messages}),o.a.createElement(v,{sendMessage:this.sendMessageHandle}),o.a.createElement(f,{addRoom:this.addRoomHandle}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.894e39d9.chunk.js.map