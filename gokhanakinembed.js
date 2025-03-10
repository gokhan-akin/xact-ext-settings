var attribute = {};
var element = {};
var predictionTimer = null;
var tipsToUse = [];
var loadingLogo = null;

let CLASSNAME = { //these classnames will be added for different situations
	"MISMATCH": "mismatch", //for incorrect information in the report
	"MISSING": "missing", //for missing information in the report
	"MATCH": "match", //for matching information in the report
	"PRESENT": "present", //for present information in the report
	"NOT_APPLICABLE": "not_applicable", //for not applicable information in the report
}

window.onload = (event) => {
	loadWidget();
	let url = window.location.href ?? '';
	if ((url.includes('xact') || url.includes('127'))) {
		tipsToUse = attribute.motd ? [attribute.motd] : humanityTips;
	}
	tipsToUse = marketingTips;

	let rand = (max) => { return Math.floor(Math.random() * (max + 1)); }
	loadingLogo = url.includes('xact') ? "https://static.wixstatic.com/media/52c20f_7db6ddafa3d744f187d0550222f6989e~mv2.gif" : randomLoadingGifs[rand(randomLoadingGifs.length - 1)];
};

/*
// Select the node that will be observed for mutations
const targetNode = document.documentElement; // This selects the whole document

// Options for the observer (which mutations to observe)
const config = {
  childList: true, // Observe direct children being added or removed
  subtree: true,   // Observe all descendants (i.e., whole tree)
};

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
	if (mutation.type === 'childList') {
		setStyle("dark")
	}
  }
};

// Create an instance of MutationObserver with the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// To stop observing, you can call:
// observer.disconnect();


function setStyle(style="default") {
	if(style == "dark") {
		let allItems = document.querySelectorAll('*');
		allItems.forEach((item)=>{
			if(!item.classList.contains(style)) item.classList.add(style)
		})
	}
}*/

async function loadWidget() {
	let url = window.location.href ?? '';
	let widget = document.querySelector("div.ub_status_check_widget");
	if (widget) {
		attribute = getWidgetAttributes(widget);

		let params = getParams();
		await loadStatusCheckMessages(attribute.key, attribute.language ?? "de", params.ubrecheckid, params.ubrechecktoken);
		if (typeof statusCheckMessages == 'undefined') return null;

		widget.innerHTML = `<style>@media print{body{margin:0 0}.footer,.header{position:fixed;width:100%;text-align:left}.header{top:0}.footer{bottom:0}.page-break{margin:.5cm 0}#foundEmailsDiv,#foundOwnersDiv,#pdfLink,#queryLine img,#ubcta,#ubformfield,.download{display:none!important;visibility:hidden}#searchQuery{font-size:14px!important}#qualityText{font-size:12px!important}}@page{size:A4}#ubinwrap.dark,#ubwrap.dark,.modal.dark,.ub_status_check_widget.dark,html.dark{background-color:#484848!important;background:#272727!important;color:#fff!important}#ubformfield.dark{background-color:rgba(0,191,255,.119)!important}#ubformfield input.dark,#ubformfield select.dark{background-color:rgba(255,255,255,.15)!important;color:#fff!important}#header #headertext.dark,#portal_name.dark,#ubgrid .gridEntry .gridEntryName.dark,#ubgridcaption.dark{color:#ffffffcc!important}button#ubsend.dark{background-color:#1e5977!important}#predictionEntry.dark{background:#000000b5!important;color:#fff!important}#predictionEntry.dark:hover{background:#0000007d!important;color:#fff!important}.infobox.dark{background-color:#153d25!important}.infobox .caption.dark,.infobox .text.dark{color:#fff}*{font-size:14px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif}#ubformfield[disabled]{opacity:.6}#ubwrap,.ub_status_check_widget{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding-top:0;position:relative;z-index:888;box-sizing:border-box;min-height:540px;background:#fff}#ubwrap{visibility:hidden}#ubinwrap{position:absolute;top:0;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;background:#fff}#ubformfield input,#ubformfield select{color:grey;border-radius:10px;border:1px solid #ffffff61;height:40px;width:100%;box-sizing:border-box;padding-left:10px;outline:0}#ubformfield input:disabled,#ubformfield select:disabled{outline:0;border:none}#ubformfield label{color:#fff;margin:5px 8px;font-size:10px;letter-spacing:1px;user-select:none;overflow:hidden;text-wrap:nowrap;-webkit-white-space:nowrap;-moz-white-space:nowrap;white-space:nowrap}#ubformfield label[for=ubsend]{visibility:hidden}div#addressprediction{position:relative;width:100%;padding:5px;box-sizing:border-box}#ubformfield{display:flex;justify-content:center;align-items:center;flex-direction:column;border-radius:40px;background-color:#60ab60;width:100%;min-width:650px;max-width:1200px;padding:20px 0}form#ubform{width:70%;display:flex;justify-content:center;align-items:center}form#predictionform{width:70%;display:none;justify-content:center;align-items:center;margin-bottom:0}button#ubsend{border-radius:20px 0;background-color:#243f2f;color:#fff;height:40px;width:100%;border:none;font-size:12px;letter-spacing:.1em;cursor:pointer}button#ubsend:hover{opacity:.8}button#ubsend:disabled{cursor:default;opacity:.5}input::placeholder{color:#ffffff5d}div#ubcountry,div#ubname,div#ubsend,div#ubstreet,div#ubzip{display:flex;flex-direction:column;margin:5px;height:100%}div#ubname,div#ubstreet{width:80%}div#ubzip{width:30%}div#ubcountry{width:60%}div#ubsend{width:80%}#queryInfo{display:none;flex-direction:column;justify-content:center;align-items:center;width:100%}#queryCaptionText{text-align:center;margin-top:15px;font-style:italic;color:#77899f;user-select:none}#searchQuery{max-width:60%;text-align:center;font-size:16px;font-weight:700;margin-bottom:10px;color:#4c627d}#queryLine{width:100%;display:flex;justify-content:center;align-items:center;cursor:pointer;margin:10px 0}#queryLine *{margin:0 5px}#topinfo{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}#bottominfo{max-width:1000px;visibility:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%}span{color:inherit}#bottominfo hr{border:none;border-top:2px solid #eaeaea;width:100%}#nearMe360Text,#resultsListText{font-size:20px;width:100%;text-align:left;font-weight:700;margin:5px;color:#255180;padding-left:100px}.sectionCaption{font-size:20px;width:100%;text-align:left;font-weight:700;margin:5px;color:#255180;padding-left:100px}#qualityText{margin:10px 0;color:#77899f;user-select:none}#totalPortals{font-weight:700;font-size:16px;margin:2px;color:inherit}#resultsList{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%} .ubxresult{width:100%;min-height:100px;height:110px;max-height:170px;display:flex;align-items:center;padding:15px;box-sizing:border-box}.ubxresult:has(img.loadingImg), .opacity-02{opacity:0.2;}.ubxresult a{text-decoration:none;color:inherit}.ubxresult #name{font-size:18px;font-weight:700;color:#2c2c2c;text-wrap:nowrap;-webkit-white-space:nowrap;-moz-white-space:nowrap;white-space:nowrap}.ubxresult .portaldiv{height:100%;width:20%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-weight:bolder;margin:0 20px}.ubxresult #portal_img{width:100%;max-width:45px}.ubxresult #portal_name{color:#656565}#header{margin:20px 0 20px}#header #headertext{font-size:30px;font-weight:700;letter-spacing:-2px;color:#406592;color:#525252;user-select:none}.ubxresult .infos{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;height:100%;width:50%;text-wrap:nowrap;-webkit-white-space:nowrap;-moz-white-space:nowrap;white-space:nowrap;overflow:hidden}.ubxresult #details{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;height:100%;width:100%;color:#2c2c2c}.ubxresult svg{height:60px;width:50px;fill:#ececec}.ubxresult .svgdiv{width:10%;margin:0 10px;text-align:center}.ubxresult .mismatch,.ubxresult .missing{fill:#e86363;color:#e86363;font-weight:700}.ubxresult span.not_applicable{font-style:italic;color:#a3a3a3}.ubxresult svg.not_applicable{fill:rgba(163,163,163,.196)}.ubxresult svg.match,.ubxresult svg.present{fill:#63a663}.ubxresult:nth-child(odd){background-color:var(--altColor)}#graphInfo{width:100%;height:100%;display:flex;justify-content:space-evenly;align-items:center}#ubcta{display:none;flex-direction:column}#ubcta button#ctabutton{border-radius:20px 0;background-color:#5a859d;background:radial-gradient(#5a859d,#96b4c5);color:#fff;height:60px;width:100%;border:none;font-size:14px;letter-spacing:.1em;margin:20px 0;cursor:pointer;user-select:none}#ubcta button#ctabutton:hover{opacity:.6}#ubcta span#ctatext{text-align:center;max-width:270px;font-size:24px;margin:20px 0;font-weight:700;color:#3b5969;user-select:none}#ubnearme360,#ubtable{margin:20px 0;width:100%}#ubgridwrap{display:none;flex-direction:column;align-items:center;justify-content:center;width:900px;margin:30px;user-select:none}#ubgridcaption{font-weight:700;font-size:16px;color:#525252}#ubgrid{display:flex;justify-content:center;flex-wrap:wrap;width:100%;margin:30px}#ubgrid .gridEntry{width:128px;height:51px;max-width:128px;max-height:51px;display:flex;flex-direction:column;justify-content:center;align-items:center;box-sizing:border-box;margin-bottom:20px;color:#606060}#ubgrid .gridEntry .gridEntryLogo,#ubgrid .gridEntry img{max-height:32px}#ubgrid .gridEntry .gridEntryName{font-size:11px;text-align:center;text-shadow:0 0 2px #8f8686}.flatback{position:fixed;inset:0;z-index:9998;display:none;justify-content:center;align-items:center;z-index:99999}.loading{position:absolute;background-color:rgba(14,26,36,.5);top:0;left:0;height:100%;width:100%;display:none;justify-content:center;align-items:center}@keyframes opacityAnimation{0%{opacity:.4}50%{opacity:1}100%{opacity:.4}}.loading img{pointer-events:none;max-height:150px;animation:opacityAnimation .86s infinite}.modal{background-color:#fff;box-shadow:0 0 25px #000000ab;border-radius:50px;min-width:700px;min-height:400px;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;color:#fff;box-sizing:border-box;padding:10px;position:relative;border-color:#94ba3397}.error{position:absolute;background-color:rgba(14,26,36,.5);top:0;left:0;height:100%;width:100%;display:none;justify-content:center;align-items:center}.emodal{background-color:#fff;box-shadow:0 0 25px #000000ab;border-radius:10px;max-width:450px;padding:30px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#4b4b4b;text-align:center;user-select:none}.closebtn{height:36px;width:50%;border-radius:10px;background-color:#1e6eb3b3;border:none;color:#fff;user-select:none;cursor:pointer;font-style:bolder;font-size:12px;letter-spacing:1px}#myProgress{width:60%;background-color:#94ba3354;border-radius:30px 0;overflow:hidden}#myBar{width:1%;height:13px;background-color:#94c434;border-radius:30px 0}#skipSvg{width:32px;height:27px;fill:#97a5fb;cursor:pointer}#skipSvg[disabled]{opacity:.2;cursor:default}#predictionList{display:flex;flex-direction:column;width:100%;z-index:999999;background-color:#fff;border-radius:5px 5px 10px 10px;text-wrap:nowrap;-webkit-white-space:nowrap;-moz-white-space:nowrap;white-space:nowrap;position:absolute;overflow:hidden;box-shadow:0 5px 5px rgba(0,0,0,.383);box-sizing:border-box}#predictionEntry{height:auto;width:100%;padding:10px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.111);box-sizing:border-box}#predictionEntry img{margin:0 10px;height:16px}#predictionEntry:hover{background-color:rgba(0,0,0,.1)}#timesInfo{user-select:none;cursor:default;box-shadow:0 0 5px #0000006b;border-radius:5px;padding:10px;background-color:#fff;position:absolute;display:none;flex-direction:column;justify-content:flex-start;align-items:flex-start;text-align:left;margin-top:40px;margin-left:60px;z-index:1000;text-wrap:nowrap;-webkit-white-space:nowrap;-moz-white-space:nowrap;white-space:nowrap}#timeLine{display:flex;align-items:center;justify-content:center;padding:3px}#timeLine svg{margin-right:5px}#pdfLink{display:flex;justify-content:space-evenly;align-items:center;margin-top:15px;text-align:center;width:100%}#pdfLink .pdflinkbtn{color:#11647db3;border:1px solid rgba(0,0,0,.2);box-shadow:0 0 2px rgba(0,0,0,.168);border-radius:10px;padding:5px 20px;cursor:pointer;user-select:none;background:0 0;box-shadow:none;border:none;overflow:hidden;text-wrap:nowrap;-webkit-white-space:nowrap;-moz-white-space:nowrap;white-space:nowrap}#pdfLink .pdflinkbtn img{margin-right:10px}#pdfLink .pdflinkbtn:hover{opacity:.7}#pdfLink .pdflinkbtn:disabled{opacity:.4;border:none;cursor:default}#pdfLink #copyLink{display:flex;align-items:center;justify-content:space-evenly}#pdfLink #pdfExport{display:flex;align-items:center;justify-content:space-evenly}.managed{color:#63a663;font-weight:bolder}.nearMe360Line{display:flex;align-items:center;padding-left:100px;margin:20px}.nearMe360Text{margin-left:20px;user-select:none}.infobox-wrap{display:flex;flex-direction:column;width:100%}.infobox{background-color:rgba(246,231,218,1);border-radius:10px;display:none;flex-direction:column;align-items:center;justify-content:start;padding:10px 20px;margin:5px;overflow:hidden;font-family:Arial,Helvetica,sans-serif}#summary{display:none}.infobox .caption{font-weight:700;line-height:1.3em;padding-top:0;color:rgba(33,28,112,1);text-wrap:nowrap;white-space:nowrap;-webkit-white-space:nowrap;-moz-white-space:nowrap}.infobox .text{font-size:14px;color:rgba(106,114,165,1);text-align:center;line-break:loose;width:100%;display:flex;flex-wrap:wrap;justify-content:center}.infobox .text span a:hover{opacity:0.7}.infobox .text span{margin:5px}.infobox .text span::before{content:'🢂';margin-left:5px;margin-right:2px}#loadingTips{box-sizing:border-box;color:grey;height:60px;max-height:60px;width:400px;max-width:400px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;text-wrap:pretty;display:flex;justify-content:center;align-items:center}</style><div class=flatback><div class=loading><div class=modal><img src=https://static.wixstatic.com/media/52c20f_24e1624f84364dfa9e9a51c913c6e6cf~mv2.gif draggable=false title=💚><div id=loadingTips><span></span></div><div id=myProgress><div id=myBar></div></div><div id=skipCheck><svg id=skipSvg viewBox="0 0 512 440.638"height=441 width=512 aria-hidden=true data-type=shape disabled image-rendering=optimizeQuality preserveAspectRatio=none role=presentation shape-rendering=geometricPrecision text-rendering=geometricPrecision xmlns=http://www.w3.org/2000/svg><path d="M175.62 399.21c9.75 2.44 15.69 12.33 13.25 22.08-2.44 9.76-12.33 15.69-22.08 13.25-59.06-14.88-106.52-52.3-135.48-100.77C2.34 285.3-8.14 225.8 6.72 166.78c14.87-59.06 52.3-106.5 100.77-135.47S215.46-8.14 274.48 6.72c20.6 5.19 39.82 13.14 57.33 23.35a219.44 219.44 0 0 1 47.18 36.99l.14-11.58c.13-10.04 8.38-18.07 18.41-17.94 10.03.13 18.06 8.38 17.94 18.4l-.71 58.06c-.02 1.86-.33 3.65-.87 5.33-1.66 9.08-9.99 15.59-19.38 14.8l-57.87-4.65c-10.01-.84-17.43-9.63-16.59-19.63.84-10 9.63-17.42 19.62-16.58l15.28 1.23c-.33-.3-.66-.62-.97-.95-11.78-12.38-25.35-23.21-40.42-31.99-14.61-8.52-30.68-15.17-47.92-19.51-49.36-12.43-99.06-3.7-139.5 20.47-40.44 24.17-71.68 63.78-84.1 113.1-12.43 49.35-3.7 99.06 20.47 139.49 24.17 40.44 63.79 71.68 113.1 84.1zM123.11 288.7l5.32-29.31c11.64 2.91 22.13 4.37 31.43 4.37 9.31 0 16.81-.38 22.51-1.14v-11.53l-17.1-1.52c-15.44-1.39-26.05-5.1-31.81-11.11-5.76-6.01-8.64-14.91-8.64-26.69 0-16.21 3.51-27.34 10.54-33.42 7.02-6.08 18.96-9.12 35.8-9.12 16.85 0 32.03 1.58 45.59 4.75L212 202.33c-11.78-1.9-21.21-2.84-28.3-2.84-7.1 0-13.11.31-18.05.94v11.34l13.68 1.33c16.58 1.65 28.05 5.61 34.38 11.87 6.33 6.27 9.5 14.98 9.5 26.12 0 7.98-1.08 14.72-3.24 20.23-2.15 5.51-4.71 9.69-7.68 12.54-2.99 2.84-7.2 5.03-12.64 6.55-5.44 1.52-10.22 2.43-14.34 2.75-4.11.32-9.59.48-16.43.48-16.46 0-31.72-1.65-45.77-4.94zm153.75-49.57v51.66h-37.99V172.08h37.99v48.43c1.71 0 19.22-44.1 21.27-48.43h41.03l-28.49 58.31 29.44 60.4h-41.03l-21.46-51.66h-.76zm76.07 51.66V172.08h37.98v118.71h-37.98zm121.08-28.69h-26.73v28.69h-35.95V172.08h59.83c27.22 0 40.84 14.62 40.84 43.87 0 16.08-3.55 27.99-10.64 35.71-2.66 2.91-6.34 5.38-11.02 7.41-4.68 2.02-10.13 3.03-16.33 3.03zm-26.73-61.67v33.32h10.78c4.55 0 7.88-.48 9.97-1.42 2.08-.95 3.13-3.14 3.13-6.56v-17.36c0-3.42-1.06-5.61-3.13-6.55-2.09-.94-5.43-1.43-9.97-1.43h-10.78zm-209 203.82c-18.71 1.5-23.29 28.46-4.04 35.46 2.66.81 4.7 1.08 7.52.85 12.97-1.16 26.57-3.61 39.08-7.21 20.42-5.96 16.15-36.68-6.37-35.74-1.23.11-2.46.31-3.63.66-8.66 3.03-23.3 5.15-32.56 5.98zm91.77-35c-6.7 5.02-9.03 13.68-6 21.43 4.52 11.06 18.25 14.97 27.83 7.78 10.62-7.8 20.59-16.91 29.58-26.53 2.87-3.05 4.65-7.3 4.83-11.45.74-17.07-19.88-25.75-31.6-13.34-7.26 7.94-15.98 15.74-24.64 22.11z"fill-rule=nonzero></path></svg></div></div></div><div class=error><div class=emodal><img src=https://static.wixstatic.com/media/52c20f_26036272f923465eb57deb56632f0b85~mv2.gif draggable=false style=height:64px><p></p><button id=closeError class=closebtn onclick='toggleErrorModal("",!1)'>Okay</button></div></div></div><div id=ubwrap><div id=ubinwrap><div id=header><span id=headertext></span></div><div id=topinfo><div id=queryInfo><span id=queryCaptionText></span><div id=queryLine><span id=searchQuery></span> <img src=https://cdn-icons-png.flaticon.com/512/3597/3597075.png height=21 width=21></div></div><div id=ubformfield><form autocomplete=off autofill=false id=predictionform><input autocomplete=false name=hidden style=display:none type=hidden><div id=addressprediction><label for=prediction>Adresse Suche</label> <input id=prediction placeholder=Suche... title=prediction autocomplete=false><div id=predictionList></div></div></form><form autocomplete=off autofill=false id=ubform><input autocomplete=false name=hidden style=display:none type=hidden><div id=ubcountry><label for=ubcountry></label> <select id=ubcountry title=ubcountry></select></div><div id=ubname><label for=ubname></label> <input id=ubname placeholder=Name title=ubname></div><div id=ubstreet><label for=ubstreet></label> <input id=ubstreet placeholder=Adresse title=ubstreet></div><div id=ubzip><label for=ubzip></label> <input id=ubzip placeholder=PLZ title=ubzip maxlength=7></div><div id=ubsend><label for=ubsend>.</label> <button id=ubsend onclick=searchInit() type=button></button></div></form></div></div><div id=bottominfo><div id=pdfLink><button id=copyLink class=pdflinkbtn><img src=https://cdn-icons-png.freepik.com/512/7671/7671236.png draggable=false height=21 width=21><span></span></button> <button id=pdfExport class=pdflinkbtn onclick=pdfExportInit()><img src=https://www.iconpacks.net/icons/2/free-pdf-icon-3385-thumb.png draggable=false height=21 width=21><span></span></button></div><span id=qualityText><span id=totalPortals></span></span><div id=graphInfo><div id=ubgraph style=display:block><canvas height=300 id=ubcanvas width=300></canvas></div><div id=ubcta><span id=ctatext></span> <a id=ctalink><button id=ctabutton type=button name=ctabutton></button></a></div></div><div id=summary class=infobox-wrap><div id=foundEmailsDiv class=infobox><span class=caption>Emails gefunden!</span> <span id=foundEmails class=text></span></div><div id=foundPhonesDiv class=infobox style=background-color:#e1f0D9ff><span class=caption>Vorhandene Nummer</span> <span id=foundPhones class=text></span></div><div id=foundWebsitesDiv class=infobox style=background-color:#d9eef0ff><span class=caption>Vorhandene Webseiten</span> <span id=foundWebsites class=text></span></div><div id=foundNamesDiv class=infobox style=background-color:#e2e7FBff><span class=caption>Vorhandene Namen</span> <span id=foundNames class=text></span></div><div id=foundAddressDiv class=infobox style=background-color:#f7e6ECff><span class=caption>Vorhandene Adressen</span> <span id=foundAddress class=text></span></div><div id=foundOwnersDiv class=infobox style=background-color:#e1f0d9><span class=caption>Eventuelle Geschäftsführer/Zeilen aus dem Inhalt der Webseite (Beta)</span> <span id=foundOwners class=text></span></div></div><div id=ubnearme360 style=display:none><span id=nearMe360Text class=sectionCaption>Aufschlüsselung der Ergebnisse:</span><hr><div id=nearMe360nameDiv class=nearMe360Line><div class=nearMe360Svg><svg id=nearMe360Svg viewBox="0 0 25 21"height=21 width=25><path d="M25 8.61V6.44l-.04-.12a.79.79 0 00-.04-.1L21.46.37a.78.78 0 00-.68-.38H4.21a.78.78 0 00-.67.38L.09 6.18l-.01.05a.62.62 0 00-.04.1l-.02.06a.97.97 0 00-.02.18V8.6a3.73 3.73 0 002.64 3.56v6.9h-.3a.78.78 0 100 1.56h20.32a.78.78 0 00.78-.78.78.78 0 00-.78-.78h-.3v-6.9A3.73 3.73 0 0025 8.6zm-10.5 6.85v3.6h-4v-3.6h4zM2.15 5.78l2.5-4.22h15.7l2.5 4.22H2.14zm16.2 2.27a.78.78 0 00-.78.72 2.15 2.15 0 01-.68 1.43 2.15 2.15 0 01-2.93 0 2.15 2.15 0 01-.68-1.43.78.78 0 10-1.56 0 2.15 2.15 0 01-4.3 0 .78.78 0 10-1.56 0 2.15 2.15 0 01-3.69 1.32 2.15 2.15 0 01-.6-1.48V7.34h21.87v1.27a2.15 2.15 0 01-4.3.16.78.78 0 00-.79-.72zm-3.07 5.84H9.71a.78.78 0 00-.78.78v4.4H4.2V12.3a3.72 3.72 0 002.44-1.4 3.7 3.7 0 005.21.65 3.76 3.76 0 00.65-.65 3.7 3.7 0 005.21.65 3.76 3.76 0 00.65-.65 3.73 3.73 0 002.44 1.4v6.77h-4.74v-4.4a.78.78 0 00-.78-.78z"></path></svg></div><span class=nearMe360Text>Falscher Name, wie z.B. auf <span id=nearMe360Directories></span></span></div><div id=nearMe360addressDiv class=nearMe360Line><div class=nearMe360Svg><svg id=nearMe360Svg viewBox="0 0 24 32"height=32 width=24><path d="M11.657 30.39a2.236 2.236 0 01-1.838-.956L2.129 18.37l-.114-.169-.083-.123a1.064 1.064 0 01-.07-.08A11.652 11.652 0 019.201.266a11.651 11.651 0 0112.236 17.732l-.054.085-.044.06-.165.227-.027.035-7.67 11.026a2.236 2.236 0 01-1.83.959h.009zM3.54 16.79l.024.03.141.21.127.182 7.674 11.026a.168.168 0 00.233.041.273.273 0 00.042-.041l7.712-11.085a6.64 6.64 0 01.192-.26l.027-.044A9.59 9.59 0 009.636 2.284 9.589 9.589 0 003.54 16.79zm8.11.322a5.459 5.459 0 115.462-5.447 5.464 5.464 0 01-5.461 5.447zm0-8.852a3.393 3.393 0 10.007 6.786 3.393 3.393 0 00-.006-6.786z"></path></svg></div><span class=nearMe360Text>Falsche Adresse, wie z.B. auf <span id=nearMe360Directories></span></span></div><div id=nearMe360phoneDiv class=nearMe360Line><div class=nearMe360Svg><svg id=nearMe360Svg viewBox="0 0 24 26"height=26 width=24><path d="M24 19.85v-.03c-.1-.63-.8-1.46-2.13-2.51a27.02 27.02 0 00-3.97-2.62l-.16-.05c-.95-.25-2.3.43-3.28.94l-.12.06-.13.06a80.14 80.14 0 01-5.02-5.76c.05-.05.1-.1.13-.16.71-1.02 1.78-2.58 1.23-3.9-.2-.46-.83-1.66-1.55-2.92-.47-.84-.98-1.66-1.54-2.44L7.11.26 7.02.22C6.7.1 6.36.02 6.02 0a6.3 6.3 0 00-3.65 1.19 6.2 6.2 0 00-2.22 2.5c-.07.2-.12.4-.14.62-.16 2.63 1.07 5.78 3.67 9.38a59.8 59.8 0 006.4 7.22l.04.04a31.94 31.94 0 003.77 2.89 10.4 10.4 0 004.7 1.67h.12c.94 0 2.16-.73 3.36-2.04.85-.92 1.86-2.37 1.93-3.42v-.2zM7.62 8.63c-.39.56-.73 1.05-.6 1.6.2.75 2.47 3.35 3.16 4.13 1.38 1.56 3.17 3.44 3.87 3.52h.26c.37-.11.73-.27 1.06-.46a9.15 9.15 0 011.82-.79 26.9 26.9 0 013.4 2.3c.48.34.93.74 1.33 1.18-.33.73-.8 1.4-1.36 1.96-.95 1.04-1.62 1.4-1.83 1.4a8.13 8.13 0 01-3.76-1.37c-1.23-.8-2.4-1.7-3.49-2.67a58.12 58.12 0 01-6.15-6.94c-2.3-3.21-3.4-5.92-3.26-8.05a4.11 4.11 0 011.46-1.57 4.18 4.18 0 012.23-.83h.12l.18.02c.26.39.66 1.06 1.15 1.9a36.65 36.65 0 011.44 2.7c.04.12-.04.53-1.03 1.97z"></path></svg></div><span class=nearMe360Text>Fehlende Telefonnummer, wie z.B. auf <span id=nearMe360Directories></span></span></div><div id=nearMe360websiteDiv class=nearMe360Line><div class=nearMe360Svg><svg id=nearMe360Svg viewBox="0 0 25 21"height=21 width=25><path d="M3.77 2a.75.75 0 00-.77.76.77.77 0 00.77.77.75.75 0 00.77-.73v-.04A.75.75 0 003.8 2h-.03zM5.94 2a.75.75 0 00-.77.74v.02a.77.77 0 101.33-.53.75.75 0 00-.53-.23h-.03zM8.23 2a.75.75 0 00-.77.74v.02a.77.77 0 101.33-.53.75.75 0 00-.53-.23h-.03z"></path><path d="M24.07 20.64H.8a.8.8 0 01-.8-.8V.8A.8.8 0 01.8 0h23.27a.8.8 0 01.8.8v19.04a.8.8 0 01-.8.8zm-22.48-1.6h21.68V1.6H1.6v17.46z"></path><path d="M23.49 7H.91a.87.87 0 01-.64-.3A1.05 1.05 0 010 6c0-.27.1-.52.27-.7.17-.2.4-.3.64-.3h22.58c.24 0 .47.1.64.3a1.05 1.05 0 010 1.41c-.17.18-.4.29-.64.29z"></path></svg></div><span class=nearMe360Text>Fehlende Webseite, wie z.B. auf <span id=nearMe360Directories></span></span></div><div id=nearMe360openingHoursDiv class=nearMe360Line><div class=nearMe360Svg><svg id=nearMe360Svg viewBox="0 0 25 25"height=25 width=25><path d="M13.16 6.12a1.06 1.06 0 00-1.03 1.03v5.95l-2.41 2.24a.98.98 0 00-.13 1.4c.2.2.48.33.77.33a.92.92 0 00.66-.27l2.75-2.52a.86.86 0 00.36-.7V7.14a1.04 1.04 0 00-.97-1.03z"></path><path d="M12.5 0a12.5 12.5 0 100 25 12.5 12.5 0 000-25zm0 23.24a10.74 10.74 0 110-21.48 10.74 10.74 0 010 21.48z"></path></svg></div><span class=nearMe360Text>Fehlende Öffnungszeiten, wie z.B. auf <span id=nearMe360Directories></span></span></div><div id=nearMe360photosDiv class=nearMe360Line><div class=nearMe360Svg><svg id=nearMe360Svg viewBox="0 0 25 20"height=20 width=25><path d="M9.092 0a.908.908 0 00-.765.47L7.14 2.84H2.55A2.57 2.57 0 000 5.391v11.37a2.57 2.57 0 002.55 2.55h19.892a2.57 2.57 0 002.55-2.55V5.395a2.571 2.571 0 00-2.55-2.55h-4.59L16.66.474a.872.872 0 00-.765-.469L9.092 0zm.53 1.704h5.753l1.202 2.376a.872.872 0 00.765.47h5.1a.834.834 0 01.852.851v11.36a.831.831 0 01-.852.851H2.55a.835.835 0 01-.854-.852V5.396a.834.834 0 01.854-.851h5.1a.872.872 0 00.766-.47l1.206-2.371zm2.874 3.692a5.399 5.399 0 105.402 5.4 5.412 5.412 0 00-5.402-5.4zm0 1.706a3.693 3.693 0 11-3.69 3.693 3.68 3.68 0 013.69-3.693z"></path></svg></div><span class=nearMe360Text>Fehlende Fotos, wie z.B. auf <span id=nearMe360Directories></span></span></div></div><div id=ubtable><span id=resultsListText class=sectionCaption></span><hr><div id=resultsList><div id=result><div class=portaldiv><a id=listingurl target=_blank><img src=""draggable=false id=portal_img> </a><span id=portal_name>-</span></div><div class=infos><span id=name>-</span><div id=details><span id=street>-, -</span> <span id=number>-</span> <a id=website target=_blank>-/</a></div></div><div class=svgdiv><div id=timesInfo></div><svg id=times viewbox="0 0 800 400"><path d="M48.1,35.3h3.2c0.9,0,1.6,0.7,1.6,1.6c0,0,0,0,0,0v14c0,0.4-0.2,0.8-0.4,1.2l-9,9c-0.6,0.6-1.6,0.6-2.2,0 l-2.2-2.2c-0.6-0.6-0.6-1.6,0-2.2l7.5-7.6V37c-0.1-0.8,0.5-1.6,1.4-1.7C48,35.3,48,35.3,48.1,35.3z"/><path d="m256 8c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm92.49 313-20 25a16 16 0 0 1 -22.49 2.5l-67-49.72a40 40 0 0 1 -15-31.23v-155.55a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v144l58 42.5a16 16 0 0 1 2.49 22.5z"/></svg></div><div class=svgdiv><svg id=photos viewbox="0 0 700 400"><path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"/></svg></div></div></div></div></div><div id=ubgridwrap><div id=ubgridcaption></div><div id=ubgrid></div></div></div></div>`
		element = getElements(widget);
		await loadGoogleAPI();
		await loadChartJS();
		await loadUberall();
		await loadTextsAndAttributes();

		actualizeDirectoryGrid();
		actualizeChart();
		toggleResults(false);
		if (element.ubwrap) element.ubwrap.style.visibility = "visible";
		if (element.loadingImg) {
			element.loadingImg.src = loadingLogo ?? 'https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif';
		}
		initParams();
	}
}

async function loadGoogleAPI(key = "AIzaSyBG4_LC89Zr2-Ut2Jk1GQv8N3027L2R6w0") {
	if ((typeof window.location.href === 'string') && window.location.href.includes('127.0')) key = atob('QUl6YVN5Q3cwMVVkeHBPMjBpYUNHYTVxb2xycWJFRlVjVVQ2U3Jn'); //"AIzaSyCw01UdxpO20iaCGa5qolrqbEFUcUT6Srg"
	let loaded = await new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&loading=async`;
		//script.async = true;
		//script.defer = true;
		script.onload = function () { resolve(true); }
		script.onerror = function () { resolve(false); }
		document.head.appendChild(script);
	});
	return loaded;
}

async function loadChartJS() {
	return await new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = `https://cdn.jsdelivr.net/npm/chart.js`;
		script.onload = function () { resolve(true); }
		script.onerror = function () { resolve(false); }
		document.head.appendChild(script);
	});
}

async function loadUberall() {
	return await new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = `https://cdn.jsdelivr.net/gh/gokhan-akin/xact-ext-settings@latest/uberall.js?t=1741595504`;
		script.onload = function () { resolve(true); }
		script.onerror = function () { resolve(false); }
		document.head.appendChild(script);
	});
}

async function loadStatusCheckMessages(public_key, language = "de", recheckid = undefined, rechecktoken = undefined) {
	return await new Promise((resolve, reject) => {
		const head = document.querySelector('head');
		function processStatusCheckMessages(res) {
			// Extract the content inside <script> tags
			const scriptContent = res.match(/(?<=<script>|<script\stype=["']text\/javascript["']>)[\s\S\r\n]*?(?=<\/script>)/gmi);
			scriptContent.forEach((cont) => {
				const scriptElement = document.createElement('script');
				scriptElement.type = 'text/javascript';
				scriptElement.text = cont.replaceAll("\\u002f", "/");
				// Append the script to the head
				head.appendChild(scriptElement);
			})
			// Resolve the promise once the script has been appended
			resolve(true);
		}

		/*fetch(`https://uberall.com/${language}/home/statusCheckMessages?public_key=${public_key}${(recheckid && rechecktoken) ? `&recheckid=${recheckid}&rechecktoken=${rechecktoken}` : ''}`,{ signal: AbortSignal.timeout(1000) })
			.then((res) => res.text())
			.then((res) => {
				processStatusCheckMessages(res);
			})
			.catch((err) => {*/
		fetch(`https://cdn.jsdelivr.net/gh/gokhan-akin/xact-ext-settings@latest/statusCheckMessages.html`)
			.then((res) => res.text())
			.then((res) => {
				processStatusCheckMessages(res);
			})
			.catch((err) => {
				console.log("Err fetching statusCheckMessages:", err);
				resolve(false);
			});
		//	});
	});
}

async function loadTextsAndAttributes() {
	if ((typeof statusCheckMessages == 'undefined') && typeof attribute.key != 'undefined') await loadStatusCheckMessages(attribute.key);
	if (typeof statusCheckMessages == 'undefined') return;
	if (element.qualityText) {
		element.qualityText.innerHTML = `${statusCheckMessages["top.box.chart.explanation"]} <span id="totalPortals">-</span> ${statusCheckMessages["top.box.chart.explanation.2"]}`
		element.totalPortals = document.querySelector("#totalPortals");
	}
	if (element.copyLink) {
		let spanElement = element.copyLink.querySelector('span');
		if (spanElement) spanElement.innerHTML = statusCheckMessages["share.link"]
	}
	if (element.pdfExport) {
		let spanElement = element.pdfExport.querySelector('span');
		if (spanElement) spanElement.innerHTML = statusCheckMessages["download.pdf.link"]
	}
	if (element.queryCaptionText) {
		element.queryCaptionText.innerHTML = statusCheckMessages["results.header"]
	}
	if (element.resultsListText) {
		element.resultsListText.innerHTML = statusCheckMessages["results.table.header"]
	}
	if (element.ubgridcaption) {
		element.ubgridcaption.innerHTML = statusCheckMessages["directory.grid.title"]
	}
	if (element.button) {
		element.button.innerHTML = statusCheckMessages["search.label.submit"]
	}
	if (element.ubzip) {
		let label = element.ubzip.parentElement.querySelector('label');
		if (label) label.innerHTML = statusCheckMessages["search.label.zip"]
	}
	if (element.ubcountry) {
		let label = element.ubcountry.parentElement.querySelector('label');
		if (label) label.innerHTML = statusCheckMessages["search.label.country"]
	}
	if (element.ubname) {
		let label = element.ubname.parentElement.querySelector('label');
		if (label) label.innerHTML = statusCheckMessages["search.label.name"]
	}
	if (element.ubstreet) {
		let label = element.ubstreet.parentElement.querySelector('label');
		if (label) label.innerHTML = statusCheckMessages["search.label.street"]
	}

	if (attribute.hasOwnProperty("directories")) attribute.directories = attribute.directories.split(',');

	if (element.ubcountry) {
		if (attribute.countries) {
			let countryList = attribute.countries.split(',')
			if (countryDropdownData) {
				countryList.forEach((country) => {
					if (countryDropdownData[country]) {
						let option = document.createElement("option")
						option.value = country;
						option.textContent = countryDropdownData[country].name;
						element.ubcountry.appendChild(option)
					}
				})
			}
		}
	}

	if (element.button) {
		if (attribute.hasOwnProperty("buttonbgcolor") && attribute.buttonbgcolor.length) element.button.style.backgroundColor = attribute.buttonbgcolor;
		if (attribute.hasOwnProperty("buttontextcolor") && attribute.buttontextcolor.length) element.button.style.color = attribute.buttontextcolor;
	}

	if (element.form) {
		if (attribute.hasOwnProperty("bgcolor") && attribute.bgcolor.length) element.form.style.backgroundColor = attribute.bgcolor;
	}

	if (element.headertext) {
		if (attribute.hasOwnProperty("headertext") && attribute.headertext.length) element.headertext.textContent = attribute.headertext;
	}

	if (element.ctatext) {
		if (attribute.hasOwnProperty("ctatext")) element.ctatext.textContent = attribute.ctatext;
	}

	if (element.ctabutton) {
		if (attribute.hasOwnProperty("ctabuttontext")) element.ctabutton.textContent = attribute.ctabuttontext;
	}

	if (element.ctalink) {
		if (attribute.hasOwnProperty("ctalink")) element.ctalink.href = attribute.ctalink;
	}

	if (element.allLinks) {
		if (attribute.hasOwnProperty("linkcolor") && attribute.linkcolor.length) {
			element.allLinks.forEach(linkElement => {
				linkElement.style.color = attribute.linkcolor;
			})
		}
	}

	if (element.allTexts) {
		if (attribute.hasOwnProperty("textcolor") && attribute.textcolor.length) {
			element.allTexts.forEach(textElement => {
				textElement.style.color = attribute.textcolor;
			})
		}
	}

	if (element.ubtable) {
		if (attribute.hasOwnProperty("showtable") && attribute.showtable != true) {
			element.ubtable.style.display = "none";
		} else { element.ubtable.style.removeProperty('display'); }
	}

	if (element.pdfExport) {
		if (attribute.hasOwnProperty("pdfexport") && (attribute.pdfexport != true)) element.pdfExport.style.display = "none";
	}

	if (element.copyLink) {
		if (attribute.hasOwnProperty("sharelink") && (attribute.sharelink != true)) element.copyLink.style.display = "none";
	}

	if (attribute.paddingtop) {
		if (typeof attribute.paddingtop == 'string') {
			widget.style.paddingTop = widget.style.paddingTop;
		}
	}

	//actualize Directory, actualize Chart, toggle Results false was here

	if (element.queryLine) {
		element.queryLine.removeEventListener('click', function (event) { });
		element.queryLine.addEventListener('click', function (event) {
			toggleForm()
		});
	}

	if (element.copyLink) {
		element.copyLink.removeEventListener('click', function (event) { });
		element.copyLink.addEventListener('click', function (event) {
			let avalue = element.copyLink.innerHTML;
			if (element.copyLink.hasAttribute('url')/* && !/(^(\[|\@))|(Kopie|COPIED|K(\s)?\.pdf)/gi.test(avalue)*/) {
				navigator.clipboard.writeText(element.copyLink.getAttribute('url')).then(() => {
					let spanElement = element.copyLink.querySelector('span');
					if (spanElement) spanElement.innerHTML = statusCheckMessages["share.link.copy.success"];
					element.copyLink.disabled = true;
					setTimeout(() => {
						element.copyLink.innerHTML = avalue;
						element.copyLink.disabled = false;
					}, 1000);
				});
			}
		})
	}

	element.ubcountry.addEventListener('change', function (event) {
		actualizeDirectoryGrid();
	});

	if (element.ubname && element.ubstreet && element.ubzip) {
		[element.ubname, element.ubstreet, element.ubzip].forEach(function (inputField) {
			inputField.removeEventListener('keydown', function (event) { });
			inputField.addEventListener('keydown', function (event) {
				if (event.keyCode === 13) {
					if (element.button && !element.button.getAttribute("disabled")) element.button.click();
				}
			});
		});
	}

	if (element.skipSvg) {
		element.skipSvg.addEventListener('click', function (event) {
			if (!element.skipSvg.hasAttribute("disabled")) {
				processResults();
			}
		});
	}

	element.predictionInput.addEventListener('input', () => {
		if (predictionTimer) clearTimeout(predictionTimer);
		if (attribute.prediction) {
			const query = element.predictionInput.value;
			if (query.length > 5) {
				predictionTimer = setTimeout(() => {
					fetchPredictions(query);
				}, 500);
			} else {
				element.predictionList.innerHTML = '';
			}
		}
	});

	document.addEventListener('click', function (event) {
		let focus = document.querySelector(":focus");

		if (!focus || (!/prediction|prediction/gi.test(focus.id) && (event.target && !/prediction|prediction/gi.test(event.target.id)))) {
			displayPredictions(null, null);
			if (element.predictionInput) element.predictionInput.value = '';
		}
	});

	actualizeParameterAndAttributeManagedFunctions();
}

async function getWebsiteAsHTML(url) {
	if (!url) return '';
	url = url.replace('http:', 'https:')
	return await new Promise((resolve, reject) => {
		let corsProxyService = [
			"https://api.allorigins.win/get?url=",
		]

		/*fetch(url.replace('http:', 'https:'))
			.then((res) => res.json())
			.then((json) => {
				resolve(json.contents)
			})
			.catch((err) => {*/
		fetch(`${corsProxyService[0]}${encodeURIComponent(url)}`)
			.then((res) => res.json())
			.then((json) => {
				json.contents = (json.contents ?? '').replace(/\n|\r|\t/gi, '').replace(/<!--.+?-->/gi, '');
				if (json.error) { resolve("") }
				resolve(json.status.http_code == 200 ? json.contents : null)
			})
			.catch((err) => {
				reject(err)
			});
	});
	/*}).catch(err => { console.log("Promise err: ", err) });*/
}

function actualizeParameterAndAttributeManagedFunctions() {
	//data-summary="true"
	// If a div appears/disappears with attribute AND parameter, use this function
	if (attribute) {
		if (element.nearme360) {
			element.nearme360.style.display = attribute.nearme360 ? "block" : "none";
		}

		if (element.summary) {
			if ((attribute.hasOwnProperty("summary") && (attribute.summary == true))) {
				element.summary.style.display = "flex";
			}
		}

		if (element.predictionform) {
			if (!attribute.hasOwnProperty("prediction") || (attribute.hasOwnProperty("prediction") && (attribute.prediction != false))) {
				fetchPredictions(" ", () => {
					attribute.prediction = true;
					element.predictionform.style.display = "flex";
				});
				// If there is an error with the prediction service, the callback doesn't get called.
				// So if the API key is invalid, the display won't get set to "flex" and the input field stays hidden.
			}
		}
	}
}


function parseEmailsFromHTML(html) {
	if (typeof html !== 'string') return null;
	let mails = html.replace(/\\x.{2}/gi, '').match(/[\w\.]+@([\w-]+\.)+[a-zA-Z-]{2,7}/gi);
	if (mails) mails = [...new Set(mails)];
	return mails;
}

function parseOwnersFromHTML(html, offset = 350) {
	let owners = [];
	if (html) {
		let editedHtml = html;
		let index;
		let checkwords = [
			"verantwortlich:", "inh.", "§ 5 tmg", "gesellschafter", "geschäftsführer", "inhaber", "vertreten",
		];
		let checkIndex = checkwords.length - 1;
		while (((!index) || (index > -1)) && (checkIndex > -1)) {
			index = editedHtml.toLowerCase().indexOf(checkwords[checkIndex]);
			if (index == -1) {
				checkIndex--;
				index = undefined;
				editedHtml = html;
			} else {
				let pushThis = editedHtml.substring(index, index + offset).replace(/<.+?>|\\.|\s\s+/gmi, ' ').replace(/\s\s+/gmi, '■').replace(/(\{|[^\w\s:\-äüöß&§;■\.]).+/gi, '');
				if (pushThis.length > 10) {
					owners.push(pushThis);
				}
				editedHtml = editedHtml.substring(index + offset)
			}
		}
	}
	return owners;
}

function findImprintLinkFromHTML(html = null, url = null) {
	if (!html) return null;
	if (!html.includes('<') && !html.includes('>')) { url = html; html = null; }
	if (!html) return null;
	let found = html.search(/(>|\/)(impressum|imprint)(<)?/gi);
	//console.log("found",found)
	if (found > -1) {
		let part = html.substring(html.lastIndexOf("href", found), found + 200);
		//console.log("part",part)
		let imprintUrl = (part.match(/(?<=href\=").+?(?=")/gi) ?? [null])[0]
		//console.log("imprintUrl",imprintUrl, "url", url)
		if (!imprintUrl) return null;
		if (url) {
			let urlBase = url.replace(/http(s)?:\/\/|www\./gi, '').replace(/\/(.+)?/gi, '');
			let imprintUrlBase = imprintUrl.replace(/http(s)?:\/\/|www\./gi, '').replace(/\/(.+)?/gi, '');
			if (/^(http|www)/i.test(imprintUrl)) {
				//console.log("imprintUrlBase",imprintUrlBase,"urlBase",urlBase)
				if ((imprintUrlBase != urlBase)) return null;
			}
			else {
				imprintUrl = "https://" + urlBase + '/' + imprintUrl.replace(/^\//, '');
			}
		}
		return imprintUrl;
	}// else console.log("HTML", html);
	return null;
}

// Fetch predictions with detailed address components
async function fetchPredictions(query, callback = displayPredictions) {
	if ((typeof google === 'undefined')) return;
	const service = new google.maps.places.AutocompleteService();
	return await service.getPlacePredictions({ input: query, componentRestrictions: { country: attribute.countries.split(',') } }, callback)
}

// Handle the click event on a prediction
function predictionOnClick(event, name, street, zip, country) {
	if (element.ubname && element.ubstreet && element.ubzip && element.ubcountry) {
		element.ubname.value = name;
		element.ubstreet.value = street;
		element.ubzip.value = zip;
		element.ubcountry.value = country;
	}
}

// Utility function to get a specific component from the address components
function getComponent(components, type, short = false) {
	return short ? (components.find(component => component.types.includes(type))?.short_name || '') : (components.find(component => component.types.includes(type))?.long_name || '');
}

// Display predictions in the list
function displayPredictions(predictions, status) {
	element.predictionList.innerHTML = '';

	if ((typeof google === 'undefined') || status !== google.maps.places.PlacesServiceStatus.OK || !predictions) {
		return;
	}

	const placesService = new google.maps.places.PlacesService(document.createElement('div'));
	predictions.forEach(prediction => {
		// Fetch place details for the selected prediction
		placesService.getDetails({ placeId: prediction.place_id, fields: ['name', 'address_components'] }, function (place, status) {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				const addressComponents = place.address_components;
				const country = getComponent(addressComponents, 'country', true);
				if ((typeof attribute.countries != 'undefined') && attribute.countries.includes(country)) {
					const item = document.createElement('div');
					item.id = "predictionEntry";
					const houseNumber = getComponent(addressComponents, 'street_number');
					const street = getComponent(addressComponents, 'route');
					const streetAndNo = street + ((houseNumber && houseNumber.length) ? " " + houseNumber : '');
					const zip = getComponent(addressComponents, 'postal_code');
					const placeName = place.name;
					let queryString = `${placeName}, ${streetAndNo}, ${country}-${zip}`

					prediction.matched_substrings.forEach(sub => {
						let subpred = prediction.description.substr(sub.offset, sub.length);
						let find = queryString.toLowerCase().indexOf(subpred.toLowerCase())
						if (find > -1) {
							queryString = queryString.substring(0, find) + "<b>" + queryString.substring(find, find + sub.length) + "</b>" + queryString.substring(find + subpred.length);
						}
					})

					//console.log(queryString)
					item.innerHTML = queryString;
					item.addEventListener('click', function (event) { predictionOnClick(event, placeName, streetAndNo, zip, country); });

					element.predictionList.appendChild(item);
				}
			}
		});
	});
}

async function initParams() {
	let params = getParams();

	if (attribute) {
		if (!attribute.hasOwnProperty('nearme360')) attribute.nearme360 = (params.nearme360) ? true : false;
		if (!attribute.hasOwnProperty('summary')) attribute.summary = (params.summary) ? true : false;
		actualizeParameterAndAttributeManagedFunctions();
	}

	if ((params.ubrecheckid && params.ubrechecktoken)) {
		let searchData = window.uberallStatusCheckStoredSearchData ? window.uberallStatusCheckStoredSearchData.searchData : (await uberall.getRecheckInfo({ recheckid: params.ubrecheckid, rechecktoken: params.ubrechecktoken }));
		console.log("searchData", searchData, "window.uberallStatusCheckStoredSearchData", window.uberallStatusCheckStoredSearchData)
		if (searchData) {
			params.ubname = searchData.name;
			params.ubstreet = `${searchData.street} ${searchData.streetNo}`
			params.ubzip = searchData.zip;
			params.ubcountry = searchData.country;
			params.ubcity = searchData.city;
		}
	}

	//To fix the issue with checking unallowed countries via params
	let countryToSearch = params.ubcountry ?? "DE";
	if ((typeof attribute.countries != 'undefined') && !attribute.countries.toUpperCase().includes(countryToSearch.toUpperCase())) { countryToSearch = "DE"; }
	if ((typeof params.force != 'undefined') || (params.ubrecheckid && params.ubrechecktoken)) params.ubcountry = countryToSearch;

	if (element.ubname && element.ubstreet && element.ubzip && element.ubcountry) {
		element.ubcountry.value = countryToSearch;
		element.ubname.value = params.ubname ?? '';
		element.ubstreet.value = params.ubstreet ?? '';
		element.ubzip.value = params.ubzip ?? '';
	}
	if ((params.ubrecheckid && params.ubrechecktoken) || (params.autostart == true)) {
		searchInit(params);
	}
}

async function generatePDF(data, customPdf = false) {
	let pdfExportData = {
		token: element.pdfExport.getAttribute("token") ?? element.pdfExport.getAttribute("ubrechecktoken") ?? element.pdfExport.getAttribute("rechecktoken"),
		showgraph: ((attribute.showgraph ?? true) == true),
		bgcolor: (attribute.bgcolor ?? "#27435c"),
		contactphone: (attribute.contactphone ?? ""),
		contactemail: (attribute.contactemail ?? ""),
		headertext: (attribute.headertext ?? "Testen Sie Ihre Auffindbarkeit"),
		language: (attribute.language ?? "de"),
		public_key: (attribute.key ?? undefined),
	}

	let url;
	if (customPdf == true) {
		try {
			let response = await fetch('http://192.168.31.213:1327/pdf', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(/*{id:element.pdfExport.getAttribute("recheckid"), token:element.pdfExport.getAttribute("token")}*/data)
			});
			let dat = await response.json();
			url = dat.link ?? dat.url;
		}
		catch (err) {
			customPdf = false;
		}
	}
	if (!customPdf) {
		url = await uberall.pdfExport(pdfExportData.token, undefined, pdfExportData.public_key, pdfExportData.showgraph, "#27435c"/*pdfExportData.bgcolor*/, pdfExportData.contactphone, pdfExportData.contactemail, pdfExportData.headertext, pdfExportData.language)
	}
	return url;
}

function pdfExportInit() {
	//generatePDF(window.lastSearchData)

	if (!element.pdfExport) return null;

	let originalText = element.pdfExport.innerHTML;
	element.pdfExport.disabled = true;
	let spanElement = element.pdfExport.querySelector('span');
	if (spanElement) spanElement.innerHTML = statusCheckMessages["download.pdf.in.progress"];
	generatePDF(window.lastSearchData, (attribute.custompdf == true)).then((link) => {
		const downloadLink = document.createElement('a');
		downloadLink.href = link; // Set the href attribute to the download link
		//downloadLink.target = "_blank";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);

		activatePdfExportButton();
	}).catch((err) => {
		console.log("Error PDF Export:", err);
		activatePdfExportButton();
	})

	function activatePdfExportButton() {
		element.pdfExport.innerHTML = originalText;
		element.pdfExport.disabled = false;
	}
	/*
		uberall.pdfExport(pdfExportData.token, undefined, pdfExportData.public_key, pdfExportData.showgraph, pdfExportData.bgcolor, pdfExportData.contactphone, pdfExportData.contactemail, pdfExportData.headertext, pdfExportData.language)
			.then((link) => {
				divElement.innerHTML = html;
				const downloadLink = document.createElement('a');
				downloadLink.href = link; // Set the href attribute to the download link
				document.body.appendChild(downloadLink);
				downloadLink.click();
				document.body.removeChild(downloadLink);
			});
	*/
}

function actualizeLoadingBar(value, total, skipEnabled = false) {
	if (typeof value != 'number' || typeof total != 'number') return;

	let bar = document.querySelector("#myBar")
	if (bar) bar.style.width = ((value <= 0 ? 0 : ((value / total) * 100)) + '%');

	//Turning number skipEnabled into a Boolean
	if (typeof skipEnabled == 'number') skipEnabled = (skipEnabled >= value) ? true : false;

	if ((skipEnabled == undefined) || (skipEnabled == null)) {
		element.skipSvg.removeAttribute("disabled")
		element.skipSvg.setAttribute('disabled', 'true')
		element.skipSvg.style.display = 'none';
	}
	else if (typeof skipEnabled == 'boolean') {
		element.skipSvg.style.removeProperty('display');
		if (skipEnabled == true) element.skipSvg.removeAttribute("disabled");
		else element.skipSvg.setAttribute('disabled', 'true')
	}
}

function searchInit(searchData = null) {
	delete window.lastSearchData;
	toggleButton(false);
	toggleResults(false);
	clearSummary();
	clearResults();

	if (element.copyLink) element.copyLink.removeAttribute("url");
	if (element.pdfExport) {
		element.pdfExport.removeAttribute("recheckid");
		element.pdfExport.removeAttribute("token");
	}

	let checkdata = {
		infoTextSize: 14,
		boolTickSize: 18,
		directoryLogoSize: 32,
		country: element.ubcountry.value,
		public_key: attribute.key,
		name: element.ubname.value,
		street: element.ubstreet.value,
		zip: element.ubzip.value,
		city: "",
		directories: attribute.directories,
		callback: function (data) {

			if ((data.dirDone == 1) && data.result.status == "INVALID_PARAMETER") {
				element.removeAttribute('id');
				element.removeAttribute('token');
				toggleErrorModal(data.result.message, true);
				toggleButton(true);
			}
			else {
				// The PDF Export element is used as a reference for the ACTUAL search.
				// So if the User initiates a new Search, the PDF Exports attributes change directly.
				// If it's the id and token of the result from the response is the same as the ones in the attribute,
				// the result is being added to the list. This is to prevent the results from the old search
				// being added to the list of the new search.
				if (data.dirDone == 1) {
					element.pdfExport.setAttribute('id', data.searchData ? data.searchData.id : data.id);
					element.pdfExport.setAttribute('token', data.searchData ? data.searchData.token : data.token);
				}
				actualizeLoadingBar(data.dirDone, data.dirTotal, (data.dirDone >= (data.dirTotal / 1.2)))

				if (!window.lastSearchData) window.lastSearchData = data; //TODO: Bad, bad work around.
				if (!window.lastSearchData.list) window.lastSearchData.list = [];
				window.lastSearchData.list.push(data.result);

				if (searchData) {
					if (!searchData.hasOwnProperty("ubrecheckid") && data.hasOwnProperty("id")) {
						searchData.ubrecheckid = data.id;
						searchData.ubrechecktoken = data.token;
					}
					if (!window.lastSearchData.hasOwnProperty("searchData")) window.lastSearchData.searchData = searchData;
				}

				if (data.dirDone == 1) //ON FIRST RESULT
				{
					clearResults();
					console.log("first result:", data)
					toggleLoadingModal(true);

					if (element.searchQuery) element.searchQuery.textContent = `${data.searchData.name}, ${data.searchData.streetAndNo ?? (data.searchData.street + " " + data.searchData.streetNo)}, ${data.searchData.zip}, ${data.searchData.country}`
					setParams({ ubrecheckid: data.searchData.id, ubrechecktoken: data.searchData.token }/*{ ubname: data.searchData.name, ubstreet: `${data.searchData.street} ${data.searchData.streetNo}`, ubzip: data.searchData.zip, ubcountry: data.searchData.country, ubcity: data.searchData.city }*/);

					if (element.copyLink) {
						let urlbase = window.location.href.split('?')[0];
						let shareurl = `${urlbase}?ubrecheckid=${data.searchData.id}&ubrechecktoken=${data.searchData.token}`;
						element.copyLink.setAttribute("url", shareurl)
					}

					if (element.pdfExport) {
						element.pdfExport.setAttribute("recheckid", data.searchData.id);
						element.pdfExport.setAttribute("token", data.searchData.token);
					}
				}
				if (data.finished) {
					let tempList = window.lastSearchData.list;
					window.lastSearchData = data;
					window.lastSearchData.list = tempList;
				}
				if (attribute.instant) {
					processResult(data);
					toggleResults(true);
					toggleLoadingModal(false);
				}

				if (data.directory == "GOOGLE") {
					console.log('GOOGLE', data)
					if (attribute.summary == true) {
						let result = data.result.response.result;
						getWebsiteAsHTML(result ? result.website : null).then(html => {
							if (element.pdfExport && searchData) {
								if (element.pdfExport.getAttribute("recheckid") == searchData.ubrecheckid) {

									//Parse Emails
									if (element.foundEmailsDiv) {
										let mails = parseEmailsFromHTML(html);
										if (mails) mails.forEach(mail => { addMailToList(mail, `Webseite: ${result.website}`) })
									}

									//Parse owner lines
									if (element.foundOwnersDiv) {
										let span = element.foundOwnersDiv.querySelector('span#foundOwners');
										if (span) {
											let imprintUrl = findImprintLinkFromHTML(html, result.website);
											if (imprintUrl) {
												getWebsiteAsHTML(imprintUrl).then((imprintHTML) => {
													let owners = parseOwnersFromHTML(imprintHTML)
													if (owners.length) {
														element.foundOwnersDiv.style.display = "flex";
														owners.forEach(line => {
															if (!span.innerHTML.toLowerCase().includes(line.toLowerCase())) span.insertAdjacentHTML('beforeend', `<span>[...] <i>"${line}"</i> [...]</span>`)
														})
													}
													if (element.foundEmailsDiv) {
														let mails = parseEmailsFromHTML(imprintHTML);
														if (mails) mails.forEach(mail => { addMailToList(mail, `Impressum: ${result.website}`) })
													}
												})
											}
										}
									}

								}
							}
						}).catch((err) => { console.log("Website Fetch Error:", err) })
					}
				}
			}
		}
	}

	if (searchData) {
		if (searchData.hasOwnProperty("ubrechecktoken")) { checkdata.token = searchData.ubrechecktoken; }
		if (searchData.hasOwnProperty("ubrecheckid")) { checkdata.id = searchData.ubrecheckid; }
		if (searchData.hasOwnProperty("ubcountry")) { checkdata.country = searchData.ubcountry; }
		if (searchData.hasOwnProperty("ubzip")) { checkdata.zip = searchData.ubzip; }
		if (searchData.hasOwnProperty("ubcity")) { checkdata.city = searchData.ubcity; }
		if (searchData.hasOwnProperty("ubname")) { checkdata.name = searchData.ubname; }
		if (searchData.hasOwnProperty("ubstreet")) { checkdata.street = searchData.ubstreet; }
	}

	if ((typeof attribute.countries != 'undefined') && attribute.countries.includes(checkdata.country)) {
		uberall.fullCheck(checkdata)
			.then(async (data) => {
				if (data.errorCode) {
					let secondCheck = checkdata;
					if (secondCheck.zip.length == 4) secondCheck.country = ((secondCheck.country == "AT") ? "CH" : "AT");
					data = await uberall.fullCheck(secondCheck)
				}
				if (data.errorCode || data.status == "INVALID_PARAMETER") {
					toggleErrorModal(statusCheckMessages["normalization.error"] ?? data.message, true);
					toggleButton(true);
				}
				else if (data.status == "SERVER_ERROR") {
					toggleErrorModal(data.message, true);
					toggleButton(true);
				}
				else {
					if (!data.hasOwnProperty("searchData")) data.searchData = checkdata;
					processResults(data);
				}
			})
			.catch((err) => { console.log(err); toggleErrorModal(err, true); toggleButton(true); })
	}
	else {
		toggleErrorModal("Dieses Land wird nicht unterstützt!", true); toggleButton(true);
	}
}

function addMailToList(mailaddress, source = undefined) {
	if (element.foundEmailsDiv && (typeof mailaddress === 'string') && !/wix|wordpress/gi.test(mailaddress) && /\.[a-z]{2,8}/gi.test(mailaddress)) {
		mailaddress = mailaddress.toLowerCase();
		if (mailaddress.includes('@') && !element.foundEmailsDiv.textContent.toLowerCase().includes(mailaddress)) {
			//foundEmails.push(mailaddress);
			let span = element.foundEmailsDiv.querySelector('#foundEmails');
			if (span) {
				element.foundEmailsDiv.style.display = "flex";

				let mailEl = document.createElement('span');
				mailEl.textContent = mailaddress;
				checkMail(mailaddress).then((result) => {
					if (result) {
						//if (/aol\.|gmx\.|t-online|yahoo/gi.test(mailaddress) || result.catch_all) result.status = "unknown";
						if (result.status == "valid" || result.catch_all) {
							mailEl.style.color = "#63A663";
							mailEl.innerHTML = `<b>${mailaddress}</b>`
						}
						else if (result.status == "invalid") {
							mailEl.style.color = "#e8636355";
							mailEl.innerHTML = `<strike>${mailaddress}</strike>`
						}
						if (result.status == "unknown") {
							mailEl.style.color = "#F28025";
						}

						let tooltip = `${(result.status ?? '').toUpperCase()} (${source ? source : ""})\n`;
						for (const key in result) {
							if (tooltip.length) tooltip += "\n"
							tooltip += `[${key.toUpperCase()}:] ${result[key]}`
						}
						mailEl.title = tooltip;
					}
				});
				span.appendChild(mailEl)
			}
		}
	}
}

function addWebsiteToList(website, source = undefined) {
	if (element.foundWebsitesDiv && (typeof website === 'string')) {
		website = website.toLowerCase();
		if (website.includes('.') && !element.foundWebsitesDiv.textContent.toLowerCase().includes(website)) {
			let span = element.foundWebsitesDiv.querySelector('#foundWebsites');
			if (span) {
				element.foundWebsitesDiv.style.display = "flex";
				let webEl = document.createElement('span');
				webEl.textContent = website;
				let tooltip = `${source ? source : ""}`;
				webEl.title = tooltip;
				span.appendChild(webEl)
			}
		}
	}
}

function addPhoneToList(phone, source = undefined) {
	if (element.foundPhonesDiv && (typeof phone === 'string')) {
		phone = phone.toLowerCase();
		if (!element.foundPhonesDiv.textContent.toLowerCase().includes(phone)) {
			let span = element.foundPhonesDiv.querySelector('#foundPhones');
			if (span) {
				element.foundPhonesDiv.style.display = "flex";
				let phoneEl = document.createElement('span');
				phoneEl.textContent = phone;
				let tooltip = `${source ? source : ""}`;
				phoneEl.title = tooltip;
				span.appendChild(phoneEl)
			}
		}
	}
}

function addNameToList(name, source = undefined) {
	if (element.foundNamesDiv && (typeof name === 'string')) {
		name = name.toLowerCase();
		if (!element.foundNamesDiv.textContent.toLowerCase().includes(name)) {
			let span = element.foundNamesDiv.querySelector('#foundNames');
			if (span) {
				element.foundNamesDiv.style.display = "flex";
				let nameEl = document.createElement('span');
				nameEl.textContent = name;
				let tooltip = `${source ? source : ""}`;
				nameEl.title = tooltip;
				span.appendChild(nameEl)
			}
		}
	}
}

function addAddressToList(address, source = undefined) {
	if (element.foundAddressDiv && (typeof address === 'string')) {
		address = address.toLowerCase();
		if (!element.foundAddressDiv.textContent.toLowerCase().includes(address)) {
			let span = element.foundAddressDiv.querySelector('#foundAddress');
			if (span) {
				element.foundAddressDiv.style.display = "flex";
				let addressEl = document.createElement('span');
				addressEl.textContent = address;
				let tooltip = `${source ? source : ""}`;
				addressEl.title = tooltip;
				span.appendChild(addressEl)
			}
		}
	}
}

async function checkMail(mail) {
	let spl = mail.split('@')
	return await new Promise((resolve, reject) => {
		//return resolve(null); //remove this line when a new free email validator api is found
		let fetchlink = `https://api.experte.com/tools/email-finder?name=${spl[0]}&domain=${spl[1]}`;
		if (attribute && attribute.verifyemailpro) fetchlink = `https://api.verifyemailpro.com/check?email=${mail}`;
		fetch(fetchlink)
			.catch(err => { })
			.then((response) => response.json())
			.catch(err => { })
			.then((res) => resolve(Array.isArray(res) ? res[0] : res))
			.catch(err => { })
	});
}

function clearSummary() {
	/* //OLD WAY
	['Emails', 'Websites', 'Names', 'Phones', 'Address', "Owners"].forEach((q) => {
		let divName = `found${q}Div`;
		if (element[divName]) {
			element[divName].style.display = "none";
			let span = element[divName].querySelector(`#found${q}`);
			if (span) { span.innerHTML = ""; }

		}
	}) */
	if (element.summary) {
		let sumBox = element.summary.querySelectorAll('div[id^=found][id$=Div]');
		sumBox.forEach(box => {
			//box.innerHTML='';
			box.style.display = 'none';
			let span = box.querySelector(`[id^="found"`);
			if (span) { span.innerHTML = ""; }
		})
	}
}

function processResult(data) {
	if (!data) return;

	let currentSearch = {
		recheckid: (data.id || ((data.searchData ?? {}).id)),
		token: (data.token || ((data.searchData ?? {}).token)),
	}
	let lastSearch = {
		recheckid: currentSearch.recheckid,
		token: currentSearch.token,
	}
	if (element.pdfExport) {
		lastSearch = {
			recheckid: element.pdfExport.getAttribute('recheckid'),
			token: element.pdfExport.getAttribute('token'),
		}
	}
	if ((lastSearch.recheckid != currentSearch.recheckid) || (lastSearch.token != currentSearch.token)) return;

	if (data.dirDone == 1) {
		toggleForm(false).then(() => toggleButton(true))
	}

	if (data.finished) console.log('data finished', data)

	let IMG = {
		PRESENT: "https://static-prod.uberall.com/assets/statusCheck/present.svg",
		MISSING: "https://static-prod.uberall.com/assets/statusCheck/missing.svg",
		NOT_APPLICABLE: "https://static-prod.uberall.com/assets/statusCheck/not_available.svg",
	};

	if (typeof availabilityIcons !== 'undefined') {
		for (const key in IMG) {
			if (!availabilityIcons.hasOwnProperty(key)) { availabilityIcons[key] = IMG[key] }
			if (!IMG.hasOwnProperty(key)) { IMG[key] = availabilityIcons[key] }
		}
	}

	//* CHART VALUES
	actualizeChart(data.missing, data.incorrect, data.correct, data.dirTotal - data.dirDone)

	//* TOTAL PORTALS TEXT (Searched in XX directories)
	let totalPortals = document.querySelector('#totalPortals');
	if (totalPortals) totalPortals.innerHTML = data.missing + data.incorrect + data.correct //+(data.dirTotal - data.dirDone)

	//* SUMMARY LIST
	if (attribute.summary == true) {
		let variations = data.variations ?? {};
		for (const key in variations) {
			if (!key.includes('mail')) {
				let keyUC = key.substring(0, 1).toUpperCase() + key.substring(1) + (!key.endsWith('s') ? 's' : '');
				if (keyUC.includes('treetAndNo')) keyUC = "Address";
				let foundDiv = `found${keyUC}Div`;
				if (element.hasOwnProperty(foundDiv)) {
					if (element[foundDiv]/* && variations[key].length*/) {
						let span = element[foundDiv].querySelector(`#found${keyUC}`)
						if (span) {
							span.innerHTML = ''
							for (const val in variations[key]) {
								let list = variations[key][val];
								if (uberall) {
									for (let i = 0; i < list.length; ++i) {
										if (uberall.directoryType.hasOwnProperty(list[i])) list[i] = uberall.directoryType[list[i]].name;
									}
								}
								span.insertAdjacentHTML('beforeend', `<span title="${list.join(', ')}">${keyUC == "Websites" ? `<a target="_blank" href="https://${val}" style="text-decoration:none;color:inherit;">${val}</a>` : val}</span>`);
								element[foundDiv].style.display = "flex"
							}
						}
					}
				}
			}
			else {
				for (const email in variations[key]) addMailToList(email, variations[key][email].source)
			}
		}
	}

	//* PREPARE LIST IF STILL NOT PREPARED
	if (element.resultsList.innerHTML.length < 5) {
		for (const dir of data.portalsByStatus.loading) {
			let resultDiv = document.createElement('div');
			resultDiv.id = dir;
			resultDiv.classList.add('ubxresult');
			resultDiv.innerHTML = `<div class="portaldiv"><a id="listingurl" target="_blank"><img draggable="false" src="${uberall.directoryType[dir].logo}" id="portal_img"> </a> <span id="portal_name">${uberall.directoryType[dir].name}</span> </div> <div class="infos"><img class="loadingImg" draggable="false" src="https://static.wixstatic.com/media/52c20f_7db6ddafa3d744f187d0550222f6989e~mv2.gif" style=" max-height: 100%;align-self: left;"></div> <div class="svgdiv"> </div> <div class="svgdiv"></div>`
			element.resultsList.appendChild(resultDiv)
		}
	}

	//* START
	let entry = data.result;
	if (!entry) return console.log('!entry', entry);
	let result = entry.response.result;
	if (!result) return console.log('!result', data);
	let dir = result.directoryType;

	let row = element.resultsList.querySelector(`#${dir}.ubxresult`)
	if (!row) return;

	row.innerHTML = `<div class="portaldiv"> <a id="listingurl" target="_blank"><img draggable="false" src="${uberall.directoryType[dir].logo}" id="portal_img"> </a> <span id="portal_name">${uberall.directoryType[dir].name}</span> </div> <div class="infos"> <span id="name">-</span> <div id="details"> <span id="street">-, -</span> <span id="number">-</span> <a id="website" target="_blank">-/</a> </div> </div> <div class="svgdiv"><div id=timesInfo></div><svg id="times" viewbox="0 0 800 400"> <path d="M48.1,35.3h3.2c0.9,0,1.6,0.7,1.6,1.6c0,0,0,0,0,0v14c0,0.4-0.2,0.8-0.4,1.2l-9,9c-0.6,0.6-1.6,0.6-2.2,0 l-2.2-2.2c-0.6-0.6-0.6-1.6,0-2.2l7.5-7.6V37c-0.1-0.8,0.5-1.6,1.4-1.7C48,35.3,48,35.3,48.1,35.3z" /> <path d="m256 8c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm92.49 313-20 25a16 16 0 0 1 -22.49 2.5l-67-49.72a40 40 0 0 1 -15-31.23v-155.55a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v144l58 42.5a16 16 0 0 1 2.49 22.5z" /> </svg> </div> <div class="svgdiv"><svg id="photos" viewbox="0 0 700 400"> <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z" /> </svg></div>`
	const elmnt = {
		portal_img: row.querySelector('#portal_img'),
		portal_name: row.querySelector('#portal_name'),
		listingurl: row.querySelector('#listingurl'),
		name: row.querySelector('#name'),
		number: row.querySelector('#number'),
		street: row.querySelector('#street'),
		website: row.querySelector('#website'),
		times: row.querySelector('#times'),
		photos: row.querySelector('#photos'),
		details: row.querySelector('#details'),
		timesInfo: row.querySelector('#timesInfo'),
		infos: row.querySelector('.infos'),
	}
	if (elmnt.portal_name) elmnt.portal_name.textContent = uberall.directoryType[dir].name;

	let isManaged = false;
	if (entry.status == "SUCCESS") {
		if (entry.response.alreadyManaged || (entry.response.managedLocation ? true : false)) entry.response.alreadyManaged = true;
		if (((typeof entry.response.result.attribution != 'undefined') && (entry.response.result.attribution != null) && (/movido|aadvanto|spectario/gi.test(entry.response.result.attribution.name)))
			/*|| (dt.response.result.claimStatus == "CLAIMED_BY_US")*/) {
			if (typeof searchData != 'undefined') {
				let minifiedName1 = entry.response.result.name.replace(/[^a-z0-9]/gi, ""),
					minifiedName2 = searchData.name.replace(/[^a-z0-9]/gi, "");
				if ((minifiedName1.includes(minifiedName2) || minifiedName2.includes(minifiedName1)) && (entry.response.result.zip == searchData.zip)) {
					entry.response.alreadyManaged = true;
				}
			}
		}
		if (entry.response.result.attribution) attributionName = entry.response.result.attribution.name;
	}
	if (!isManaged) { isManaged = entry.response.alreadyManaged; }
	if (isManaged) {
		if (elmnt.infos) {
			let isOptimizedText = ''//`${(attributionName) ? attributionName + ':<br>' : ''}${statusCheckMessages["top.box.already.managed"]}`;
			elmnt.infos.innerHTML = isOptimizedText;
			elmnt.infos.classList.add("managed")
			row.classList.add("managed")
			row.querySelectorAll('.svgdiv').forEach((elm) => { elm.remove(); });
			let img = row.querySelector('#portal_img')
			if (img) img.src = "https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg";

			document.querySelectorAll('.ubxresult').forEach((row) => {
				let infos = row.querySelector('.infos');
				let img = row.querySelector('#portal_img')
				if (img) img.src = "https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg";
				infos.innerHTML = isOptimizedText;
				infos.classList.add("managed")
				row.classList.add("managed")
				row.querySelectorAll('.svgdiv').forEach((elm) => { elm.remove(); });
				/*stat.correct = 100;
				stat.incorrect = 0;
				stat.missing = 0;*/
			})
		}
	}
	else {
		if (elmnt.portal_img) elmnt.portal_img.src = entry.html.logo;
		if (elmnt.times) {
			if (/svg/i.test(elmnt.times.tagName)) {
				elmnt.times.classList.add(CLASSNAME[result.openingHoursStatus] ?? '');
			}
			else elmnt.times.src = IMG[result.openingHoursStatus]

			//Adding opening Hours to mouseover
			if ((result.openingHoursStatus == "PRESENT") && (result.openingHours && result.openingHours.length > 0)) {
				elmnt.times.addEventListener('mouseenter', function (event) {
					elmnt.timesInfo.style.display = "flex";
					elmnt.timesInfo.style.visibility = "visible";
				})
				elmnt.times.addEventListener('mouseleave', function (event) {
					fadeOut(elmnt.timesInfo);
				})
				let daysofweek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
				let timesInfo = elmnt.timesInfo;
				for (let i = 0; i < 7; i++) {
					let filtered = result.openingHours.filter((a) => (a.dayOfWeek == (i + 1)) && !a.hasOwnProperty("closed"));
					let time = `<b>${daysofweek[i]}:</b> Geschlossen`;
					let classnm = CLASSNAME.MISSING;
					if (filtered.length > 0) {
						classnm = CLASSNAME.PRESENT;
						time = `<b>${daysofweek[i]}:</b> ${filtered[0].from1} - ${filtered[0].to1}`;
						if (filtered[0].hasOwnProperty("from2") && filtered[0].hasOwnProperty("to2")) {
							time += ` | ${filtered[0].from2} - ${filtered[0].to2}`
						}
					}
					let timeLine = `<div id="timeLine">
					<svg class="${classnm}" style=width:20px;height:20px; viewBox="0 0 490 490"><path d="M245 0C109.5 0 0 109.5 0 245s109.5 245 245 245 245-109.5 245-245S380.5 0 245 0zm0 449.3c-112.6 0-204.3-91.7-204.3-204.3S132.4 40.7 245 40.7 449.3 132.4 449.3 245 357.6 449.3 245 449.3z"/><path d="M290.9 224.1h-25v-95.9c0-11.5-9.4-20.9-20.9-20.9s-20.9 9.4-20.9 20.9V245c0 11.5 9.4 20.9 20.9 20.9h45.9c11.5 0 20.9-9.4 20.9-20.9s-9.5-20.9-20.9-20.9z"/></svg>
					<span>${time}</span>
				</div>`;
					timesInfo.innerHTML += timeLine;
				}
			}
		}
		if (elmnt.photos) {
			if (/svg/i.test(elmnt.photos.tagName)) {
				elmnt.photos.classList.add(CLASSNAME[result.photosStatus] ?? '');
			}
			else elmnt.photos.src = IMG[result.photosStatus]
		}
		if (result.name) {
			if (elmnt.listingurl && (result.listingUrl != null)) elmnt.listingurl.href = result.listingUrl
			if (elmnt.name) elmnt.name.innerHTML = `<span class="${result.nameStatus == "MISMATCH" ? CLASSNAME.MISMATCH : ''}">${result.name}</span>`;
			//if (elmnt.street) elmnt.street.innerHTML = /Ein(t)?rag/i.test(entry.html.address) ? `<span class="${CLASSNAME.MISMATCH}">keine Adresse</span>` : entry.html.address;
			if (elmnt.street) {
				let addressLine;
				switch (result.streetAndNoStatus) {
					case "MISSING":
						addressLine = `<span class="${CLASSNAME.MISSING}">${result.streetAndNo ? result.streetAndNo : statusCheckMessages["address.fields.missing"]}</span>`;
						break;
					case "MISMATCH":
						addressLine = `<span class="${CLASSNAME.MISMATCH}">${result.streetAndNo}</span>`;
						break;
					case "MATCH":
					case "PRESENT":
						addressLine = result.streetAndNo;
						break;
					default:
						addressLine = "-";
				}

				if (result.city) {
					addressLine += ", ";
					switch (result.cityStatus) {
						case "MISSING":
							addressLine += `<span class="${CLASSNAME.MISSING}">${statusCheckMessages["city.error"]}</span>`;
							break;
						case "MISMATCH":
							addressLine += `<span class="${CLASSNAME.MISMATCH}">${result.city}</span>`;
							break;
						case "MATCH":
						case "PRESENT":
							addressLine += result.city;
							break;
					}
				}
				elmnt.street.innerHTML = addressLine;
			}

			if (elmnt.number) {
				let numberLine = "";
				switch (result.phoneStatus) {
					case "MISSING":
						numberLine = `<span class="${CLASSNAME.MISSING}">${statusCheckMessages["phone.missing"]}</span>`;
						break;
					case "MISMATCH":
						numberLine = `<span class="${CLASSNAME.MISMATCH}">${result.phone}</span>`;
						break;
					case "MATCH":
					case "PRESENT":
						numberLine = `<span class="${CLASSNAME.PRESENT}">${result.phone}</span>`;
						break;
					case "NOT_APPLICABLE":
						numberLine = `<span class="${CLASSNAME.NOT_APPLICABLE}">${statusCheckMessages["phone.not.applicable"]}</span>`;
						break;
				}
				elmnt.number.innerHTML = numberLine;
			}
			if (elmnt.website) {
				let websiteLine = "";
				switch (result.websiteStatus) {
					case "MISSING":
						websiteLine = `<span class="${CLASSNAME.MISSING}">${statusCheckMessages["website.missing"]}</span>`;
						break;
					case "MISMATCH":
						websiteLine = `<span class="${CLASSNAME.MISMATCH}">${result.website}</span>`;
						break;
					case "MATCH":
					case "PRESENT":
						websiteLine = `<span class="${CLASSNAME.PRESENT}">${result.website}</span>`;
						break;
					case "NOT_APPLICABLE":
						websiteLine = `<span class="${CLASSNAME.NOT_APPLICABLE}">${statusCheckMessages["website.not.applicable"]}</span>`;
						break;
				}
				elmnt.website.innerHTML = websiteLine;
			}
			if (result.website) elmnt.website.href = result.website;
		}
		else {
			if (result.syncStatus == "TECHNICAL_PROBLEMS") { row.classList.add("opacity-02") }
			if (elmnt.name) elmnt.name.innerHTML = `<span class="${CLASSNAME.MISSING}">${statusCheckMessages[(result.syncStatus == "TECHNICAL_PROBLEMS") ? "listing.technical.errors" : "listing.not.found"]}</span>`;
			if (elmnt.times) elmnt.times.style.display = "none"
			if (elmnt.photos) elmnt.photos.style.display = "none"
			if (elmnt.details) {
				if ((typeof DESCRIPTION_FOR_MISSING_PORTALS === 'boolean') && (DESCRIPTION_FOR_MISSING_PORTALS == true) && uberall.directoryType[dir].description) {
					elmnt.details.classList.add("description")
					elmnt.details.innerHTML = uberall.directoryType[dir].description;
				} else {
					elmnt.details.innerHTML = "";
					elmnt.details.remove();
				}
			}
			row.classList.add("noentry")
		}
	}

	arrangePageBreaks()
}

function processResults(data = window.lastSearchData.list) {
	if (isLoadingModalVisible()) {
		if (data) {
			if (data[0].status == "INVALID_PARAMETER") {
				throw new Error(data[0].message);
			}
			if (element.foundEmailsDiv) element.foundEmailsDiv.style.display = "none";
			/*if (element.foundOwnersDiv) {
				element.foundOwnersDiv.style.display = "none";
				let span = element.foundOwnersDiv.querySelector('span#foundOwners');
				if (span) {
					span.innerHTML = '';
				}
			}*/
			if (!data.lang) data.lang = "DE";
			toggleLoadingModal(false);
			toggleButton(true);
			if (!data.status) {
				let stat = {
					incorrect: 0,
					correct: 0,
					missing: 0,
					get total() { return this.incorrect + this.correct + this.missing; }
				};
				let isManaged = false;
				let attributionName = null;
				let found = {
					emails: [],
					websites: [],
					phones: [],
					names: [],
					address: []
				};
				let searchData = window.lastSearchData.searchData;

				let sampleRow = document.querySelector(".ubxresult");
				let rowHtml = /*sampleRow ? sampleRow.innerHTML :*/ '<div class="portaldiv"> <a id="listingurl" target="_blank"><img draggable="false" src="" id="portal_img"> </a> <span id="portal_name">-</span> </div> <div class="infos"> <span id="name">-</span> <div id="details"> <span id="street">-, -</span> <span id="number">-</span> <a id="website" target="_blank">-/</a> </div> </div> <div class="svgdiv"><div id=timesInfo></div><svg id="times" viewbox="0 0 800 400"> <path d="M48.1,35.3h3.2c0.9,0,1.6,0.7,1.6,1.6c0,0,0,0,0,0v14c0,0.4-0.2,0.8-0.4,1.2l-9,9c-0.6,0.6-1.6,0.6-2.2,0 l-2.2-2.2c-0.6-0.6-0.6-1.6,0-2.2l7.5-7.6V37c-0.1-0.8,0.5-1.6,1.4-1.7C48,35.3,48,35.3,48.1,35.3z" /> <path d="m256 8c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm92.49 313-20 25a16 16 0 0 1 -22.49 2.5l-67-49.72a40 40 0 0 1 -15-31.23v-155.55a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v144l58 42.5a16 16 0 0 1 2.49 22.5z" /> </svg> </div> <div class="svgdiv"><svg id="photos" viewbox="0 0 700 400"> <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z" /> </svg></div>';
				let nearme360 = {
					"dataFields": {
						"address": {
							"correct": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"missing": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"inaccurate": {
								"count": 0,
								"directoriesToDisplay": []
							}
						},
						"name": {
							"correct": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"missing": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"inaccurate": {
								"count": 0,
								"directoriesToDisplay": []
							}
						},
						"website": {
							"missing": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"present": {
								"count": 0,
								"directoriesToDisplay": []
							}
						},
						"phone": {
							"missing": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"present": {
								"count": 0,
								"directoriesToDisplay": []
							}
						},
						"openingHours": {
							"missing": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"present": {
								"count": 0,
								"directoriesToDisplay": []
							}
						},
						"photos": {
							"missing": {
								"count": 0,
								"directoriesToDisplay": []
							},
							"present": {
								"count": 0,
								"directoriesToDisplay": []
							}
						}
					},
					"listings": {
						"missing": {
							"count": 0,
							"percentageOfTotal": 0.0,
							"directoriesToDisplay": []
						},
						"inaccurate": {
							"count": 0,
							"percentageOfTotal": 0.0,
							"directoriesToDisplay": []
						},
						"correct": {
							"count": 0,
							"percentageOfTotal": 0.0,
							"directoriesToDisplay": []
						}
					}
				}//* NEARME360

				if (element.resultsList) element.resultsList.innerHTML = "";
				for (const dir in uberall.directoryType) {
					let filtered = data.filter((a) => { return ((typeof a.response.result) == 'undefined') ? false : a.response.result.directoryType === dir });
					let entry = Array.isArray(filtered) ? filtered[0] : filtered;
					if (entry && (entry.response.result.syncStatus != "TECHNICAL_PROBLEMS")) {
						let result = entry.response.result;
						let row = document.createElement('div')
						row.id = dir;
						row.classList.add('ubxresult');
						row.innerHTML = rowHtml;

						//* NEARME360 LIKE DATA:
						if (result.nameStatus != "MISSING") {
							for (let field in nearme360.dataFields) {
								let fieldName = (field == "address" ? "street" : field) + "Status";

								let statusLC = result[fieldName].toLowerCase();
								if (statusLC == "mismatch") statusLC = "inaccurate";
								else if (statusLC == "match") statusLC = "correct";

								if (nearme360.dataFields[field].hasOwnProperty(statusLC)) {
									nearme360.dataFields[field][statusLC].count++;
									nearme360.dataFields[field][statusLC].directoriesToDisplay.push(result.directoryType);
								}
							}
						}
						//*********************************************** */

						//? FOUNDEMAIL
						if (result.email) {
							let normalizedEmail = result.email.toLowerCase();
							if (normalizedEmail.includes('@') && !found.emails.includes(normalizedEmail)) {
								addMailToList(normalizedEmail, uberall.directoryType[dir].name);
								found.emails.push(normalizedEmail);
							}
						}

						if (result.website) {
							let normalizedWebsite = result.website.toLowerCase().replace(/http(s)?:\/\/|www\./gmi, '').replace(/\?.+|\/$/gmi, '')
							if (!found.websites.includes(normalizedWebsite)) {
								found.websites.push(normalizedWebsite);
							}
						}
						if (result.phone) {
							let normalizedPhone = result.phone.replace(/[^\d\+]/gi, '').replace(/(\+|00)4(1|3|9)/gi, '0')
							if (!found.phones.includes(normalizedPhone)) {
								found.phones.push(normalizedPhone)
							}
						}
						if (result.name) {
							let normalizedName = result.name;
							if (!found.names.includes(normalizedName)) {
								found.names.push(normalizedName)
							}
						}
						if (result.streetAndNo) {
							let normalizedstreetAndNo = result.streetAndNo.replace(/(?<=s|S)tr(\.)?(?=\s|$)/gi, 'traße').replace(/[^a-zA-Z0-9ßäüö\s\-]/gi, '')
							if (!found.address.includes(normalizedstreetAndNo)) {
								found.address.push(normalizedstreetAndNo)
							}
						}
						//**********************************************? */

						const elmnt = {
							portal_img: row.querySelector('#portal_img'),
							portal_name: row.querySelector('#portal_name'),
							listingurl: row.querySelector('#listingurl'),
							name: row.querySelector('#name'),
							number: row.querySelector('#number'),
							street: row.querySelector('#street'),
							website: row.querySelector('#website'),
							times: row.querySelector('#times'),
							photos: row.querySelector('#photos'),
							details: row.querySelector('#details'),
							timesInfo: row.querySelector('#timesInfo'),
							infos: row.querySelector('.infos'),
						}

						let IMG = {
							PRESENT: "https://static-prod.uberall.com/assets/statusCheck/present.svg",
							MISSING: "https://static-prod.uberall.com/assets/statusCheck/missing.svg",
							NOT_APPLICABLE: "https://static-prod.uberall.com/assets/statusCheck/not_available.svg",
						};

						if (typeof availabilityIcons !== 'undefined') {
							for (const key in IMG) {
								if (!availabilityIcons.hasOwnProperty(key)) { availabilityIcons[key] = IMG[key] }
								if (!IMG.hasOwnProperty(key)) { IMG[key] = availabilityIcons[key] }
							}
						}
						if (elmnt.portal_name) elmnt.portal_name.textContent = uberall.directoryType[dir].name
						if (entry.status == "SUCCESS") {
							if (entry.response.alreadyManaged || (entry.response.managedLocation ? true : false)) entry.response.alreadyManaged = true;
							if (((typeof entry.response.result.attribution != 'undefined') && (entry.response.result.attribution != null) && (/movido|aadvanto|spectario/gi.test(entry.response.result.attribution.name)))
								/*|| (dt.response.result.claimStatus == "CLAIMED_BY_US")*/) {
								if (typeof searchData != 'undefined') {
									let minifiedName1 = entry.response.result.name.replace(/[^a-z0-9]/gi, ""),
										minifiedName2 = searchData.name.replace(/[^a-z0-9]/gi, "");
									if ((minifiedName1.includes(minifiedName2) || minifiedName2.includes(minifiedName1)) && (entry.response.result.zip == searchData.zip)) {
										entry.response.alreadyManaged = true;
									}
								}
							}
							if (entry.response.result.attribution) attributionName = entry.response.result.attribution.name;
						}
						if (!isManaged) { isManaged = entry.response.alreadyManaged; }
						if (isManaged) {
							if (elmnt.infos) {
								let isOptimizedText = `${(attributionName) ? attributionName + ':<br>' : ''}${statusCheckMessages["top.box.already.managed"]}`;
								elmnt.infos.innerHTML = isOptimizedText;
								elmnt.infos.classList.add("managed")
								row.classList.add("managed")
								row.querySelectorAll('.svgdiv').forEach((elm) => { elm.remove(); });
								let img = row.querySelector('#portal_img')
								if (img) img.src = "https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg";

								document.querySelectorAll('.ubxresult').forEach((row) => {
									let infos = row.querySelector('.infos');
									let img = row.querySelector('#portal_img')
									if (img) img.src = "https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg";
									infos.innerHTML = isOptimizedText;
									infos.classList.add("managed")
									row.classList.add("managed")
									row.querySelectorAll('.svgdiv').forEach((elm) => { elm.remove(); });
									stat.correct = 100;
									stat.incorrect = 0;
									stat.missing = 0;
								})
							}
						}
						else {
							if (elmnt.portal_img) elmnt.portal_img.src = entry.html.logo;
							if (elmnt.times) {
								if (/svg/i.test(elmnt.times.tagName)) {
									elmnt.times.classList.add(CLASSNAME[result.openingHoursStatus] ?? '');
								}
								else elmnt.times.src = IMG[result.openingHoursStatus]

								//Adding opening Hours to mouseover
								if ((result.openingHoursStatus == "PRESENT") && (result.openingHours && result.openingHours.length > 0)) {
									elmnt.times.addEventListener('mouseenter', function (event) {
										elmnt.timesInfo.style.display = "flex";
										elmnt.timesInfo.style.visibility = "visible";
									})
									elmnt.times.addEventListener('mouseleave', function (event) {
										fadeOut(elmnt.timesInfo);
									})
									let daysofweek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
									let timesInfo = elmnt.timesInfo;
									for (let i = 0; i < 7; i++) {
										let filtered = result.openingHours.filter((a) => (a.dayOfWeek == (i + 1)) && !a.hasOwnProperty("closed"));
										let time = `<b>${daysofweek[i]}:</b> Geschlossen`;
										let classnm = CLASSNAME.MISSING;
										if (filtered.length > 0) {
											classnm = CLASSNAME.PRESENT;
											time = `<b>${daysofweek[i]}:</b> ${filtered[0].from1} - ${filtered[0].to1}`;
											if (filtered[0].hasOwnProperty("from2") && filtered[0].hasOwnProperty("to2")) {
												time += ` | ${filtered[0].from2} - ${filtered[0].to2}`
											}
										}
										let timeLine = `<div id="timeLine">
										<svg class="${classnm}" style=width:20px;height:20px; viewBox="0 0 490 490"><path d="M245 0C109.5 0 0 109.5 0 245s109.5 245 245 245 245-109.5 245-245S380.5 0 245 0zm0 449.3c-112.6 0-204.3-91.7-204.3-204.3S132.4 40.7 245 40.7 449.3 132.4 449.3 245 357.6 449.3 245 449.3z"/><path d="M290.9 224.1h-25v-95.9c0-11.5-9.4-20.9-20.9-20.9s-20.9 9.4-20.9 20.9V245c0 11.5 9.4 20.9 20.9 20.9h45.9c11.5 0 20.9-9.4 20.9-20.9s-9.5-20.9-20.9-20.9z"/></svg>
										<span>${time}</span>
									</div>`;
										timesInfo.innerHTML += timeLine;
									}
								}
							}
							if (elmnt.photos) {
								if (/svg/i.test(elmnt.photos.tagName)) {
									elmnt.photos.classList.add(CLASSNAME[result.photosStatus] ?? '');
								}
								else elmnt.photos.src = IMG[result.photosStatus]
							}
							if (result.name) {
								if (elmnt.listingurl && (result.listingUrl != null)) elmnt.listingurl.href = result.listingUrl
								if (elmnt.name) elmnt.name.innerHTML = `<span class="${result.nameStatus == "MISMATCH" ? CLASSNAME.MISMATCH : ''}">${result.name}</span>`;
								//if (elmnt.street) elmnt.street.innerHTML = /Ein(t)?rag/i.test(entry.html.address) ? `<span class="${CLASSNAME.MISMATCH}">keine Adresse</span>` : entry.html.address;
								if (elmnt.street) {
									let addressLine;
									switch (result.streetAndNoStatus) {
										case "MISSING":
											addressLine = `<span class="${CLASSNAME.MISSING}">${result.streetAndNo ? result.streetAndNo : statusCheckMessages["address.fields.missing"]}</span>`;
											break;
										case "MISMATCH":
											addressLine = `<span class="${CLASSNAME.MISMATCH}">${result.streetAndNo}</span>`;
											break;
										case "MATCH":
										case "PRESENT":
											addressLine = result.streetAndNo;
											break;
										default:
											addressLine = "-";
									}

									if (result.city) {
										addressLine += ", ";
										switch (result.cityStatus) {
											case "MISSING":
												addressLine += `<span class="${CLASSNAME.MISSING}">${statusCheckMessages["city.error"]}</span>`;
												break;
											case "MISMATCH":
												addressLine += `<span class="${CLASSNAME.MISMATCH}">${result.city}</span>`;
												break;
											case "MATCH":
											case "PRESENT":
												addressLine += result.city;
												break;
										}
									}
									elmnt.street.innerHTML = addressLine;
								}

								if (elmnt.number) {
									let numberLine = "";
									switch (result.phoneStatus) {
										case "MISSING":
											numberLine = `<span class="${CLASSNAME.MISSING}">${statusCheckMessages["phone.missing"]}</span>`;
											break;
										case "MISMATCH":
											numberLine = `<span class="${CLASSNAME.MISMATCH}">${result.phone}</span>`;
											break;
										case "MATCH":
										case "PRESENT":
											numberLine = `<span class="${CLASSNAME.PRESENT}">${result.phone}</span>`;
											break;
										case "NOT_APPLICABLE":
											numberLine = `<span class="${CLASSNAME.NOT_APPLICABLE}">${statusCheckMessages["phone.not.applicable"]}</span>`;
											break;
									}
									elmnt.number.innerHTML = numberLine;
								}
								if (elmnt.website) {
									let websiteLine = "";
									switch (result.websiteStatus) {
										case "MISSING":
											websiteLine = `<span class="${CLASSNAME.MISSING}">${statusCheckMessages["website.missing"]}</span>`;
											break;
										case "MISMATCH":
											websiteLine = `<span class="${CLASSNAME.MISMATCH}">${result.website}</span>`;
											break;
										case "MATCH":
										case "PRESENT":
											websiteLine = `<span class="${CLASSNAME.PRESENT}">${result.website}</span>`;
											break;
										case "NOT_APPLICABLE":
											websiteLine = `<span class="${CLASSNAME.NOT_APPLICABLE}">${statusCheckMessages["website.not.applicable"]}</span>`;
											break;
									}
									elmnt.website.innerHTML = websiteLine;
								}
								if (result.website) elmnt.website.href = result.website;

								if (result.nameStatus == "MATCH"
									&& result.streetAndNoStatus == "MATCH"
									&& ((result.cityStatus != "MISMATCH") && (result.cityStatus != "MISSING"))
									&& (result.openingHoursStatus != "MISSING")
									&& result.photosStatus != "MISSING"
									&& result.websiteStatus != "MISSING"
									&& result.phoneStatus != "MISSING") {
									stat.correct++;
									//* NEARME360 LIKE DATA:
									nearme360.listings.correct.directoriesToDisplay.push(result.directoryType);
									//*********************************************** */
								}
								else {
									stat.incorrect++;
									//* NEARME360 LIKE DATA:
									nearme360.listings.inaccurate.directoriesToDisplay.push(result.directoryType);
									//*********************************************** */
								}
							}
							else {
								//* NEARME360 LIKE DATA:
								nearme360.listings.missing.directoriesToDisplay.push(result.directoryType);
								//*********************************************** */
								stat.missing++;
								if (elmnt.name) elmnt.name.innerHTML = `<span class="${CLASSNAME.MISSING}">${statusCheckMessages["listing.not.found"]}</span>`;
								if (elmnt.times) elmnt.times.style.display = "none"
								if (elmnt.photos) elmnt.photos.style.display = "none"
								if (elmnt.details) {
									if ((typeof DESCRIPTION_FOR_MISSING_PORTALS === 'boolean') && (DESCRIPTION_FOR_MISSING_PORTALS == true) && uberall.directoryType[dir].description) {
										elmnt.details.classList.add("description")
										elmnt.details.innerHTML = uberall.directoryType[dir].description;
									} else {
										elmnt.details.innerHTML = "";
										elmnt.details.remove();
									}
								}
								row.classList.add("noentry")
							}
						}
						element.resultsList.append(row)
						let totalPortals = document.querySelector('#totalPortals');
						if (totalPortals) totalPortals.innerHTML = element.resultsList.childElementCount;

						//* NEARME360 LIKE DATA:
						for (let key in nearme360.dataFields) {
							nearme360.dataFields[key];
							if (nearme360.dataFields[key].hasOwnProperty("count")) {
								nearme360.dataFields[key].count = nearme360.dataFields[key].directoriesToDisplay.length;
							} else {
								for (let subkey in nearme360.dataFields[key]) {
									if (nearme360.dataFields[key][subkey].hasOwnProperty("count")) {
										nearme360.dataFields[key][subkey].count = nearme360.dataFields[key][subkey].directoriesToDisplay.length;
									}
								}
							}
						}
						for (let key in nearme360.listings) {
							if (nearme360.listings[key].hasOwnProperty("count")) {
								nearme360.listings[key].count = nearme360.listings[key].directoriesToDisplay.length;
								nearme360.listings[key].percentageOfTotal = ((stat[key == "inaccurate" ? "incorrect" : key] / stat.total) * 100);
							}
						}

						for (const field in nearme360.dataFields) {
							let divElement = document.querySelector(`#nearMe360${field}Div`)
							if (divElement) {
								let sel = nearme360.dataFields[field].hasOwnProperty("inaccurate") ? "inaccurate" : "missing";
								if (!nearme360.dataFields[field][sel].directoriesToDisplay.length) divElement.style.display = "none";
								else {
									let dirs = nearme360.dataFields[field][sel].directoriesToDisplay;
									let innerText = uberall.directoryType[dirs[0]].name;
									if (dirs.length > 1) {
										innerText += ((dirs.length > 2) ? ', ' : ' & ') + uberall.directoryType[dirs[1]].name;
										if (dirs.length > 2) innerText += ' & ' + uberall.directoryType[dirs[2]].name;
									}
									divElement.querySelector('#nearMe360Directories').innerHTML = innerText;
									divElement.removeAttribute("style");
								}

							}
						}
						//*********************************************** */

					}
				} //END OF LOOP

				if (attribute.summary == true) {
					for (const key in found) {
						if (!key.includes('mail')) {
							let keyUC = key.substring(0, 1).toUpperCase() + key.substring(1);
							let foundDiv = `found${keyUC}Div`;
							if (element.hasOwnProperty(foundDiv)) {
								if (element[foundDiv] && found[key].length) {
									let span = element[foundDiv].querySelector(`#found${keyUC}`)
									if (span) {
										found[key].forEach(val => span.insertAdjacentHTML('beforeend', keyUC == "Websites" ? `<span><a target="_blank" href="https://${val}" style="text-decoration:none;color:inherit;">${val}</a></span>` : `<span>${val}</span>`));
										element[foundDiv].style.display = "flex"
									}
								}
							}
						}
					}
				}

				toggleForm(false)
				toggleResults(true);
				actualizeChart(stat.missing, stat.incorrect, stat.correct); //actualizeChart HAS to be called AFTER "display:none" have been removed from ALL the parent nodes.


				//Page-Break:
				arrangePageBreaks();
			}
			else if (data.status == "INVALID_PARAMETER") {
				toggleErrorModal(data.message.includes("token") ? data.message : statusCheckMessages["normalization.error"], true);
				toggleForm(true)
				toggleResults(false);
			}
			else {
				toggleErrorModal("Fehler: " + (data.message ?? data.status), true);
				toggleForm(true)
				toggleResults(false);
			}
		}
		else {
			toggleErrorModal("No data", true);
			toggleForm(true)
			toggleResults(false);
		}
	}
}

function arrangePageBreaks() {
	document.querySelectorAll('.page-break').forEach((result) => { result.classList.remove('page-break') });
	let referenceResult = element.resultsList.querySelector('.ubxresult');
	if (referenceResult) {
		let resultHeight = referenceResult.offsetHeight;
		let pdfPageHeight = 1000;
		let remainingHeight = (pdfPageHeight - (element.queryInfo.offsetHeight + element.qualityText.offsetHeight + element.graphInfo.offsetHeight + element.summary.offsetHeight))
		let startFrom = parseInt(remainingHeight / resultHeight);
		let resultProPage = parseInt(pdfPageHeight / resultHeight);
		element.resultsList.querySelectorAll(`.ubxresult:nth-child(${resultProPage}n+${startFrom + 1})`).forEach((result) => {
			result.classList.add('page-break')
		});
	}
}

function removeParams() {
	let baseUrl = window.location.href.split('?')[0];
	window.history.replaceState({}, document.title, baseUrl);
}

function getParams() {
	const queryString = window.location.search;
	const params = {};
	if (queryString) {
		const queryParams = queryString.substring(1).split('&');

		queryParams.forEach(param => {
			let [key, value] = param.split('=');
			key = decodeURIComponent(key);
			value = decodeURIComponent(value);
			params[decodeURIComponent(key)] = (/^(true|false)$/i.test(value ?? '')) ? (value == "true") : decodeURIComponent(value);
		});
	}
	return params;
}

function setParams({ ubrecheckid = undefined, ubrechecktoken = undefined, ubname = undefined, ubstreet = undefined, ubzip = undefined, ubcountry = undefined, ubcity = undefined }) {
	// Get the current URL
	removeParams();
	let currentUrl = window.location.href;

	let p = {};

	if (ubrecheckid && ubrechecktoken) {
		p.ubrecheckid = ubrecheckid;
		p.ubrechecktoken = ubrechecktoken;
	}
	else if (ubname && ubstreet && ubzip && ubcountry) {
		p.autostart = true;
		p.ubcountry = ubcountry;
		p.ubname = ubname;
		p.ubstreet = ubstreet;
		p.ubzip = ubzip;
		p.ubcity = ubcity ?? '';
	}
	// Construct the query string from the new parameters
	const queryString = Object.keys(p)
		.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(p[key])}`)
		.join('&');

	// Check if the URL already has a query string
	if (currentUrl.includes('?')) {
		// If the URL already has a query string, append the new parameters
		currentUrl += `&${queryString}`;
	} else {
		// If the URL does not have a query string, add the new parameters with a leading "?"
		currentUrl += `?${queryString}`;
	}

	removeParams();
	// Update the URL
	window.history.replaceState({}, '', currentUrl);
}

function getElements(widget) {
	element = {
		widget: document.querySelector("div.ub_status_check_widget"),
		ubwrap: document.querySelector("#ubwrap"),
		header: widget.querySelector("#header"),
		headertext: widget.querySelector("#headertext"),
		queryInfo: widget.querySelector("#queryInfo"),
		bottominfo: widget.querySelector("#bottominfo"),
		button: widget.querySelector("button#ubsend"),
		form: widget.querySelector("#ubformfield"),
		ubname: widget.querySelector('input#ubname'),
		ubstreet: widget.querySelector('input#ubstreet'),
		ubzip: widget.querySelector('input#ubzip'),
		ubcountry: widget.querySelector('select#ubcountry'),
		allTexts: widget.querySelectorAll('p,h1,h2,h3,h4,h5,h6,span,input,select'),
		allLinks: widget.querySelectorAll('a'),
		ctabutton: document.querySelector('#ctabutton'),
		ctatext: widget.querySelector("#ctatext"),
		ctalink: widget.querySelector("a#ctalink"),
		graphInfo: widget.querySelector("#graphInfo"),
		graph: widget.querySelector("#ubgraph"),
		ubgridwrap: widget.querySelector('#ubgridwrap'),
		directoryGrid: widget.querySelector('#ubgrid'),
		ubtable: widget.querySelector('#ubtable'),
		topinfo: document.querySelector('#topinfo'),
		searchQuery: document.querySelector('#searchQuery'),
		queryLine: document.querySelector('#queryLine'),
		resultsList: document.querySelector('#resultsList'),
		result: document.querySelector('.ubxresult'),
		skipSvg: document.querySelector('#skipSvg'),
		predictionInput: document.querySelector('#prediction'),
		predictionList: document.querySelector('#predictionList'),
		copyLink: document.querySelector('#copyLink'),
		pdfExport: document.querySelector('#pdfExport'),
		qualityText: document.querySelector('#qualityText'),
		queryCaptionText: document.querySelector('#queryCaptionText'),
		resultsListText: document.querySelector('#resultsListText'),
		ubgridcaption: document.querySelector('#ubgridcaption'),
		foundEmailsDiv: document.querySelector('#foundEmailsDiv'),
		foundWebsitesDiv: document.querySelector('#foundWebsitesDiv'),
		foundNamesDiv: document.querySelector('#foundNamesDiv'),
		foundPhonesDiv: document.querySelector('#foundPhonesDiv'),
		foundAddressDiv: document.querySelector('#foundAddressDiv'),
		foundOwnersDiv: document.querySelector('#foundOwnersDiv'),
		loadingTips: document.querySelector('#loadingTips'),
		loadingImg: document.querySelector('.loading .modal img'),
		predictionform: document.querySelector('#predictionform'),
		summary: document.querySelector('#summary'),
		nearme360: document.querySelector('#ubnearme360'),

		emodal: document.querySelector('.emodal'),
		lmodal: document.querySelector('.modal'),
		tableheader: document.querySelector('.table-header'),
	};
	return element;
}

function toggleErrorModal(text = "Die eingegebene Adresse konnte leider nicht gefunden werden. Bitte überprüfen Sie Ihre Angaben.", stat = undefined) {
	let errorElement = document.querySelector('div.error');
	let paragraph = errorElement.querySelector('p')
	if (errorElement) {
		const computedStyle = window.getComputedStyle(errorElement);
		const displayValue = computedStyle.getPropertyValue('display');
		paragraph.innerHTML = text;
		if (stat == undefined) stat = (displayValue == "none") ? true : false;
		toggleFlatBack(stat)
		toggleButton(!stat);
		if (stat == true) errorElement.style.display = "flex";
		else errorElement.style.display = "none";
	}
}

function toggleFlatBack(stat = undefined) {
	let flat = document.querySelector('div.flatback');
	if (flat) {
		const computedStyle = window.getComputedStyle(flat);
		const displayValue = computedStyle.getPropertyValue('display');
		if (stat == undefined) {
			if (displayValue == "none") flat.style.display = "flex";
			else flat.style.display = "none";
		}
		else {
			if (stat == true) flat.style.display = "flex";
			else flat.style.display = "none";
		}
	}
}

var tipInterval;
function toggleLoadingModal(stat = undefined) {

	clearInterval(tipInterval);
	let loadingElement = document.querySelector('div.loading');
	if (loadingElement) {
		const computedStyle = window.getComputedStyle(loadingElement);
		const displayValue = computedStyle.getPropertyValue('display');
		if (stat == undefined) stat = (displayValue == "none") ? true : false;
		toggleFlatBack(stat)
		if (stat == true) loadingElement.style.display = "flex";
		else loadingElement.style.display = "none";

		//* LOADING TIPS:
		if (stat && element.loadingTips) {
			let rand = (max) => { return Math.floor(Math.random() * (max + 1)); }
			let textElement = element.loadingTips.querySelector('span') ?? element.loadingTips;
			textElement.visibility = "hidden";
			let randomColors = ['#668CEB', '#43ADD4', '#B479AB', '#E69597', '#436f81', '#815e4d', '#577736', '#9d7c9c', '#6d9999', '#7c6d99', '#6d997f', '#996d6d'] //add: gold, brown, füme/blue, olive green
			textElement.style.color = randomColors[rand(randomColors.length)] + 'ff';
			textElement.textContent = tipsToUse[rand(tipsToUse.length)];
			fadeIn(textElement, 30);
			if (tipsToUse.length > 1) {
				tipInterval = setInterval(() => {
					fadeOut(textElement, 30).then(() => {
						textElement.style.color = randomColors[rand(randomColors.length)] + 'cc'
						textElement.textContent = tipsToUse[rand(tipsToUse.length)];
						fadeIn(textElement, 30);
					});
				}, 5000)
			}
		}
	}
}

function isLoadingModalVisible() {
	let loadingElement = document.querySelector('div.loading');
	if (loadingElement) {
		const computedStyle = window.getComputedStyle(loadingElement);
		const displayValue = computedStyle.getPropertyValue('display');
		return (displayValue != "none");
	}
	return undefined;
}

function toggleResults(stat = undefined) {
	if (element.queryInfo && element.header && element.bottominfo) {
		const computedStyle = window.getComputedStyle(element.header);
		const displayValue = computedStyle.getPropertyValue('display');
		if (stat == undefined) { stat = (displayValue == "none") ? true : false; }
		if (!stat) {
			element.header.style.display = "flex";
			element.bottominfo.style.display = "none";
			element.queryInfo.style.display = "none";
			element.bottominfo.style.visibility = "hidden";
			element.ubgridwrap.style.display = "flex";
			if (element.topinfo) element.topinfo.style.removeProperty("display");
			actualizeDirectoryGrid(true);
		}
		else {
			element.header.style.display = "none";
			element.bottominfo.style.display = "flex";
			element.queryInfo.style.display = "flex";
			element.bottominfo.style.visibility = "visible";
			element.ubgridwrap.style.display = "none";
			if (element.topinfo && attribute.hasOwnProperty("showtopinfo") && (attribute.showtopinfo != true)) element.topinfo.style.display = "none";
			actualizeDirectoryGrid(false);
		}
	}
}

function clearResults() {
	if (element.resultsList) element.resultsList.innerHTML = "";
}

function actualizeDirectoryGrid(show = undefined, country = undefined, directories = attribute.directories) {
	if (element.ubgridwrap && element.directoryGrid) {
		element.directoryGrid.innerHTML = "";
		element.ubgridwrap.style.display = "none";
		if ((typeof show == "undefined") && element.bottominfo) {
			let style = getComputedStyle(element.bottominfo)
			show = (style.display == "none");
		}
		if (typeof directories === 'string') directories = directories.split(',');
		if (show && (!attribute.hasOwnProperty("showdirectorygrid") || attribute.showdirectorygrid != false)) {
			if (!country) { country = element.ubcountry ? element.ubcountry.value : 'DE'; }
			country = country.toLowerCase();
			if (!directories || !directories.length) directories = Object.keys(uberall.directoryType);
			for (const dir of directories) {
				element.ubgridwrap.style.display = "flex";
				if (uberall.directoryType[dir].countries.includes(country)) {
					let entry = document.createElement("div");
					entry.className = "gridEntry";
					entry.innerHTML = `<img draggable="false" class="gridEntryLogo" src="${uberall.directoryType[dir].logo}"><span class="gridEntryName">${uberall.directoryType[dir].name}</span>`
					element.directoryGrid.appendChild(entry)
				}
			}
		}
	}
}

function getWidgetAttributes(element) {
	attribute = {};
	for (const attr of element.attributes) {
		//if (/^data-/i.test(attr.name)) {
		let val = attr.value;
		if (val.length > 0) {
			if (/^(true|false)$/i.test(val)) val = (val == "true");
			attribute[attr.name.replace("data-", "")] = val;
		}
		//}
	}
	return attribute;
}

function toggleButton(enabled = undefined) {
	if (element.button) {
		if (element.button.getAttribute("disabled") || enabled) {
			element.button.innerHTML = `TESTEN`
			element.button.removeAttribute("disabled");
			element.ubcountry.removeAttribute("disabled");
			element.ubname.removeAttribute("disabled");
			element.ubstreet.removeAttribute("disabled");
			element.ubzip.removeAttribute("disabled");
			element.form.removeAttribute("disabled");
			element.predictionInput.removeAttribute("disabled");
		}
		else if (!element.button.getAttribute("disabled") || enabled === false) {
			const loadingGif = "https://static.wixstatic.com/media/52c20f_597105a39da247c49701e2cd585687d3~mv2.gif"
			element.button.innerHTML = `<img title="loading" draggable="false" src="${loadingGif}" height="40px" >`
			element.button.setAttribute("disabled", true)
			element.ubcountry.setAttribute("disabled", true)
			element.ubname.setAttribute("disabled", true)
			element.ubstreet.setAttribute("disabled", true)
			element.ubzip.setAttribute("disabled", true)
			element.form.setAttribute("disabled", true)
			element.predictionInput.setAttribute("disabled", true)
		}
	}
}

async function toggleForm(stat = undefined) {
	let formElement = document.querySelector('#ubformfield');
	let btnElement = document.querySelector('a.ubsc_change-search-data')
	if (formElement) {
		const computedStyle = window.getComputedStyle(formElement);
		const displayValue = computedStyle.getPropertyValue('display');
		if (stat == undefined) { stat = (displayValue == "none") ? true : false; }
		if (stat) {
			if (btnElement) btnElement.querySelector('span').textContent = "schließen";
			formElement.style.display = "flex";
			formElement.style.visibility = "visible";
		}
		else {
			if (btnElement) btnElement.querySelector('span').textContent = "STANDORT ÄNDERN"
			await fadeOut(formElement)
		}
	}
	return;
}

async function fadeOut(element, speed = 10, collapse = true) {
	return await new Promise((resolve, reject) => {
		if (element) {
			let op = speed;
			let int = setInterval(() => {
				op--;
				element.style.opacity = op / speed;
				if (op <= 0) {
					element.style.visibility = "hidden";
					if (collapse) element.style.display = "none";
					element.style.opacity = 1;
					clearInterval(int);
					resolve(true);
				}
			}, 20);
		} else {
			reject("Element not found");
		}
	});
}

async function fadeIn(element, speed = 10, collapse = true) {
	return await new Promise((resolve, reject) => {
		if (element) {
			let op = 0;
			element.style.visibility = "visible";
			if (collapse) element.style.removeProperty("display");
			element.style.opacity = 0;
			let int = setInterval(() => {
				op++;
				element.style.opacity = op / speed;
				if (op >= speed) {
					element.style.opacity = 1;
					clearInterval(int);
					resolve(true);
				}
			}, 20);
		} else {
			reject("Element not found");
		}
	});
}


function actualizeChart(missing = 1, incorrect = 1, correct = 1, loading = null) {
	let missingList = null, incorrectList = null, correctList = null, loadingList = null;

	if (Array.isArray(missing)) { missingList = missing; missing = missingList.length; }
	if (Array.isArray(incorrect)) { incorrectList = incorrect; incorrect = incorrectList.length; }
	if (Array.isArray(correct)) { correctList = correct; correct = correctList.length; }
	if (Array.isArray(loading)) { loadingList = loading; loading = loadingList.length; }

	if (typeof loading == 'number' && loading == 0) loading = null;
	if (element.graphInfo) {
		if (attribute.hasOwnProperty("showgraph") && attribute.showgraph != true) {
			element.graphInfo.style.display = "none";
		} else {
			element.graphInfo.style.display = "flex";
			let canvas = element.graph.querySelector("canvas");
			if (!canvas) return null;
			let ctx = canvas.getContext('2d');

			// Create the chart
			//if(typeof chart !== 'undefined') { chart.destroy(); }
			if (typeof chart === 'undefined' && typeof Chart !== 'undefined') {
				let chartInitData = {
					type: 'doughnut',
					data: {
						labels: [`0% Falsch`, `0% Fehlen`, `0% Korrekt`],
						datasets: [{
							label: '',
							data: [5, 5, 5],
							backgroundColor: ['rgb(251,176,54)', 'rgb(232,99,99)', 'rgb(99,166,99)'],
							borderColor: '#ffffff88' // 'rgba(0,0,0,0.3)',
						},]
					},
					plugins: [],
					options: {
						plugins: {
							legend: {
								position: 'left', //'top',
								labels: {
									usePointStyle: true,
									boxWidth: 30,
									padding: 10,
									font: {
										size: 14
									}
								}
							},
						},
						scales: {},
					}
				}
				if (loading) {
					chartInitData.data.labels.push([`100% Lädt...`]);
					chartInitData.data.datasets[0].data = [0, 0, 0, 0];
					chartInitData.data.datasets[0].backgroundColor.push('rgb(170, 174, 201)')
				}

				chart = new Chart(ctx, chartInitData);

				canvas.style.width = "300";
				canvas.style.height = "300";
			}

			let dirTotal = incorrect + missing + correct + (loading ?? 0);
			let perc = {
				correct: ((100 / dirTotal) * correct).toFixed(0),
				missing: ((100 / dirTotal) * missing).toFixed(0),
				incorrect: ((100 / dirTotal) * incorrect).toFixed(0),
				loading: ((100 / dirTotal) * loading ?? 0).toFixed(0)
			}

			let ch = {
				labels: [`${perc.incorrect}% Falsch`, `${perc.missing}% Fehlen`, `${perc.correct}% Korrekt`],
				datasets: [{
					label: '',
					data: [incorrect, missing, correct],
					backgroundColor: ['rgb(251,176,54)', 'rgb(232,99,99)', 'rgb(99,166,99)'],
					borderColor: '#ffffff88' // 'rgba(0,0,0,0.3)',
				}]
			}
			if (loading) {
				ch.labels.push([`${perc.loading}% Lädt...`]);
				ch.datasets[0].data = [incorrect, missing, correct, loading],
					ch.datasets[0].backgroundColor.push('rgb(170, 174, 201)')
			}
			if (typeof chart !== "undefined") {
				chart.data = ch;
				if (loading) chart.options.animation.duration = 0;
				chart.update();
			}
		}
	}
}

const humanityTips = [ //For intern use only, may be misunderstood by strangers & customers!
	"Keine Antwort, ist eine Antwort. Und zwar eine Starke.",
	"Es erfordert Anmut, in grausamen Situationen freundlich zu bleiben.",
	// "Ein Wort der Ermutigung kann ausreichen, um jemanden zu motivieren, eine schwierige Herausforderung fortzusetzen. - Roy T. Bennett",
	// "Sei clever!",
	// "Meistere die Kunst des Beobachtens!",
	"Das Leben besteht nicht darin, sich selbst zu finden. Es geht darum, sich selbst zu erschaffen.",
	"Deine unzufriedensten Kunden sind deine wertvollsten Quellen des Lernens. - Bill Gates",
	"Ein Ziel ohne Plan ist nur ein Wunsch. - Antoine de Saint-Exupery",
	"Der Unterschied zwischen einer erfolgreichen Person und anderen ist nicht ein Mangel an Stärke oder Wissen, sondern ein Mangel an Willen. - Vince Lombardi",
	"Schaffe einen Kunden, nicht nur einen Verkauf. - Katherine Barchetti",
	"Erfolg ist, von Misserfolg zu Misserfolg zu gehen, ohne die Begeisterung zu verlieren. - Winston Churchill",
	"Starke Köpfe sprechen über Ideen. Schwache Köpfe sprechen über Menschen.",
	"Man kann einfach die Person nicht schlagen, die niemals aufgibt. - Babe Ruth",
	"Je schwieriger der Konflikt, desto ruhmreicher der Triumph. - Thomas Paine",
	"Erwarte das Beste. Bereite dich auf das Schlimmste vor. Nutze, was kommt.",
	"Alle Fortschritte finden außerhalb der Komfortzone statt. - Michael John Bobak",
	"Der einzige Weg, großartige Arbeit zu leisten, ist, das zu lieben, was man tut.",
	"Egal, was du tust, ob gut oder schlecht, die Menschen werden immer etwas Negatives zu sagen haben.",
	"Hart arbeiten und klug arbeiten können manchmal zwei verschiedene Dinge sein. - Byron Dorgan",
	"Ständige Verbesserung ist besser als verzögerte Perfektion. - Mark Twain",
	"Alles ist schwer, bevor es einfach wird. - Goethe",
	"Manchmal ist keine Antwort die beste Antwort. Schweigen kann nie falsch zitiert werden.",
	"Es geht nicht um Ideen. Es geht darum, Ideen in die Tat umzusetzen. - Scott Belsky",
	"Harte Arbeit schlägt Talent, wenn Talent nicht hart arbeitet. - Tim Notke",
	"„Nein“ ist keine Ablehnung, sondern eine Umleitung.",
	"Großartige Verkäufer sind Beziehungsaufbauer, die Wert schaffen und ihren Kunden zum Erfolg verhelfen. - Jeffrey Gitomer",
	"Qualitätsleistung beginnt mit einer positiven Einstellung. - Jeffrey Gitomer",
	"Nicht vergessen! Du bist nur die Hauptfigur deines eigenes Lebens, und niemanden sonst.",
	"Ein Kunde wird schneller zu einem Freund als ein Freund zu einem Kunden.",
	"Erfolg ist die Summe kleiner Anstrengungen, die Tag für Tag wiederholt werden. - Robert Collier",
	"Wenn Sie sich nicht um Ihren Kunden kümmern, wird es Ihr Konkurrenz tun. - Bob Hooey",
	"Geschäftsmöglichkeiten sind wie Busse; es kommt immer eine weitere. - Richard Branson",
	"Starke Menschen ziehen andere nicht runter. Sie helfen ihnen auf. - Michael P. Watson",
	"Ohne Leidenschaft, hast du keine Energie. Ohne Energie, hast du garnichts. - Warren Buffet",
	"Man muss denken wie die wenigsten, doch reden wie die meisten. - Arthur Schopenhauer",
	"Konzentriere dich auf Fortschritt, nicht auf Perfektion.",
	"Du verlierst nie. Entweder du gewinnst oder du lernst. - Nelson Mandela",
	"Jeder Verkauf hat fünf Hindernisse: kein Bedarf, kein Geld, keine Eile, kein Wunsch, kein Vertrauen. - Zig Ziglar",
	"Für schwere Aufgaben wähle ich einen faulen Menschen aus, weil faule Menschen einen einfachen Weg finden, diese zu erledigen. - Bill Gates",
	"Denken ist die Zauberei des Geistes. - George Gordon Byron",
	"Versuche nicht, ein Mann des Erfolgs zu werden. Strebe lieber danach, ein Mensch von Wert zu sein. - Albert Einstein",
	"Von der Art des Denkens hängt alles ab. Vom Denken geht alles aus, wird alles gelenkt und geschaffen - Buddha",
	"Nichts tun ist sehr schwer… man weiß nie, wann man fertig ist. - Leslie Nielsen",
	"Es dauert weniger Zeit, eine Sache richtig zu machen, als zu erklären, warum man sie falsch gemacht hat. - Henry W. Longfellow",
	"Es ist besser, eine Person zu haben, die mit dir arbeitet, als drei Personen, die für dich arbeiten. - Dwight Eisenhower",
	"Der beste Weg, deinen Job zu schätzen, ist, dir vorzustellen, wie es wäre, keinen zu haben. - Oscar Wilde",
	"Ignoriere die Leute, die glauben, mehr über dich zu wissen als du selbst.",
	"Das einzige, das sich seinen Weg zum Erfolg gesessen hat, war ein Huhn. - Sarah Brown",
	"Du definierst dein eigenes Leben. Lass andere Menschen nicht dein Drehbuch schreiben. - Oprah Winfrey",
	"Du verpasst 100 Prozent der Chancen, die du nicht ergreifst. - Wayne Gretzky",
	"Die beste Vision ist Einsicht. - Malcolm Forbes",
	"Die Frage ist nicht, wer mich lassen wird; sondern wer mich aufhalten wird. - Ayn Rand",
	"Wenn harte Arbeit der Schlüssel zum Erfolg ist, würden die meisten Menschen lieber das Schloss knacken. - Claude McDonald",
	"Bevor du urteilst, verstehe. Bevor du verletzt, fühle. Bevor du sprichst, denke. - Lars Amend",
	"Delegiere deine Arbeit. Hör auf, Dollar-Zeit mit Cent-Jobs zu verbringen. - Mary Kay Ash",
	"Es gibt kein Geheimnis zum Erfolg. Hast du jemals einen erfolgreichen Menschen gekannt, der dir nicht darüber erzählt hat? - Kin Hubbard",
	"Arbeite hart, bis deine Neider fragen, ob du einstellst.",
	"Die Dinge mögen denjenigen zuteilwerden, die warten, aber nur die Dinge, die von denen übrig bleiben, die sich anstrengen.",
	"Was dir an Talent fehlt, kannst du durch Wunsch, Einsatz und ständiges Geben von 110 Prozent ausgleichen. - Don Zimmer",
	"Arbeite hart, als wärst du pleite, und behalte diese Leidenschaft bei. - Jay Rock",
	"Arbeite so hart, dass du dich nicht mehr vorstellen musst.",
	"Fürchte dich nicht davor, langsam voranzukommen. Fürchte dich davor, stehen zu bleiben. - Chinese Proverb",
	"Wenn du keine großartigen Dinge tun kannst, dann tue kleine Dinge auf eine großartige Weise. - Napoleon Hill",
	"Deine Überzeugungen machen dich nicht zu einem besseren Menschen. Dein Verhalten tut das. - Shukhraj Dhillon",
	"Ein guter Mensch zu sein, ist etwas, das du tust, nicht etwas, das du bist. - Luvvie Ajayi",
	"Es ist nicht so wichtig, was du verkaufst, sondern wie du es verkaufst! - Brian Halligan",
	"Online-Marketing zu ignorieren ist wie ein Geschäft zu eröffnen, ohne es jemandem mitzuteilen.",
	"Das beste Marketing fühlt sich nicht wie Marketing an. - Tom Fishburne",
	"Verkäufer müssen digitale Beziehungen und eine Reputation aufbauen, bevor sie einen Verkauf abschließen. - Chris Brogan",
	"Weniger ist mehr. Einfachheit zu bewahren erfordert Zeit und Mühe. - Jeff Bullas",
	"Statt zu unterbrechen, arbeite daran, anzuziehen. - Dharmesh Shah",
	"Ausführung und Misserfolg sind Teil des Prozesses. Das musst du akzeptieren. - Morgan Debaun",
	"Gespräche mit Kunden werden die Verkaufszahlen erhöhen, selbst wenn das Produkt oder die Dienstleistung nie erwähnt wird. - George Farris",
	"Kunden interessieren sich nicht für die Geburtsschmerzen; sie wollen das Baby sehen. - Tim Williams",
	"Manchmal ist die Realität zu komplex. Geschichten geben ihr Form. - Jean Luc Goddard",
	"Vermarkte wie im Jahr, in dem du dich befindest. - Gary Vaynerchuk",
	//"Wenn du es einem sechsjähiWer es einem Sechsjährigen nicht erklären kann, versteht es selbst nicht gut genug. - Albert Einstein",
]

const marketingTips = [
	"Verwenden Sie relevante Schlüsselwörter in Ihrem Inhalt, um Ihr Suchmaschinenranking zu verbessern.",
	"Hochwertiger, originaler Inhalt zieht mehr Besucher an und hilft beim SEO.",
	"Bauen Sie Backlinks von seriösen Seiten auf, um die Autorität und das Ranking Ihrer Seite zu verbessern.",
	"Stellen Sie sicher, dass Ihre Website mobilfreundlich ist, um ein breiteres Publikum zu erreichen.",
	"Schreiben Sie ansprechende Meta-Beschreibungen, um die Klickrate zu erhöhen.",
	"Verbessern Sie die Ladegeschwindigkeit Ihrer Website, um die Benutzererfahrung und das SEO zu verbessern.",
	"Verwenden Sie beschreibenden Alt-Text für Bilder, um das SEO und die Barrierefreiheit zu verbessern.",
	"Optimieren Sie Ihr Unternehmen für lokale Suchanfragen, indem Sie es bei Google My Business listen.",
	"Nutzen Sie soziale Medien, um Traffic auf Ihre Website zu lenken und das SEO zu verbessern.",
	"Eine benutzerfreundliche Website kann die Absprungrate verringern und das SEO verbessern.",
	"Verwenden Sie Tools wie Google Analytics, um die Leistung Ihrer Website zu verfolgen und datengestützte Entscheidungen zu treffen.",
	"Aktualisieren Sie regelmäßig Ihren Blog mit relevantem Inhalt, um Ihr Publikum zu beschäftigen.",
	"Verwenden Sie Tools wie den Google Keyword Planner, um die besten Schlüsselwörter für Ihren Inhalt zu finden.",
	"Tauschen Sie Links mit anderen relevanten Websites aus, um die Sichtbarkeit Ihrer Seite zu erhöhen.",
	"Halten Sie einen konsistenten Veröffentlichungsplan ein, um Ihr Publikum zu beschäftigen.",
	"Ermutigen Sie zufriedene Kunden, positive Bewertungen online zu hinterlassen.",
	"Optimieren Sie einzelne Seiten auf Ihrer Website für bestimmte Schlüsselwörter.",
	"Betreiben Sie Aktivitäten außerhalb Ihrer Website, wie soziale Medien und Gastbloggen, um das SEO zu verbessern.",
	"Bauen Sie eine E-Mail-Liste auf, um Ihr Publikum informiert und engagiert zu halten.",
	"Verwenden Sie Videoinhalte, um mehr Besucher anzuziehen und das SEO zu verbessern.",
	"Fügen Sie klare Handlungsaufforderungen in Ihren Inhalt ein, um das Benutzerverhalten zu lenken.",
	"Studieren Sie Ihre Wettbewerber, um Verbesserungspotenziale zu identifizieren.",
	"Stellen Sie sicher, dass Ihre Unternehmensinformationen in allen lokalen Einträgen konsistent sind.",
	"Verwenden Sie Schema-Markup, um Suchmaschinen zu helfen, Ihren Inhalt besser zu verstehen.",
	"Zielen Sie auf Long-Tail-Keywords, um spezifischere und motiviertere Besucher anzuziehen.",
	"Fördern Sie das Engagement der Nutzer durch Kommentare, Shares und Likes.",
	"Verwenden Sie Pay-per-Click-Werbung, um gezielten Traffic auf Ihre Website zu lenken.",
	"Längere Inhalte schneiden oft besser in den Suchergebnissen ab.",
	"Versuchen Sie, die Absprungrate zu verringern, indem Sie die Inhaltsrelevanz und Benutzererfahrung verbessern.",
	"Erstellen und reichen Sie eine Sitemap ein, um Suchmaschinen zu helfen, Ihre Seite zu indexieren.",
	"Verwenden Sie eine Robots.txt-Datei, um zu steuern, wie Suchmaschinen Ihre Seite durchsuchen.",
	"Sichern Sie Ihre Website mit HTTPS, um Vertrauen aufzubauen und das SEO zu verbessern.",
	"Konzentrieren Sie sich auf eine bestimmte Nische, um ein engagiertes Publikum anzuziehen.",
	"Arbeiten Sie mit Influencern zusammen, um ein breiteres Publikum zu erreichen.",
	"Ermutigen Sie Nutzer, Inhalte im Zusammenhang mit Ihrer Marke zu erstellen.",
	"Optimieren Sie für Suchmaschinenergebnisseiten-Funktionen wie Snippets und lokale Packs.",
	"Führen Sie regelmäßig SEO-Audits durch, um Probleme zu identifizieren und zu beheben.",
	"Bauen Sie eine starke Marke auf, um Anerkennung und Vertrauen zu erhöhen.",
	"Vermeiden Sie Keyword-Stuffing; konzentrieren Sie sich auf die natürliche Integration von Schlüsselwörtern.",
	"Verwenden Sie interne Links, um Benutzer zu leiten und die Navigation auf der Seite zu verbessern.",
	"Schreiben Sie einzigartige und beschreibende Title-Tags für jede Seite.",
	"Optimieren Sie Ihren Inhalt für Sprachsuchanfragen.",
	"Verstehen und bedienen Sie die Benutzerabsicht, um Relevanz und Engagement zu verbessern.",
	"Stellen Sie sicher, dass Ihre Website sich an verschiedene Bildschirmgrößen und Geräte anpasst.",
	"Verwenden Sie Anzeigenerweiterungen in PPC-Kampagnen, um mehr Informationen bereitzustellen.",
	"Aktualisieren Sie regelmäßig alte Inhalte, um sie relevant zu halten und das SEO zu verbessern.",
	"Erstellen Sie detaillierte Kundenpersonas, um Ihre Marketingbemühungen effektiver zu zielen.",
	"Veranstalten Sie Events oder Webinare, um mit Ihrem Publikum in Kontakt zu treten und Ihre Marke zu fördern.",
	"Planen und führen Sie saisonale Marketingkampagnen durch, um von Spitzenzeiten zu profitieren.",
	"Führen Sie A/B-Tests durch, um Ihre Marketingstrategien und die Website-Performance zu optimieren.",
	"Verifizieren Sie Ihr Google My Business-Profil: Dies erhöht die Glaubwürdigkeit und Sichtbarkeit Ihres Unternehmens.",
	"Aktuelle Öffnungszeiten angeben: Kunden wissen zu lassen, wann Sie geöffnet haben, ist entscheidend.",
	"Verwenden Sie konsistente NAP-Daten (Name, Adresse, Telefonnummer): Einheitlichkeit hilft bei der Verbesserung der Suchmaschinenplatzierung.",
	"Fügen Sie hochwertige Fotos hinzu: Visuelle Inhalte erhöhen die Attraktivität und das Engagement.",
	"Schreiben Sie eine prägnante Unternehmensbeschreibung: Eine klare Beschreibung hilft Kunden, Ihr Geschäft zu verstehen.",
	"Antworten Sie auf Kundenbewertungen: Dies zeigt, dass Sie sich um das Feedback Ihrer Kunden kümmern.",
	"Aktualisieren Sie regelmäßig Ihre Einträge: Halten Sie Ihre Informationen immer auf dem neuesten Stand.",
	"Erstellen Sie Angebote und Veranstaltungen: Dies zieht mehr Kunden an und erhöht die Sichtbarkeit.",
	"Verwenden Sie relevante Keywords: Dies verbessert die Auffindbarkeit in Suchmaschinen.",
	"Ermöglichen Sie Buchungen direkt über Ihr Profil: Dies erleichtert Kunden den Zugang zu Ihren Dienstleistungen.",
	"Überprüfen Sie regelmäßig Ihre Einträge auf Fehler: Korrekte Informationen sind entscheidend für die Kundenzufriedenheit.",
	"Nutzen Sie lokale Verzeichnisse: Dies erhöht Ihre Sichtbarkeit in der Region.",
	"Ermutigen Sie zufriedene Kunden, Bewertungen zu hinterlassen: Positive Bewertungen stärken Ihr Ansehen.",
	"Bieten Sie virtuelle Touren an: Dies gibt potenziellen Kunden einen besseren Einblick in Ihr Geschäft.",
	"Verknüpfen Sie Ihre Website mit Ihrem Profil: Dies erhöht den Traffic auf Ihrer Webseite.",
	"Nutzen Sie Social Media für lokale Werbung: Erhöht die Bekanntheit und Interaktion mit Ihrer Marke.",
	"Analysieren Sie Ihre Performance-Daten: Dies hilft Ihnen, Ihre Strategien zu optimieren.",
	"Erstellen Sie lokale Inhalte: Dies spricht die lokale Zielgruppe direkt an.",
	"Netzwerken Sie mit anderen lokalen Unternehmen: Kooperationen können beiden Parteien zugutekommen.",
	"Optimieren Sie Ihre mobile Website: Viele Nutzer suchen unterwegs nach lokalen Dienstleistungen.",
	"Verwenden Sie strukturierte Daten: Dies hilft Suchmaschinen, Ihre Informationen besser zu verstehen.",
	"Ermöglichen Sie Kunden, Fragen zu stellen: Dies verbessert die Interaktion und das Vertrauen.",
	"Bieten Sie Sonderangebote für lokale Kunden an: Dies kann die Kundenbindung stärken.",
	"Achten Sie auf Ihre Online-Reputation: Ein guter Ruf zieht mehr Kunden an.",
	"Nutzen Sie lokale Schlagworte in Ihren Beiträgen: Dies erhöht die lokale Auffindbarkeit.",
	"Veröffentlichen Sie regelmäßig Blog-Beiträge: Dies hält Ihr Profil aktiv und informativ.",
	"Erstellen Sie ein FAQ-Segment: Dies beantwortet häufige Fragen und spart Zeit.",
	"Verwenden Sie ansprechende Titel und Überschriften: Dies zieht mehr Aufmerksamkeit auf Ihre Einträge.",
	"Verknüpfen Sie Ihre Einträge mit Google Maps: Dies erleichtert Kunden die Wegbeschreibung.",
	"Erstellen Sie Video-Inhalte: Dies kann die Engagement-Raten erhöhen.",
	"Nutzen Sie Google Posts: Dies ermöglicht es Ihnen, aktuelle Informationen und Angebote zu teilen.",
	"Fügen Sie eine Telefonnummer für direkte Anrufe hinzu: Dies erleichtert die Kontaktaufnahme.",
	"Ermöglichen Sie Online-Bestellungen oder -Reservierungen: Dies erhöht den Komfort für Ihre Kunden.",
	"Halten Sie Ihre Unternehmensbeschreibung aktuell: Änderungen sollten sofort angepasst werden.",
	"Nutzen Sie lokale Veranstaltungen, um Ihre Marke zu bewerben: Dies steigert die lokale Bekanntheit.",
	"Bieten Sie Kundenservice über Ihr Profil an: Dies verbessert die Kundenzufriedenheit.",
	"Verwenden Sie ansprechende Call-to-Action-Buttons: Dies fördert die Interaktion.",
	"Überwachen Sie Ihre Konkurrenten: Dies hilft Ihnen, wettbewerbsfähig zu bleiben.",
	"Vermeiden Sie doppelte Einträge: Doppelte Informationen können Kunden verwirren.",
	"Nutzen Sie bezahlte Werbung für lokale Zielgruppen: Dies kann die Sichtbarkeit erheblich erhöhen.",
	"Erstellen Sie detaillierte Produkt- oder Dienstleistungsbeschreibungen: Dies hilft Kunden bei der Entscheidungsfindung.",
	"Ermutigen Sie Mundpropaganda: Zufriedene Kunden empfehlen Ihr Geschäft weiter.",
	"Bieten Sie einen Rabatt für Erstkunden an: Dies kann neue Kunden anziehen.",
	"Integrieren Sie lokale Nachrichten und Ereignisse in Ihre Inhalte: Dies zeigt Ihr Engagement für die Gemeinschaft.",
	"Nutzen Sie E-Mail-Marketing für lokale Kampagnen: Dies erreicht Ihre Zielgruppe direkt.",
	"Erstellen Sie ein Kundenbindungsprogramm: Dies fördert die langfristige Kundenbindung.",
	"Bieten Sie einen exzellenten Kundenservice: Zufriedene Kunden kommen eher zurück.",
	"Analysieren Sie das Verhalten Ihrer Kunden: Dies hilft Ihnen, Ihre Angebote besser anzupassen.",
	"Verwenden Sie Testimonials in Ihrem Profil: Positive Erfahrungsberichte erhöhen das Vertrauen.",
	"Fügen Sie Ihr Geschäft zu allen relevanten lokalen Verzeichnissen hinzu.",
	"Nutzen Sie gleiche Unternehmensinformationen auf allen Plattformen.",
	"Optimieren Sie Ihre Unternehmensbeschreibung für jedes Verzeichnis.",
	"Verwenden Sie branchenspezifische Verzeichnisse für mehr Sichtbarkeit.",
	"Fügen Sie einheitliche Geschäftszeiten auf allen Plattformen hinzu.",
	"Stellen Sie sicher, dass Ihre Telefonnummer klickbar ist.",
	"Erstellen Sie ein ansprechendes Logo für alle Verzeichnisse.",
	"Fügen Sie Links zu Ihren sozialen Medien in Verzeichnissen hinzu.",
	"Erhalten Sie Bewertungen auf allen relevanten Verzeichnissen.",
	"Nutzen Sie Verzeichnisse, die Video-Uploads ermöglichen.",
	"Veröffentlichen Sie regelmäßig Aktualisierungen auf Verzeichnisprofilen.",
	"Erhalten Sie Backlinks von lokalen Verzeichnissen zu Ihrer Website.",
	"Erstellen Sie ein ansprechendes Banner für Verzeichniseinträge.",
	"Nutzen Sie kostenpflichtige Funktionen in wichtigen Verzeichnissen.",
	"Stellen Sie sicher, dass Ihre Verzeichnisprofile mobilfreundlich sind.",
	"Ermöglichen Sie Kunden, Fotos auf Ihrem Verzeichnisprofil hinzuzufügen.",
	"Fügen Sie eine Karte mit Ihrem Standort in Verzeichnissen hinzu.",
	"Bieten Sie exklusive Verzeichnisangebote an.",
	"Optimieren Sie Ihre Verzeichniseinträge für Sprachsuchen.",
	"Verknüpfen Sie Ihre Verzeichniseinträge mit Ihrer E-Commerce-Seite.",
	"Nutzen Sie Verzeichnisse mit hoher Domain-Autorität.",
	"Verwenden Sie kurze, prägnante Beschreibungen in Verzeichnissen.",
	"Halten Sie Ihre Verzeichniseinträge spam-frei.",
	"Stellen Sie sicher, dass alle Links in Verzeichnissen funktionieren.",
	"Verwenden Sie lokalisierte Inhalte in Ihren Verzeichniseinträgen.",
	"Fügen Sie Ihre Dienstleistungen und Produkte in Verzeichnissen hinzu.",
	"Überwachen Sie Ihre Verzeichniseinträge regelmäßig auf Fehler.",
	"Nutzen Sie Verzeichnisse, die Bewertungen filtern können.",
	"Erstellen Sie Verzeichnisprofile für jede Ihrer Niederlassungen.",
	"Nutzen Sie QR-Codes in Verzeichniseinträgen für mobile Nutzer.",
	"Verknüpfen Sie Ihr Verzeichnisprofil mit Google Analytics.",
	"Stellen Sie sicher, dass Ihre Verzeichniseinträge SSL-verschlüsselt sind.",
	"Nutzen Sie Eintragsdienste für die Verzeichnisverwaltung.",
	"Fügen Sie CTA-Buttons in Ihren Verzeichniseinträgen hinzu.",
	"Erstellen Sie saisonale Verzeichniseinträge.",
	"Nutzen Sie Verzeichnisse, die Empfehlungsprogramme unterstützen.",
	"Nutzen Sie Verzeichnisse, die Integrationen mit CRM-Systemen anbieten.",
	"Erhalten Sie Erwähnungen in lokalen Online-Publikationen.",
	"Optimieren Sie Ihre Verzeichniseinträge für lokale Keywords.",
	"Erstellen Sie benutzerdefinierte Kurzlinks für Verzeichniseinträge.",
	"Verwenden Sie Geo-Tags in Ihren Verzeichniseinträgen.",
	"Erstellen Sie eine einheitliche Markenbotschaft in Verzeichnissen.",
	"Nutzen Sie Verzeichnisse, die Event-Promotionen ermöglichen.",
	"Ermöglichen Sie Kunden, Termine über Verzeichniseinträge zu buchen.",
	"Erhalten Sie Empfehlungen von lokalen Influencern in Verzeichnissen.",
	"Nutzen Sie Verzeichnisse, die Social Sharing ermöglichen.",
	"Veröffentlichen Sie Erfolgsgeschichten in Verzeichniseinträgen.",
	"Fügen Sie Ihre Geschäftsadresse in Ihre E-Mail-Signatur ein.",
	"Nutzen Sie Verzeichnisse mit Kundenanalyse-Tools.",
	"Automatisieren Sie die Aktualisierung von Unternehmensinformationen auf allen Plattformen.",
	"Nutzen Sie zentrale Dashboards für eine einfache Verwaltung aller Einträge.",
	"Verfolgen Sie Bewertungen und Feedback von Kunden in Echtzeit.",
	"Stellen Sie sicher, dass alle Einträge konsistente NAP-Daten haben.",
	"Erhalten Sie detaillierte Analysen über die Leistung Ihrer Einträge.",
	"Synchronisieren Sie Ihre Einträge automatisch mit neuen Informationen.",
	"Nutzen Sie die Möglichkeit, Angebote und Veranstaltungen zu posten.",
	"Verwalten Sie Ihre Einträge von einem einzigen Ort aus.",
	"Erhalten Sie Benachrichtigungen über Änderungen oder Fehler in Einträgen.",
	"Fügen Sie neue Standorte schnell und einfach hinzu.",
	"Verbessern Sie die SEO durch einheitliche und aktuelle Informationen.",
	"Verfolgen Sie die Online-Sichtbarkeit Ihrer Standorte.",
	"Nutzen Sie ein zentrales System für die Bearbeitung von Kundenbewertungen.",
	"Erhalten Sie Einblicke in das Kundenverhalten und Trends.",
	"Optimieren Sie Ihre Einträge für mobile Nutzer.",
	"Nutzen Sie die Integration mit sozialen Medien für eine breitere Reichweite.",
	"Ermöglichen Sie Kunden, direkt über Ihre Einträge zu buchen.",
	"Verwalten Sie alle Ihre Online-Einträge effizient und zeitsparend.",
	"Stellen Sie sicher, dass alle Einträge aktuelle Öffnungszeiten anzeigen.",
	"Nutzen Sie ein Tool, um Ihre Online-Reputation zu überwachen.",
	"Veröffentlichen Sie relevante Inhalte regelmäßig über ein zentrales System.",
	"Erhalten Sie umfassende Berichte zur Leistung Ihrer Online-Einträge.",
	"Nutzen Sie Standort-Tracking für eine bessere Marktanalyse.",
	"Erstellen Sie benutzerdefinierte Kampagnen für verschiedene Standorte.",
	"Ermöglichen Sie Kunden, Fragen direkt in Ihren Einträgen zu stellen.",
	"Verwenden Sie automatische Erinnerungen, um Einträge aktuell zu halten.",
	"Erhalten Sie Unterstützung bei der Fehlerbehebung in Einträgen.",
	"Nutzen Sie eine zentrale Plattform für die Verwaltung internationaler Standorte.",
	"Verfolgen Sie Wettbewerber und deren Online-Präsenz.",
	"Erhalten Sie Empfehlungen zur Optimierung Ihrer Einträge.",
	"Nutzen Sie die Synchronisation mit Branchenverzeichnissen.",
	"Veröffentlichen Sie automatisch Aktualisierungen und News.",
	"Ermöglichen Sie Kundenbewertungen auf verschiedenen Plattformen zu konsolidieren.",
	"Verfolgen Sie die Performance Ihrer Einträge im Zeitverlauf.",
	"Stellen Sie sicher, dass alle Einträge den SEO-Best Practices entsprechen.",
	"Nutzen Sie gezielte Werbung über Ihre Einträge.",
	"Verwalten Sie Ihre Marke einheitlich über alle Standorte hinweg.",
	"Erhalten Sie Einblicke in lokale Suchtrends und -muster.",
	"Nutzen Sie ein Tool, um Ihre Online-Präsenz zu maximieren.",
	"Verfolgen Sie die Kundenbindung über Ihre Einträge.",
	"Erstellen Sie einheitliche Markenbotschaften für alle Plattformen.",
	"Erhalten Sie Unterstützung bei der Verwaltung von Multi-Location-Geschäften.",
	"Ermöglichen Sie eine schnelle Aktualisierung von Sonderöffnungszeiten.",
	"Nutzen Sie die Möglichkeit, spezifische Keywords für jeden Eintrag zu optimieren.",
	"Veröffentlichen Sie Inhalte, die speziell auf lokale Zielgruppen zugeschnitten sind.",
	"Stellen Sie sicher, dass Ihre Einträge auf allen Geräten gut aussehen.",
	"Erhalten Sie Echtzeit-Updates über die Performance Ihrer Einträge.",
	"Nutzen Sie ein Tool, um die Sichtbarkeit Ihrer Marke zu verbessern."
];

let randomLoadingGifs = [
	"https://static.wixstatic.com/media/52c20f_ca1ccd73ff6b4c18bcfe67e7dfcd8bea~mv2.gif",
	"https://static.wixstatic.com/media/52c20f_24e1624f84364dfa9e9a51c913c6e6cf~mv2.gif",
	"https://static.wixstatic.com/media/52c20f_da8aebaec44e489f9fb667dd8487fa69~mv2.gif",
	"https://i2.wp.com/cdn.dribbble.com/users/1787505/screenshots/7300251/shot.gif",
	"https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif",
	"https://www.munciepower.com/images/elements/loaders/loader.gif",
	"https://miro.medium.com/v2/resize:fit:679/1*Gvgic29bgoiGVLmI6AVbUg.gif",
	"https://www.icegif.com/wp-content/uploads/2023/07/icegif-1265.gif",
	"https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif",
	"https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif",
	"https://i.pinimg.com/originals/3d/1b/73/3d1b739fb2546948f207d2be7ae1b105.gif",
	"https://vento.digital/file/icon/plakaliknotifloading.gif",
	"https://assets-v2.lottiefiles.com/a/ba184576-1161-11ee-9123-f7d14218e24f/1zrahlsiVe.gif",
	"https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif",
	"https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif",
]