(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(20),i=n.n(s),r=(n(29),n(7)),o=(n(14),Object(a.createContext)()),l=n(1);function d(){var e=Object(a.useContext)(o),t=(e.gameState,e.setGameState);return Object(l.jsxs)("div",{className:"Menu",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[Object(l.jsx)("h4",{children:"Swipe through the definitions"}),Object(l.jsx)("button",{onClick:function(){t("defRater")},children:"Push to start"})]})}var u=[{prompt:"long arm of chromosome",answers:[{id:1,value:"q arm"},{id:2,value:"p arm"},{id:3,value:"telomere"}],correctId:1,activeId:null,kind:"mcq_fitb"},{prompt:"humans have 46 _____",answers:[{id:1,value:"autosomes"},{id:2,value:"chromosomes"},{id:3,value:"base pairs"}],correctId:2,activeId:null,kind:"mcq"},{prompt:"chromosomes are classified according to the relative position of their ________",answers:[{id:1,value:"karyotype"},{id:2,value:"centromeres"},{id:3,value:"chromosome rearrangement"}],correctId:2,activeId:null}];function h(){var e=Object(a.useContext)(o),t=e.score,n=e.setScore,c=e.setGameState,s=Object(a.useState)(0),i=Object(r.a)(s,2),d=i[0],h=i[1],m=Object(a.useState)(""),j=Object(r.a)(m,2),b=j[0],f=j[1],p=Object(a.useState)(10),v=Object(r.a)(p,2),O=v[0],g=v[1];return Object(l.jsxs)("div",{className:"Quiz",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[Object(l.jsx)("h1",{children:u[d].prompt}),Object(l.jsx)("div",{className:"options",children:u[d].answers.map((function(e){return Object(l.jsx)("button",{className:e.className+(e.id===O?" active_item":""),onClick:function(){var t;f(e.id),t=e.id,console.log("clicked",t),g(t)},children:e.value},e.id)}))}),d==u.length-1?Object(l.jsx)("button",{onClick:function(){return u[d].correctId==b&&n(t+1),g(10),void c("endScreen")},children:"Finish Quiz"}):Object(l.jsx)("button",{onClick:function(){u[d].correctId==b&&n(t+1),h(d+1),g(10)},children:"Next Question"})]})}var m=n(24),j=[{term:"interphase",defs:[{id:1,value:"phase before mitosis; growth of cell and preparation for division",grade:"hs"},{id:2,value:"the part of the cell cycle is not dividing",grade:"hs"},{id:3,value:"cell grows, performs its normal functions, and prepares for division",grade:"hs"},{id:4,value:"cell grows, dna is copied and new organelles form",grade:"college_bound"},{id:5,value:"cell preparing for mitosis, chromosomes not discernible, nucloulus visible",grade:"hs"}]},{term:"chromosome",defs:[{id:1,value:"a threadlike, gene-carrying structure found in the nuclus, each chromosome consists of one very long dna molecule plus associated proteins",grade:"college_bound"},{id:2,value:"condensed threads of genetic material formed from chromatin as a cell prepares to divide",grade:"hs"},{id:3,value:"in a eukarayotic cell, one of the structures in the nucleus that are made up of dna and protein; in a prokaryotic cell, the main ring of dna",grade:"college"},{id:4,value:"dna coiled around and supported by proteins, found in the nucleus of the cell",grade:"hs"},{id:5,value:"coiled chromatin, 46 are found in human body cells",grade:"hs"},{id:6,value:"a single piece of coiled dna found in the cells; contains genes that encode traits",grade:"hs"},{id:7,value:"a single long molecule of dna wound around proteins called histones",grade:"college"}]},{term:"mitosis",defs:[{id:1,value:"splitting of the nucleus",grade:"hs"},{id:2,value:"cell division in which the nucelus divides into nuclei containing the same number of chromasomes",grade:"college_bound"},{id:3,value:"part of eukaryotic cell division during which the cell nucleus divides",grade:"college_bound"},{id:4,value:"a process of nucleur division in eukaryotic cells conventionally divided into five stages: prophase, prometaphase, metaphase, anaphase and telophase, mitosis conserves chromsome number by allocating replicated chromsomes equally to each of the daughter nucleii",grade:"college"},{id:5,value:"a process of asexual production in eukaryotic cells",grade:"college_bound"},{id:6,value:"division of the nucleus or chromosomes; creates two genetically identical cells",grade:"college_bound"},{id:7,value:"1 diploid parent cell splits into 2 identical diploid daughter cells",grade:"college"}]}],b=n(18),f=n(10),p=n(6);function v(){var e=Object(a.useContext)(o),t=(e.gameState,e.setGameState),n=e.activeTerm,c=(e.setActiveTerm,e.likedDefs),s=e.setLikedDefs,i=Object(a.useState)(0),d=Object(r.a)(i,2),u=d[0],h=d[1],v=j.filter((function(e){return e.term==n}))[0].defs,O=function(e){e&&s([].concat(Object(m.a)(c),[v[u].value])),u<v.length-1?h(u+1):(console.log("ended"),t("defEndScreen"))};return Object(l.jsxs)("div",{className:"Quiz",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[Object(l.jsx)("h4",{className:"p-2",children:n}),Object(l.jsx)("p",{className:"p-2",children:v[u].value}),Object(l.jsxs)(f.a,{children:[Object(l.jsx)(p.a,{className:"p-2",children:Object(l.jsx)(b.b,{onClick:function(){return O(!0)}})}),Object(l.jsx)(p.a,{className:"p-2",children:Object(l.jsx)(b.a,{onClick:function(){return O(!1)}})})]})]})}function O(){var e=Object(a.useContext)(o),t=e.score,n=e.setScore,c=e.setGameState;return Object(l.jsxs)("div",{className:"endScreen",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[Object(l.jsx)("h1",{children:"Quiz Complete! Nice work"}),Object(l.jsxs)("h3",{children:[t," / ",u.length," Correct!"]}),Object(l.jsx)("button",{onClick:function(){return n(0),void c("menu")},children:"Restart Quiz"}),Object(l.jsx)("button",{onClick:function(){c("none")},children:"Close Quiz"})]})}var g=n(22),x=n(13),y=n(21),S=n(11),k=n(23);function w(){var e=Object(a.useContext)(o),t=(e.gameState,e.setGameState),n=e.activeTerm,c=e.setActiveTerm,s=e.likedDefs,i=e.setLikedDefs,r=j.filter((function(e){return e.term==n}))[0].defs,d=function(){t("none"),c("none"),i([])};return Object(l.jsxs)("div",{className:"DefEndScreen",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[Object(l.jsx)("h3",{className:"p-2",children:"Ain't learning fun?"}),Object(l.jsxs)("p",{children:["You studied ",r.length," definitions for ",n,"."]}),Object(l.jsx)("h5",{children:"Click to add ones you liked to a new set"}),Object(l.jsx)("ul",{children:s.map((function(e){return Object(l.jsx)(k.a.Check,{type:"checkbox",label:e})}))}),Object(l.jsxs)(f.a,{children:[Object(l.jsx)(p.a,{children:Object(l.jsx)("button",{onClick:function(){return d()},children:"Save 'em"})}),Object(l.jsx)(p.a,{children:Object(l.jsx)("button",{onClick:function(){return d()},children:"Back to Set"})})]})]})}var N=n(34);var C=function(){var e=Object(a.useState)("hidden"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],m=i[1],j=Object(a.useState)([]),b=Object(r.a)(j,2),k=b[0],C=b[1],_=Object(a.useState)(0),D=Object(r.a)(_,2),I=(D[0],D[1],Object(a.useState)(!1)),T=Object(r.a)(I,2),A=T[0],z=T[1],F=Object(a.useState)([{term:"interphase",def:"phase of the cell cycle where the cell grows, replicates DNA then grows again",isScrambled:!1},{term:"chromosome",def:"the main ring of DNA in a prokaryotic cell or one of multiple structures made of DNA in a eukaryotic cell",isScrambled:!1},{term:"mitosis",def:"cell division in a eukaryote that produces two new nuclei which each have the same number of chromosomes as the original cell",isScrambled:!1}]),Q=Object(r.a)(F,2),G=Q[0],q=Q[1];return Object(a.useEffect)((function(){var e=G.map((function(e){var t=e,n=N(e.def.split(" "));return t.scrambled=n.join(" "),t}));q(e)}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Unit Four Cell Cycle, Mitosis, and DNA"}),Object(l.jsx)(y.a,{src:"https://via.placeholder.com/500x200",fluid:!0}),Object(l.jsxs)(g.a,{children:[Object(l.jsxs)(f.a,{children:[Object(l.jsx)(p.a,{className:"col-md-2"}),Object(l.jsxs)(p.a,{children:[Object(l.jsx)("h3",{className:"p-2",children:"What's this about?"}),Object(l.jsx)("p",{children:"This is a set page prototype that describes 2 kinds of study behaviors we could consider to augment the current set-page experience. I'm calling this \"mid funnel\" studying, which is widely applicable to almost any user segment who doesn't actively use our advanced modes. "}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"First, we can drill the word side by letting users rate our alternate definitions, later adding to a set"}),Object(l.jsx)("li",{children:'Secondly, to prevent "just reading" the definition, we can enable scramble mode, allowing them to stare at an assortment of words, rather than the entire definition, and unscramble if they need help.'})]})]}),Object(l.jsx)(p.a,{className:"col-md-2"})]}),Object(l.jsx)(f.a,{children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)(S.a,{className:"float-right",onClick:function(){return function(){var e=[];G.map((function(t){var n=t;n.isScrambled=!n.isScrambled,e.push(n)})),q(e),z(!A)}()},children:A?"Unscramble":"Scramble"}),A?Object(l.jsx)(S.a,{className:"float-right",onClick:function(){return function(){var e=[];G.map((function(t){var n=t;n.isScrambled=!1,e.push(n)})),q(e),z(!1)}()},children:"Reset"}):null]})}),G.map((function(e,t){return Object(l.jsxs)(f.a,{className:"pt-5",children:[Object(l.jsx)(p.a,{children:Object(l.jsxs)(x.a,{style:{width:"auto",height:"8rem"},className:"mx-auto justify-content-center",children:[Object(l.jsx)(x.a.Text,{className:"mx-auto p-2",children:Object(l.jsx)("h4",{children:e.term})}),Object(l.jsx)(S.a,{onClick:function(){c("menu"),m(e.term)},className:"mx-auto",style:{width:"5rem",height:"2rem"},variant:"primary",children:"Drill"})]})}),Object(l.jsx)(p.a,{children:Object(l.jsxs)(x.a,{style:{width:"auto",height:"8rem"},className:"mx-auto justify-content-center",children:[Object(l.jsx)(x.a.Text,{className:"mx-auto p-2",children:e.isScrambled?e.scrambled:e.def}),e.isScrambled?Object(l.jsx)(S.a,{className:"mx-auto",style:{width:"auto",height:"2rem"},variant:"primary",onClick:function(){return function(e){var t=[];G.map((function(n,a){if(a==e){var c=n;c.isScrambled=!c.isScrambled,t.push(c)}else t.push(n)})),q(t)}(t)},children:"Unscramble"}):null]})})]})}))]}),Object(l.jsxs)(o.Provider,{value:{gameState:n,setGameState:c,activeTerm:u,setActiveTerm:m,likedDefs:k,setLikedDefs:C},children:["menu"===n&&Object(l.jsx)(d,{}),"quiz"===n&&Object(l.jsx)(h,{}),"defRater"===n&&Object(l.jsx)(v,{}),"endScreen"===n&&Object(l.jsx)(O,{}),"defEndScreen"===n&&Object(l.jsx)(w,{})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(35);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),_()}},[[36,1,2]]]);
//# sourceMappingURL=main.0a82beb8.chunk.js.map