import{bX as T,j as r,aw as E,O as U,r as u,cV as W,n as z,T as b,N as G,C as Q,cW as Y,aB as h,as as X,w as k,m as P,b1 as Z,cX as H,b_ as K,o as V,ak as y,b0 as A,u as N,aY as J,aD as O,aC as ee,bO as D,d as f,cR as te,cS as w}from"./main-6b875756.js";import{S as re,l as se,B as F}from"./billing-redirect-message-786c1702.js";import"./TaskAlt-dfd184ee.js";function S({children:e}){const{isLoggedIn:t,isSubscribed:s}=T();return t?t&&s?r.jsx(E,{to:"/billing",replace:!0}):e||r.jsx(U,{}):r.jsx(E,{to:"/register",replace:!0})}function C({children:e}){const[t,s]=e;return u.useEffect(()=>{W("be.onboarding.selected")},[]),r.jsxs(u.Fragment,{children:[r.jsx(z,{children:r.jsx(b,{message:"Checkout"})}),r.jsx(G,{size:"sm",color:"transparent",className:"z-10 mb-20 md:mb-0",textColor:"text-main",logoColor:"dark",darkModeColor:"transparent",menuPosition:"checkout-page-navbar"}),r.jsxs("div",{className:"md:flex w-full mx-auto justify-between px-20 md:px-0 md:pt-128 md:max-w-950",children:[r.jsx("div",{className:"hidden md:block fixed right-0 top-0 w-1/2 h-full bg-alt shadow-[15px_0_30px_0_rgb(0_0_0_/_18%)]"}),r.jsxs("div",{className:"md:w-400 overflow-hidden",children:[t,r.jsx(Q,{menu:"checkout-page-footer",className:"text-xs mt-50 text-muted overflow-x-auto"}),r.jsx("div",{className:"mt-40",children:r.jsx(Y,{})})]}),r.jsx("div",{className:"hidden md:block w-384",children:r.jsx("div",{className:"relative z-10",children:s})})]})]})}const I=e=>`billing/products/${e}`;function ne(){var c;const{productId:e,priceId:t}=h(),s=X([I(e)],()=>ae(e),{keepPreviousData:!0,enabled:e!=null&&t!=null}),n=(c=s.data)==null?void 0:c.product,i=(n==null?void 0:n.prices.find(a=>a.id===parseInt(t)))||(n==null?void 0:n.prices[0]);return{status:s.status,product:n,price:i}}function ae(e){return k.get(I(e)).then(t=>t.data)}function _({showBillingLine:e=!0}){const{status:t,product:s,price:n}=ne();return t==="error"||t!=="loading"&&(!s||!n)?null:r.jsxs("div",{children:[r.jsx("h2",{className:"text-2xl mb-30",children:r.jsx(b,{message:"Summary"})}),t==="loading"?r.jsx(ce,{},"loading-skeleton"):r.jsx(ie,{product:s,price:n,showBillingLine:e})]})}function ie({product:e,price:t,showBillingLine:s}){return r.jsxs(P.div,{children:[r.jsx("div",{className:"text-xl font-semibold mb-6",children:e.name}),e.description&&r.jsx("div",{className:"text-sm text-muted",children:e.description}),r.jsx(Z,{priceClassName:"font-bold text-4xl",periodClassName:"text-muted text-xs",variant:"separateLine",price:t,className:"mt-32"}),r.jsx(H,{product:e}),s&&r.jsxs("div",{className:"flex items-center justify-between gap-24 border-t pt-24 mt-32 font-medium",children:[r.jsx("div",{children:r.jsx(b,{message:"Billed today"})}),r.jsx("div",{children:r.jsx(K,{value:t.amount,currency:t.currency})})]})]})}function ce(){return r.jsxs(P.div,{...V,className:"max-w-180",children:[r.jsx(y,{className:"text-xl mb-6"}),r.jsx(y,{className:"text-sm"}),r.jsx(y,{className:"text-4xl mt-32"})]})}/*!
 * paypal-js v6.0.1 (2023-07-19T21:00:13.568Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){var s=document.querySelector('script[src="'.concat(e,'"]'));if(s===null)return null;var n=M(e,t),i=s.cloneNode();if(delete i.dataset.uidAuto,Object.keys(i.dataset).length!==Object.keys(n.dataset).length)return null;var c=!0;return Object.keys(i.dataset).forEach(function(a){i.dataset[a]!==n.dataset[a]&&(c=!1)}),c?s:null}function ue(e){var t=e.url,s=e.attributes,n=e.onSuccess,i=e.onError,c=M(t,s);c.onerror=i,c.onload=n,document.head.insertBefore(c,document.head.firstElementChild)}function le(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseUrl&&(t=e.sdkBaseUrl,delete e.sdkBaseUrl);var s=e,n=Object.keys(s).filter(function(a){return typeof s[a]<"u"&&s[a]!==null&&s[a]!==""}).reduce(function(a,o){var l=s[o].toString();return o=de(o),o.substring(0,4)==="data"?a.dataAttributes[o]=l:a.queryParams[o]=l,a},{queryParams:{},dataAttributes:{}}),i=n.queryParams,c=n.dataAttributes;return i["merchant-id"]&&i["merchant-id"].indexOf(",")!==-1&&(c["data-merchant-id"]=i["merchant-id"],i["merchant-id"]="*"),{url:"".concat(t,"?").concat(fe(i)),dataAttributes:c}}function de(e){var t=function(s,n){return(n?"-":"")+s.toLowerCase()};return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,t)}function fe(e){var t="";return Object.keys(e).forEach(function(s){t.length!==0&&(t+="&"),t+=s+"="+e[s]}),t}function pe(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}function M(e,t){t===void 0&&(t={});var s=document.createElement("script");return s.src=e,Object.keys(t).forEach(function(n){s.setAttribute(n,t[n]),n==="data-csp-nonce"&&s.setAttribute("nonce",t["data-csp-nonce"])}),s}function me(e,t){if(t===void 0&&(t=Promise),q(e,t),typeof document>"u")return t.resolve(null);var s=le(e),n=s.url,i=s.dataAttributes,c=i["data-namespace"]||"paypal",a=R(c);return oe(n,i)&&a?t.resolve(a):be({url:n,attributes:i},t).then(function(){var o=R(c);if(o)return o;throw new Error("The window.".concat(c," global variable is not available."))})}function be(e,t){t===void 0&&(t=Promise),q(e,t);var s=e.url,n=e.attributes;if(typeof s!="string"||s.length===0)throw new Error("Invalid url.");if(typeof n<"u"&&typeof n!="object")throw new Error("Expected attributes to be an object.");return new t(function(i,c){if(typeof document>"u")return i();ue({url:s,attributes:n,onSuccess:function(){return i()},onError:function(){var a=new Error('The script "'.concat(s,'" failed to load.'));return window.fetch?fetch(s).then(function(o){return o.status===200&&c(a),o.text()}).then(function(o){var l=pe(o);c(new Error(l))}).catch(function(o){c(o)}):c(a)}})})}function R(e){return window[e]}function q(e,t){if(typeof e!="object"||e===null)throw new Error("Expected an options object.");if(typeof t<"u"&&typeof t!="function")throw new Error("Expected PromisePonyfill to be a function.")}function xe({productId:e,priceId:t}){const{data:s}=A(),n=u.useRef(!1),i=u.useRef(!1),[c,a]=u.useState(!1),o=u.useRef(null),{base_url:l,billing:{stripe:{enable:p},paypal:{enable:x,public_key:d}}}=N();return u.useEffect(()=>{!x||!d||n.current||(me({clientId:d,intent:"subscription",vault:!0,disableFunding:p?"card":void 0}).then(()=>{a(!0)}),n.current=!0)},[d,x,p]),u.useEffect(()=>{var L;if(!c||!((L=window.paypal)!=null&&L.Buttons)||!o.current||!(s!=null&&s.products.length)||!e||!t||i.current)return;const g=s.products.find(m=>m.id===parseInt(e)),j=g==null?void 0:g.prices.find(m=>m.id===parseInt(t));window.paypal.Buttons({style:{label:"pay"},createSubscription:(m,v)=>v.subscription.create({application_context:{shipping_preference:"NO_SHIPPING"},plan_id:j==null?void 0:j.paypal_id}),onApprove:(m,v)=>(v.redirect(`${l}/checkout/${e}/${t}/paypal/done?subscriptionId=${m.subscriptionID}&status=success`),Promise.resolve()),onError:m=>{location.href=`${l}/checkout/${e}/${t}/paypal/done?status=error`}}).render(o.current).then(()=>{i.current=!0})},[e,t,s,c,l]),{paypalElementRef:o,stripeIsEnabled:d!=null&&x}}function he(){var l;const{productId:e,priceId:t}=h(),s=A(),{paypalElementRef:n}=xe({productId:e,priceId:t}),{base_url:i,billing:{stripe:c}}=N();if(s.isLoading)return r.jsx(J,{});const a=(l=s.data)==null?void 0:l.products.find(p=>p.id===parseInt(e)),o=a==null?void 0:a.prices.find(p=>p.id===parseInt(t));return!a||!o||s.status==="error"?r.jsx(E,{to:"/pricing",replace:!0}):r.jsxs(C,{children:[r.jsxs(u.Fragment,{children:[r.jsx("h1",{className:"text-4xl mb-40",children:r.jsx(b,{message:"Checkout"})}),c.enable?r.jsxs(u.Fragment,{children:[r.jsx(re,{productId:e,submitLabel:r.jsx(b,{message:"Upgrade"}),type:"subscription",returnUrl:`${i}/checkout/${e}/${t}/stripe/done`}),r.jsx(ge,{})]}):null,r.jsx("div",{ref:n}),r.jsx("div",{className:"text-xs text-muted mt-30",children:r.jsx(b,{message:"You’ll be charged until you cancel your subscription. Previous charges won’t be refunded when you cancel unless it’s legally required. Your payment data is encrypted and secure. By subscribing your agree to our terms of service and privacy policy."})})]}),r.jsx(_,{})]})}function ge(){return r.jsx("div",{className:"relative text-center my-20 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-full before:bg-divider",children:r.jsx("span",{className:"bg relative z-10 px-10 text-sm text-muted",children:r.jsx(b,{message:"or"})})})}function je(){const{invalidateBootstrapData:e}=O(),{productId:t,priceId:s}=h(),n=ee(),{billing:{stripe_public_key:i}}=N(),[c]=D(),a=c.get("payment_intent_client_secret"),[o,l]=u.useState(),p=u.useRef();return u.useEffect(()=>{p.current||(se(i).then(async x=>{if(!x||!a){l(B());return}x.retrievePaymentIntent(a).then(({paymentIntent:d})=>{(d==null?void 0:d.status)==="succeeded"&&ve(d.id).then(()=>{e()}),l(B(d==null?void 0:d.status,t,s))})}),p.current=!0)},[i,a,s,t,e]),a?r.jsxs(C,{children:[r.jsx(F,{config:o}),r.jsx(_,{showBillingLine:!1})]}):(n("/"),null)}function B(e,t,s){switch(e){case"succeeded":return{message:f("Subscription successful!"),status:"success",buttonLabel:f("Return to site"),link:"/billing"};case"processing":return{message:f("Payment processing. We'll update you when payment is received."),status:"success",buttonLabel:f("Return to site"),link:"/billing"};case"requires_payment_method":return{message:f("Payment failed. Please try another payment method."),status:"error",buttonLabel:f("Go back"),link:$(t,s)};default:return{message:f("Something went wrong"),status:"error",buttonLabel:f("Go back"),link:$(t,s)}}}function $(e,t){return e&&t?`/buy/${e}/${t}`:"/"}function ve(e){return k.post("billing/stripe/store-subscription-details-locally",{payment_intent_id:e})}function ye(){const{invalidateBootstrapData:e}=O(),{productId:t,priceId:s}=h(),[n]=D(),[i,c]=u.useState();return u.useEffect(()=>{const a=n.get("subscriptionId"),o=n.get("status");c(we(o,t,s)),a&&o==="success"&&Ee(a).then(()=>{e()})},[s,t,n,e]),r.jsxs(C,{children:[r.jsx(F,{config:i}),r.jsx(_,{showBillingLine:!1})]})}function we(e,t,s){switch(e){case"success":return{message:f("Subscription successful!"),status:"success",buttonLabel:f("Return to site"),link:"/billing"};default:return{message:f("Something went wrong. Please try again."),status:"error",buttonLabel:f("Go back"),link:Se(t,s)}}}function Se(e,t){return e&&t?`/buy/${e}/${t}`:"/"}function Ee(e){return k.post("billing/paypal/store-subscription-details-locally",{paypal_subscription_id:e})}function _e(){return r.jsxs(te,{children:[r.jsx(w,{path:":productId/:priceId",element:r.jsx(S,{children:r.jsx(he,{})})}),r.jsx(w,{path:":productId/:priceId/stripe/done",element:r.jsx(S,{children:r.jsx(je,{})})}),r.jsx(w,{path:":productId/:priceId/paypal/done",element:r.jsx(S,{children:r.jsx(ye,{})})})]})}export{_e as default};
//# sourceMappingURL=checkout-routes-810650e5.js.map
