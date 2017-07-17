webpackJsonp([1],{234:function(t,e,s){function n(t){s(475)}var a=s(46)(s(241),s(494),n,"data-v-c9a8a834",null);t.exports=a.exports},235:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(87),a=s(485),i=s.n(a),o=s(243),r=s(89);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:i.a}})},237:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(488),a=s.n(n);e.default={name:"app",components:{modal:a.a}}},238:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(245),a=s.n(n);e.default={name:"chart",props:["percent","docPageNumber"],methods:{openBudgetDoc:function(){this.docPageNumber&&($("#issuuModal").modal("show"),window.IssuuReaders.get(this.$store.state.issuuConfigId).setPageNumber(this.docPageNumber))},intiChart:function(){a.a.defaults.global.tooltips.enabled=!1;var t=document.getElementById("myChart").getContext("2d");new a.a(t,{type:"doughnut",data:{labels:[this.percent+"%"],datasets:[{data:[this.percent,100-this.percent],backgroundColor:["rgba(245,149,117, 1)","rgba(22,67,113, 0.7)"]}]},options:{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}})}},mounted:function(){this.intiChart()}}},239:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(234),a=s.n(n);e.default={name:"home",components:{panel:a.a}}},240:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modal",data:function(){return{modalTitle:"FY 18/19 Hillsborough County Administrator's Recommended Budget"}}}},241:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"panel",props:["panel"]}},242:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(234),a=s.n(n),i=s(486),o=s.n(i);e.default={name:"economic-development",props:["panel"],components:{panel:a.a,chart:o.a}}},243:function(t,e,s){"use strict";var n=s(87),a=s(496),i=s(89),o=s(487),r=s.n(o),l=s(489),c=s.n(l);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/economic-development",component:c.a,props:{panel:i.a.state.panels.index[0]},children:[{path:"/",name:"EconDev"}]},{path:"/fire-rescue",component:c.a,props:{panel:i.a.state.panels.index[1]},children:[{path:"/",name:"FireRescue"}]},{path:"/conservation-environmental-land-management",component:c.a,props:{panel:i.a.state.panels.index[2]},children:[{path:"/",name:"Conservation"}]},{path:"/social-services",component:c.a,props:{panel:i.a.state.panels.index[3]},children:[{path:"/",name:"Social"}]},{path:"/public-works",component:c.a,props:{panel:i.a.state.panels.index[4]},children:[{path:"/",name:"PublicWorks"}]},{path:"*",component:r.a}],scrollBehavior:function(t,e,s){return{x:0,y:0}}})},244:function(t,e,s){"use strict";var n=s(480),a=s.n(n),i=s(481),o=s.n(i),r=s(482),l=s.n(r),c=s(483),d=s.n(c),u=s(484),v=s.n(u);e.a={state:{index:[{index:1,title:"Strong & Sustainable Local Economy",colorHex:"#bfbfbf",colorRGB:"191,191,191",icon:a.a,path:"/economic-development",heading:"Economic Development",subheading:"Small and Minority Business Development",serviceHeading:"Small Businesses participate in Entrepreneur Collaborative Center activities and receive consulting services",services:["Mandated by <strong>Resolution</strong>"],serviceStats:[{title:"Actual Units of service provided in FY16",value:"$2,095,635.20"},{title:"Actual Clients Served in FY16",value:"62,956",note:"Small Businesses in Hillsborough County"},{title:"Projected Units of Service provided in FY18",value:"11,600*"},{title:"Clients Served (Projected for FY18)",value:"65,499*",note:"Small Businesses in Hillsborough County"}],serviceNotes:["* 2% annual growth in small businesses based on past trendline"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$2,095,635.20"},{title:"Total Salaries for Providing Services",value:"$1,241,085.20"},{title:"Total Operating Costs",value:"$854,550.00"},{title:"Cost of service for Participating Small Businesses",value:"$180.66"},{title:"Cost per Total Number of Hillsborough County Small Business",value:"$31.99"}],totalBudget:"$9,311,272.00",totalBudgetPercent:23,totalBudgetNote:"",footer:"Utilization of MBE and SBE Firms in County Contracts (FY16: 17.1%; FY17: 17.5%; FY18: 18%)",budgetPageNumber:249},{index:2,title:"Enhanced Public Safety",colorHex:"#dbad4d",colorRGB:"219,173,77",icon:o.a,path:"/fire-rescue",heading:"Fire Rescue",subheading:"Emergency Service Delivery",serviceHeading:"Emergency Call Responses",services:["Service is <strong>Mandated</strong>"],serviceStats:[{title:"Actual Units of service provided in FY16",value:"103,433"},{title:"Actual Clients Served in FY16",value:"924,013",note:"Citizens residing in unincorporated Hillsborough County"},{title:"Projected Units of Service provided in FY18",value:"114,035*"},{title:"Clients Served (Projected for FY18)",value:"963,373**",note:"Citizens residing in unincorporated Hillsborough County"}],serviceNotes:["* 5% annual increase in Emergency Call Responses","** Approx. 2% annual population increase for unincorporated citizens.","Source: University of Florida Bureau of Economic and Business Research"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$134,775,754.00"},{title:"Total Salaries for Providing Services",value:"$113,239,816.00"},{title:"Total Operating Costs",value:"$21,457,938.00"},{title:"Total Grants and Aid",value:"$78,000.00"},{title:"Cost per Emergency Call Response",note:'excludes pass thru costs "Grants & Aids"',value:"$1,181.20"},{title:"Cost per Citizen",note:'includes pass thru costs "Grants & Aids"',value:"$139.90"}],totalBudget:"$148,307,104.00",totalBudgetPercent:91,totalBudgetNote:"Indirects as Reflected in the FY18 Budget: <strong>$6,997,053.00</strong>",footer:"1) 1st on scene, Urban, Fire 90% of the time in under 6 minutes (FY16: 53.61%; FY17: 52.12%) / 2) 1st on scene, Suburban, Fire 90% of the time in under 7 minutes (FY16: 52.82%; FY17: 51.48%) / 3) 1st on scene, Rural, Fire 90% of the time in under 10 minutes FY16: 66.38%; FY17: 62.58%) / 4) 1 st ALS unit on scene within 7 minutes 90% of the time (FY16: 60.29%; FY17: 58.0%) / 5) 1 st ALS transport on scene within 9 minutes 90% of the time (FY16: 78.37%; FY17: 78.28%)",budgetPageNumber:258},{index:3,title:"Life Enrichment & Recreational Opportunities",colorHex:"#0cb3a0",colorRGB:"12,179,160",icon:l.a,path:"/conservation-environmental-land-management",heading:"Conservation & Environmental Land Management",subheading:"Conservation Parks Access Recreation",serviceHeading:"Acres Managed",services:["<strong>ROI</strong>"],serviceStats:[{title:"Actual Units of service provided in FY16",value:"80,336"},{title:"Actual Clients Served in FY16",value:"2,830,784",note:"Visitors"},{title:"Projected Units of Service provided in FY18",value:"80,969"},{title:"Clients Served (Projected for FY18)",value:"2,950,000*",note:"Visitors"}],serviceNotes:["* Follows projected annual 4% increase in park attendance"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$8,349,972.00"},{title:"Total Salaries for Providing Services",value:"$6,569,338.00"},{title:"Total Operating Costs",value:"$1,780,634.00"},{title:"Cost per Acre Managed",value:"$103.13"},{title:"Cost per visit",note:'excludes pass thru costs "Grants & Aids"',value:"$2.83"}],totalBudget:"$13,574,297.00",totalBudgetPercent:62,totalBudgetNote:"Indirects as Reflected in the FY18 Budget: <strong>$96,341.00</strong>",footer:"Cost recovery of 25% through revenue generation. FY16 Actual 28.8%, FY17 Planned 29%, FY18 Projected 25%",budgetPageNumber:235},{index:4,title:"Self-Sufficient Individuals & Families",colorHex:"#09a9c6",colorRGB:"9,169,198",icon:d.a,path:"/social-services",heading:"Social Services",subheading:"Comprehensive Case Management",serviceHeading:"Low income eligible families will receive financial assistance along with comprehensive case management increasing the probability that they will achieve identified short-term and long-term self sufficiency goals",services:["Service is <strong>Grant/Contract</strong>"],serviceStats:[{title:"Actual Units of service provided in FY16",value:"5,873"},{title:"Actual Clients Served in FY16",value:"5,873"},{title:"Projected Units of Service provided in FY18",value:"5,286*"},{title:"Clients Served (Projected for FY18)",value:"5,286*"}],serviceNotes:["* Anticipate 10% reduction in grant funding"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$2,555,933.00"},{title:"Total Salaries for Providing Services",value:"$1,396,041.00"},{title:"Total Operating Costs",value:"$173,085.00"},{title:"Total Grants and Aid",value:"$986,807.00"},{title:"Service Cost per Client",note:'excludes pass thru costs "Grants & Aids"',value:"$296.85"},{title:"Cost per Client",note:'includes pass thru costs "Grants & Aids"',value:"$483.53"}],totalBudget:"$11,748,528.00",totalBudgetPercent:22,totalBudgetNote:null,footer:null,budgetPageNumber:309},{index:5,title:"High-Quality Community Assets",colorHex:"#ff5900",colorRGB:"255,89,0",icon:v.a,path:"/public-works",heading:"Public Works",subheading:"Transportation Maintenance",serviceHeading:"130 Lane Miles of Roadway resurfaced, 3,329 linear feet of sidewalk repair",services:["Service is <strong>Mandated/Local Ordinance/ROI</strong>"],serviceStats:[{title:"Actual Units of service provided in FY16",value:"144",note:"Lane Miles of Road"},{title:"Actual Clients Served in FY16",value:"924,013"},{title:"Projected Units of Service provided in FY18",value:"137*",note:"Lane Miles of Road"},{title:"Clients Served (Projected for FY18)",value:"963,373"}],serviceNotes:["* Based on current year trends and on the average of 2009 - 2017"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$25,950,000.00"},{title:"Cost per Lane Mile of Road",value:"$189,002.18"},{title:"Cost per Citizen",value:"$26.94"}],totalBudget:"$123,988,909.20",totalBudgetPercent:16,totalBudgetNote:null,footer:null,budgetPageNumber:303}]}}},473:function(t,e){},474:function(t,e){},475:function(t,e){},476:function(t,e){},477:function(t,e,s){function n(t){return s(a(t))}function a(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":119,"./af.js":119,"./ar":126,"./ar-dz":120,"./ar-dz.js":120,"./ar-kw":121,"./ar-kw.js":121,"./ar-ly":122,"./ar-ly.js":122,"./ar-ma":123,"./ar-ma.js":123,"./ar-sa":124,"./ar-sa.js":124,"./ar-tn":125,"./ar-tn.js":125,"./ar.js":126,"./az":127,"./az.js":127,"./be":128,"./be.js":128,"./bg":129,"./bg.js":129,"./bn":130,"./bn.js":130,"./bo":131,"./bo.js":131,"./br":132,"./br.js":132,"./bs":133,"./bs.js":133,"./ca":134,"./ca.js":134,"./cs":135,"./cs.js":135,"./cv":136,"./cv.js":136,"./cy":137,"./cy.js":137,"./da":138,"./da.js":138,"./de":141,"./de-at":139,"./de-at.js":139,"./de-ch":140,"./de-ch.js":140,"./de.js":141,"./dv":142,"./dv.js":142,"./el":143,"./el.js":143,"./en-au":144,"./en-au.js":144,"./en-ca":145,"./en-ca.js":145,"./en-gb":146,"./en-gb.js":146,"./en-ie":147,"./en-ie.js":147,"./en-nz":148,"./en-nz.js":148,"./eo":149,"./eo.js":149,"./es":151,"./es-do":150,"./es-do.js":150,"./es.js":151,"./et":152,"./et.js":152,"./eu":153,"./eu.js":153,"./fa":154,"./fa.js":154,"./fi":155,"./fi.js":155,"./fo":156,"./fo.js":156,"./fr":159,"./fr-ca":157,"./fr-ca.js":157,"./fr-ch":158,"./fr-ch.js":158,"./fr.js":159,"./fy":160,"./fy.js":160,"./gd":161,"./gd.js":161,"./gl":162,"./gl.js":162,"./gom-latn":163,"./gom-latn.js":163,"./he":164,"./he.js":164,"./hi":165,"./hi.js":165,"./hr":166,"./hr.js":166,"./hu":167,"./hu.js":167,"./hy-am":168,"./hy-am.js":168,"./id":169,"./id.js":169,"./is":170,"./is.js":170,"./it":171,"./it.js":171,"./ja":172,"./ja.js":172,"./jv":173,"./jv.js":173,"./ka":174,"./ka.js":174,"./kk":175,"./kk.js":175,"./km":176,"./km.js":176,"./kn":177,"./kn.js":177,"./ko":178,"./ko.js":178,"./ky":179,"./ky.js":179,"./lb":180,"./lb.js":180,"./lo":181,"./lo.js":181,"./lt":182,"./lt.js":182,"./lv":183,"./lv.js":183,"./me":184,"./me.js":184,"./mi":185,"./mi.js":185,"./mk":186,"./mk.js":186,"./ml":187,"./ml.js":187,"./mr":188,"./mr.js":188,"./ms":190,"./ms-my":189,"./ms-my.js":189,"./ms.js":190,"./my":191,"./my.js":191,"./nb":192,"./nb.js":192,"./ne":193,"./ne.js":193,"./nl":195,"./nl-be":194,"./nl-be.js":194,"./nl.js":195,"./nn":196,"./nn.js":196,"./pa-in":197,"./pa-in.js":197,"./pl":198,"./pl.js":198,"./pt":200,"./pt-br":199,"./pt-br.js":199,"./pt.js":200,"./ro":201,"./ro.js":201,"./ru":202,"./ru.js":202,"./sd":203,"./sd.js":203,"./se":204,"./se.js":204,"./si":205,"./si.js":205,"./sk":206,"./sk.js":206,"./sl":207,"./sl.js":207,"./sq":208,"./sq.js":208,"./sr":210,"./sr-cyrl":209,"./sr-cyrl.js":209,"./sr.js":210,"./ss":211,"./ss.js":211,"./sv":212,"./sv.js":212,"./sw":213,"./sw.js":213,"./ta":214,"./ta.js":214,"./te":215,"./te.js":215,"./tet":216,"./tet.js":216,"./th":217,"./th.js":217,"./tl-ph":218,"./tl-ph.js":218,"./tlh":219,"./tlh.js":219,"./tr":220,"./tr.js":220,"./tzl":221,"./tzl.js":221,"./tzm":223,"./tzm-latn":222,"./tzm-latn.js":222,"./tzm.js":223,"./uk":224,"./uk.js":224,"./ur":225,"./ur.js":225,"./uz":227,"./uz-latn":226,"./uz-latn.js":226,"./uz.js":227,"./vi":228,"./vi.js":228,"./x-pseudo":229,"./x-pseudo.js":229,"./yo":230,"./yo.js":230,"./zh-cn":231,"./zh-cn.js":231,"./zh-hk":232,"./zh-hk.js":232,"./zh-tw":233,"./zh-tw.js":233};n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=477},479:function(t,e,s){t.exports=s.p+"static/img/logo.db2e4f7.png"},480:function(t,e,s){t.exports=s.p+"static/img/prosperity-report-icon-1.94f9b68.png"},481:function(t,e,s){t.exports=s.p+"static/img/prosperity-report-icon-2.60a2db2.png"},482:function(t,e,s){t.exports=s.p+"static/img/prosperity-report-icon-3.a6ba0e2.png"},483:function(t,e,s){t.exports=s.p+"static/img/prosperity-report-icon-4.89e3e4d.png"},484:function(t,e,s){t.exports=s.p+"static/img/prosperity-report-icon-5.4f945b7.png"},485:function(t,e,s){function n(t){s(473)}var a=s(46)(s(237),s(491),n,null,null);t.exports=a.exports},486:function(t,e,s){function n(t){s(474)}var a=s(46)(s(238),s(492),n,null,null);t.exports=a.exports},487:function(t,e,s){var n=s(46)(s(239),s(490),null,null,null);t.exports=n.exports},488:function(t,e,s){var n=s(46)(s(240),s(493),null,null,null);t.exports=n.exports},489:function(t,e,s){function n(t){s(476)}var a=s(46)(s(242),s(495),n,"data-v-cc5a64fa",null);t.exports=a.exports},490:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("h1",{staticClass:"text-primary"},[t._v("\n\t\t"+t._s(t.$store.state.pageTitle)+"\n\t")]),t._v(" "),s("div",{staticClass:"lead"},[t._v("\n\t\t"+t._s(t.$store.state.pageDescription)+"\n\t")]),t._v(" "),s("ol",{staticClass:"list-unstyled"},t._l(t.$store.state.panels.index,function(t,e){return s("panel",{key:e,attrs:{panel:t}})}))])},staticRenderFns:[]}},491:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"page-header"},[t._m(0),t._v(" "),s("p",{staticClass:"text-center"},[t._v("\n\t\t\t"+t._s(t.$store.state.pageSubheading)+"\n\t\t")])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-md-offset-2"},[s("router-view")],1)]),t._v(" "),s("modal")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"./"}},[n("p",[n("img",{staticClass:"img-responsive center-block",attrs:{src:s(479)}})])])}]}},492:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("hr",{staticClass:"visible-xs-block"}),t._v(" "),s("h4",[t._v("% of "),s("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.openBudgetDoc(e)}}},[t._v("Departmental Budget")])]),t._v(" "),s("canvas",{attrs:{id:"myChart",width:"100%",height:"100%"},on:{click:function(e){e.preventDefault(),t.openBudgetDoc(e)}}})])},staticRenderFns:[]}},493:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"modal fade",attrs:{id:"issuuModal",tabindex:"-1",role:"dialog","aria-labelledby":"issuuModalLabel"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("header",{staticClass:"modal-header"},[t._m(0),t._v(" "),s("h4",{staticClass:"modal-title",attrs:{id:"issuuModalLabel"}},[t._v("\n\t\t\t\t\t"+t._s(t.modalTitle)+"\n\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("div",{staticClass:"embed-responsive-item issuuembed",attrs:{"data-configid":t.$store.state.issuuConfigId,allowfullscreen:""}})]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}]}},494:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"panel"},[s("div",{staticClass:"panel-heading",style:"background: rgba("+t.panel.colorRGB+", 0.8)"},[s("router-link",{staticClass:"panel-title",attrs:{to:t.panel.path}},[s("i",{staticClass:"triangle"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-sm-3 col-md-3 vertical-align li-number text-center"},[s("span",{staticClass:"text-center"},[t._v("\n\t\t\t\t\t\t"+t._s(t.panel.index)+"\n\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 vertical-align li-title text-center-xs"},[s("span",[t._v("\n\t\t\t\t\t\t"+t._s(t.panel.title)+"\n\t\t\t\t\t")])]),t._v(" "),s("div",{staticClass:"col-sm-2 col-md-2 vertical-align li-graphic"},[s("img",{staticClass:"img-responsive center-block",attrs:{src:t.panel.icon,alt:""}})])])])],1)])},staticRenderFns:[]}},495:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"economic-development"},[s("ul",{staticClass:"list-unstyled"},[s("panel",{attrs:{panel:t.panel}})],1),t._v(" "),s("div",{staticClass:"alert alert-primary"},[s("h3",[t._v("\n\t\t\t"+t._s(t.panel.heading)),s("br"),t._v(" "),s("small",[t._v("\n\t\t\t\t"+t._s(t.panel.subheading)+"\n\t\t\t")])])]),t._v(" "),s("div",{staticClass:"alert alert-danger"},[s("h4",{staticClass:"title"},[t._v("\n\t\t\tService Provided\n\t\t")]),t._v(" "),s("p",[s("strong",{domProps:{textContent:t._s(t.panel.serviceHeading)}})]),t._v(" "),s("ul",t._l(t.panel.services,function(e){return s("li",{domProps:{innerHTML:t._s(e)}})}))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-10 col-sm-offset-1"},[s("div",{staticClass:"block-grid-xs-1 block-grid-sm-2"},t._l(t.panel.serviceStats,function(e){return s("div",{staticClass:"text-center"},[s("p",{staticClass:"h3"},[t._v("\n\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")]),t._v(" "),s("p",{staticClass:"h2 text-primary",staticStyle:{margin:"0"}},[t._v("\n\t\t\t\t\t\t"+t._s(e.value)+"\n\t\t\t\t\t")]),t._v(" "),e.note?s("small",[t._v("\n\t\t\t\t\t\t"+t._s(e.note)+"\n\t\t\t\t\t")]):t._e()])}))]),t._v(" "),s("div",{staticClass:"col-xs-12",staticStyle:{margin:"15px 0"}},[s("ul",{staticClass:"list-unstyled text-center text-muted"},t._l(t.panel.serviceNotes,function(e){return s("li",{domProps:{innerHTML:t._s(e)}})}))])]),t._v(" "),t._m(0),t._v(" "),s("dl",{staticClass:"dl-horizontal"},[t._l(t.panel.serviceCosts,function(e){return[s("dt",[t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t"),e.note?s("small",[s("br"),t._v("\n\t\t\t\t\t("+t._s(e.note)+")\n\t\t\t\t")]):t._e()]),t._v(" "),s("dd",{staticClass:"h2 text-secondary",staticStyle:{"margin-top":"0"}},[t._v("\n\t\t\t\t"+t._s(e.value)+"\n\t\t\t")])]})],2),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-8 text-center"},[s("p",{staticClass:"h2"},[t._v("\n\t\t\t\tTotal FY 18 Budget:\n\t\t\t")]),t._v(" "),s("p",{staticClass:"h1 text-secondary",staticStyle:{"margin-top":"5px"}},[t._v("\n\t\t\t\t"+t._s(t.panel.totalBudget)+"\n\t\t\t")]),t._v(" "),t.panel.totalBudgetNote?s("p",{domProps:{innerHTML:t._s(t.panel.totalBudgetNote)}}):t._e()]),t._v(" "),s("div",{staticClass:"col-sm-4 text-center"},[s("chart",{attrs:{percent:t.panel.totalBudgetPercent,"doc-page-number":t.panel.budgetPageNumber}})],1)]),t._v(" "),t.panel.footer?s("footer",{staticClass:"text-muted",staticStyle:{"margin-bottom":"15px"}},[s("hr"),t._v("\n\t\t"+t._s(t.panel.footer)+"\n\t")]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert alert-danger"},[s("h4",{staticClass:"title",staticStyle:{margin:"0"}},[t._v("Cost of Service")])])}]}},500:function(t,e,s){s(236),t.exports=s(235)},89:function(t,e,s){"use strict";var n=s(87),a=s(498),i=s(244);n.a.use(a.a),e.a=new a.a.Store({modules:{panels:i.a},state:{pageTitle:"Prosperity Report",pageDescription:"The County has identified five strategic outcomes, illustrated below, that together will achieve the ultimate goal of building prosperity for individuals and the community, while providing stellar customer service and satisfaction that contribute to a positive quality of life.",pageSubheading:"County Administrator’s Recommended Budget FY 18/19",issuuConfigId:"30190187/51252149"}})}},[500]);
//# sourceMappingURL=app.b35ba574c0d44489dbba.js.map