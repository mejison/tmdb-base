import{r as i,j as e,n,T as m}from"./main-6b875756.js";import{u as p,R as l,A as d,V as x}from"./admin-routes-05d7b89a.js";import{D as c}from"./user-profile-link-7ae14240.js";import"./OpenInNew-3f8970f7.js";import"./use-resume-subscription-7227434e.js";function f(){const[s,a]=i.useState(()=>c[2].getRangeValue()),{isLoading:o,data:t}=p({dateRange:s}),r=e.jsx(m,{message:"Visitors report"});return e.jsxs("div",{className:"min-h-full gap-12 md:gap-24 p-12 md:p-24 overflow-x-hidden",children:[e.jsxs("div",{className:"md:flex items-center justify-between gap-24 mb-24",children:[e.jsx(n,{children:r}),e.jsx("h1",{className:"mb-24 md:mb-0 text-3xl font-light",children:r}),e.jsx(l,{value:s,onChange:a})]}),e.jsx(d,{report:t==null?void 0:t.headerReport,dateRange:s}),e.jsx(x,{report:t==null?void 0:t.visitorsReport,isLoading:o})]})}export{f as default};
//# sourceMappingURL=admin-report-page-c10fdba9.js.map