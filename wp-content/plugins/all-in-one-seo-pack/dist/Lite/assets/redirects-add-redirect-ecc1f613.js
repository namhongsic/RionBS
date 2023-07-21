import{n,V as o}from"./js/_plugin-vue2_normalizer.61652a7c.js";import"./js/index.46447f5c.js";import"./js/index.4b67d3e2.js";import{g as d,m as i,s as c}from"./js/index.ec9852b3.js";import{C as l}from"./js/Portal.79020666.js";import{C as p}from"./js/Index.31a9bad1.js";import{i as m}from"./js/isEmpty.5206d750.js";import"./js/client.e62d6c37.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/translations.c394afe3.js";import"./js/default-i18n.3a91e0e5.js";import"./js/index.1edc4884.js";import"./js/helpers.de7566d0.js";import"./js/constants.0d8c074c.js";import"./js/isArrayLikeObject.9b4b678d.js";import"./js/portal-vue.esm.98f2e05b.js";import"./js/Caret.d93b302e.js";import"./js/vuex.esm.8fdeb4b6.js";import"./js/Index.5f7ddb17.js";import"./js/WpTable.e2f412d1.js";import"./js/attachments.437fe1f4.js";import"./js/cleanForSlug.51ef7354.js";import"./js/html.14f2a8b9.js";import"./js/JsonValues.870a4901.js";import"./js/SaveChanges.e40a9083.js";import"./js/strings.aee612e0.js";import"./js/isString.0b99231f.js";import"./js/ProBadge.66f48bdc.js";import"./js/External.4c957e9a.js";import"./js/Exclamation.fd45a7b0.js";import"./js/Checkbox.60ba2f56.js";import"./js/Checkmark.f26f6201.js";import"./js/Row.830f6397.js";import"./js/Gear.184e0c65.js";import"./js/Slide.15a07930.js";import"./js/Tooltip.68a8a92b.js";import"./js/Plus.6984df43.js";import"./js/_getTag.7235c98a.js";const u={components:{CoreModalPortal:l,CoreAddRedirection:p},data(){return{urls:[],display:!1,target:null,loading:!1,strings:{modalHeader:this.$t.__("Add a Redirect",this.$td),redirectAdded:this.$t.sprintf(this.$t.__('%2$sYour redirect was added and you may edit it <a href="%1$s" target="_blank">here</a>.%3$s',this.$td),this.$aioseo.urls.aio.redirects,"<strong>","</strong>")},watchClasses:["aioseo-redirects-slug-changed","aioseo-redirects-trashed-post"]}},computed:{classSelectors(){return"."+this.watchClasses.join(", .")}},methods:{reload(){var t,r;this.display=!1;const e=(r=(t=this.target)==null?void 0:t.parentElement)==null?void 0:r.parentElement;if(e&&(e.classList.contains("components-notice__content")||e.classList.contains("notice"))){e.innerHTML="<p>"+this.strings.redirectAdded+"</p>";return}this.target.outerHTML=this.strings.redirectAdded},loadRedirect(e){this.loading=!0,this.$http.get(this.$links.restUrl("redirects/manual-redirects/"+e)).then(t=>{this.urls=t.body.redirects,this.loading=!1}).catch(t=>console.log("Redirect modal failed to load the redirect data.",t))},preloadRedirect(){const e=document.querySelector(this.classSelectors);if(e){const t=this.getElementRedirectHash(e);if(!t)return;this.loadRedirect(t)}},watchClicks(){document.body.onclick=e=>{var r;if(!((r=e.target)!=null&&r.classList))return;let t=!1;this.watchClasses.forEach(s=>{e.target.classList.contains(s)&&(t=!0)}),t&&(e.preventDefault(),this.target=e.target,this.display=!0,m(this.url)&&this.loadRedirect(this.getElementRedirectHash(this.target)))}},getElementRedirectHash(e){return new URLSearchParams(e.href).get("aioseo-manual-urls")}},async created(){const{addons:e,redirects:t}=await d(this.$http);this.$set(this.$store.state,"addons",i([...this.$store.state.addons],[...e])),this.$set(this.$store.state,"redirects",i({...this.$store.state.redirects},{...t})),this.preloadRedirect(),this.watchClicks(),this.$bus.$on("wp-core-notice-created",()=>{this.preloadRedirect()})}};var h=function(){var t=this,r=t._self._c;return t.$addons.isActive("aioseo-redirects")?r("div",{staticClass:"aioseo-redirects-add-redirect-standalone"},[t.display?r("core-modal-portal",{attrs:{classes:["aioseo-redirects","modal"]},on:{close:function(s){t.display=!1}}},[r("div",{attrs:{slot:"headerTitle"},slot:"headerTitle"},[t._v(" "+t._s(t.strings.modalHeader)+" ")]),r("div",{attrs:{slot:"body"},slot:"body"},[t.loading?t._e():r("core-add-redirection",{attrs:{urls:t.urls,target:t.urls[0].target?t.urls[0].target:"/",disableSource:!0},on:{"added-redirect":t.reload}})],1)]):t._e()],1):t._e()},_=[],f=n(u,h,_,!1,null,null,null,null);const g=f.exports,a=document.createElement("div");a.id="aioseo-redirects-add-redirect-standalone";document.body.appendChild(a);o.prototype.$aioseo=window.aioseo;new o({store:c,render:e=>e(g)}).$mount("#aioseo-redirects-add-redirect-standalone");
