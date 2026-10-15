(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,927977,e=>{"use strict";var t=e.i(843476),r=e.i(500932),i=e.i(156569),n=e.i(271645);let a=(0,n.createContext)(null),o=(e,t,i)=>{let o,l,s=(0,r.c)(6),u=(0,n.use)(a),[c,d]=(0,n.useState)(null);return s[0]!==i||s[1]!==e||s[2]!==u||s[3]!==t?(o=()=>{let r=e.current,n=t.current?.querySelector("img");if(!u||!r||!n)return;d(null);let a=!0,o=u.ensure({el:r,img:n,depthMapUrl:i,onPaintChange:e=>{a&&d(e?u:null)}});return()=>{a=!1,o.release()}},l=[u,e,t,i],s[0]=i,s[1]=e,s[2]=u,s[3]=t,s[4]=o,s[5]=l):(o=s[4],l=s[5]),(0,n.useEffect)(o,l),null!==u&&c===u};var l=e.i(89835),s=e.i(481293),u=e.i(607561),c=e.i(494473),d=e.i(989970),h=e.i(255667),p=e.i(255981);let f="data-plane-painted",m=`${p.DESKTOP_MEDIA_QUERY} and (pointer: fine)`;var g=e.i(575509),v=e.i(212960),b=e.i(997053);let x=(0,b.default)(g.Div).attrs({as:"section"}).withConfig({componentId:"sc-dcca4473-0"})(()=>b.css`
        position: relative;
        z-index: 1;
        overflow: clip;
        height: 100dvh;
        padding-top: 50dvh;
        background: ${(0,g.getBrand)("bc1")};

        &:after {
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(to top, ${(0,g.getGlobal)("black")} 0%, transparent 50%);
        }

        /* NOTE • Under the WebGL listing the background is painted on the shared
           canvas beneath this section once its texture is up. The DOM copy stays in
           the layout — its rect is what the plane reads — and hands over without
           a second fade during the menu reveal. The ground goes too, or it hides the
           canvas. */
        &[${f}='true'] {
            background: transparent;

            picture {
                opacity: 0;
            }
        }
    `),E=(0,b.default)(g.Div).withConfig({componentId:"sc-dcca4473-1"})(({$isMissing:e})=>b.css`
        position: absolute;
        inset: 0;
        z-index: -1;

        /* NOTE • No image to show — see missingMedia in @tackl for why this is a
           drawn empty frame rather than a flat colour. */
        ${e&&g.missingMedia}

        picture {
            display: block;
            width: 100%;
            height: 100%;

            img {
                display: block;
                object-fit: cover;
                /* Matches the WebGL frame, which crops every photograph from the bottom. */
                object-position: center bottom;
                width: 100%;
                height: 100%;
            }
        }
    `),T=(0,b.default)(g.Div).attrs({as:"div"}).withConfig({componentId:"sc-dcca4473-2"})(()=>b.css`
        position: relative;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50dvh;
    `),y=(0,b.default)(g.Div).withConfig({componentId:"sc-dcca4473-3"})(()=>b.css`
        margin-bottom: ${(0,g.getGap)("s")};

        /* NOTE • h1 at the top of the listing, a plain div on the copies that
           close the infinite-scroll seam — the two have to look identical, so
           both are styled by attribute rather than by tag. */
        [data-heading] {
            ${v.displayL}

            color: ${(0,g.getBrand)("bc5")};
            text-align: center;
        }
    `),w=(0,b.default)(g.Div).attrs({as:"p"}).withConfig({componentId:"sc-dcca4473-4"})(()=>b.css`
        ${v.bodyL}

        color: ${(0,g.getBrand)("bc5",80)};
        text-align: center;
        text-wrap: balance;

        margin-bottom: 0;
    `),R="Missing",A=(0,n.forwardRef)((e,a)=>{let p,f,m,g,v,b,A,L,S,P,_,I=(0,r.c)(34),{heading:M,description:D,backgroundImage:C,isSeamRepeat:O,imageLoading:N,isLoopCopy:U,crossOrigin:B}=e,G=void 0!==O&&O,j=void 0===N?"lazy":N,k=(0,n.useRef)(null),$=(0,n.useRef)(null),F=(0,n.useRef)(null);I[0]!==a?(p=e=>{(k.current=e,"function"==typeof a)?a(e):a&&(a.current=e)},I[0]=a,I[1]=p):p=I[1];let z=p,H=G?"div":"h1",X=C?.desktop;I[2]!==X?(f=(0,s.resolveImageWithAlt)(X),I[2]=X,I[3]=f):f=I[3];let W=f,V=C?.mobile;I[4]!==V?(m=(0,s.resolveImageWithAlt)(V),I[4]=V,I[5]=m):m=I[5];let Y=m,q=!!(W&&Y),K=(0,h.useLenis)(),Z=o(k,$);I[6]!==Z||I[7]!==K?.rootElement?(g=e=>{let{isDesktop:t}=e;if(Z)return;let r=k.current,i=K?.rootElement,n=$.current,a=F.current;if(!r||!i||!n||!a)return;let o=t?50:25;d.default.set(n,{yPercent:-o}),d.default.to(n,{yPercent:o,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"top 100%",end:"bottom 0%",scrub:!0}}),d.default.to(n,{autoAlpha:0,ease:"none",scrollTrigger:{trigger:r,scroller:i,start:"center 50%",end:"bottom 0%",scrub:!0}})},I[6]=Z,I[7]=K?.rootElement,I[8]=g):g=I[8],I[9]!==Z||I[10]!==K?(v={scope:k,dependencies:[K,Z]},I[9]=Z,I[10]=K,I[11]=v):v=I[11],(0,u.useAnimation)(g,v);let Q=void 0!==U&&U||G||void 0,J=!q;return I[12]!==B||I[13]!==j||I[14]!==W||I[15]!==Y?(b=W&&Y?(0,t.jsx)(l.default,{desktop:W,mobile:Y,fill:!0,sizes:"100vw",loading:j,crossOrigin:B}):null,I[12]=B,I[13]=j,I[14]=W,I[15]=Y,I[16]=b):b=I[16],I[17]!==J||I[18]!==b?(A=(0,t.jsx)(E,{ref:$,$isMissing:J,children:b}),I[17]=J,I[18]=b,I[19]=A):A=I[19],I[20]!==H||I[21]!==M||I[22]!==G?(L=(0,t.jsx)(c.default,{children:(0,t.jsx)(y,{children:G?(0,t.jsx)(H,{"data-heading":!0,children:M||R}):(0,t.jsx)(i.default,{children:(0,t.jsx)(H,{"data-heading":!0,children:M||R})})})}),I[20]=H,I[21]=M,I[22]=G,I[23]=L):L=I[23],I[24]!==D?(S=(0,t.jsx)(c.default,{children:(0,t.jsx)(w,{$l:"5/9",$huge:"5/9",children:D})}),I[24]=D,I[25]=S):S=I[25],I[26]!==L||I[27]!==S?(P=(0,t.jsxs)(T,{ref:F,children:[L,S]}),I[26]=L,I[27]=S,I[28]=P):P=I[28],I[29]!==z||I[30]!==Q||I[31]!==A||I[32]!==P?(_=(0,t.jsxs)(x,{ref:z,"aria-hidden":Q,children:[A,P]}),I[29]=z,I[30]=Q,I[31]=A,I[32]=P,I[33]=_):_=I[33],_});A.displayName="BuildsHero";var L=e.i(883495),S=e.i(748656),P=e.i(847873);let _=()=>{let e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e},I=(e,t,r)=>{let i=new Float32Array(16);for(let e=0;e<4;e++)for(let n=0;n<4;n++){let a=0;for(let i=0;i<4;i++)a+=t[4*i+n]*r[4*e+i];i[4*e+n]=a}return e.set(i),e},M=1/Math.tan(40*Math.PI/360),D=new Set(["cdn.sanity.io",new URL(e.i(776159).imageBaseUrl).hostname]),C=new Set(["098203fd71da7dabe971abfd09e03fac564bd089","752acdca25a4ba14424fc6d77942b041e1c3ef22","cacd4aeb9397b9f5f2ef6774cf882ed0df7369e4","a09cf04f753bcc17fe79a01e6b6c1b60f033c4b5","640649a1c5699718bd10a13ac98221c23889d898","c4f2698a8887bd7837219df4c0fb1fa09f3c2445","82a16013b6643f175bdfbb3dfac3395d360c0a75","da8fbe58536f6fc147125ea18c51ddf0035774cc","be8b2f90e3b9ebbdd7fd1487dfb30379f44cec3d","7e6ca8eec99e09e77f609361b37eb00a0edf3b52","fa3eb326e42cb3baf6b31f0366509b4ab75db86c","52d7246289bcdd342dc6b5b9e664c310dd2032d6","4dcf3620a78965a41d767a12324dd762502c34ba","59aee483aad0474534d7420ecb34e19969a69586","6162403e76f709b316dfadb6b51057b40f74bf58"]),O=`
attribute vec2 a_pos;

uniform mat4 u_mvp;

varying vec2 vUv;

void main() {
	vUv = a_pos * 0.5 + 0.5;
	gl_Position = u_mvp * vec4(a_pos, 0.0, 1.0);
}`,N=`
precision highp float;

uniform sampler2D uTex1;
uniform sampler2D uTex2;
uniform sampler2D uDepth1;
uniform sampler2D uDepth2;
uniform vec2 uMouse;
uniform float uDepthStrength;
uniform float uAspect1;     // image w/h for tex1
uniform float uAspect2;     // image w/h for tex2
uniform float uPlaneAspect; // viewport w/h
uniform float uVisibleHalf; // half the frame's height that is on screen, in frame UV
uniform float uProgress;    // 0..1, current section -> next
uniform float uScrubEase;   // 0 scrubs linearly with the scroll, 1 eases in and out
uniform vec3 uBeam;         // width, brightness, tilt
uniform vec2 uPush;         // x: the zoom the photographs pass through, y: their drift

varying vec2 vUv;

vec2 mirrored(vec2 v) {
	vec2 m = mod(v, 2.0);
	return mix(m, 2.0 - m, step(1.0, m));
}

// object-fit: cover, object-position: center bottom, in UV space. The cars sit
// in the bottom third of every photograph, so a wide or short window crops the
// sky, never the wheels. Bottom means the bottom of what is on screen: the
// overscan beyond it is only glimpsed through the tilt (y is up here).
vec2 cover(vec2 uv, float imgA, float planeA) {
	vec2 s = planeA > imgA ? vec2(1.0, imgA / planeA) : vec2(planeA / imgA, 1.0);
	float visible = min(1.0, 2.0 * uVisibleHalf * s.y);
	return vec2((uv.x - 0.5) * s.x + 0.5, (uv.y - 0.5) * s.y + 0.5 * visible);
}

vec2 flipV(vec2 v) {
	return vec2(v.x, 1.0 - v.y);
}

// The outgoing photograph zooms 1 → uPush.x and drifts up with the scroll as it
// leaves; the incoming one settles from uPush.x → 1, rising from below.
// Identity at both ends, so the handover stays exact.
const vec2 MOTION_CENTRE = vec2(0.5, 0.4);

vec2 moveOutgoing(vec2 uv, float p) {
	return MOTION_CENTRE + (uv - MOTION_CENTRE) / mix(1.0, uPush.x, p) - vec2(0.0, uPush.y * p);
}

vec2 moveIncoming(vec2 uv, float p) {
	return MOTION_CENTRE + (uv - MOTION_CENTRE) / mix(uPush.x, 1.0, p) + vec2(0.0, uPush.y * (1.0 - p));
}

// A photograph, covered, with the cursor's depth parallax.
vec3 photo(sampler2D tex, sampler2D depthTex, float aspect, vec2 uv) {
	vec2 s = mirrored(cover(uv, aspect, uPlaneAspect));
	float d = uDepthStrength > 0.0 ? texture2D(depthTex, flipV(s)).r : 0.5;
	s += uMouse * uDepthStrength * (d - 0.5);
	return texture2D(tex, flipV(clamp(s, 0.001, 0.999))).rgb;
}

// Landscape sweeps left to right, its flare streak on the frame's centre line —
// which, overscan and all, is the screen's. Portrait sweeps bottom to top — the
// way the next build rises into a phone's screen — with the flare riding the
// beam, and its tilt measured in true proportions and softened: in screen units
// a phone's height made tilt 1 a 65\xb0 diagonal, which read as sideways again.
const float PORTRAIT_TILT = 0.35;

void main() {
	vec2 uv = vUv;
	float pRaw = clamp(uProgress, 0.0, 1.0);

	// A settled frame needs only its photograph and the cursor's depth. Camera
	// drift still runs in the vertex transform on desktop.
	if (pRaw == 0.0) {
		gl_FragColor = vec4(photo(uTex1, uDepth1, uAspect1, uv), 1.0);
		return;
	}

	float p = mix(pRaw, smoothstep(0.0, 1.0, pRaw), uScrubEase);
	bool isPortrait = uPlaneAspect < 1.0;
	float along = isPortrait ? uv.y : uv.x;
	float across = isPortrait ? uv.x : uv.y;
	float w = uBeam.x;
	float tilt = isPortrait ? uBeam.z * uPlaneAspect * PORTRAIT_TILT : uBeam.z;
	float x = along + (across - 0.5) * tilt;
	float reach = abs(tilt) * 0.5 + 2.5 * w;
	float beam = mix(-reach, 1.0 + reach, p);
	float reveal = smoothstep(beam + w * 0.3, beam - w * 0.3, x);
	float envelope = smoothstep(0.0, 0.08, p) * (1.0 - smoothstep(0.92, 1.0, p));
	float light = exp(-pow((x - beam) / w, 2.0)) * envelope * uBeam.y;
	float streak = isPortrait
		? exp(-abs(x - beam) * 60.0) * exp(-abs(across - 0.5) * 1.5)
		: exp(-abs(uv.y - 0.5) * 60.0) * exp(-abs(uv.x - beam) * 1.5);
	float flare = streak * envelope * uBeam.y * 0.6;

	vec3 outgoing = photo(uTex1, uDepth1, uAspect1, moveOutgoing(uv, p));
	vec3 incoming = photo(uTex2, uDepth2, uAspect2, moveIncoming(uv, p));
	vec3 col = mix(outgoing, incoming, reveal) * (1.0 + light * 0.3);
	col += vec3(1.0, 0.95, 0.85) * light * 0.6 + vec3(0.75, 0.85, 1.0) * flare;

	gl_FragColor = vec4(col, 1.0);
}`,U=e=>{"close"in e&&e.close()},B=1e3/60,G=["u_mvp","uTex1","uTex2","uDepth1","uDepth2","uDepthStrength","uMouse","uAspect1","uAspect2","uPlaneAspect","uVisibleHalf","uProgress","uScrubEase","uBeam","uPush"],j=(e,t,r)=>{let i=e.createShader(t);return i?(e.shaderSource(i,r),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))?i:(e.deleteShader(i),null):null},k=(e,t,r,i,n)=>{let a=e.createTexture();return e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r,r,0,e.RGBA,e.UNSIGNED_BYTE,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),a},$=e=>Math.max(-1,Math.min(1,e)),F=b.default.div.withConfig({componentId:"sc-38a6f4ab-0"})(()=>b.css`
		position: fixed;
		inset: 0;
		z-index: 0;

		pointer-events: none;
		user-select: none;

		canvas {
			position: absolute;
			inset: 0;
			display: block;
			width: 100%;
			height: 100%;
		}
	`),z=b.default.div.withConfig({componentId:"sc-38a6f4ab-1"})(()=>b.css`
		position: absolute;
		inset: 0;

		background:
			linear-gradient(
				to top,
				transparent 50%,
				color-mix(in srgb, var(--global-black) var(--scrim-top, ${P.PLANE_CONFIG.scrimTop}%), transparent) 100%
			),
			linear-gradient(
				to top,
				color-mix(in srgb, var(--global-black) var(--scrim-bottom, ${P.PLANE_CONFIG.scrimBottom}%), transparent) 0%,
				transparent 40%
			);
	`),H=(0,n.lazy)(()=>e.A(763793)),X=(0,n.lazy)(()=>e.A(357525)),W=new Set(["vui","gui","planes-debug"]),V=e=>{},Y=e=>{let i,o,l,s,u,c,p,g,v,b,x=(0,r.c)(29),{children:E,config:T,onTuning:y}=e,w=(0,h.useLenis)(),R=(0,n.useRef)(null),A=(0,n.useRef)(T),[W,Y]=(0,n.useState)(null),[K,Z]=(0,n.useState)(!1),[Q,J]=(0,n.useState)(!1);x[0]!==W||x[1]!==y?(i=e=>{A.current={...A.current,...e},W?.setConfig(e);let t=R.current;t&&void 0!==e.scrimTop&&t.style.setProperty("--scrim-top",`${e.scrimTop}%`),t&&void 0!==e.scrimBottom&&t.style.setProperty("--scrim-bottom",`${e.scrimBottom}%`),y?.(e)},x[0]=W,x[1]=y,x[2]=i):i=x[2];let ee=i;return x[3]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{J("1"===new URLSearchParams(window.location.search).get("parallax-debug")),Z([...new URLSearchParams(window.location.search).keys()].some(q))},l=[],x[3]=o,x[4]=l):(o=x[3],l=x[4]),(0,n.useEffect)(o,l),x[5]!==w?(s=()=>{let e=R.current;if(!w||!e)return;let t=window.matchMedia("(prefers-reduced-motion: no-preference)"),r=window.matchMedia(m),i=!r.matches,n=null,a=null,o=()=>{n?.destroy(),n=null,a?.remove(),a=null,V(null),Y(null)},l=()=>{if(!t.matches)return void o();let l=!r.matches;l!==i&&(o(),i=l),n||(()=>{if(a=document.createElement("canvas"),e.appendChild(a),!(n=(({canvas:e,isTouchMode:t=!1,config:r,onUnavailable:i})=>{let n,a,o,l={...P.PLANE_CONFIG,...r},s=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t,powerPreference:"high-performance"});if(!s)return null;let u=(n=j(s,s.VERTEX_SHADER,O),a=j(s,s.FRAGMENT_SHADER,N),o=s.createProgram(),n&&a&&o?(s.attachShader(o,n),s.attachShader(o,a),s.linkProgram(o),s.deleteShader(n),s.deleteShader(a),s.getProgramParameter(o,s.LINK_STATUS))?o:(s.deleteProgram(o),null):null);if(!u)return null;s.useProgram(u);let c=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,c),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),s.STATIC_DRAW);let h=s.getAttribLocation(u,"a_pos");s.enableVertexAttribArray(h),s.vertexAttribPointer(h,2,s.FLOAT,!1,0,0);let p=Object.fromEntries(G.map(e=>[e,s.getUniformLocation(u,e)]));s.uniform1i(p.uTex1,0),s.uniform1i(p.uTex2,1),s.uniform1i(p.uDepth1,2),s.uniform1i(p.uDepth2,3),s.clearColor(0,0,0,1),s.disable(s.BLEND),s.disable(s.DEPTH_TEST);let m=k(s,0,1,new Uint8Array([0,0,0,255]),s.CLAMP_TO_EDGE),g=k(s,2,1,new Uint8Array([128,128,128,255]),s.CLAMP_TO_EDGE),v=new Map,b={frames:0,drawCalls:0,uploads:0,planes:0,textures:0,current:-1,progress:0,velocity:0,mouse:{x:0,y:0}},x=[],E=new Float32Array(16),T=0,y=0,w=0,R=!1,A=!0,F=!1,z=!1,H=!0,X=!0,W=null,V=!1,Y=null,q=0,K=0,Z={x:0,y:0},Q=b.mouse,J=((e,{uploadBudgetMs:t,uploadStarvationFrames:r,onUpload:i,maxTextureSize:n,useImageElement:a=!1})=>{let o=new Map,l=new Map,s=new Map,u=[],c=1,d=0,h=!1,p=Math.min(n??1/0,e.getParameter(e.MAX_TEXTURE_SIZE));return{acquire:(e,t)=>{let r=o.get(e);if(r)return l.set(r,(l.get(r)??0)+1),r;let n={id:c++,key:e,texture:null,width:t.naturalWidth,height:t.naturalHeight,aspect:t.naturalWidth/t.naturalHeight,state:"decoding"};return o.set(e,n),l.set(n,1),((e,t,r)=>{if(r)return e.decode().then(()=>{if(!e.naturalWidth||!e.naturalHeight||Math.max(e.naturalWidth,e.naturalHeight)>t)throw Error("Image cannot be uploaded within the mobile texture budget");return e});if("function"!=typeof createImageBitmap)return Promise.resolve(e);let i=Math.min(1,t/Math.max(e.naturalWidth,e.naturalHeight));return createImageBitmap(e,{premultiplyAlpha:"none",...i<1?{resizeWidth:Math.max(1,Math.round(e.naturalWidth*i)),resizeHeight:Math.max(1,Math.round(e.naturalHeight*i))}:{}}).catch(()=>e)})(t,p,a).then(t=>{h||o.get(e)!==n?U(t):(s.set(n,t),n.state="queued",u.push(n))}).catch(()=>{h||o.get(e)!==n||(n.state="failed",i?.(n))}),n},release:t=>{if(o.get(t.key)!==t)return;let r=(l.get(t)??1)-1;if(r>0)return void l.set(t,r);l.delete(t),o.delete(t.key);let i=s.get(t);i&&U(i),s.delete(t);let n=u.indexOf(t);-1!==n&&u.splice(n,1),t.texture&&e.deleteTexture(t.texture),t.texture=null},flush:(n,a=[])=>{if(0===u.length)return d=0,!1;if(n>t&&d<r)return d++,!1;d=0;let o=a.find(e=>e?.state==="queued"&&s.has(e)),l=o?u.indexOf(o):0,[c]=u.splice(l,1),h=s.get(c);return(s.delete(c),h)?(((t,r)=>{let i=e.createTexture();if(!i){t.state="failed";return}e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)}catch{e.deleteTexture(i),t.state="failed";return}if(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.getError()!==e.NO_ERROR){e.deleteTexture(i),t.state="failed";return}t.width="naturalWidth"in r?r.naturalWidth:r.width,t.height="naturalHeight"in r?r.naturalHeight:r.height,t.aspect=t.width/t.height,t.texture=i,t.state="ready"})(c,h),U(h),i?.(c),"ready"===c.state):(c.state="failed",!1)},get hasPendingUploads(){return u.length>0},get size(){return o.size},destroy:()=>{for(let e of(h=!0,s.values()))U(e);for(let t of o.values())t.texture&&e.deleteTexture(t.texture),t.texture=null;s.clear(),o.clear(),l.clear(),u.length=0}}})(s,{uploadBudgetMs:l.uploadBudgetMs,uploadStarvationFrames:l.uploadStarvationFrames,maxTextureSize:t?2048:void 0,useImageElement:t,onUpload:e=>{"failed"===e.state?es():(b.uploads++,b.textures=J.size,X=!0)}}),ee=e=>{let t=e?v.get(e):null;!t||!e||--t.references>0||(t.image.onload=null,t.image.removeAttribute("src"),t.entry&&J.release(t.entry),v.delete(e))},et=e=>{let t=e?v.get(e)?.entry:null;return t?.state==="ready"?t.texture:g},er=e=>{let t=e.pose.isPainted;e.pose.isPainted=!1,e.el.removeAttribute(f),t&&e.onPaintChange?.(!1)},ei=()=>{H=!0,X=!0,Y=null},en=(e,t)=>{s.activeTexture(s.TEXTURE0+e),s.bindTexture(s.TEXTURE_2D,t??m)},ea=(r,i)=>{let n=performance.now();if(b.frames++,z||F||document.hidden||((A||window.devicePixelRatio!==w)&&(()=>{A=!1,ei(),w=window.devicePixelRatio||1,T=e.clientWidth,y=e.clientHeight;let r=t?Math.min(2,2048/Math.max(T,y)):l.maxDevicePixelRatio,i=Math.min(w,r),n=Math.round(T*i),a=Math.round(y*i);if(!n||!a){R=!1;return}(e.width!==n||e.height!==a)&&(e.width=n,e.height=a),s.viewport(0,0,n,a),s.uniform1f(p.uPlaneAspect,T/y),R=!0,Y=null})(),!R||0===x.length))return;let a=e.getBoundingClientRect();if(!a.width||!a.height)return;let o=T/a.width,u=x[0],c=u.el.getBoundingClientRect(),d=(c.top-a.top)*o;if(H){for(let e of x){let t=e===u?c:e.el.getBoundingClientRect();e.layoutY=(t.top-c.top)*o,e.pose.height=t.height*o}H=!1}let h=null,m=-1,g=0;for(let e=0;e<x.length;e++){let t=x[e],{pose:r}=t;if(r.y=d+t.layoutY,r.offset=r.height>0?r.y/r.height:0,r.isCurrent=!1,0===e){let e=t===Y?r.y-q:0;Y=t,q=r.y,g=Math.abs(e)<y?e:0}r.y<=.5&&r.y+r.height>.5&&(h=t,m=e)}for(let e of x){let{entry:t,pose:r}=e;r.isPainted||t?.state!=="ready"||(r.isPainted=!0,e.el.setAttribute(f,"true"),e.onPaintChange?.(!0))}if(!h)return;h.pose.isCurrent=!0;let L=m+1<x.length?x[m+1]:null,S=Math.max(0,Math.min(1,-h.pose.y/h.pose.height)),P=$((i>0?-g*B/i/y:0)/l.velocityScale);K+=(P-K)*(1-(1-l.velocityEase)**(i/B)),0===P&&1e-4>Math.abs(K)&&(K=0),0===K&&.5>=Math.abs(h.pose.y)&&(S=0),l.previewLoop>0?S=.5-.5*Math.cos(2*Math.PI*r/l.previewLoop):l.previewProgress>=0&&(S=Math.min(1,l.previewProgress));let D=0===S&&0===K,C=1-(1-l.mouseEase)**(i/B);if(Q.x+=(Z.x-Q.x)*C,Q.y+=(Z.y-Q.y)*C,b.current=m,b.progress=S,b.velocity=K,!t||!D||!V||X||W!==h){var O,N;let e,i,n,a,o;O=h,N=S,e=O.entry,i=L?.entry??e,n=t?1:l.overscan,a=t||l.depthSwayPeriod<=0?0:l.depthSwayY*Math.sin(2*Math.PI*r/l.depthSwayPeriod),o=Q.y+a,((e,{aspect:t,yaw:r,pitch:i,x:n,y:a,overscan:o})=>{var l,s,u,c,d,h;let p,f,m,g,v,b,x,E,T,y,w=(l=-i,p=_(),f=Math.cos(l),m=Math.sin(l),p[5]=f,p[6]=m,p[9]=-m,p[10]=f,p);return I(w,w,(s=-r,g=_(),v=Math.cos(s),b=Math.sin(s),g[0]=v,g[2]=-b,g[8]=b,g[10]=v,g)),I(w,w,(u=-n,c=-a,d=-M,(x=_())[12]=u,x[13]=c,x[14]=d,x)),e.set((E=1/Math.tan(40*Math.PI/360),(T=new Float32Array(16))[0]=E/t,T[5]=E,T[10]=-1.02020202020202,T[11]=-1,T[14]=-.20202020202020202,T)),I(e,e,w),I(e,e,(h=t*o,(y=_())[0]=h,y[5]=o,y))})(E,{aspect:T/y,yaw:t?0:-Q.x*l.tiltX,pitch:t?0:o*l.tiltY,x:t?0:Math.sin(r)*l.driftX,y:t?0:Math.cos(r)*l.driftY,overscan:n}),en(0,e?.texture??null),en(1,i?.texture??null),en(2,et(O.depthSource)),en(3,et((L??O).depthSource)),s.uniform2f(p.uMouse,Q.x,-o),s.uniform1f(p.uScrubEase,l.scrubEase),s.uniform3f(p.uBeam,l.beamWidth,l.beamBrightness,l.beamTilt),s.uniform2f(p.uPush,l.motionZoom,l.motionDrift),s.uniform1f(p.uDepthStrength,t?0:l.depthStrength),s.uniformMatrix4fv(p.u_mvp,!1,E),s.uniform1f(p.uAspect1,e?.aspect??T/y),s.uniform1f(p.uAspect2,i?.aspect??T/y),s.uniform1f(p.uVisibleHalf,Math.min(.5,.5/n+l.tiltMargin)),s.uniform1f(p.uProgress,N),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_STRIP,0,4),b.drawCalls++,X=!1,W=h}V=D;let U=performance.now()-n+Math.max(0,i-B);if(J.hasPendingUploads){let e=x[m-1];J.flush(U,[h.entry,L?.entry,e?.entry,v.get(h.depthSource??"")?.entry,v.get(L?.depthSource??"")?.entry])}},eo=e=>{Z.x=$(e.clientX/window.innerWidth*2-1),Z.y=$(e.clientY/window.innerHeight*2-1)},el=()=>{Z.x=0,Z.y=0},es=()=>{for(let e of(F=!0,x))er(e);i?.()},eu=new ResizeObserver(()=>{A=!0}),ec=new ResizeObserver(ei);return eu.observe(e),L.default.addEventListener("refresh",ei),document.addEventListener("visibilitychange",ei),e.addEventListener("webglcontextlost",es),t||window.addEventListener("pointermove",eo,{passive:!0}),document.documentElement.addEventListener("pointerleave",el),d.gsap.ticker.add(ea),{stats:b,poses:()=>x.map(e=>({...e.pose})),ensure:({el:e,img:r,depthMapUrl:i,onPaintChange:n})=>{if(z)return{release:()=>{}};let a={depthSource:null,el:e,img:r,entry:null,pose:{el:e,y:0,height:0,offset:0,isPainted:!1,isCurrent:!1},layoutY:0,onPaintChange:n,adopt:()=>{let e,n=!r.complete||0===r.naturalWidth||(0,S.isDeferredImage)(r)?null:r.currentSrc||r.src||null;if(!n||a.entry?.key===n)return;er(a),a.entry&&J.release(a.entry),a.entry=J.acquire(n,r);let o=i?(e=>{try{let t=new URL(e);if(!D.has(t.hostname)||!t.pathname.startsWith("/images/"))return e;return t.searchParams.set("w",String(1024)),t.searchParams.set("h",String(1024)),t.searchParams.set("fit","max"),t.searchParams.set("fm","webp"),t.searchParams.set("q",String(85)),t.searchParams.set("blur",String(8)),t.searchParams.delete("auto"),t.searchParams.delete("dpr"),t.toString()}catch{return e}})(i):(e=n.match(/\/([a-f0-9]{40})-2880x1800\./)?.[1])&&C.has(e)?`/images/build-depth/${e}.webp`:null;a.depthSource!==o&&(ee(a.depthSource),a.depthSource=o,(e=>{if(t||!e)return;let r=v.get(e);if(r)return r.references++;let i=new Image,n={image:i,entry:null,references:1};v.set(e,n),i.onload=()=>{z||v.get(e)!==n||(n.entry=J.acquire(e,i),b.textures=J.size)},i.crossOrigin="anonymous",i.src=e})(o)),b.textures=J.size,X=!0}},o=x.findIndex(t=>t.el.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING);x.splice(-1===o?x.length:o,0,a),b.planes=x.length,ec.observe(e),ei(),a.adopt(),r.addEventListener("load",a.adopt);let l=!1;return{release:()=>{if(l)return;l=!0,r.removeEventListener("load",a.adopt),er(a),ec.unobserve(e),a.entry&&J.release(a.entry),ee(a.depthSource),b.textures=J.size;let t=x.indexOf(a);-1!==t&&x.splice(t,1),b.planes=x.length,ei(),W===a&&(W=null),Y===a&&(Y=null)}}},setConfig:e=>{z||(Object.assign(l,e),X=!0,void 0!==e.maxDevicePixelRatio&&(A=!0))},destroy:()=>{if(!z){for(let t of(z=!0,d.gsap.ticker.remove(ea),eu.disconnect(),ec.disconnect(),L.default.removeEventListener("refresh",ei),document.removeEventListener("visibilitychange",ei),e.removeEventListener("webglcontextlost",es),window.removeEventListener("pointermove",eo),document.documentElement.removeEventListener("pointerleave",el),x))t.img.removeEventListener("load",t.adopt),er(t);for(let{image:e}of(x.length=0,Y=null,W=null,b.planes=0,v.values()))e.onload=null,e.removeAttribute("src");v.clear(),J.destroy(),b.textures=0,s.deleteTexture(g),s.deleteTexture(m),s.deleteBuffer(c),s.deleteProgram(u),s.getExtension("WEBGL_lose_context")?.loseContext()}}}})({canvas:a,isTouchMode:i,config:A.current,onUnavailable:o}))){a.remove(),a=null;return}V(n),Y(n)})()};return l(),t.addEventListener("change",l),r.addEventListener("change",l),()=>{t.removeEventListener("change",l),r.removeEventListener("change",l),o()}},u=[w],x[5]=w,x[6]=s,x[7]=u):(s=x[6],u=x[7]),(0,n.useEffect)(s,u),x[8]!==W?(c=W?(0,t.jsx)(z,{}):null,x[8]=W,x[9]=c):c=x[9],x[10]!==c?(p=(0,t.jsx)(F,{ref:R,"aria-hidden":"true",children:c}),x[10]=c,x[11]=p):p=x[11],x[12]!==T||x[13]!==ee||x[14]!==Q||x[15]!==W?(g=Q&&W?(0,t.jsx)(n.Suspense,{fallback:null,children:(0,t.jsx)(X,{base:T,onChange:ee,onClose:()=>J(!1)})}):null,x[12]=T,x[13]=ee,x[14]=Q,x[15]=W,x[16]=g):g=x[16],x[17]!==T||x[18]!==ee||x[19]!==Q||x[20]!==K||x[21]!==W?(v=K&&!Q&&W?(0,t.jsx)(n.Suspense,{fallback:null,children:(0,t.jsx)(H,{base:T,onChange:ee})}):null,x[17]=T,x[18]=ee,x[19]=Q,x[20]=K,x[21]=W,x[22]=v):v=x[22],x[23]!==E||x[24]!==W||x[25]!==p||x[26]!==g||x[27]!==v?(b=(0,t.jsxs)(a,{value:W,children:[p,E,g,v]}),x[23]=E,x[24]=W,x[25]=p,x[26]=g,x[27]=v,x[28]=b):b=x[28],b};function q(e){return W.has(e.toLowerCase())}Y.displayName="ImagePlanes";var K=e.i(124821),Z=e.i(88664),Q=e.i(22584),J=e.i(135741);let ee=(0,b.default)(g.Div).attrs({as:"article"}).withConfig({componentId:"sc-2b8449e6-0"})(()=>b.css`
        --height: 100dvh;

        position: relative;
        z-index: 1;
        overflow: clip;

        width: 100%;
        height: var(--height);

        /* NOTE • Under the WebGL listing the photograph is painted on the shared
           frame beneath this box once its texture is up. The DOM copy stays in
           the layout — its rect is what the frame reads — and fades out over the
           frame, so the swap settles rather than cuts. */
        picture {
            transition: opacity ${(0,g.getTime)("l")} ${(0,g.getEase)("ease")};
        }

        &[${f}='true'] picture {
            opacity: 0;
        }
    `),et=(0,b.default)(g.Div).withConfig({componentId:"sc-2b8449e6-1"})(()=>b.css`
        position: absolute;
        inset: 0;
        z-index: -1;

        pointer-events: none;
        user-select: none;

        &:after {
            content: '';
            position: absolute;
            inset: 0 0 50% 0;
            z-index: 1;
            pointer-events: none;
            user-select: none;

            background: linear-gradient(to top, ${(0,g.getGlobal)("black",0)} 0%, ${(0,g.getGlobal)("black",60)} 100%);
        }

        /* NOTE • Under the WebGL listing the frame never stops moving, and a
           gradient scrolling away with this box would read as a band sliding over
           the photograph — the layer's own fixed scrim stands in for it. */
        [${f}='true'] > &:after {
            opacity: 0;
        }

        picture {
            display: block;
            width: 100%;
            height: 100%;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                /* The cars sit low in every photograph: a wide or short window crops
                   the sky, never the wheels. The WebGL frame crops the same way. */
                object-position: center bottom;
            }
        }
    `),er=(0,b.default)(g.Div).attrs({as:"div"}).withConfig({componentId:"sc-2b8449e6-2"})(()=>b.css`	
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    padding-top: ${(0,g.getGap)("huge")};
    /* Long titles must grow down from the header clearance, never above it. */
    min-height: 50dvh;

    @media (max-height: 700px) {
        padding-top: 8rem;
    }

    ${g.bp.l`
        padding-top: ${(0,g.getGap)("col")};
    `}

    @media (max-height: 500px) {
        padding-top: 8rem;
    }
`),ei=(0,b.default)(g.Div).withConfig({componentId:"sc-2b8449e6-3"})(()=>b.css`
        display: flex;
        justify-content: center;
        gap: ${(0,g.getGap)("xs")};
        margin-bottom: ${(0,g.getGap)("sm")};
    `),en=(0,b.default)(g.Div).withConfig({componentId:"sc-2b8449e6-4"})(()=>b.css`
        /* By attribute: an <h2> on the first pass, a plain div in loop copies. */
        [data-heading] {
            ${v.headlineL}

            font-style: italic;
            text-align: center;
            color: ${(0,g.getBrand)("bc5")};

            @media (max-height: 700px) {
                font-size: 4.4rem;
                line-height: 1.1;
            }

            @media (max-height: 500px) {
                font-size: 3.6rem;
            }
        }
    `),ea=(0,b.default)(g.Div).attrs({as:"p"}).withConfig({componentId:"sc-2b8449e6-5"})(()=>b.css`
        ${v.bodyL}

        margin: ${(0,g.getGap)("s")} 0 ${(0,g.getGap)("l")};

        text-align: center;
        text-wrap: balance;
        color: ${(0,g.getGlobal)("white")};

        filter: drop-shadow(0 8px 16px ${(0,g.getGlobal)("black",60)});

        @media (max-height: 500px) {
            margin: ${(0,g.getGap)("xs")} 0 ${(0,g.getGap)("s")};
        }
    `),eo=(0,b.default)(g.Div).withConfig({componentId:"sc-2b8449e6-6"})(()=>b.css`
        display: flex;
        justify-content: center;
        gap: ${(0,g.getGap)("s")};
    `),el=b.default.button.withConfig({componentId:"sc-2b8449e6-7"})(()=>b.css`
		${(0,J.sharedStyles)({})}

		&:disabled,
		&:disabled:hover {
			cursor: not-allowed;
			pointer-events: auto;
			border-color: ${(0,g.getBrand)("bc5",10)};

			> span {
				opacity: 1;
			}
		}
	`),es=(0,n.forwardRef)((e,a)=>{let s,p,f,m,g,v,b,x,E,T,y,w,R=(0,r.c)(47),{buildName:A,buildCode:L,slug:S,shortDescription:P,available:_,comingSoon:I,price:M,desktopImage:D,depthMapUrl:C,mobileImage:O,basePath:N,imageLoading:U,imageEnabled:B,isLoopCopy:G,crossOrigin:j}=e,k=void 0===N?Q.ARCHIVE_BASE_PATH:N,$=void 0===U?"lazy":U,F=void 0===B||B,z=void 0!==G&&G,H=(0,n.useRef)(null),X=(0,n.useRef)(null),W=(0,n.useRef)(null),V=(0,h.useLenis)();R[0]!==a?(s=e=>{(X.current=e,"function"==typeof a)?a(e):a&&(a.current=e)},R[0]=a,R[1]=s):s=R[1];let Y=s,q=z?"div":"h2",J=o(X,W,C);if(R[2]!==J||R[3]!==V?.rootElement?(p=e=>{let{isDesktop:t}=e;if(J)return;let r=H.current,i=X.current,n=V?.rootElement,a=W.current;if(!r||!i||!n||!a)return;let o=t?50:20;d.default.set(a,{yPercent:-o}),d.default.to(a,{yPercent:o,ease:"none",scrollTrigger:{trigger:i,scroller:n,start:"top bottom",end:"bottom top",scrub:!0}})},R[2]=J,R[3]=V?.rootElement,R[4]=p):p=R[4],R[5]!==J||R[6]!==V?(f={scope:X,dependencies:[V,J]},R[5]=J,R[6]=V,R[7]=f):f=R[7],(0,u.useAnimation)(p,f),!A||!L||!S||!P)return null;let es=!!(D&&O),eu=z||void 0;if(R[8]!==j||R[9]!==D||R[10]!==es||R[11]!==F||R[12]!==$||R[13]!==O?(m=es&&D&&O?(0,t.jsx)(et,{ref:H,children:(0,t.jsx)(l.default,{enabled:F,desktop:D,mobile:O,desktopInLandscape:!0,fill:!0,sizes:"100vw",quality:85,loading:$,crossOrigin:j,ref:W})}):null,R[8]=j,R[9]=D,R[10]=es,R[11]=F,R[12]=$,R[13]=O,R[14]=m):m=R[14],R[15]!==L?(g=(0,t.jsx)(Z.default,{text:L}),R[15]=L,R[16]=g):g=R[16],R[17]!==_||R[18]!==I||R[19]!==M){let e;v=_?(0,t.jsx)(Z.default,{text:I?"Coming soon":((e=(M??"").replace(/^£+\s*/,"").trim())?`\xa3${e}`:"")||"For Sale",isLight:!0}):null,R[17]=_,R[18]=I,R[19]=M,R[20]=v}else v=R[20];return R[21]!==g||R[22]!==v?(b=(0,t.jsxs)(ei,{$l:"5/9",children:[g,v]}),R[21]=g,R[22]=v,R[23]=b):b=R[23],R[24]!==q||R[25]!==A?(x=(0,t.jsx)(en,{$l:"4/10",children:(0,t.jsx)(i.default,{isScrubbed:!0,children:(0,t.jsx)(q,{"data-heading":!0,children:A})})}),R[24]=q,R[25]=A,R[26]=x):x=R[26],R[27]!==P?(E=(0,t.jsx)(ea,{$l:"5/9",children:P}),R[27]=P,R[28]=E):E=R[28],R[29]!==_||R[30]!==k||R[31]!==L||R[32]!==A||R[33]!==I||R[34]!==z||R[35]!==S?(T=(0,t.jsx)(eo,{children:_&&I?(0,t.jsx)(el,{type:"button",disabled:!0,children:(0,t.jsx)("span",{children:"View build"})}):(0,t.jsx)(K.default,{to:(0,Q.buildHref)(k,S),transitionAwaitsContent:!0,prefetch:!0,tabIndex:z?-1:void 0,label:"View Build",aria:`View build ${L} – ${A}`})}),R[29]=_,R[30]=k,R[31]=L,R[32]=A,R[33]=I,R[34]=z,R[35]=S,R[36]=T):T=R[36],R[37]!==b||R[38]!==x||R[39]!==E||R[40]!==T?(y=(0,t.jsx)(er,{children:(0,t.jsxs)(c.default,{children:[b,x,E,T]})}),R[37]=b,R[38]=x,R[39]=E,R[40]=T,R[41]=y):y=R[41],R[42]!==Y||R[43]!==y||R[44]!==eu||R[45]!==m?(w=(0,t.jsxs)(ee,{ref:Y,"aria-hidden":eu,children:[m,y]}),R[42]=Y,R[43]=y,R[44]=eu,R[45]=m,R[46]=w):w=R[46],w});es.displayName="SingleBuild";var eu=e.i(371136),ec=e.i(764548),ed=e.i(573943),eh=e.i(676842);let ep="data-lenis-prevent-touch";var ef=Q;let em=(0,b.default)(g.Div).attrs({as:"section"}).withConfig({componentId:"sc-6b22fb2c-0"})(()=>b.css`
		position: relative;
        overflow: clip;
        background: ${(0,g.getGlobal)("black")};

        /* NOTE • The loop copies exist for native touch under Lenis. Reduced motion
           runs without Lenis (SmoothScroll returns bare children), so nothing
           would ever fold them back: one list, one closing hero, like the page
           before the loop. Children run hero, ul, hero, ul, hero… */
        @media (prefers-reduced-motion: reduce) {
            > ul:nth-of-type(n + 2),
            > section:nth-of-type(n + 3) {
                display: none;
            }
        }

        > ul {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;

            > li {
                width: 100%;
                height: auto;
            }
        }
	`),eg=({builds:e,hero:r,infiniteScroll:i=!1,basePath:a=ef.ARCHIVE_BASE_PATH,emptyDescription:o,withImagePlanes:l=!1})=>{let[s,u]=(0,n.useState)({}),[c,d]=(0,n.useState)(()=>new Set),p=s.snapDamping??P.PLANE_CONFIG.snapDamping,f=(0,n.useCallback)(e=>(1-(1+p*e)*Math.exp(-p*e))/(1-(1+p)*Math.exp(-p)),[p]),m={duration:s.snapDuration??P.PLANE_CONFIG.snapDuration,easing:f},g=s.wheelMultiplier??P.PLANE_CONFIG.wheelMultiplier,v=s.wheelMaxStep??P.PLANE_CONFIG.wheelMaxStep,b=s.wheelDepartureRatio??P.PLANE_CONFIG.wheelDepartureRatio,x=(0,n.useMemo)(()=>({multiplier:g,maxStep:v,departureRatio:b}),[g,v,b]),E=s.touchSettleDuration??P.PLANE_CONFIG.touchSettleDuration,T=s.touchRestDelay??P.PLANE_CONFIG.touchRestDelay,y=(0,n.useMemo)(()=>({debounce:0,duration:E,nativeRestDelay:T,easing:P.touchSettleEase}),[E,T]),w=(0,n.useMemo)(()=>{let t;return t=new Map,e.map(e=>{let r=t.get(e._id)??0;return t.set(e._id,r+1),0===r?e._id:`${e._id}-${r}`})},[e]),R=(0,n.useMemo)(()=>w.join("|"),[w]),S=0===e.length,_=i&&e.length>1,I=_?Math.min(12,Math.max(2,Math.ceil(16/Math.max(1,e.length+1))+1)):1,M=i&&!S?"eager":"lazy",D=(0,n.useMemo)(()=>Array.from({length:I},(e,t)=>`copy-${t}`),[I]),C=(0,n.useRef)(null),O=(0,n.useRef)(null),N=(0,n.useRef)([]),U=(0,n.useRef)([]),B=(0,n.useRef)(0),G=(0,h.useLenis)(),j=(0,n.useCallback)(()=>[O.current,...N.current,...U.current].filter(Boolean),[]),k=(0,eu.useLenisSnap)(G,j,[R,I],l?{listingWheel:x,debounce:s.snapDebounce??P.PLANE_CONFIG.snapDebounce,...m}:{debounce:500}),$=(0,n.useMemo)(()=>Array.from({length:I},(e,t)=>e=>{U.current[t]=e,k.current?.()}),[I,k]),F=(0,n.useCallback)(()=>B.current,[]);if((0,n.useEffect)(()=>{if(!i||S)return;let e=new Map;N.current.forEach((t,r)=>{t&&e.set(t,r%w.length)});let t=new IntersectionObserver(t=>{let r=t.flatMap(t=>{let r=e.get(t.target);return t.isIntersecting&&void 0!==r?w.length?[...new Set([r-1,r,r+1].flatMap(e=>{if(!_&&(e<0||e>=w.length))return[];let t=w[(e%w.length+w.length)%w.length];return t?[t]:[]}))]:[]:[]});r.length&&d(e=>r.every(t=>e.has(t))?e:new Set([...e,...r]))},{root:G?.rootElement??null,threshold:.01});for(let r of e.keys())t.observe(r);return()=>t.disconnect()},[w,i,S,_,G]),(0,n.useEffect)(()=>{if(!G||!l||S)return;let e=G.rootElement,t=e.clientHeight,r=G.scroll,i=()=>{e.clientHeight===t&&(r=G.scroll)},n=new ResizeObserver(()=>{let i=e.clientHeight;if(!i||i===t)return;let n=t>0?r*i/t:r;t=i,e.setAttribute(ec.SCROLL_RESIZING_ATTRIBUTE,""),e.setAttribute(ec.SCROLL_FOLDING_ATTRIBUTE,"");try{G.resize(),L.default.refresh(),G.scrollTo(n,{immediate:!0,programmatic:!1}),r=G.scroll,k.current?.()}finally{e.removeAttribute(ec.SCROLL_FOLDING_ATTRIBUTE),e.removeAttribute(ec.SCROLL_RESIZING_ATTRIBUTE)}});return n.observe(e),G.on("scroll",i),()=>{n.disconnect(),G.off("scroll",i)}},[G,l,S,k]),(0,n.useEffect)(()=>{if(!G||!_)return;let e=G.options.infinite;return G.options.infinite=!0,G.resize(),L.default.refresh(),()=>{G.options.infinite=e,G.resize(),L.default.refresh()}},[G,_]),(0,n.useEffect)(()=>{let e=G?.rootElement,t=C.current;if(!e||!t||!_)return;let r=()=>{let t=O.current,r=U.current[0];t&&r&&(B.current=r.offsetTop-t.offsetTop,(0,ec.setScrollLoop)(e,B.current))};r();let i=new ResizeObserver(r);return i.observe(t),()=>{i.disconnect(),B.current=0,(0,ec.clearScrollLoop)(e)}},[G,_]),((e,t,r,{getScope:i}={})=>{(0,n.useEffect)(()=>{if(!e||!r)return;let n=e.rootElement,a=null,o=!1,l=()=>Array.from((i?.()??n).querySelectorAll("img")).every(e=>e.complete),s=()=>{let{loop:r,limit:i,position:a}={loop:t(),limit:n.scrollHeight-n.clientHeight,position:n.scrollTop};if(r<=0||i<r)return;let o=Math.round((i/2-a)/r)*r;0!==o&&((t,r,i)=>{if(t<0||t>r||!l())return(0,ed.scrollTrace)("fold skipped",{reason:i,target:t,limit:r,imagesReady:l()});(0,ed.scrollTrace)("fold",{reason:i,from:Math.round(n.scrollTop),to:t}),n.setAttribute(ec.SCROLL_FOLDING_ATTRIBUTE,"");try{e.scrollTo(t,{immediate:!0,programmatic:!1})}finally{n.removeAttribute(ec.SCROLL_FOLDING_ATTRIBUTE)}})(a+o,i,"centre")},u=()=>{if((0,ec.isScrollResetting)(n)||(0,ec.isScrollFolding)(n)){a=null;return}if("native"===e.isScrolling){a="native";return}if("smooth"===e.isScrolling){a="smooth";return}"native"!==a||(a=null,o||((0,ed.scrollTrace)("rest",{position:Math.round(n.scrollTop)}),s()))},c=()=>{o=!0,(0,ed.scrollTrace)("touchstart",{position:Math.round(n.scrollTop),isScrolling:e.isScrolling})},d=()=>{o=!1,(0,ed.scrollTrace)("touchend",{position:Math.round(n.scrollTop),isScrolling:e.isScrolling}),!1===e.isScrolling&&s()};return e.on("scroll",u),n.addEventListener("touchstart",c,{passive:!0}),n.addEventListener("touchend",d,{passive:!0}),n.addEventListener("touchcancel",d,{passive:!0}),()=>{e.off("scroll",u),n.removeEventListener("touchstart",c),n.removeEventListener("touchend",d),n.removeEventListener("touchcancel",d)}},[e,t,r,i])})(G,F,_,{getScope:(0,n.useCallback)(()=>C.current,[])}),(0,n.useEffect)(()=>{let e=C.current;if(G&&e&&l&&!S)return((e,t,r,{duration:i,easing:n})=>{let a=e.rootElement,o=t.getAttribute(ep),l=null,s=()=>e.isStopped||e.isLocked||(0,ec.isScrollResetting)(a)||(0,ec.isScrollFolding)(a)||a.hasAttribute(ec.SCROLL_RESIZING_ATTRIBUTE),u=()=>{l=null,a.removeAttribute(ec.SCROLL_DRAGGING_ATTRIBUTE)},c=t=>{if(u(),1!==t.touches.length||s())return;let i=t.target;if(i instanceof Element&&i.closest("input, textarea, select, [contenteditable], [data-lenis-prevent], [data-listing-swipe-ignore]"))return;let n=e.animatedScroll,o=a.getBoundingClientRect();if(!o.height)return;let c=a.clientHeight/o.height,d=r().map(e=>n+(e.getBoundingClientRect().top-o.top)*c).sort((e,t)=>e-t);if(!d.length)return;let h=d.reduce((e,t,r)=>Math.abs(t-n)<Math.abs(d[e]-n)?r:e,0),p=d[h],f=t.touches[0];l={identifier:f.identifier,x:f.clientX,y:f.clientY,distance:0,axis:null,position:n,anchor:p,previous:d[h-1]??(e.options.infinite?p-a.clientHeight:p),next:d[h+1]??(e.options.infinite?p+a.clientHeight:p)}},d=t=>{if(!l)return;if(1!==t.touches.length||s())return void u();let r=t.touches[0];if(r.identifier!==l.identifier)return;let i=r.clientX-l.x,n=l.y-r.clientY;if((i||n)&&(l.axis??=Math.abs(n)>Math.abs(i)?"vertical":"horizontal","vertical"===l.axis)){if(!t.cancelable)return void u();t.preventDefault(),l.distance=n,a.setAttribute(ec.SCROLL_DRAGGING_ATTRIBUTE,""),e.scrollTo(Math.max(l.previous,Math.min(l.next,l.position+n)),{immediate:!0,programmatic:!1,userData:{initiator:"listing-drag"}})}},h=t=>{let r=l;if(u(),!r||t.touches.length||"vertical"!==r.axis||s())return;let a=32>Math.abs(r.distance)?r.anchor:r.distance>0?r.next:r.previous;e.scrollTo(a,{duration:i,easing:n,programmatic:!1,userData:{initiator:"snap"}})};return t.setAttribute(ep,""),t.addEventListener("touchstart",c,{passive:!0}),t.addEventListener("touchmove",d,{passive:!1}),t.addEventListener("touchend",h,{passive:!0}),t.addEventListener("touchcancel",u,{passive:!0}),()=>{u(),t.removeEventListener("touchstart",c),t.removeEventListener("touchmove",d),t.removeEventListener("touchend",h),t.removeEventListener("touchcancel",u),null===o?t.removeAttribute(ep):t.setAttribute(ep,o)}})(G,e,j,y)},[G,l,S,j,y]),(0,eh.useNativeSnap)(G,j,i&&!S,l?y:{}),!r)return null;let z=S&&o?o:r.description,H=l?"anonymous":void 0,X=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A,{ref:e=>{O.current=e,k.current?.()},imageLoading:M,crossOrigin:H,heading:r.heading,description:z,backgroundImage:r.backgroundImage},"intro"),S?null:D.map((o,l)=>(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)("ul",{"aria-hidden":l>0||void 0,children:e.map((r,n)=>{let{buildName:s,buildCode:u,slug:d,shortDescription:h,available:p,price:f,featuredImage:m}=r;if(!s||!u||!d||!h||!m?.desktop||!m.mobile)return null;let g=l*e.length+n;return(0,t.jsx)("li",{children:(0,t.jsx)(es,{ref:e=>{N.current[g]=e,e&&k.current?.()},buildName:s,buildCode:u,slug:d,shortDescription:h,available:p,comingSoon:r.comingSoon,price:f,basePath:a,imageLoading:M,imageEnabled:!i||0===n||_&&n===e.length-1||c.has(w[n]),isLoopCopy:l>0,crossOrigin:H,depthMapUrl:r.depthMapUrl,desktopImage:m.desktop,mobileImage:m.mobile})},`${o}-${w[n]}`)})}),_?(0,t.jsx)(A,{ref:$[l],imageLoading:M,crossOrigin:H,isLoopCopy:l>0,heading:r.heading,description:r.description,backgroundImage:r.backgroundImage,isSeamRepeat:!0}):null]},o))]});return(0,t.jsx)(em,{ref:C,"data-listing-route":a.replace(/\/+$/,""),children:l?(0,t.jsx)(Y,{onTuning:u,children:X}):X})};eg.displayName="BuildsListing",e.s(["default",0,eg],927977)}]);