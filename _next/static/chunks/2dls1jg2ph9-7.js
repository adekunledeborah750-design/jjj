(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,815711,e=>{"use strict";function t(e,t){let i;return function(...r){clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(this,r)},t)}}var i=class{element;options;align;rect={};wrapperResizeObserver;resizeObserver;debouncedWrapperResize;constructor(e,{align:i=["start"],ignoreSticky:r=!0,ignoreTransform:n=!1}={}){this.element=e,this.options={align:i,ignoreSticky:r,ignoreTransform:n},this.align=[i].flat(),this.debouncedWrapperResize=t(this.onWrapperResize,500),this.wrapperResizeObserver=new ResizeObserver(this.debouncedWrapperResize),this.wrapperResizeObserver.observe(document.body),this.onWrapperResize(),this.resizeObserver=new ResizeObserver(this.onResize),this.resizeObserver.observe(this.element),this.setRect({width:this.element.offsetWidth,height:this.element.offsetHeight})}destroy(){this.wrapperResizeObserver.disconnect(),this.resizeObserver.disconnect()}setRect({top:e,left:t,width:i,height:r,element:n}={}){e=e??this.rect.top,t=t??this.rect.left,i=i??this.rect.width,r=r??this.rect.height,n=n??this.rect.element,(e!==this.rect.top||t!==this.rect.left||i!==this.rect.width||r!==this.rect.height||n!==this.rect.element)&&(this.rect.top=e,this.rect.y=e,this.rect.width=i,this.rect.height=r,this.rect.left=t,this.rect.x=t,this.rect.bottom=e+r,this.rect.right=t+i)}onWrapperResize=()=>{let e,t;if(this.options.ignoreSticky&&function e(t){"sticky"===getComputedStyle(t).position&&(t.style.setProperty("position","static"),t.dataset.sticky="true"),t.offsetParent&&e(t.offsetParent)}(this.element),this.options.ignoreTransform)e=function e(t,i=0){let r=i+t.offsetTop;return t.offsetParent?e(t.offsetParent,r):r}(this.element),t=function e(t,i=0){let r=i+t.offsetLeft;return t.offsetParent?e(t.offsetParent,r):r}(this.element);else{let i=this.element.getBoundingClientRect();e=i.top+function e(t,i=0){let r=i+t.scrollTop;return t.offsetParent?e(t.offsetParent,r):r+window.scrollY}(this.element),t=i.left+function e(t,i=0){let r=i+t.scrollLeft;return t.offsetParent?e(t.offsetParent,r):r+window.scrollX}(this.element)}this.options.ignoreSticky&&function e(t){t?.dataset?.sticky==="true"&&(t.style.removeProperty("position"),delete t.dataset.sticky),t.offsetParent&&e(t.offsetParent)}(this.element),this.setRect({top:e,left:t})};onResize=([e])=>{if(!e?.borderBoxSize[0])return;let t=e.borderBoxSize[0].inlineSize,i=e.borderBoxSize[0].blockSize;this.setRect({width:t,height:i})}};let r=0;var n=class{options;elements=new Map;snaps=new Map;viewport={width:window.innerWidth,height:window.innerHeight};isStopped=!1;onSnapDebounced;currentSnapIndex;constructor(e,{type:i="proximity",lerp:r,easing:n,duration:s,distanceThreshold:a="50%",debounce:o=500,onSnapStart:l,onSnapComplete:d}={}){this.lenis=e,window.lenis||(window.lenis={}),window.lenis.snap=!0,this.options={type:i,lerp:r,easing:n,duration:s,distanceThreshold:a,debounce:o,onSnapStart:l,onSnapComplete:d},this.onWindowResize(),window.addEventListener("resize",this.onWindowResize),this.onSnapDebounced=t(this.onSnap,this.options.debounce),this.lenis.on("virtual-scroll",this.onSnapDebounced)}destroy(){this.lenis.off("virtual-scroll",this.onSnapDebounced),window.removeEventListener("resize",this.onWindowResize),this.elements.forEach(e=>{e.destroy()})}start(){this.isStopped=!1}stop(){this.isStopped=!0}add(e){let t=r++;return this.snaps.set(t,{value:e}),()=>this.snaps.delete(t)}addElement(e,t={}){let n=r++;return this.elements.set(n,new i(e,t)),()=>this.elements.delete(n)}addElements(e,t={}){let i=[...e].map(e=>this.addElement(e,t));return()=>{i.forEach(e=>{e()})}}onWindowResize=()=>{this.viewport.width=window.innerWidth,this.viewport.height=window.innerHeight};computeSnaps=()=>{let{isHorizontal:e}=this.lenis,t=[...this.snaps.values()];return this.elements.forEach(({rect:i,align:r})=>{let n;r.forEach(r=>{"start"===r?n=i.top:"center"===r?n=e?i.left+i.width/2-this.viewport.width/2:i.top+i.height/2-this.viewport.height/2:"end"===r&&(n=e?i.left+i.width-this.viewport.width:i.top+i.height-this.viewport.height),"number"==typeof n&&t.push({value:Math.ceil(n)})})}),t=t.sort((e,t)=>Math.abs(e.value)-Math.abs(t.value))};previous(){this.goTo((this.currentSnapIndex??0)-1)}next(){this.goTo((this.currentSnapIndex??0)+1)}goTo(e){let t=this.computeSnaps();if(0===t.length)return;this.currentSnapIndex=Math.max(0,Math.min(e,t.length-1));let i=t[this.currentSnapIndex];void 0!==i&&this.lenis.scrollTo(i.value,{duration:this.options.duration,easing:this.options.easing,lerp:this.options.lerp,lock:"lock"===this.options.type,userData:{initiator:"snap"},onStart:()=>{this.options.onSnapStart?.({index:this.currentSnapIndex,...i})},onComplete:()=>{this.options.onSnapComplete?.({index:this.currentSnapIndex,...i})}})}get distanceThreshold(){if("mandatory"===this.options.type)return 1/0;let{isHorizontal:e}=this.lenis,t=e?"width":"height";return"string"==typeof this.options.distanceThreshold&&this.options.distanceThreshold.endsWith("%")?Number(this.options.distanceThreshold.replace("%",""))/100*this.viewport[t]:"number"==typeof this.options.distanceThreshold?this.options.distanceThreshold:this.viewport[t]}onSnap=e=>{let t;if(this.isStopped||"touchmove"===e.event.type||"lock"===this.options.type&&this.lenis.userData?.initiator==="snap")return;let{scroll:i,isHorizontal:r}=this.lenis,n=r?e.deltaX:e.deltaY;i=Math.ceil(this.lenis.scroll+n);let s=this.computeSnaps();if(0===s.length)return;let a=s.findLastIndex(({value:e})=>e<i),o=s.findIndex(({value:e})=>e>i);if("lock"===this.options.type)n>0?t=o:n<0&&(t=a);else{let e=s[a],r=e?Math.abs(i-e.value):1/0,n=s[o];t=r<(n?Math.abs(i-n.value):1/0)?a:o}if(void 0===t||-1===t)return;t=Math.max(0,Math.min(t,s.length-1));let l=s[t];Math.abs(i-l.value)<=this.distanceThreshold&&this.goTo(t)};resize(){this.elements.forEach(e=>{e.onWrapperResize()})}};e.s(["default",0,n])},156569,e=>{"use strict";var t=e.i(843476),i=e.i(500932),r=e.i(478430),n=e.i(831119),s=e.i(101384),a=e.i(764548),o=e.i(189897),l=e.i(698074),d=e.i(607561),c=e.i(274879),p=e.i(448806),h=e.i(989970),u=e.i(883495),f=e.i(875324),g=e.i(255667),m=e.i(271645),v=e.i(575509),b=e.i(997053);let y=(0,b.default)(v.Div).withConfig({componentId:"sc-12e1aa87-0"})(()=>b.css`
		/* The span variant (inside an <h2>) lays out as the div does. Scoped to span
		   so the div variant keeps deferring to its parents' display rules. */
		&:where(span) {
			display: block;
		}

		> :first-child {
			font-kerning: none;
			font-variant-ligatures: none;
			text-rendering: optimizeSpeed;
		}

		/* NOTE • A split line is one line by definition — SplitText measured it to
		   fit. The fill primes each line to fit-content plus a bleed of padding, and
		   in a column that is already tight (BuildsIntroduction's "Ordinary" at 4
		   columns) that box comes out narrower than the text. Plain text can't break
		   inside a word so it just overflowed, but the entrance turns every letter
		   into an inline-block and each one is a break opportunity: the word snapped
		   in two ("Ordi" / "nary") for the rise and jumped back when the letters
		   were reverted. */
		.line {
			white-space: nowrap;
		}

		@media (scripting: enabled) {
			visibility: hidden;
		}
	`),w=e=>"string"==typeof e||"number"==typeof e?String(e):Array.isArray(e)?e.map(w).join(""):(0,m.isValidElement)(e)?w(e.props.children):"",x=(e,t)=>{(0,l.primeFillLines)(e,{align:t}),h.default.set(e,{clipPath:"none",opacity:1})},S=e=>{let v,b,S,z,R,T,E,L,P,$=(0,i.c)(33),{children:C,editAttr:B,as:I,isScrubbed:W}=e,M=void 0===I?"div":I,A=void 0!==W&&W,{loaderMounted:O}=(0,m.use)(r.LoaderContext),{menuVisible:j}=(0,m.use)(n.MenuContext),{isReducedMotion:_}=(0,m.use)(s.PerformanceContext),F=(0,p.usePageTransitioning)(),N=(0,m.useRef)(null),[H,D]=(0,m.useState)(!1),[Y,U]=(0,m.useState)(0),q=(0,g.useLenis)();$[0]!==C?(v=(0,o.cleanSanityString)(w(C)),$[0]=C,$[1]=v):v=$[1];let G=v,K=(0,c.useSplitTextRecovery)(N,G),X=O||F||j;$[2]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{let e=!0;document.fonts.ready.then(()=>{e&&D(!0)});let t=window.innerWidth,i=()=>{window.innerWidth!==t&&(t=window.innerWidth,U(k))};return window.addEventListener("resize",i),()=>{e=!1,window.removeEventListener("resize",i)}},S=[],$[2]=b,$[3]=S):(b=$[2],S=$[3]),(0,m.useEffect)(b,S);let V=Array.isArray(C)?C[0]:C,J=V&&"object"==typeof V&&"type"in V?String(V.type):"";$[4]===Symbol.for("react.memo_cache_sentinel")?(z=/^h[1-6]$/,$[4]=z):z=$[4],$[5]!==J?(R=z.test(J),$[5]=J,$[6]=R):R=$[6];let Z=R;return $[7]!==H||$[8]!==X||$[9]!==Z||$[10]!==_||$[11]!==A||$[12]!==q?.rootElement?(T=e=>{let{isDesktop:t}=e,i=N.current;if(!i)return;if(_)return void h.default.set(i,{visibility:"visible"});let r=q?.rootElement;if(!r)return;let n=i.firstElementChild;if(!n||X||!H)return;n.textContent=(0,o.cleanSanityString)(n.textContent),(e=>{let t=getComputedStyle(e).textTransform;if("none"===t)return;let i=e.textContent??"";e.textContent="uppercase"===t?i.toUpperCase():"lowercase"===t?i.toLowerCase():i.replace(/(?<![\p{L}\p{N}])\p{L}/gu,e=>e.toUpperCase()),h.default.set(e,{textTransform:"none"})})(n),Z||n.setAttribute("aria-hidden","true");let s=n.style.display,d=f.SplitText.create(n,{type:"lines",linesClass:"line",autoSplit:!1,aria:Z?"auto":"none"}),{lines:c}=d;if(!c.length)return h.default.set(i,{visibility:"visible"}),()=>d.revert();let p=h.default.getProperty(n,"textAlign");(0,l.primeFillLines)(c,{align:p});let g=null,m=null,v=null,b=null,y=1,w=()=>{h.default.set(c,{clearProps:"backgroundImage,backgroundClip,webkitBackgroundClip,color"}),h.default.set(c,{clipPath:"inset(-0.14em)",opacity:l.FILL_REST_ALPHA});let{chars:e}=m=f.SplitText.create(c,{type:"chars",charsClass:"char",aria:"none"}),t=Math.min(.025,.5/Math.max(e.length-1,1));if(h.default.set(e,{yPercent:120,willChange:"transform"}),A){(v=h.default.timeline({paused:!0})).to(e,{yPercent:0,duration:.6,ease:"power1.out",stagger:t}),y=((e.length-1)*t+.39)/v.duration();return}(g=h.default.timeline({paused:!0})).to(e,{yPercent:0,duration:.6,ease:"expo.out",stagger:t});let i=(e.length-1)*t+.39;g.call(()=>{m?.revert(),m=null,x(c,p)},[],i),g.add((0,l.buildFillTimeline)(c,{duration:1.5,lag:.1}).paused(!1),i)},S=e=>{if(v)if(e>=y||(0,a.isScrollFolding)(r)){var t;t=(0,a.isScrollFolding)(r),v&&(v.kill(),v=null,m?.revert(),m=null,x(c,p),b=(0,l.buildFillTimeline)(c,{duration:1.5,lag:.1}).paused(!1),t&&b.progress(1))}else v.progress(e)},k=()=>{g?.kill(),g=null,v?.kill(),v=null,b?.kill(),b=null,m?.revert(),m=null};w(),h.default.set(i,{visibility:"visible"});let z=()=>{g&&((0,a.isScrollFolding)(r)?g.progress(1):g.play())};A?u.default.create({trigger:i,scroller:r,start:"top bottom",end:"top 50%",onUpdate:e=>S(e.progress),onRefresh:e=>S(e.progress)}):u.default.create({trigger:i,scroller:r,start:t?"top 85%":"top 90%",onEnter:z,onEnterBack:z,onRefresh:e=>{e.progress>0&&g&&0===g.progress()&&!g.isActive()&&z()}});let R=(({wrapper:e,scroller:t,show:i,reset:r})=>{let n=new IntersectionObserver(()=>{let n=e.getBoundingClientRect(),s=t.getBoundingClientRect();n.height<=0||s.height<=0||(n.top<s.bottom&&n.bottom>s.top?i():n.top>=s.bottom&&r())},{root:t});return n.observe(e),()=>n.disconnect()})({wrapper:i,scroller:r,show:z,reset:()=>{k(),w()}});return()=>{R(),k(),d.revert(),n.style.display=s}},$[7]=H,$[8]=X,$[9]=Z,$[10]=_,$[11]=A,$[12]=q?.rootElement,$[13]=T):T=$[13],$[14]!==H||$[15]!==G||$[16]!==X||$[17]!==Z||$[18]!==_||$[19]!==A||$[20]!==Y||$[21]!==q||$[22]!==K?(E={scope:N,dependencies:[G,q,Z,K,X,_,H,Y,A]},$[14]=H,$[15]=G,$[16]=X,$[17]=Z,$[18]=_,$[19]=A,$[20]=Y,$[21]=q,$[22]=K,$[23]=E):E=$[23],(0,d.useAnimation)(T,E),$[24]!==G||$[25]!==Z?(L=!Z&&G?(0,t.jsx)("span",{className:"sr-only",children:G}):null,$[24]=G,$[25]=Z,$[26]=L):L=$[26],$[27]!==M||$[28]!==C||$[29]!==B||$[30]!==G||$[31]!==L?(P=(0,t.jsxs)(y,{ref:N,as:M,"data-sanity":B,children:[C,L]},G),$[27]=M,$[28]=C,$[29]=B,$[30]=G,$[31]=L,$[32]=P):P=$[32],P};function k(e){return e+1}S.displayName="AnimatedHeading",e.s(["default",0,S],156569)},124821,135741,e=>{"use strict";var t=e.i(843476),i=e.i(500932);let r=null;var n=e.i(271645),s=e.i(575509),a=e.i(212960),o=e.i(951847),l=e.i(997053);let d=[...Array(25)].map((e,t)=>`&:nth-child(${t+1}) { transition-delay: ${.02*t}s; }`).join("\n"),c=({$isFullWidth:e})=>l.css`
    @property --gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-angle-offset {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-percent {
            syntax: "<percentage>";
            initial-value: 5%;
            inherits: false;
        }

        @property --gradient-shine {
            syntax: "<color>";
            initial-value: white;
            inherits: false;
        }

        @keyframes gradient-angle {
            to {
                --gradient-angle: 360deg;
            }
        }

        @keyframes shimmer {
            to {
                rotate: 360deg;
            }
        }

        --ease: ease-in-out;
        --dur: 0.5s;
        --play-state: paused;

        position: relative;
        display: grid;
        place-items: center;
        white-space: nowrap;

        width: ${e?"100%":"max-content"};
        padding:  ${(0,s.getGap)("sm")} ${(0,s.getGap)("l")};

        border: 1px solid ${(0,s.getBrand)("bc5",10)};
        background: ${(0,s.getGlobal)("black",10)};
        text-decoration: none;
        transition: border-color var(--ease) var(--dur);

        ${s.bp.l`
            backdrop-filter: blur(4px);
        `}

        

        &[disabled],
        &[aria-disabled='true'] {
            opacity: 0.4;
            pointer-events: none;

            // Pause shimmer and gradient animations if the button is disabled or aria-disabled
            > i {
                animation-play-state: paused;
                opacity: 0;
            }
        }


        &:focus-visible {
            outline: 1px dashed ${(0,s.getBrand)("bc5",60)};
            outline-offset: 2px;
            border-color: ${(0,s.getBrand)("bc3",40)};
        }
   


        @media (hover: hover) and (pointer: fine) {
            &:hover {
                cursor: pointer;
                border-color: ${(0,s.getBrand)("bc5",40)};
                
                > span {
                    opacity: 0.6;

                    span { transform: translateY(4em) }
                }
            }
        }
   

        > span {
            ${a.captionL}

            display: block;
            position: relative;
            z-index: 1;
            overflow: clip;

            transition: opacity var(--ease) var(--dur), letter-spacing var(--ease) var(--dur);


            span {
                display: inline-block;
                padding: 0;
                margin: 0;
                text-shadow: ${(0,s.getBrand)("bc5",60)} 0px -4em 0px;
                transition: transform 0.5s ${(0,s.getEase)("bezzy2")};
            
                ${d}
            }
        }

        > i {
            --duration: 5s;
            --stroke: 1px;
            --offset-start: 25%;
            --offset-end: 75%;

            position: absolute;
            inset: calc(var(--stroke) * -1);
            z-index: 0;
            mix-blend-mode: screen;
            pointer-events: none;

            padding: var(--stroke);
            background: conic-gradient(
                from calc(var(--gradient-angle) - var(--gradient-angle-offset)) at center,
                transparent calc(var(--offset-start) - var(--gradient-percent) * 2),
                ${(0,s.getBrand)("bc5",0)} calc(var(--offset-start) - var(--gradient-percent)),
                white var(--offset-start),
                ${(0,s.getBrand)("bc5",0)} calc(var(--offset-start) + var(--gradient-percent)),
                transparent calc(var(--offset-start) + var(--gradient-percent) * 2),
                transparent calc(var(--offset-end) - var(--gradient-percent) * 2),
                ${(0,s.getBrand)("bc5",0)} calc(var(--offset-end) - var(--gradient-percent)),
                white var(--offset-end),
                ${(0,s.getBrand)("bc5",0)}	 calc(var(--offset-end) + var(--gradient-percent)),
                transparent calc(var(--offset-end) + var(--gradient-percent) * 2)
            );

            /* Ring mask — only the stroke is painted; centre stays fully transparent. */
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask-composite: exclude;

            transition:
                opacity 0.5s var(--ease),
                var(--gradient-angle-offset) var(--duration) var(--ease),
                var(--gradient-percent) var(--duration) var(--ease),
                var(--gradient-shine) var(--duration) var(--ease);

            animation: gradient-angle 4.5s linear infinite var(--play-state);

            @media (prefers-reduced-motion: reduce) {
                animation: none;
            }
        }
`,p=(0,l.default)(o.Link).withConfig({componentId:"sc-6f2721c4-0"})(({$isFullWidth:e})=>l.css`
        ${c({$isFullWidth:e})}
    `),h=l.default.button.withConfig({componentId:"sc-6f2721c4-1"})(({$isFullWidth:e})=>l.css`
        ${c({$isFullWidth:e})}
    `);e.s(["Button",0,h,"Jacket",0,p,"sharedStyles",0,c],135741);let u=e=>{let s,a,o,l,d=(0,i.c)(6),c=(0,n.useRef)(null),u=(0,n.useRef)(null);if(d[0]!==e.isButton?(s=()=>{let t=e.isButton?c.current:u.current;if(t){let e;return(e=r||(r=new IntersectionObserver(e=>{for(let t of e)t.target instanceof HTMLElement&&t.target.style.setProperty("--play-state",t.isIntersecting?"running":"paused")},{threshold:0}))).observe(t),()=>e.unobserve(t)}},a=[e.isButton],d[0]=e.isButton,d[1]=s,d[2]=a):(s=d[1],a=d[2]),(0,n.useEffect)(s,a),d[3]!==e){l=Symbol.for("react.early_return_sentinel");e:{let i=[];for(let r=0;r<e.label.length;r+=1){let n=e.label[r];i.push((0,t.jsx)("span",{children:" "===n?" ":n},`${e.label}-${r}`))}let r=f;if(e.isButton){let{aria:n,label:s,onClick:a,isFullWidth:o,type:d,disabled:p}=e,u=void 0!==p&&p;l=(0,t.jsx)(h,{ref:c,type:void 0===d?"button":d,"aria-label":n??s,"aria-disabled":u,$isFullWidth:void 0!==o&&o,disabled:u,onClick:a,children:r(i)});break e}let{aria:n,label:s,to:a,onClick:d,isFullWidth:g,transitionAwaitsContent:m,prefetch:v,tabIndex:b}=e;o=(0,t.jsx)(p,{ref:u,href:a,"aria-label":n??s,$isFullWidth:void 0!==g&&g,onClick:d,transitionAwaitsContent:m,prefetch:v,tabIndex:b,children:r(i)})}d[3]=e,d[4]=o,d[5]=l}else o=d[4],l=d[5];return l!==Symbol.for("react.early_return_sentinel")?l:o};function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("i",{"aria-hidden":"true"})]})}u.displayName="Button",e.s(["default",0,u],124821)},89835,e=>{"use strict";var t=e.i(843476),i=e.i(500932),r=e.i(481293),n=e.i(180301),s=e.i(657688),a=e.i(402463),o=e.i(328852),l=e.i(271645),d=e.i(174080);let c=Number.parseInt(n.grid.breakpoints.l??"1024",10),p=(0,l.forwardRef)((e,n)=>{let l,p,h,u,f,g,m,v,b,y,w,x,S,k,z,R,T,E,L,P,$,C,B,I,W,M,A=(0,i.c)(62);A[0]!==e?({desktop:h,mobile:g,fill:u,width:z,height:f,sizes:y,quality:b,enabled:w,preload:v,loading:x,desktopMinWidth:S,desktopInLandscape:k,className:l,crossOrigin:p,...m}=e,A[0]=e,A[1]=l,A[2]=p,A[3]=h,A[4]=u,A[5]=f,A[6]=g,A[7]=m,A[8]=v,A[9]=b,A[10]=y,A[11]=w,A[12]=x,A[13]=S,A[14]=k,A[15]=z):(l=A[1],p=A[2],h=A[3],u=A[4],f=A[5],g=A[6],m=A[7],v=A[8],b=A[9],y=A[10],w=A[11],x=A[12],S=A[13],k=A[14],z=A[15]);let O=void 0===w||w,j=void 0===x?"lazy":x,_=void 0===S?c:S,F=void 0!==k&&k;if(A[16]!==l||A[17]!==p||A[18]!==h||A[19]!==F||A[20]!==_||A[21]!==O||A[22]!==u||A[23]!==f||A[24]!==j||A[25]!==g||A[26]!==m||A[27]!==v||A[28]!==b||A[29]!==n||A[30]!==y||A[31]!==z){B=Symbol.for("react.early_return_sentinel");e:{if($=(0,r.resolveImageWithAlt)(h),C=(0,r.resolveImageWithAlt)(g),!$||!C){B=null;break e}P=u?{fill:!0}:{width:z??C.width??1200,height:f??C.height??675},T=u?{}:{width:z??$.width??1200,height:f??$.height??675};let e={sizes:y,quality:b,preload:v,loader:a.imageLoader,...P};if($.src===C.src){B=(0,t.jsx)("picture",{ref:n,className:l,...m,children:(0,t.jsx)(o.default,{enabled:O,image:$,sizes:y,quality:b,preload:v,loading:j,crossOrigin:p,...P})});break e}R=`(min-width: ${_}px)${F?", (orientation: landscape)":""}`;let i=`(max-width: ${_-1}px)${F?" and (orientation: portrait)":""}`,{props:c}=(0,s.getImageProps)({...e,src:$.src,alt:$.alt});if({srcSet:L,sizes:E}=c,v&&O){let{props:t}=(0,s.getImageProps)({...e,src:C.src,alt:C.alt}),{srcSet:r,sizes:n}=t;(0,d.preload)($.src,{as:"image",fetchPriority:"high",imageSrcSet:L,imageSizes:E,media:R}),(0,d.preload)(C.src,{as:"image",fetchPriority:"high",imageSrcSet:r,imageSizes:n,media:i})}}A[16]=l,A[17]=p,A[18]=h,A[19]=F,A[20]=_,A[21]=O,A[22]=u,A[23]=f,A[24]=j,A[25]=g,A[26]=m,A[27]=v,A[28]=b,A[29]=n,A[30]=y,A[31]=z,A[32]=R,A[33]=T,A[34]=E,A[35]=L,A[36]=P,A[37]=$,A[38]=C,A[39]=B}else R=A[32],T=A[33],E=A[34],L=A[35],P=A[36],$=A[37],C=A[38],B=A[39];if(B!==Symbol.for("react.early_return_sentinel"))return B;A[40]!==R||A[41]!==T||A[42]!==E||A[43]!==L||A[44]!==O?(I=O?(0,t.jsx)("source",{media:R,srcSet:L,sizes:E,...T}):null,A[40]=R,A[41]=T,A[42]=E,A[43]=L,A[44]=O,A[45]=I):I=A[45];let N=v||"eager"===j?"eager":"lazy",H=v?"high":void 0;return A[46]!==p||A[47]!==O||A[48]!==P||A[49]!==b||A[50]!==$.lqip||A[51]!==C||A[52]!==y||A[53]!==N||A[54]!==H?(W=(0,t.jsx)(o.default,{enabled:O,image:C,desktopPlaceholder:$.lqip,sizes:y,quality:b,loading:N,fetchPriority:H,crossOrigin:p,...P}),A[46]=p,A[47]=O,A[48]=P,A[49]=b,A[50]=$.lqip,A[51]=C,A[52]=y,A[53]=N,A[54]=H,A[55]=W):W=A[55],A[56]!==l||A[57]!==m||A[58]!==n||A[59]!==I||A[60]!==W?(M=(0,t.jsxs)("picture",{ref:n,className:l,...m,children:[I,W]}),A[56]=l,A[57]=m,A[58]=n,A[59]=I,A[60]=W,A[61]=M):M=A[61],M});p.displayName="ResponsiveImage",e.s(["default",0,p])},371136,e=>{"use strict";var t=e.i(500932),i=e.i(883495),r=e.i(815711),n=e.i(271645),s=e.i(448806),a=e.i(764548);e.s(["useLenisSnap",0,(e,o,l,d)=>{let c,p,h,u=(0,t.c)(24);u[0]!==d?(c=void 0===d?{}:d,u[0]=d,u[1]=c):c=u[1];let{debounce:f,desktopMinWidth:g,distanceThreshold:m,duration:v,easing:b,allViewports:y,listingWheel:w}=c,x=void 0===f?500:f,S=void 0===g?1024:g,k=void 0!==y&&y,z=(0,n.useRef)(void 0),R=(0,s.usePageTransitioning)();return u[2]!==k||u[3]!==x||u[4]!==S||u[5]!==m||u[6]!==v||u[7]!==b||u[8]!==o||u[9]!==R||u[10]!==e||u[11]!==w?(p=()=>{if(!e||R)return;if(w){let t=((e,t,{multiplier:i,maxStep:r,departureRatio:n,debounce:s,duration:o,easing:l})=>{let d=e.rootElement,c=e.options.virtualScroll,p=0,h=!1,u=()=>{window.clearTimeout(p),p=0},f=()=>e.isStopped||e.isLocked||(0,a.isScrollResetting)(d)||(0,a.isScrollFolding)(d)||d.hasAttribute(a.SCROLL_RESIZING_ATTRIBUTE),g=a=>{if(u(),c?.(a)===!1)return!1;let{event:g}=a;if("wheel"!==g.type||g.ctrlKey||f()||!e.options.smoothWheel||!a.deltaY||Math.abs(a.deltaX)>Math.abs(a.deltaY))return!0;let m=g.composedPath();if(m.slice(0,m.indexOf(d)).some(t=>t instanceof HTMLElement&&(e.options.prevent?.(t)||t.hasAttribute("data-lenis-prevent")||t.hasAttribute("data-lenis-prevent-wheel")||t.hasAttribute("data-lenis-prevent-vertical"))))return!0;let v=d.clientHeight*r;a.deltaY=Math.max(-v,Math.min(v,a.deltaY*i));let b=Math.sign(a.deltaY),y=()=>{if(p=0,h||f()||!g.defaultPrevented||"native"===e.isScrolling)return;if(Math.abs(e.targetScroll-e.animatedScroll)>12){p=window.setTimeout(y,50);return}let i=d.getBoundingClientRect();if(!i.height)return;let r=d.clientHeight/i.height,s=e.scroll,a=((e,t,i,r)=>{if(!e.length)return null;let n=e.findIndex(e=>e>=t);if(-1===n)return e[e.length-1];if(0===n)return e[0];let s=e[n],a=e[n-1];if(s-t<=1)return s;if(t-a<=1)return a;let o=(s-a)*r;return i>0?t-a+1>=o?s:a:s-t+1>=o?a:s})(t().map(e=>s+(e.getBoundingClientRect().top-i.top)*r).sort((e,t)=>e-t),e.targetScroll+s-e.animatedScroll,b,n);null!==a&&e.scrollTo(a,{duration:o,easing:l,userData:{initiator:"snap"}})};return p=window.setTimeout(y,s),!0};return e.options.virtualScroll=g,d.addEventListener("touchstart",u,{passive:!0}),{resize:u,destroy:()=>{h=!0,u(),d.removeEventListener("touchstart",u),e.options.virtualScroll===g&&(e.options.virtualScroll=c)}}})(e,o,{...w,debounce:x,duration:v,easing:b});return z.current=t.resize,i.default.addEventListener("refresh",t.resize),()=>{z.current=void 0,i.default.removeEventListener("refresh",t.resize),t.destroy()}}let t=window.matchMedia(k?"(min-width: 0px)":`(min-width: ${S}px) and (pointer: fine)`),n=e.rootElement,s=null,l=!1,d=null,c=()=>{if(d?.(),s?.stop(),s?.destroy(),d=null,s=null,!t.matches)return;let i=o().filter(Boolean);i.length&&(d=(s=new r.default(e,{type:"proximity",debounce:x,distanceThreshold:m,duration:v,easing:b})).addElements(i,{align:["start"]}),l&&s.stop())},p=()=>{l=!0,s?.stop()},h=()=>{l=!1,s?.start()};return z.current=c,c(),t.addEventListener("change",c),n.addEventListener("touchstart",p,{passive:!0}),n.addEventListener("wheel",h,{passive:!0}),i.default.addEventListener("refresh",c),()=>{z.current=void 0,t.removeEventListener("change",c),n.removeEventListener("touchstart",p),n.removeEventListener("wheel",h),i.default.removeEventListener("refresh",c),d?.(),s?.stop(),s?.destroy()}},u[2]=k,u[3]=x,u[4]=S,u[5]=m,u[6]=v,u[7]=b,u[8]=o,u[9]=R,u[10]=e,u[11]=w,u[12]=p):p=u[12],u[13]!==k||u[14]!==x||u[15]!==l||u[16]!==S||u[17]!==m||u[18]!==v||u[19]!==b||u[20]!==R||u[21]!==e||u[22]!==w?(h=[x,S,k,w,m,v,b,e,R,...l],u[13]=k,u[14]=x,u[15]=l,u[16]=S,u[17]=m,u[18]=v,u[19]=b,u[20]=R,u[21]=e,u[22]=w,u[23]=h):h=u[23],(0,n.useEffect)(p,h),z}],371136)},698074,e=>{"use strict";var t=e.i(228073),i=e.i(989970);let r=[t.theme.colors.feedback.negative],n=(e=r)=>({start:-16,end:100+(e.length-1)*18+8+3});e.s(["FILL_REST_ALPHA",0,.18,"buildFillTimeline",0,(e,{duration:t,ease:r="expo.out",lag:s=t})=>{let{start:a,end:o}=n(),l=i.default.timeline({paused:!0});for(let[i,n]of e.entries())l.fromTo(n,{"--fill-pos":a},{"--fill-pos":o,duration:t,ease:r},i*s);return l},"primeFillLines",0,(e,{align:t="start",settled:s=!1}={})=>{let a;if(!e.length)return n();let o=n(),l=i.default.getProperty(e[0],"color"),d=e[0].parentElement;d&&i.default.set(d,{display:"grid"});let c="-0.14em",p="center"===t,h="right"===t||"end"===t;return i.default.set(e,{display:"block",width:"fit-content",padding:"0.14em",marginBlock:c,marginLeft:p||h?"auto":c,marginRight:p?"auto":h?c:"auto",backgroundImage:(e=>{let t=(e.length-1)*18,i=["var(--fill-to) 0%",`var(--fill-to) calc((var(--fill-pos) - ${t+8}) * 1%)`];for(let t=e.length-1;t>=0;t-=1)i.push(`${e[t]} calc((var(--fill-pos) - ${18*t}) * 1%)`);return i.push("var(--fill-from) calc((var(--fill-pos) + 8) * 1%)"),i.push("var(--fill-from) 100%"),`linear-gradient(97deg, ${i.join(", ")})`})(r),backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent","--fill-from":(a=l.match(/[\d.]+/g))&&a.length>=3?`rgba(${a[0]}, ${a[1]}, ${a[2]}, 0.18)`:l,"--fill-to":l,"--fill-pos":s?o.end:o.start}),o}])}]);