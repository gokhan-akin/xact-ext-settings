var uberall={imgSrc:"https://static-prod.uberall.com/assets/directory_logo/png/",apiToUse:0,getApiKey:function(){const e=["dTVuUnlrTGpTMnREZnYwc3JsSWFuT3FENzNReFdadXJzWXBIaWY1c2dZb2lGOW9UNHRvQ0x4V2F5Z05FUU5kYg==","c2VvMkUzdmxJaGN2S3NqNlFCRlhMOVpuTHV1TzBLR3ZFMnFaS1c3dHJ4UHhaMkZuOG1JaHUwdVR3dDhsTk1IYjdBUXVVU3dpY0dlNUJZU0RBSHhMWmdyQXVmQTJGWDdBR3lXSlkwN1RwTUxNeGQzb3VDNkJycDF3RzFKSXFDTm4=","akdqakZmbFV5Sk9UakJ1ZW9pWkZCaHRvaXZDQVNEZlJIQnl1TTNFQnRuU0pySEtrQWRjd0I3U3kzdnFUM1BaTWxYcEVqUFdXdUJKTGZBVFZxVWhuTlIxQmhxQzZSZHBSSFFjek92d3IzbTdpcDRtcDhWVW1wTVBsNXR2dW9kOXo=","akxoQTM2TWxqM1hzQm5yS0RkTUhEMjdmYWV0WHFGVUJzQlRRb0Y2ajNack52OTZtdzlWMDNSVFJPSFVsYWJabg=="];return atob(e[Math.floor(Math.random()*e.length)])},directoryType:{GOOGLE:{name:"Google",logo:"https://static-prod.uberall.com/assets/directory_logo/png/GOOGLE.png",countries:["de","at","ch","uk","li"],description:"Google ist eine mächtige Suchmaschine, die Menschen hilft, online Informationen zu finden. Für Unternehmen bietet Google Tools wie Google My Business an, um Online-Einträge zu verwalten, damit Kunden sie leichter finden, Bewertungen sehen und Kontaktinformationen erhalten können."},GOOGLE_MAPS:{name:"Google Maps",logo:"https://static-prod.uberall.com/assets/directory_logo/png/GOOGLE_MAPS.png",countries:["de","at","ch","uk","li"],description:"Google Maps ist ein Online-Kartendienst, der Nutzern hilft, Orte zu finden und Wegbeschreibungen zu erhalten. Unternehmen können ihre Standorte hinzufügen, um leichter von Kunden gefunden zu werden."},TOMTOM:{name:"TomTom",logo:"https://static-prod.uberall.com/assets/directory_logo/png/TOMTOM.png",countries:["de","at","ch","uk","li"],description:"TomTom bietet Navigationsdienste und Kartenlösungen. Unternehmen können ihre Standorte hinzufügen, um in Navigationsgeräten und Karten-Apps leichter gefunden zu werden."},FACEBOOK:{name:"Facebook",logo:"https://static-prod.uberall.com/assets/directory_logo/png/FACEBOOK.png",countries:["de","at","ch","uk","li"],description:"Facebook ist ein soziales Netzwerk, das es Unternehmen ermöglicht, mit Kunden zu interagieren, Werbekampagnen zu schalten und ihre Online-Präsenz zu stärken."},INSTAGRAM:{name:"Instagram",logo:"https://static-prod.uberall.com/assets/directory_logo/png/INSTAGRAM.png",countries:["de","at","ch","uk","li"],description:"Instagram ist eine soziale Plattform für das Teilen von Fotos und Videos. Unternehmen können hier visuelle Inhalte nutzen, um ihre Marke zu fördern und mit Kunden in Kontakt zu treten."},MICROSOFT_CORTANA:{name:"Microsoft Cortana",logo:"https://static-prod.uberall.com/assets/directory_logo/png/MICROSOFT_CORTANA.png",countries:["de"],description:"Microsoft Cortana ist ein digitaler Assistent, der Nutzern hilft, Aufgaben zu verwalten und Informationen zu finden. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Cortana gefunden zu werden."},BING:{name:"Bing",logo:"https://static-prod.uberall.com/assets/directory_logo/png/BING.png",countries:["de","at","ch","uk","li"],description:"Bing ist eine Suchmaschine von Microsoft. Unternehmen können ihre Einträge hinzufügen, um von Nutzern leichter gefunden zu werden, ähnlich wie bei Google."},APPLE_MAPS:{name:"Apple Maps",logo:"https://static-prod.uberall.com/assets/directory_logo/png/APPLE_MAPS.png",countries:["de","ch","at","uk","li"],description:"Apple Maps ist ein Kartendienst von Apple. Unternehmen können ihre Standorte eintragen, um in der Karten-App von Apple leichter gefunden zu werden."},NOKIA_HERE:{name:"Nokia Here",logo:"https://static-prod.uberall.com/assets/directory_logo/png/NOKIA_HERE.png",countries:["de","at","ch","uk","li"],description:"Nokia Here bietet Karten- und Navigationsdienste. Unternehmen können ihre Standorte eintragen, um in den Diensten von Here leichter gefunden zu werden."},AUSKUNFT:{name:"Auskunft",logo:"https://static-prod.uberall.com/assets/directory_logo/png/AUSKUNFT.png",countries:["de"],description:"Auskunft ist ein Online-Verzeichnisdienst, der Unternehmen hilft, von Kunden gefunden zu werden, indem er Kontaktinformationen und Bewertungen bereitstellt."},NEXT_DOOR:{name:"Nextdoor",logo:"https://static-prod.uberall.com/assets/directory_logo/png/NEXT_DOOR.png",countries:["de","ca","nl","uk","fr","es","it","au","se","dk"],description:"Nextdoor ist ein soziales Netzwerk für Nachbarschaften. Unternehmen können lokale Angebote und Neuigkeiten teilen, um direkt mit der Nachbarschaft zu interagieren."},MEINESTADT:{name:"Meinestadt",logo:"https://static-prod.uberall.com/assets/directory_logo/png/MEINESTADT.png",countries:["de"],description:"Meinestadt ist ein lokales Verzeichnis, das Informationen zu Unternehmen, Veranstaltungen und Dienstleistungen in verschiedenen Städten Deutschlands bietet."},INFOBEL:{name:"Infobel",logo:"https://static-prod.uberall.com/assets/directory_logo/png/INFOBEL.png",countries:["de","at","ch","uk"],description:"Infobel ist ein Online-Telefonbuch und Verzeichnisdienst, der Unternehmen hilft, von Kunden gefunden zu werden, indem er Kontaktinformationen und Bewertungen bereitstellt."},NAVMII:{name:"Navmii",logo:"https://static-prod.uberall.com/assets/directory_logo/png/NAVMII.png",countries:["de","at","ch","uk","li"],description:"Navmii ist eine Navigations-App, die Offline-Karten und GPS-Dienste bietet. Unternehmen können ihre Standorte hinzufügen, um in der App leichter gefunden zu werden."},WAZE:{name:"Waze",logo:"https://static-prod.uberall.com/assets/directory_logo/png/WAZE.png",countries:["de","ch","li"],description:"Waze ist eine Navigations-App, die auf Echtzeit-Verkehrsinformationen basiert. Unternehmen können ihre Standorte eintragen, um von Nutzern, die unterwegs sind, leichter gefunden zu werden."},GOOGLE_ASSISTANT:{name:"Google Assistant",logo:"https://static-prod.uberall.com/assets/directory_logo/png/GOOGLE_ASSISTANT.png",countries:["de","at","ch","li"],description:"Google Assistant ist ein digitaler Assistent, der Nutzern hilft, Informationen zu finden und Aufgaben zu erledigen. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Google Assistant gefunden zu werden."},GO_LOCAL:{name:"GoLocal",logo:"https://static-prod.uberall.com/assets/directory_logo/png/GO_LOCAL.png",countries:["de"],description:"GoLocal ist ein Online-Verzeichnisdienst, der lokale Unternehmen fördert, indem er deren Kontaktinformationen und Dienstleistungen bereitstellt."},CYLEX:{name:"Cylex",logo:"https://static-prod.uberall.com/assets/directory_logo/png/CYLEX.png",countries:["de","at","ch","uk"],description:"Cylex ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Bewertungen, Kontaktinformationen und Dienstleistungen auflistet."},STADTBRANCHENBUCH:{name:"Stadtbranchenbuch",logo:"https://static-prod.uberall.com/assets/directory_logo/png/STADTBRANCHENBUCH.png",countries:["de","at","ch","uk"],description:"Stadtbranchenbuch ist ein Online-Branchenbuch, das Informationen über lokale Unternehmen bietet, einschließlich Bewertungen, Kontaktinformationen und Dienstleistungen."},I_GLOBAL:{name:"iGlobal",logo:"https://static-prod.uberall.com/assets/directory_logo/png/I_GLOBAL.png",countries:["de","at","ch","uk"],description:"iGlobal ist ein globales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},OEFFNUNGSZEITENBUCH:{name:"Öffnungszeitenbuch",logo:"https://static-prod.uberall.com/assets/directory_logo/png/OEFFNUNGSZEITENBUCH.png",countries:["de","at","ch"],description:"Öffnungszeitenbuch ist ein Online-Verzeichnis, das die Öffnungszeiten und Kontaktinformationen von Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},BUNDES_TELEFONBUCH:{name:"BundesTelefonbuch",logo:"https://static-prod.uberall.com/assets/directory_logo/png/BUNDES_TELEFONBUCH.png",countries:["de"],description:"BundesTelefonbuch ist ein Online-Telefonbuch, das Kontaktinformationen von Unternehmen und Privatpersonen in Deutschland bereitstellt."},UNTERNEHMENSAUSKUNFT:{name:"Unternehmensauskunft",logo:"https://static-prod.uberall.com/assets/directory_logo/png/UNTERNEHMENSAUSKUNFT.png",countries:["de","at","ch"],description:"Unternehmensauskunft ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},WO_GIBTS_WAS:{name:"wogibtswas.de",logo:"https://static-prod.uberall.com/assets/directory_logo/png/WO_GIBTS_WAS.png",countries:["de"],description:"wogibtswas.de ist ein Online-Verzeichnis, das lokale Unternehmen und deren Dienstleistungen auflistet, um Kunden zu helfen, diese leichter zu finden."},TUPALO:{name:"Tupalo",logo:"https://static-prod.uberall.com/assets/directory_logo/png/TUPALO.png",countries:["de","at","ch","uk","li"],description:"Tupalo ist ein Online-Verzeichnis, das Bewertungen und Kontaktinformationen von Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},DIALO:{name:"Dialo",logo:"https://static-prod.uberall.com/assets/directory_logo/png/DIALO.png",countries:["de"],description:"Dialo ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},HOTFROG:{name:"Hotfrog",logo:"https://static-prod.uberall.com/assets/directory_logo/png/HOTFROG.png",countries:["de","at","ch","uk"],description:"Hotfrog ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},KOOMIO:{name:"Koomio",logo:"https://static-prod.uberall.com/assets/directory_logo/png/KOOMIO.png",countries:["de","at","ch"],description:"Koomio ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},INFO_IS_INFO:{name:"Infoisinfo",logo:"https://static-prod.uberall.com/assets/directory_logo/png/INFO_IS_INFO.png",countries:["de","at","uk"],description:"Infoisinfo ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},BRANCHENBUCH_DEUTSCHLAND:{name:"Branchenbuch Deutschland",logo:"https://static-prod.uberall.com/assets/directory_logo/png/BRANCHENBUCH_DEUTSCHLAND.png",countries:["de"],description:"Branchenbuch Deutschland ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen in Deutschland bereitstellt, um Kunden zu helfen, diese leichter zu finden."},MARKTPLATZ_MITTELSTAND:{name:"Marktplatz Mittelstand",logo:"https://static-prod.uberall.com/assets/directory_logo/png/MARKTPLATZ_MITTELSTAND.png",countries:["de"],description:"Marktplatz Mittelstand ist ein Online-Verzeichnis, das Informationen und Bewertungen zu mittelständischen Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},GO_YELLOW:{name:"GoYellow",logo:"https://static-prod.uberall.com/assets/directory_logo/png/GO_YELLOW.png",countries:["de"],description:"GoYellow ist ein Online-Branchenbuch, das Informationen und Bewertungen zu Unternehmen in Deutschland bereitstellt, um Kunden zu helfen, diese leichter zu finden."},WHERE_TO:{name:"WhereTo",logo:"https://static-prod.uberall.com/assets/directory_logo/png/WHERE_TO.png",countries:["de","at","ch","uk","li"],description:"WhereTo ist eine Navigations-App, die Nutzern hilft, Orte zu finden und Wegbeschreibungen zu erhalten. Unternehmen können ihre Standorte hinzufügen, um leichter gefunden zu werden."},FIND_OPEN:{name:"FindeOffen",logo:"https://static-prod.uberall.com/assets/directory_logo/png/FIND_OPEN.png",countries:["de","at","ch","uk"],description:"FindeOffen ist ein Online-Verzeichnis, das die Öffnungszeiten und Kontaktinformationen von Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},YELLBO:{name:"Yellbo",logo:"https://static-prod.uberall.com/assets/directory_logo/png/YELLBO.png",countries:["de","at","ch"],description:"Yellbo ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},JELLOO:{name:"Jelloo",logo:"https://static-prod.uberall.com/assets/directory_logo/png/JELLOO.png",countries:["de","at","ch"],description:"Jelloo ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},UBER:{name:"Uber",logo:"https://static-prod.uberall.com/assets/directory_logo/png/UBER.png",countries:["de","ch","at","uk","li"],description:"Uber ist ein Fahrdienstvermittler, der es Unternehmen ermöglicht, ihre Dienste in der App anzubieten, um von Kunden leichter gefunden und gebucht zu werden."},FOURSQUARE:{name:"Foursquare",logo:"https://static-prod.uberall.com/assets/directory_logo/png/FOURSQUARE.png",countries:["de","at","ch","uk","li"],description:"Foursquare ist eine lokale Such- und Entdeckungsplattform. Unternehmen können ihre Standorte hinzufügen, um von Nutzern leichter gefunden zu werden."},ALEXA:{name:"Alexa",logo:"https://static-prod.uberall.com/assets/directory_logo/png/ALEXA.png",countries:["de","at","ch","uk","li"],description:"Alexa ist ein digitaler Assistent von Amazon, der Nutzern hilft, Informationen zu finden und Aufgaben zu erledigen. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Alexa gefunden zu werden."},HUAWEI:{name:"Petal Search",logo:"https://static-prod.uberall.com/assets/directory_logo/png/HUAWEI.png",countries:["de","at","ch","uk","li"],description:"Petal Search ist eine Suchmaschine von Huawei, die Unternehmen hilft, von Kunden gefunden zu werden, indem sie ihre Kontaktinformationen und Dienstleistungen auflistet."},SIRI:{name:"Siri",logo:"https://static-prod.uberall.com/assets/directory_logo/png/SIRI.png",countries:["de","at","ch","uk","li"],description:"Siri ist ein digitaler Assistent von Apple, der Nutzern hilft, Informationen zu finden und Aufgaben zu erledigen. Unternehmen können ihre Daten hinzufügen, um in den Suchanfragen von Siri gefunden zu werden."},BROWNBOOK:{name:"Brownbook",logo:"https://static-prod.uberall.com/assets/directory_logo/png/BROWNBOOK.png",countries:["de","at","ch","li"],description:"Brownbook ist ein globales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},BUSINESSBRANCHENBUCH:{name:"Businessbranchenbuch",logo:"https://static-prod.uberall.com/assets/directory_logo/png/BUSINESSBRANCHENBUCH.png",countries:["de","at","ch"],description:"Businessbranchenbuch ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},PAGES24:{name:"Pages24",logo:"https://static-prod.uberall.com/assets/directory_logo/png/PAGES24.png",countries:["ch"],description:"Pages24 ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},ABCLOCAL:{name:"ABC Local",logo:"https://static-prod.uberall.com/assets/directory_logo/png/ABCLOCAL.png",countries:["de","at"],description:"ABC Local ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},YALWA:{name:"Yalwa",logo:"https://static-prod.uberall.com/assets/directory_logo/png/YALWA.png",countries:["de","at","ch"],description:"Yalwa ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},GUIDELOCAL:{name:"GuideLocal",logo:"https://static-prod.uberall.com/assets/directory_logo/png/GUIDELOCAL.png",countries:["de","at","ch"],description:"GuideLocal ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},TRIP_ADVISOR:{name:"Tripadvisor",logo:"https://static-prod.uberall.com/assets/directory_logo/png/TRIP_ADVISOR.png",countries:["de","at","ch","li"],description:"Tripadvisor ist eine Plattform für Reisebewertungen, die es Unternehmen ermöglicht, von Reisenden gefunden und bewertet zu werden."},CENTRAL_INDEX:{name:"Central Index",logo:"https://static-prod.uberall.com/assets/directory_logo/png/CENTRAL_INDEX.png",countries:["uk","im","gg"],description:"Central Index ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},TOUCH_LOCAL:{name:"Touch Local",logo:"https://static-prod.uberall.com/assets/directory_logo/png/TOUCH_LOCAL.png",countries:["uk"],description:"Touch Local ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},THE_SCOTSMAN:{name:"The Scotsman",logo:"https://static-prod.uberall.com/assets/directory_logo/png/THE_SCOTSMAN.png",countries:["uk","im","gg"],description:"The Scotsman ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_MIRROR:{name:"The Mirror",logo:"https://static-prod.uberall.com/assets/directory_logo/png/THE_MIRROR.png",countries:["uk","im","gg"],description:"The Mirror ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},SCOOT:{name:"Scoot",logo:"https://static-prod.uberall.com/assets/directory_logo/png/SCOOT.png",countries:["uk"],description:"Scoot ist ein Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},CITIPAGES:{name:"Citipages",logo:"https://static-prod.uberall.com/assets/directory_logo/png/CITIPAGES.png",countries:["uk","im","gg"],description:"Citipages ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},LIVERPOOL_ECHO:{name:"Liverpool Echo",logo:"https://static-prod.uberall.com/assets/directory_logo/png/LIVERPOOL_ECHO.png",countries:["uk","im","gg"],description:"Liverpool Echo ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},ACOMPIO:{name:"Acompio",logo:"https://static-prod.uberall.com/assets/directory_logo/png/ACOMPIO.png",countries:["uk","us","ca","au","nz","es","ie","im","gg"],description:"Acompio ist ein internationales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Bewertungen bereitstellt."},MY_LOCAL_SERVICES:{name:"My Local Services",logo:"https://static-prod.uberall.com/assets/directory_logo/png/MY_LOCAL_SERVICES.png",countries:["us","uk","gg"],description:"My Local Services ist ein Online-Verzeichnis, das Informationen und Bewertungen zu Unternehmen bereitstellt, um Kunden zu helfen, diese leichter zu finden."},MANTA:{name:"Manta",logo:"https://static-prod.uberall.com/assets/directory_logo/png/MANTA.png",countries:["us","ca","au","uk","im","gg"],description:"Manta ist ein internationales Online-Verzeichnis, das Unternehmen hilft, von Kunden gefunden zu werden, indem es Kontaktinformationen und Dienstleistungen auflistet."},MAP_QUEST:{name:"MapQuest",logo:"https://static-prod.uberall.com/assets/directory_logo/png/MAP_QUEST.png",countries:["us","ca","uk","au","nz","za"],description:"MapQuest ist ein Online-Kartendienst, der Nutzern hilft, Orte zu finden und Wegbeschreibungen zu erhalten. Unternehmen können ihre Standorte hinzufügen, um leichter gefunden zu werden."},THE_SUN:{name:"The Sun",logo:"https://static-prod.uberall.com/assets/directory_logo/png/THE_SUN.png",countries:["us","uk"],description:"The Sun ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_DAILY_RECORD:{name:"The Daily Record",logo:"https://static-prod.uberall.com/assets/directory_logo/png/THE_DAILY_RECORD.png",countries:["uk","im","gg"],description:"The Daily Record ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_EVENING_STANDARD:{name:"The Evening Standard",logo:"https://static-prod.uberall.com/assets/directory_logo/png/THE_EVENING_STANDARD.png",countries:["uk","im","gg"],description:"The Evening Standard ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},THE_INDEPENDENT:{name:"The Independent",logo:"https://static-prod.uberall.com/assets/directory_logo/png/THE_INDEPENDENT.png",countries:["uk"],description:"The Independent ist eine britische Zeitung, die Unternehmen hilft, ihre Dienste durch Werbeanzeigen und Einträge in ihrem Online-Verzeichnis zu bewerben."},MEINUNGSMEISTER:{name:"Meinungsmeister",logo:"https://static-prod.uberall.com/assets/directory_logo/png/MEINUNGSMEISTER.png",countries:["de"]}},search:async function({name:e,street:n=e,city:t="",zip:i="",country:r=null,phone:s="",key:o=null,lat:a=null,lng:l=null}){if(o||(o=uberall.getApiKey()),!e||!i)return{status:"INVALID_PARAMETER",message:"Invalid Validator",response:{zip:"validator.invalid",street:"NOT_NULLABLE",name:"NOT_NULLABLE"}};let c=r||(/[a-z0-9]{3}\s[a-z0-9]{3}/i.test(i)?"UK":4==i.length?"AT":"DE");s.length>4&&(s.replace("+","00").replace(/\D/gi,""),s.startsWith("0043")?c="AT":s.startsWith("0049")?c="DE":s.startsWith("0041")?c="CH":s.startsWith("0044")&&(c="UK"),n==e&&(n=""));let u=null,d=null;try{u=await async function(){return await new Promise(((r,s)=>{!async function(){let s={status:"QUOTA_LIMIT_EXCEED"},u=10;!async function h(g=o){const p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_key:g,name:e,country:c,street:n,city:t,zip:i,lat:a,lng:l})};d=await fetch("https://uberall.com/api/search",p).catch((e=>{})),d&&(s=await d.json()),"QUOTA_LIMIT_EXCEED"==s.status&&u?(u--,0==uberall.apiToUse?uberall.apiToUse=1:uberall.apiToUse=0,setTimeout(h,1e3,uberall.getApiKey())):r(s)}()}()}))}()}catch(e){return null}return u},searchDir:async({id:e,directory:n,token:t,country:i=null,public_key:r=null,directoryLogoSize:s=16,boolTickSize:o=11,infoTextSize:a=9,searchData:l=null,portalTimeout:c=700})=>{r||(r=uberall.getApiKey());let u=null;i||(l||(l=await uberall.getRecheckInfo({public_key:r,recheckid:e,rechecktoken:t})),l&&(i=l.country?l.country.toLowerCase():null)),i||(i="DE");try{u=await async function(){return await new Promise(((i,c)=>{!async function(){let u,d={status:"QUOTA_LIMIT_EXCEED"},h=10;(async function g(p=r){d={status:"QUOTA_LIMIT_EXCEED"};try{u=await fetch(`https://uberall.com/api/search/${e}?public_key=${p}&directory=${n}&token=${t}`),d=await u.json()}catch(e){"string"==typeof e&&e.includes("Timeout")&&(h=0,c(null))}"SUCCESS"==d.status&&(d.response.alreadyManaged||!!d.response.managedLocation?d.response.alreadyManaged=!0:null!=d.response.result.attribution&&null!=d.response.result.attribution&&/movido|aadvanto|spectario/gi.test(d.response.result.attribution.name)&&(l&&d.response.result.name.replace(/[^a-z0-9]/gi,"")==l.name.replace(/[^a-z0-9]/gi,"")&&d.response.result.zip==l.zip&&(d.response.alreadyManaged=!0),d.response.result.attribution));let m={data:d,directoryLogoSize:s,boolTickSize:o,infoTextSize:a};d.html=uberall.getHtml(m),d.id=e,d.token=t,"QUOTA_LIMIT_EXCEED"==d.status&&h?(h--,0==uberall.apiToUse?uberall.apiToUse=1:uberall.apiToUse=0,setTimeout(g,1e3,uberall.getApiKey())):i(d)}).bind(this)()}()}))}.bind(this)()}catch(e){return null}return u},fullCheck:async function({id:e=null,token:n=null,country:t=null,directories:i=[],skip:r=[],public_key:s=null,callback:o=null,name:a=null,street:l=a,city:c=null,zip:u=null,directoryLogoSize:d=16,boolTickSize:h=11,infoTextSize:g=9}){s||(s=uberall.getApiKey());let p=[];return p=await async function(){let p=null;if(e&&n&&(p=await uberall.getRecheckInfo({recheckid:e,rechecktoken:n,public_key:s}),p&&(a=p.name,l=p.street+(p.streetNo&&p.streetNo.length?" "+p.streetNo:""),u=p.zip,c=p.city,t=p.country.toLowerCase())),a&&l&&u&&!e&&!n){let i=await new Promise(((e,n)=>{uberall.search({name:a,street:l,city:c,zip:u,country:t}).then((n=>{e(n)})).catch((e=>n(e)))}));if(!i||"SUCCESS"!=i.status)return i;p=i.response.searchData,e=p.id,n=p.token,t||(t=p.country)}return await new Promise(((s,a)=>{if(e&&n){i&&i.length||(i=Object.keys(this.directoryType));const l=i.filter((e=>!t||this.directoryType[e].countries.includes(t.toLowerCase()))),c=i.filter((e=>!t||this.directoryType[e].countries.includes(t.toLowerCase()))).filter((e=>!r.includes(e)));let u=[],m=0,f=0,b=0,z=0,y=!1;for(const T of i)if(this.directoryType[T].countries.includes(t.toLowerCase()))//!FIXME: TypeError: Cannot read properties of null (reading 'toLowerCase')
try{this.searchDir({id:e,token:n,country:t,directory:T,public_key:uberall.getApiKey(),directoryLogoSize:d,boolTickSize:h,infoTextSize:g,searchData:p}).then((t=>{m++,r.includes(T)||(1==t.html.correct?f++:0==t.html.correct?b++:(t.html.correct,z++),"SUCCESS"==t.status&&(!t.response.alreadyManaged&&!t.response.managedLocation||(y=!0)),o&&o({directory:T,result:t,dirTotal:c.length,dirDone:f+b+z,finished:f+b+z==c.length,correct:f,incorrect:b,missing:z,alreadyManaged:y,id:e,token:n,searchData:p}),u.push(t)),m==l.length&&s(u)}))}catch(e){a(e)}}else a(null)}))}.bind(this)(),p},pdfExport:async function(e,n=2e3,t=null,i=!0,r="#27435c",s=null,o=null,a="Testen Sie Ihre Auffindbarkeit",l="de",c=20){t||(t=uberall.getApiKey());let u=!e.includes("-"),d=null,h="https://uberall.com/api/searchExports";u?d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_key:t,token:[e],customParams:{showgraph:i,bgcolor:r,contactphone:s,contactemail:o,headertext:a,language:l}})}:h+=`/${e}?public_key=${t}`;let g=await fetch(h,d),p=await g.json(),m=u?p.response.result.status:p.response.status,f=u?p.response.result.id:p.response.id;if(d=null,h=`https://uberall.com/api/searchExports/${f}?public_key=${t}`,"SCHEDULED"==m)return await new Promise(((e,i)=>{let r=setInterval((async()=>{if("SCHEDULED"==m&&c&&(g=await fetch(h,d),p=await g.json(),m=p.response.status,c--),"FINISHED"==m&&c){let n=`https://uberall.com/api/searchExports/${f}/download?public_key=${t}`;return clearInterval(r),e(n),n}if(!c)return clearInterval(r),e(null),null}),n)}))},generatePdfName:function({name:e,recheckid:n,zip:t,isrecheck:i=!1}){const r=Math.floor((new Date).getTime()/1e3),s=new Date(1e3*r),o=`${s.getFullYear()}${(s.getMonth()+1).toString().padStart(2,"0")}${s.getDate().toString().padStart(2,"0")}`;return`${i?"status_report":e.substring(0,32)}_${i?n:t}_${o}`},getHtml:function({data:e,mismatchStyle:n="color:#e74c3c; font-weight:bold",directoryLogoSize:t=16,boolTickSize:i=12,infoTextSize:r=12,presentSvg:s="https://static-prod.uberall.com/assets/statusCheck/present.svg",missingSvg:o="https://static-prod.uberall.com/assets/statusCheck/missing.svg",loadingSvg:a="https://www.svgrepo.com/show/48167/wait.svg",includePhoneAndWebsite:l=!0}){let c={dir:null,info:null,times:"-",pictures:"-",correct:!0};if("SUCCESS"==e.status)if(e.response.alreadyManaged)c.logo="https://static-prod.uberall.com/assets/statusCheck/safeguard_active.svg",c.name='<span style="color:#378805; font-weight:bold;">Dieser Standort wurde registriert</span>',c.address='<span style="color:#378805; font-weight:bold;">und wird fortlaufend optimiert.</span>',c.dir=`<img id="UBERALL_Logo" alt="" src="${c.logo}" style="height:${t}px; width:${t}px" />`,c.info=`<span style="color:#378805; font-weight:bold; font-size:12px">${e.response.result.attribution?"Optimiert von "+e.response.result.attribution.name:"Dieser Standort wurde registriert und wird fortlaufend optimiert."}</span>`,c.times="-",c.pictures="-";else{const a=e.response.result,l=a.directoryType,u={url:a.listingUrl,website:{val:a.website,match:"PRESENT"==a.websiteStatus},name:{val:a.name,match:"MATCH"==a.nameStatus},streetAndNo:{val:a.streetAndNo,match:"MATCH"==a.streetAndNoStatus},city:{val:a.city,match:"MATCH"==a.cityStatus},phone:{val:a.phone,match:"PRESENT"==a.phoneStatus},photos:{val:a.photos,match:"PRESENT"==a.photosStatus},times:{val:a.openingHours,match:"PRESENT"==a.openingHoursStatus}};if(c.logo=`https://static-prod.uberall.com/assets/directory_logo/png/${l}.png`,c.name=`<span style="${n}; float:left;">Kein</span>`,c.address=`<span style="${n}; float:left;">Eintrag</span>`,c.dir=`<p style="text-align:center"><img id="${l}_Logo" alt="" src="${c.logo}" style="height:${t}px; width:${t}px" /></br><span id="${l}_Name" style="font-size:${r}px">${this.directoryType[l].name}</span></p>`,c.info=`<span style="${n}; font-size:${r}px;float:left;">Kein Eintrag</span>`,c.times='<span style="text-align:center;float:center">-</td>',c.pictures=`<span id="${l}_Pictures" style="text-align:center;float:center">-</span>`,null!=u.url){c.dir=`<a href="${u.url}" target="_blank"><p style="text-align:center"><img id="${l}_Logo" alt="" src="${c.logo}" style="height:${t}px; width:${t}px" /></br><span id="${l}_Name" style="font-size:${r}px; font-weight:bold">${this.directoryType[l].name}</span></p></a>`;let e=u.name.val,a=u.streetAndNo.val,d=u.city.val,h=u.phone.val,g=u.website.val;u.name.match||(e=`<span style="${n}">`+e+"</span>",c.correct=!1),u.streetAndNo.match||(c.correct=!1,"null"!=a&&""!=a||(a="keine Adresse"),a=`<span style="${n}">`+a+"</span>","null"!=d&&(u.city.match||(d=`<span style="${n}">`+d+"</span>"))),u.phone.match||(c.correct=!1,h=`<span style="${n}">keine Telefonnummer</span>`),u.website.match||(c.correct=!1,g=`<span style="${n}">keine Webseite</span>`),u.photos.match||(c.correct=!1),u.times.match||(c.correct=!1),c.name=`${e}`,c.address=`${a}${"null"!=d?", "+d:""}`,c.info=`<td id="${l}_Info"><span style="line-height:14px;font-size:${r}px;float:left;">${e}<br/>${c.address}<br/>${h}<br/>${g}</span></td>`,c.times=`<td id="${l}_Times style="text-align:center"><img alt="" src="${u.times.match?s:o}" style="height:${i}px; width:${i+1}px" /></td>`,c.pictures=`<td id="${l}_Pictures" style="text-align:center"><img alt="" src="${u.photos.match?s:o}" style="height:${i+1}px; width:${i}px"/></td>`}else c.correct=null}else"INVALID_PARAMETER"==e.status?(c.logo="https://static.thenounproject.com/png/2222119-200.png",c.name="Bitte überprüfen",c.address="ihre Angaben!",c.dir=`<img id="UBERALL_Logo" alt="" src="${c.logo}" style="height:${t}px; width:${t}px" />`,c.info='<span style="color:#161616; font-weight:bold; font-size:12px">Bitte überprüfen sie ihre Angaben!</span>',c.times="-",c.pictures="-",c.correct=null):"QUOTA_LIMIT_EXCEED"==e.status&&(c.logo="https://pic.onlinewebfonts.com/thumbnails/icons_376288.svg",c.name="Quota limit",c.address="exceeded!",c.dir=`<img id="UBERALL_Logo" alt="" src="${c.logo}" style="height:${t}px; width:${t}px" />`,c.info='<span style="color:#161616; font-weight:bold; font-size:12px">Quota limit exceeded.</span>',c.times="-",c.pictures="-",c.correct=null);return c},getHtmlFull:function(e){let n={results:{},correct:0,incorrect:0,missing:0};for(const t in e){let i=this.getHtml({data:e[t]});null==i.correct?n.missing++:i.correct?i.correct&&n.correct++:n.incorrect++,n.results[t]=e[t],n.results[t].html=i}return n},getRecheckInfo:async function({public_key:e=null,recheckid:n,rechecktoken:t}){if(e||(e=uberall.getApiKey()),e&&n&&t){return await new Promise(((i,r)=>{fetch(`https://uberall.com/de/home/statusCheckMessages?public_key=${e}&recheckid=${n}&rechecktoken=${t}`).then((e=>(200!=e.status&&i(null),e.text()))).then((e=>{let n=e.match(/(?<=searchData:\s)(\{.+?\})/gms);if(!n)return i(null);let t=n[0].match(/(?<=\s)\w+(?=:)|(?<=:\s").*(?=["][,\s])/gim),r=null;if(t&&t.length>=18){r={};for(let e=0;e<t.length;e+=2)r[t[e]]=t[e+1].replace(/\\u002f/gim,"/")}i(r)})).catch((e=>{}))}))}},parseAnalysisLink:function(e){let n,t=null;try{n=new URL(e)}catch(e){t=null}finally{if(n){const e=new URLSearchParams(n.search);t={name:e.get("ubname"),street:e.get("ubstreet"),zip:e.get("ubzip"),country:e.get("ubcountry"),token:e.get("ubrechecktoken"),id:e.get("ubrecheckid")}}}return t},nearme360:{messages:async function(e="de",n=2e3){return await new Promise(((t,i)=>{fetch(`https://near-me-check.uberall.com/api/messages?language=${e}&max=${n}`).then((e=>e.json())).then((e=>t(e))).catch((e=>{i(e)}))}))},categories:async function(e="",n="de",t=uberall.getApiKey()){return await new Promise(((i,r)=>{fetch(`https://near-me-check.uberall.com/api/near-me-check/categories?language=${n}&${/^[0-9]+$/.test(e)?"categories":"q"}=${encodeURIComponent(e)}`,{method:"GET",headers:{Publickey:t}}).then((n=>/^[0-9]+$/.test(e)?n.text():n.json())).then((e=>i(e))).catch((e=>{r(e)}))}))},check:async function({categoryId:e="0",country:n=null,name:t=null,streetAndNo:i=null,zip:r=null,id:s=null,token:o=null,checkInterval:a=2e3,checkIntervalTimeout:l=6e4,Publickey:c=uberall.getApiKey()}){if(i||(i=t),!(o&&s||n&&t&&i&&r))return null;if(!o||!s){let a;try{if(a=await fetch("https://near-me-check.uberall.com/api/near-me-check",{method:"POST",headers:{Publickey:c,"Content-Type":"application/json"},body:JSON.stringify({categoryId:e,country:n,name:t,streetAndNo:i,zip:r})}),a=await a.json(),a.hasOwnProperty("error"))throw new Error(`${a.error.message}`)}catch(e){return e}if(!a)return null;if(a.hasOwnProperty("error"))return null;o=a.token,s=a.id}return o&&s?await async function(e,n){let t,i=0,r=!1;return await new Promise(((s,o)=>{let u=setInterval((async()=>{if(!r){let d;try{if(r=!0,d=await fetch(`https://near-me-check.uberall.com/api/near-me-check/${e}?token=${n}`,{method:"GET",headers:{Publickey:c}}),r=!1,!d.ok)throw new Error("err?");d=await d.json()}catch(e){return r=!1,clearInterval(u),o(e)}t=d;let h=!0;for(const e in t.statuses)"IN_PROGRESS"==t.statuses[e]&&(h=!1);if(h||i*a>l)return clearInterval(u),i=0,s(t);i++}}),a)}))}(s,o):null}}};