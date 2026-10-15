(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,763793,e=>{e.v(t=>Promise.all(["static/chunks/0euy4ct12jp-6.js"].map(t=>e.l(t))).then(()=>t(461139)))},357525,e=>{e.v(t=>Promise.all(["static/chunks/0hpb9iexk6l4l.js"].map(t=>e.l(t))).then(()=>t(722538)))},847873,e=>{"use strict";e.s(["PARALLAX_MOVEMENT_STRENGTH",0,.7,"PLANE_CONFIG",0,{beamWidth:.12,beamBrightness:1.2,beamTilt:1,motionZoom:1.12,motionDrift:.05,scrubEase:0,snapDuration:.45,snapDebounce:200,snapDamping:5,wheelMultiplier:1,wheelMaxStep:.5,wheelDepartureRatio:.5,touchSettleDuration:.5,touchRestDelay:60,overscan:1.16,tiltMargin:.015,depthStrength:.00575,tiltX:.0112,tiltY:.006999999999999999,mouseEase:.06,driftX:.0084,driftY:.0084,depthSwayY:.7,depthSwayPeriod:8,velocityScale:.06,velocityEase:.08,scrimTop:60,scrimBottom:45,maxDevicePixelRatio:2,uploadBudgetMs:8,uploadStarvationFrames:30,previewProgress:-1,previewLoop:0},"touchSettleEase",0,e=>Math.sin(e*Math.PI/2)])},88664,e=>{"use strict";var t=e.i(843476),i=e.i(500932),n=e.i(575509),r=e.i(212960),s=e.i(997053);let o=(0,s.default)(n.Div).attrs({as:"span"}).withConfig({componentId:"sc-baf86b4b-0"})(({$isLight:e})=>s.css`
        ${r.captionL}

		position: relative;
		overflow: hidden;

        display: grid;
        place-items: center;

		padding: calc(${(0,n.getGap)("xxs")} + 1px) calc(${(0,n.getGap)("s")} - 2px) calc(${(0,n.getGap)("xxs")} - 1px) ${(0,n.getGap)("s")};

        background: ${e?(0,n.getBrand)("bc5"):(0,n.getBrand)("bc5",10)};
        color: ${e?(0,n.getBrand)("bc1"):(0,n.getBrand)("bc5")};
		backdrop-filter: blur(8px);
		
		user-select: none;
		pointer-events: none;
		
		${!e&&s.css`
                &:after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        ${(0,n.getBrand)("bc5",30)} 50%,
                        transparent 100%
                    );
                    transform: translateX(-100%);
                    animation: shine 1s infinite;

                    @media (prefers-reduced-motion: reduce) {
                        animation: none;
                    }
               
                    z-index: 1;
                    pointer-events: none;
					
                }
            `}

		// Make sure the content sits above the shine effect, but under any absolutely positioned stuff
		> * {
			position: relative;
			z-index: 2;
		}

		@keyframes shine {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(100%);
			}
		}
	`),a=e=>{let n,r=(0,i.c)(3),{text:s,isLight:a}=e;return r[0]!==a||r[1]!==s?(n=(0,t.jsx)(o,{$isLight:a,children:s}),r[0]=a,r[1]=s,r[2]=n):n=r[2],n};a.displayName="Tag",e.s(["default",0,a],88664)},22584,e=>{"use strict";e.s(["ARCHIVE_BASE_PATH",0,"/builds/","STOCK_BASE_PATH",0,"/stock/","buildHref",0,(e,t)=>`${e}${t}/`])},676842,e=>{"use strict";var t=e.i(500932),i=e.i(764548),n=e.i(573943);let r=500;var s=e.i(271645);e.s(["useNativeSnap",0,(e,o,a,l)=>{let c,u,d,p=(0,t.c)(12);p[0]!==l?(c=void 0===l?{}:l,p[0]=l,p[1]=c):c=p[1];let{debounce:h,distanceThreshold:m,duration:v,easing:f,nativeRestDelay:g}=c;p[2]!==h||p[3]!==m||p[4]!==v||p[5]!==f||p[6]!==o||p[7]!==a||p[8]!==e||p[9]!==g?(u=()=>{if(e&&a)return((e,t,{debounce:s=r,distanceThreshold:o,duration:a,easing:l,nativeRestDelay:c}={})=>{let u=e.rootElement,d=0,p=null,h=!1,m=-1/0,v=()=>{d&&(window.clearTimeout(d),d=0)},f=(r=!1)=>{if(d=0,h||e.isStopped||"smooth"===e.isScrolling||!r&&e.isScrolling||(0,i.isScrollResetting)(u)||u.hasAttribute(i.SCROLL_RESIZING_ATTRIBUTE))return;let s=u.scrollTop,c=u.getBoundingClientRect().top,p=null;for(let e of t()){let t=e.getBoundingClientRect().top-c+s;(null===p||Math.abs(t-s)<Math.abs(p-s))&&(p=t)}null===p||1>Math.abs(p-s)||Math.abs(p-s)>((e,t)=>{if(void 0===e)return 1/0;if("number"==typeof e)return e;let i=e.trim().endsWith("%"),n=Number.parseFloat(e);return Number.isFinite(n)?i?n/100*t:n:1/0})(o,u.clientHeight)||((0,n.scrollTrace)("snap",{from:Math.round(s),to:Math.round(p)}),e.scrollTo(p,{duration:a,easing:l,userData:{initiator:"snap"}}))},g=()=>{if((0,i.isScrollResetting)(u)){p=null,v();return}if(!u.hasAttribute(i.SCROLL_RESIZING_ATTRIBUTE)&&(void 0===c||"smooth"===e.isScrolling)){if("native"===e.isScrolling){p="native",v();return}if("smooth"===e.isScrolling){p="smooth",v();return}"native"===p&&(p=null,v(),d=window.setTimeout(f,s))}},b=()=>{void 0===c||"smooth"===e.isScrolling||(0,i.isScrollResetting)(u)||u.hasAttribute(i.SCROLL_RESIZING_ATTRIBUTE)||(v(),m=performance.now(),d=window.setTimeout(()=>f(!0),c+s))},S=()=>{void 0!==c&&d&&!h&&(v(),f(!0))},E=()=>{h=!0,v()},T=()=>{if(h=!1,void 0!==c){if(performance.now()-m>=c+s){v(),f(!0);return}b();return}!1===e.isScrolling&&(v(),d=window.setTimeout(f,s))};return e.on("scroll",g),u.addEventListener("scroll",b,{passive:!0}),u.addEventListener("scrollend",S,{passive:!0}),u.addEventListener("touchstart",E,{passive:!0}),u.addEventListener("touchend",T,{passive:!0}),u.addEventListener("touchcancel",T,{passive:!0}),()=>{v(),e.off("scroll",g),u.removeEventListener("scroll",b),u.removeEventListener("scrollend",S),u.removeEventListener("touchstart",E),u.removeEventListener("touchend",T),u.removeEventListener("touchcancel",T)}})(e,o,{debounce:h,distanceThreshold:m,duration:v,easing:f,nativeRestDelay:g})},d=[e,o,a,h,m,v,f,g],p[2]=h,p[3]=m,p[4]=v,p[5]=f,p[6]=o,p[7]=a,p[8]=e,p[9]=g,p[10]=u,p[11]=d):(u=p[10],d=p[11]),(0,s.useEffect)(u,d)}],676842)}]);