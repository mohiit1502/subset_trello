(this.webpackJsonpsubset_trello=this.webpackJsonpsubset_trello||[]).push([[4],{103:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e){e.exports=JSON.parse("{}")},112:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),i=a(64),o=a(159),l=a(158),s=a(123),m=a(92),d=Object(m.a)((function(e){return e.data}),(function(e){return e.pages.home})),u=Object(i.createGetSelector)(d,"isMobile"),p=(Object(i.createGetSelector)(d,"formErrors"),Object(i.createGetSelector)(d,"formValues"),a(9)),b=(a(93),a(94),a(95),function(e){return c.a.createElement("div",{className:"c-BoardTitle"},c.a.createElement("p",null,e.title))}),f=function(e){return c.a.createElement("div",{className:"c-BoardHeader"},c.a.createElement(b,{title:"Test Board"}))},h=(a(96),a(97),a(98),a(146)),v=(a(99),function(e){var t=e.addhandler;return c.a.createElement("div",{className:"c-AddListButton",onClick:function(){return t(!0)}},c.a.createElement("span",{className:"c-AddListButton__empty-list__add-button"},c.a.createElement(h.a,{fontSize:"small"}),"Add another list"))}),g=(a(103),function(e){var t=e.addhandler;return c.a.createElement("div",{className:"c-AddCardButton",onClick:function(){return t(!0)}},c.a.createElement("span",{className:"c-AddListButton__empty-list__add-button"},c.a.createElement(h.a,{fontSize:"small"}),"Add another list"))}),E=a(61),w={CARD:"card",LIST:"list"},_=a(165),y=a(166),k=(a(104),function(e){var t=Object(n.useRef)(null),a=e.card,r=e.index,i=e.listId,o=e.moveCard,l=e.removeCard,s="c-Card-".concat(i+"-"+r);a&&(a.id=s);var m=Object(_.a)({item:{type:w.CARD,index:r,card:a,listId:i},end:function(e,t){var a,n=t.getDropResult();n&&(a=n.listId),t.didDrop()&&e.listId!==a&&l(r,i)},collect:function(e){return{isDragging:!!e.isDragging()}}}),d=Object(E.a)(m,2),u=d[0].isDragging,p=d[1],b=Object(y.a)({accept:w.CARD,hover:function(e,a){if(t.current){var n=e.index,c=r;if(n!==c){var i=t.current.getBoundingClientRect(),l=(i.bottom-i.top)/2,s=a.getClientOffset().y-i.top;n<c&&s<l||n>c&&s>l||(o(n,c),e.index=c)}}}});return p((0,Object(E.a)(b,2)[1])(t)),c.a.createElement("div",{id:s,className:"c-Card c-Card--modifier c-AttributeCreator--shadow",ref:t,style:{opacity:u?.5:1,cursor:"move"}},c.a.createElement("div",null,a&&a.title),c.a.createElement("div",null,a&&a.description))}),O=a(124),j=a(149),N=(a(106),{dispatchCardPosition:p.e}),C=(Object(r.b)(null,N)((function(e){var t=e.index,a=e.list,r=a.cards,i=a.displayName,o=a.id,l=Object(n.useState)(!1),s=Object(E.a)(l,2),m=s[0],d=s[1],u=Object(n.useState)(!1),p=Object(E.a)(u,2),b=p[0],f=p[1],h=Object(n.useState)(r),_=Object(E.a)(h,2),N=_[0],C=_[1],x=Object(y.a)({accept:w.CARD,drop:function(e,t){return o!==e.listId&&A(e.card),{listId:o}},collect:function(e){return{isOver:!!e.isOver()}}}),L=Object(E.a)(x,2),z=(L[0].isOver,L[1]),A=function(e){var t=[].concat(Object(O.a)(N),[e]);C(t)},S=function(e,t){console.log("in remove "+t);var a=[];Object.assign(a,N),a.splice(e,1),console.log(a),C(a)},D=function(e,t){var a=N[e],n=[];Object.assign(n,N),n.splice(e,1),n.splice(t,0,a),C(n)},I=function(){return c.a.createElement("div",{className:"col-3 c-Main__list-col"},c.a.createElement("div",{className:"c-List__empty-list".concat(m?" adding":"")},m?c.a.createElement("form",{id:"c-List__emptyList__add-list",className:"c-List__empty-list__new-list-form",style:{height:"100%",width:"100%"}},c.a.createElement("input",{type:"text",className:"c-List__empty-list__new-list-textbox",placeholder:"Enter list title"}),c.a.createElement("span",{className:"c-List__empty-list__new-list-button"},c.a.createElement("input",{type:"button",value:"Add"}))):c.a.createElement(v,{addhandler:d,onClick:function(){return d(!1)}})))},M=N&&N.map((function(e,t){return c.a.createElement(k,{key:t,index:t,listId:o,card:e,removeCard:S,moveCard:D})}));return c.a.createElement("div",{className:"c-List",ref:z},M?c.a.createElement("div",{className:"c-List__container--modifier"},c.a.createElement("div",{className:"c-List__title"},i),c.a.createElement("div",{id:"c-List__body-".concat(t),className:"c-List__body"},M),b?c.a.createElement("form",{id:"c-List__new-card-form",className:"c-List__new-card-form",style:{height:"100%",width:"100%"}},c.a.createElement("textarea",{type:"text",className:"c-List__new-card-textbox",placeholder:"Enter a title for this card"}),c.a.createElement("span",{className:"c-List__new-card-button"},c.a.createElement("input",{type:"button",className:"btn btn-success",value:"Add Card",onClick:function(e){document.forms["c-List__new-card-form"]}})),c.a.createElement(j.a,{fontSize:"medium",style:{marginLeft:"0.5rem",color:"#ccc",cursor:"pointer"},onClick:function(){return f(!1)}})):c.a.createElement("div",{className:"c-List__add-card-button"},c.a.createElement(g,{addhandler:f,onClick:function(){return f(!1)}}))):c.a.createElement(I,null))})),a(107),a(108),a(109),a(110),a(111),a(112),function(e){Object(n.useEffect)((function(){fetch("/todos").then((function(e){return e.json()})).then((function(e){return console.log(JSON.parse(e))}))}));return c.a.createElement("div",{className:"container c-Main"},c.a.createElement("div",{className:"row"},c.a.createElement(f,null)),c.a.createElement("div",{className:"row c-Main__list-row"},void 0))}),x=(a(113),function(e){return c.a.createElement("div",{className:"c-Aside"},"In Component Aside")}),L=a(114),z=a(150),A=a(71),S=a(162),D=a(167),I=a(152),M=a(153),R=a(154),B=a(155),H=a(156),T=a(164),q=a(157),P=a(120),G=a.n(P),J=a(121),V=a.n(J),W=a(119),F=a.n(W),K=a(116),Q=a.n(K),U=a(118),X=a.n(U),Y=a(122),Z=a.n(Y),$=(a(115),Object(z.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(L.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(L.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(A.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(A.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(L.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(L.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(L.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})));function ee(e){var t=e.children,a=e.window,n=Object(q.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return c.a.cloneElement(t,{elevation:n?4:0})}var te=function(e){var t=$(),a=c.a.useState(null),n=Object(E.a)(a,2),r=n[0],i=n[1],o=c.a.useState(null),l=Object(E.a)(o,2),s=l[0],m=l[1],d=Boolean(r),u=Boolean(s),p=function(e){i(e.currentTarget)},b=function(){m(null)},f=function(){i(null),b()},h="primary-search-account-menu",v=c.a.createElement(S.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:h,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:f},c.a.createElement(D.a,{onClick:f},"Profile"),c.a.createElement(D.a,{onClick:f},"My account")),g=c.a.createElement(S.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:b},c.a.createElement(D.a,null,c.a.createElement(I.a,{"aria-label":"show 4 new mails",color:"inherit"},c.a.createElement(M.a,{badgeContent:4,color:"secondary"},c.a.createElement(Q.a,null))),c.a.createElement("p",null,"Messages")),c.a.createElement(D.a,null,c.a.createElement(I.a,{"aria-label":"show 11 new notifications",color:"inherit"},c.a.createElement(M.a,{badgeContent:11,color:"secondary"},c.a.createElement(X.a,null))),c.a.createElement("p",null,"Notifications")),c.a.createElement(D.a,{onClick:p},c.a.createElement(I.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},c.a.createElement(F.a,null)),c.a.createElement("p",null,"Profile")));return c.a.createElement("div",{className:"".concat(t.grow," c-Header")},c.a.createElement(ee,null,c.a.createElement(R.a,null,c.a.createElement(B.a,null,c.a.createElement(I.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},c.a.createElement(G.a,null)),c.a.createElement(H.a,{className:t.title,variant:"h6",noWrap:!0},"TODO Manager"),c.a.createElement("div",{className:t.search},c.a.createElement("div",{className:t.searchIcon},c.a.createElement(V.a,null)),c.a.createElement(T.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),c.a.createElement("div",{className:t.grow}),c.a.createElement("div",{className:t.sectionDesktop},c.a.createElement(I.a,{"aria-label":"show 4 new mails",color:"inherit"},c.a.createElement(M.a,{badgeContent:4,color:"secondary"},c.a.createElement(Q.a,null))),c.a.createElement(I.a,{"aria-label":"show 17 new notifications",color:"inherit"},c.a.createElement(M.a,{badgeContent:17,color:"secondary"},c.a.createElement(X.a,null))),c.a.createElement(I.a,{edge:"end","aria-label":"account of current user","aria-controls":h,"aria-haspopup":"true",onClick:p,color:"inherit"},c.a.createElement(F.a,null))),c.a.createElement("div",{className:t.sectionMobile},c.a.createElement(I.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},c.a.createElement(Z.a,null)))))),c.a.createElement(B.a,null),g,v)},ae=Object(i.createPropsSelector)({isMobile:u}),ne={dispatchDeviceType:p.f},ce=Object(r.b)(ae,ne)((function(e){var t=e.dispatchDeviceType;Object(n.useEffect)((function(){t({isMobile:a()}),document.body.classList.add("body-board-view")}),[t]);var a=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t};return c.a.createElement(l.a,{backend:s.a},c.a.createElement("div",{className:"c-Home"},c.a.createElement(o.a,null),c.a.createElement(te,null),c.a.createElement("div",{className:"c-Home__content container"},c.a.createElement("div",{className:"row c-Home__content-row"},c.a.createElement("div",{className:"col-10 c-Home__main-container body-board-view"},c.a.createElement(C,null)),c.a.createElement("div",{className:"col-2 c-Home__aside-container"},c.a.createElement(x,null))))))}));t.default=ce},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}}]);
//# sourceMappingURL=4.420f5a43.chunk.js.map