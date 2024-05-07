export default uberall;let debug=!1;const logMethod=console.log,log=debug?logMethod:(...e)=>{};let apiToUse=0;const imgSrc="https://static-prod.uberall.com/assets/directory_logo/png/";export var uberall={getApiKey:function(){const e=["dTVuUnlrTGpTMnREZnYwc3JsSWFuT3FENzNReFdadXJzWXBIaWY1c2dZb2lGOW9UNHRvQ0x4V2F5Z05FUU5kYg==","c2VvMkUzdmxJaGN2S3NqNlFCRlhMOVpuTHV1TzBLR3ZFMnFaS1c3dHJ4UHhaMkZuOG1JaHUwdVR3dDhsTk1IYjdBUXVVU3dpY0dlNUJZU0RBSHhMWmdyQXVmQTJGWDdBR3lXSlkwN1RwTUxNeGQzb3VDNkJycDF3RzFKSXFDTm4=","akdqakZmbFV5Sk9UakJ1ZW9pWkZCaHRvaXZDQVNEZlJIQnl1TTNFQnRuU0pySEtrQWRjd0I3U3kzdnFUM1BaTWxYcEVqUFdXdUJKTGZBVFZxVWhuTlIxQmhxQzZSZHBSSFFjek92d3IzbTdpcDRtcDhWVW1wTVBsNXR2dW9kOXo=","akxoQTM2TWxqM1hzQm5yS0RkTUhEMjdmYWV0WHFGVUJzQlRRb0Y2ajNack52OTZtdzlWMDNSVFJPSFVsYWJabg=="];return atob(e[Math.floor(Math.random()*e.length)])},directoryType:{GOOGLE:{name:"Google",logo:`${imgSrc}GOOGLE.png`,countries:["de","at","ch","uk"]},GOOGLE_MAPS:{name:"Google Maps",logo:`${imgSrc}GOOGLE_MAPS.png`,countries:["de","at","ch","uk"]},TOMTOM:{name:"TomTom",logo:`${imgSrc}TOMTOM.png`,countries:["de","at","ch","uk"]},FACEBOOK:{name:"Facebook",logo:`${imgSrc}FACEBOOK.png`,countries:["de","at","ch","uk"]},INSTAGRAM:{name:"Instagram",logo:`${imgSrc}INSTAGRAM.png`,countries:["de","at","ch","uk"]},MICROSOFT_CORTANA:{name:"Microsoft Cortana",logo:`${imgSrc}MICROSOFT_CORTANA.png`,countries:["de"]},BING:{name:"Bing",logo:`${imgSrc}BING.png`,countries:["de","at","ch","uk"]},APPLE_MAPS:{name:"Apple Maps",logo:`${imgSrc}APPLE_MAPS.png`,countries:["de","ch","at","uk"]},NOKIA_HERE:{name:"Nokia Here",logo:`${imgSrc}NOKIA_HERE.png`,countries:["de","at","ch","uk"]},AUSKUNFT:{name:"Auskunft",logo:`${imgSrc}AUSKUNFT.png`,countries:["de"]},NEXT_DOOR:{name:"Nextdoor",logo:`${imgSrc}NEXT_DOOR.png`,countries:["de","ca","nl","uk","fr","es","it","au","se","dk"]},MEINESTADT:{name:"Meinestadt",logo:`${imgSrc}MEINESTADT.png`,countries:["de"]},INFOBEL:{name:"Infobel",logo:`${imgSrc}INFOBEL.png`,countries:["de","at","ch","uk"]},NAVMII:{name:"Navmii",logo:`${imgSrc}NAVMII.png`,countries:["de","at","ch","uk"]},WAZE:{name:"Waze",logo:`${imgSrc}WAZE.png`,countries:["de","ch"]},GOOGLE_ASSISTANT:{name:"Google Assistant",logo:`${imgSrc}GOOGLE_ASSISTANT.png`,countries:["de"]},GO_LOCAL:{name:"GoLocal",logo:`${imgSrc}GO_LOCAL.png`,countries:["de"]},CYLEX:{name:"Cylex",logo:`${imgSrc}CYLEX.png`,countries:["de","at","ch","uk"]},STADTBRANCHENBUCH:{name:"Stadtbranchenbuch",logo:`${imgSrc}STADTBRANCHENBUCH.png`,countries:["de","at","ch","uk"]},I_GLOBAL:{name:"iGlobal",logo:`${imgSrc}I_GLOBAL.png`,countries:["de","at","ch","uk"]},OEFFNUNGSZEITENBUCH:{name:"Öffnungszeitenbuch",logo:`${imgSrc}OEFFNUNGSZEITENBUCH.png`,countries:["de","at","ch"]},BUNDES_TELEFONBUCH:{name:"BundesTelefonbuch",logo:`${imgSrc}BUNDES_TELEFONBUCH.png`,countries:["de"]},UNTERNEHMENSAUSKUNFT:{name:"Unternehmensauskunft",logo:`${imgSrc}UNTERNEHMENSAUSKUNFT.png`,countries:["de","at","ch"]},WO_GIBTS_WAS:{name:"wogibtswas.de",logo:`${imgSrc}WO_GIBTS_WAS.png`,countries:["de"]},TUPALO:{name:"Tupalo",logo:`${imgSrc}TUPALO.png`,countries:["de","at","ch","uk"]},DIALO:{name:"Dialo",logo:`${imgSrc}DIALO.png`,countries:["de"]},HOTFROG:{name:"Hotfrog",logo:`${imgSrc}HOTFROG.png`,countries:["de","at","ch","uk"]},KOOMIO:{name:"Koomio",logo:`${imgSrc}KOOMIO.png`,countries:["de","at","ch"]},INFO_IS_INFO:{name:"Infoisinfo",logo:`${imgSrc}INFO_IS_INFO.png`,countries:["de","at","uk"]},BRANCHENBUCH_DEUTSCHLAND:{name:"Branchenbuch Deutschland",logo:`${imgSrc}BRANCHENBUCH_DEUTSCHLAND.png`,countries:["de"]},MARKTPLATZ_MITTELSTAND:{name:"Marktplatz Mittelstand",logo:`${imgSrc}MARKTPLATZ_MITTELSTAND.png`,countries:["de"]},GO_YELLOW:{name:"GoYellow",logo:`${imgSrc}GO_YELLOW.png`,countries:["de"]},WHERE_TO:{name:"WhereTo",logo:`${imgSrc}WHERE_TO.png`,countries:["de","at","ch","uk"]},FIND_OPEN:{name:"FindeOffen",logo:`${imgSrc}FIND_OPEN.png`,countries:["de","at","ch","uk"]},YELLBO:{name:"Yellbo",logo:`${imgSrc}YELLBO.png`,countries:["de","at","ch"]},JELLOO:{name:"Jelloo",logo:`${imgSrc}JELLOO.png`,countries:["de","at","ch"]},UBER:{name:"Uber",logo:`${imgSrc}UBER.png`,countries:["de","ch","at","uk"]},FOURSQUARE:{name:"Foursquare",logo:`${imgSrc}FOURSQUARE.png`,countries:["de","at","ch","uk"]},ALEXA:{name:"Alexa",logo:`${imgSrc}ALEXA.png`,countries:["de","at","ch","uk"]},HUAWEI:{name:"HUAWEI",logo:`${imgSrc}HUAWEI.png`,countries:["de","at","ch","uk"]},SIRI:{name:"Siri",logo:`${imgSrc}SIRI.png`,countries:["de","at","ch","uk"]},BROWNBOOK:{name:"Brownbook",logo:`${imgSrc}BROWNBOOK.png`,countries:["de","at","ch"]},BUSINESSBRANCHENBUCH:{name:"Businessbranchenbuch",logo:`${imgSrc}BUSINESSBRANCHENBUCH.png`,countries:["de","at","ch"]},PAGES24:{name:"Pages24",logo:`${imgSrc}PAGES24.png`,countries:["ch"]},ABCLOCAL:{name:"ABC Local",logo:`${imgSrc}ABCLOCAL.png`,countries:["de","at"]},YALWA:{name:"Yalwa",logo:`${imgSrc}YALWA.png`,countries:["de","at","ch"]},YELP:{name:"Yelp",logo:`${imgSrc}YELP_API.png`,countries:["de","at","ch"]},GUIDELOCAL:{name:"GuideLocal",logo:`${imgSrc}GUIDELOCAL.png`,countries:["de","at","ch"]},TRIP_ADVISOR:{name:"Tripadvisor",logo:`${imgSrc}TRIP_ADVISOR.png`,countries:["de","at","ch"]},CENTRAL_INDEX:{name:"Central Index",logo:`${imgSrc}CENTRAL_INDEX.png`,countries:["uk","im","gg"]},TOUCH_LOCAL:{name:"Touch Local",logo:`${imgSrc}TOUCH_LOCAL.png`,countries:["uk"]},THE_SCOTSMAN:{name:"The Scotsman",logo:`${imgSrc}THE_SCOTSMAN.png`,countries:["uk","im","gg"]},THE_MIRROR:{name:"The Mirror",logo:`${imgSrc}THE_MIRROR.png`,countries:["uk","im","gg"]},SCOOT:{name:"Scoot",logo:`${imgSrc}SCOOT.png`,countries:["uk"]},CITIPAGES:{name:"Citipages",logo:`${imgSrc}CITIPAGES.png`,countries:["uk","im","gg"]},LIVERPOOL_ECHO:{name:"Liverpool Echo",logo:`${imgSrc}LIVERPOOL_ECHO.png`,countries:["uk","im","gg"]},ACOMPIO:{name:"Acompio",logo:`${imgSrc}ACOMPIO.png`,countries:["uk","us","ca","au","nz","es","ie","im","gg"]},MY_LOCAL_SERVICES:{name:"My Local Services",logo:`${imgSrc}MY_LOCAL_SERVICES.png`,countries:["us","uk","gg"]},MANTA:{name:"Manta",logo:`${imgSrc}MANTA.png`,countries:["us","ca","au","uk","im","gg"]},MAP_QUEST:{name:"MapQuest",logo:`${imgSrc}MAP_QUEST.png`,countries:["us","ca","uk","au","nz","za"]},THE_SUN:{name:"The Sun",logo:`${imgSrc}THE_SUN.png`,countries:["us","uk"]},THE_DAILY_RECORD:{name:"The Daily Record",logo:`${imgSrc}THE_DAILY_RECORD.png`,countries:["uk","im","gg"]},THE_EVENING_STANDARD:{name:"The Evening Standard",logo:`${imgSrc}THE_EVENING_STANDARD.png`,countries:["uk","im","gg"]},THE_INDEPENDENT:{name:"The Independent",logo:`${imgSrc}THE_INDEPENDENT.png`,countries:["uk"]}},search:async function({name:e,street:t=e,city:n="",zip:o="",country:r=null,phone:a="",key:i=null,lat:s=null,lng:l=null}){if(i||(i=uberall.getApiKey()),log("[uberall] Searching for:",e,"-",t,"-",n,"-",o,"-",r),!e||!o)return{status:"INVALID_PARAMETER",message:"Invalid Validator",response:{zip:"validator.invalid",street:"NOT_NULLABLE",name:"NOT_NULLABLE"}};let c=r||(/[a-z0-9]{3}\s[a-z0-9]{3}/i.test(o)?"UK":4==o.length?"AT":"DE");a.length>4&&(a.replace("+","00").replace(/\D/gi,""),a.startsWith("0043")?c="AT":a.startsWith("0049")?c="DE":a.startsWith("0041")?c="CH":a.startsWith("0044")&&(c="UK"),t==e&&(t=""));let g=null,u=null;try{g=await async function(){return await new Promise(((r,a)=>{!async function(){let a={status:"QUOTA_LIMIT_EXCEED"},s=10;!async function l(g=i){const p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_key:g,name:e,country:c,street:t,city:n,zip:o})};u=await fetch("https://uberall.com/api/search",p).catch((e=>log(e))),u&&(a=await u.json()),"QUOTA_LIMIT_EXCEED"==a.status&&s?(s--,log("[uberall] QUOTA: search quota limit exceeded. Timeout started: 1 sec"),apiToUse=0==apiToUse?1:0,setTimeout(l,1e3,uberall.getApiKey())):(log("[uberall] -else- Resolving:",a),r(a))}()}()}))}()}catch(e){return log("[uberall] Error: ",e),null}finally{log("[uberall] Search:",g)}return g},searchDir:async({id:e,directory:t,token:n,country:o=null,public_key:r=null,directoryLogoSize:a=16,boolTickSize:i=11,infoTextSize:s=9,searchData:l=null})=>{r||(r=uberall.getApiKey());let c=null;o||(l||(l=await uberall.getRecheckInfo({public_key:r,recheckid:e,rechecktoken:n})),l&&(o=l.country.toLowerCase())),o||(o="DE");try{c=await async function(){return await new Promise(((o,c)=>{!async function(){let c,g={status:"QUOTA_LIMIT_EXCEED"};(async function u(p=r){log("[uberall] (searchDir) qle public key",p),g={status:"QUOTA_LIMIT_EXCEED"},c=await fetch(`https://uberall.com/api/search/${e}?public_key=${p}&directory=${t}&token=${n}`),g=await c.json(),"SUCCESS"==g.status&&(g.response.alreadyManaged||!!g.response.managedLocation?g.response.alreadyManaged=!0:null!=g.response.result.attribution&&null!=g.response.result.attribution&&/movido|aadvanto|spectario/gi.test(g.response.result.attribution.name)&&(l&&g.response.result.name.replace(/[^a-z0-9]/gi,"")==l.name.replace(/[^a-z0-9]/gi,"")&&g.response.result.zip==l.zip&&(g.response.alreadyManaged=!0),g.response.result.attribution&&console.log("dt.response.result has Attribution;",g.response.result)));let m={data:g,directoryLogoSize:a,boolTickSize:i,infoTextSize:s};g.html=uberall.getHtml(m),g.id=e,g.token=n,"QUOTA_LIMIT_EXCEED"==g.status?(log("[uberall] QUOTA: searchDir quota limit exceeded. Timeout started: 1 sec"),apiToUse=0==apiToUse?1:0,setTimeout(u,1e3,uberall.getApiKey())):o(g)}).bind(this)()}()}))}.bind(this)()}catch(e){return log("[uberall] Error: ",e),null}finally{log(`[uberall] ${t}:`,c)}return c},fullCheck:async function({id:e=null,token:t=null,country:n=null,skip:o=[],public_key:r=null,callback:a=null,name:i=null,street:s=i,city:l=null,zip:c=null,directoryLogoSize:g=16,boolTickSize:u=11,infoTextSize:p=9}){r||(r=uberall.getApiKey());let m=[];return m=await async function(){let m=null;if(!e||!t||i||s||c||(m=await uberall.getRecheckInfo({recheckid:e,rechecktoken:t,public_key:r}),m&&(i=m.name,s=m.street+(m.streetNo&&m.streetNo.length?" "+m.streetNo:""),c=m.zip,l=m.city,n=m.country.toLowerCase())),i&&s&&c&&!e&&!t){let o=await new Promise(((e,t)=>{uberall.search({name:i,street:s,city:l,zip:c,country:n}).then((t=>{e(t)})).catch((e=>t(e)))}));if(!o||"SUCCESS"!=o.status)return o;m=o.response.searchData,e=m.id,t=m.token,n||(n=m.country)}return await new Promise(((r,i)=>{if(e&&t){const s=Object.keys(this.directoryType).filter((e=>!n||this.directoryType[e].countries.includes(n.toLowerCase()))),l=Object.keys(this.directoryType).filter((e=>!n||this.directoryType[e].countries.includes(n.toLowerCase()))).filter((e=>!o.includes(e)));let c=[],d=0,h=0,S=0,E=0,T=!1;for(const A in this.directoryType)if(this.directoryType[A].countries.includes(n.toLowerCase()))try{this.searchDir({id:e,token:t,country:n,directory:A,public_key:uberall.getApiKey(),directoryLogoSize:g,boolTickSize:u,infoTextSize:p,searchData:m}).then((n=>{d++,o.includes(A)||(1==n.html.correct?h++:0==n.html.correct?S++:(n.html.correct,E++),"SUCCESS"==n.status&&(!n.response.alreadyManaged&&!n.response.managedLocation||(T=!0)),a&&a({directory:A,result:n,dirTotal:l.length,dirDone:h+S+E,finished:h+S+E==l.length,correct:h,incorrect:S,missing:E,alreadyManaged:T,id:e,token:t,searchData:m}),c.push(n)),d==s.length&&r(c)}))}catch(e){log("[Uberall] Error (fullCheck):",e),i(e)}}else i(null)}))}.bind(this)(),log("[Uberall] Finished full listing check."),m},pdfExport:async function(e,t=2e3,n=null,o=!0,r="#27435c",a=null,i=null,s="Testen Sie Ihre Auffindbarkeit",l="de",c=20){n||(n=uberall.getApiKey());let g=!e.includes("-"),u=null,p="https://uberall.com/api/searchExports";g?u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_key:n,token:[e],customParams:{showgraph:o,bgcolor:r,contactphone:a,contactemail:i,headertext:s,language:l}})}:p+=`/${e}?public_key=${n}`;let m=await fetch(p,u),d=await m.json(),h=g?d.response.result.status:d.response.status,S=g?d.response.result.id:d.response.id;if(u=null,p=`https://uberall.com/api/searchExports/${S}?public_key=${n}`,"SCHEDULED"==h)return log("[uberall] PDF export scheduled. Pending... ID: ",S),await new Promise(((e,o)=>{let r=setInterval((async()=>{if("SCHEDULED"==h&&c&&(log("[uberall] PDF export pending... ID: ",S),m=await fetch(p,u),d=await m.json(),h=d.response.status,c--),"FINISHED"==h&&c){let t=`https://uberall.com/api/searchExports/${S}/download?public_key=${n}`;return log("[uberall] PDF finished:",t),clearInterval(r),e(t),t}if(!c)return clearInterval(r),log("[uberall] Uncaught error while PDF export:",d),e(null),null}),t)}))},generatePdfName:function({name:e,recheckid:t,zip:n,isrecheck:o=!1}){const r=Math.floor((new Date).getTime()/1e3),a=new Date(1e3*r),i=`${a.getFullYear()}${(a.getMonth()+1).toString().padStart(2,"0")}${a.getDate().toString().padStart(2,"0")}`;return`${o?"status_report":e.substring(0,32)}_${o?t:n}_${i}`},getHtml:function({data:e,mismatchStyle:t="color:#e74c3c; font-weight:bold",directoryLogoSize:n=16,boolTickSize:o=12,infoTextSize:r=12,presentSvg:a="https://static-prod.uberall.com/assets/statusCheck/present.svg",missingSvg:i="https://static-prod.uberall.com/assets/statusCheck/missing.svg",loadingSvg:s="https://www.svgrepo.com/show/48167/wait.svg",includePhoneAndWebsite:l=!0}){log("[uberall] getHtml Start");let c={dir:null,info:null,times:"-",pictures:"-",correct:!0};if("SUCCESS"==e.status)if(e.response.alreadyManaged)c.logo="https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg",c.name='<span style="color:#378805; font-weight:bold;">Dieser Standort wurde registriert</span>',c.address='<span style="color:#378805; font-weight:bold;">und wird fortlaufend optimiert.</span>',c.dir=`<img id="UBERALL_Logo" alt="" src="${c.logo}" style="height:${n}px; width:${n}px" />`,c.info=`<span style="color:#378805; font-weight:bold; font-size:12px">${e.response.result.attribution?"Optimiert von "+e.response.result.attribution.name:"Dieser Standort wurde registriert und wird fortlaufend optimiert."}</span>`,c.times="-",c.pictures="-";else{const s=e.response.result,l=s.directoryType,g={url:s.listingUrl,website:{val:s.website,match:"PRESENT"==s.websiteStatus},name:{val:s.name,match:"MATCH"==s.nameStatus},streetAndNo:{val:s.streetAndNo,match:"MATCH"==s.streetAndNoStatus},city:{val:s.city,match:"MATCH"==s.cityStatus},phone:{val:s.phone,match:"PRESENT"==s.phoneStatus},photos:{val:s.photos,match:"PRESENT"==s.photosStatus},times:{val:s.openingHours,match:"PRESENT"==s.openingHoursStatus}};if(c.logo=`https://static-prod.uberall.com/assets/directory_logo/png/${l}.png`,c.name=`<span style="${t}; float:left;">Kein</span>`,c.address=`<span style="${t}; float:left;">Einrag</span>`,c.dir=`<p style="text-align:center"><img id="${l}_Logo" alt="" src="${c.logo}" style="height:${n}px; width:${n}px" /></br><span id="${l}_Name" style="font-size:${r}px">${this.directoryType[l].name}</span></p>`,c.info=`<span style="${t}; font-size:${r}px;float:left;">Kein Eintrag</span>`,c.times='<span style="text-align:center;float:center">-</td>',c.pictures=`<span id="${l}_Pictures" style="text-align:center;float:center">-</span>`,null!=g.url){c.dir=`<a href="${g.url}" target="_blank"><p style="text-align:center"><img id="${l}_Logo" alt="" src="${c.logo}" style="height:${n}px; width:${n}px" /></br><span id="${l}_Name" style="font-size:${r}px; font-weight:bold">${this.directoryType[l].name}</span></p></a>`;let e=g.name.val,s=g.streetAndNo.val,u=g.city.val,p=g.phone.val,m=g.website.val;g.name.match||(e=`<span style="${t}">`+e+"</span>",c.correct=!1),g.streetAndNo.match||(c.correct=!1,"null"!=s&&""!=s||(s="keine Adresse"),s=`<span style="${t}">`+s+"</span>","null"!=u&&(g.city.match||(u=`<span style="${t}">`+u+"</span>"))),g.phone.match||(c.correct=!1,p=`<span style="${t}">keine Telefonnummer</span>`),g.website.match||(c.correct=!1,m=`<span style="${t}">keine Webseite</span>`),g.photos.match||(c.correct=!1),g.times.match||(c.correct=!1),c.name=`${e}`,c.address=`${s}${"null"!=u?", "+u:""}`,c.info=`<td id="${l}_Info"><span style="line-height:14px;font-size:${r}px;float:left;">${e}<br/>${c.address}<br/>${p}<br/>${m}</span></td>`,c.times=`<td id="${l}_Times style="text-align:center"><img alt="" src="${g.times.match?a:i}" style="height:${o}px; width:${o+1}px" /></td>`,c.pictures=`<td id="${l}_Pictures" style="text-align:center"><img alt="" src="${g.photos.match?a:i}" style="height:${o+1}px; width:${o}px"/></td>`}else c.correct=null}else"INVALID_PARAMETER"==e.status?(c.logo="https://static.thenounproject.com/png/2222119-200.png",c.name="Bitte überprüfen",c.address="ihre Angaben!",c.dir=`<img id="UBERALL_Logo" alt="" src="${c.logo}" style="height:${n}px; width:${n}px" />`,c.info='<span style="color:#161616; font-weight:bold; font-size:12px">Bitte überprüfen sie ihre Angaben!</span>',c.times="-",c.pictures="-",c.correct=null):"QUOTA_LIMIT_EXCEED"==e.status&&(c.logo="https://pic.onlinewebfonts.com/thumbnails/icons_376288.svg",c.name="Quota limit",c.address="exceeded!",c.dir=`<img id="UBERALL_Logo" alt="" src="${c.logo}" style="height:${n}px; width:${n}px" />`,c.info='<span style="color:#161616; font-weight:bold; font-size:12px">Quota limit exceeded.</span>',c.times="-",c.pictures="-",c.correct=null);return c},getHtmlFull:function(e){let t={results:{},correct:0,incorrect:0,missing:0};for(const n in e){let o=this.getHtml({data:e[n]});null==o.correct?t.missing++:o.correct?o.correct&&t.correct++:t.incorrect++,t.results[n]=e[n],t.results[n].html=o}return t},getRecheckInfo:async function({public_key:e=null,recheckid:t,rechecktoken:n}){if(e||(e=uberall.getApiKey()),e&&t&&n){return await new Promise(((o,r)=>{fetch(`https://uberall.com/de/home/statusCheckMessages?public_key=${e}&recheckid=${t}&rechecktoken=${n}`).then((e=>(200!=e.status&&o(null),e.text()))).then((e=>{let t=e.match(/(?<=searchData:\s)(\{.+?\})/gms);if(!t)return o(null);let n=t[0].match(/(?<=\s)\w+(?=:)|(?<=:\s").+(?=["][,\s])/gim),r=null;if(n&&n.length>=18){r={};for(let e=0;e<n.length;e+=2)r[n[e]]=n[e+1].replace(/\\u002f/gim,"/")}o(r)})).catch((e=>log("[uberall.js] getRecheckInfo",e)))}))}},parseAnalysisLink:function(e){let t,n=null;try{t=new URL(e)}catch(e){n=null}finally{if(t){const e=new URLSearchParams(t.search);n={name:e.get("ubname"),street:e.get("ubstreet"),zip:e.get("ubzip"),country:e.get("ubcountry"),token:e.get("ubrechecktoken"),id:e.get("ubrecheckid")}}}return n}};