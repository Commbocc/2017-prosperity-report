webpackJsonp([1],{234:function(e,t,s){function i(e){s(478)}var n=s(32)(s(243),s(500),i,"data-v-c9a8a834",null);e.exports=n.exports},235:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(87),n=s(487),a=s.n(n),r=s(245),o=s(89);i.a.config.productionTip=!1,new i.a({el:"#app",router:r.a,store:o.a,template:"<App/>",components:{App:a.a}})},237:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(492),n=s.n(i);t.default={name:"app",components:{modal:n.a}}},238:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(247),n=s.n(i);t.default={name:"chart",props:["service","percent","docPageNumber"],computed:{chartId:function(){return this.service.serviceHeading.replace(/[^0-9a-zA-Z]/g,"")}},methods:{openBudgetDoc:function(){this.docPageNumber&&($("#issuuModal").modal("show"),window.IssuuReaders.get(this.$store.state.issuuConfigId).setPageNumber(this.docPageNumber))},intiChart:function(){n.a.defaults.global.tooltips.enabled=!1;var e=document.getElementById(""+this.chartId).getContext("2d");new n.a(e,{type:"doughnut",data:{labels:[this.percent+"%"],datasets:[{data:[this.percent,100-this.percent],backgroundColor:["rgba(245,149,117, 1)","rgba(22,67,113, 0.7)"]}]},options:{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}})}},mounted:function(){this.intiChart()}}},239:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(490),n=s.n(i);t.default={name:"department-section",props:["department"],components:{DeptService:n.a}}},240:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(488),n=s.n(i);t.default={name:"department-service",props:["service"],components:{Chart:n.a}}},241:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(234),n=s.n(i);t.default={name:"home",components:{panel:n.a}}},242:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"modal",data:function(){return{modalTitle:"FY 18/19 Hillsborough County Administrator's Recommended Budget"}}}},243:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"panel",props:["panel"]}},244:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(234),n=s.n(i),a=s(489),r=s.n(a);t.default={name:"penel",props:["panel"],components:{Panel:n.a,DeptSection:r.a}}},245:function(e,t,s){"use strict";var i=s(87),n=s(502),a=s(89),r=s(491),o=s.n(r),l=s(493),c=s.n(l);i.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/local-economy",component:c.a,props:{panel:a.a.state.panels.index[0]},children:[{path:"/",name:"LocalEconomy"}]},{path:"/public-safety",component:c.a,props:{panel:a.a.state.panels.index[1]},children:[{path:"/",name:"PublicSafety"}]},{path:"/life-enrichment",component:c.a,props:{panel:a.a.state.panels.index[2]},children:[{path:"/",name:"LifeEnrichment"}]},{path:"/individuals-families",component:c.a,props:{panel:a.a.state.panels.index[3]},children:[{path:"/",name:"IndividualsFamilies"}]},{path:"/community-assets",component:c.a,props:{panel:a.a.state.panels.index[4]},children:[{path:"/",name:"CommunityAssets"}]},{path:"*",component:o.a}],scrollBehavior:function(e,t,s){return{x:0,y:0}}})},246:function(e,t,s){"use strict";var i=s(482),n=s.n(i),a=s(483),r=s.n(a),o=s(484),l=s.n(o),c=s(485),d=s.n(c),u=s(486),v=s.n(u);t.a={state:{index:[{index:1,title:"Strong & Sustainable Local Economy",colorHex:"#bfbfbf",colorRGB:"191,191,191",icon:n.a,path:"/local-economy",departments:[{heading:"Economic Development",subheading:"Small and Minority Business Development",totalBudget:"$9,311,272.00",totalBudgetNote:"",services:[{serviceHeading:"Small Businesses participate in Entrepreneur Collaborative Center activities and receive consulting services",services:["Mandated by <strong>Resolution</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"$2,095,635.20"},{title:"Actual Clients Served in FY16",value:"62,956",note:"Small Businesses in Hillsborough County"},{title:"Projected Units of Service provided in FY18",value:"11,600*"},{title:"Clients Served (Projected for FY18)",value:"65,499*",note:"Small Businesses in Hillsborough County"}],serviceNotes:["* 2% annual growth in small businesses based on past trendline"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$2,095,635.20"},{title:"Total Salaries for Providing Services",value:"$1,241,085.20"},{title:"Total Operating Costs",value:"$854,550.00"},{title:"Cost of service for Participating Small Businesses",value:"$180.66"},{title:"Cost per Total Number of Hillsborough County Small Business",value:"$31.99"}],footer:"Utilization of MBE and SBE Firms in County Contracts (FY16: 17.1%; FY17: 17.5%; FY18: 18%)",budgetPageNumber:249,totalBudgetPercent:23}]}]},{index:2,title:"Enhanced Public Safety",colorHex:"#dbad4d",colorRGB:"219,173,77",icon:r.a,path:"/public-safety",departments:[{heading:"Fire Rescue",subheading:"Emergency Service Delivery",totalBudget:"$148,307,104.00",totalBudgetNote:"Indirects as Reflected in the FY18 Budget: <strong>$6,997,053.00</strong>",services:[{serviceHeading:"Emergency Call Responses",services:["Service is <strong>Mandated</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"103,433"},{title:"Actual Clients Served in FY16",value:"924,013",note:"Citizens residing in unincorporated Hillsborough County"},{title:"Projected Units of Service provided in FY18",value:"114,035*"},{title:"Clients Served (Projected for FY18)",value:"963,373**",note:"Citizens residing in unincorporated Hillsborough County"}],serviceNotes:["* 5% annual increase in Emergency Call Responses","** Approx. 2% annual population increase for unincorporated citizens.","Source: University of Florida Bureau of Economic and Business Research"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$134,775,754.00"},{title:"Total Salaries for Providing Services",value:"$113,239,816.00"},{title:"Total Operating Costs",value:"$21,457,938.00"},{title:"Total Grants and Aid",value:"$78,000.00"},{title:"Cost per Emergency Call Response",note:'excludes pass thru costs "Grants & Aids"',value:"$1,181.20"},{title:"Cost per Citizen",note:'includes pass thru costs "Grants & Aids"',value:"$139.90"}],footer:"1) 1st on scene, Urban, Fire 90% of the time in under 6 minutes (FY16: 53.61%; FY17: 52.12%) / 2) 1st on scene, Suburban, Fire 90% of the time in under 7 minutes (FY16: 52.82%; FY17: 51.48%) / 3) 1st on scene, Rural, Fire 90% of the time in under 10 minutes FY16: 66.38%; FY17: 62.58%) / 4) 1 st ALS unit on scene within 7 minutes 90% of the time (FY16: 60.29%; FY17: 58.0%) / 5) 1 st ALS transport on scene within 9 minutes 90% of the time (FY16: 78.37%; FY17: 78.28%)",budgetPageNumber:258,totalBudgetPercent:91}]},{heading:"Pet Resources",totalBudget:"$9,123,324.00",services:[{serviceHeading:"Animal Control & Investigations",services:["Service is <strong>Mandated</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"33,733",note:"Completed Animal Control Officer Cases"},{title:"Actual Clients Served in FY16",value:"250,000"},{title:"Projected Units of Service provided in FY18",value:"35,420",note:"5% increase"},{title:"Clients Served (Projected for FY18)",value:"312,500",note:"Increased population and increased efficiency"}],serviceCosts:[{title:"Total Cost of Service",value:"$3,318,921.03"},{title:"Total Salaries for Providing Services",value:"$2,075,192.61"},{title:"Total Operating Costs",value:"$1,243,728.42"},{title:"Cost per Unit of Service",value:"$93.70"},{title:"Cost per Citizen",value:"$10.62"}],budgetPageNumber:294,totalBudgetPercent:36},{serviceHeading:"Pet Licensing",services:["Service is <strong>Mandated</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"107,000",note:"Licenses Sold"},{title:"Actual Clients Served in FY16",value:"250,000"},{title:"Projected Units of Service provided in FY18",value:"107,000"},{title:"Clients Served (Projected for FY18)",value:"312,500",note:"Increased population and increased efficiency"}],serviceCosts:[{title:"Total Cost of Service",value:"$671,959.43"},{title:"Total Salaries for Providing Services",value:"$196,671.07"},{title:"Total Operating Costs",value:"$475,288.36"},{title:"Cost per License issued",value:"$6.28"},{title:"Cost per Citizen",value:"$2.15"}],budgetPageNumber:294,totalBudgetPercent:7}]}]},{index:3,title:"Life Enrichment & Recreational Opportunities",colorHex:"#0cb3a0",colorRGB:"12,179,160",icon:l.a,path:"/life-enrichment",departments:[{heading:"Conservation & Environmental Land Management",subheading:"Conservation Parks Access Recreation",totalBudget:"$13,574,297.00",totalBudgetNote:"Indirects as Reflected in the FY18 Budget: <strong>$96,341.00</strong>",services:[{serviceHeading:"Acres Managed",services:["<strong>ROI</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"80,336"},{title:"Actual Clients Served in FY16",value:"2,830,784",note:"Visitors"},{title:"Projected Units of Service provided in FY18",value:"80,969"},{title:"Clients Served (Projected for FY18)",value:"2,950,000*",note:"Visitors"}],serviceNotes:["* Follows projected annual 4% increase in park attendance"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$8,349,972.00"},{title:"Total Salaries for Providing Services",value:"$6,569,338.00"},{title:"Total Operating Costs",value:"$1,780,634.00"},{title:"Cost per Acre Managed",value:"$103.13"},{title:"Cost per visit",note:'excludes pass thru costs "Grants & Aids"',value:"$2.83"}],footer:"Cost recovery of 25% through revenue generation. FY16 Actual 28.8%, FY17 Planned 29%, FY18 Projected 25%",budgetPageNumber:235,totalBudgetPercent:62}]},{heading:"Pet Resources",totalBudget:"$9,123,324.00",services:[{serviceHeading:"Surgery & Medical Services",services:["Service is <strong>Local Ordinance</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"15,620",note:"Medical Cost Per Animal"},{title:"Actual Clients Served in FY16",value:"250,000"},{title:"Projected Units of Service provided in FY18",value:"19,525",note:"25% increase based increased animal intake in FY17"},{title:"Clients Served (Projected for FY18)",value:"312,500",note:"Increased population and increased efficiency"}],serviceCosts:[{title:"Total Cost of Service",value:"$2,175,010.44"},{title:"Total Salaries for Providing Services",value:"$1,476,650.43"},{title:"Total Operating Costs",value:"$698,360.01"},{title:"Cost per Unit of Service",value:"$111.40"},{title:"Cost per Citizen",value:"$6.96"}],budgetPageNumber:294,totalBudgetPercent:24},{serviceHeading:"Adoption Services",services:["Service is <strong>Board Policy</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"12,917",note:"Adoptions"},{title:"Actual Clients Served in FY16",value:"250,000"},{title:"Projected Units of Service provided in FY18",value:"14,000",note:"8% increase based increased animal intake in FY17"},{title:"Clients Served (Projected for FY18)",value:"312,500",note:"Increased population and increased efficiency"}],serviceCosts:[{title:"Total Cost of Service",value:"$2,957,433.19"},{title:"Total Salaries for Providing Services",value:"$2,304,979.89"},{title:"Total Operating Costs",value:"$652,453.30"},{title:"Cost per Unit of Service",value:"$211.25"},{title:"Cost per Citizen",value:"$9.46"}],budgetPageNumber:294,totalBudgetPercent:32}]}]},{index:4,title:"Self-Sufficient Individuals & Families",colorHex:"#09a9c6",colorRGB:"9,169,198",icon:d.a,path:"/individuals-families",departments:[{heading:"Social Services",subheading:"Comprehensive Case Management",totalBudget:"$11,748,528.00",totalBudgetNote:null,services:[{serviceHeading:"Low income eligible families will receive financial assistance along with comprehensive case management increasing the probability that they will achieve identified short-term and long-term self sufficiency goals",services:["Service is <strong>Grant/Contract</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"5,873"},{title:"Actual Clients Served in FY16",value:"5,873"},{title:"Projected Units of Service provided in FY18",value:"5,286*"},{title:"Clients Served (Projected for FY18)",value:"5,286*"}],serviceNotes:["* Anticipate 10% reduction in grant funding"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$2,555,933.00"},{title:"Total Salaries for Providing Services",value:"$1,396,041.00"},{title:"Total Operating Costs",value:"$173,085.00"},{title:"Total Grants and Aid",value:"$986,807.00"},{title:"Service Cost per Client",note:'excludes pass thru costs "Grants & Aids"',value:"$296.85"},{title:"Cost per Client",note:'includes pass thru costs "Grants & Aids"',value:"$483.53"}],footer:null,budgetPageNumber:309,totalBudgetPercent:22}]}]},{index:5,title:"High-Quality Community Assets",colorHex:"#ff5900",colorRGB:"255,89,0",icon:v.a,path:"/community-assets",departments:[{heading:"Public Works",subheading:"Transportation Maintenance",totalBudget:"$123,988,909.20",totalBudgetNote:null,services:[{serviceHeading:"130 Lane Miles of Roadway resurfaced, 3,329 linear feet of sidewalk repair",services:["Service is <strong>Mandated/Local Ordinance/ROI</strong>"],serviceStats:[{title:"Actual Units of Service provided in FY16",value:"144",note:"Lane Miles of Road"},{title:"Actual Clients Served in FY16",value:"924,013"},{title:"Projected Units of Service provided in FY18",value:"137*",note:"Lane Miles of Road"},{title:"Clients Served (Projected for FY18)",value:"963,373"}],serviceNotes:["* Based on current year trends and on the average of 2009 - 2017"],serviceCosts:[{title:"Total Cost of Service",note:"excludes Indirects",value:"$25,950,000.00"},{title:"Cost per Lane Mile of Road",value:"$189,002.18"},{title:"Cost per Citizen",value:"$26.94"}],footer:null,budgetPageNumber:303,totalBudgetPercent:16}]}]}]}}},475:function(e,t){},476:function(e,t){},477:function(e,t){},478:function(e,t){},479:function(e,t,s){function i(e){return s(n(e))}function n(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./af":119,"./af.js":119,"./ar":126,"./ar-dz":120,"./ar-dz.js":120,"./ar-kw":121,"./ar-kw.js":121,"./ar-ly":122,"./ar-ly.js":122,"./ar-ma":123,"./ar-ma.js":123,"./ar-sa":124,"./ar-sa.js":124,"./ar-tn":125,"./ar-tn.js":125,"./ar.js":126,"./az":127,"./az.js":127,"./be":128,"./be.js":128,"./bg":129,"./bg.js":129,"./bn":130,"./bn.js":130,"./bo":131,"./bo.js":131,"./br":132,"./br.js":132,"./bs":133,"./bs.js":133,"./ca":134,"./ca.js":134,"./cs":135,"./cs.js":135,"./cv":136,"./cv.js":136,"./cy":137,"./cy.js":137,"./da":138,"./da.js":138,"./de":141,"./de-at":139,"./de-at.js":139,"./de-ch":140,"./de-ch.js":140,"./de.js":141,"./dv":142,"./dv.js":142,"./el":143,"./el.js":143,"./en-au":144,"./en-au.js":144,"./en-ca":145,"./en-ca.js":145,"./en-gb":146,"./en-gb.js":146,"./en-ie":147,"./en-ie.js":147,"./en-nz":148,"./en-nz.js":148,"./eo":149,"./eo.js":149,"./es":151,"./es-do":150,"./es-do.js":150,"./es.js":151,"./et":152,"./et.js":152,"./eu":153,"./eu.js":153,"./fa":154,"./fa.js":154,"./fi":155,"./fi.js":155,"./fo":156,"./fo.js":156,"./fr":159,"./fr-ca":157,"./fr-ca.js":157,"./fr-ch":158,"./fr-ch.js":158,"./fr.js":159,"./fy":160,"./fy.js":160,"./gd":161,"./gd.js":161,"./gl":162,"./gl.js":162,"./gom-latn":163,"./gom-latn.js":163,"./he":164,"./he.js":164,"./hi":165,"./hi.js":165,"./hr":166,"./hr.js":166,"./hu":167,"./hu.js":167,"./hy-am":168,"./hy-am.js":168,"./id":169,"./id.js":169,"./is":170,"./is.js":170,"./it":171,"./it.js":171,"./ja":172,"./ja.js":172,"./jv":173,"./jv.js":173,"./ka":174,"./ka.js":174,"./kk":175,"./kk.js":175,"./km":176,"./km.js":176,"./kn":177,"./kn.js":177,"./ko":178,"./ko.js":178,"./ky":179,"./ky.js":179,"./lb":180,"./lb.js":180,"./lo":181,"./lo.js":181,"./lt":182,"./lt.js":182,"./lv":183,"./lv.js":183,"./me":184,"./me.js":184,"./mi":185,"./mi.js":185,"./mk":186,"./mk.js":186,"./ml":187,"./ml.js":187,"./mr":188,"./mr.js":188,"./ms":190,"./ms-my":189,"./ms-my.js":189,"./ms.js":190,"./my":191,"./my.js":191,"./nb":192,"./nb.js":192,"./ne":193,"./ne.js":193,"./nl":195,"./nl-be":194,"./nl-be.js":194,"./nl.js":195,"./nn":196,"./nn.js":196,"./pa-in":197,"./pa-in.js":197,"./pl":198,"./pl.js":198,"./pt":200,"./pt-br":199,"./pt-br.js":199,"./pt.js":200,"./ro":201,"./ro.js":201,"./ru":202,"./ru.js":202,"./sd":203,"./sd.js":203,"./se":204,"./se.js":204,"./si":205,"./si.js":205,"./sk":206,"./sk.js":206,"./sl":207,"./sl.js":207,"./sq":208,"./sq.js":208,"./sr":210,"./sr-cyrl":209,"./sr-cyrl.js":209,"./sr.js":210,"./ss":211,"./ss.js":211,"./sv":212,"./sv.js":212,"./sw":213,"./sw.js":213,"./ta":214,"./ta.js":214,"./te":215,"./te.js":215,"./tet":216,"./tet.js":216,"./th":217,"./th.js":217,"./tl-ph":218,"./tl-ph.js":218,"./tlh":219,"./tlh.js":219,"./tr":220,"./tr.js":220,"./tzl":221,"./tzl.js":221,"./tzm":223,"./tzm-latn":222,"./tzm-latn.js":222,"./tzm.js":223,"./uk":224,"./uk.js":224,"./ur":225,"./ur.js":225,"./uz":227,"./uz-latn":226,"./uz-latn.js":226,"./uz.js":227,"./vi":228,"./vi.js":228,"./x-pseudo":229,"./x-pseudo.js":229,"./yo":230,"./yo.js":230,"./zh-cn":231,"./zh-cn.js":231,"./zh-hk":232,"./zh-hk.js":232,"./zh-tw":233,"./zh-tw.js":233};i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id=479},481:function(e,t,s){e.exports=s.p+"static/img/logo.db2e4f7.png"},482:function(e,t,s){e.exports=s.p+"static/img/prosperity-report-icon-1.94f9b68.png"},483:function(e,t,s){e.exports=s.p+"static/img/prosperity-report-icon-2.60a2db2.png"},484:function(e,t,s){e.exports=s.p+"static/img/prosperity-report-icon-3.a6ba0e2.png"},485:function(e,t,s){e.exports=s.p+"static/img/prosperity-report-icon-4.89e3e4d.png"},486:function(e,t,s){e.exports=s.p+"static/img/prosperity-report-icon-5.4f945b7.png"},487:function(e,t,s){function i(e){s(475)}var n=s(32)(s(237),s(495),i,null,null);e.exports=n.exports},488:function(e,t,s){function i(e){s(476)}var n=s(32)(s(238),s(497),i,null,null);e.exports=n.exports},489:function(e,t,s){var i=s(32)(s(239),s(496),null,null,null);e.exports=i.exports},490:function(e,t,s){function i(e){s(477)}var n=s(32)(s(240),s(499),i,"data-v-a61ef336",null);e.exports=n.exports},491:function(e,t,s){var i=s(32)(s(241),s(494),null,null,null);e.exports=i.exports},492:function(e,t,s){var i=s(32)(s(242),s(498),null,null,null);e.exports=i.exports},493:function(e,t,s){var i=s(32)(s(244),s(501),null,null,null);e.exports=i.exports},494:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"home"}},[s("h1",{staticClass:"text-primary"},[e._v("\n\t\t"+e._s(e.$store.state.pageTitle)+"\n\t")]),e._v(" "),s("div",{staticClass:"lead"},[e._v("\n\t\t"+e._s(e.$store.state.pageDescription)+"\n\t")]),e._v(" "),s("ol",{staticClass:"list-unstyled"},e._l(e.$store.state.panels.index,function(e,t){return s("panel",{key:t,attrs:{panel:e}})}))])},staticRenderFns:[]}},495:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"page-header"},[e._m(0),e._v(" "),s("p",{staticClass:"text-center"},[e._v("\n\t\t\t"+e._s(e.$store.state.pageSubheading)+"\n\t\t")])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-md-offset-2"},[s("router-view")],1)]),e._v(" "),s("modal")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:"./"}},[i("p",[i("img",{staticClass:"img-responsive center-block",attrs:{src:s(481)}})])])}]}},496:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",[s("div",{staticClass:"alert alert-primary"},[s("h3",[e._v("\n\t\t\t"+e._s(e.department.heading)),s("br"),e._v(" "),s("small",[e._v("\n\t\t\t\t"+e._s(e.department.subheading)+"\n\t\t\t")])])]),e._v(" "),s("div",{staticClass:"text-center"},[s("p",{staticClass:"h2"},[e._v("\n\t\t\tTotal FY 18 Budget:\n\t\t")]),e._v(" "),s("p",{staticClass:"h1 text-secondary",staticStyle:{"margin-top":"5px"}},[e._v("\n\t\t\t"+e._s(e.department.totalBudget)+"\n\t\t")]),e._v(" "),e.department.totalBudgetNote?s("p",{domProps:{innerHTML:e._s(e.department.totalBudgetNote)}}):e._e()]),e._v(" "),e._l(e.department.services,function(e,t){return s("dept-service",{key:t,attrs:{service:e}})})],2)},staticRenderFns:[]}},497:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("hr",{staticClass:"visible-xs-block"}),e._v(" "),s("h4",[e._v("\n\t\t% of "),s("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.openBudgetDoc(t)}}},[e._v("Departmental Budget")]),e._v(" "),s("small",[e._v("\n\t\t\t(page "+e._s(e.docPageNumber)+")\n\t\t")])]),e._v(" "),s("canvas",{staticClass:"chart",attrs:{id:e.chartId,width:"100%",height:"100%"},on:{click:function(t){t.preventDefault(),e.openBudgetDoc(t)}}})])},staticRenderFns:[]}},498:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{staticClass:"modal fade",attrs:{id:"issuuModal",tabindex:"-1",role:"dialog","aria-labelledby":"issuuModalLabel"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("header",{staticClass:"modal-header"},[e._m(0),e._v(" "),s("h4",{staticClass:"modal-title",attrs:{id:"issuuModalLabel"}},[e._v("\n\t\t\t\t\t"+e._s(e.modalTitle)+"\n\t\t\t\t")])]),e._v(" "),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("div",{staticClass:"embed-responsive-item issuuembed",attrs:{"data-configid":e.$store.state.issuuConfigId,allowfullscreen:""}})]),e._v(" "),e._m(1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")])])}]}},499:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("div",{staticClass:"alert alert-danger"},[s("h4",{staticClass:"title"},[e._v("\n\t\t\tService Provided\n\t\t")]),e._v(" "),s("p",[s("strong",{domProps:{textContent:e._s(e.service.serviceHeading)}})]),e._v(" "),s("ul",e._l(e.service.services,function(t){return s("li",{domProps:{innerHTML:e._s(t)}})}))]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-10 col-sm-offset-1"},[s("div",{staticClass:"block-grid-xs-1 block-grid-sm-2"},e._l(e.service.serviceStats,function(t){return s("div",{staticClass:"text-center"},[s("p",{staticClass:"h3"},[e._v("\n\t\t\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t\t")]),e._v(" "),s("p",{staticClass:"h2 text-primary",staticStyle:{margin:"0"}},[e._v("\n\t\t\t\t\t\t"+e._s(t.value)+"\n\t\t\t\t\t")]),e._v(" "),t.note?s("small",[e._v("\n\t\t\t\t\t\t"+e._s(t.note)+"\n\t\t\t\t\t")]):e._e()])}))]),e._v(" "),s("div",{staticClass:"col-xs-12",staticStyle:{margin:"15px 0"}},[s("ul",{staticClass:"list-unstyled text-center text-muted"},e._l(e.service.serviceNotes,function(t){return s("li",{domProps:{innerHTML:e._s(t)}})}))])]),e._v(" "),e._m(0),e._v(" "),s("dl",{staticClass:"dl-horizontal"},[e._l(e.service.serviceCosts,function(t){return[s("dt",[e._v("\n\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t"),t.note?s("small",[s("br"),e._v("\n\t\t\t\t\t("+e._s(t.note)+")\n\t\t\t\t")]):e._e()]),e._v(" "),s("dd",{staticClass:"h2 text-secondary",staticStyle:{"margin-top":"0"}},[e._v("\n\t\t\t\t"+e._s(t.value)+"\n\t\t\t")])]})],2),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4 text-center"},[s("chart",{attrs:{service:e.service,percent:e.service.totalBudgetPercent,"doc-page-number":e.service.budgetPageNumber}})],1)]),e._v(" "),e.service.footer?s("footer",{staticClass:"text-muted",staticStyle:{"margin-bottom":"15px"}},[s("hr"),e._v("\n\t\t"+e._s(e.service.footer)+"\n\t")]):e._e(),e._v(" "),s("hr")])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"alert alert-danger"},[s("h4",{staticClass:"title",staticStyle:{margin:"0"}},[e._v("Cost of Service")])])}]}},500:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"panel"},[s("div",{staticClass:"panel-heading",style:"background: rgba("+e.panel.colorRGB+", 0.8)"},[s("router-link",{staticClass:"panel-title",attrs:{to:e.panel.path}},[s("i",{staticClass:"triangle"}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-sm-3 col-md-3 vertical-align li-number text-center"},[s("span",{staticClass:"text-center"},[e._v("\n\t\t\t\t\t\t"+e._s(e.panel.index)+"\n\t\t\t\t\t")])]),e._v(" "),s("div",{staticClass:"col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 vertical-align li-title text-center-xs"},[s("span",[e._v("\n\t\t\t\t\t\t"+e._s(e.panel.title)+"\n\t\t\t\t\t")])]),e._v(" "),s("div",{staticClass:"col-sm-2 col-md-2 vertical-align li-graphic"},[s("img",{staticClass:"img-responsive center-block",attrs:{src:e.panel.icon,alt:""}})])])])],1)])},staticRenderFns:[]}},501:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"economic-development"},[s("ul",{staticClass:"list-unstyled"},[s("panel",{attrs:{panel:e.panel}})],1),e._v(" "),e._l(e.panel.departments,function(e,t){return s("dept-section",{key:t,attrs:{department:e}})})],2)},staticRenderFns:[]}},506:function(e,t,s){s(236),e.exports=s(235)},89:function(e,t,s){"use strict";var i=s(87),n=s(504),a=s(246);i.a.use(n.a),t.a=new n.a.Store({modules:{panels:a.a},state:{pageTitle:"Prosperity Report",pageDescription:"The County has identified five strategic outcomes, illustrated below, that together will achieve the ultimate goal of building prosperity for individuals and the community, while providing stellar customer service and satisfaction that contribute to a positive quality of life.",pageSubheading:"County Administrator’s Recommended Budget FY 18/19",issuuConfigId:"30190187/51252149"}})}},[506]);
//# sourceMappingURL=app.e9041ad31abdabce1130.js.map