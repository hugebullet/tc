(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,n){e.exports=n(405)},186:function(e,t,n){e.exports=n(404)},191:function(e,t,n){},193:function(e,t,n){},404:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),i=(n(191),n(26)),s=n(27),u=n(29),l=n(28),p=n(30),d=n(184),f=n.n(d),m=n(164),h=n(72),b=(n(193),n(19)),g=n(89),O=n(67),v=n(169),j=n.n(v),E=n(170),w=n.n(E),y=n(69),x=n.n(y),C=n(171),k=n.n(C),P=n(172),S=n.n(P),T=n(73),D=n.n(T),V=n(42),_=n.n(V),N=n(31),B=n.n(N),M=n(108),A=n.n(M),R=n(110),I=n.n(R),F=n(109),W=n.n(F),q=n(107),L=n.n(q),Y=n(165),H=n.n(Y),U=n(167),G=n.n(U),J=n(68),$=n.n(J),Q=n(168),X=n.n(Q),Z=n(104),z=n.n(Z),K=n(88),ee=n.n(K);function te(e){return(e=(e=e.replace(/([A-Z])/g," $1")).charAt(0).toUpperCase()+e.slice(1)).replace(/Id/g,"ID")}var ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){n.props.onRequestSort(t,e)}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.orderDir,a=t.orderBy,c=t.columns;return r.a.createElement(H.a,null,r.a.createElement(D.a,null,c.map(function(t){return r.a.createElement(x.a,{key:t,sortDirection:a===t&&n},r.a.createElement(G.a,{active:a===t,direction:n,onClick:e.createSortHandler(t)},te(t)))},this)))}}]),t}(r.a.Component),ae=["date","advertiserId","advertiserName","campaignId","campaignName","costModel","impressions","clicks","installs","cost"],re=function(e){var t=e.classes,n=e.columns,a=e.onColumnChange;return r.a.createElement($.a,{className:t.root},r.a.createElement(z.a,{className:t.actions},ae.map(function(e){return r.a.createElement(ee.a,{key:e,control:r.a.createElement(X.a,{checked:n.includes(e),onChange:function(t){return a(t,e)},value:e}),label:te(e)})})))};re=Object(O.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},actions:{flexDirection:"row"},spacer:{flex:"1 1 100%"},title:{flex:"0 0 auto"}}})(re);var ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleFirstPageButtonClick=function(e){n.props.onChangePage(e,0)},n.handleBackButtonClick=function(e){n.props.onChangePage(e,n.props.page-1)},n.handleNextButtonClick=function(e){n.props.onChangePage(e,n.props.page+1)},n.handleLastPageButtonClick=function(e){n.props.onChangePage(e,Math.max(0,Math.ceil(n.props.count/n.props.rowsPerPage)-1))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.count,a=e.page,c=e.rowsPerPage,o=e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement(B.a,{onClick:this.handleFirstPageButtonClick,disabled:0===a,"aria-label":"First Page"},"rtl"===o.direction?r.a.createElement(L.a,null):r.a.createElement(A.a,null)),r.a.createElement(B.a,{onClick:this.handleBackButtonClick,disabled:0===a,"aria-label":"Previous Page"},"rtl"===o.direction?r.a.createElement(W.a,null):r.a.createElement(I.a,null)),r.a.createElement(B.a,{onClick:this.handleNextButtonClick,disabled:a>=Math.ceil(n/c)-1,"aria-label":"Next Page"},"rtl"===o.direction?r.a.createElement(I.a,null):r.a.createElement(W.a,null)),r.a.createElement(B.a,{onClick:this.handleLastPageButtonClick,disabled:a>=Math.ceil(n/c)-1,"aria-label":"Last Page"},"rtl"===o.direction?r.a.createElement(A.a,null):r.a.createElement(L.a,null)))}}]),t}(a.PureComponent),oe=Object(O.withStyles)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(ce),ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleChangePage=function(e,t){n.props.setTableViewPage(t)},n.handleChangePerPage=function(e){n.props.setTableViewPerPage(parseInt(e.target.value,10))},n.handleRequestSort=function(e,t){var a=t,r="desc";n.props.orderBy===t&&"desc"===n.props.orderDir&&(r="asc"),n.props.setTableViewOrder({orderBy:a,orderDir:r})},n.handleColumnChange=function(e,t){var a=n.props.columns,r=e.target.checked?[].concat(Object(g.a)(a),[t]):a.filter(function(e){return e!==t});n.props.setTableViewColumns(ae.filter(function(e){return r.includes(e)}))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.page,a=e.perPage,c=e.columns,o=e.rows,i=e.count,s=e.orderBy,u=e.orderDir,l=a-Math.min(a,o.length);return r.a.createElement(_.a,{className:t.root},r.a.createElement(re,{columns:c,onColumnChange:this.handleColumnChange}),r.a.createElement("div",{className:t.tableWrapper},r.a.createElement(j.a,{className:t.table},r.a.createElement(ne,{orderDir:u,orderBy:s,columns:c,onRequestSort:this.handleRequestSort}),r.a.createElement(w.a,null,o.map(function(e,t){return r.a.createElement(D.a,{key:t},c.map(function(t){return r.a.createElement(x.a,{key:t},"cost"===t?"$".concat(e[t]):e[t])}))}),l>0&&r.a.createElement(D.a,{style:{height:48*l}},r.a.createElement(x.a,{colSpan:c.length}))),r.a.createElement(k.a,null,r.a.createElement(D.a,null,r.a.createElement(S.a,{rowsPerPageOptions:[5,10,25,50],colSpan:c.length,count:i,rowsPerPage:a,page:n,SelectProps:{native:!0},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangePerPage,ActionsComponent:oe}))))))}}]),t}(a.PureComponent),se=Object(O.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:500},tableWrapper:{overflowX:"auto"}}})(ie),ue=n(37),le=n(8),pe=Object(ue.b)(function(e){return Object(b.a)({},e.tableView)},{setTableViewPage:le.s,setTableViewPerPage:le.t,setTableViewOrder:le.r,setTableViewColumns:le.q})(se),de=n(50),fe=n.n(de),me=n(71),he=n.n(me),be=n(57),ge=n.n(be),Oe=n(47),ve=n.n(Oe),je=n(90),Ee=n.n(je),we=n(70),ye=n.n(we),xe={PaperProps:{style:{maxHeight:224,width:250}}},Ce=["per_impression","per_click","per_install"],ke=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.advertisers,n=e.campaigns,a=e.advertiserId,c=e.campaignId,o=e.costModel,i=e.theme,s=e.classes,u=e.setFilters;return r.a.createElement("div",{className:s.root},r.a.createElement("div",{className:s.label},"Filters:"),r.a.createElement(fe.a,{className:s.formControl},r.a.createElement(he.a,{htmlFor:"advertisers"},"Advertisers"),r.a.createElement(ge.a,{multiple:!0,value:a,onChange:function(e){return u({advertiserId:e.target.value})},input:r.a.createElement(ve.a,{id:"advertisers"}),renderValue:function(e){return r.a.createElement("div",{className:s.chips},e.map(function(e){return r.a.createElement(Ee.a,{key:e,label:e+": "+t.find(function(t){return t.id===e}).name,className:s.chip})}))},MenuProps:xe},t.map(function(e){var t=e.name,n=e.id;return r.a.createElement(ye.a,{key:n,value:n,style:Pe(n,a,i)},n,": ",t)}))),r.a.createElement(fe.a,{className:s.formControl},r.a.createElement(he.a,{htmlFor:"campaigns"},"Campaigns"),r.a.createElement(ge.a,{multiple:!0,value:c,onChange:function(e){return u({campaignId:e.target.value})},input:r.a.createElement(ve.a,{id:"campaigns"}),renderValue:function(e){return r.a.createElement("div",{className:s.chips},e.map(function(e){return r.a.createElement(Ee.a,{key:e,label:e+": "+n.find(function(t){return t.id===e}).name,className:s.chip})}))},MenuProps:xe},n.map(function(e){var t=e.name,n=e.id;return r.a.createElement(ye.a,{key:n,value:n,style:Pe(n,c,i)},n,": ",t)}))),r.a.createElement(fe.a,{className:s.formControl},r.a.createElement(he.a,{htmlFor:"costModel"},"Cost Model"),r.a.createElement(ge.a,{multiple:!0,value:o,onChange:function(e){return u({costModel:e.target.value})},input:r.a.createElement(ve.a,{id:"costModel"}),renderValue:function(e){return r.a.createElement("div",{className:s.chips},e.map(function(e){return r.a.createElement(Ee.a,{key:e,label:e,className:s.chip})}))},MenuProps:xe},Ce.map(function(e){return r.a.createElement(ye.a,{key:e,value:e,style:Pe(e,o,i)},e)}))))}}]),t}(a.PureComponent);function Pe(e,t,n){return{fontWeight:-1===t.indexOf(e)?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}var Se=Object(O.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:e.spacing.unit/4},noLabel:{marginTop:3*e.spacing.unit},label:{lineHeight:"32px",margin:"23px 8px 8px"}}},{withTheme:!0})(ke),Te=Object(ue.b)(function(e){return Object(b.a)({},e.filters,{advertisers:e.advertisers,campaigns:e.campaigns})},{setFilters:le.p})(Se),De=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.startDate,n=e.endDate,a=e.setDates;return console.log(this.props),r.a.createElement("div",null,r.a.createElement(h.a,{keyboard:!0,label:"Start date",format:"YYYY-MM-DD",placeholder:"2018-10-10",mask:function(e){return e?[/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/]:[]},value:t,onChange:function(e){a({startDate:e.toDate()})},disableOpenOnEnter:!0,animateYearScrolling:!1}),r.a.createElement(h.a,{keyboard:!0,label:"End date",format:"YYYY-MM-DD",placeholder:"10/10/2018",mask:function(e){return e?[/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/]:[]},value:n,onChange:function(e){return a({endDate:e})},disableOpenOnEnter:!0,animateYearScrolling:!1}))}}]),t}(a.PureComponent),Ve=Object(ue.b)(function(e){return Object(b.a)({},e.dates)},{setDates:le.o})(De),_e=n(180),Ne=n(106),Be=n.n(Ne),Me=n(183),Ae=n.n(Me),Re=n(182),Ie=n.n(Re),Fe=["impressions","clicks","installs","cost"],We=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.columns,a=e.rows,c=e.setChartViewSecondColumn;return r.a.createElement(_.a,{className:t.root},r.a.createElement(_e.a,{width:"600px",height:"250px",chartType:"Line",options:{legend:{position:"none"},hAxis:{textPosition:"in"}},data:[n.map(te)].concat(Object(g.a)(a.map(function(e){return n.map(function(t){return e[t]})})))}),r.a.createElement(fe.a,{className:t.formControl},r.a.createElement(Be.a,{component:"legend"},"Metric"),r.a.createElement(Ie.a,{"aria-label":"Metric",value:n[1],onChange:function(e){return c(e.target.value)}},Fe.map(function(e){return r.a.createElement(ee.a,{value:e,control:r.a.createElement(Ae.a,null),label:te(e)})}))))}}]),t}(a.PureComponent),qe=Object(O.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap-reverse",justifyContent:"center",marginTop:3*e.spacing.unit,padding:3*e.spacing.unit,width:"100%"},formControl:{margin:e.spacing.unit,marginLeft:3*e.spacing.unit,minWidth:120}}})(We),Le=Object(ue.b)(function(e){return Object(b.a)({},e.chartView)},{setChartViewSecondColumn:le.n})(qe),Ye=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement(h.b,{utils:m.a},r.a.createElement("div",{className:this.props.classes.datesAndFilters},r.a.createElement(Ve,null),r.a.createElement(Te,null)),r.a.createElement(Le,null),r.a.createElement(pe,null)))}}]),t}(a.PureComponent),He=Object(O.withStyles)(function(e){return{datesAndFilters:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}})(Ye);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=n(185),Ge=n.n(Ue),Je=n(18),$e=n.n(Je),Qe=n(12),Xe=n(74),Ze=(n(385),n(113)),ze=n(48),Ke=n.n(ze),et="https://mytestcase.herokuapp.com/api",tt=["columns","page","perPage","filter","startDate","endDate","orderBy","orderDir"];function nt(e){return at.apply(this,arguments)}function at(){return(at=Object(Xe.a)($e.a.mark(function e(t){var n,a;return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return pt(n=new Ze.URL("".concat(et,"/reports")),t,tt),e.next=4,fetch(n);case 4:if(200===(a=e.sent).status){e.next=7;break}throw new Error("Failed to load reports");case 7:return e.abrupt("return",a.json());case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var rt=["columns","filter","startDate","endDate"];function ct(e){return ot.apply(this,arguments)}function ot(){return(ot=Object(Xe.a)($e.a.mark(function e(t){var n,a;return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return pt(n=new Ze.URL("".concat(et,"/reports/count")),t,rt),e.next=4,fetch(n);case 4:if(200===(a=e.sent).status){e.next=7;break}throw new Error("Failed to load reports count");case 7:return e.abrupt("return",a.json());case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function it(){return st.apply(this,arguments)}function st(){return(st=Object(Xe.a)($e.a.mark(function e(){var t;return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(et,"/advertisers"));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Failed to load advertisers");case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function ut(){return lt.apply(this,arguments)}function lt(){return(lt=Object(Xe.a)($e.a.mark(function e(){var t;return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(et,"/campaigns"));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Failed to load campaigns");case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function pt(e,t,n){Object.keys(t).forEach(function(a){n.includes(a)&&(Array.isArray(t[a])?t[a].forEach(function(t){return e.searchParams.append("".concat(a,"[]"),t)}):t[a]instanceof Date?e.searchParams.append(a,Ke()(t[a]).format("YYYY-MM-DD")):"object"===typeof t[a]?e.searchParams.append(a,JSON.stringify(t[a])):e.searchParams.append(a,t[a]))})}var dt=$e.a.mark(Ot),ft=$e.a.mark(vt),mt=$e.a.mark(wt),ht=$e.a.mark(yt),bt=$e.a.mark(xt),gt=$e.a.mark(Ct);function Ot(){return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.a)([Object(Qe.c)(jt(le.l,nt)),Object(Qe.c)(jt(le.m,ct)),Object(Qe.c)(Et(le.j,it)),Object(Qe.c)(Et(le.k,ut)),Object(Qe.c)(yt),Object(Qe.c)(wt),Object(Qe.c)(xt),Object(Qe.c)(Ct),Object(Qe.c)(vt)]);case 2:case"end":return e.stop()}},dt,this)}function vt(){return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qe.d)(le.j.request());case 2:return e.next=4,Object(Qe.d)(le.k.request());case 4:return e.next=6,Object(Qe.d)(le.l.request({target:"chartView"}));case 6:return e.next=8,Object(Qe.d)(le.l.request({target:"tableView"}));case 8:return e.next=10,Object(Qe.d)(le.m.request({target:"tableView"}));case 10:case"end":return e.stop()}},ft,this)}function jt(e,t){return $e.a.mark(function n(){return $e.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Qe.g)(e[le.a],$e.a.mark(function n(a){var r,c,o,i;return $e.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.payload,c=r.target,n.next=4,Object(Qe.e)();case 4:return o=n.sent,n.prev=5,n.next=8,Object(Qe.b)(t,Object(b.a)({},o[c],{filter:o.filters},o.dates));case 8:return i=n.sent,n.next=11,Object(Qe.d)(e.success({target:c,data:i}));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(5),n.next=17,Object(Qe.d)(e.failure({target:c,data:n.t0}));case 17:case"end":return n.stop()}},n,this,[[5,13]])}));case 2:case"end":return n.stop()}},n,this)})}function Et(e,t){return $e.a.mark(function n(){var a,r,c;return $e.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(Qe.f)(e[le.a]);case 3:return a=n.sent,r=a.payload,n.prev=5,n.next=8,Object(Qe.b)(t,r);case 8:return c=n.sent,n.next=11,Object(Qe.d)(e.success({data:c}));case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(5),n.next=17,Object(Qe.d)(e.failure({data:n.t0}));case 17:n.next=0;break;case 19:case"end":return n.stop()}},n,this,[[5,13]])})}function wt(){return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Qe.f)([le.g,le.h,le.f,le.e]);case 3:return e.next=5,Object(Qe.d)(le.l.request({target:"tableView"}));case 5:e.next=0;break;case 7:case"end":return e.stop()}},mt,this)}function yt(){return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Qe.f)(le.e);case 3:return e.next=5,Object(Qe.d)(le.m.request({target:"tableView"}));case 5:e.next=0;break;case 7:case"end":return e.stop()}},ht,this)}function xt(){return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Qe.f)(le.b);case 3:return e.next=5,Object(Qe.d)(le.l.request({target:"chartView"}));case 5:e.next=0;break;case 7:case"end":return e.stop()}},bt,this)}function Ct(){return $e.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Qe.f)([le.d,le.c]);case 3:return e.next=5,Object(Qe.d)(le.l.request({target:"chartView"}));case 5:return e.next=7,Object(Qe.d)(le.l.request({target:"tableView"}));case 7:return e.next=9,Object(Qe.d)(le.m.request({target:"tableView"}));case 9:e.next=0;break;case 11:case"end":return e.stop()}},gt,this)}var kt=Ge()(window.__INITIAL_STATE__);kt.runSaga(Ot),o.a.render(r.a.createElement(ue.a,{store:kt},r.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},405:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(114),c=n(19),o=n(48),i=n.n(o),s=n(8),u=Object(a.c)({tableView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loadingRows:!0,loadingCount:!0,rows:[],count:0,orderBy:"date",orderDir:"desc",page:0,perPage:5,columns:["date","cost"]},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.l[s.a]:return"tableView"!==a.target?e:Object(c.a)({},e,{loadingRows:!0});case s.m[s.a]:return"tableView"!==a.target?e:Object(c.a)({},e,{loadingCount:!0});case s.l[s.i]:return"tableView"!==a.target?e:Object(c.a)({},e,{rows:a.data,loadingRows:!1});case s.m[s.i]:return"tableView"!==a.target?e:Object(c.a)({},e,{count:a.data[0].count,loadingCount:!1});case s.g:return Object(c.a)({},e,{page:a});case s.h:return Object(c.a)({},e,{perPage:a});case s.f:return Object(c.a)({},e,a);case s.e:if(a.length<1)return e;var r=a.includes(e.orderBy)?e.orderBy:a[0],o=r!==e.orderBy?"desc":e.orderDir;return Object(c.a)({},e,{columns:a,page:0,orderBy:r,orderDir:o});default:return e}},chartView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,columns:["date","cost"],orderBy:"date",orderDir:"asc",perPage:9999,rows:[]},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.l[s.a]:return"chartView"!==a.target?e:Object(c.a)({},e,{loadingRows:!0});case s.l[s.i]:return"chartView"!==a.target?e:Object(c.a)({},e,{rows:a.data,loading:!1});case s.b:return Object(c.a)({},e,{columns:["date",a]});default:return e}},advertisers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.j[s.i]:return a.data;default:return e}},campaigns:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.k[s.i]:return a.data;default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{advertiserId:[],campaignId:[],costModel:[]},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.d:return Object(c.a)({},e,a);default:return e}},dates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{startDate:i()("2018-01-01").toDate(),endDate:i()("2018-12-31").toDate()},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s.c:return Object(c.a)({},e,a);default:return e}}});function l(e){var t=Object(r.b)(),n=Object(a.d)(u,e,Object(a.a)(t));return n.runSaga=t.run,n.close=function(){return n.dispatch(r.a)},n}n.d(t,"default",function(){return l})},8:function(e,t,n){"use strict";n.d(t,"g",function(){return c}),n.d(t,"h",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"e",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return p}),n.d(t,"s",function(){return d}),n.d(t,"t",function(){return f}),n.d(t,"r",function(){return m}),n.d(t,"q",function(){return h}),n.d(t,"p",function(){return b}),n.d(t,"o",function(){return g}),n.d(t,"n",function(){return O}),n.d(t,"a",function(){return v}),n.d(t,"i",function(){return j}),n.d(t,"l",function(){return k}),n.d(t,"m",function(){return P}),n.d(t,"j",function(){return S}),n.d(t,"k",function(){return T});var a=n(58),r=n(19),c="SET_TABLE_VIEW_PAGE",o="SET_TABLE_VIEW_PER_PAGE",i="SET_TABLE_VIEW_ORDER",s="SET_TABLE_VIEW_COLUMNS",u="SET_FILTERS",l="SET_DATES",p="SET_CHART_VIEW_SECOND_COLUMN",d=function(e){return{type:c,payload:e}},f=function(e){return{type:o,payload:e}},m=function(e){return{type:i,payload:e}},h=function(e){return{type:s,payload:e}},b=function(e){return{type:u,payload:e}},g=function(e){return{type:l,payload:e}},O=function(e){return{type:p,payload:e}},v=0,j=1,E=2,w=V("FETCH_REPORTS"),y=V("FETCH_REPORTS_COUNT"),x=V("FETCH_ADVERTISERS"),C=V("FETCH_CAMPAIGNS"),k=D(w),P=D(y),S=D(x),T=D(C);function D(e){return Object(r.a)({},e,{request:function(t){return{type:e[v],payload:t}},success:function(t){return{type:e[j],payload:t}},failure:function(t){return{type:e[E],payload:t}}})}function V(e){var t;return t={},Object(a.a)(t,v,"".concat(e,"_REQUEST")),Object(a.a)(t,j,"".concat(e,"_SUCCESS")),Object(a.a)(t,E,"".concat(e,"_FAILURE")),t}}},[[186,2,1]]]);
//# sourceMappingURL=main.f9c55b81.chunk.js.map