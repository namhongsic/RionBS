import"./WpTable.e2f412d1.js";import"./default-i18n.3a91e0e5.js";import"./constants.0d8c074c.js";import{n as r}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.ec9852b3.js";import"./SaveChanges.e40a9083.js";import{C as l,a as u,S as p}from"./LicenseKeyBar.f7493613.js";import{m as _,c as d,a,b as o}from"./vuex.esm.8fdeb4b6.js";import{U as g}from"./AnimatedNumber.932b583a.js";import{S as i}from"./Caret.d93b302e.js";import{S as m}from"./LogoGear.16108a75.js";import{S as h}from"./Logo.8785cc9f.js";import{a as f}from"./index.4b67d3e2.js";const v={components:{UtilAnimatedNumber:g},props:{percentage:Number},data(){return{fromNumber:0,number:0}},watch:{percentage:{deep:!0,handler(s){s!==this.number&&(this.fromNumber=this.number,this.number=s)}}},mounted(){this.number=this.percentage}};var $=function(){var e=this,t=e._self._c;return t("div",{staticClass:"aioseo-percent-circle"},[t("transition",{attrs:{name:"fill-percent-circle"}},[t("svg",{staticClass:"aioseo-seo-site-score-svg",attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{staticClass:"aioseo-percent-circle-score__background",attrs:{stroke:"#BFD6F7","stroke-width":"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}}),t("circle",{staticClass:"aioseo-percent-circle-score__circle",attrs:{stroke:"#005AE0","stroke-width":"2","stroke-dasharray":`${e.percentage},100`,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}})])]),t("div",{staticClass:"aioseo-percent-circle-percent"},[t("div",[t("util-animated-number",{attrs:{number:e.number,"from-number":e.fromNumber}}),e._v("% ")],1)])],1)},k=[],C=r(v,$,k,!1,null,null,null,null);const c=C.exports;const b={components:{CorePercentCircle:c,SvgClose:i},props:{strings:Object,percentage:Number}};var y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"aioseo-processing-popup"},[t("core-percent-circle",{attrs:{percentage:e.percentage}}),t("div",[t("strong",[e._v(e._s(e.strings.header))]),t("br"),e._v(e._s(e.strings.description)+" ")]),t("svg-close",{nativeOn:{click:function(n){return e.$emit("close")}}})],1)},S=[],P=r(b,y,S,!1,null,null,null,null);const x=P.exports;const w={components:{SvgAioseoLogoGear:m,SvgClose:i},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO",this.$t.__("Free",this.$td)),url:this.$links.utmUrl("lite-upgrade-bar"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro")}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a> <a href="%1$s" target="_blank" class="text-white upgrade-arrow">&rarr;</a></strong>',this.strings.url,this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("You're using %1$s. To unlock more features, consider %2$s",this.$td),this.strings.boldText,this.link)}},methods:{..._(["hideUpgradeBar"]),processHideUpgradeBar(){document.body.classList.remove("aioseo-has-bar"),this.hideUpgradeBar()}},mounted(){document.body.classList.add("aioseo-has-bar")}};var A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"aioseo-upgrade-bar"},[t("div",{staticClass:"upgrade-text"},[t("svg-aioseo-logo-gear"),t("div",{domProps:{innerHTML:e._s(e.upgradeText)}})],1),t("svg-close",{on:{click:e.processHideUpgradeBar}})],1)},B=[],N=r(w,A,B,!1,null,null,null,null);const U=N.exports;const H={props:{hero:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fullWidth:Boolean,small:Boolean},computed:{classes(){let s=this.fluid?"aioseo-container-fluid ":"aioseo-container ";return s+=this.hero?"aioseo-hero ":"",s+=this.fullWidth?"full-width ":"",s+=this.small?"small ":"",s}}};var F=function(){var e=this,t=e._self._c;return t("div",{class:e.classes},[e._t("default")],2)},L=[],M=r(H,F,L,!1,null,null,null,null);const T=M.exports,R={};var V=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"aioseo-notifications",attrs:{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V13.3333H7.13333C7.70833 14.325 8.775 15 10.0083 15C11.2417 15 12.3 14.325 12.8833 13.3333H15.8333V15.8333ZM11.675 11.6667H15.8333V4.16667H4.16667V11.6667H8.34167C8.34167 12.5833 9.09167 13.3333 10.0083 13.3333C10.925 13.3333 11.675 12.5833 11.675 11.6667Z",fill:"currentColor"}})])},O=[],E=r(R,V,O,!1,null,null,null,null);const G=E.exports;const W={components:{CoreApiBar:l,CoreLicenseKeyBar:u,CorePercentCircle:c,CoreProcessingPopup:x,CoreUpgradeBar:U,GridContainer:T,SvgAioseoLogo:h,SvgCircleQuestionMark:f,SvgNotifications:G},mixins:[p],props:{fullWidth:Boolean,small:Boolean,pageName:String,actions:{type:Boolean,default(){return!0}},upgradeBar:{type:Boolean,default(){return!0}}},data(){return{activeScan:null,strings:{linkAssistantPopup:{header:this.$t.__("Link suggestions are being processed.",this.$td),description:this.$t.__("Depending on the number of posts being scanned, this process can take some time. You can safely leave this page and check back later.",this.$td)},searchStatisticsPopup:{header:this.$t.__("Search statistics are being fetched.",this.$td),description:this.$t.__("Depending on the amount of content on your site, this process can take some time. You can safely leave this page and check back later.",this.$td)}}}},computed:{...d(["settings","activeNotificationsCount","isUnlicensed","helpPanel"]),...a(["notifications","pong"]),...a("linkAssistant",["suggestionsScan"]),percentage(){switch(this.activeScan){case"linkAssistant":return this.suggestionsScan.percent;default:return null}},showPopup(){switch(this.activeScan){case"linkAssistant":return this.suggestionsScan.showProcessingPopup&&this.suggestionsScan.percent!==100;default:return null}},popupStrings(){switch(this.activeScan){case"linkAssistant":return this.strings.linkAssistantPopup;default:return null}}},methods:{...o(["toggleNotifications"]),...o("linkAssistant",["toggleProcessingPopup"]),debounce(s){let e;return(...t)=>{e&&cancelAnimationFrame(e),e=requestAnimationFrame(()=>{s(...t)})}},storeScroll(){document.documentElement.dataset.scroll=window.scrollY},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},checkForActiveScan(){this.$aioseo.page==="link-assistant"&&this.$addons.isActive("aioseo-link-assistant")&&!this.$addons.requiresUpgrade("aioseo-link-assistant")&&this.$addons.hasMinimumVersion("aioseo-link-assistant")&&(this.$route.name==="links-report"||this.$route.name==="overview")&&this.suggestionsScan.percent!==100&&(this.activeScan="linkAssistant")},toggleCirclePopup(){switch(this.activeScan){case"linkAssistant":return this.toggleProcessingPopup();default:return null}}},mounted(){this.storeScroll(),document.addEventListener("scroll",this.debounce(this.storeScroll),{passive:!0}),this.checkForActiveScan()}};var Y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"aioseo-header"},[!e.$isPro&&e.settings.showUpgradeBar&&e.upgradeBar&&e.pong?t("core-upgrade-bar"):e._e(),e.$isPro&&e.isUnlicensed&&e.pong?t("core-license-key-bar"):e._e(),e.pong?e._e():t("core-api-bar"),t("grid-container",{attrs:{"full-width":e.fullWidth,small:e.small}},[t("div",{staticClass:"aioseo-header-content"},[e.isUnlicensed?t("a",{attrs:{href:e.$links.utmUrl("header-logo"),target:"_blank"}},[t("svg-aioseo-logo")],1):e._e(),e.isUnlicensed?e._e():t("svg-aioseo-logo"),e.pageName?t("span",{staticClass:"spacer"}):e._e(),e.pageName?t("span",{staticClass:"page-name"},[e._v(e._s(e.pageName))]):e._e(),e.actions?t("div",{staticClass:"header-actions"},[t("transition",{attrs:{name:"fade-percent-circle"}},[e.activeScan&&e.showPopup?t("core-percent-circle",{attrs:{percentage:e.percentage},nativeOn:{click:function(n){return e.toggleCirclePopup.apply(null,arguments)}}}):e._e()],1),t("transition",{attrs:{name:"fade-processing-popup"}},[e.showPopup?t("core-processing-popup",{attrs:{strings:e.popupStrings,percentage:e.percentage},on:{close:e.toggleCirclePopup}}):e._e()],1),t("span",{staticClass:"round",on:{click:function(n){return n.stopPropagation(),e.toggleNotifications.apply(null,arguments)}}},[e.activeNotificationsCount?t("span",{staticClass:"round number"},[e._v(" "+e._s(e.activeNotificationsCount>9?"!":e.activeNotificationsCount)+" ")]):e._e(),t("svg-notifications",{on:{click:function(n){return n.stopPropagation(),e.toggleNotifications.apply(null,arguments)}}})],1),e.helpPanel.docs&&Object.keys(e.helpPanel.docs).length?t("span",{staticClass:"round",on:{click:function(n){return n.stopPropagation(),e.toggleModal.apply(null,arguments)}}},[t("svg-circle-question-mark")],1):e._e()],1):e._e()],1)])],1)},q=[],D=r(W,Y,q,!1,null,null,null,null);const ae=D.exports;export{ae as C,T as G,U as a,x as b};