(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,t,a){},255:function(e,t,a){e.exports={messageForm:"MessageForm_messageForm__2LtRa"}},257:function(e,t,a){e.exports={messages:"Messages_messages__2jnq-",comment:"Messages_comment__99uDs"}},258:function(e,t,a){e.exports={register:"Login_register__3p-R9"}},263:function(e,t,a){e.exports={register:"Register_register__1YeEj"}},276:function(e,t,a){e.exports=a(462)},383:function(e,t,a){},462:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(22),s=a(20),l=a(19),c=a(21),o=a(0),i=a.n(o),u=a(67),d=a.n(u);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(483),m=a(482),p=a(479),f=a(470),g=a(463),v=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{as:p.a,inverted:!0,vertical:!0,visible:!0,width:"very thin"},i.a.createElement(f.a,null),i.a.createElement(g.a,{icon:"add",size:"small",color:"blue"}))}}]),t}(i.a.Component),E=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),t}(i.a.Component),C=a(484),b=a(70),y=a(477),S=a(265),O=a(32),j=a(156),k=a.n(j);a(380),a(381),a(382);k.a.initializeApp({apiKey:"AIzaSyAuyuNcunURGGkny2xJ0VDcXOc5k2kohcg",authDomain:"slack-app-d47b6.firebaseapp.com",databaseURL:"https://slack-app-d47b6.firebaseio.com",projectId:"slack-app-d47b6",storageBucket:"slack-app-d47b6.appspot.com",messagingSenderId:"539859022252"});var U=k.a,w=(a(383),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={user:a.props.currentUser},a.dropdownOptions=function(){return[{key:"user",text:i.a.createElement("span",null," ","Signed in as",i.a.createElement("strong",null,a.props.currentUser.displayName)),disabled:!0},{key:"avatar",text:i.a.createElement("span",null,"Change Avatar")},{key:"signout",text:i.a.createElement("span",{onClick:a.handleSignout},"Sign Out")}]},a.handleSignout=function(){U.auth().signOut().then(function(){return console.log("signed out!")})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({user:this.props.currentUser})}},{key:"render",value:function(){console.log(this.props.currentUser);var e=this.state.user;return i.a.createElement(h.a,{style:{background:"#4c3c4c"}},i.a.createElement(h.a.Column,null,i.a.createElement(h.a.Column,null,i.a.createElement(h.a.Row,{style:{padding:"1.2em",margin:0}},i.a.createElement(C.a,{inverted:!0,floated:"left",as:"h2"},i.a.createElement(b.a,{name:"code"}),i.a.createElement(C.a.Content,null,"DevChat")),i.a.createElement(C.a,{style:{padding:"0.25em"},as:"h4",inverted:!0}),i.a.createElement(y.a,{trigger:i.a.createElement("span",{style:{color:"white"}},i.a.createElement("br",null),i.a.createElement(S.a,{space:"right",avatar:!0,src:e.photoURL}),this.state.user.displayName),options:this.dropdownOptions()})))))}}]),t}(i.a.Component)),R=Object(O.b)(function(e){return{currentUser:e.user.currentUser}})(w),N=a(35),M=a(77),A=a(89),L=a(475),T=a(474),_=a(471),P=function(e){return{type:"SET_CURRENT_CHANNEL",payload:{currentChannel:e}}},F=function(e){return{type:"SET_PRIVATE_CHANNEL",payload:{isPrivateChannel:e}}},I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={user:a.props.currentUser,channel:{id:0,name:""},channels:[],channelName:"",channelDetails:"",channelsRef:U.database().ref("channels"),messagesRef:U.database().ref("messages"),notifications:[{id:0,total:0,lastKnownTotal:0,count:0}],isModalOpen:!1,firstLoad:!0,activeChannel:""},a.removeListeners=function(){a.state.channelsRef.off()},a.setFirstChannel=function(){var e=a.state.channels[0];a.state.firstLoad&&a.state.channels.length>0&&(a.props.setCurrentChannel(e),a.setActiveChannel(e)),a.setState({firstLoad:!1})},a.changeChannel=function(e){a.props.setCurrentChannel(e),a.clearNotifications(),a.setActiveChannel(e),a.props.setPrivateChannel(!1),a.setState({channel:e})},a.clearNotifications=function(){var e=a.state.notifications.findIndex(function(e){return e.id===a.state.channel.id});if(-1!==e){var t=Object(M.a)(a.state.notifications);t[e].total=a.state.notifications[e].lastKnownTotal,t[e].count=0,a.setState({notifications:t})}},a.addNotificationListener=function(e){a.state.messagesRef.child(e).on("value",function(t){a.state.channel&&a.handleNotifications(e,a.state.channel.id,a.state.notifications,t)})},a.handleNotifications=function(e,t,n,r){var s=0,l=n.findIndex(function(t){return t.id===e});-1!==l?(e!==t&&(s=n[l].total,r.numChildren()-s>0&&(n[l].count=r.numChildren()-s)),n[l].lastKnownTotal=r.numChildren()):n.push({id:e,total:r.numChildren(),lastKnownTotal:r.numChildren(),count:0}),a.setState({notifications:n})},a.setActiveChannel=function(e){return a.setState({activeChannel:e.id})},a.getNotificationCount=function(e){var t=0;if(a.state.notifications.forEach(function(a){a.id===e.id&&(t=a.count)}),t>0)return t},a.displayChannels=function(e){return e.length>0&&e.map(function(e){return i.a.createElement(p.a.Item,{key:e.id+e.name,onClick:function(){return a.changeChannel(e)},name:e.name,style:{opacity:.7},active:e.id===a.state.activeChannel},a.getNotificationCount(e)&&i.a.createElement(A.a,{color:"red"},a.getNotificationCount(e)),"# ",e.name)})},a.addChannel=function(){var e=a.state,t=e.channelsRef,n=e.channelName,r=e.channelDetails,s=e.user;console.log("Firebase Database Ref: ",t);var l=t.push().key;console.log("USERNAME: ",s);var c={id:l,name:n,details:r,createdBy:{name:s.displayName,avatar:s.photoURL}};t.child(l).update(c).then(function(){a.setState({channelName:"",channelDetails:""}),a.closeModal(),console.log("channel added")}).catch(function(e){console.log("Catched Error:",e)})},a.handleSubmit=function(e){e.preventDefault(),a.isFormValid(a.state)&&(a.addChannel(),console.log("channel added"))},a.openModal=function(){return a.setState({isModalOpen:!0})},a.closeModal=function(){return a.setState({isModalOpen:!1})},a.handleChange=function(e){a.setState(Object(N.a)({},e.currentTarget.name,e.currentTarget.value))},a.isFormValid=function(e){var t=e.channelName,a=e.channelDetails;return t&&a},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.addListenters(),console.log("CHANNELS -> State channels: ",this.state.channels)}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"addListenters",value:function(){var e=this,t=[];this.state.channelsRef.on("child_added",function(a){t.push(a.val()),e.setState({channels:t},function(){return e.setFirstChannel()}),e.addNotificationListener(a.key)})}},{key:"render",value:function(){var e=this.state,t=e.channels,a=e.isModalOpen;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a.Menu,{className:"menu"},i.a.createElement(p.a.Item,null,i.a.createElement("span",null,i.a.createElement(b.a,{name:"exchange"})," CHANNELS")," ","(",t.length,") ",i.a.createElement(b.a,{name:"add",onClick:this.openModal})),this.displayChannels(t)),i.a.createElement(L.a,{basic:!0,open:a,onClose:this.closeModal},i.a.createElement(L.a.Header,null,"Add a Channel"),i.a.createElement(L.a.Content,null,i.a.createElement(T.a,{onSubmit:this.handleSubmit},i.a.createElement(T.a.Field,null,i.a.createElement(_.a,{fluid:!0,label:"Name of Channel",name:"channelName",onChange:this.handleChange})),i.a.createElement(T.a.Field,null,i.a.createElement(_.a,{fluid:!0,label:"About the Channel",name:"channelDetails",onChange:this.handleChange})))),i.a.createElement(L.a.Actions,null,i.a.createElement(g.a,{color:"green",inverted:!0,onClick:this.handleSubmit},i.a.createElement(b.a,{name:"checkmark"})," Add"),i.a.createElement(g.a,{color:"red",inverted:!0,onClick:this.closeModal},i.a.createElement(b.a,{name:"remove"})," Cancel"))))}}]),t}(i.a.Component),D=Object(O.b)(null,{setCurrentChannel:P,setPrivateChannel:F})(I),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={activeChannel:"",user:a.props.currentUser,users:[],usersRef:U.database().ref("users"),connectedRef:U.database().ref(".info/connected"),presenceRef:U.database().ref("presence")},a.addListeners=function(e){var t=[];a.state.usersRef.on("child_added",function(n){if(e!==n.key){var r=n.val();r.uid=n.key,r.status="offline",t.push(r),a.setState({users:t})}}),a.state.connectedRef.on("value",function(t){if(!0===t.val()){var n=a.state.presenceRef.child(e);n.set(!0),n.onDisconnect().remove(function(e){})}}),a.state.presenceRef.on("child_added",function(t){e!==t.key&&a.addStatusToUser(t.key)}),a.state.presenceRef.on("child_removed",function(t){e!==t.key&&a.addStatusToUser(t.key,!1)})},a.addStatusToUser=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a.state.users.reduce(function(a,n){return n.uid===e&&(n.status="".concat(t?"online":"offline")),a.concat(n)},[]);a.setState({users:n})},a.isUserOnline=function(e){return"online"===e.status},a.changeChannel=function(e){var t={id:a.getChannelId(e.uid),name:e.name};a.props.setCurrentChannel(t),a.props.setPrivateChannel(!0),a.setActiveChannel(e.uid)},a.getChannelId=function(e){var t=a.state.user.uid;return e<t?"".concat(e,"/").concat(t):"".concat(t,"/").concat(e)},a.setActiveChannel=function(e){a.setState({activeChannel:e})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.state.user&&this.addListeners(this.state.user.uid)}},{key:"render",value:function(){var e=this,t=this.state,a=t.users,n=t.activeChannel;return i.a.createElement(p.a.Menu,{className:"menu"},i.a.createElement(p.a.Item,null,i.a.createElement("span",null,i.a.createElement(b.a,{name:"mail"})," DIRECT MESSAGES")," ","(",a.length,")"),a.map(function(t){return i.a.createElement(p.a.Item,{key:t.uid,active:t.uid===n,onClick:function(){return e.changeChannel(t)},style:{opacity:.7,fontStyle:"italic"}},i.a.createElement(b.a,{name:"circle",color:e.isUserOnline(t)?"green":"red"}),"@ ",t.name)}))}}]),t}(E),z=Object(O.b)(null,{setCurrentChannel:P,setPrivateChannel:F})(x),V=a(59),B=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={starredChannels:[],activeChannel:{},openModal:!1,usersRef:U.database().ref("users"),user:a.props.currentUser},a.addListeners=function(e){a.state.usersRef.child(e).child("starred").on("child_added",function(e){var t=Object(V.a)({id:e.key},e.val());a.setState({starredChannels:[].concat(Object(M.a)(a.state.starredChannels),[t])})}),console.log("Length of starredChannels[]: ",a.state.starredChannels.length),a.state.usersRef.child(e).child("starred").on("child_removed",function(e){var t=Object(V.a)({id:e.key},e.val()),n=a.state.starredChannels.filter(function(e){return e.id!==t.id});a.setState({starredChannels:n})})},a.setActiveChannel=function(e){return a.setState({activeChannel:e.id})},a.changeChannel=function(e){a.props.setCurrentChannel(e),a.setActiveChannel(e),a.props.setPrivateChannel(!1)},a.displayChannels=function(e){return e.length>0&&e.map(function(e){return i.a.createElement(p.a.Item,{key:e.id+e.name,onClick:function(){return a.changeChannel(e)},name:e.name,style:{opacity:.7},active:e.id===a.state.activeChannel},"# ",e.name)})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.state.user&&this.addListeners(this.state.user.uid)}},{key:"render",value:function(){var e=this.state.starredChannels;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a.Menu,{className:"menu"},i.a.createElement(p.a.Item,null,i.a.createElement("span",null,i.a.createElement(b.a,{name:"star"})," STARRED")," ","(",e.length,") ",i.a.createElement(b.a,{name:"add",onClick:this.state.openModal})),this.displayChannels(e)))}}]),t}(i.a.Component),W=Object(O.b)(null,{setCurrentChannel:P,setPrivateChannel:F})(B),q=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.currentUser;return i.a.createElement(p.a,{size:"large",inverted:!0,fixed:"left",vertical:!0,style:{background:"#4c3c4c",fontSize:"1.2rem"}},i.a.createElement(R,{currentUser:e}),i.a.createElement(W,{currentUser:e}),i.a.createElement(D,{currentUser:e}),i.a.createElement(z,{currentUser:e}))}}]),t}(E),H=a(481),G=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={activeIndex:0},a.setActive=function(e,t){},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){this.state.activeIndex;return i.a.createElement(H.a,null)}}]),t}(E),K=a(476),X=a(251),J=a.n(X),Y=a(472),$=a(252),Q=a.n($),Z=function(e){var t=e.uploadState,a=e.percentUploaded;return"uploading"===t?i.a.createElement(Y.a,{className:Q.a.progressBar,percent:a,progress:!0,indicating:!0,size:"medium",inverted:!0}):i.a.createElement(i.a.Fragment,null," ")},ee=a(255),te=a.n(ee),ae=a(158),ne=a.n(ae),re=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={file:null,authorized:["image/jpeg","image/png"]},a.addFile=function(e){var t=e.currentTarget.files;null!=t&&(a.setState({file:t[0]}),console.log("FileModal -> State FILES: ",t))},a.sendFile=function(){var e=a.state.file,t=a.props,n=t.uploadFile,r=t.closeModal;null!==e&&(a.isAuthorized(e.name)&&(n(e,{contentType:ne.a.lookup(e.name)}),r(),a.clearFile()))},a.isAuthorized=function(e){return a.state.authorized.includes(ne.a.lookup(e))},a.clearFile=function(){return a.setState({file:null})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.modal,a=e.closeModal;return i.a.createElement(L.a,{basic:!0,open:t,onClose:a},i.a.createElement(L.a.Header,null,"Select an Image Files"),i.a.createElement(L.a.Content,null,i.a.createElement(_.a,{onChange:this.addFile,fluid:!0,label:"File types: jpg, png",name:"file",type:"file"})),i.a.createElement(L.a.Actions,null,i.a.createElement(g.a,{color:"green",inverted:!0,onClick:this.sendFile},i.a.createElement(b.a,{name:"checkmark"})," Send"),i.a.createElement(g.a,{color:"red",inverted:!0,onClick:a},i.a.createElement(b.a,{name:"remove"})," Cancel")))}}]),t}(E),se=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={storageRef:U.storage().ref(),uploadTask:null,uploadState:"",percentUploaded:0,message:"",channel:a.props.currentChannel,user:a.props.currentUser,loading:!1,errors:[{message:""}],modal:!1},a.openModal=function(){return a.setState({modal:!0})},a.closeModal=function(){return a.setState({modal:!1})},a.handleChange=function(e){a.setState(Object(N.a)({},e.currentTarget.name,e.currentTarget.value))},a.createMessage=function(e){var t;return t={timestamp:U.database.ServerValue.TIMESTAMP,user:{id:a.state.user.uid,name:a.state.user.displayName,avatar:a.state.user.photoURL},image:"",content:""},null!==e&&e?t.image=e:t.content=a.state.message,t},a.sendMessage=function(){var e=a.props.getMessagesRef,t=a.state,n=t.message,r=t.channel;n?(a.setState({loading:!0}),e().child(r.id).push().set(a.createMessage()).then(function(){a.setState({loading:!1,message:"",errors:[]})}).catch(function(e){console.error(e),a.setState({loading:!1,errors:a.state.errors.concat(e)})})):a.setState({errors:a.state.errors.concat({message:"Add a message"})})},a.getPath=function(){return a.props.isPrivateChannel?"chat/private-".concat(a.state.channel.id):"chat/public"},a.uploadFile=function(e,t){var n=a.state.channel.id,r=a.props.messagesRef(),s="".concat(a.getPath(),"/").concat(J()(),".jpg");a.setState({uploadState:"uploading",uploadTask:a.state.storageRef.child(s).put(e,t)},function(){a.state.uploadTask.on("state_changed",function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);a.setState({percentUploaded:t})},function(e){console.log(e),a.setState({errors:a.state.errors.concat(e),uploadState:"error",uploadTask:null})},function(){a.state.uploadTask.snapshot.ref.getDownloadURL().then(function(e){a.sendFileMessage(e,r,n)}).catch(function(e){console.log(e),a.setState({errors:a.state.errors.concat(e),uploadState:"error",uploadTask:null})})})})},a.sendFileMessage=function(e,t,n){t.child(n).push().set(a.createMessage(e)).then(function(){a.setState({uploadState:"done"})}).catch(function(e){console.error(e),a.setState({errors:a.state.errors.concat(e)})})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.message,n=e.modal,r=e.loading,s=e.uploadState,l=e.percentUploaded;return i.a.createElement(H.a,{className:te.a.messageForm},i.a.createElement(_.a,{fluid:!0,name:"message",onChange:this.handleChange,value:a,style:{marginBottom:"0.7em"},label:i.a.createElement(g.a,{icon:"add"}),labelPosition:"left",placeholder:"Write your message",className:t.some(function(e){return e.message.includes("message")})?"error":""}),i.a.createElement(g.a.Group,{icon:!0,widths:"1"},i.a.createElement(g.a,{onClick:this.sendMessage,disabled:r,color:"orange",content:"Add Replay",labelPosition:"left",icon:"edit"}),i.a.createElement(g.a,{color:"teal",disabled:"uploading"===s,onClick:this.openModal,content:"Upload Media",labelPosition:"right",icon:"cloud upload"})),i.a.createElement(re,{modal:n,closeModal:this.closeModal,uploadFile:this.uploadFile}),i.a.createElement(Z,{uploadState:s,percentUploaded:l}))}}]),t}(E),le=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.channelName,a=e.numUniqueUsers,n=e.handleSearchChange,r=e.searchLoading,s=e.isPrivateChannel,l=e.isChannelStarred,c=e.handleStar;return i.a.createElement(H.a,{clearing:!0},i.a.createElement(C.a,{fluid:"true",as:"h2",floated:"left",style:{marginBottom:0}},i.a.createElement("span",null,t,!s&&i.a.createElement(b.a,{onClick:c,name:l?"star":"star outline",color:l?"yellow":"black"})),i.a.createElement(C.a.Subheader,null,a)),i.a.createElement(C.a,null,i.a.createElement(_.a,{loading:r,onChange:n,size:"mini",icon:"search",name:"searchTerm",placeholder:"Search Messages"})))}}]),t}(E),ce=a(256),oe=a.n(ce),ie=function(e,t){return e.user.id===t.uid?"message__self":""},ue=function(e){var t,a=e.message,n=e.user;return i.a.createElement(i.a.Fragment,null,i.a.createElement(K.a,null,i.a.createElement(K.a.Avatar,{src:a.user.avatar}),i.a.createElement(K.a.Content,{className:ie(a,n)},i.a.createElement(K.a.Author,{as:"a"},a.user.name),i.a.createElement(K.a.Metadata,null,(t=a.timestamp,oe()(t).fromNow())),function(e){return""!==e.image&&""===e.content}(a)?i.a.createElement(S.a,{src:a.image,className:"message__image"}):i.a.createElement(K.a.Text,null,a.content))))},de=a(257),he=a.n(de),me=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={privateChannel:a.props.isPrivateChannel,privateMessagesRef:U.database().ref("privateMessages"),messagesRef:U.database().ref("messages"),messages:[],messagesLoading:!0,channel:a.props.currentChannel,user:a.props.currentUser,usersRef:U.database().ref("users"),numUniqueUsers:"",searchTerm:"",searchLoading:!1,searchResults:[],isChannelStarred:!1},a.addUserStarsListener=function(e,t){a.state.usersRef.child(t).child("starred").once("value").then(function(t){if(null!==t.val()){var n=Object.keys(t.val()).includes(e);a.setState({isChannelStarred:n})}})},a.addListeners=function(e){return a.addMessageListener(e),e},a.addMessageListener=function(e){var t=[];a.getMessagesRef().child(e).on("child_added",function(e){t.push(e.val()),a.setState({messages:t,messagesLoading:!1}),a.countUniqueUsers(t)})},a.getMessagesRef=function(){var e=a.state,t=e.messagesRef,n=e.privateMessagesRef;return e.privateChannel?n:t},a.handleStar=function(){a.setState(function(e){return{isChannelStarred:!e.isChannelStarred}},function(){return a.starChannel()})},a.starChannel=function(){a.state.isChannelStarred?a.state.usersRef.child("".concat(a.state.user.uid,"/starred")).update(Object(N.a)({},a.state.channel.id,{name:a.state.channel.name,details:a.state.channel.details,createBy:{name:a.state.channel.createdBy.name,avatar:a.state.channel.createdBy.avatar}})):a.state.usersRef.child("".concat(a.state.user.uid,"/starred")).child(a.state.channel.id).remove(function(e){null!==e&&console.error(e)})},a.handleSearchChange=function(e){a.setState({searchTerm:e.currentTarget.value,searchLoading:!0},function(){return a.handleSearchMessages()})},a.handleSearchMessages=function(){var e=Object(M.a)(a.state.messages),t=new RegExp(a.state.searchTerm,"gi"),n=e.reduce(function(e,a){return(a.content&&a.content.match(t)||a.user.name.match(t))&&e.push(a),e},[]);a.setState({searchResults:n}),setTimeout(function(){return a.setState({searchLoading:!1})},1e3)},a.countUniqueUsers=function(e){var t=e.reduce(function(e,t){return e.includes(t.user.name)||e.push(t.user.name),e},[]),n=t.length>1||0===t.length,r="".concat(t.length," user").concat(n?"s":"");a.setState({numUniqueUsers:r})},a.displayMessages=function(e){return e.length>0&&e.map(function(e){return i.a.createElement(ue,{key:e.timestamp,message:e,user:a.state.user})})},a.displayChannelName=function(e){return e?"".concat(a.state.privateChannel?"@":"#").concat(e.name):""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.channel,a=e.user;t&&a&&(this.addListeners(t.id),this.addUserStarsListener(t.id,a.uid))}},{key:"render",value:function(){var e=this.state,t=e.messagesRef,a=e.messages,n=e.channel,r=e.user,s=e.numUniqueUsers,l=e.searchTerm,c=e.searchResults,o=e.searchLoading,u=e.privateChannel,d=e.isChannelStarred;return i.a.createElement(i.a.Fragment,null,i.a.createElement(le,{channelName:this.displayChannelName(n),numUniqueUsers:s,handleSearchChange:this.handleSearchChange,searchLoading:o,isPrivateChannel:u,handleStar:this.handleStar,isChannelStarred:d}),i.a.createElement(H.a,null,i.a.createElement(K.a.Group,{style:{maxWidth:"98%"},className:he.a.messages},l?this.displayMessages(c):this.displayMessages(a))),i.a.createElement(se,{messagesRef:t,currentChannel:n,currentUser:r,isPrivateChannel:u,getMessagesRef:this.getMessagesRef}))}}]),t}(E),pe=Object(O.b)(function(e){return{currentUser:e.user.currentUser,currentChannel:e.channel.currentChannel,isPrivateChannel:e.channel.isPrivateChannel}})(function(e){var t=e.currentUser,a=e.currentChannel,n=e.isPrivateChannel;return i.a.createElement(h.a,{columns:"equal",className:"app",style:{background:"#eee"}},i.a.createElement(v,null),i.a.createElement(q,{key:t&&t.uid,currentUser:t}),i.a.createElement(h.a.Column,{style:{marginLeft:320}},i.a.createElement(me,{key:a&&a.id,currentChannel:a,currentUser:t,isPrivateChannel:n})),i.a.createElement(h.a.Column,{width:4},i.a.createElement(G,null)))}),fe=a(478),ge=a(76),ve=a(258),Ee=a.n(ve),Ce=a(259),be=a.n(Ce),ye=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",errors:[],loading:!1},a.displayErrors=function(e){return e.map(function(e,t){return i.a.createElement("p",{key:t},e.message)})},a.handleChange=function(e){a.setState(Object(N.a)({},e.currentTarget.name,e.currentTarget.value))},a.handleSubmit=function(e){e.preventDefault(),a.isFormValid(a.state)&&(a.setState({errors:[],loading:!0}),be.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){console.log(e)}).catch(function(e){console.error(e),a.setState({errors:a.state.errors.concat(e),loading:!1})}))},a.isFormValid=function(e){return e.email&&e.password},a.handleInputError=function(e,t){return e.some(function(e){return e.message.toLowerCase().includes(t)})?"error":""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errors,r=e.loading;return i.a.createElement(h.a,{textAlign:"center",verticalAlign:"middle",className:Ee.a.register,"data-test":"register-component"},i.a.createElement(h.a.Column,{style:{maxWidth:450}},i.a.createElement(C.a,{as:"h1",icon:!0,color:"violet",textAlign:"center"},i.a.createElement(b.a,{name:"code branch",color:"violet"}),"Login For DevChat"),i.a.createElement(T.a,{onSubmit:this.handleSubmit},i.a.createElement(H.a,{stacked:!0},i.a.createElement(T.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email Address",value:t,className:this.handleInputError(n,"email"),onChange:this.handleChange,type:"email"}),i.a.createElement(T.a.Input,{fluid:!0,name:"password",icon:"repeat",iconPosition:"left",placeholder:"Password",value:a,className:this.handleInputError(n,"password"),onChange:this.handleChange,type:"password"}),i.a.createElement(g.a,{disabled:r,className:r?"loading":" ",color:"violet",fluid:!0,size:"large"},"Submit")),i.a.createElement(fe.a,null,"Don't have an account?",i.a.createElement(ge.b,{to:"/register"},"Register"))),n.length>0&&i.a.createElement(fe.a,{error:!0},i.a.createElement("h3",null,"Error"),this.displayErrors(n))))}}]),t}(E),Se=a(263),Oe=a.n(Se),je=a(264),ke=a.n(je),Ue=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={username:"",email:"",password:"",passwordConfirmation:"",errors:[],loading:!1,usersRef:U.database().ref("users")},a.displayErrors=function(e){return e.map(function(e,t){return i.a.createElement("p",{key:t},e.message)})},a.handleChange=function(e){a.setState(Object(N.a)({},e.currentTarget.name,e.currentTarget.value))},a.handleSubmit=function(e){e.preventDefault(),a.isFormValid()&&(a.setState({errors:[],loading:!0}),U.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){console.log(e),e.user.updateProfile({displayName:a.state.username,photoURL:"http://gravatar.com/avatar/".concat(ke()(e.user.email),"?d=identicon")}).then(function(){a.saveUser(e).then(function(){console.log("user saved")})}).catch(function(e){console.error(e),a.setState({errors:a.state.errors.concat(e),loading:!1})})}).catch(function(e){console.error(e),a.setState({errors:a.state.errors.concat(e),loading:!1})}))},a.saveUser=function(e){return a.state.usersRef.child(e.user.uid).set({name:e.user.displayName,avatar:e.user.photoURL})},a.handleInputError=function(e,t){return e.some(function(e){return e.message.toLowerCase().includes(t)})?"error":""},a.isFormValid=function(){var e,t=a.state.errors;return a.isFormEmpty(a.state)?(e={message:"Fill In All Fields"},a.setState({errors:t.concat(e)}),!1):!!a.isPasswordValid(a.state)||(e={message:"Password is invalid"},a.setState({errors:t.concat(e)}),!1)},a.isFormEmpty=function(e){return!e.username.length||!e.email.length||!e.password.length||!e.passwordConfirmation.length},a.isPasswordValid=function(e){var t=e.password,a=e.passwordConfirmation;return!(t.length<6||a.length<6)&&t===a},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password,r=e.passwordConfirmation,s=e.errors,l=e.loading;return i.a.createElement(h.a,{textAlign:"center",verticalAlign:"middle",className:Oe.a.register,"data-test":"register-component"},i.a.createElement(h.a.Column,{style:{maxWidth:450}},i.a.createElement(C.a,{as:"h1",icon:!0,color:"orange",textAlign:"center"},i.a.createElement(b.a,{name:"puzzle piece",color:"orange"}),"Register For DevChat"),i.a.createElement(T.a,{"data-test":"form-component",size:"large",onSubmit:this.handleSubmit},i.a.createElement(H.a,{stacked:!0},i.a.createElement(T.a.Input,{fluid:!0,"data-test":"username-input",name:"username",icon:"user",iconPosition:"left",placeholder:"Username",value:t,onChange:this.handleChange,type:"text"}),i.a.createElement(T.a.Input,{fluid:!0,name:"email",icon:"mail",iconPosition:"left",placeholder:"Email Address",value:a,className:this.handleInputError(s,"email"),onChange:this.handleChange,type:"email"}),i.a.createElement(T.a.Input,{fluid:!0,name:"password",icon:"repeat",iconPosition:"left",placeholder:"Password",value:n,className:this.handleInputError(s,"password"),onChange:this.handleChange,type:"password"}),i.a.createElement(T.a.Input,{fluid:!0,name:"passwordConfirmation",icon:"repeat",iconPosition:"left",placeholder:"Password Confirmation",value:r,className:this.handleInputError(s,"password"),onChange:this.handleChange,type:"password"}),i.a.createElement(g.a,{"data-test":"component-submit-btn",disabled:l,className:l?"loading":" ",color:"orange",fluid:!0,size:"large"},"Submit")),i.a.createElement(fe.a,null,"Already a user?",i.a.createElement(ge.b,{to:"/login"}," ","Login"))),s.length>0&&i.a.createElement(fe.a,{error:!0},i.a.createElement("h3",null,"Error"),this.displayErrors(s))))}}]),t}(E),we=a(480),Re=a(473),Ne=function(){return i.a.createElement(we.a,{active:!0},i.a.createElement(Re.a,{size:"huge",content:"Preparing Chat..."}))},Me=a(160),Ae=a(58),Le={currentUser:null,isLoading:!0},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return{currentUser:t.payload.currentUser,isLoading:!1};case"CLEAR_USER":return Object(V.a)({},Le,{isLoading:!1});default:return e}},_e={currentChannel:null},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_CHANNEL":return Object(V.a)({},e,{currentChannel:t.payload.currentChannel});case"SET_PRIVATE_CHANNEL":return Object(V.a)({},e,{isPrivateChannel:t.payload.isPrivateChannel});default:return e}},Fe=Object(Ae.c)({user:Te,channel:Pe}),Ie=a(69);a.d(t,"composeEnhancers",function(){return De}),a.d(t,"middlewares",function(){return xe});var De=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.d,xe=[Me.a],ze=Object(Ae.e)(Fe,De(Object(Ae.a)(Me.a))),Ve=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.isLoading),U.auth().onAuthStateChanged(function(t){t?(e.props.setUser(t),console.log("USER IN INDEX.TSX: ",t.displayName),e.props.history.push("/")):(e.props.history.push("/login"),e.props.clearUser())})}},{key:"render",value:function(){return this.props.isLoading?i.a.createElement(Ne,null):i.a.createElement(Ie.c,null,i.a.createElement(Ie.a,{exact:!0,path:"/",component:pe}),i.a.createElement(Ie.a,{path:"/login",component:ye}),i.a.createElement(Ie.a,{path:"/register",component:Ue}))}}]),t}(E),Be=Object(Ie.e)(Object(O.b)(function(e){return{isLoading:e.user.isLoading}},{setUser:function(e){return{type:"SET_USER",payload:{currentUser:e}}},clearUser:function(){return{type:"CLEAR_USER"}}})(Ve));document.getElementById("root")&&d.a.render(i.a.createElement(O.a,{store:ze},i.a.createElement(ge.a,null,i.a.createElement(Be,null))),document.getElementById("root"));t.default=Ve;"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[276,1,2]]]);
//# sourceMappingURL=main.0a887be5.chunk.js.map