"use strict";(self.webpackChunkgoit_tech_project=self.webpackChunkgoit_tech_project||[]).push([[309],{5309:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var s=t(9439),a=t(3590),r=t(8910);function c(n,e,t,s,a,r,c){try{var i=n[r](c),o=i.value}catch(l){return void t(l)}i.done?e(o):Promise.resolve(o).then(s,a)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(s,a){var r=n.apply(e,t);function i(n){c(r,s,a,i,o,"next",n)}function o(n){c(r,s,a,i,o,"throw",n)}i(void 0)}))}}var o=t(7757),l=t.n(o),u=t(2791),d=t(5048),f=t(5440),_="Cards_item__5r4Kx",x="Cards_img__Ol0Rm",h="Cards_avatar-box__5tzx-",m="Cards_box-middle__wDR0N",v="Cards_box-top__EdQze",b="Cards_box-bottom__bg4mP",j="Cards_logo__MV8aA",p="Cards_tweets__xfC-T",N="Cards_followers__6KW2d",w="Cards_btn-follow__+X1DB",C="Cards_btn-unfollow__Ay3Hy",g=function(n){return n.followers.followers},k=t(184),P=function(n){var e=n.user,t=e.id,r=e.avatar,c=e.tweets,o=e.followers,P=(0,u.useState)(!1),Z=(0,s.Z)(P,2),E=Z[0],y=Z[1],O=(0,a.Mk)(),F=(0,s.Z)(O,1)[0],A=(0,u.useState)(o),L=(0,s.Z)(A,2),S=L[0],K=L[1],W=(0,d.I0)(),G=(0,d.v9)(g),R=function(){var n=i(l().mark((function n(e){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:K(S+1),t=function(){return{followers:o+1}}(),F({body:t,id:e}),W((0,f.P_)(e)),y(!0);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=i(l().mark((function n(e){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:K(S-1),t=function(){return{followers:o-1}}(),F({body:t,id:e}),W((0,f.wQ)(e)),y(!1);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,u.useEffect)((function(){G.includes(t)?y(!1):y(!0)}),[G,E,t]),(0,k.jsxs)("li",{className:_,children:[(0,k.jsx)("div",{className:j}),(0,k.jsx)("div",{className:v}),(0,k.jsx)("div",{className:m}),(0,k.jsx)("div",{className:h,children:(0,k.jsx)("img",{className:x,src:r,alt:"avatar"})}),(0,k.jsxs)("div",{className:b,children:[(0,k.jsxs)("p",{className:p,children:[c," TWEETS"]}),(0,k.jsxs)("p",{className:N,children:[String(S).replace(/\B(?=(\d{3})+(?!\d))/g,",")," FOLLOWERS"]}),E?(0,k.jsx)("button",{onClick:function(){R(t)},className:w,children:"FOLLOW"}):(0,k.jsx)("button",{onClick:function(){T(t)},className:C,children:"FOLLOWING"})]})]})},Z=t(1087),E="Pagination_pagination-box__Ow7C9",y="Pagination_btn-next-page__C8KHo",O="Pagination_btn-previous-page__6EKCy",F=function(n){var e=n.prevPage,t=n.nextPage;n.data;return(0,k.jsxs)("div",{className:E,children:[(0,k.jsx)("button",{onClick:e,className:O,children:"PREV PAGE"}),(0,k.jsx)("button",{onClick:t,className:y,children:"NEXT PAGE"})]})},A=Math.ceil(20/6),L=function(){var n=(0,u.useState)(1),e=(0,s.Z)(n,2),t=e[0],c=e[1],i=(0,a.zQ)(t).data,o=void 0===i?[]:i;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:r.Z.header,children:[(0,k.jsx)(Z.rU,{to:"/",children:(0,k.jsx)("button",{className:r.Z["btn-back"],children:(0,k.jsx)("span",{children:"GO BACK"})})}),(0,k.jsxs)("div",{className:r.Z.filter,children:[(0,k.jsx)("button",{className:r.Z["btn-back"],children:"All"}),(0,k.jsx)("button",{className:r.Z["btn-back"],children:"Follow"}),(0,k.jsx)("button",{className:r.Z["btn-back"],children:"Following"})]})]}),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("ul",{className:r.Z.list,children:o.map((function(n){return(0,k.jsx)(P,{user:n},n.id)}))}),(0,k.jsx)(F,{prevPage:function(){1!==t&&c((function(n){return n-1}))},nextPage:function(){t!==A&&c((function(n){return n+1}))}})]})]})}}}]);
//# sourceMappingURL=309.806fd9fb.chunk.js.map