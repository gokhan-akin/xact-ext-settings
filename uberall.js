var uberall={imgSrc:"https://static-prod.uberall.com/assets/directory_logo/png/",apiToUse:0,getApiKey:function(){const e=["dTVuUnlrTGpTMnREZnYwc3JsSWFuT3FENzNReFdadXJzWXBIaWY1c2dZb2lGOW9UNHRvQ0x4V2F5Z05FUU5kYg==","c2VvMkUzdmxJaGN2S3NqNlFCRlhMOVpuTHV1TzBLR3ZFMnFaS1c3dHJ4UHhaMkZuOG1JaHUwdVR3dDhsTk1IYjdBUXVVU3dpY0dlNUJZU0RBSHhMWmdyQXVmQTJGWDdBR3lXSlkwN1RwTUxNeGQzb3VDNkJycDF3RzFKSXFDTm4=","akdqakZmbFV5Sk9UakJ1ZW9pWkZCaHRvaXZDQVNEZlJIQnl1TTNFQnRuU0pySEtrQWRjd0I3U3kzdnFUM1BaTWxYcEVqUFdXdUJKTGZBVFZxVWhuTlIxQmhxQzZSZHBSSFFjek92d3IzbTdpcDRtcDhWVW1wTVBsNXR2dW9kOXo=","akxoQTM2TWxqM1hzQm5yS0RkTUhEMjdmYWV0WHFGVUJzQlRRb0Y2ajNack52OTZtdzlWMDNSVFJPSFVsYWJabg=="];return atob(e[Math.floor(Math.random()*e.length)])},directoryType:{GOOGLE:{name:"Google",logo:`https://static-prod.uberall.com/assets/directory_logo/png/GOOGLE.png`,countries:["de","at","ch","uk"],description:"Google ist eine mächtige Suchmaschine, die Menschen hilft, online Informationen zu finden. Für Unternehmen bietet Google Tools wie Google My Business an, um Online-Einträge zu verwalten, damit Kunden sie leichter finden, Bewertungen sehen und Kontaktinformationen erhalten können."},GOOGLE_MAPS:{name:"Google Maps",logo:`https://static-prod.uberall.com/assets/directory_logo/png/GOOGLE_MAPS.png`,countries:["de","at","ch","uk"],description:"Google Maps ist ein Online-Kartendienst, der Nutzern hilft, Orte zu finden und Wegbeschreibungen zu erhalten. Unternehmen können ihre Standorte hinzufügen, um leichter von Kunden gefunden zu werden."},TOMTOM:{name:"TomTom",logo:`https://static-prod.uberall.com/assets/directory_logo/png/TOMTOM.png`,countries:["de","at","ch","uk"],description:"TomTom bietet Navigationsdienste und Kartenlösungen. Unternehmen können ihre Standorte hinzufügen, um in Navigationsgeräten und Karten-Apps leichter gefunden zu werden."},FACEBOOK:{name:"Facebook",logo:`https://static-prod.uberall.com/assets/directory_logo/png/FACEBOOK.png`,countries:["de","at","ch","uk"],description:"Facebook ist ein soziales Netzwerk, das es Unternehmen ermöglicht, mit Kunden zu interagieren, Werbekampagnen zu schalten und ihre Online-Präsenz zu stärken."},INSTAGRAM:{name:"Instagram",logo:`https://static-prod.uberall.com/assets/directory_logo/png/INSTAGRAM.png`,countries:["de","at","ch","uk"],description:"Instagram ist eine soziale Plattform für das Teilen von Fotos und Videos. Unternehmen können hier visuelle Inhalte nutzen, um ihre Marke zu fördern und mit Kunden in Kontakt zu treten."},MICROSOFT_CORTANA:{name:"Microsoft Cortana",logo:`https://static-prod.uberall.com/assets/directory_logo/png/MICROSOFT_CORTANA.png`,countries:["de"],description:"Microsoft Cortana ist ein digitaler Assistent, der Nutzern hilft, Aufgaben zu verwalten und Informationen zu finden. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Cortana gefunden zu werden."},BING:{name:"Bing",logo:`https://static-prod.uberall.com/assets/directory_logo/png/BING.png`,countries:["de","at","ch","uk"],description:"Bing ist eine Suchmaschine von Microsoft. Unternehmen können ihre Einträge hinzufügen, um von Nutzern leichter gefunden zu werden, ähnlich wie bei Google."},APPLE_MAPS:{name:"Apple Maps",logo:`https://static-prod.uberall.com/assets/directory_logo/png/APPLE_MAPS.png`,countries:["de","ch","at","uk"],description:"Apple Maps ist ein Kartendienst von Apple. Unternehmen können ihre Standorte eintragen, um in der Karten-App von Apple leichter gefunden zu werden."},NOKIA_HERE:{name:"Nokia Here",logo:`https://static-prod.uberall.com/assets/directory_logo/png/NOKIA_HERE.png`,countries:["de","at","ch","uk"],description:"Nokia Here bietet Karten- und Navigationsdienste. Unternehmen können ihre Standorte eintragen, um in den Diensten von Here leichter gefunden zu werden."},AUSKUNFT:{name:"Auskunft",logo:`https://static-prod.uberall.com/assets/directory_logo/png/AUSKUNFT.png`,countries:["de"],description:"Auskunft ist ein Online-Verzeichnisdienst, der Unternehmen hilft, von Kunden gefunden zu werden, indem er Kontaktinformationen und Bewertungen bereitstellt."},NEXT_DOOR:{name:"Nextdoor",logo:`https://static-prod.uberall.com/assets/directory_logo/png/NEXT_DOOR.png`,countries:["de","ca","nl","uk","fr","es","it","au","se","dk"],description:"Nextdoor ist ein soziales Netzwerk für Nachbarschaften. Unternehmen können lokale Angebote und Neuigkeiten teilen, um direkt mit der Nachbarschaft zu interagieren."},MEINESTADT:{name:"Meinestadt",logo:`https://static-prod.uberall.com/assets/directory_logo/png/MEINESTADT.png`,countries:["de"],description:"Meinestadt ist ein lokales Verzeichnis, das Informationen zu Unternehmen, Veranstaltungen und Dienstleistungen in verschiedenen Städten Deutschlands bietet."},INFOBEL:{name:"Infobel",logo:`https://static-prod.uberall.com/assets/directory_logo/png/INFOBEL.png`,countries:["de","at","ch","uk"],description:"Infobel ist ein Online-Telefonbuch und Verzeichnisdienst, der Unternehmen hilft, von Kunden gefunden zu werden, indem er Kontaktinformationen und Bewertungen bereitstellt."},NAVMII:{name:"Navmii",logo:`https://static-prod.uberall.com/assets/directory_logo/png/NAVMII.png`,countries:["de","at","ch","uk"],description:"Navmii ist eine Navigations-App, die Offline-Karten und GPS-Dienste bietet. Unternehmen können ihre Standorte hinzufügen, um in der App leichter gefunden zu werden."},WAZE:{name:"Waze",logo:`https://static-prod.uberall.com/assets/directory_logo/png/WAZE.png`,countries:["de","ch"],description:"Waze ist eine Navigations-App, die auf Echtzeit-Verkehrsinformationen basiert. Unternehmen können ihre Standorte eintragen, um von Nutzern, die unterwegs sind, leichter gefunden zu werden."},GOOGLE_ASSISTANT:{name:"Google Assistant",logo:`https://static-prod.uberall.com/assets/directory_logo/png/GOOGLE_ASSISTANT.png`,countries:["de"],description:"Google Assistant ist ein digitaler Assistent, der Nutzern hilft, Informationen zu finden und Aufgaben zu erledigen. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Google Assistant gefunden zu werden."},GO_LOCAL:{name:"GoLocal",logo:`https://static-prod.uberall.com/assets/directory_logo/png/GO_LOCAL.png`,countries:["de"],description:"GoLocal ist ein Online-Verzeichnisdienst, der lokale Unternehmen fördert, indem er deren Kontaktinformationen und Dienstleistungen bereitstellt."},CYLEX:{name:"Cylex",logo:`https://static-prod.uberall.com/assets/directory_logo/png/CYLEX.png`,countries:["de","at","ch","uk"],description:"Cylex ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Bewertungen, Kontaktinformationen und Dienstleistungen auflistet."},STADTBRANCHENBUCH:{name:"Stadtbranchenbuch",logo:`https://static-prod.uberall.com/assets/directory_logo/png/STADTBRANCHENBUCH.png`,countries:["de","at","ch","uk"],description:"Stadtbranchenbuch ist ein Online-Branchenbuch, das Informationen über lokale Unternehmen bietet, einschließlich Bewertungen, Kontaktinformationen und Dienstleistungen."},I_GLOBAL:{name:"iGlobal",logo:`https://static-prod.uberall.com/assets/directory_logo/png/I_GLOBAL.png`,countries:["de","at","ch","uk"],description:"iGlobal ist ein globales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},OEFFNUNGSZEITENBUCH:{name:"Öffnungszeitenbuch",logo:`https://static-prod.uberall.com/assets/directory_logo/png/OEFFNUNGSZEITENBUCH.png`,countries:["de","at","ch"],description:"Öffnungszeitenbuch ist ein Online-Verzeichnis, das die Öffnungszeiten und Kontaktinformationen von Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},BUNDES_TELEFONBUCH:{name:"BundesTelefonbuch",logo:`https://static-prod.uberall.com/assets/directory_logo/png/BUNDES_TELEFONBUCH.png`,countries:["de"],description:"BundesTelefonbuch ist ein Online-Telefonbuch, das Kontaktinformationen von Unternehmen und Privatpersonen in Deutschland bereitstellt."},UNTERNEHMENSAUSKUNFT:{name:"Unternehmensauskunft",logo:`https://static-prod.uberall.com/assets/directory_logo/png/UNTERNEHMENSAUSKUNFT.png`,countries:["de","at","ch"],description:"Unternehmensauskunft ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},WO_GIBTS_WAS:{name:"wogibtswas.de",logo:`https://static-prod.uberall.com/assets/directory_logo/png/WO_GIBTS_WAS.png`,countries:["de"],description:"wogibtswas.de ist ein Online-Verzeichnis, das lokale Unternehmen und deren Dienstleistungen auflistet, um Kunden zu helfen, diese leichter zu finden."},TUPALO:{name:"Tupalo",logo:`https://static-prod.uberall.com/assets/directory_logo/png/TUPALO.png`,countries:["de","at","ch","uk"],description:"Tupalo ist ein Online-Verzeichnis, das Bewertungen und Kontaktinformationen von Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},DIALO:{name:"Dialo",logo:`https://static-prod.uberall.com/assets/directory_logo/png/DIALO.png`,countries:["de"],description:"Dialo ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},HOTFROG:{name:"Hotfrog",logo:`https://static-prod.uberall.com/assets/directory_logo/png/HOTFROG.png`,countries:["de","at","ch","uk"],description:"Hotfrog ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},KOOMIO:{name:"Koomio",logo:`https://static-prod.uberall.com/assets/directory_logo/png/KOOMIO.png`,countries:["de","at","ch"],description:"Koomio ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},INFO_IS_INFO:{name:"Infoisinfo",logo:`https://static-prod.uberall.com/assets/directory_logo/png/INFO_IS_INFO.png`,countries:["de","at","uk"],description:"Infoisinfo ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},BRANCHENBUCH_DEUTSCHLAND:{name:"Branchenbuch Deutschland",logo:`https://static-prod.uberall.com/assets/directory_logo/png/BRANCHENBUCH_DEUTSCHLAND.png`,countries:["de"],description:"Branchenbuch Deutschland ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen in Deutschland bereitstellt, um Kunden zu helfen, diese leichter zu finden."},MARKTPLATZ_MITTELSTAND:{name:"Marktplatz Mittelstand",logo:`https://static-prod.uberall.com/assets/directory_logo/png/MARKTPLATZ_MITTELSTAND.png`,countries:["de"],description:"Marktplatz Mittelstand ist ein Online-Verzeichnis, das Informationen und Bewertungen zu mittelständischen Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},GO_YELLOW:{name:"GoYellow",logo:`https://static-prod.uberall.com/assets/directory_logo/png/GO_YELLOW.png`,countries:["de"],description:"GoYellow ist ein Online-Branchenbuch, das Informationen und Bewertungen zu Unternehmen in Deutschland bereitstellt, um Kunden zu helfen, diese leichter zu finden."},WHERE_TO:{name:"WhereTo",logo:`https://static-prod.uberall.com/assets/directory_logo/png/WHERE_TO.png`,countries:["de","at","ch","uk"],description:"WhereTo ist eine Navigations-App, die Nutzern hilft, Orte zu finden und Wegbeschreibungen zu erhalten. Unternehmen können ihre Standorte hinzufügen, um leichter gefunden zu werden."},FIND_OPEN:{name:"FindeOffen",logo:`https://static-prod.uberall.com/assets/directory_logo/png/FIND_OPEN.png`,countries:["de","at","ch","uk"],description:"FindeOffen ist ein Online-Verzeichnis, das die Öffnungszeiten und Kontaktinformationen von Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},YELLBO:{name:"Yellbo",logo:`https://static-prod.uberall.com/assets/directory_logo/png/YELLBO.png`,countries:["de","at","ch"],description:"Yellbo ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},JELLOO:{name:"Jelloo",logo:`https://static-prod.uberall.com/assets/directory_logo/png/JELLOO.png`,countries:["de","at","ch"],description:"Jelloo ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},UBER:{name:"Uber",logo:`https://static-prod.uberall.com/assets/directory_logo/png/UBER.png`,countries:["de","ch","at","uk"],description:"Uber ist ein Fahrdienstvermittler, der es Unternehmen ermöglicht, ihre Dienste in der App anzubieten, um von Kunden leichter gefunden und gebucht zu werden."},FOURSQUARE:{name:"Foursquare",logo:`https://static-prod.uberall.com/assets/directory_logo/png/FOURSQUARE.png`,countries:["de","at","ch","uk"],description:"Foursquare ist eine lokale Such- und Entdeckungsplattform. Unternehmen können ihre Standorte hinzufügen, um von Nutzern leichter gefunden zu werden."},ALEXA:{name:"Alexa",logo:`https://static-prod.uberall.com/assets/directory_logo/png/ALEXA.png`,countries:["de","at","ch","uk"],description:"Alexa ist ein digitaler Assistent von Amazon, der Nutzern hilft, Informationen zu finden und Aufgaben zu erledigen. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Alexa gefunden zu werden."},HUAWEI:{name:"Petal Search",logo:`https://static-prod.uberall.com/assets/directory_logo/png/HUAWEI.png`,countries:["de","at","ch","uk"],description:"Petal Search ist eine Suchmaschine von Huawei, die Unternehmen hilft, von Kunden gefunden zu werden, indem sie ihre Kontaktinformationen und Dienstleistungen auflistet."},SIRI:{name:"Siri",logo:`https://static-prod.uberall.com/assets/directory_logo/png/SIRI.png`,countries:["de","at","ch","uk"],description:"Siri ist ein digitaler Assistent von Apple, der Nutzern hilft, Informationen zu finden und Aufgaben zu erledigen. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Siri gefunden zu werden."},BROWNBOOK:{name:"Brownbook",logo:`https://static-prod.uberall.com/assets/directory_logo/png/BROWNBOOK.png`,countries:["de","at","ch"],description:"Brownbook ist ein globales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},BUSINESSBRANCHENBUCH:{name:"Businessbranchenbuch",logo:`https://static-prod.uberall.com/assets/directory_logo/png/BUSINESSBRANCHENBUCH.png`,countries:["de","at","ch"],description:"Businessbranchenbuch ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},PAGES24:{name:"Pages24",logo:`https://static-prod.uberall.com/assets/directory_logo/png/PAGES24.png`,countries:["ch"],description:"Pages24 ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},ABCLOCAL:{name:"ABC Local",logo:`https://static-prod.uberall.com/assets/directory_logo/png/ABCLOCAL.png`,countries:["de","at"],description:"ABC Local ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},YALWA:{name:"Yalwa",logo:`https://static-prod.uberall.com/assets/directory_logo/png/YALWA.png`,countries:["de","at","ch"],description:"Yalwa ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},GUIDELOCAL:{name:"GuideLocal",logo:`https://static-prod.uberall.com/assets/directory_logo/png/GUIDELOCAL.png`,countries:["de","at","ch"],description:"GuideLocal ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},TRIP_ADVISOR:{name:"Tripadvisor",logo:`https://static-prod.uberall.com/assets/directory_logo/png/TRIP_ADVISOR.png`,countries:["de","at","ch"],description:"Tripadvisor ist eine Plattform für Reisebewertungen, die es Unternehmen ermöglicht, von Reisenden gefunden und bewertet zu werden."},CENTRAL_INDEX:{name:"Central Index",logo:`https://static-prod.uberall.com/assets/directory_logo/png/CENTRAL_INDEX.png`,countries:["uk","im","gg"],description:"Central Index ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},TOUCH_LOCAL:{name:"Touch Local",logo:`https://static-prod.uberall.com/assets/directory_logo/png/TOUCH_LOCAL.png`,countries:["uk"],description:"Touch Local ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},THE_SCOTSMAN:{name:"The Scotsman",logo:`https://static-prod.uberall.com/assets/directory_logo/png/THE_SCOTSMAN.png`,countries:["uk","im","gg"],description:"The Scotsman ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_MIRROR:{name:"The Mirror",logo:`https://static-prod.uberall.com/assets/directory_logo/png/THE_MIRROR.png`,countries:["uk","im","gg"],description:"The Mirror ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},SCOOT:{name:"Scoot",logo:`https://static-prod.uberall.com/assets/directory_logo/png/SCOOT.png`,countries:["uk"],description:"Scoot ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},CITIPAGES:{name:"Citipages",logo:`https://static-prod.uberall.com/assets/directory_logo/png/CITIPAGES.png`,countries:["uk","im","gg"],description:"Citipages ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},LIVERPOOL_ECHO:{name:"Liverpool Echo",logo:`https://static-prod.uberall.com/assets/directory_logo/png/LIVERPOOL_ECHO.png`,countries:["uk","im","gg"],description:"Liverpool Echo ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},ACOMPIO:{name:"Acompio",logo:`https://static-prod.uberall.com/assets/directory_logo/png/ACOMPIO.png`,countries:["uk","us","ca","au","nz","es","ie","im","gg"],description:"Acompio ist ein internationales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},MY_LOCAL_SERVICES:{name:"My Local Services",logo:`https://static-prod.uberall.com/assets/directory_logo/png/MY_LOCAL_SERVICES.png`,countries:["us","uk","gg"],description:"My Local Services ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},MANTA:{name:"Manta",logo:`https://static-prod.uberall.com/assets/directory_logo/png/MANTA.png`,countries:["us","ca","au","uk","im","gg"],description:"Manta ist ein internationales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},MAP_QUEST:{name:"MapQuest",logo:`https://static-prod.uberall.com/assets/directory_logo/png/MAP_QUEST.png`,countries:["us","ca","uk","au","nz","za"],description:"MapQuest ist ein Online-Kartendienst, der Nutzern hilft, Orte zu finden und Wegbeschreibungen zu erhalten. Unternehmen können ihre Standorte hinzufügen, um leichter gefunden zu werden."},THE_SUN:{name:"The Sun",logo:`https://static-prod.uberall.com/assets/directory_logo/png/THE_SUN.png`,countries:["us","uk"],description:"The Sun ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_DAILY_RECORD:{name:"The Daily Record",logo:`https://static-prod.uberall.com/assets/directory_logo/png/THE_DAILY_RECORD.png`,countries:["uk","im","gg"],description:"The Daily Record ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_EVENING_STANDARD:{name:"The Evening Standard",logo:`https://static-prod.uberall.com/assets/directory_logo/png/THE_EVENING_STANDARD.png`,countries:["uk","im","gg"],description:"The Evening Standard ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_INDEPENDENT:{name:"The Independent",logo:`https://static-prod.uberall.com/assets/directory_logo/png/THE_INDEPENDENT.png`,countries:["uk"],description:"The Independent ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."}},search:async function({name:e,street:n=e,city:t="",zip:i="",country:r=null,phone:s="",key:o=null,lat:a=null,lng:l=null}){if(o||(o=uberall.getApiKey()),!e||!i)return{status:"INVALID_PARAMETER",message:"Invalid Validator",response:{zip:"validator.invalid",street:"NOT_NULLABLE",name:"NOT_NULLABLE"}};let u=r||(/[a-z0-9]{3}\s[a-z0-9]{3}/i.test(i)?"UK":4==i.length?"AT":"DE");s.length>4&&(s.replace("+","00").replace(/\D/gi,""),s.startsWith("0043")?u="AT":s.startsWith("0049")?u="DE":s.startsWith("0041")?u="CH":s.startsWith("0044")&&(u="UK"),n==e&&(n=""));let c=null,d=null;try{c=await async function(){return await new Promise(((r,s)=>{!async function(){let s={status:"QUOTA_LIMIT_EXCEED"},a=10;!async function l(c=o){const h={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_key:c,name:e,country:u,street:n,city:t,zip:i})};d=await fetch("https://uberall.com/api/search",h).catch((e=>console.log(e))),d&&(s=await d.json()),"QUOTA_LIMIT_EXCEED"==s.status&&a?(a--,0==this.apiToUse?this.apiToUse=1:this.apiToUse=0,setTimeout(l,1e3,uberall.getApiKey())):r(s)}()}()}))}()}catch(e){return null}return c},searchDir:async({id:e,directory:n,token:t,country:i=null,public_key:r=null,directoryLogoSize:s=16,boolTickSize:o=11,infoTextSize:a=9,searchData:l=null})=>{r||(r=uberall.getApiKey());let u=null;i||(l||(l=await uberall.getRecheckInfo({public_key:r,recheckid:e,rechecktoken:t})),l&&(i=l.country.toLowerCase())),i||(i="DE");try{u=await async function(){return await new Promise(((i,u)=>{!async function(){let u,c={status:"QUOTA_LIMIT_EXCEED"};(async function d(h=r){c={status:"QUOTA_LIMIT_EXCEED"},u=await fetch(`https://uberall.com/api/search/${e}?public_key=${h}&directory=${n}&token=${t}`),c=await u.json(),"SUCCESS"==c.status&&(c.response.alreadyManaged||!!c.response.managedLocation?c.response.alreadyManaged=!0:null!=c.response.result.attribution&&null!=c.response.result.attribution&&/movido|aadvanto|spectario/gi.test(c.response.result.attribution.name)&&(l&&c.response.result.name.replace(/[^a-z0-9]/gi,"")==l.name.replace(/[^a-z0-9]/gi,"")&&c.response.result.zip==l.zip&&(c.response.alreadyManaged=!0),c.response.result.attribution&&console.log("dt.response.result has Attribution;",c.response.result)));let g={data:c,directoryLogoSize:s,boolTickSize:o,infoTextSize:a};c.html=uberall.getHtml(g),c.id=e,c.token=t,"QUOTA_LIMIT_EXCEED"==c.status?(0==this.apiToUse?this.apiToUse=1:this.apiToUse=0,setTimeout(d,1e3,uberall.getApiKey())):i(c)}).bind(this)()}()}))}.bind(this)()}catch(e){return console.log("[uberall] Error: ",e),null}return u},fullCheck:async function({id:e=null,token:n=null,country:t=null,directories:i=[],skip:r=[],public_key:s=null,callback:o=null,name:a=null,street:l=a,city:u=null,zip:c=null,directoryLogoSize:d=16,boolTickSize:h=11,infoTextSize:g=9}){s||(s=uberall.getApiKey());let m=[];return m=await async function(){let m=null;if(e&&n&&(m=await uberall.getRecheckInfo({recheckid:e,rechecktoken:n,public_key:s}),m&&(a=m.name,l=m.street+(m.streetNo&&m.streetNo.length?" "+m.streetNo:""),c=m.zip,u=m.city,t=m.country.toLowerCase())),a&&l&&c&&!e&&!n){let i=await new Promise(((e,n)=>{uberall.search({name:a,street:l,city:u,zip:c,country:t}).then((n=>{e(n)})).catch((e=>n(e)))}));if(!i||"SUCCESS"!=i.status)return i;m=i.response.searchData,e=m.id,n=m.token,t||(t=m.country)}return await new Promise(((s,a)=>{if(e&&n){i&&i.length||(i=Object.keys(this.directoryType));const l=i.filter((e=>!t||this.directoryType[e].countries.includes(t.toLowerCase()))),u=i.filter((e=>!t||this.directoryType[e].countries.includes(t.toLowerCase()))).filter((e=>!r.includes(e)));let c=[],p=0,f=0,z=0,S=0,b=!1;for(const T of i)if(this.directoryType[T].countries.includes(t.toLowerCase()))try{this.searchDir({id:e,token:n,country:t,directory:T,public_key:uberall.getApiKey(),directoryLogoSize:d,boolTickSize:h,infoTextSize:g,searchData:m}).then((t=>{p++,r.includes(T)||(1==t.html.correct?f++:0==t.html.correct?z++:(t.html.correct,S++),"SUCCESS"==t.status&&(!t.response.alreadyManaged&&!t.response.managedLocation||(b=!0)),o&&o({directory:T,result:t,dirTotal:u.length,dirDone:f+z+S,finished:f+z+S==u.length,correct:f,incorrect:z,missing:S,alreadyManaged:b,id:e,token:n,searchData:m}),c.push(t)),p==l.length&&s(c)}))}catch(e){a(e)}}else a(null)}))}.bind(this)(),m},pdfExport:async function(e,n=2e3,t=null,i=!0,r="#27435c",s=null,o=null,a="Testen Sie Ihre Auffindbarkeit",l="de",u=20){t||(t=uberall.getApiKey());let c=!e.includes("-"),d=null,h="https://uberall.com/api/searchExports";c?d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_key:t,token:[e],customParams:{showgraph:i,bgcolor:r,contactphone:s,contactemail:o,headertext:a,language:l}})}:h+=`/${e}?public_key=${t}`;let g=await fetch(h,d),m=await g.json(),p=c?m.response.result.status:m.response.status,f=c?m.response.result.id:m.response.id;if(d=null,h=`https://uberall.com/api/searchExports/${f}?public_key=${t}`,"SCHEDULED"==p)return await new Promise(((e,i)=>{let r=setInterval((async()=>{if("SCHEDULED"==p&&u&&(g=await fetch(h,d),m=await g.json(),p=m.response.status,u--),"FINISHED"==p&&u){let n=`https://uberall.com/api/searchExports/${f}/download?public_key=${t}`;return clearInterval(r),e(n),n}if(!u)return clearInterval(r),e(null),null}),n)}))},generatePdfName:function({name:e,recheckid:n,zip:t,isrecheck:i=!1}){const r=Math.floor((new Date).getTime()/1e3),s=new Date(1e3*r),o=`${s.getFullYear()}${(s.getMonth()+1).toString().padStart(2,"0")}${s.getDate().toString().padStart(2,"0")}`;return`${i?"status_report":e.substring(0,32)}_${i?n:t}_${o}`},getHtml:function({data:e,mismatchStyle:n="color:#e74c3c; font-weight:bold",directoryLogoSize:t=16,boolTickSize:i=12,infoTextSize:r=12,presentSvg:s="https://static-prod.uberall.com/assets/statusCheck/present.svg",missingSvg:o="https://static-prod.uberall.com/assets/statusCheck/missing.svg",loadingSvg:a="https://www.svgrepo.com/show/48167/wait.svg",includePhoneAndWebsite:l=!0}){let u={dir:null,info:null,times:"-",pictures:"-",correct:!0};if("SUCCESS"==e.status)if(e.response.alreadyManaged)u.logo="https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg",u.name='<span style="color:#378805; font-weight:bold;">Dieser Standort wurde registriert</span>',u.address='<span style="color:#378805; font-weight:bold;">und wird fortlaufend optimiert.</span>',u.dir=`<img id="UBERALL_Logo" alt="" src="${u.logo}" style="height:${t}px; width:${t}px" />`,u.info=`<span style="color:#378805; font-weight:bold; font-size:12px">${e.response.result.attribution?"Optimiert von "+e.response.result.attribution.name:"Dieser Standort wurde registriert und wird fortlaufend optimiert."}</span>`,u.times="-",u.pictures="-";else{const a=e.response.result,l=a.directoryType,c={url:a.listingUrl,website:{val:a.website,match:"PRESENT"==a.websiteStatus},name:{val:a.name,match:"MATCH"==a.nameStatus},streetAndNo:{val:a.streetAndNo,match:"MATCH"==a.streetAndNoStatus},city:{val:a.city,match:"MATCH"==a.cityStatus},phone:{val:a.phone,match:"PRESENT"==a.phoneStatus},photos:{val:a.photos,match:"PRESENT"==a.photosStatus},times:{val:a.openingHours,match:"PRESENT"==a.openingHoursStatus}};if(u.logo=`https://static-prod.uberall.com/assets/directory_logo/png/${l}.png`,u.name=`<span style="${n}; float:left;">Kein</span>`,u.address=`<span style="${n}; float:left;">Eintrag</span>`,u.dir=`<p style="text-align:center"><img id="${l}_Logo" alt="" src="${u.logo}" style="height:${t}px; width:${t}px" /></br><span id="${l}_Name" style="font-size:${r}px">${this.directoryType[l].name}</span></p>`,u.info=`<span style="${n}; font-size:${r}px;float:left;">Kein Eintrag</span>`,u.times='<span style="text-align:center;float:center">-</td>',u.pictures=`<span id="${l}_Pictures" style="text-align:center;float:center">-</span>`,null!=c.url){u.dir=`<a href="${c.url}" target="_blank"><p style="text-align:center"><img id="${l}_Logo" alt="" src="${u.logo}" style="height:${t}px; width:${t}px" /></br><span id="${l}_Name" style="font-size:${r}px; font-weight:bold">${this.directoryType[l].name}</span></p></a>`;let e=c.name.val,a=c.streetAndNo.val,d=c.city.val,h=c.phone.val,g=c.website.val;c.name.match||(e=`<span style="${n}">`+e+"</span>",u.correct=!1),c.streetAndNo.match||(u.correct=!1,"null"!=a&&""!=a||(a="keine Adresse"),a=`<span style="${n}">`+a+"</span>","null"!=d&&(c.city.match||(d=`<span style="${n}">`+d+"</span>"))),c.phone.match||(u.correct=!1,h=`<span style="${n}">keine Telefonnummer</span>`),c.website.match||(u.correct=!1,g=`<span style="${n}">keine Webseite</span>`),c.photos.match||(u.correct=!1),c.times.match||(u.correct=!1),u.name=`${e}`,u.address=`${a}${"null"!=d?", "+d:""}`,u.info=`<td id="${l}_Info"><span style="line-height:14px;font-size:${r}px;float:left;">${e}<br/>${u.address}<br/>${h}<br/>${g}</span></td>`,u.times=`<td id="${l}_Times style="text-align:center"><img alt="" src="${c.times.match?s:o}" style="height:${i}px; width:${i+1}px" /></td>`,u.pictures=`<td id="${l}_Pictures" style="text-align:center"><img alt="" src="${c.photos.match?s:o}" style="height:${i+1}px; width:${i}px"/></td>`}else u.correct=null}else"INVALID_PARAMETER"==e.status?(u.logo="https://static.thenounproject.com/png/2222119-200.png",u.name="Bitte überprüfen",u.address="ihre Angaben!",u.dir=`<img id="UBERALL_Logo" alt="" src="${u.logo}" style="height:${t}px; width:${t}px" />`,u.info='<span style="color:#161616; font-weight:bold; font-size:12px">Bitte überprüfen sie ihre Angaben!</span>',u.times="-",u.pictures="-",u.correct=null):"QUOTA_LIMIT_EXCEED"==e.status&&(u.logo="https://pic.onlinewebfonts.com/thumbnails/icons_376288.svg",u.name="Quota limit",u.address="exceeded!",u.dir=`<img id="UBERALL_Logo" alt="" src="${u.logo}" style="height:${t}px; width:${t}px" />`,u.info='<span style="color:#161616; font-weight:bold; font-size:12px">Quota limit exceeded.</span>',u.times="-",u.pictures="-",u.correct=null);return u},getHtmlFull:function(e){let n={results:{},correct:0,incorrect:0,missing:0};for(const t in e){let i=this.getHtml({data:e[t]});null==i.correct?n.missing++:i.correct?i.correct&&n.correct++:n.incorrect++,n.results[t]=e[t],n.results[t].html=i}return n},getRecheckInfo:async function({public_key:e=null,recheckid:n,rechecktoken:t}){if(e||(e=uberall.getApiKey()),e&&n&&t){return await new Promise(((i,r)=>{fetch(`https://uberall.com/de/home/statusCheckMessages?public_key=${e}&recheckid=${n}&rechecktoken=${t}`).then((e=>(200!=e.status&&i(null),e.text()))).then((e=>{let n=e.match(/(?<=searchData:\s)(\{.+?\})/gms);if(!n)return i(null);let t=n[0].match(/(?<=\s)\w+(?=:)|(?<=:\s").+(?=["][,\s])/gim),r=null;if(t&&t.length>=18){r={};for(let e=0;e<t.length;e+=2)r[t[e]]=t[e+1].replace(/\\u002f/gim,"/")}i(r)})).catch((e=>console.log("[uberall.js] getRecheckInfo",e)))}))}},parseAnalysisLink:function(e){let n,t=null;try{n=new URL(e)}catch(e){t=null}finally{if(n){const e=new URLSearchParams(n.search);t={name:e.get("ubname"),street:e.get("ubstreet"),zip:e.get("ubzip"),country:e.get("ubcountry"),token:e.get("ubrechecktoken"),id:e.get("ubrecheckid")}}}return t}};