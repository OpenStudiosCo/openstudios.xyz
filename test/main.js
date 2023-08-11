(()=>{var Kl="153",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lm=0,Uh=1,um=2;var Ed=1,hm=2,Gn=3,sn=0,Rt=1,Mt=2;var Lt=0,Ss=1,Zo=2,Oh=3,Fh=4,Hr=5,Mn=100,fm=101,dm=102,Bh=103,zh=104,Ca=200,Vr=201,pm=202,mm=203,Pa=204,Ad=205,Jl=206,gm=207,$l=208,_m=209,xm=210,ym=0,vm=1,wm=2,cl=3,Mm=4,Sm=5,bm=6,Tm=7,Ia=0,Em=1,Am=2,bn=0,Ql=1,eu=2,tu=3,Gr=4,Rm=5,Rd=300,Es=301,As=302,ll=303,ul=304,La=306,$e=1e3,nn=1001,vr=1002,ht=1003,Ko=1004;var dr=1005;var Pt=1006,nu=1007;var fi=1008;var hi=1009,Cm=1010,Pm=1011,iu=1012,Cd=1013,ui=1014,Sn=1015,Dt=1016,Pd=1017,Id=1018,qn=1020,Im=1021,on=1023,su=1024,Lm=1025,ki=1026,di=1027,ru=1028,Ld=1029,Dm=1030,Dd=1031,Nd=1033,Ac=33776,Rc=33777,Cc=33778,Pc=33779,kh=35840,Hh=35841,Vh=35842,Gh=35843,Nm=36196,Wh=37492,Xh=37496,qh=37808,Yh=37809,jh=37810,Zh=37811,Kh=37812,Jh=37813,$h=37814,Qh=37815,ef=37816,tf=37817,nf=37818,sf=37819,rf=37820,of=37821,Ic=36492,Um=36283,af=36284,cf=36285,lf=36286;var Rs=2300,Gi=2301,Lc=2302,uf=2400,hf=2401,ff=2402,Om=2500;var Ud=0,Da=1,Wr=2,Od=3e3,Hi=3001,Fm=3200,Bm=3201,Xr=0,zm=1,Vi="",Oe="srgb",Cn="srgb-linear",Fd="display-p3";var Dc=7680;var km=519,Hm=512,Vm=513,Gm=514,Wm=515,Xm=516,qm=517,Ym=518,jm=519,hl=35044;var df="300 es",fl=1035,Wn=2e3,Jo=2001,Pn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pf=1234567,pr=Math.PI/180,Cs=180/Math.PI;function an(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function ou(s,e){return(s%e+e)%e}function Zm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Km(s,e,t){return s!==e?(t-s)/(e-s):0}function mr(s,e,t){return(1-t)*s+t*e}function Jm(s,e,t,n){return mr(s,e,1-Math.exp(-t*n))}function $m(s,e=1){return e-Math.abs(ou(s,e*2)-e)}function Qm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function eg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ng(s,e){return s+Math.random()*(e-s)}function ig(s){return s*(.5-Math.random())}function sg(s){s!==void 0&&(pf=s);let e=pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rg(s){return s*pr}function og(s){return s*Cs}function dl(s){return(s&s-1)===0&&s!==0}function Bd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $o(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ag(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Na={DEG2RAD:pr,RAD2DEG:Cs,generateUUID:an,clamp:yt,euclideanModulo:ou,mapLinear:Zm,inverseLerp:Km,lerp:mr,damp:Jm,pingpong:$m,smoothstep:Qm,smootherstep:eg,randInt:tg,randFloat:ng,randFloatSpread:ig,seededRandom:sg,degToRad:rg,radToDeg:og,isPowerOfTwo:dl,ceilPowerOfTwo:Bd,floorPowerOfTwo:$o,setQuaternionFromProperEuler:ag,normalize:et,denormalize:Xn},Q=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],d=i[6],v=i[1],_=i[4],y=i[7],w=i[2],S=i[5],T=i[8];return r[0]=o*x+a*v+c*w,r[3]=o*m+a*_+c*S,r[6]=o*d+a*y+c*T,r[1]=l*x+u*v+h*w,r[4]=l*m+u*_+h*S,r[7]=l*d+u*y+h*T,r[2]=f*x+p*v+g*w,r[5]=f*m+p*_+g*S,r[8]=f*d+p*y+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new Fe;function zd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var mf={};function gr(s){s in mf||(mf[s]=!0,console.warn(s))}function bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Uc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cg=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),lg=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ug(s){return s.convertSRGBToLinear().applyMatrix3(lg)}function hg(s){return s.applyMatrix3(cg).convertLinearToSRGB()}var fg={[Cn]:s=>s,[Oe]:s=>s.convertSRGBToLinear(),[Fd]:ug},dg={[Cn]:s=>s,[Oe]:s=>s.convertLinearToSRGB(),[Fd]:hg},xn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Cn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=fg[e],i=dg[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},is,Qo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=wr("canvas")),is.width=e.width,is.height=e.height;let n=is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pg=0,ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=an(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Oc(i[o].image)):r.push(Oc(i[o]))}else r=Oc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mg=0,Bt=class s extends Pn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=nn,i=nn,r=Pt,o=fi,a=on,c=hi,l=s.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=an(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hi?Oe:Vi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $e:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $e:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?Hi:Od}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hi?Oe:Vi}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Rd;Bt.DEFAULT_ANISOTROPY=1;var Ze=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(p+1)/2,w=(d+1)/2,S=(u+f)/4,T=(h+x)/4,C=(g+m)/4;return _>y&&_>w?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=T/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=C/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=C/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pt=class extends Pn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hi?Oe:Vi),this.texture=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ta=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pl=class extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==p||u!==g){let m=1-a,d=c*f+l*p+u*g+h*x,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let w=Math.sqrt(_),S=Math.atan2(w,d*v);m=Math.sin(m*S)/w,a=Math.sin(a*S)/w}let y=a*v;if(c=c*m+f*y,l=l*m+p*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-a*p,e[t+2]=l*g+u*p+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,h=c*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=l*c+f*-r+u*-a-h*-o,this.y=u*c+f*-o+h*-r-l*-a,this.z=h*c+f*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new P,gf=new Kt,vt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox),ss.applyMatrix4(e.matrixWorld),this.union(ss);else{let i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){let r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Fn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else i.boundingBox===null&&i.computeBoundingBox(),ss.copy(i.boundingBox),ss.applyMatrix4(e.matrixWorld),this.union(ss)}let n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),xo.subVectors(this.max,rr),rs.subVectors(e.a,rr),os.subVectors(e.b,rr),as.subVectors(e.c,rr),ri.subVectors(os,rs),oi.subVectors(as,os),Ni.subVectors(rs,as);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ni.z,Ni.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ni.z,0,-Ni.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ni.y,Ni.x,0];return!Bc(t,rs,os,as,xo)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,rs,os,as,xo))?!1:(yo.crossVectors(ri,oi),t=[yo.x,yo.y,yo.z],Bc(t,rs,os,as,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},On=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,ss=new vt,rs=new P,os=new P,as=new P,ri=new P,oi=new P,Ni=new P,rr=new P,xo=new P,yo=new P,Ui=new P;function Bc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ui.fromArray(s,r);let a=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),c=e.dot(Ui),l=t.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var gg=new vt,or=new P,zc=new P,Yt=class{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(zc)),this.expandByPoint(or.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new P,kc=new P,vo=new P,ai=new P,Hc=new P,wo=new P,Vc=new P,jn=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){kc.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(vo),a=ai.dot(this.direction),c=-ai.dot(vo),l=ai.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(kc).addScaledVector(vo,f),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,r){Hc.subVectors(t,e),wo.subVectors(n,e),Vc.crossVectors(Hc,wo);let o=this.direction.dot(Vc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);let c=a*this.direction.dot(wo.crossVectors(ai,wo));if(c<0)return null;let l=a*this.direction.dot(Hc.cross(ai));if(l<0||c+l>o)return null;let u=-a*ai.dot(Vc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class s{constructor(e,t,n,i,r,o,a,c,l,u,h,f,p,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,f,p,g,x,m)}set(e,t,n,i,r,o,a,c,l,u,h,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_g,e,xg)}lookAt(e,t,n){let i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ci.crossVectors(n,en),ci.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ci.crossVectors(n,en)),ci.normalize(),Mo.crossVectors(en,ci),i[0]=ci.x,i[4]=Mo.x,i[8]=en.x,i[1]=ci.y,i[5]=Mo.y,i[9]=en.y,i[2]=ci.z,i[6]=Mo.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],_=n[7],y=n[11],w=n[15],S=i[0],T=i[4],C=i[8],M=i[12],b=i[1],k=i[5],V=i[9],B=i[13],G=i[2],q=i[6],ie=i[10],Y=i[14],W=i[3],se=i[7],le=i[11],ve=i[15];return r[0]=o*S+a*b+c*G+l*W,r[4]=o*T+a*k+c*q+l*se,r[8]=o*C+a*V+c*ie+l*le,r[12]=o*M+a*B+c*Y+l*ve,r[1]=u*S+h*b+f*G+p*W,r[5]=u*T+h*k+f*q+p*se,r[9]=u*C+h*V+f*ie+p*le,r[13]=u*M+h*B+f*Y+p*ve,r[2]=g*S+x*b+m*G+d*W,r[6]=g*T+x*k+m*q+d*se,r[10]=g*C+x*V+m*ie+d*le,r[14]=g*M+x*B+m*Y+d*ve,r[3]=v*S+_*b+y*G+w*W,r[7]=v*T+_*k+y*q+w*se,r[11]=v*C+_*V+y*ie+w*le,r[15]=v*M+_*B+y*Y+w*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*p-n*c*p)+x*(+t*c*p-t*l*f+r*o*f-i*o*p+i*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+d*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],v=h*m*l-x*f*l+x*c*p-a*m*p-h*c*d+a*f*d,_=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,y=u*x*l-g*h*l+g*a*p-o*x*p-u*a*d+o*h*d,w=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,S=t*v+n*_+i*y+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=v*T,e[1]=(x*f*r-h*m*r-x*i*p+n*m*p+h*i*d-n*f*d)*T,e[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*d+n*c*d)*T,e[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*p-n*c*p)*T,e[4]=_*T,e[5]=(u*m*r-g*f*r+g*i*p-t*m*p-u*i*d+t*f*d)*T,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*d-t*c*d)*T,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*p+t*c*p)*T,e[8]=y*T,e[9]=(g*h*r-u*x*r-g*n*p+t*x*p+u*n*d-t*h*d)*T,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*d+t*a*d)*T,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*T,e[12]=w*T,e[13]=(u*x*i-g*h*i+g*n*f-t*x*f-u*n*m+t*h*m)*T,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,v=c*l,_=c*u,y=c*h,w=n.x,S=n.y,T=n.z;return i[0]=(1-(x+d))*w,i[1]=(p+y)*w,i[2]=(g-_)*w,i[3]=0,i[4]=(p-y)*S,i[5]=(1-(f+d))*S,i[6]=(m+v)*S,i[7]=0,i[8]=(g+_)*T,i[9]=(m-v)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=cs.set(i[0],i[1],i[2]).length(),o=cs.set(i[4],i[5],i[6]).length(),a=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);let l=1/r,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Wn){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),p,g;if(a===Wn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Wn){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*l,p=(n+i)*u,g,x;if(a===Wn)g=(o+r)*h,x=-2*h;else if(a===Jo)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cs=new P,yn=new De,_g=new P(0,0,0),xg=new P(1,1,1),ci=new P,Mo=new P,en=new P,_f=new De,xf=new Kt,na=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};na.DEFAULT_ORDER="XYZ";var Wi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yg=0,yf=new P,ls=new Kt,zn=new De,So=new P,ar=new P,vg=new P,wg=new Kt,vf=new P(1,0,0),wf=new P(0,1,0),Mf=new P(0,0,1),Mg={type:"added"},Sf={type:"removed"},tt=class s extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new na,n=new Kt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Fe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Wi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(wf,e)}rotateZ(e){return this.rotateOnAxis(Mf,e)}translateOnAxis(e,t){return yf.copy(e).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(wf,e)}translateZ(e){return this.translateOnAxis(Mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?So.copy(e):So.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(ar,So,this.up):zn.lookAt(So,ar,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(zn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Sf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};tt.DEFAULT_UP=new P(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new P,kn=new P,Gc=new P,Hn=new P,us=new P,hs=new P,bf=new P,Wc=new P,Xc=new P,qc=new P,bo=!1,st=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),kn.subVectors(n,t),Gc.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(kn),c=vn.dot(Gc),l=kn.dot(kn),u=kn.dot(Gc),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);let f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,t,n,i,r,o,a,c){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Hn),c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),kn.subVectors(e,t),vn.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;us.subVectors(i,n),hs.subVectors(r,n),Wc.subVectors(e,n);let c=us.dot(Wc),l=hs.dot(Wc);if(c<=0&&l<=0)return t.copy(n);Xc.subVectors(e,i);let u=us.dot(Xc),h=hs.dot(Xc);if(u>=0&&h<=u)return t.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(us,o);qc.subVectors(e,r);let p=us.dot(qc),g=hs.dot(qc);if(g>=0&&p<=g)return t.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(hs,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return bf.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(bf,a);let d=1/(m+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(us,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sg=0,zt=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=an(),this.name="",this.type="Material",this.blending=Ss,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Pa,this.blendDst=Ad,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dc,this.stencilZFail=Dc,this.stencilZPass=Dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},To={h:0,s:0,l:0};function Yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xn.workingColorSpace){return this.r=e,this.g=t,this.b=n,xn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xn.workingColorSpace){if(e=ou(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yc(o,r,e+1/3),this.g=Yc(o,r,e),this.b=Yc(o,r,e-1/3)}return xn.toWorkingColorSpace(this,i),this}setStyle(e,t=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oe){let n=kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return xn.fromWorkingColorSpace(Ft.copy(this),e),Math.round(yt(Ft.r*255,0,255))*65536+Math.round(yt(Ft.g*255,0,255))*256+Math.round(yt(Ft.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xn.workingColorSpace){xn.fromWorkingColorSpace(Ft.copy(this),t);let n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xn.workingColorSpace){return xn.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Oe){xn.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,i=Ft.b;return e!==Oe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=n,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(To);let n=mr(wn.h,To.h,t),i=mr(wn.s,To.s,t),r=mr(wn.l,To.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Ee;Ee.NAMES=kd;var Nt=class extends zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xt=new P,Eo=new Q,rt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hl,this.updateRange={offset:0,count:-1},this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var ia=class extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sa=class extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var bg=0,rn=new De,jc=new tt,fs=new P,tn=new vt,cr=new vt,At=new P,ot=class s extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?sa:ia)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(tn.min,cr.min),tn.expandByPoint(At),At.addVectors(tn.max,cr.max),tn.expandByPoint(At)):(tn.expandByPoint(cr.min),tn.expandByPoint(cr.max))}tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)At.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(e,l),At.add(fs)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new P,u[b]=new P;let h=new P,f=new P,p=new P,g=new Q,x=new Q,m=new Q,d=new P,v=new P;function _(b,k,V){h.fromArray(i,b*3),f.fromArray(i,k*3),p.fromArray(i,V*3),g.fromArray(o,b*2),x.fromArray(o,k*2),m.fromArray(o,V*2),f.sub(h),p.sub(h),x.sub(g),m.sub(g);let B=1/(x.x*m.y-m.x*x.y);isFinite(B)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(B),v.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(B),l[b].add(d),l[k].add(d),l[V].add(d),u[b].add(v),u[k].add(v),u[V].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,k=y.length;b<k;++b){let V=y[b],B=V.start,G=V.count;for(let q=B,ie=B+G;q<ie;q+=3)_(n[q+0],n[q+1],n[q+2])}let w=new P,S=new P,T=new P,C=new P;function M(b){T.fromArray(r,b*3),C.copy(T);let k=l[b];w.copy(k),w.sub(T.multiplyScalar(T.dot(k))).normalize(),S.crossVectors(C,k);let B=S.dot(u[b])<0?-1:1;c[b*4]=w.x,c[b*4+1]=w.y,c[b*4+2]=w.z,c[b*4+3]=B}for(let b=0,k=y.length;b<k;++b){let V=y[b],B=V.start,G=V.count;for(let q=B,ie=B+G;q<ie;q+=3)M(n[q+0]),M(n[q+1]),M(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new rt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tf=new De,Oi=new jn,Ao=new Yt,Ef=new P,ds=new P,ps=new P,ms=new P,Zc=new P,Ro=new P,Co=new Q,Po=new Q,Io=new Q,Af=new P,Rf=new P,Cf=new P,Lo=new P,Do=new P,qe=class extends tt{constructor(e=new ot,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Zc.fromBufferAttribute(h,e),o?Ro.addScaledVector(Zc,u):Ro.addScaledVector(Zc.sub(t),u))}t.add(Ro)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Ao.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ao,Ef)===null||Oi.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(Tf.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Tf),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=_;y<w;y+=3){let S=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);i=No(this,d,e,n,l,u,h,S,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=No(this,o,e,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=_;y<w;y+=3){let S=y,T=y+1,C=y+2;i=No(this,d,e,n,l,u,h,S,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let v=m,_=m+1,y=m+2;i=No(this,o,e,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Tg(s,e,t,n,i,r,o,a){let c;if(e.side===Rt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===sn,a),c===null)return null;Do.copy(a),Do.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Do);return l<t.near||l>t.far?null:{distance:l,point:Do.clone(),object:s}}function No(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,ds),s.getVertexPosition(c,ps),s.getVertexPosition(l,ms);let u=Tg(s,e,t,n,ds,ps,ms,Lo);if(u){i&&(Co.fromBufferAttribute(i,a),Po.fromBufferAttribute(i,c),Io.fromBufferAttribute(i,l),u.uv=st.getInterpolation(Lo,ds,ps,ms,Co,Po,Io,new Q)),r&&(Co.fromBufferAttribute(r,a),Po.fromBufferAttribute(r,c),Io.fromBufferAttribute(r,l),u.uv1=st.getInterpolation(Lo,ds,ps,ms,Co,Po,Io,new Q),u.uv2=u.uv1),o&&(Af.fromBufferAttribute(o,a),Rf.fromBufferAttribute(o,c),Cf.fromBufferAttribute(o,l),u.normal=st.getInterpolation(Lo,ds,ps,ms,Af,Rf,Cf,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new P,materialIndex:0};st.getNormal(ds,ps,ms,h.normal),u.face=h}return u}var kt=class s extends ot{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function g(x,m,d,v,_,y,w,S,T,C,M){let b=y/T,k=w/C,V=y/2,B=w/2,G=S/2,q=T+1,ie=C+1,Y=0,W=0,se=new P;for(let le=0;le<ie;le++){let ve=le*k-B;for(let ee=0;ee<q;ee++){let ge=ee*b-V;se[x]=ge*v,se[m]=ve*_,se[d]=G,l.push(se.x,se.y,se.z),se[x]=0,se[m]=0,se[d]=S>0?1:-1,u.push(se.x,se.y,se.z),h.push(ee/T),h.push(1-le/C),Y+=1}}for(let le=0;le<C;le++)for(let ve=0;ve<T;ve++){let ee=f+ve+q*le,ge=f+ve+q*(le+1),F=f+(ve+1)+q*(le+1),U=f+(ve+1)+q*le;c.push(ee,ge,U),c.push(ge,F,U),W+=6}a.addGroup(p,W,M),p+=W,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ps(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){let e={};for(let t=0;t<s.length;t++){let n=Ps(s[t]);for(let i in n)e[i]=n[i]}return e}function Eg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hd(s){return s.getRenderTarget()===null?s.outputColorSpace:Cn}var jt={clone:Ps,merge:Xt},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Eg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mr=class extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends Mr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},gs=-90,_s=1,ml=class extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;let i=new wt(gs,_s,e,t);i.layers=this.layers,this.add(i);let r=new wt(gs,_s,e,t);r.layers=this.layers,this.add(r);let o=new wt(gs,_s,e,t);o.layers=this.layers,this.add(o);let a=new wt(gs,_s,e,t);a.layers=this.layers,this.add(a);let c=new wt(gs,_s,e,t);c.layers=this.layers,this.add(c);let l=new wt(gs,_s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ra=class extends Bt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gl=class extends pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hi?Oe:Vi),this.texture=new ra(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kt(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Lt});r.uniforms.tEquirect.value=t;let o=new qe(i,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=Pt),new ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Kc=new P,Cg=new P,Pg=new Fe,qt=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Kc.subVectors(n,t).cross(Cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pg.getNormalMatrix(e),i=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Yt,Uo=new P,Sr=class{constructor(e=new qt,t=new qt,n=new qt,i=new qt,r=new qt,o=new qt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],x=i[10],m=i[11],d=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,m-p,y-d).normalize(),n[1].setComponents(c+r,f+l,m+p,y+d).normalize(),n[2].setComponents(c+o,f+u,m+g,y+v).normalize(),n[3].setComponents(c-o,f-u,m-g,y-v).normalize(),n[4].setComponents(c-a,f-h,m-x,y-_).normalize(),t===Wn)n[5].setComponents(c+a,f+h,m+x,y+_).normalize();else if(t===Jo)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Uo.x=i.normal.x>0?e.max.x:e.min.x,Uo.y=i.normal.y>0?e.max.y:e.min.y,Uo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ig(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,f=l.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){let f=u.array,p=u.updateRange;s.bindBuffer(h,l),p.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var br=class s extends ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let v=d*f-o;for(let _=0;_<l;_++){let y=_*h-r;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let _=v+l*d,y=v+l*(d+1),w=v+1+l*(d+1),S=v+1+l*d;p.push(_,y,S),p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg="vec3 transformed = vec3( position );",zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$g=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,g0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,w0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,A0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,U0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,m_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,U_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ix=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,We={alphamap_fragment:Lg,alphamap_pars_fragment:Dg,alphatest_fragment:Ng,alphatest_pars_fragment:Ug,aomap_fragment:Og,aomap_pars_fragment:Fg,begin_vertex:Bg,beginnormal_vertex:zg,bsdfs:kg,iridescence_fragment:Hg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:jg,color_pars_vertex:Zg,color_vertex:Kg,common:Jg,cube_uv_reflection_fragment:$g,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,encodings_fragment:s0,encodings_pars_fragment:r0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:c0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:w0,envmap_vertex:u0,fog_vertex:h0,fog_pars_vertex:f0,fog_fragment:d0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_fragment:g0,lightmap_pars_fragment:_0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:y0,lights_pars_begin:v0,lights_toon_fragment:M0,lights_toon_pars_fragment:S0,lights_phong_fragment:b0,lights_phong_pars_fragment:T0,lights_physical_fragment:E0,lights_physical_pars_fragment:A0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:P0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:N0,map_fragment:U0,map_pars_fragment:O0,map_particle_fragment:F0,map_particle_pars_fragment:B0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:k0,morphcolor_vertex:H0,morphnormal_vertex:V0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:j0,normal_vertex:Z0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:e_,output_fragment:t_,packing:n_,premultiplied_alpha_fragment:i_,project_vertex:s_,dithering_fragment:r_,dithering_pars_fragment:o_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:u_,shadowmap_vertex:h_,shadowmask_pars_fragment:f_,skinbase_vertex:d_,skinning_pars_vertex:p_,skinning_vertex:m_,skinnormal_vertex:g_,specularmap_fragment:__,specularmap_pars_fragment:x_,tonemapping_fragment:y_,tonemapping_pars_fragment:v_,transmission_fragment:w_,transmission_pars_fragment:M_,uv_pars_fragment:S_,uv_pars_vertex:b_,uv_vertex:T_,worldpos_vertex:E_,background_vert:A_,background_frag:R_,backgroundCube_vert:C_,backgroundCube_frag:P_,cube_vert:I_,cube_frag:L_,depth_vert:D_,depth_frag:N_,distanceRGBA_vert:U_,distanceRGBA_frag:O_,equirect_vert:F_,equirect_frag:B_,linedashed_vert:z_,linedashed_frag:k_,meshbasic_vert:H_,meshbasic_frag:V_,meshlambert_vert:G_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:Y_,meshnormal_frag:j_,meshphong_vert:Z_,meshphong_frag:K_,meshphysical_vert:J_,meshphysical_frag:$_,meshtoon_vert:Q_,meshtoon_frag:ex,points_vert:tx,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ox},Se={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Rn={basic:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Xt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Xt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Xt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Xt([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Xt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Xt([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Xt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Xt([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Xt([Se.common,Se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Xt([Se.lights,Se.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Rn.physical={uniforms:Xt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Oo={r:0,b:0,g:0};function ax(s,e,t,n,i,r,o){let a=new Ee(0),c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(m,d){let v=!1,_=d.isScene===!0?d.background:null;switch(_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0),s.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),v=!0;break}(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===La)?(u===void 0&&(u=new qe(new kt(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Ps(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=_.colorSpace!==Oe,(h!==_||f!==_.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new qe(new br(2,2),new Qe({name:"BackgroundMaterial",uniforms:Ps(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(Oo,Hd(s)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function cx(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,u=!1;function h(G,q,ie,Y,W){let se=!1;if(o){let le=x(Y,ie,q);l!==le&&(l=le,p(l.object)),se=d(G,Y,ie,W),se&&v(G,Y,ie,W)}else{let le=q.wireframe===!0;(l.geometry!==Y.id||l.program!==ie.id||l.wireframe!==le)&&(l.geometry=Y.id,l.program=ie.id,l.wireframe=le,se=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,C(G,q,ie,Y),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(G){return n.isWebGL2?s.bindVertexArray(G):r.bindVertexArrayOES(G)}function g(G){return n.isWebGL2?s.deleteVertexArray(G):r.deleteVertexArrayOES(G)}function x(G,q,ie){let Y=ie.wireframe===!0,W=a[G.id];W===void 0&&(W={},a[G.id]=W);let se=W[q.id];se===void 0&&(se={},W[q.id]=se);let le=se[Y];return le===void 0&&(le=m(f()),se[Y]=le),le}function m(G){let q=[],ie=[],Y=[];for(let W=0;W<i;W++)q[W]=0,ie[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ie,attributeDivisors:Y,object:G,attributes:{},index:null}}function d(G,q,ie,Y){let W=l.attributes,se=q.attributes,le=0,ve=ie.getAttributes();for(let ee in ve)if(ve[ee].location>=0){let F=W[ee],U=se[ee];if(U===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(U=G.instanceColor)),F===void 0||F.attribute!==U||U&&F.data!==U.data)return!0;le++}return l.attributesNum!==le||l.index!==Y}function v(G,q,ie,Y){let W={},se=q.attributes,le=0,ve=ie.getAttributes();for(let ee in ve)if(ve[ee].location>=0){let F=se[ee];F===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(F=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(F=G.instanceColor));let U={};U.attribute=F,F&&F.data&&(U.data=F.data),W[ee]=U,le++}l.attributes=W,l.attributesNum=le,l.index=Y}function _(){let G=l.newAttributes;for(let q=0,ie=G.length;q<ie;q++)G[q]=0}function y(G){w(G,0)}function w(G,q){let ie=l.newAttributes,Y=l.enabledAttributes,W=l.attributeDivisors;ie[G]=1,Y[G]===0&&(s.enableVertexAttribArray(G),Y[G]=1),W[G]!==q&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,q),W[G]=q)}function S(){let G=l.newAttributes,q=l.enabledAttributes;for(let ie=0,Y=q.length;ie<Y;ie++)q[ie]!==G[ie]&&(s.disableVertexAttribArray(ie),q[ie]=0)}function T(G,q,ie,Y,W,se,le){le===!0?s.vertexAttribIPointer(G,q,ie,W,se):s.vertexAttribPointer(G,q,ie,Y,W,se)}function C(G,q,ie,Y){if(n.isWebGL2===!1&&(G.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let W=Y.attributes,se=ie.getAttributes(),le=q.defaultAttributeValues;for(let ve in se){let ee=se[ve];if(ee.location>=0){let ge=W[ve];if(ge===void 0&&(ve==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),ve==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor)),ge!==void 0){let F=ge.normalized,U=ge.itemSize,R=t.get(ge);if(R===void 0)continue;let A=R.buffer,$=R.type,ce=R.bytesPerElement,J=n.isWebGL2===!0&&($===s.INT||$===s.UNSIGNED_INT||ge.gpuType===Cd);if(ge.isInterleavedBufferAttribute){let ue=ge.data,I=ue.stride,te=ge.offset;if(ue.isInstancedInterleavedBuffer){for(let H=0;H<ee.locationSize;H++)w(ee.location+H,ue.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let H=0;H<ee.locationSize;H++)y(ee.location+H);s.bindBuffer(s.ARRAY_BUFFER,A);for(let H=0;H<ee.locationSize;H++)T(ee.location+H,U/ee.locationSize,$,F,I*ce,(te+U/ee.locationSize*H)*ce,J)}else{if(ge.isInstancedBufferAttribute){for(let ue=0;ue<ee.locationSize;ue++)w(ee.location+ue,ge.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ue=0;ue<ee.locationSize;ue++)y(ee.location+ue);s.bindBuffer(s.ARRAY_BUFFER,A);for(let ue=0;ue<ee.locationSize;ue++)T(ee.location+ue,U/ee.locationSize,$,F,U*ce,U/ee.locationSize*ue*ce,J)}}else if(le!==void 0){let F=le[ve];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ee.location,F);break;case 3:s.vertexAttrib3fv(ee.location,F);break;case 4:s.vertexAttrib4fv(ee.location,F);break;default:s.vertexAttrib1fv(ee.location,F)}}}}S()}function M(){V();for(let G in a){let q=a[G];for(let ie in q){let Y=q[ie];for(let W in Y)g(Y[W].object),delete Y[W];delete q[ie]}delete a[G]}}function b(G){if(a[G.id]===void 0)return;let q=a[G.id];for(let ie in q){let Y=q[ie];for(let W in Y)g(Y[W].object),delete Y[W];delete q[ie]}delete a[G.id]}function k(G){for(let q in a){let ie=a[q];if(ie[G.id]===void 0)continue;let Y=ie[G.id];for(let W in Y)g(Y[W].object),delete Y[W];delete ie[G.id]}}function V(){B(),u=!0,l!==c&&(l=c,p(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:V,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function lx(s,e,t,n){let i=n.isWebGL2,r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function ux(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=o||e.has("OES_texture_float"),w=_&&y,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:S}}function hx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new qt,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,_=v*4,y=d.clippingState||null;c.value=y,y=u(g,f,_,p);for(let w=0;w!==_;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function fx(s){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=Es:a===ul&&(o.mapping=As),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===ll||a===ul)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new gl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var pi=class extends Mr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=4,Pf=[.125,.215,.35,.446,.526,.582],zi=20,Jc=new pi,If=new Ee,$c=null,Bi=(1+Math.sqrt(5))/2,xs=1/Bi,Lf=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Bi,xs),new P(0,Bi,-xs),new P(xs,0,Bi),new P(-xs,0,Bi),new P(Bi,xs,0),new P(-Bi,xs,0)],oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$c=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Dt,format:on,colorSpace:Cn,depthBuffer:!1},i=Df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(r)),this._blurMaterial=px(r,e,t)}return i}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Jc)}_sceneToCubeUV(e,t,n,i){let a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(If),u.toneMapping=bn,u.autoClear=!1;let p=new Nt({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new qe(new kt,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(If),x=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let _=this._cubeSize;Fo(i,v*_,d>2?_:0,_,_),u.setRenderTarget(i),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Es||e.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Jc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Lf[(i-1)%Lf.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new qe(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let d=[],v=0;for(let T=0;T<zi;++T){let C=T/x,M=Math.exp(-C*C/2);d.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let y=this._sizeLods[i],w=3*y*(i>_-ws?i-_+ws:0),S=4*(this._cubeSize-y);Fo(t,w,S,3*y,2*y),c.setRenderTarget(t),c.render(h,Jc)}};function dx(s){let e=[],t=[],n=[],i=s,r=s-ws+1+Pf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ws?c=Pf[o-s+ws-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,C=S>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(M,x*g*S),_.set(f,m*g*S);let b=[S,S,S,S,S,S];y.set(b,d*g*S)}let w=new ot;w.setAttribute("position",new rt(v,x)),w.setAttribute("uv",new rt(_,m)),w.setAttribute("faceIndex",new rt(y,d)),e.push(w),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Df(s,e,t){let n=new pt(s,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function px(s,e,t){let n=new Float32Array(zi),i=new P(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function Nf(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function Uf(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lt,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ll||c===ul,u=c===Es||c===As;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new oa(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new oa(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _x(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],s.ARRAY_BUFFER)}}function l(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){let w=v[_+0],S=v[_+1],T=v[_+2];f.push(w,S,S,T,T,w)}}else{let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let w=_+0,S=_+1,T=_+2;f.push(w,S,S,T,T,w)}}let m=new(zd(f)?sa:ia)(f,1);m.version=x;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function xx(s,e,t,n){let i=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,p){s.drawElements(r,p,a,f*c),t.update(p,r,1)}function h(f,p,g){if(g===0)return;let x,m;if(i)x=s,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](r,p,a,f*c,g),t.update(p,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function yx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vx(s,e){return s[0]-e[0]}function wx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Mx(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Ze,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(u);if(x===void 0||x.count!==g){let G=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",G)};x!==void 0&&x.texture.dispose();let v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],T=u.morphAttributes.color||[],C=0;v===!0&&(C=1),_===!0&&(C=2),y===!0&&(C=3);let M=u.attributes.position.count*C,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let k=new Float32Array(M*b*4*g),V=new ta(k,M,b,g);V.type=Sn,V.needsUpdate=!0;let B=C*4;for(let q=0;q<g;q++){let ie=w[q],Y=S[q],W=T[q],se=M*b*4*q;for(let le=0;le<ie.count;le++){let ve=le*B;v===!0&&(o.fromBufferAttribute(ie,le),k[se+ve+0]=o.x,k[se+ve+1]=o.y,k[se+ve+2]=o.z,k[se+ve+3]=0),_===!0&&(o.fromBufferAttribute(Y,le),k[se+ve+4]=o.x,k[se+ve+5]=o.y,k[se+ve+6]=o.z,k[se+ve+7]=0),y===!0&&(o.fromBufferAttribute(W,le),k[se+ve+8]=o.x,k[se+ve+9]=o.y,k[se+ve+10]=o.z,k[se+ve+11]=W.itemSize===4?o.w:1)}}x={count:g,texture:V,size:new Q(M,b)},r.set(u,x),u.addEventListener("dispose",G)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let d=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",d),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<p;_++){let y=g[_];y[0]=_,y[1]=f[_]}g.sort(wx);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(vx);let x=u.morphAttributes.position,m=u.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let y=a[_],w=y[0],S=y[1];w!==Number.MAX_SAFE_INTEGER&&S?(x&&u.getAttribute("morphTarget"+_)!==x[w]&&u.setAttribute("morphTarget"+_,x[w]),m&&u.getAttribute("morphNormal"+_)!==m[w]&&u.setAttribute("morphNormal"+_,m[w]),i[_]=S,d+=S):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}let v=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Sx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER)),h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Gd=new Bt,Wd=new ta,Xd=new pl,qd=new ra,Of=[],Ff=[],Bf=new Float32Array(16),zf=new Float32Array(9),kf=new Float32Array(4);function Fs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Of[i];if(r===void 0&&(r=new Float32Array(i),Of[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ua(s,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function bx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function Ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function Ax(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function Rx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;kf.set(n),s.uniformMatrix2fv(this.addr,!1,kf),bt(t,n)}}function Cx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;zf.set(n),s.uniformMatrix3fv(this.addr,!1,zf),bt(t,n)}}function Px(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;Bf.set(n),s.uniformMatrix4fv(this.addr,!1,Bf),bt(t,n)}}function Ix(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Lx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function Dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function Nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function Ux(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function Fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function zx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Gd,i)}function kx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xd,i)}function Hx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qd,i)}function Vx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wd,i)}function Gx(s){switch(s){case 5126:return bx;case 35664:return Tx;case 35665:return Ex;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Nx;case 5125:return Ux;case 36294:return Ox;case 36295:return Fx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Wx(s,e){s.uniform1fv(this.addr,e)}function Xx(s,e){let t=Fs(e,this.size,2);s.uniform2fv(this.addr,t)}function qx(s,e){let t=Fs(e,this.size,3);s.uniform3fv(this.addr,t)}function Yx(s,e){let t=Fs(e,this.size,4);s.uniform4fv(this.addr,t)}function jx(s,e){let t=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zx(s,e){let t=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Kx(s,e){let t=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Jx(s,e){s.uniform1iv(this.addr,e)}function $x(s,e){s.uniform2iv(this.addr,e)}function Qx(s,e){s.uniform3iv(this.addr,e)}function ey(s,e){s.uniform4iv(this.addr,e)}function ty(s,e){s.uniform1uiv(this.addr,e)}function ny(s,e){s.uniform2uiv(this.addr,e)}function iy(s,e){s.uniform3uiv(this.addr,e)}function sy(s,e){s.uniform4uiv(this.addr,e)}function ry(s,e,t){let n=this.cache,i=e.length,r=Ua(t,i);St(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gd,r[o])}function oy(s,e,t){let n=this.cache,i=e.length,r=Ua(t,i);St(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xd,r[o])}function ay(s,e,t){let n=this.cache,i=e.length,r=Ua(t,i);St(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qd,r[o])}function cy(s,e,t){let n=this.cache,i=e.length,r=Ua(t,i);St(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wd,r[o])}function ly(s){switch(s){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return jx;case 35675:return Zx;case 35676:return Kx;case 5124:case 35670:return Jx;case 35667:case 35671:return $x;case 35668:case 35672:return Qx;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return cy}}var _l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gx(t.type)}},xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ly(t.type)}},yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function Hf(s,e){s.seq.push(e),s.map[e.id]=e}function uy(s,e,t){let n=s.name,i=n.length;for(Qc.lastIndex=0;;){let r=Qc.exec(n),o=Qc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Hf(t,l===void 0?new _l(a,s,e):new xl(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new yl(a),Hf(t,h)),t=h}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);uy(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Vf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var hy=0;function fy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function dy(s){switch(s){case Cn:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Gf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+fy(s.getShaderSource(e),o)}else return i}function py(s,e){let t=dy(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function my(s,e){let t;switch(e){case Ql:t="Linear";break;case eu:t="Reinhard";break;case tu:t="OptimizedCineon";break;case Gr:t="ACESFilmic";break;case Rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gy(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function _y(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function fr(s){return s!==""}function Wf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(s){return s.replace(yy,vy)}function vy(s,e){let t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vl(t)}var wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(s){return s.replace(wy,My)}function My(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function by(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Es:case As:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ty(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Ey(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ia:e="ENVMAP_BLENDING_MULTIPLY";break;case Em:e="ENVMAP_BLENDING_MIX";break;case Am:e="ENVMAP_BLENDING_ADD";break}return e}function Ay(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ry(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Sy(t),l=by(t),u=Ty(t),h=Ey(t),f=Ay(t),p=t.isWebGL2?"":gy(t),g=_y(r),x=i.createProgram(),m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),d.length>0&&(d+=`
`)):(m=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),d=[p,Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?We.tonemapping_pars_fragment:"",t.toneMapping!==bn?my("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,py("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=vl(o),o=Wf(o,t),o=Xf(o,t),a=vl(a),a=Wf(a,t),a=Xf(a,t),o=qf(o),a=qf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=v+m+o,y=v+d+a,w=Vf(i,i.VERTEX_SHADER,_),S=Vf(i,i.FRAGMENT_SHADER,y);if(i.attachShader(x,w),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){let M=i.getProgramInfoLog(x).trim(),b=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(S).trim(),V=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,S);else{let G=Gf(i,w,"vertex"),q=Gf(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+G+`
`+q)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||k==="")&&(B=!1);B&&(this.diagnostics={runnable:V,programLog:M,vertexShader:{log:b,prefix:m},fragmentShader:{log:k,prefix:d}})}i.deleteShader(w),i.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new Ts(i,x)),T};let C;return this.getAttributes=function(){return C===void 0&&(C=xy(i,x)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=S,this}var Cy=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ml(e),t.set(e,n)),n}},Ml=class{constructor(e){this.id=Cy++,this.code=e,this.usedTimes=0}};function Py(s,e,t,n,i,r,o){let a=new Wi,c=new wl,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,b,k,V,B){let G=V.fog,q=B.geometry,ie=M.isMeshStandardMaterial?V.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||ie),W=Y&&Y.mapping===La?Y.image.height:null,se=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=le!==void 0?le.length:0,ee=0;q.morphAttributes.position!==void 0&&(ee=1),q.morphAttributes.normal!==void 0&&(ee=2),q.morphAttributes.color!==void 0&&(ee=3);let ge,F,U,R;if(se){let gt=Rn[se];ge=gt.vertexShader,F=gt.fragmentShader}else ge=M.vertexShader,F=M.fragmentShader,c.update(M),U=c.getVertexShaderID(M),R=c.getFragmentShaderID(M);let A=s.getRenderTarget(),$=B.isInstancedMesh===!0,ce=!!M.map,J=!!M.matcap,ue=!!Y,I=!!M.aoMap,te=!!M.lightMap,H=!!M.bumpMap,j=!!M.normalMap,Z=!!M.displacementMap,de=!!M.emissiveMap,z=!!M.metalnessMap,L=!!M.roughnessMap,me=M.anisotropy>0,be=M.clearcoat>0,Ve=M.iridescence>0,N=M.sheen>0,E=M.transmission>0,ae=me&&!!M.anisotropyMap,xe=be&&!!M.clearcoatMap,ye=be&&!!M.clearcoatNormalMap,O=be&&!!M.clearcoatRoughnessMap,pe=Ve&&!!M.iridescenceMap,_e=Ve&&!!M.iridescenceThicknessMap,re=N&&!!M.sheenColorMap,Ae=N&&!!M.sheenRoughnessMap,Le=!!M.specularMap,Ie=!!M.specularColorMap,Ce=!!M.specularIntensityMap,Re=E&&!!M.transmissionMap,Ne=E&&!!M.thicknessMap,ke=!!M.gradientMap,X=!!M.alphaMap,we=M.alphaTest>0,oe=!!M.extensions,Me=!!q.attributes.uv1,Te=!!q.attributes.uv2,Ke=!!q.attributes.uv3;return{isWebGL2:u,shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:F,defines:M.defines,customVertexShaderID:U,customFragmentShaderID:R,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:$,instancingColor:$&&B.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:A===null?s.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Cn,map:ce,matcap:J,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:te,bumpMap:H,normalMap:j,displacementMap:f&&Z,emissiveMap:de,normalMapObjectSpace:j&&M.normalMapType===zm,normalMapTangentSpace:j&&M.normalMapType===Xr,metalnessMap:z,roughnessMap:L,anisotropy:me,anisotropyMap:ae,clearcoat:be,clearcoatMap:xe,clearcoatNormalMap:ye,clearcoatRoughnessMap:O,iridescence:Ve,iridescenceMap:pe,iridescenceThicknessMap:_e,sheen:N,sheenColorMap:re,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:Ie,specularIntensityMap:Ce,transmission:E,transmissionMap:Re,thicknessMap:Ne,gradientMap:ke,opaque:M.transparent===!1&&M.blending===Ss,alphaMap:X,alphaTest:we,combine:M.combine,mapUv:ce&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:te&&x(M.lightMap.channel),bumpMapUv:H&&x(M.bumpMap.channel),normalMapUv:j&&x(M.normalMap.channel),displacementMapUv:Z&&x(M.displacementMap.channel),emissiveMapUv:de&&x(M.emissiveMap.channel),metalnessMapUv:z&&x(M.metalnessMap.channel),roughnessMapUv:L&&x(M.roughnessMap.channel),anisotropyMapUv:ae&&x(M.anisotropyMap.channel),clearcoatMapUv:xe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(M.sheenRoughnessMap.channel),specularMapUv:Le&&x(M.specularMap.channel),specularColorMapUv:Ie&&x(M.specularColorMap.channel),specularIntensityMapUv:Ce&&x(M.specularIntensityMap.channel),transmissionMapUv:Re&&x(M.transmissionMap.channel),thicknessMapUv:Ne&&x(M.thicknessMap.channel),alphaMapUv:X&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Te,vertexUv3s:Ke,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(ce||X),fog:!!G,useFog:M.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:bn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mt,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let k in M.defines)b.push(k),b.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(v(b,M),_(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){let b=g[M.type],k;if(b){let V=Rn[b];k=jt.clone(V.uniforms)}else k=M.uniforms;return k}function w(M,b){let k;for(let V=0,B=l.length;V<B;V++){let G=l[V];if(G.cacheKey===b){k=G,++k.usedTimes;break}}return k===void 0&&(k=new Ry(s,b,M,r),l.push(k)),k}function S(M){if(--M.usedTimes===0){let b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:C}}function Iy(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ly(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,g,x,m){let d=s[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Ly),n.length>1&&n.sort(f||jf),i.length>1&&i.sort(f||jf)}function u(){for(let h=e,f=s.length;h<f;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Dy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Zf,s.set(n,[o])):i>=r.length?(o=new Zf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ny(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ee};break;case"SpotLight":t={position:new P,direction:new P,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Uy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Oy=0;function Fy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function By(s,e){let t=new Ny,n=Uy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);let r=new P,o=new De,a=new De;function c(u,h){let f=0,p=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let x=0,m=0,d=0,v=0,_=0,y=0,w=0,S=0,T=0,C=0;u.sort(Fy);let M=h===!0?Math.PI:1;for(let k=0,V=u.length;k<V;k++){let B=u[k],G=B.color,q=B.intensity,ie=B.distance,Y=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=G.r*q*M,p+=G.g*q*M,g+=G.b*q*M;else if(B.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],q);else if(B.isDirectionalLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*M),B.castShadow){let se=B.shadow,le=n.get(B);le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,i.directionalShadow[x]=le,i.directionalShadowMap[x]=Y,i.directionalShadowMatrix[x]=B.shadow.matrix,y++}i.directional[x]=W,x++}else if(B.isSpotLight){let W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(G).multiplyScalar(q*M),W.distance=ie,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[d]=W;let se=B.shadow;if(B.map&&(i.spotLightMap[T]=B.map,T++,se.updateMatrices(B),B.castShadow&&C++),i.spotLightMatrix[d]=se.matrix,B.castShadow){let le=n.get(B);le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,i.spotShadow[d]=le,i.spotShadowMap[d]=Y,S++}d++}else if(B.isRectAreaLight){let W=t.get(B);W.color.copy(G).multiplyScalar(q),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[v]=W,v++}else if(B.isPointLight){let W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*M),W.distance=B.distance,W.decay=B.decay,B.castShadow){let se=B.shadow,le=n.get(B);le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,le.shadowCameraNear=se.camera.near,le.shadowCameraFar=se.camera.far,i.pointShadow[m]=le,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=B.shadow.matrix,w++}i.point[m]=W,m++}else if(B.isHemisphereLight){let W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(q*M),W.groundColor.copy(B.groundColor).multiplyScalar(q*M),i.hemi[_]=W,_++}}v>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;let b=i.hash;(b.directionalLength!==x||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==v||b.hemiLength!==_||b.numDirectionalShadows!==y||b.numPointShadows!==w||b.numSpotShadows!==S||b.numSpotMaps!==T)&&(i.directional.length=x,i.spot.length=d,i.rectArea.length=v,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,b.directionalLength=x,b.pointLength=m,b.spotLength=d,b.rectAreaLength=v,b.hemiLength=_,b.numDirectionalShadows=y,b.numPointShadows=w,b.numSpotShadows=S,b.numSpotMaps=T,i.version=Oy++)}function l(u,h){let f=0,p=0,g=0,x=0,m=0,d=h.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){let y=u[v];if(y.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),f++}else if(y.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function Kf(s,e){let t=new By(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function zy(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Kf(s,e),t.set(r,[c])):o>=a.length?(c=new Kf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Sl=class extends zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bl=class extends zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vy(s,e,t){let n=new Sr,i=new Q,r=new Q,o=new Ze,a=new Sl({depthPacking:Bm}),c=new bl,l={},u=t.maxTextureSize,h={[sn]:Rt,[Rt]:sn,[Mt]:Mt},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:ky,fragmentShader:Hy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ot;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let d=this.type;this.render=function(w,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let C=s.getRenderTarget(),M=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Lt),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=d!==Gn&&this.type===Gn,B=d===Gn&&this.type!==Gn;for(let G=0,q=w.length;G<q;G++){let ie=w[G],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let W=Y.getFrameExtents();if(i.multiply(W),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,Y.mapSize.y=r.y)),Y.map===null||V===!0||B===!0){let le=this.type!==Gn?{minFilter:ht,magFilter:ht}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pt(i.x,i.y,le),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let se=Y.getViewportCount();for(let le=0;le<se;le++){let ve=Y.getViewport(le);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),k.viewport(o),Y.updateMatrices(ie,le),n=Y.getFrustum(),y(S,T,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===Gn&&v(Y,T),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(C,M,b)};function v(w,S){let T=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pt(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(S,null,T,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(S,null,T,p,x,null)}function _(w,S,T,C){let M=null,b=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)M=b;else if(M=T.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let k=M.uuid,V=S.uuid,B=l[k];B===void 0&&(B={},l[k]=B);let G=B[V];G===void 0&&(G=M.clone(),B[V]=G),M=G}if(M.visible=S.visible,M.wireframe=S.wireframe,C===Gn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:h[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=s.properties.get(M);k.light=T}return M}function y(w,S,T,C,M){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let V=e.update(w),B=w.material;if(Array.isArray(B)){let G=V.groups;for(let q=0,ie=G.length;q<ie;q++){let Y=G[q],W=B[Y.materialIndex];if(W&&W.visible){let se=_(w,W,C,M);s.renderBufferDirect(T,null,V,se,w,Y)}}}else if(B.visible){let G=_(w,B,C,M);s.renderBufferDirect(T,null,V,G,w,null)}}let k=w.children;for(let V=0,B=k.length;V<B;V++)y(k[V],S,T,C,M)}}function Gy(s,e,t){let n=t.isWebGL2;function i(){let X=!1,we=new Ze,oe=null,Me=new Ze(0,0,0,0);return{setMask:function(Te){oe!==Te&&!X&&(s.colorMask(Te,Te,Te,Te),oe=Te)},setLocked:function(Te){X=Te},setClear:function(Te,Ke,ct,gt,Ii){Ii===!0&&(Te*=gt,Ke*=gt,ct*=gt),we.set(Te,Ke,ct,gt),Me.equals(we)===!1&&(s.clearColor(Te,Ke,ct,gt),Me.copy(we))},reset:function(){X=!1,oe=null,Me.set(-1,0,0,0)}}}function r(){let X=!1,we=null,oe=null,Me=null;return{setTest:function(Te){Te?A(s.DEPTH_TEST):$(s.DEPTH_TEST)},setMask:function(Te){we!==Te&&!X&&(s.depthMask(Te),we=Te)},setFunc:function(Te){if(oe!==Te){switch(Te){case ym:s.depthFunc(s.NEVER);break;case vm:s.depthFunc(s.ALWAYS);break;case wm:s.depthFunc(s.LESS);break;case cl:s.depthFunc(s.LEQUAL);break;case Mm:s.depthFunc(s.EQUAL);break;case Sm:s.depthFunc(s.GEQUAL);break;case bm:s.depthFunc(s.GREATER);break;case Tm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=Te}},setLocked:function(Te){X=Te},setClear:function(Te){Me!==Te&&(s.clearDepth(Te),Me=Te)},reset:function(){X=!1,we=null,oe=null,Me=null}}}function o(){let X=!1,we=null,oe=null,Me=null,Te=null,Ke=null,ct=null,gt=null,Ii=null;return{setTest:function(lt){X||(lt?A(s.STENCIL_TEST):$(s.STENCIL_TEST))},setMask:function(lt){we!==lt&&!X&&(s.stencilMask(lt),we=lt)},setFunc:function(lt,An,Vt){(oe!==lt||Me!==An||Te!==Vt)&&(s.stencilFunc(lt,An,Vt),oe=lt,Me=An,Te=Vt)},setOp:function(lt,An,Vt){(Ke!==lt||ct!==An||gt!==Vt)&&(s.stencilOp(lt,An,Vt),Ke=lt,ct=An,gt=Vt)},setLocked:function(lt){X=lt},setClear:function(lt){Ii!==lt&&(s.clearStencil(lt),Ii=lt)},reset:function(){X=!1,we=null,oe=null,Me=null,Te=null,Ke=null,ct=null,gt=null,Ii=null}}}let a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,_=null,y=null,w=null,S=null,T=null,C=null,M=!1,b=null,k=null,V=null,B=null,G=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,Y=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),ie=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ie=Y>=2);let se=null,le={},ve=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),ge=new Ze().fromArray(ve),F=new Ze().fromArray(ee);function U(X,we,oe,Me){let Te=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(X,Ke),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<oe;ct++)n&&(X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY)?s.texImage3D(we,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(we+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Ke}let R={};R[s.TEXTURE_2D]=U(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=U(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(R[s.TEXTURE_2D_ARRAY]=U(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=U(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),A(s.DEPTH_TEST),c.setFunc(cl),Z(!1),de(Uh),A(s.CULL_FACE),H(Lt);function A(X){f[X]!==!0&&(s.enable(X),f[X]=!0)}function $(X){f[X]!==!1&&(s.disable(X),f[X]=!1)}function ce(X,we){return p[X]!==we?(s.bindFramebuffer(X,we),p[X]=we,n&&(X===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=we),X===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=we)),!0):!1}function J(X,we){let oe=x,Me=!1;if(X)if(oe=g.get(we),oe===void 0&&(oe=[],g.set(we,oe)),X.isWebGLMultipleRenderTargets){let Te=X.texture;if(oe.length!==Te.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,ct=Te.length;Ke<ct;Ke++)oe[Ke]=s.COLOR_ATTACHMENT0+Ke;oe.length=Te.length,Me=!0}}else oe[0]!==s.COLOR_ATTACHMENT0&&(oe[0]=s.COLOR_ATTACHMENT0,Me=!0);else oe[0]!==s.BACK&&(oe[0]=s.BACK,Me=!0);Me&&(t.isWebGL2?s.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function ue(X){return m!==X?(s.useProgram(X),m=X,!0):!1}let I={[Mn]:s.FUNC_ADD,[fm]:s.FUNC_SUBTRACT,[dm]:s.FUNC_REVERSE_SUBTRACT};if(n)I[Bh]=s.MIN,I[zh]=s.MAX;else{let X=e.get("EXT_blend_minmax");X!==null&&(I[Bh]=X.MIN_EXT,I[zh]=X.MAX_EXT)}let te={[Ca]:s.ZERO,[Vr]:s.ONE,[pm]:s.SRC_COLOR,[Pa]:s.SRC_ALPHA,[xm]:s.SRC_ALPHA_SATURATE,[$l]:s.DST_COLOR,[Jl]:s.DST_ALPHA,[mm]:s.ONE_MINUS_SRC_COLOR,[Ad]:s.ONE_MINUS_SRC_ALPHA,[_m]:s.ONE_MINUS_DST_COLOR,[gm]:s.ONE_MINUS_DST_ALPHA};function H(X,we,oe,Me,Te,Ke,ct,gt){if(X===Lt){d===!0&&($(s.BLEND),d=!1);return}if(d===!1&&(A(s.BLEND),d=!0),X!==Hr){if(X!==v||gt!==M){if((_!==Mn||S!==Mn)&&(s.blendEquation(s.FUNC_ADD),_=Mn,S=Mn),gt)switch(X){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zo:s.blendFunc(s.ONE,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,w=null,T=null,C=null,v=X,M=gt}return}Te=Te||we,Ke=Ke||oe,ct=ct||Me,(we!==_||Te!==S)&&(s.blendEquationSeparate(I[we],I[Te]),_=we,S=Te),(oe!==y||Me!==w||Ke!==T||ct!==C)&&(s.blendFuncSeparate(te[oe],te[Me],te[Ke],te[ct]),y=oe,w=Me,T=Ke,C=ct),v=X,M=!1}function j(X,we){X.side===Mt?$(s.CULL_FACE):A(s.CULL_FACE);let oe=X.side===Rt;we&&(oe=!oe),Z(oe),X.blending===Ss&&X.transparent===!1?H(Lt):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),a.setMask(X.colorWrite);let Me=X.stencilWrite;l.setTest(Me),Me&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),L(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?A(s.SAMPLE_ALPHA_TO_COVERAGE):$(s.SAMPLE_ALPHA_TO_COVERAGE)}function Z(X){b!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),b=X)}function de(X){X!==lm?(A(s.CULL_FACE),X!==k&&(X===Uh?s.cullFace(s.BACK):X===um?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$(s.CULL_FACE),k=X}function z(X){X!==V&&(ie&&s.lineWidth(X),V=X)}function L(X,we,oe){X?(A(s.POLYGON_OFFSET_FILL),(B!==we||G!==oe)&&(s.polygonOffset(we,oe),B=we,G=oe)):$(s.POLYGON_OFFSET_FILL)}function me(X){X?A(s.SCISSOR_TEST):$(s.SCISSOR_TEST)}function be(X){X===void 0&&(X=s.TEXTURE0+q-1),se!==X&&(s.activeTexture(X),se=X)}function Ve(X,we,oe){oe===void 0&&(se===null?oe=s.TEXTURE0+q-1:oe=se);let Me=le[oe];Me===void 0&&(Me={type:void 0,texture:void 0},le[oe]=Me),(Me.type!==X||Me.texture!==we)&&(se!==oe&&(s.activeTexture(oe),se=oe),s.bindTexture(X,we||R[X]),Me.type=X,Me.texture=we)}function N(){let X=le[se];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function O(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(X){ge.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ge.copy(X))}function Ce(X){F.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),F.copy(X))}function Re(X,we){let oe=h.get(we);oe===void 0&&(oe=new WeakMap,h.set(we,oe));let Me=oe.get(X);Me===void 0&&(Me=s.getUniformBlockIndex(we,X.name),oe.set(X,Me))}function Ne(X,we){let Me=h.get(we).get(X);u.get(we)!==Me&&(s.uniformBlockBinding(we,Me,X.__bindingPointIndex),u.set(we,Me))}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},se=null,le={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,_=null,y=null,w=null,S=null,T=null,C=null,M=!1,b=null,k=null,V=null,B=null,G=null,ge.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:A,disable:$,bindFramebuffer:ce,drawBuffers:J,useProgram:ue,setBlending:H,setMaterial:j,setFlipSided:Z,setCullFace:de,setLineWidth:z,setPolygonOffset:L,setScissorTest:me,activeTexture:be,bindTexture:Ve,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:ae,texImage2D:Ae,texImage3D:Le,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:_e,texStorage3D:re,texSubImage2D:xe,texSubImage3D:ye,compressedTexSubImage2D:O,compressedTexSubImage3D:pe,scissor:Ie,viewport:Ce,reset:ke}}function Wy(s,e,t,n,i,r,o){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,x,m=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(N,E){return d?new OffscreenCanvas(N,E):wr("canvas")}function _(N,E,ae,xe){let ye=1;if((N.width>xe||N.height>xe)&&(ye=xe/Math.max(N.width,N.height)),ye<1||E===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let O=E?$o:Math.floor,pe=O(ye*N.width),_e=O(ye*N.height);x===void 0&&(x=v(pe,_e));let re=ae?v(pe,_e):x;return re.width=pe,re.height=_e,re.getContext("2d").drawImage(N,0,0,pe,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+pe+"x"+_e+")."),re}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function y(N){return dl(N.width)&&dl(N.height)}function w(N){return a?!1:N.wrapS!==nn||N.wrapT!==nn||N.minFilter!==ht&&N.minFilter!==Pt}function S(N,E){return N.generateMipmaps&&E&&N.minFilter!==ht&&N.minFilter!==Pt}function T(N){s.generateMipmap(N)}function C(N,E,ae,xe,ye=!1){if(a===!1)return E;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let O=E;return E===s.RED&&(ae===s.FLOAT&&(O=s.R32F),ae===s.HALF_FLOAT&&(O=s.R16F),ae===s.UNSIGNED_BYTE&&(O=s.R8)),E===s.RG&&(ae===s.FLOAT&&(O=s.RG32F),ae===s.HALF_FLOAT&&(O=s.RG16F),ae===s.UNSIGNED_BYTE&&(O=s.RG8)),E===s.RGBA&&(ae===s.FLOAT&&(O=s.RGBA32F),ae===s.HALF_FLOAT&&(O=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(O=xe===Oe&&ye===!1?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT_4_4_4_4&&(O=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(O=s.RGB5_A1)),(O===s.R16F||O===s.R32F||O===s.RG16F||O===s.RG32F||O===s.RGBA16F||O===s.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function M(N,E,ae){return S(N,ae)===!0||N.isFramebufferTexture&&N.minFilter!==ht&&N.minFilter!==Pt?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function b(N){return N===ht||N===Ko||N===dr?s.NEAREST:s.LINEAR}function k(N){let E=N.target;E.removeEventListener("dispose",k),B(E),E.isVideoTexture&&g.delete(E)}function V(N){let E=N.target;E.removeEventListener("dispose",V),q(E)}function B(N){let E=n.get(N);if(E.__webglInit===void 0)return;let ae=N.source,xe=m.get(ae);if(xe){let ye=xe[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&G(N),Object.keys(xe).length===0&&m.delete(ae)}n.remove(N)}function G(N){let E=n.get(N);s.deleteTexture(E.__webglTexture);let ae=N.source,xe=m.get(ae);delete xe[E.__cacheKey],o.memory.textures--}function q(N){let E=N.texture,ae=n.get(N),xe=n.get(E);if(xe.__webglTexture!==void 0&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++)s.deleteFramebuffer(ae.__webglFramebuffer[ye]),ae.__webglDepthbuffer&&s.deleteRenderbuffer(ae.__webglDepthbuffer[ye]);else{if(s.deleteFramebuffer(ae.__webglFramebuffer),ae.__webglDepthbuffer&&s.deleteRenderbuffer(ae.__webglDepthbuffer),ae.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ae.__webglMultisampledFramebuffer),ae.__webglColorRenderbuffer)for(let ye=0;ye<ae.__webglColorRenderbuffer.length;ye++)ae.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(ae.__webglColorRenderbuffer[ye]);ae.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ae.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ye=0,O=E.length;ye<O;ye++){let pe=n.get(E[ye]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(E[ye])}n.remove(E),n.remove(N)}let ie=0;function Y(){ie=0}function W(){let N=ie;return N>=c&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+c),ie+=1,N}function se(N){let E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function le(N,E){let ae=n.get(N);if(N.isVideoTexture&&be(N),N.isRenderTargetTexture===!1&&N.version>0&&ae.__version!==N.version){let xe=N.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(ae,N,E);return}}t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+E)}function ve(N,E){let ae=n.get(N);if(N.version>0&&ae.__version!==N.version){ce(ae,N,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+E)}function ee(N,E){let ae=n.get(N);if(N.version>0&&ae.__version!==N.version){ce(ae,N,E);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+E)}function ge(N,E){let ae=n.get(N);if(N.version>0&&ae.__version!==N.version){J(ae,N,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+E)}let F={[$e]:s.REPEAT,[nn]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},U={[ht]:s.NEAREST,[Ko]:s.NEAREST_MIPMAP_NEAREST,[dr]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[nu]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},R={[Hm]:s.NEVER,[jm]:s.ALWAYS,[Vm]:s.LESS,[Wm]:s.LEQUAL,[Gm]:s.EQUAL,[Ym]:s.GEQUAL,[Xm]:s.GREATER,[qm]:s.NOTEQUAL};function A(N,E,ae){if(ae?(s.texParameteri(N,s.TEXTURE_WRAP_S,F[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,F[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,F[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[E.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==nn||E.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,b(E.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==ht&&E.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,R[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===ht||E.minFilter!==dr&&E.minFilter!==fi||E.type===Sn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Dt&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(N,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function $(N,E){let ae=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",k));let xe=E.source,ye=m.get(xe);ye===void 0&&(ye={},m.set(xe,ye));let O=se(E);if(O!==N.__cacheKey){ye[O]===void 0&&(ye[O]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,ae=!0),ye[O].usedTimes++;let pe=ye[N.__cacheKey];pe!==void 0&&(ye[N.__cacheKey].usedTimes--,pe.usedTimes===0&&G(E)),N.__cacheKey=O,N.__webglTexture=ye[O].texture}return ae}function ce(N,E,ae){let xe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=s.TEXTURE_3D);let ye=$(N,E),O=E.source;t.bindTexture(xe,N.__webglTexture,s.TEXTURE0+ae);let pe=n.get(O);if(O.version!==pe.__version||ye===!0){t.activeTexture(s.TEXTURE0+ae),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);let _e=w(E)&&y(E.image)===!1,re=_(E.image,_e,!1,u);re=Ve(E,re);let Ae=y(re)||a,Le=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),Ce=C(E.internalFormat,Le,Ie,E.colorSpace);A(xe,E,Ae);let Re,Ne=E.mipmaps,ke=a&&E.isVideoTexture!==!0,X=pe.__version===void 0||ye===!0,we=M(E,re,Ae);if(E.isDepthTexture)Ce=s.DEPTH_COMPONENT,a?E.type===Sn?Ce=s.DEPTH_COMPONENT32F:E.type===ui?Ce=s.DEPTH_COMPONENT24:E.type===qn?Ce=s.DEPTH24_STENCIL8:Ce=s.DEPTH_COMPONENT16:E.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ki&&Ce===s.DEPTH_COMPONENT&&E.type!==iu&&E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ui,Ie=r.convert(E.type)),E.format===di&&Ce===s.DEPTH_COMPONENT&&(Ce=s.DEPTH_STENCIL,E.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=qn,Ie=r.convert(E.type))),X&&(ke?t.texStorage2D(s.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Ce,re.width,re.height,0,Le,Ie,null));else if(E.isDataTexture)if(Ne.length>0&&Ae){ke&&X&&t.texStorage2D(s.TEXTURE_2D,we,Ce,Ne[0].width,Ne[0].height);for(let oe=0,Me=Ne.length;oe<Me;oe++)Re=Ne[oe],ke?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Re.width,Re.height,Le,Ie,Re.data):t.texImage2D(s.TEXTURE_2D,oe,Ce,Re.width,Re.height,0,Le,Ie,Re.data);E.generateMipmaps=!1}else ke?(X&&t.texStorage2D(s.TEXTURE_2D,we,Ce,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Le,Ie,re.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,re.width,re.height,0,Le,Ie,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&X&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ce,Ne[0].width,Ne[0].height,re.depth);for(let oe=0,Me=Ne.length;oe<Me;oe++)Re=Ne[oe],E.format!==on?Le!==null?ke?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Re.width,Re.height,re.depth,Le,Re.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Ce,Re.width,Re.height,re.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Re.width,Re.height,re.depth,Le,Ie,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Ce,Re.width,Re.height,re.depth,0,Le,Ie,Re.data)}else{ke&&X&&t.texStorage2D(s.TEXTURE_2D,we,Ce,Ne[0].width,Ne[0].height);for(let oe=0,Me=Ne.length;oe<Me;oe++)Re=Ne[oe],E.format!==on?Le!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Ce,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Re.width,Re.height,Le,Ie,Re.data):t.texImage2D(s.TEXTURE_2D,oe,Ce,Re.width,Re.height,0,Le,Ie,Re.data)}else if(E.isDataArrayTexture)ke?(X&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Ce,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Le,Ie,re.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,Le,Ie,re.data);else if(E.isData3DTexture)ke?(X&&t.texStorage3D(s.TEXTURE_3D,we,Ce,re.width,re.height,re.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Le,Ie,re.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,Le,Ie,re.data);else if(E.isFramebufferTexture){if(X)if(ke)t.texStorage2D(s.TEXTURE_2D,we,Ce,re.width,re.height);else{let oe=re.width,Me=re.height;for(let Te=0;Te<we;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ce,oe,Me,0,Le,Ie,null),oe>>=1,Me>>=1}}else if(Ne.length>0&&Ae){ke&&X&&t.texStorage2D(s.TEXTURE_2D,we,Ce,Ne[0].width,Ne[0].height);for(let oe=0,Me=Ne.length;oe<Me;oe++)Re=Ne[oe],ke?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Le,Ie,Re):t.texImage2D(s.TEXTURE_2D,oe,Ce,Le,Ie,Re);E.generateMipmaps=!1}else ke?(X&&t.texStorage2D(s.TEXTURE_2D,we,Ce,re.width,re.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,Ie,re)):t.texImage2D(s.TEXTURE_2D,0,Ce,Le,Ie,re);S(E,Ae)&&T(xe),pe.__version=O.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function J(N,E,ae){if(E.image.length!==6)return;let xe=$(N,E),ye=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ae);let O=n.get(ye);if(ye.version!==O.__version||xe===!0){t.activeTexture(s.TEXTURE0+ae),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);let pe=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,re=[];for(let oe=0;oe<6;oe++)!pe&&!_e?re[oe]=_(E.image[oe],!1,!0,l):re[oe]=_e?E.image[oe].image:E.image[oe],re[oe]=Ve(E,re[oe]);let Ae=re[0],Le=y(Ae)||a,Ie=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),Re=C(E.internalFormat,Ie,Ce,E.colorSpace),Ne=a&&E.isVideoTexture!==!0,ke=O.__version===void 0||xe===!0,X=M(E,Ae,Le);A(s.TEXTURE_CUBE_MAP,E,Le);let we;if(pe){Ne&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,X,Re,Ae.width,Ae.height);for(let oe=0;oe<6;oe++){we=re[oe].mipmaps;for(let Me=0;Me<we.length;Me++){let Te=we[Me];E.format!==on?Ie!==null?Ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Te.width,Te.height,Ie,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Re,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Te.width,Te.height,Ie,Ce,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Re,Te.width,Te.height,0,Ie,Ce,Te.data)}}}else{we=E.mipmaps,Ne&&ke&&(we.length>0&&X++,t.texStorage2D(s.TEXTURE_CUBE_MAP,X,Re,re[0].width,re[0].height));for(let oe=0;oe<6;oe++)if(_e){Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,re[oe].width,re[oe].height,Ie,Ce,re[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Re,re[oe].width,re[oe].height,0,Ie,Ce,re[oe].data);for(let Me=0;Me<we.length;Me++){let Ke=we[Me].image[oe].image;Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ke.width,Ke.height,Ie,Ce,Ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Re,Ke.width,Ke.height,0,Ie,Ce,Ke.data)}}else{Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ie,Ce,re[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Re,Ie,Ce,re[oe]);for(let Me=0;Me<we.length;Me++){let Te=we[Me];Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ie,Ce,Te.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Re,Ie,Ce,Te.image[oe])}}}S(E,Le)&&T(s.TEXTURE_CUBE_MAP),O.__version=ye.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ue(N,E,ae,xe,ye){let O=r.convert(ae.format,ae.colorSpace),pe=r.convert(ae.type),_e=C(ae.internalFormat,O,pe,ae.colorSpace);n.get(E).__hasExternalTextures||(ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,_e,E.width,E.height,E.depth,0,O,pe,null):t.texImage2D(ye,0,_e,E.width,E.height,0,O,pe,null)),t.bindFramebuffer(s.FRAMEBUFFER,N),me(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,ye,n.get(ae).__webglTexture,0,L(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,ye,n.get(ae).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function I(N,E,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer&&!E.stencilBuffer){let xe=s.DEPTH_COMPONENT16;if(ae||me(E)){let ye=E.depthTexture;ye&&ye.isDepthTexture&&(ye.type===Sn?xe=s.DEPTH_COMPONENT32F:ye.type===ui&&(xe=s.DEPTH_COMPONENT24));let O=L(E);me(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O,xe,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,O,xe,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,xe,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(E.depthBuffer&&E.stencilBuffer){let xe=L(E);ae&&me(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,s.DEPTH24_STENCIL8,E.width,E.height):me(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{let xe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ye=0;ye<xe.length;ye++){let O=xe[ye],pe=r.convert(O.format,O.colorSpace),_e=r.convert(O.type),re=C(O.internalFormat,pe,_e,O.colorSpace),Ae=L(E);ae&&me(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,re,E.width,E.height):me(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,re,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function te(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le(E.depthTexture,0);let xe=n.get(E.depthTexture).__webglTexture,ye=L(E);if(E.depthTexture.format===ki)me(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(E.depthTexture.format===di)me(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function H(N){let E=n.get(N),ae=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(ae)throw new Error("target.depthTexture not supported in Cube render targets");te(E.__webglFramebuffer,N)}else if(ae){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]=s.createRenderbuffer(),I(E.__webglDepthbuffer[xe],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),I(E.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function j(N,E,ae){let xe=n.get(N);E!==void 0&&ue(xe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),ae!==void 0&&H(N)}function Z(N){let E=N.texture,ae=n.get(N),xe=n.get(E);N.addEventListener("dispose",V),N.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=E.version,o.memory.textures++);let ye=N.isWebGLCubeRenderTarget===!0,O=N.isWebGLMultipleRenderTargets===!0,pe=y(N)||a;if(ye){ae.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)ae.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(ae.__webglFramebuffer=s.createFramebuffer(),O)if(i.drawBuffers){let _e=N.texture;for(let re=0,Ae=_e.length;re<Ae;re++){let Le=n.get(_e[re]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&me(N)===!1){let _e=O?E:[E];ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let re=0;re<_e.length;re++){let Ae=_e[re];ae.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);let Le=r.convert(Ae.format,Ae.colorSpace),Ie=r.convert(Ae.type),Ce=C(Ae.internalFormat,Le,Ie,Ae.colorSpace,N.isXRRenderTarget===!0),Re=L(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Ce,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,ae.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),I(ae.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),A(s.TEXTURE_CUBE_MAP,E,pe);for(let _e=0;_e<6;_e++)ue(ae.__webglFramebuffer[_e],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e);S(E,pe)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){let _e=N.texture;for(let re=0,Ae=_e.length;re<Ae;re++){let Le=_e[re],Ie=n.get(Le);t.bindTexture(s.TEXTURE_2D,Ie.__webglTexture),A(s.TEXTURE_2D,Le,pe),ue(ae.__webglFramebuffer,N,Le,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D),S(Le,pe)&&T(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?_e=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,xe.__webglTexture),A(_e,E,pe),ue(ae.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,_e),S(E,pe)&&T(_e),t.unbindTexture()}N.depthBuffer&&H(N)}function de(N){let E=y(N)||a,ae=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let xe=0,ye=ae.length;xe<ye;xe++){let O=ae[xe];if(S(O,E)){let pe=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=n.get(O).__webglTexture;t.bindTexture(pe,_e),T(pe),t.unbindTexture()}}}function z(N){if(a&&N.samples>0&&me(N)===!1){let E=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ae=N.width,xe=N.height,ye=s.COLOR_BUFFER_BIT,O=[],pe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(N),re=N.isWebGLMultipleRenderTargets===!0;if(re)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){O.push(s.COLOR_ATTACHMENT0+Ae),N.depthBuffer&&O.push(pe);let Le=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Le===!1&&(N.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),re&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]),Le===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),re){let Ie=n.get(E[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,ae,xe,0,0,ae,xe,ye,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,O)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);let Le=n.get(E[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function L(N){return Math.min(h,N.samples)}function me(N){let E=n.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(N){let E=o.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Ve(N,E){let ae=N.colorSpace,xe=N.format,ye=N.type;return N.isCompressedTexture===!0||N.format===fl||ae!==Cn&&ae!==Vi&&(ae===Oe?a===!1?e.has("EXT_sRGB")===!0&&xe===on?(N.format=fl,N.minFilter=Pt,N.generateMipmaps=!1):E=Qo.sRGBToLinear(E):(xe!==on||ye!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ae)),E}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=le,this.setTexture2DArray=ve,this.setTexture3D=ee,this.setTextureCube=ge,this.rebindTextures=j,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=me}function Xy(s,e,t){let n=t.isWebGL2;function i(r,o=Vi){let a;if(r===hi)return s.UNSIGNED_BYTE;if(r===Pd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cm)return s.BYTE;if(r===Pm)return s.SHORT;if(r===iu)return s.UNSIGNED_SHORT;if(r===Cd)return s.INT;if(r===ui)return s.UNSIGNED_INT;if(r===Sn)return s.FLOAT;if(r===Dt)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Im)return s.ALPHA;if(r===on)return s.RGBA;if(r===su)return s.LUMINANCE;if(r===Lm)return s.LUMINANCE_ALPHA;if(r===ki)return s.DEPTH_COMPONENT;if(r===di)return s.DEPTH_STENCIL;if(r===fl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ru)return s.RED;if(r===Ld)return s.RED_INTEGER;if(r===Dm)return s.RG;if(r===Dd)return s.RG_INTEGER;if(r===Nd)return s.RGBA_INTEGER;if(r===Ac||r===Rc||r===Cc||r===Pc)if(o===Oe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kh||r===Hh||r===Vh||r===Gh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wh||r===Xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wh)return o===Oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Jh||r===$h||r===Qh||r===ef||r===tf||r===nf||r===sf||r===rf||r===of)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$h)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qh)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ef)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tf)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nf)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sf)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rf)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===of)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ic)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ic)return o===Oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Um||r===af||r===cf||r===lf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ic)return a.COMPRESSED_RED_RGTC1_EXT;if(r===af)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Tl=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qy={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tr=class extends Bt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:ki,u!==ki&&u!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ki&&(n=ui),n===void 0&&u===di&&(n=qn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},El=class extends Pn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,x=t.getContextAttributes(),m=null,d=null,v=[],_=[],y=null,w=new wt;w.layers.enable(1),w.viewport=new Ze;let S=new wt;S.layers.enable(2),S.viewport=new Ze;let T=[w,S],C=new Tl;C.layers.enable(1),C.layers.enable(2);let M=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(ee){y=ee},this.getController=function(ee){let ge=v[ee];return ge===void 0&&(ge=new _r,v[ee]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ee){let ge=v[ee];return ge===void 0&&(ge=new _r,v[ee]=ge),ge.getGripSpace()},this.getHand=function(ee){let ge=v[ee];return ge===void 0&&(ge=new _r,v[ee]=ge),ge.getHandSpace()};function k(ee){let ge=_.indexOf(ee.inputSource);if(ge===-1)return;let F=v[ge];F!==void 0&&(F.update(ee.inputSource,ee.frame,l||o),F.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",B);for(let ee=0;ee<v.length;ee++){let ge=_[ee];ge!==null&&(_[ee]=null,v[ee].disconnect(ge))}M=null,b=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,ve.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ge={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:p}),d=new pt(p.framebufferWidth,p.framebufferHeight,{format:on,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ge=null,F=null,U=null;x.depth&&(U=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=x.stencil?di:ki,F=x.stencil?qn:ui);let R={colorFormat:t.RGBA8,depthFormat:U,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(R),i.updateRenderState({layers:[f]}),d=new pt(f.textureWidth,f.textureHeight,{format:on,type:hi,depthTexture:new Tr(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let A=e.properties.get(d);A.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ve.setContext(i),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(ee){for(let ge=0;ge<ee.removed.length;ge++){let F=ee.removed[ge],U=_.indexOf(F);U>=0&&(_[U]=null,v[U].disconnect(F))}for(let ge=0;ge<ee.added.length;ge++){let F=ee.added[ge],U=_.indexOf(F);if(U===-1){for(let A=0;A<v.length;A++)if(A>=_.length){_.push(F),U=A;break}else if(_[A]===null){_[A]=F,U=A;break}if(U===-1)break}let R=v[U];R&&R.connect(F)}}let G=new P,q=new P;function ie(ee,ge,F){G.setFromMatrixPosition(ge.matrixWorld),q.setFromMatrixPosition(F.matrixWorld);let U=G.distanceTo(q),R=ge.projectionMatrix.elements,A=F.projectionMatrix.elements,$=R[14]/(R[10]-1),ce=R[14]/(R[10]+1),J=(R[9]+1)/R[5],ue=(R[9]-1)/R[5],I=(R[8]-1)/R[0],te=(A[8]+1)/A[0],H=$*I,j=$*te,Z=U/(-I+te),de=Z*-I;ge.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(de),ee.translateZ(Z),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();let z=$+Z,L=ce+Z,me=H-de,be=j+(U-de),Ve=J*ce/L*z,N=ue*ce/L*z;ee.projectionMatrix.makePerspective(me,be,Ve,N,z,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function Y(ee,ge){ge===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ge.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCameraXR=function(ee){if(i===null)return ee;y&&(ee=y),C.near=S.near=w.near=ee.near,C.far=S.far=w.far=ee.far,(M!==C.near||b!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),M=C.near,b=C.far);let ge=ee.parent,F=C.cameras;Y(C,ge);for(let U=0;U<F.length;U++)Y(F[U],ge);return F.length===2?ie(C,w,S):C.projectionMatrix.copy(w.projectionMatrix),y&&W(C,ge),C};function W(ee,ge){let F=y;ge===null?F.matrix.copy(ee.matrixWorld):(F.matrix.copy(ge.matrixWorld),F.matrix.invert(),F.matrix.multiply(ee.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);let U=F.children;for(let R=0,A=U.length;R<A;R++)U[R].updateMatrixWorld(!0);F.projectionMatrix.copy(ee.projectionMatrix),F.projectionMatrixInverse.copy(ee.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Cs*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)};let se=null;function le(ee,ge){if(u=ge.getViewerPose(l||o),g=ge,u!==null){let F=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let U=!1;F.length!==C.cameras.length&&(C.cameras.length=0,U=!0);for(let R=0;R<F.length;R++){let A=F[R],$=null;if(p!==null)$=p.getViewport(A);else{let J=h.getViewSubImage(f,A);$=J.viewport,R===0&&(e.setRenderTargetTextures(d,J.colorTexture,f.ignoreDepthValues?void 0:J.depthStencilTexture),e.setRenderTarget(d))}let ce=T[R];ce===void 0&&(ce=new wt,ce.layers.enable(R),ce.viewport=new Ze,T[R]=ce),ce.matrix.fromArray(A.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(A.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set($.x,$.y,$.width,$.height),R===0&&(C.matrix.copy(ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),U===!0&&C.cameras.push(ce)}}for(let F=0;F<v.length;F++){let U=_[F],R=v[F];U!==null&&R!==void 0&&R.update(U,ge,l||o)}se&&se(ee,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}let ve=new Vd;ve.setAnimationLoop(le),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}};function Yy(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Hd(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let _=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jy(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));let w=_.program;n.updateUBOMapping(v,w);let S=e.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function u(v){let _=h();v.__bindingPointIndex=_;let y=s.createBuffer(),w=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,T=y.length;S<T;S++){let C=y[S];if(p(C,S,w)===!0){let M=C.__offset,b=Array.isArray(C.value)?C.value:[C.value],k=0;for(let V=0;V<b.length;V++){let B=b[V],G=x(B);typeof B=="number"?(C.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,M+k,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=B.elements[0],C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=B.elements[0],C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=B.elements[0]):(B.toArray(C.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,C.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,_,y){let w=v.value;if(y[_]===void 0){if(typeof w=="number")y[_]=w;else{let S=Array.isArray(w)?w:[w],T=[];for(let C=0;C<S.length;C++)T.push(S[C].clone());y[_]=T}return!0}else if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{let S=Array.isArray(y[_])?y[_]:[y[_]],T=Array.isArray(w)?w:[w];for(let C=0;C<S.length;C++){let M=S[C];if(M.equals(T[C])===!1)return M.copy(T[C]),!0}}return!1}function g(v){let _=v.uniforms,y=0,w=16,S=0;for(let T=0,C=_.length;T<C;T++){let M=_[T],b={boundary:0,storage:0},k=Array.isArray(M.value)?M.value:[M.value];for(let V=0,B=k.length;V<B;V++){let G=k[V],q=x(G);b.boundary+=q.boundary,b.storage+=q.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,T>0){S=y%w;let V=w-S;S!==0&&V-b.boundary<0&&(y+=w-S,M.__offset=y)}y+=b.storage}return S=y%w,S>0&&(y+=w-S),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function d(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}function Zy(){let s=wr("canvas");return s.style.display="block",s}var Er=class{constructor(e={}){let{canvas:t=Zy(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Oe,this.useLegacyLights=!0,this.toneMapping=bn,this.toneMappingExposure=1;let _=this,y=!1,w=0,S=0,T=null,C=-1,M=null,b=new Ze,k=new Ze,V=null,B=new Ee(0),G=0,q=t.width,ie=t.height,Y=1,W=null,se=null,le=new Ze(0,0,q,ie),ve=new Ze(0,0,q,ie),ee=!1,ge=new Sr,F=!1,U=!1,R=null,A=new De,$=new Q,ce=new P,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return T===null?Y:1}let I=n;function te(D,ne){for(let he=0;he<D.length;he++){let K=D[he],fe=t.getContext(K,ne);if(fe!==null)return fe}return null}try{let D={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kl}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),I===null){let ne=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ne.shift(),I=te(ne,D),I===null)throw te(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let H,j,Z,de,z,L,me,be,Ve,N,E,ae,xe,ye,O,pe,_e,re,Ae,Le,Ie,Ce,Re,Ne;function ke(){H=new gx(I),j=new ux(I,H,e),H.init(j),Ce=new Xy(I,H,j),Z=new Gy(I,H,j),de=new yx(I),z=new Iy,L=new Wy(I,H,Z,z,j,Ce,de),me=new fx(_),be=new mx(_),Ve=new Ig(I,j),Re=new cx(I,H,Ve,j),N=new _x(I,Ve,de,Re),E=new Sx(I,N,Ve,de),Ae=new Mx(I,j,L),pe=new hx(z),ae=new Py(_,me,be,H,j,Re,pe),xe=new Yy(_,z),ye=new Dy,O=new zy(H,j),re=new ax(_,me,be,Z,E,f,c),_e=new Vy(_,E,j),Ne=new jy(I,de,j,Z),Le=new lx(I,H,de,j),Ie=new xx(I,H,de,j),de.programs=ae.programs,_.capabilities=j,_.extensions=H,_.properties=z,_.renderLists=ye,_.shadowMap=_e,_.state=Z,_.info=de}ke();let X=new El(_,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let D=H.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=H.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(q,ie,!1))},this.getSize=function(D){return D.set(q,ie)},this.setSize=function(D,ne,he=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=D,ie=ne,t.width=Math.floor(D*Y),t.height=Math.floor(ne*Y),he===!0&&(t.style.width=D+"px",t.style.height=ne+"px"),this.setViewport(0,0,D,ne)},this.getDrawingBufferSize=function(D){return D.set(q*Y,ie*Y).floor()},this.setDrawingBufferSize=function(D,ne,he){q=D,ie=ne,Y=he,t.width=Math.floor(D*he),t.height=Math.floor(ne*he),this.setViewport(0,0,D,ne)},this.getCurrentViewport=function(D){return D.copy(b)},this.getViewport=function(D){return D.copy(le)},this.setViewport=function(D,ne,he,K){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,ne,he,K),Z.viewport(b.copy(le).multiplyScalar(Y).floor())},this.getScissor=function(D){return D.copy(ve)},this.setScissor=function(D,ne,he,K){D.isVector4?ve.set(D.x,D.y,D.z,D.w):ve.set(D,ne,he,K),Z.scissor(k.copy(ve).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(D){Z.setScissorTest(ee=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){se=D},this.getClearColor=function(D){return D.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(D=!0,ne=!0,he=!0){let K=0;if(D){let fe=!1;if(T!==null){let Pe=T.texture.format;fe=Pe===Nd||Pe===Dd||Pe===Ld}if(fe){let Pe=T.texture.type,Ue=Pe===hi||Pe===ui||Pe===iu||Pe===qn||Pe===Pd||Pe===Id,Be=re.getClearColor(),ze=re.getClearAlpha(),Xe=Be.r,He=Be.g,Ge=Be.b,it=z.get(T).__webglFramebuffer;Ue?(p[0]=Xe,p[1]=He,p[2]=Ge,p[3]=ze,I.clearBufferuiv(I.COLOR,it,p)):(g[0]=Xe,g[1]=He,g[2]=Ge,g[3]=ze,I.clearBufferiv(I.COLOR,it,g))}else K|=I.COLOR_BUFFER_BIT}ne&&(K|=I.DEPTH_BUFFER_BIT),he&&(K|=I.STENCIL_BUFFER_BIT),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ye.dispose(),O.dispose(),z.dispose(),me.dispose(),be.dispose(),E.dispose(),Re.dispose(),Ne.dispose(),ae.dispose(),X.dispose(),X.removeEventListener("sessionstart",lt),X.removeEventListener("sessionend",An),R&&(R.dispose(),R=null),Vt.stop()};function we(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let D=de.autoReset,ne=_e.enabled,he=_e.autoUpdate,K=_e.needsUpdate,fe=_e.type;ke(),de.autoReset=D,_e.enabled=ne,_e.autoUpdate=he,_e.needsUpdate=K,_e.type=fe}function Me(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Te(D){let ne=D.target;ne.removeEventListener("dispose",Te),Ke(ne)}function Ke(D){ct(D),z.remove(D)}function ct(D){let ne=z.get(D).programs;ne!==void 0&&(ne.forEach(function(he){ae.releaseProgram(he)}),D.isShaderMaterial&&ae.releaseShaderCache(D))}this.renderBufferDirect=function(D,ne,he,K,fe,Pe){ne===null&&(ne=J);let Ue=fe.isMesh&&fe.matrixWorld.determinant()<0,Be=rm(D,ne,he,K,fe);Z.setMaterial(K,Ue);let ze=he.index,Xe=1;K.wireframe===!0&&(ze=N.getWireframeAttribute(he),Xe=2);let He=he.drawRange,Ge=he.attributes.position,it=He.start*Xe,ft=(He.start+He.count)*Xe;Pe!==null&&(it=Math.max(it,Pe.start*Xe),ft=Math.min(ft,(Pe.start+Pe.count)*Xe)),ze!==null?(it=Math.max(it,0),ft=Math.min(ft,ze.count)):Ge!=null&&(it=Math.max(it,0),ft=Math.min(ft,Ge.count));let _n=ft-it;if(_n<0||_n===1/0)return;Re.setup(fe,K,Be,he,ze);let Un,_t=Le;if(ze!==null&&(Un=Ve.get(ze),_t=Ie,_t.setIndex(Un)),fe.isMesh)K.wireframe===!0?(Z.setLineWidth(K.wireframeLinewidth*ue()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(fe.isLine){let je=K.linewidth;je===void 0&&(je=1),Z.setLineWidth(je*ue()),fe.isLineSegments?_t.setMode(I.LINES):fe.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else fe.isPoints?_t.setMode(I.POINTS):fe.isSprite&&_t.setMode(I.TRIANGLES);if(fe.isInstancedMesh)_t.renderInstances(it,_n,fe.count);else if(he.isInstancedBufferGeometry){let je=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Sc=Math.min(he.instanceCount,je);_t.renderInstances(it,_n,Sc)}else _t.render(it,_n)},this.compile=function(D,ne){function he(K,fe,Pe){K.transparent===!0&&K.side===Mt&&K.forceSinglePass===!1?(K.side=Rt,K.needsUpdate=!0,_o(K,fe,Pe),K.side=sn,K.needsUpdate=!0,_o(K,fe,Pe),K.side=Mt):_o(K,fe,Pe)}m=O.get(D),m.init(),v.push(m),D.traverseVisible(function(K){K.isLight&&K.layers.test(ne.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(_.useLegacyLights),D.traverse(function(K){let fe=K.material;if(fe)if(Array.isArray(fe))for(let Pe=0;Pe<fe.length;Pe++){let Ue=fe[Pe];he(Ue,D,K)}else he(fe,D,K)}),v.pop(),m=null};let gt=null;function Ii(D){gt&&gt(D)}function lt(){Vt.stop()}function An(){Vt.start()}let Vt=new Vd;Vt.setAnimationLoop(Ii),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(D){gt=D,X.setAnimationLoop(D),D===null?Vt.stop():Vt.start()},X.addEventListener("sessionstart",lt),X.addEventListener("sessionend",An),this.render=function(D,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(ne=X.updateCameraXR(ne)),D.isScene===!0&&D.onBeforeRender(_,D,ne,T),m=O.get(D,v.length),m.init(),v.push(m),A.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),ge.setFromProjectionMatrix(A),U=this.localClippingEnabled,F=pe.init(this.clippingPlanes,U),x=ye.get(D,d.length),x.init(),d.push(x),Ch(D,ne,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(W,se),F===!0&&pe.beginShadows();let he=m.state.shadowsArray;if(_e.render(he,D,ne),F===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,re.render(x,D),m.setupLights(_.useLegacyLights),ne.isArrayCamera){let K=ne.cameras;for(let fe=0,Pe=K.length;fe<Pe;fe++){let Ue=K[fe];Ph(x,D,Ue,Ue.viewport)}}else Ph(x,D,ne);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(_,D,ne),Re.resetDefaultState(),C=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Ch(D,ne,he,K){if(D.visible===!1)return;if(D.layers.test(ne.layers)){if(D.isGroup)he=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ne);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ge.intersectsSprite(D)){K&&ce.setFromMatrixPosition(D.matrixWorld).applyMatrix4(A);let Ue=E.update(D),Be=D.material;Be.visible&&x.push(D,Ue,Be,he,ce.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ge.intersectsObject(D))){D.isSkinnedMesh&&D.skeleton.frame!==de.render.frame&&(D.skeleton.update(),D.skeleton.frame=de.render.frame);let Ue=E.update(D),Be=D.material;if(K&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ce.copy(D.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ce.copy(Ue.boundingSphere.center)),ce.applyMatrix4(D.matrixWorld).applyMatrix4(A)),Array.isArray(Be)){let ze=Ue.groups;for(let Xe=0,He=ze.length;Xe<He;Xe++){let Ge=ze[Xe],it=Be[Ge.materialIndex];it&&it.visible&&x.push(D,Ue,it,he,ce.z,Ge)}}else Be.visible&&x.push(D,Ue,Be,he,ce.z,null)}}let Pe=D.children;for(let Ue=0,Be=Pe.length;Ue<Be;Ue++)Ch(Pe[Ue],ne,he,K)}function Ph(D,ne,he,K){let fe=D.opaque,Pe=D.transmissive,Ue=D.transparent;m.setupLightsView(he),F===!0&&pe.setGlobalState(_.clippingPlanes,he),Pe.length>0&&sm(fe,Pe,ne,he),K&&Z.viewport(b.copy(K)),fe.length>0&&go(fe,ne,he),Pe.length>0&&go(Pe,ne,he),Ue.length>0&&go(Ue,ne,he),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function sm(D,ne,he,K){let fe=j.isWebGL2;R===null&&(R=new pt(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?Dt:hi,minFilter:fi,samples:fe&&a===!0?4:0})),_.getDrawingBufferSize($),fe?R.setSize($.x,$.y):R.setSize($o($.x),$o($.y));let Pe=_.getRenderTarget();_.setRenderTarget(R),_.getClearColor(B),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();let Ue=_.toneMapping;_.toneMapping=bn,go(D,he,K),L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R);let Be=!1;for(let ze=0,Xe=ne.length;ze<Xe;ze++){let He=ne[ze],Ge=He.object,it=He.geometry,ft=He.material,_n=He.group;if(ft.side===Mt&&Ge.layers.test(K.layers)){let Un=ft.side;ft.side=Rt,ft.needsUpdate=!0,Ih(Ge,he,K,it,ft,_n),ft.side=Un,ft.needsUpdate=!0,Be=!0}}Be===!0&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),_.setRenderTarget(Pe),_.setClearColor(B,G),_.toneMapping=Ue}function go(D,ne,he){let K=ne.isScene===!0?ne.overrideMaterial:null;for(let fe=0,Pe=D.length;fe<Pe;fe++){let Ue=D[fe],Be=Ue.object,ze=Ue.geometry,Xe=K===null?Ue.material:K,He=Ue.group;Be.layers.test(he.layers)&&Ih(Be,ne,he,ze,Xe,He)}}function Ih(D,ne,he,K,fe,Pe){D.onBeforeRender(_,ne,he,K,fe,Pe),D.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),fe.onBeforeRender(_,ne,he,K,D,Pe),fe.transparent===!0&&fe.side===Mt&&fe.forceSinglePass===!1?(fe.side=Rt,fe.needsUpdate=!0,_.renderBufferDirect(he,ne,K,fe,D,Pe),fe.side=sn,fe.needsUpdate=!0,_.renderBufferDirect(he,ne,K,fe,D,Pe),fe.side=Mt):_.renderBufferDirect(he,ne,K,fe,D,Pe),D.onAfterRender(_,ne,he,K,fe,Pe)}function _o(D,ne,he){ne.isScene!==!0&&(ne=J);let K=z.get(D),fe=m.state.lights,Pe=m.state.shadowsArray,Ue=fe.state.version,Be=ae.getParameters(D,fe.state,Pe,ne,he),ze=ae.getProgramCacheKey(Be),Xe=K.programs;K.environment=D.isMeshStandardMaterial?ne.environment:null,K.fog=ne.fog,K.envMap=(D.isMeshStandardMaterial?be:me).get(D.envMap||K.environment),Xe===void 0&&(D.addEventListener("dispose",Te),Xe=new Map,K.programs=Xe);let He=Xe.get(ze);if(He!==void 0){if(K.currentProgram===He&&K.lightsStateVersion===Ue)return Lh(D,Be),He}else Be.uniforms=ae.getUniforms(D),D.onBuild(he,Be,_),D.onBeforeCompile(Be,_),He=ae.acquireProgram(Be,ze),Xe.set(ze,He),K.uniforms=Be.uniforms;let Ge=K.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),Lh(D,Be),K.needsLights=am(D),K.lightsStateVersion=Ue,K.needsLights&&(Ge.ambientLightColor.value=fe.state.ambient,Ge.lightProbe.value=fe.state.probe,Ge.directionalLights.value=fe.state.directional,Ge.directionalLightShadows.value=fe.state.directionalShadow,Ge.spotLights.value=fe.state.spot,Ge.spotLightShadows.value=fe.state.spotShadow,Ge.rectAreaLights.value=fe.state.rectArea,Ge.ltc_1.value=fe.state.rectAreaLTC1,Ge.ltc_2.value=fe.state.rectAreaLTC2,Ge.pointLights.value=fe.state.point,Ge.pointLightShadows.value=fe.state.pointShadow,Ge.hemisphereLights.value=fe.state.hemi,Ge.directionalShadowMap.value=fe.state.directionalShadowMap,Ge.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,Ge.spotShadowMap.value=fe.state.spotShadowMap,Ge.spotLightMatrix.value=fe.state.spotLightMatrix,Ge.spotLightMap.value=fe.state.spotLightMap,Ge.pointShadowMap.value=fe.state.pointShadowMap,Ge.pointShadowMatrix.value=fe.state.pointShadowMatrix);let it=He.getUniforms(),ft=Ts.seqWithValue(it.seq,Ge);return K.currentProgram=He,K.uniformsList=ft,He}function Lh(D,ne){let he=z.get(D);he.outputColorSpace=ne.outputColorSpace,he.instancing=ne.instancing,he.skinning=ne.skinning,he.morphTargets=ne.morphTargets,he.morphNormals=ne.morphNormals,he.morphColors=ne.morphColors,he.morphTargetsCount=ne.morphTargetsCount,he.numClippingPlanes=ne.numClippingPlanes,he.numIntersection=ne.numClipIntersection,he.vertexAlphas=ne.vertexAlphas,he.vertexTangents=ne.vertexTangents,he.toneMapping=ne.toneMapping}function rm(D,ne,he,K,fe){ne.isScene!==!0&&(ne=J),L.resetTextureUnits();let Pe=ne.fog,Ue=K.isMeshStandardMaterial?ne.environment:null,Be=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cn,ze=(K.isMeshStandardMaterial?be:me).get(K.envMap||Ue),Xe=K.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,He=!!he.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!he.morphAttributes.position,it=!!he.morphAttributes.normal,ft=!!he.morphAttributes.color,_n=K.toneMapped?_.toneMapping:bn,Un=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,_t=Un!==void 0?Un.length:0,je=z.get(K),Sc=m.state.lights;if(F===!0&&(U===!0||D!==M)){let Qt=D===M&&K.id===C;pe.setState(K,D,Qt)}let Et=!1;K.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Sc.state.version||je.outputColorSpace!==Be||fe.isInstancedMesh&&je.instancing===!1||!fe.isInstancedMesh&&je.instancing===!0||fe.isSkinnedMesh&&je.skinning===!1||!fe.isSkinnedMesh&&je.skinning===!0||je.envMap!==ze||K.fog===!0&&je.fog!==Pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==pe.numPlanes||je.numIntersection!==pe.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==He||je.morphTargets!==Ge||je.morphNormals!==it||je.morphColors!==ft||je.toneMapping!==_n||j.isWebGL2===!0&&je.morphTargetsCount!==_t)&&(Et=!0):(Et=!0,je.__version=K.version);let Li=je.currentProgram;Et===!0&&(Li=_o(K,ne,fe));let Dh=!1,sr=!1,bc=!1,Gt=Li.getUniforms(),Di=je.uniforms;if(Z.useProgram(Li.program)&&(Dh=!0,sr=!0,bc=!0),K.id!==C&&(C=K.id,sr=!0),Dh||M!==D){if(Gt.setValue(I,"projectionMatrix",D.projectionMatrix),j.logarithmicDepthBuffer&&Gt.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),M!==D&&(M=D,sr=!0,bc=!0),K.isShaderMaterial||K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshStandardMaterial||K.envMap){let Qt=Gt.map.cameraPosition;Qt!==void 0&&Qt.setValue(I,ce.setFromMatrixPosition(D.matrixWorld))}(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Gt.setValue(I,"isOrthographic",D.isOrthographicCamera===!0),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial||K.isShadowMaterial||fe.isSkinnedMesh)&&Gt.setValue(I,"viewMatrix",D.matrixWorldInverse)}if(fe.isSkinnedMesh){Gt.setOptional(I,fe,"bindMatrix"),Gt.setOptional(I,fe,"bindMatrixInverse");let Qt=fe.skeleton;Qt&&(j.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Gt.setValue(I,"boneTexture",Qt.boneTexture,L),Gt.setValue(I,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Tc=he.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0&&j.isWebGL2===!0)&&Ae.update(fe,he,Li),(sr||je.receiveShadow!==fe.receiveShadow)&&(je.receiveShadow=fe.receiveShadow,Gt.setValue(I,"receiveShadow",fe.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Di.envMap.value=ze,Di.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),sr&&(Gt.setValue(I,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&om(Di,bc),Pe&&K.fog===!0&&xe.refreshFogUniforms(Di,Pe),xe.refreshMaterialUniforms(Di,K,Y,ie,R),Ts.upload(I,je.uniformsList,Di,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ts.upload(I,je.uniformsList,Di,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Gt.setValue(I,"center",fe.center),Gt.setValue(I,"modelViewMatrix",fe.modelViewMatrix),Gt.setValue(I,"normalMatrix",fe.normalMatrix),Gt.setValue(I,"modelMatrix",fe.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Qt=K.uniformsGroups;for(let Ec=0,cm=Qt.length;Ec<cm;Ec++)if(j.isWebGL2){let Nh=Qt[Ec];Ne.update(Nh,Li),Ne.bind(Nh,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function om(D,ne){D.ambientLightColor.needsUpdate=ne,D.lightProbe.needsUpdate=ne,D.directionalLights.needsUpdate=ne,D.directionalLightShadows.needsUpdate=ne,D.pointLights.needsUpdate=ne,D.pointLightShadows.needsUpdate=ne,D.spotLights.needsUpdate=ne,D.spotLightShadows.needsUpdate=ne,D.rectAreaLights.needsUpdate=ne,D.hemisphereLights.needsUpdate=ne}function am(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,ne,he){z.get(D.texture).__webglTexture=ne,z.get(D.depthTexture).__webglTexture=he;let K=z.get(D);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=he===void 0,K.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,ne){let he=z.get(D);he.__webglFramebuffer=ne,he.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(D,ne=0,he=0){T=D,w=ne,S=he;let K=!0,fe=null,Pe=!1,Ue=!1;if(D){let ze=z.get(D);ze.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(I.FRAMEBUFFER,null),K=!1):ze.__webglFramebuffer===void 0?L.setupRenderTarget(D):ze.__hasExternalTextures&&L.rebindTextures(D,z.get(D.texture).__webglTexture,z.get(D.depthTexture).__webglTexture);let Xe=D.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);let He=z.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(fe=He[ne],Pe=!0):j.isWebGL2&&D.samples>0&&L.useMultisampledRTT(D)===!1?fe=z.get(D).__webglMultisampledFramebuffer:fe=He,b.copy(D.viewport),k.copy(D.scissor),V=D.scissorTest}else b.copy(le).multiplyScalar(Y).floor(),k.copy(ve).multiplyScalar(Y).floor(),V=ee;if(Z.bindFramebuffer(I.FRAMEBUFFER,fe)&&j.drawBuffers&&K&&Z.drawBuffers(D,fe),Z.viewport(b),Z.scissor(k),Z.setScissorTest(V),Pe){let ze=z.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ze.__webglTexture,he)}else if(Ue){let ze=z.get(D.texture),Xe=ne||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.__webglTexture,he||0,Xe)}C=-1},this.readRenderTargetPixels=function(D,ne,he,K,fe,Pe,Ue){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=z.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){Z.bindFramebuffer(I.FRAMEBUFFER,Be);try{let ze=D.texture,Xe=ze.format,He=ze.type;if(Xe!==on&&Ce.convert(Xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=He===Dt&&(H.has("EXT_color_buffer_half_float")||j.isWebGL2&&H.has("EXT_color_buffer_float"));if(He!==hi&&Ce.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Sn&&(j.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=D.width-K&&he>=0&&he<=D.height-fe&&I.readPixels(ne,he,K,fe,Ce.convert(Xe),Ce.convert(He),Pe)}finally{let ze=T!==null?z.get(T).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(D,ne,he=0){let K=Math.pow(2,-he),fe=Math.floor(ne.image.width*K),Pe=Math.floor(ne.image.height*K);L.setTexture2D(ne,0),I.copyTexSubImage2D(I.TEXTURE_2D,he,0,0,D.x,D.y,fe,Pe),Z.unbindTexture()},this.copyTextureToTexture=function(D,ne,he,K=0){let fe=ne.image.width,Pe=ne.image.height,Ue=Ce.convert(he.format),Be=Ce.convert(he.type);L.setTexture2D(he,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,he.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,he.unpackAlignment),ne.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,K,D.x,D.y,fe,Pe,Ue,Be,ne.image.data):ne.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,K,D.x,D.y,ne.mipmaps[0].width,ne.mipmaps[0].height,Ue,ne.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,K,D.x,D.y,Ue,Be,ne.image),K===0&&he.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(D,ne,he,K,fe=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Pe=D.max.x-D.min.x+1,Ue=D.max.y-D.min.y+1,Be=D.max.z-D.min.z+1,ze=Ce.convert(K.format),Xe=Ce.convert(K.type),He;if(K.isData3DTexture)L.setTexture3D(K,0),He=I.TEXTURE_3D;else if(K.isDataArrayTexture)L.setTexture2DArray(K,0),He=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);let Ge=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ft=I.getParameter(I.UNPACK_SKIP_PIXELS),_n=I.getParameter(I.UNPACK_SKIP_ROWS),Un=I.getParameter(I.UNPACK_SKIP_IMAGES),_t=he.isCompressedTexture?he.mipmaps[0]:he.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,D.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,D.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,D.min.z),he.isDataTexture||he.isData3DTexture?I.texSubImage3D(He,fe,ne.x,ne.y,ne.z,Pe,Ue,Be,ze,Xe,_t.data):he.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(He,fe,ne.x,ne.y,ne.z,Pe,Ue,Be,ze,_t.data)):I.texSubImage3D(He,fe,ne.x,ne.y,ne.z,Pe,Ue,Be,ze,Xe,_t),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,_n),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Un),fe===0&&K.generateMipmaps&&I.generateMipmap(He),Z.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?L.setTextureCube(D,0):D.isData3DTexture?L.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?L.setTexture2DArray(D,0):L.setTexture2D(D,0),Z.unbindTexture()},this.resetState=function(){w=0,S=0,T=null,Z.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?Hi:Od}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hi?Oe:Cn}},Al=class extends Er{};Al.prototype.isWebGL1Renderer=!0;var aa=class extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Wt=new P,Rr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Jf=new P,$f=new Ze,Qf=new Ze,Ky=new P,ed=new De,ys=new P,el=new Yt,td=new De,tl=new jn,ca=class extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)ys.fromBufferAttribute(t,n),this.applyBoneTransform(n,ys),this.boundingBox.expandByPoint(ys)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)ys.fromBufferAttribute(t,n),this.applyBoneTransform(n,ys),this.boundingSphere.expandByPoint(ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(i),e.ray.intersectsSphere(el)!==!1&&(td.copy(i).invert(),tl.copy(e.ray).applyMatrix4(td),!(this.boundingBox!==null&&tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;$f.fromBufferAttribute(i.attributes.skinIndex,e),Qf.fromBufferAttribute(i.attributes.skinWeight,e),Jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Qf.getComponent(r);if(o!==0){let a=$f.getComponent(r);ed.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ky.copy(Jf).applyMatrix4(ed),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Cr=class extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Pr=class extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=ht,u=ht,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nd=new De,Jy=new De,la=class s{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Jy;nd.multiplyMatrices(a,t[r]),nd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Bd(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Pr(t,e,e,on,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Cr),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ir=class extends rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new De,id=new De,Bo=[],sd=new vt,$y=new De,lr=new qe,ur=new Yt,ua=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ir(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$y)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),sd.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(sd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),ur.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vs),id.multiplyMatrices(n,vs),lr.matrixWorld=id,lr.raycast(e,Bo);for(let o=0,a=Bo.length;o<a;o++){let c=Bo[o];c.instanceId=r,c.object=this,t.push(c)}Bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ir(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rd=new P,od=new P,ad=new De,nl=new jn,zo=new Yt,mi=class extends tt{constructor(e=new ot,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)rd.fromBufferAttribute(t,i-1),od.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rd.distanceTo(od);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(i),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;ad.copy(i).invert(),nl.copy(e.ray).applyMatrix4(ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,u=new P,h=new P,f=new P,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=d,y=v-1;_<y;_+=p){let w=g.getX(_),S=g.getX(_+1);if(l.fromBufferAttribute(m,w),u.fromBufferAttribute(m,S),nl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=d,y=v-1;_<y;_+=p){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),nl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},cd=new P,ld=new P,Lr=class extends mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)cd.fromBufferAttribute(t,i),ld.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cd.distanceTo(ld);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ha=class extends mi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Dr=class extends zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ud=new De,Rl=new jn,ko=new Yt,Ho=new P,fa=class extends tt{constructor(e=new ot,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;ud.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=l.getX(g);Ho.fromBufferAttribute(h,m),hd(Ho,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Ho.fromBufferAttribute(h,g),hd(Ho,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hd(s,e,t,n,i,r,o){let a=Rl.distanceSqToPoint(s);if(a<t){let c=new P;Rl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,p=(o-u)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Q:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,i=[],r=[],o=[],a=new P,c=new De;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(yt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(yt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Nr=class extends cn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new Q,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends Nr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,p*=u,i(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Vo=new P,il=new cu,sl=new cu,rl=new cu,Pl=class extends cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Vo.subVectors(i[0],i[1]).add(i[0]),l=Vo);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Vo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Vo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),il.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,m),sl.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,m),rl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),sl.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),rl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(il.calc(c),sl.calc(c),rl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Qy(s,e){let t=1-s;return t*t*e}function ev(s,e){return 2*(1-s)*s*e}function tv(s,e){return s*s*e}function xr(s,e,t,n){return Qy(s,e)+ev(s,t)+tv(s,n)}function nv(s,e){let t=1-s;return t*t*t*e}function iv(s,e){let t=1-s;return 3*t*t*s*e}function sv(s,e){return 3*(1-s)*s*s*e}function rv(s,e){return s*s*s*e}function yr(s,e,t,n,i){return nv(s,e)+iv(s,t)+sv(s,n)+rv(s,i)}var da=class extends cn{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,i.x,r.x,o.x,a.x),yr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Il=class extends cn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,i.x,r.x,o.x,a.x),yr(e,i.y,r.y,o.y,a.y),yr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ur=class extends cn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends cn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends cn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(xr(e,i.x,r.x,o.x),xr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends cn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(xr(e,i.x,r.x,o.x),xr(e,i.y,r.y,o.y),xr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(fd(a,c.x,l.x,u.x,h.x),fd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Q().fromArray(i))}return this}},Yd=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:da,CubicBezierCurve3:Il,EllipseCurve:Nr,LineCurve:Ur,LineCurve3:Ll,QuadraticBezierCurve:pa,QuadraticBezierCurve3:Dl,SplineCurve:ma}),Nl=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ur(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Yd[i.type]().fromJSON(i))}return this}},Zn=class extends Nl{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ur(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new pa(this.currentPoint.clone(),new Q(e,t),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new da(this.currentPoint.clone(),new Q(e,t),new Q(n,i),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ma(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new Nr(e,t,n,i,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Yn=class extends Zn{constructor(e){super(e),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Zn().fromJSON(i))}return this}},ov={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=jd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,p;if(n&&(r=hv(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);p=Math.max(l-a,u-c),p=p!==0?32767/p:0}return Or(r,o,t,a,c,p,0),o}};function jd(s,e,t,n,i){let r,o;if(i===Mv(s,e,t,n)>0)for(r=e;r<t;r+=n)o=dd(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=dd(r,s[r],s[r+1],o);return o&&Oa(o,o.next)&&(Br(o),o=o.next),o}function qi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Oa(t,t.next)||at(t.prev,t,t.next)===0)){if(Br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Or(s,e,t,n,i,r,o){if(!s)return;!o&&r&&gv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?cv(s,n,i,r):av(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Br(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=lv(qi(s),e,t),Or(s,e,t,n,i,r,2)):o===2&&uv(s,e,t,n,i,r):Or(qi(s),e,t,n,i,r,1);break}}}function av(s){let e=s.prev,t=s,n=s.next;if(at(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Ms(i,a,r,c,o,l,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cv(s,e,t,n){let i=s.prev,r=s,o=s.next;if(at(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,d=Ul(p,g,e,t,n),v=Ul(x,m,e,t,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=d&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ms(a,u,c,h,l,f,_.x,_.y)&&at(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ms(a,u,c,h,l,f,y.x,y.y)&&at(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Ms(a,u,c,h,l,f,_.x,_.y)&&at(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ms(a,u,c,h,l,f,y.x,y.y)&&at(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lv(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Oa(i,r)&&Zd(i,n,n.next,r)&&Fr(i,r)&&Fr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Br(n),Br(n.next),n=s=r),n=n.next}while(n!==s);return qi(n)}function uv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yv(o,a)){let c=Kd(o,a);o=qi(o,o.next),c=qi(c,c.next),Or(o,e,t,n,i,r,0),Or(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function hv(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=jd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(xv(l));for(i.sort(fv),r=0;r<i.length;r++)t=dv(i[r],t);return t}function fv(s,e){return s.x-e.x}function dv(s,e){let t=pv(s,e);if(!t)return e;let n=Kd(t,s);return qi(n,n.next),qi(t,t.next)}function pv(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ms(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Fr(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&mv(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function mv(s,e){return at(s.prev,s,e.prev)<0&&at(e.next,s,s.next)<0}function gv(s,e,t,n){let i=s;do i.z===0&&(i.z=Ul(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_v(i)}function _v(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ul(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function xv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ms(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function yv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!vv(s,e)&&(Fr(s,e)&&Fr(e,s)&&wv(s,e)&&(at(s.prev,s,e.prev)||at(s,e.prev,e))||Oa(s,e)&&at(s.prev,s,s.next)>0&&at(e.prev,e,e.next)>0)}function at(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Oa(s,e){return s.x===e.x&&s.y===e.y}function Zd(s,e,t,n){let i=Wo(at(s,e,t)),r=Wo(at(s,e,n)),o=Wo(at(t,n,s)),a=Wo(at(t,n,e));return!!(i!==r&&o!==a||i===0&&Go(s,t,e)||r===0&&Go(s,n,e)||o===0&&Go(t,s,n)||a===0&&Go(t,e,n))}function Go(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Wo(s){return s>0?1:s<0?-1:0}function vv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Fr(s,e){return at(s.prev,s,s.next)<0?at(s,e,s.next)>=0&&at(s,s.prev,e)>=0:at(s,e,s.prev)<0||at(s,s.next,e)<0}function wv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Kd(s,e){let t=new Ol(s.i,s.x,s.y),n=new Ol(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dd(s,e,t,n){let i=new Ol(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Br(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ol(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Tn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];pd(e),md(n,e);let o=e.length;t.forEach(pd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,md(n,t[c]);let a=ov.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function pd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function md(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ga=class s extends ot{constructor(e=new Yn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Sv,_,y=!1,w,S,T,C;d&&(_=d.getSpacedPoints(u),y=!0,f=!1,w=d.computeFrenetFrames(u,!1),S=new P,T=new P,C=new P),f||(m=0,p=0,g=0,x=0);let M=a.extractPoints(l),b=M.shape,k=M.holes;if(!Tn.isClockWise(b)){b=b.reverse();for(let I=0,te=k.length;I<te;I++){let H=k[I];Tn.isClockWise(H)&&(k[I]=H.reverse())}}let B=Tn.triangulateShape(b,k),G=b;for(let I=0,te=k.length;I<te;I++){let H=k[I];b=b.concat(H)}function q(I,te,H){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(te,H)}let ie=b.length,Y=B.length;function W(I,te,H){let j,Z,de,z=I.x-te.x,L=I.y-te.y,me=H.x-I.x,be=H.y-I.y,Ve=z*z+L*L,N=z*be-L*me;if(Math.abs(N)>Number.EPSILON){let E=Math.sqrt(Ve),ae=Math.sqrt(me*me+be*be),xe=te.x-L/E,ye=te.y+z/E,O=H.x-be/ae,pe=H.y+me/ae,_e=((O-xe)*be-(pe-ye)*me)/(z*be-L*me);j=xe+z*_e-I.x,Z=ye+L*_e-I.y;let re=j*j+Z*Z;if(re<=2)return new Q(j,Z);de=Math.sqrt(re/2)}else{let E=!1;z>Number.EPSILON?me>Number.EPSILON&&(E=!0):z<-Number.EPSILON?me<-Number.EPSILON&&(E=!0):Math.sign(L)===Math.sign(be)&&(E=!0),E?(j=-L,Z=z,de=Math.sqrt(Ve)):(j=z,Z=L,de=Math.sqrt(Ve/2))}return new Q(j/de,Z/de)}let se=[];for(let I=0,te=G.length,H=te-1,j=I+1;I<te;I++,H++,j++)H===te&&(H=0),j===te&&(j=0),se[I]=W(G[I],G[H],G[j]);let le=[],ve,ee=se.concat();for(let I=0,te=k.length;I<te;I++){let H=k[I];ve=[];for(let j=0,Z=H.length,de=Z-1,z=j+1;j<Z;j++,de++,z++)de===Z&&(de=0),z===Z&&(z=0),ve[j]=W(H[j],H[de],H[z]);le.push(ve),ee=ee.concat(ve)}for(let I=0;I<m;I++){let te=I/m,H=p*Math.cos(te*Math.PI/2),j=g*Math.sin(te*Math.PI/2)+x;for(let Z=0,de=G.length;Z<de;Z++){let z=q(G[Z],se[Z],j);A(z.x,z.y,-H)}for(let Z=0,de=k.length;Z<de;Z++){let z=k[Z];ve=le[Z];for(let L=0,me=z.length;L<me;L++){let be=q(z[L],ve[L],j);A(be.x,be.y,-H)}}}let ge=g+x;for(let I=0;I<ie;I++){let te=f?q(b[I],ee[I],ge):b[I];y?(T.copy(w.normals[0]).multiplyScalar(te.x),S.copy(w.binormals[0]).multiplyScalar(te.y),C.copy(_[0]).add(T).add(S),A(C.x,C.y,C.z)):A(te.x,te.y,0)}for(let I=1;I<=u;I++)for(let te=0;te<ie;te++){let H=f?q(b[te],ee[te],ge):b[te];y?(T.copy(w.normals[I]).multiplyScalar(H.x),S.copy(w.binormals[I]).multiplyScalar(H.y),C.copy(_[I]).add(T).add(S),A(C.x,C.y,C.z)):A(H.x,H.y,h/u*I)}for(let I=m-1;I>=0;I--){let te=I/m,H=p*Math.cos(te*Math.PI/2),j=g*Math.sin(te*Math.PI/2)+x;for(let Z=0,de=G.length;Z<de;Z++){let z=q(G[Z],se[Z],j);A(z.x,z.y,h+H)}for(let Z=0,de=k.length;Z<de;Z++){let z=k[Z];ve=le[Z];for(let L=0,me=z.length;L<me;L++){let be=q(z[L],ve[L],j);y?A(be.x,be.y+_[u-1].y,_[u-1].x+H):A(be.x,be.y,h+H)}}}F(),U();function F(){let I=i.length/3;if(f){let te=0,H=ie*te;for(let j=0;j<Y;j++){let Z=B[j];$(Z[2]+H,Z[1]+H,Z[0]+H)}te=u+m*2,H=ie*te;for(let j=0;j<Y;j++){let Z=B[j];$(Z[0]+H,Z[1]+H,Z[2]+H)}}else{for(let te=0;te<Y;te++){let H=B[te];$(H[2],H[1],H[0])}for(let te=0;te<Y;te++){let H=B[te];$(H[0]+ie*u,H[1]+ie*u,H[2]+ie*u)}}n.addGroup(I,i.length/3-I,0)}function U(){let I=i.length/3,te=0;R(G,te),te+=G.length;for(let H=0,j=k.length;H<j;H++){let Z=k[H];R(Z,te),te+=Z.length}n.addGroup(I,i.length/3-I,1)}function R(I,te){let H=I.length;for(;--H>=0;){let j=H,Z=H-1;Z<0&&(Z=I.length-1);for(let de=0,z=u+m*2;de<z;de++){let L=ie*de,me=ie*(de+1),be=te+j+L,Ve=te+Z+L,N=te+Z+me,E=te+j+me;ce(be,Ve,N,E)}}}function A(I,te,H){c.push(I),c.push(te),c.push(H)}function $(I,te,H){J(I),J(te),J(H);let j=i.length/3,Z=v.generateTopUV(n,i,j-3,j-2,j-1);ue(Z[0]),ue(Z[1]),ue(Z[2])}function ce(I,te,H,j){J(I),J(te),J(j),J(te),J(H),J(j);let Z=i.length/3,de=v.generateSideWallUV(n,i,Z-6,Z-3,Z-2,Z-1);ue(de[0]),ue(de[1]),ue(de[3]),ue(de[1]),ue(de[2]),ue(de[3])}function J(I){i.push(c[I*3+0]),i.push(c[I*3+1]),i.push(c[I*3+2])}function ue(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Yd[i.type]().fromJSON(i)),new s(n,e.options)}},Sv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Q(r,o),new Q(a,c),new Q(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],x=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-h),new Q(f,1-g),new Q(x,1-d)]:[new Q(a,1-c),new Q(u,1-h),new Q(p,1-g),new Q(m,1-d)]}};function bv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var _a=class s extends ot{constructor(e=new Yn([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Je(i,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function l(u){let h=i.length/3,f=u.extractPoints(t),p=f.shape,g=f.holes;Tn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let v=g[m];Tn.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=Tn.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let v=g[m];p=p.concat(v)}for(let m=0,d=p.length;m<d;m++){let v=p[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,d=x.length;m<d;m++){let v=x[m],_=v[0]+h,y=v[1]+h,w=v[2]+h;n.push(_,y,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Tv(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Tv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Fl=class s extends ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new P,f=new P,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let v=[],_=d/n,y=0;d===0&&o===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let S=w/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(S+y,1-_),v.push(l++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){let _=u[d][v+1],y=u[d][v],w=u[d+1][v],S=u[d+1][v+1];(d!==0||o>0)&&p.push(_,y,S),(d!==n-1||c<Math.PI)&&p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gi=class extends zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ln=class extends zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xa=class extends zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},_i=class extends zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function li(s,e,t){return Jd(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Xo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Jd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ev(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function $d(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var xi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends xi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uf,endingEnd:uf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hf:r=e,a=2*t-n;break;case ff:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hf:o=e,c=2*n-t;break;case ff:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let w=0;w!==a;++w)r[w]=d*o[u+w]+v*o[l+w]+_*o[c+w]+y*o[h+w];return r}},zl=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},kl=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Gi:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Gi;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=li(n,r,o),this.values=li(this.values,r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Jd(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=li(this.times),t=li(this.values),n=this.getValueSize(),i=this.getInterpolation()===Lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=li(e,0,o),this.values=li(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=li(this.times,0),t=li(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Gi;var yi=class extends un{};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Rs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends un{};ya.prototype.ValueTypeName="color";var vi=class extends un{};vi.prototype.ValueTypeName="number";var Hl=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)Kt.slerpFlat(r,0,o,l-a,o,l,c);return r}},In=class extends un{InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};In.prototype.ValueTypeName="quaternion";In.prototype.DefaultInterpolation=Gi;In.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends un{};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Rs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends un{};Mi.prototype.ValueTypeName="vector";var va=class{constructor(e,t=-1,n,i=Om){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Rv(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Ev(c);c=gd(c,1,u),l=gd(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new vi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,x){if(p.length!==0){let m=[],d=[];$d(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(let x in p){let m=[],d=[];for(let v=0;v!==f[g].morphTargets.length;++v){let _=f[g];m.push(_.time),d.push(_.morphTarget===x?1:0)}i.push(new vi(".morphTargetInfluence["+x+"]",m,d))}c=p.length*o}else{let p=".bones["+t[h].name+"]";n(Mi,p+".position",f,"pos",i),n(In,p+".quaternion",f,"rot",i),n(Mi,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Av(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return Mi;case"color":return ya;case"quaternion":return In;case"bool":case"boolean":return yi;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Rv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Av(s.type);if(s.times===void 0){let t=[],n=[];$d(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Is={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Vl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Cv=new Vl,hn=class{constructor(e){this.manager=e!==void 0?e:Cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Vn={},Gl=class extends Error{constructor(e,t){super(e),this.response=t}},Kn=class extends hn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Is.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:i});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Vn[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0,x=0,m=new ReadableStream({start(d){v();function v(){h.read().then(({done:_,value:y})=>{if(_)d.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let S=0,T=u.length;S<T;S++){let C=u[S];C.onProgress&&C.onProgress(w)}d.enqueue(y),v()}})}}});return new Response(m)}else throw new Gl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Is.add(e,l);let u=Vn[e];delete Vn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Vn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Vn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wl=class extends hn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Is.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=wr("img");function c(){u(),Is.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ls=class extends hn{constructor(e){super(e)}load(e,t,n,i){let r=new Bt,o=new Wl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ds=class extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var ol=new De,_d=new P,xd=new P,zr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xl=class extends zr{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wa=class extends Ds{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yd=new De,hr=new P,al=new P,ql=class extends zr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),al.copy(n.position),al.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(al),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}},Ns=class extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yl=class extends zr{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ma=class extends Ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Os=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Sa=class extends hn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Is.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Is.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};var ba=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vd(){return(typeof performance>"u"?Date:performance).now()}var lu="\\[\\]\\.:\\/",Pv=new RegExp("["+lu+"]","g"),uu="[^"+lu+"]",Iv="[^"+lu.replace("\\.","")+"]",Lv=/((?:WC+[\/:])*)/.source.replace("WC",uu),Dv=/(WCOD+)?/.source.replace("WCOD",Iv),Nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),Uv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),Ov=new RegExp("^"+Lv+Dv+Nv+Uv+"$"),Fv=["material","materials","bones","map"],jl=class{constructor(e,t,n){let i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pv,"")}static parseTrackName(e){let t=Ov.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Fv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=jl;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eM=new Float32Array(1);var Ta=class{constructor(e,t,n=0,i=1/0){this.ray=new jn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Zl(e,this,n,t),n.sort(wd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zl(e[i],this,n,t);return n.sort(wd),n}};function wd(s,e){return s.distance-e.distance}function Zl(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)Zl(i[r],e,t,!0)}}var kr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Md=new Q,Ea=class{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Md.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Md).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Sd=new P,qo=new P,Tt=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Sd.subVectors(e,this.start),qo.subVectors(this.end,this.start);let n=qo.dot(qo),r=qo.dot(Sd)/n;return t&&(r=yt(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Aa=class extends qe{constructor(e,t,n){let i=new Fl(t,4,2),r=new Nt({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}};var bd=new P,Yo=new P,Td=new P,Ra=class extends tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new ot;i.setAttribute("position",new Je([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Xi({fog:!1,toneMapped:!1});this.lightPlane=new mi(i,r),this.add(this.lightPlane),i=new ot,i.setAttribute("position",new Je([0,0,0,0,0,1],3)),this.targetLine=new mi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),bd.setFromMatrixPosition(this.light.matrixWorld),Yo.setFromMatrixPosition(this.light.target.matrixWorld),Td.subVectors(Yo,bd),this.lightPlane.lookAt(Yo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Yo),this.targetLine.scale.z=Td.length()}},jo=new P,ut=new Mr,Yi=class extends Lr{constructor(e){let t=new ot,n=new Xi({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,x){c(g),c(x)}function c(g){i.push(0,0,0),r.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(i.length/3-1)}t.setAttribute("position",new Je(i,3)),t.setAttribute("color",new Je(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let l=new Ee(16755200),u=new Ee(16711680),h=new Ee(43775),f=new Ee(16777215),p=new Ee(3355443);this.setColors(l,u,h,f,p)}setColors(e,t,n,i,r){let a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;ut.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),dt("c",t,e,ut,0,0,-1),dt("t",t,e,ut,0,0,1),dt("n1",t,e,ut,-n,-i,-1),dt("n2",t,e,ut,n,-i,-1),dt("n3",t,e,ut,-n,i,-1),dt("n4",t,e,ut,n,i,-1),dt("f1",t,e,ut,-n,-i,1),dt("f2",t,e,ut,n,-i,1),dt("f3",t,e,ut,-n,i,1),dt("f4",t,e,ut,n,i,1),dt("u1",t,e,ut,n*.7,i*1.1,-1),dt("u2",t,e,ut,-n*.7,i*1.1,-1),dt("u3",t,e,ut,0,i*2,-1),dt("cf1",t,e,ut,-n,0,1),dt("cf2",t,e,ut,n,0,1),dt("cf3",t,e,ut,0,-i,1),dt("cf4",t,e,ut,0,i,1),dt("cn1",t,e,ut,-n,0,-1),dt("cn2",t,e,ut,n,0,-1),dt("cn3",t,e,ut,0,-i,-1),dt("cn4",t,e,ut,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function dt(s,e,t,n,i,r,o){jo.set(i,r,o).unproject(n);let a=e[s];if(a!==void 0){let c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],jo.x,jo.y,jo.z)}}var fn=class{constructor(){this.type="ShapePath",this.color=new Ee,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Zn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){let v=[];for(let _=0,y=d.length;_<y;_++){let w=d[_],S=new Yn;S.curves=w.curves,v.push(S)}return v}function n(d,v){let _=v.length,y=!1;for(let w=_-1,S=0;S<_;w=S++){let T=v[w],C=v[S],M=C.x-T.x,b=C.y-T.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(T=v[S],M=-M,C=v[w],b=-b),d.y<T.y||d.y>C.y)continue;if(d.y===T.y){if(d.x===T.x)return!0}else{let k=b*(d.x-T.x)-M*(d.y-T.y);if(k===0)return!0;if(k<0)continue;y=!y}}else{if(d.y!==T.y)continue;if(C.x<=d.x&&d.x<=T.x||T.x<=d.x&&d.x<=C.x)return!0}}return y}let i=Tn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c,l=[];if(r.length===1)return a=r[0],c=new Yn,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=e?!u:u;let h=[],f=[],p=[],g=0,x;f[g]=void 0,p[g]=[];for(let d=0,v=r.length;d<v;d++)a=r[d],x=a.getPoints(),o=i(x),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Yn,p:x},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:x[0]});if(!f[0])return t(r);if(f.length>1){let d=!1,v=0;for(let _=0,y=f.length;_<y;_++)h[_]=[];for(let _=0,y=f.length;_<y;_++){let w=p[_];for(let S=0;S<w.length;S++){let T=w[S],C=!0;for(let M=0;M<f.length;M++)n(T.p,f[M].p)&&(_!==M&&v++,C?(C=!1,h[M].push(T)):d=!0);C&&h[_].push(T)}}v>0&&d===!1&&(p=h)}let m;for(let d=0,v=f.length;d<v;d++){c=f[d].s,l.push(c),m=p[d];for(let _=0,y=m.length;_<y;_++)c.holes.push(m[_].h)}return l}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);var Yr=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++s%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";s=u}var i=(performance||Date).now(),r=i,o=0,a=t(new Yr.Panel("FPS","#0ff","#002")),c=t(new Yr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new Yr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(c.update(u-i,200),u>=r+1e3&&(a.update(o*1e3/(u-r),100),r=u,o=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};Yr.Panel=function(s,e,t){var n=1/0,i=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,u=2*o,h=3*o,f=15*o,p=74*o,g=30*o,x=document.createElement("canvas");x.width=a,x.height=c,x.style.cssText="width:80px;height:48px";var m=x.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,c),m.fillStyle=e,m.fillText(s,l,u),m.fillRect(h,f,p,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h,f,p,g),{dom:x,update:function(d,v){n=Math.min(n,d),i=Math.max(i,d),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,f),m.fillStyle=e,m.fillText(r(d)+" "+s+" ("+r(n)+"-"+r(i)+")",l,u),m.drawImage(x,h+o,f,p-o,g,h,f,p-o,g),m.fillRect(h+p-o,f,o,g),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(h+p-o,f,o,r((1-d/v)*g))}}};var Qd=Yr;var ep={type:"change"},hu={type:"start"},tp={type:"end"},Fa=class extends Pn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",me),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",me),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ep),n.update(),r=i.NONE},this.update=function(){let O=new P,pe=new Kt().setFromUnitVectors(e.up,new P(0,1,0)),_e=pe.clone().invert(),re=new P,Ae=new Kt,Le=new P,Ie=2*Math.PI;return function(){let Re=n.object.position;O.copy(Re).sub(n.target),O.applyQuaternion(pe),a.setFromVector3(O),n.autoRotate&&r===i.NONE&&M(T()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ne=n.minAzimuthAngle,ke=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(ke)&&(Ne<-Math.PI?Ne+=Ie:Ne>Math.PI&&(Ne-=Ie),ke<-Math.PI?ke+=Ie:ke>Math.PI&&(ke-=Ie),Ne<=ke?a.theta=Math.max(Ne,Math.min(ke,a.theta)):a.theta=a.theta>(Ne+ke)/2?Math.max(Ne,a.theta):Math.min(ke,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),O.setFromSpherical(a),O.applyQuaternion(_e),Re.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||re.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(ep),re.copy(n.object.position),Ae.copy(n.object.quaternion),Le.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",H),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",j),n.domElement.removeEventListener("pointerup",Z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",me),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new kr,c=new kr,l=1,u=new P,h=!1,f=new Q,p=new Q,g=new Q,x=new Q,m=new Q,d=new Q,v=new Q,_=new Q,y=new Q,w=[],S={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function M(O){c.theta-=O}function b(O){c.phi-=O}let k=function(){let O=new P;return function(_e,re){O.setFromMatrixColumn(re,0),O.multiplyScalar(-_e),u.add(O)}}(),V=function(){let O=new P;return function(_e,re){n.screenSpacePanning===!0?O.setFromMatrixColumn(re,1):(O.setFromMatrixColumn(re,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(_e),u.add(O)}}(),B=function(){let O=new P;return function(_e,re){let Ae=n.domElement;if(n.object.isPerspectiveCamera){let Le=n.object.position;O.copy(Le).sub(n.target);let Ie=O.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),k(2*_e*Ie/Ae.clientHeight,n.object.matrix),V(2*re*Ie/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(_e*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),V(re*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function G(O){n.object.isPerspectiveCamera?l/=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*O)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(O){n.object.isPerspectiveCamera?l*=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/O)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ie(O){f.set(O.clientX,O.clientY)}function Y(O){v.set(O.clientX,O.clientY)}function W(O){x.set(O.clientX,O.clientY)}function se(O){p.set(O.clientX,O.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);let pe=n.domElement;M(2*Math.PI*g.x/pe.clientHeight),b(2*Math.PI*g.y/pe.clientHeight),f.copy(p),n.update()}function le(O){_.set(O.clientX,O.clientY),y.subVectors(_,v),y.y>0?G(C()):y.y<0&&q(C()),v.copy(_),n.update()}function ve(O){m.set(O.clientX,O.clientY),d.subVectors(m,x).multiplyScalar(n.panSpeed),B(d.x,d.y),x.copy(m),n.update()}function ee(O){O.deltaY<0?q(C()):O.deltaY>0&&G(C()),n.update()}function ge(O){let pe=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),pe=!0;break}pe&&(O.preventDefault(),n.update())}function F(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{let O=.5*(w[0].pageX+w[1].pageX),pe=.5*(w[0].pageY+w[1].pageY);f.set(O,pe)}}function U(){if(w.length===1)x.set(w[0].pageX,w[0].pageY);else{let O=.5*(w[0].pageX+w[1].pageX),pe=.5*(w[0].pageY+w[1].pageY);x.set(O,pe)}}function R(){let O=w[0].pageX-w[1].pageX,pe=w[0].pageY-w[1].pageY,_e=Math.sqrt(O*O+pe*pe);v.set(0,_e)}function A(){n.enableZoom&&R(),n.enablePan&&U()}function $(){n.enableZoom&&R(),n.enableRotate&&F()}function ce(O){if(w.length==1)p.set(O.pageX,O.pageY);else{let _e=ye(O),re=.5*(O.pageX+_e.x),Ae=.5*(O.pageY+_e.y);p.set(re,Ae)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);let pe=n.domElement;M(2*Math.PI*g.x/pe.clientHeight),b(2*Math.PI*g.y/pe.clientHeight),f.copy(p)}function J(O){if(w.length===1)m.set(O.pageX,O.pageY);else{let pe=ye(O),_e=.5*(O.pageX+pe.x),re=.5*(O.pageY+pe.y);m.set(_e,re)}d.subVectors(m,x).multiplyScalar(n.panSpeed),B(d.x,d.y),x.copy(m)}function ue(O){let pe=ye(O),_e=O.pageX-pe.x,re=O.pageY-pe.y,Ae=Math.sqrt(_e*_e+re*re);_.set(0,Ae),y.set(0,Math.pow(_.y/v.y,n.zoomSpeed)),G(y.y),v.copy(_)}function I(O){n.enableZoom&&ue(O),n.enablePan&&J(O)}function te(O){n.enableZoom&&ue(O),n.enableRotate&&ce(O)}function H(O){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",j),n.domElement.addEventListener("pointerup",Z)),E(O),O.pointerType==="touch"?be(O):de(O))}function j(O){n.enabled!==!1&&(O.pointerType==="touch"?Ve(O):z(O))}function Z(O){ae(O),w.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",j),n.domElement.removeEventListener("pointerup",Z)),n.dispatchEvent(tp),r=i.NONE}function de(O){let pe;switch(O.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case ji.DOLLY:if(n.enableZoom===!1)return;Y(O),r=i.DOLLY;break;case ji.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;W(O),r=i.PAN}else{if(n.enableRotate===!1)return;ie(O),r=i.ROTATE}break;case ji.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;ie(O),r=i.ROTATE}else{if(n.enablePan===!1)return;W(O),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(hu)}function z(O){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;se(O);break;case i.DOLLY:if(n.enableZoom===!1)return;le(O);break;case i.PAN:if(n.enablePan===!1)return;ve(O);break}}function L(O){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(O.preventDefault(),n.dispatchEvent(hu),ee(O),n.dispatchEvent(tp))}function me(O){n.enabled===!1||n.enablePan===!1||ge(O)}function be(O){switch(xe(O),w.length){case 1:switch(n.touches.ONE){case Zi.ROTATE:if(n.enableRotate===!1)return;F(),r=i.TOUCH_ROTATE;break;case Zi.PAN:if(n.enablePan===!1)return;U(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;A(),r=i.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(hu)}function Ve(O){switch(xe(O),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(O),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;J(O),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(O),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(O),n.update();break;default:r=i.NONE}}function N(O){n.enabled!==!1&&O.preventDefault()}function E(O){w.push(O)}function ae(O){delete S[O.pointerId];for(let pe=0;pe<w.length;pe++)if(w[pe].pointerId==O.pointerId){w.splice(pe,1);return}}function xe(O){let pe=S[O.pointerId];pe===void 0&&(pe=new Q,S[O.pointerId]=pe),pe.set(O.pageX,O.pageY)}function ye(O){let pe=O.pointerId===w[0].pointerId?w[1]:w[0];return S[pe.pointerId]}n.domElement.addEventListener("contextmenu",N),n.domElement.addEventListener("pointerdown",H),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}};var np=Math.pow(2,-24);var Ki=class{constructor(){}};function dn(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function ip(s){s[0]=s[1]=s[2]=1/0,s[3]=s[4]=s[5]=-1/0}function fu(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){let i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function du(s,e){e.set(s)}function pu(s,e,t){let n,i;for(let r=0;r<3;r++){let o=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[o],i=e[o],t[o]=n>i?n:i}}function jr(s,e,t){for(let n=0;n<3;n++){let i=e[s+2*n],r=e[s+2*n+1],o=i-r,a=i+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Bs(s){let e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}function kv(s,e){if(!s.index){let t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i;t>65535?i=new Uint32Array(new n(4*t)):i=new Uint16Array(new n(2*t)),s.setIndex(new rt(i,1));for(let r=0;r<t;r++)i[r]=r}}function Hv(s){if(!s.groups||!s.groups.length)return[{offset:0,count:s.index.count/3}];let e=[],t=new Set;for(let i of s.groups)t.add(i.start),t.add(i.start+i.count);let n=Array.from(t.values()).sort((i,r)=>i-r);for(let i=0;i<n.length-1;i++){let r=n[i],o=n[i+1];e.push({offset:r/3,count:(o-r)/3})}return e}function gu(s,e,t,n,i=null){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,p=1/0,g=-1/0,x=-1/0,m=-1/0,d=i!==null;for(let v=e*6,_=(e+t)*6;v<_;v+=6){let y=s[v+0],w=s[v+1],S=y-w,T=y+w;S<r&&(r=S),T>c&&(c=T),d&&y<h&&(h=y),d&&y>g&&(g=y);let C=s[v+2],M=s[v+3],b=C-M,k=C+M;b<o&&(o=b),k>l&&(l=k),d&&C<f&&(f=C),d&&C>x&&(x=C);let V=s[v+4],B=s[v+5],G=V-B,q=V+B;G<a&&(a=G),q>u&&(u=q),d&&V<p&&(p=V),d&&V>m&&(m=V)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,d&&(i[0]=h,i[1]=f,i[2]=p,i[3]=g,i[4]=x,i[5]=m)}function Vv(s,e,t,n){let i=1/0,r=1/0,o=1/0,a=-1/0,c=-1/0,l=-1/0;for(let u=e*6,h=(e+t)*6;u<h;u+=6){let f=s[u+0];f<i&&(i=f),f>a&&(a=f);let p=s[u+2];p<r&&(r=p),p>c&&(c=p);let g=s[u+4];g<o&&(o=g),g>l&&(l=g)}n[0]=i,n[1]=r,n[2]=o,n[3]=a,n[4]=c,n[5]=l}function Gv(s,e,t,n,i){let r=t,o=t+n-1,a=i.pos,c=i.axis*2;for(;;){for(;r<=o&&e[r*6+c]<a;)r++;for(;r<=o&&e[o*6+c]>=a;)o--;if(r<o){for(let l=0;l<3;l++){let u=s[r*3+l];s[r*3+l]=s[o*3+l],s[o*3+l]=u;let h=e[r*6+l*2+0];e[r*6+l*2+0]=e[o*6+l*2+0],e[o*6+l*2+0]=h;let f=e[r*6+l*2+1];e[r*6+l*2+1]=e[o*6+l*2+1],e[o*6+l*2+1]=f}r++,o--}else return r}}var Jn=32,Wv=(s,e)=>s.candidate-e.candidate,Si=new Array(Jn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ba=new Float32Array(6);function Xv(s,e,t,n,i,r){let o=-1,a=0;if(r===0)o=fu(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===1)o=fu(s),o!==-1&&(a=qv(t,n,i,o));else if(r===2){let c=Bs(s),l=1.25*i,u=n*6,h=(n+i)*6;for(let f=0;f<3;f++){let p=e[f],m=(e[f+3]-p)/Jn;if(i<Jn/4){let d=[...Si];d.length=i;let v=0;for(let y=u;y<h;y+=6,v++){let w=d[v];w.candidate=t[y+2*f],w.count=0;let{bounds:S,leftCacheBounds:T,rightCacheBounds:C}=w;for(let M=0;M<3;M++)C[M]=1/0,C[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0,S[M]=1/0,S[M+3]=-1/0;jr(y,t,S)}d.sort(Wv);let _=i;for(let y=0;y<_;y++){let w=d[y];for(;y+1<_&&d[y+1].candidate===w.candidate;)d.splice(y+1,1),_--}for(let y=u;y<h;y+=6){let w=t[y+2*f];for(let S=0;S<_;S++){let T=d[S];w>=T.candidate?jr(y,t,T.rightCacheBounds):(jr(y,t,T.leftCacheBounds),T.count++)}}for(let y=0;y<_;y++){let w=d[y],S=w.count,T=i-w.count,C=w.leftCacheBounds,M=w.rightCacheBounds,b=0;S!==0&&(b=Bs(C)/c);let k=0;T!==0&&(k=Bs(M)/c);let V=1+1.25*(b*S+k*T);V<l&&(o=f,l=V,a=w.candidate)}}else{for(let _=0;_<Jn;_++){let y=Si[_];y.count=0,y.candidate=p+m+_*m;let w=y.bounds;for(let S=0;S<3;S++)w[S]=1/0,w[S+3]=-1/0}for(let _=u;_<h;_+=6){let S=~~((t[_+2*f]-p)/m);S>=Jn&&(S=Jn-1);let T=Si[S];T.count++,jr(_,t,T.bounds)}let d=Si[Jn-1];du(d.bounds,d.rightCacheBounds);for(let _=Jn-2;_>=0;_--){let y=Si[_],w=Si[_+1];pu(y.bounds,w.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let _=0;_<Jn-1;_++){let y=Si[_],w=y.count,S=y.bounds,C=Si[_+1].rightCacheBounds;w!==0&&(v===0?du(S,Ba):pu(S,Ba,Ba)),v+=w;let M=0,b=0;v!==0&&(M=Bs(Ba)/c);let k=i-v;k!==0&&(b=Bs(C)/c);let V=1+1.25*(M*v+b*k);V<l&&(o=f,l=V,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function qv(s,e,t,n){let i=0;for(let r=e,o=e+t;r<o;r++)i+=s[r*6+n*2];return i/t}function Yv(s,e){ip(e);let t=s.attributes.position,n=s.index.array,i=n.length/3,r=new Float32Array(i*6),o=t.normalized,a=t.array,c=t.offset||0,l=3;t.isInterleavedBufferAttribute&&(l=t.data.stride);let u=["getX","getY","getZ"];for(let h=0;h<i;h++){let f=h*3,p=h*6,g,x,m;o?(g=n[f+0],x=n[f+1],m=n[f+2]):(g=n[f+0]*l+c,x=n[f+1]*l+c,m=n[f+2]*l+c);for(let d=0;d<3;d++){let v,_,y;o?(v=t[u[d]](g),_=t[u[d]](x),y=t[u[d]](m)):(v=a[g+d],_=a[x+d],y=a[m+d]);let w=v;_<w&&(w=_),y<w&&(w=y);let S=v;_>S&&(S=_),y>S&&(S=y);let T=(S-w)/2,C=d*2;r[p+C+0]=w+T,r[p+C+1]=T+(Math.abs(w)+T)*np,w<e[d]&&(e[d]=w),S>e[d+3]&&(e[d+3]=S)}}return r}function jv(s,e){function t(d){f&&f(d/p)}function n(d,v,_,y=null,w=0){if(!g&&w>=c&&(g=!0,l&&(console.warn(`MeshBVH: Max depth of ${c} reached when generating BVH. Consider increasing maxDepth.`),console.warn(s))),_<=u||w>=c)return t(v+_),d.offset=v,d.count=_,d;let S=Xv(d.boundingData,y,o,v,_,h);if(S.axis===-1)return t(v+_),d.offset=v,d.count=_,d;let T=Gv(a,o,v,_,S);if(T===v||T===v+_)t(v+_),d.offset=v,d.count=_;else{d.splitAxis=S.axis;let C=new Ki,M=v,b=T-v;d.left=C,C.boundingData=new Float32Array(6),gu(o,M,b,C.boundingData,r),n(C,M,b,r,w+1);let k=new Ki,V=T,B=_-b;d.right=k,k.boundingData=new Float32Array(6),gu(o,V,B,k.boundingData,r),n(k,V,B,r,w+1)}return d}kv(s,e);let i=new Float32Array(6),r=new Float32Array(6),o=Yv(s,i),a=s.index.array,c=e.maxDepth,l=e.verbose,u=e.maxLeafTris,h=e.strategy,f=e.onProgress,p=s.index.count/3,g=!1,x=[],m=Hv(s);if(m.length===1){let d=m[0],v=new Ki;v.boundingData=i,Vv(o,d.offset,d.count,r),n(v,d.offset,d.count,r),x.push(v)}else for(let d of m){let v=new Ki;v.boundingData=new Float32Array(6),gu(o,d.offset,d.count,v.boundingData,r),n(v,d.offset,d.count,r),x.push(v)}return x}function op(s,e){let t=jv(s,e),n,i,r,o=[],a=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let u=0;u<t.length;u++){let h=t[u],f=c(h),p=new a(32*f);n=new Float32Array(p),i=new Uint32Array(p),r=new Uint16Array(p),l(0,h),o.push(p)}return o;function c(u){return u.count?1:1+c(u.left)+c(u.right)}function l(u,h){let f=u/4,p=u/2,g=!!h.count,x=h.boundingData;for(let m=0;m<6;m++)n[f+m]=x[m];if(g){let m=h.offset,d=h.count;return i[f+6]=m,r[p+14]=d,r[p+15]=65535,u+32}else{let m=h.left,d=h.right,v=h.splitAxis,_;if(_=l(u+32,m),_/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return i[f+6]=_/4,_=l(_,d),i[f+7]=v,_}}}var Jt=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){let c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){let a=t[r],c=e.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}};Jt.prototype.setFromBox=function(){let s=new P;return function(t,n){let i=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);let h=t.dot(s);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();var dM=function(){let s=new Jt;return function(t,n){let i=t.points,r=t.satAxes,o=t.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let u=0;u<3;u++){let h=o[u],f=r[u];if(s.setFromPoints(f,a),h.isSeparated(s))return!1}for(let u=0;u<3;u++){let h=l[u],f=c[u];if(s.setFromPoints(f,i),h.isSeparated(s))return!1}}}();var Zv=function(){let s=new P,e=new P,t=new P;return function(i,r,o){let a=i.start,c=s,l=r.start,u=e;t.subVectors(a,l),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);let h=t.dot(u),f=u.dot(c),p=u.dot(u),g=t.dot(c),m=c.dot(c)*p-f*f,d,v;m!==0?d=(h*f-g*p)/m:d=0,v=(h+d*f)/p,o.x=d,o.y=v}}(),Zr=function(){let s=new Q,e=new P,t=new P;return function(i,r,o,a){Zv(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;let f=e,p=t;if(i.closestPointToPoint(h,!0,e),r.closestPointToPoint(u,!0,t),f.distanceToSquared(h)<=p.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(p);return}}}}(),ap=function(){let s=new P,e=new P,t=new qt,n=new Tt;return function(r,o){let{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;let x=o.getPlane(t);if(Math.abs(x.distanceToPoint(c))<=a){let d=x.projectPoint(c,e);if(o.containsPoint(d))return!0}return!1}}();var Kv=1e-15;function xu(s){return Math.abs(s)<Kv}var Ht=class extends st{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new Jt),this.points=[this.a,this.b,this.c],this.sphere=new Yt,this.plane=new qt,this.needsUpdate=!0}intersectsSphere(e){return ap(e,this)}update(){let e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);let l=r[1],u=o[1];l.subVectors(e,t),u.setFromPoints(l,i);let h=r[2],f=o[2];h.subVectors(t,n),f.setFromPoints(h,i);let p=r[3],g=o[3];p.subVectors(n,e),g.setFromPoints(p,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};Ht.prototype.closestPointToSegment=function(){let s=new P,e=new P,t=new Tt;return function(i,r=null,o=null){let{start:a,end:c}=i,l=this.points,u,h=1/0;for(let f=0;f<3;f++){let p=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[p]),Zr(t,i,s,e),u=s.distanceToSquared(e),u<h&&(h=u,r&&r.copy(s),o&&o.copy(e))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(h)}}();Ht.prototype.intersectsTriangle=function(){let s=new Ht,e=new Array(3),t=new Array(3),n=new Jt,i=new Jt,r=new P,o=new P,a=new P,c=new P,l=new P,u=new Tt,h=new Tt,f=new Tt,p=new P;function g(x,m,d){let v=x.points,_=0,y=-1;for(let w=0;w<3;w++){let{start:S,end:T}=u;S.copy(v[w]),T.copy(v[(w+1)%3]),u.delta(o);let C=xu(m.distanceToPoint(S));if(xu(m.normal.dot(o))&&C){d.copy(u),_=2;break}let M=m.intersectLine(u,p);if(!M&&C&&p.copy(S),(M||C)&&!xu(p.distanceTo(T))){if(_<=1)(_===1?d.start:d.end).copy(p),C&&(y=_);else if(_>=2){(y===1?d.start:d.end).copy(p),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,d=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(s.copy(m),s.update(),m=s);let _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){let w=this.satBounds,S=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let M=0;M<4;M++){let b=w[M],k=S[M];if(n.setFromPoints(k,t),b.isSeparated(n))return!1}let T=m.satBounds,C=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){let b=T[M],k=C[M];if(n.setFromPoints(k,e),b.isSeparated(n))return!1}for(let M=0;M<4;M++){let b=S[M];for(let k=0;k<4;k++){let V=C[k];if(r.crossVectors(b,V),n.setFromPoints(r,e),i.setFromPoints(r,t),n.isSeparated(i))return!1}}return d&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{let w=g(this,y,h);if(w===1&&m.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(w!==2)return!1;let S=g(m,_,f);if(S===1&&this.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(S!==2)return!1;if(h.delta(a),f.delta(c),a.dot(c)<0){let B=f.start;f.start=f.end,f.end=B}let T=h.start.dot(a),C=h.end.dot(a),M=f.start.dot(a),b=f.end.dot(a),k=C<M,V=T<b;return T!==b&&M!==C&&k===V?!1:(d&&(l.subVectors(h.start,f.start),l.dot(a)>0?d.start.copy(h.start):d.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(a)<0?d.end.copy(h.end):d.end.copy(f.end)),!0)}}}();Ht.prototype.distanceToPoint=function(){let s=new P;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();Ht.prototype.distanceToTriangle=function(){let s=new P,e=new P,t=["a","b","c"],n=new Tt,i=new Tt;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f,p=t[h],g=o[p];this.closestPointToPoint(g,s),f=g.distanceToSquared(s),f<u&&(u=f,a&&a.copy(s),c&&c.copy(g));let x=this[p];o.closestPointToPoint(x,s),f=x.distanceToSquared(s),f<u&&(u=f,a&&a.copy(x),c&&c.copy(s))}for(let h=0;h<3;h++){let f=t[h],p=t[(h+1)%3];n.set(this[f],this[p]);for(let g=0;g<3;g++){let x=t[g],m=t[(g+1)%3];i.set(o[x],o[m]),Zr(n,i,s,e);let d=s.distanceToSquared(e);d<u&&(u=d,a&&a.copy(s),c&&c.copy(e))}}return Math.sqrt(u)}}();var $t=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new De,this.invMatrix=new De,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new Jt),this.alignedSatBounds=new Array(3).fill().map(()=>new Jt),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};$t.prototype.update=function(){return function(){let e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){let f=1*l|2*u|4*h,p=i[f];p.x=l?n.x:t.x,p.y=u?n.y:t.y,p.z=h?n.z:t.z,p.applyMatrix4(e)}let r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){let u=o[l],h=r[l],f=1<<l,p=i[f];u.subVectors(a,p),h.setFromPoints(u,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();$t.prototype.intersectsBox=function(){let s=new Jt;return function(t){this.needsUpdate&&this.update();let n=t.min,i=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){let l=o[c],u=r[c];if(s.setFromBox(l,t),u.isSeparated(s))return!1}return!0}}();$t.prototype.intersectsTriangle=function(){let s=new Ht,e=new Array(3),t=new Jt,n=new Jt,i=new P;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);let a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let f=0;f<3;f++){let p=a[f],g=c[f];if(t.setFromPoints(g,e),p.isSeparated(t))return!1}let l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){let p=l[f],g=u[f];if(t.setFromPoints(g,h),p.isSeparated(t))return!1}for(let f=0;f<3;f++){let p=c[f];for(let g=0;g<4;g++){let x=u[g];if(i.crossVectors(p,x),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}}();$t.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();$t.prototype.distanceToPoint=function(){let s=new P;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}}();$t.prototype.distanceToBox=function(){let s=["x","y","z"],e=new Array(12).fill().map(()=>new Tt),t=new Array(12).fill().map(()=>new Tt),n=new P,i=new P;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;let u=a*a,h=o.min,f=o.max,p=this.points,g=1/0;for(let m=0;m<8;m++){let d=p[m];i.copy(d).clamp(h,f);let v=d.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(d),l&&l.copy(i),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){let _=(m+1)%3,y=(m+2)%3,w=d<<_|v<<y,S=1<<m|d<<_|v<<y,T=p[w],C=p[S];e[x].set(T,C);let b=s[m],k=s[_],V=s[y],B=t[x],G=B.start,q=B.end;G[b]=h[b],G[k]=d?h[k]:f[k],G[V]=v?h[V]:f[k],q[b]=f[b],q[k]=d?h[k]:f[k],q[V]=v?h[V]:f[k],x++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){i.x=m?f.x:h.x,i.y=d?f.y:h.y,i.z=v?f.z:h.z,this.closestPointToPoint(i,n);let _=i.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){let d=e[m];for(let v=0;v<12;v++){let _=t[v];Zr(d,_,n,i);let y=n.distanceToSquared(i);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(i),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}}();var zs=new P,ks=new P,Hs=new P,ka=new Q,Ha=new Q,Va=new Q,cp=new P,lp=new P,up=new P,Ga=new P;function Jv(s,e,t,n,i,r){let o;return r===Rt?o=s.intersectTriangle(n,t,e,!0,i):o=s.intersectTriangle(e,t,n,r!==Mt,i),o===null?null:{distance:s.origin.distanceTo(i),point:i.clone()}}function $v(s,e,t,n,i,r,o,a,c){zs.fromBufferAttribute(e,r),ks.fromBufferAttribute(e,o),Hs.fromBufferAttribute(e,a);let l=Jv(s,zs,ks,Hs,Ga,c);if(l){n&&(ka.fromBufferAttribute(n,r),Ha.fromBufferAttribute(n,o),Va.fromBufferAttribute(n,a),l.uv=st.getInterpolation(Ga,zs,ks,Hs,ka,Ha,Va,new Q)),i&&(ka.fromBufferAttribute(i,r),Ha.fromBufferAttribute(i,o),Va.fromBufferAttribute(i,a),l.uv1=st.getInterpolation(Ga,zs,ks,Hs,ka,Ha,Va,new Q)),t&&(cp.fromBufferAttribute(t,r),lp.fromBufferAttribute(t,o),up.fromBufferAttribute(t,a),l.normal=st.getInterpolation(Ga,zs,ks,Hs,cp,lp,up,new P),l.normal.dot(s.direction)>0&&l.normal.multiplyScalar(-1));let u={a:r,b:o,c:a,normal:new P,materialIndex:0};st.getNormal(zs,ks,Hs,u.normal),l.face=u,l.faceIndex=r}return l}function yu(s,e,t,n,i){let r=n*3,o=s.index.getX(r),a=s.index.getX(r+1),c=s.index.getX(r+2),{position:l,normal:u,uv:h,uv1:f}=s.attributes,p=$v(t,l,u,h,f,o,a,c,e);return p?(p.faceIndex=n,i&&i.push(p),p):null}function hp(s,e,t,n,i,r){for(let o=n,a=n+i;o<a;o++)yu(s,e,t,o,r)}function fp(s,e,t,n,i){let r=1/0,o=null;for(let a=n,c=n+i;a<c;a++){let l=yu(s,e,t,a);l&&l.distance<r&&(o=l,r=l.distance)}return o}function pn(s,e,t,n){let i=s.a,r=s.b,o=s.c,a=e,c=e+1,l=e+2;t&&(a=t.getX(e),c=t.getX(e+1),l=t.getX(e+2)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function vu(s,e,t,n,i,r,o){let a=t.index,c=t.attributes.position;for(let l=s,u=e+s;l<u;l++)if(pn(o,l*3,a,c),o.needsUpdate=!0,n(o,l,i,r))return!0;return!1}var Vs=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};function $n(s,e){return e[s+15]===65535}function Ji(s,e){return e[s+6]}function Gs(s,e){return e[s+14]}function Ws(s){return s+8}function Xs(s,e){return e[s+6]}function dp(s,e){return e[s+7]}var qs=new vt,Xa=new P,ew=["x","y","z"];function qa(s,e,t,n,i){let r=s*2,o=Ys,a=bi,c=Ti;if($n(r,a)){let u=Ji(s,c),h=Gs(r,a);hp(e,t,n,u,h,i)}else{let u=Ws(s);ja(u,o,n,Xa)&&qa(u,e,t,n,i);let h=Xs(s,c);ja(h,o,n,Xa)&&qa(h,e,t,n,i)}}function Ya(s,e,t,n){let i=s*2,r=Ys,o=bi,a=Ti;if($n(i,o)){let l=Ji(s,a),u=Gs(i,o);return fp(e,t,n,l,u)}else{let l=dp(s,a),u=ew[l],f=n.direction[u]>=0,p,g;f?(p=Ws(s),g=Xs(s,a)):(p=Xs(s,a),g=Ws(s));let m=ja(p,r,n,Xa)?Ya(p,e,t,n):null;if(m){let _=m.point[u];if(f?_<=r[g+l]:_>=r[g+l+3])return m}let v=ja(g,r,n,Xa)?Ya(g,e,t,n):null;return m&&v?m.distance<=v.distance?m:v:m||v||null}}var pp=function(){let s,e,t=[],n=new Vs(()=>new vt);return function(...o){s=n.getPrimitive(),e=n.getPrimitive(),t.push(s,e);let a=i(...o);n.releasePrimitive(s),n.releasePrimitive(e),t.pop(),t.pop();let c=t.length;return c>0&&(e=t[c-1],s=t[c-2]),a};function i(r,o,a,c,l=null,u=0,h=0){function f(_){let y=_*2,w=bi,S=Ti;for(;!$n(y,w);)_=Ws(_),y=_*2;return Ji(_,S)}function p(_){let y=_*2,w=bi,S=Ti;for(;!$n(y,w);)_=Xs(_,S),y=_*2;return Ji(_,S)+Gs(y,w)}let g=r*2,x=Ys,m=bi,d=Ti;if($n(g,m)){let _=Ji(r,d),y=Gs(g,m);return dn(r,x,s),c(_,y,!1,h,u+r,s)}else{let _=Ws(r),y=Xs(r,d),w=_,S=y,T,C,M,b;if(l&&(M=s,b=e,dn(w,x,M),dn(S,x,b),T=l(M),C=l(b),C<T)){w=y,S=_;let Y=T;T=C,C=Y,M=b}M||(M=s,dn(w,x,M));let k=$n(w*2,m),V=a(M,k,T,h+1,u+w),B;if(V===2){let Y=f(w),se=p(w)-Y;B=c(Y,se,!0,h+1,u+w,M)}else B=V&&i(w,o,a,c,l,u,h+1);if(B)return!0;b=e,dn(S,x,b);let G=$n(S*2,m),q=a(b,G,C,h+1,u+S),ie;if(q===2){let Y=f(S),se=p(S)-Y;ie=c(Y,se,!0,h+1,u+S,b)}else ie=q&&i(S,o,a,c,l,u,h+1);return!!ie}}}(),mp=function(){let s=new Ht,e=new Ht,t=new De,n=new $t,i=new $t;return function r(o,a,c,l,u=null){let h=o*2,f=Ys,p=bi,g=Ti;if(u===null&&(c.boundingBox||c.computeBoundingBox(),n.set(c.boundingBox.min,c.boundingBox.max,l),u=n),$n(h,p)){let m=a,d=m.index,v=m.attributes.position,_=c.index,y=c.attributes.position,w=Ji(o,g),S=Gs(h,p);if(t.copy(l).invert(),c.boundsTree)return dn(o,f,i),i.matrix.copy(t),i.needsUpdate=!0,c.boundsTree.shapecast({intersectsBounds:C=>i.intersectsBox(C),intersectsTriangle:C=>{C.a.applyMatrix4(l),C.b.applyMatrix4(l),C.c.applyMatrix4(l),C.needsUpdate=!0;for(let M=w*3,b=(S+w)*3;M<b;M+=3)if(pn(e,M,d,v),e.needsUpdate=!0,C.intersectsTriangle(e))return!0;return!1}});for(let T=w*3,C=S+w*3;T<C;T+=3){pn(s,T,d,v),s.a.applyMatrix4(t),s.b.applyMatrix4(t),s.c.applyMatrix4(t),s.needsUpdate=!0;for(let M=0,b=_.count;M<b;M+=3)if(pn(e,M,_,y),e.needsUpdate=!0,s.intersectsTriangle(e))return!0}}else{let m=o+8,d=g[o+6];return dn(m,f,qs),!!(u.intersectsBox(qs)&&r(m,a,c,l,u)||(dn(d,f,qs),u.intersectsBox(qs)&&r(d,a,c,l,u)))}}}();function ja(s,e,t,n){return dn(s,e,qs),t.intersectBox(qs,n)}var wu=[],Wa,Ys,bi,Ti;function js(s){Wa&&wu.push(Wa),Wa=s,Ys=new Float32Array(s),bi=new Uint16Array(s),Ti=new Uint32Array(s)}function Kr(){Wa=null,Ys=null,bi=null,Ti=null,wu.length&&js(wu.pop())}var Mu=Symbol("skip tree generation"),Su=new vt,bu=new vt,Zs=new De,$i=new $t,Jr=new $t,$r=new P,Za=new P,tw=new P,nw=new P,iw=new P,gp=new vt,Ln=new Vs(()=>new Ht),Qr=class s{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),s.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};let n=e.geometry,i=e._roots,r=n.getIndex(),o;return t.cloneBuffers?o={roots:i.map(a=>a.slice()),index:r.array.slice()}:o={roots:i,index:r.array},o}static deserialize(e,t,n={}){if(typeof n=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),s.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});n={setIndex:!0,...n};let{index:i,roots:r}=e,o=new s(t,{...n,[Mu]:!0});if(o._roots=r,n.setIndex){let a=t.getIndex();if(a===null){let c=new rt(e.index,1,!1);t.setIndex(c)}else a.array!==i&&(a.array.set(i),a.needsUpdate=!0)}return o}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:0,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[Mu]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[Mu]||(this._roots=op(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new vt))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=this.geometry,n=t.index.array,i=t.attributes.position,r,o,a,c,l=0,u=this._roots;for(let f=0,p=u.length;f<p;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,p,g=!1){let x=f*2;if(a[x+15]===65535){let d=o[f+6],v=a[x+14],_=1/0,y=1/0,w=1/0,S=-1/0,T=-1/0,C=-1/0;for(let M=3*d,b=3*(d+v);M<b;M++){let k=n[M],V=i.getX(k),B=i.getY(k),G=i.getZ(k);V<_&&(_=V),V>S&&(S=V),B<y&&(y=B),B>T&&(T=B),G<w&&(w=G),G>C&&(C=G)}return c[f+0]!==_||c[f+1]!==y||c[f+2]!==w||c[f+3]!==S||c[f+4]!==T||c[f+5]!==C?(c[f+0]=_,c[f+1]=y,c[f+2]=w,c[f+3]=S,c[f+4]=T,c[f+5]=C,!0):!1}else{let d=f+8,v=o[f+6],_=d+p,y=v+p,w=g,S=!1,T=!1;e?w||(S=e.has(_),T=e.has(y),w=!S&&!T):(S=!0,T=!0);let C=w||S,M=w||T,b=!1;C&&(b=h(d,p,w));let k=!1;M&&(k=h(v,p,w));let V=b||k;if(V)for(let B=0;B<3;B++){let G=d+B,q=v+B,ie=c[G],Y=c[G+3],W=c[q],se=c[q+3];c[f+B]=ie<W?ie:W,c[f+B+3]=Y>se?Y:se}return V}}}traverse(e,t=0){let n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,u=r[l+15]===65535;if(u){let h=i[a+6],f=r[l+14];e(c,u,new Float32Array(n,a*4,6),h,f)}else{let h=a+32/4,f=i[a+6],p=i[a+7];e(c,u,new Float32Array(n,a*4,6),p)||(o(h,c+1),o(f,c+1))}}}raycast(e,t=sn){let n=this._roots,i=this.geometry,r=[],o=t.isMaterial,a=Array.isArray(t),c=i.groups,l=o?t.side:t;for(let u=0,h=n.length;u<h;u++){let f=a?t[c[u].materialIndex].side:l,p=r.length;if(js(n[u]),qa(0,i,f,e,r),Kr(),a){let g=c[u].materialIndex;for(let x=p,m=r.length;x<m;x++)r[x].face.materialIndex=g}}return r}raycastFirst(e,t=sn){let n=this._roots,i=this.geometry,r=t.isMaterial,o=Array.isArray(t),a=null,c=i.groups,l=r?t.side:t;for(let u=0,h=n.length;u<h;u++){let f=o?t[c[u].materialIndex].side:l;js(n[u]);let p=Ya(0,i,f,e);Kr(),p!=null&&(a==null||p.distance<a.distance)&&(a=p,o&&(p.face.materialIndex=c[u].materialIndex))}return a}intersectsGeometry(e,t){let n=this.geometry,i=!1;for(let r of this._roots)if(js(r),i=mp(0,n,e,t),Kr(),i)break;return i}shapecast(e,t,n){let i=this.geometry;if(e instanceof Function){if(t){let f=t;t=(p,g,x,m)=>{let d=g*3;return f(p,d,d+1,d+2,x,m)}}e={boundsTraverseOrder:n,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}let r=Ln.getPrimitive(),{boundsTraverseOrder:o,intersectsBounds:a,intersectsRange:c,intersectsTriangle:l}=e;if(c&&l){let f=c;c=(p,g,x,m,d)=>f(p,g,x,m,d)?!0:vu(p,g,i,l,x,m,r)}else c||(l?c=(f,p,g,x)=>vu(f,p,i,l,g,x,r):c=(f,p,g)=>g);let u=!1,h=0;for(let f of this._roots){if(js(f),u=pp(0,i,a,c,o,h),Kr(),u)break;h+=f.byteLength}return Ln.releasePrimitive(r),u}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n,o=this.geometry.index,a=this.geometry.attributes.position,c=e.geometry.index,l=e.geometry.attributes.position;Zs.copy(t).invert();let u=Ln.getPrimitive(),h=Ln.getPrimitive();if(r){let p=function(g,x,m,d,v,_,y,w){for(let S=m,T=m+d;S<T;S++){pn(h,S*3,c,l),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let C=g,M=g+x;C<M;C++)if(pn(u,C*3,o,a),u.needsUpdate=!0,r(u,h,C,S,v,_,y,w))return!0}return!1};if(i){let g=i;i=function(x,m,d,v,_,y,w,S){return g(x,m,d,v,_,y,w,S)?!0:p(x,m,d,v,_,y,w,S)}}else i=p}e.getBoundingBox(bu),bu.applyMatrix4(t);let f=this.shapecast({intersectsBounds:p=>bu.intersectsBox(p),intersectsRange:(p,g,x,m,d,v)=>(Su.copy(v),Su.applyMatrix4(Zs),e.shapecast({intersectsBounds:_=>Su.intersectsBox(_),intersectsRange:(_,y,w,S,T)=>i(p,g,_,y,m,d,S,T)}))});return Ln.releasePrimitive(u),Ln.releasePrimitive(h),f}intersectsBox(e,t){return $i.set(e.min,e.max,t),$i.needsUpdate=!0,this.shapecast({intersectsBounds:n=>$i.intersectsBox(n),intersectsTriangle:n=>$i.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),$i.set(e.boundingBox.min,e.boundingBox.max,t),$i.needsUpdate=!0;let a=this.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,h=e.index,f=Ln.getPrimitive(),p=Ln.getPrimitive(),g=Za,x=tw,m=null,d=null;i&&(m=nw,d=iw);let v=1/0,_=null,y=null;return Zs.copy(t).invert(),Jr.matrix.copy(Zs),this.shapecast({boundsTraverseOrder:w=>$i.distanceToBox(w),intersectsBounds:(w,S,T)=>T<v&&T<o?(S&&(Jr.min.copy(w.min),Jr.max.copy(w.max),Jr.needsUpdate=!0),!0):!1,intersectsRange:(w,S)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:T=>Jr.distanceToBox(T),intersectsBounds:(T,C,M)=>M<v&&M<o,intersectsRange:(T,C)=>{for(let M=T*3,b=(T+C)*3;M<b;M+=3){pn(p,M,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let k=w*3,V=(w+S)*3;k<V;k+=3){pn(f,k,l,c),f.needsUpdate=!0;let B=f.distanceToTriangle(p,g,m);if(B<v&&(x.copy(g),d&&d.copy(m),v=B,_=k/3,y=M/3),B<r)return!0}}}});{let T=h?h.count:u.count;for(let C=0,M=T;C<M;C+=3){pn(p,C,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let b=w*3,k=(w+S)*3;b<k;b+=3){pn(f,b,l,c),f.needsUpdate=!0;let V=f.distanceToTriangle(p,g,m);if(V<v&&(x.copy(g),d&&d.copy(m),v=V,_=b/3,y=C/3),V<r)return!0}}}}}),Ln.releasePrimitive(f),Ln.releasePrimitive(p),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,i&&(i.point?i.point.copy(d):i.point=d.clone(),i.point.applyMatrix4(Zs),x.applyMatrix4(Zs),i.distance=x.sub(i.point).length(),i.faceIndex=y),n)}closestPointToPoint(e,t={},n=0,i=1/0){let r=n*n,o=i*i,a=1/0,c=null;if(this.shapecast({boundsTraverseOrder:u=>($r.copy(e).clamp(u.min,u.max),$r.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,$r);let f=e.distanceToSquared($r);return f<a&&(Za.copy($r),a=f,c=h),f<r}}),a===1/0)return null;let l=Math.sqrt(a);return t.point?t.point.copy(Za):t.point=Za.clone(),t.distance=l,t.faceIndex=c,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{dn(0,new Float32Array(n),gp),e.union(gp)}),e}};var sw=1.0000001000000001e6;function Tu(s){return~~(s*sw)}function Eu(s){return`${Tu(s.x)},${Tu(s.y)},${Tu(s.z)}`}var Au=[new P,new P,new P],Ka=class{constructor(e=null){this.data=null,this.unmatchedEdges=null,this.matchedEdges=null,this.useDrawRange=!0,e&&this.updateFrom(e)}getSiblingTriangleIndex(e,t){let n=this.data[e*3+t];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(e,t){let n=this.data[e*3+t];return n===-1?-1:n%3}updateFrom(e){let t=new Map,{attributes:n}=e,i=e.index,r=n.position,o=i?i.count/3:r.count/3,a=o,c=0;this.useDrawRange&&(c=e.drawRange.start,e.drawRange.count!==1/0&&(o=~~(e.drawRange.count/3)));let l=this.data;(!l||l.length<3*a)&&(l=new Int32Array(3*a)),l.fill(-1);let u=0,h=0;for(let f=0;f<o;f++){let p=3*f+c;for(let g=0;g<3;g++){let x=p+g;i&&(x=i.getX(x)),Au[g].fromBufferAttribute(r,x)}for(let g=0;g<3;g++){let x=(g+1)%3,m=Au[g],d=Au[x],v=Eu(m),_=Eu(d),y=`${_}_${v}`;if(t.has(y)){let w=t.get(y);l[p+g]=w,l[w]=p+g,t.delete(y),u--,h++}else{let w=`${v}_${_}`;t.set(w,p+g),u++}}}this.matchedEdges=h,this.unmatchedEdges=u,this.data=l}};function Ja(){return typeof SharedArrayBuffer<"u"}function _p(s){if(s.buffer instanceof SharedArrayBuffer)return s;let e=s.constructor,t=s.buffer,n=new SharedArrayBuffer(t.byteLength),i=new Uint8Array(t);return new Uint8Array(n).set(i,0),new e(n)}var Ei=class extends qe{constructor(...e){super(...e),this.isBrush=!0,this._previousMatrix=new De,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:e,_previousMatrix:t}=this,n=e.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!0;return!1}prepareGeometry(){let e=this.geometry,t=e.attributes;if(Ja())for(let n in t){let i=t[n];if(i.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");i.array=_p(i.array)}if(e.boundsTree||(e.boundsTree=new Qr(e,{maxLeafTris:3}),e.halfEdges&&e.halfEdges.updateFrom(e)),e.halfEdges||(e.halfEdges=new Ka(e)),!e.groupIndices){let n=e.index.count/3,i=new Uint16Array(n),r=e.groups;for(let o=0,a=r.length;o<a;o++){let{start:c,count:l}=r[o];for(let u=c/3,h=(c+l)/3;u<h;u++)i[u]=o}e.groupIndices=i}}disposeCacheData(){let{geometry:e}=this;e.halfEdges=null,e.boundsTree=null,e.groupIndices=null}};var eo=class{constructor(){this.intersectionSet={},this.ids=[]}add(e,t){let{intersectionSet:n,ids:i}=this;n[e]||(n[e]=[],i.push(e)),n[e].push(t)}};var Ai=new jn,xp=new De,Zt=new st,Qn=new P,yp=new Ze,vp=new Ze,wp=new Ze,Ru=new Ze,$a=new Ze,Qa=new Ze,Cu=new Tt,Pu=new P,Iu=1e-8,rw=1e-15,tc=-1,nc=1,Sp=-2,Nu=2,to=0,ec=1,sc=2,ic=null;function Uu(s){ic=s}function Ou(s,e){function t(){return Math.random()-.5}s.getNormal(Pu),Ai.direction.copy(Pu),s.getMidpoint(Ai.origin);let n=3,i=0,r=1/0;for(let o=0;o<n;o++){Ai.direction.x+=t()*Iu,Ai.direction.y+=t()*Iu,Ai.direction.z+=t()*Iu,Ai.direction.multiplyScalar(-1);let a=e.raycastFirst(Ai,Mt);if(!!(a&&Ai.direction.dot(a.face.normal)>0)&&i++,a!==null&&(r=Math.min(r,a.distance)),r<=rw)return a.face.normal.dot(Pu)>0?Nu:Sp;if(i/n>.5||(o-i+1)/n>.5)break}return i/n>.5?tc:nc}function bp(s,e){let t=new eo,n=new eo;return xp.copy(s.matrixWorld).invert().multiply(e.matrixWorld),s.geometry.boundsTree.bvhcast(e.geometry.boundsTree,xp,{intersectsTriangles(i,r,o,a){if(i.intersectsTriangle(r,Cu,!0)){if(Cu.distanceSq()===0&&i.plane.normal.dot(r.plane.normal)<1-1e-10)return!1;t.add(o,a),n.add(a,o),ic&&(ic.addEdge(Cu),ic.addIntersectingTriangles(o,i,a,r))}return!1}}),{aIntersections:t,bIntersections:n}}function Tp(s,e,t,n,i,r,o=!1){let a=t.attributes,c=t.index,l=s*3,u=c.getX(l+0),h=c.getX(l+1),f=c.getX(l+2);for(let p in r){let g=a[p],x=r[p];if(!(p in a))throw new Error(`CSG Operations: Attribute ${p} not available on geometry.`);let m=g.itemSize;p==="position"?(Zt.a.fromBufferAttribute(g,u).applyMatrix4(n),Zt.b.fromBufferAttribute(g,h).applyMatrix4(n),Zt.c.fromBufferAttribute(g,f).applyMatrix4(n),Lu(Zt.a,Zt.b,Zt.c,e,3,x,o)):p==="normal"?(Zt.a.fromBufferAttribute(g,u).applyNormalMatrix(i),Zt.b.fromBufferAttribute(g,h).applyNormalMatrix(i),Zt.c.fromBufferAttribute(g,f).applyNormalMatrix(i),o&&(Zt.a.multiplyScalar(-1),Zt.b.multiplyScalar(-1),Zt.c.multiplyScalar(-1)),Lu(Zt.a,Zt.b,Zt.c,e,3,x,o,!0)):(yp.fromBufferAttribute(g,u),vp.fromBufferAttribute(g,h),wp.fromBufferAttribute(g,f),Lu(yp,vp,wp,e,m,x,o))}}function Ep(s,e,t,n,i,r,o,a=!1){Du(s,n,i,r,o,a),Du(a?t:e,n,i,r,o,a),Du(a?e:t,n,i,r,o,a)}function Fu(s,e,t=!1){switch(s){case 0:if(e===nc||e===Nu&&!t)return ec;break;case 1:if(t){if(e===tc)return to}else if(e===nc||e===Sp)return ec;break;case 3:if(e===tc)return to;if(e===nc)return ec;break;case 4:if(e===tc||e===Nu&&!t)return ec;break;default:throw new Error(`Unrecognized CSG operation enum "${s}".`)}return sc}function Lu(s,e,t,n,i,r,o=!1,a=!1){let c=l=>{r.push(l.x),i>1&&r.push(l.y),i>2&&r.push(l.z),i>3&&r.push(l.w)};Ru.set(0,0,0,0).addScaledVector(s,n.a.x).addScaledVector(e,n.a.y).addScaledVector(t,n.a.z),$a.set(0,0,0,0).addScaledVector(s,n.b.x).addScaledVector(e,n.b.y).addScaledVector(t,n.b.z),Qa.set(0,0,0,0).addScaledVector(s,n.c.x).addScaledVector(e,n.c.y).addScaledVector(t,n.c.z),a&&(Ru.normalize(),$a.normalize(),Qa.normalize()),c(Ru),o?(c(Qa),c($a)):(c($a),c(Qa))}function Du(s,e,t,n,i,r=!1){for(let o in i){let a=e[o],c=i[o];if(!(o in e))throw new Error(`CSG Operations: Attribute ${o} no available on geometry.`);let l=a.itemSize;o==="position"?(Qn.fromBufferAttribute(a,s).applyMatrix4(t),c.push(Qn.x,Qn.y,Qn.z)):o==="normal"?(Qn.fromBufferAttribute(a,s).applyNormalMatrix(n),r&&Qn.multiplyScalar(-1),c.push(Qn.x,Qn.y,Qn.z)):(c.push(a.getX(s)),l>1&&c.push(a.getY(s)),l>2&&c.push(a.getZ(s)),l>3&&c.push(a.getW(s)))}}var Js=1e-14,Ks=1e-10,ei=new Tt,mt=new Tt,ti=new P,Ap=new P,no=new qt,ow=new Ht;function io(s){return s.a.distanceToSquared(s.b)<Js||s.a.distanceToSquared(s.c)<Js||s.b.distanceToSquared(s.c)<Js}var Bu=class{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new st),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}},rc=class{constructor(){this.trianglePool=new Bu,this.triangles=[],this.normal=new P}initialize(e){let{triangles:t,trianglePool:n,normal:i}=this;if(t.length=0,n.clear(),Array.isArray(e))for(let r=0,o=e.length;r<o;r++){let a=e[r];if(r===0)a.getNormal(i);else if(Math.abs(1-a.getNormal(ti).dot(i))>Js)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let c=n.getTriangle();c.copy(a),t.push(c)}else{e.getNormal(i);let r=n.getTriangle();r.copy(e),t.push(r)}}splitByTriangle(e){let{normal:t,triangles:n}=this;if(e.getPlane(no),Math.abs(1-Math.abs(no.normal.dot(t)))<Ks){let i=[e.a,e.b,e.c];for(let r=0;r<3;r++){let o=(r+1)%3,a=i[r],c=i[o];ti.subVectors(c,a).normalize(),Ap.crossVectors(t,ti),no.setFromNormalAndCoplanarPoint(Ap,a),this.splitByPlane(no,e,r)}for(let r=0,o=n.length;r<o;r++){let a=n[r];a.coplanarCount=0}}else this.splitByPlane(no,e)}splitByPlane(e,t=null,n=-1){let{triangles:i,trianglePool:r}=this,o=null;t!==null&&(o=ow,o.copy(t),o.needsUpdate=!0);for(let a=0,c=i.length;a<c;a++){let l=i[a],{a:u,b:h,c:f}=l;if(o&&!o.intersectsTriangle(l,ei,!0))continue;let p=0,g=-1,x=0,m=!1,d=[u,h,f];for(let v=0;v<3;v++){let _=(v+1)%3;ei.start.copy(d[v]),ei.end.copy(d[_]);let y=e.distanceToPoint(ei.start),w=e.distanceToPoint(ei.end);if(Math.abs(y)<Ks&&Math.abs(w)<Ks){m=!0;break}if(Math.abs(y)<Ks)continue;y>0&&x++;let S=!!e.intersectLine(ei,ti);!S&&Math.abs(w)<Ks&&(ti.copy(ei.end),S=!0),S&&!(ti.distanceTo(ei.start)<Js)&&(ti.distanceTo(ei.end)<Js&&(g=v),p===0?mt.start.copy(ti):mt.end.copy(ti),p++)}if(!m)if(p===2&&mt.distance()>Ks)if(g!==-1){g=(g+1)%3;let v=0;v===g&&(v=(v+1)%3);let _=v+1;_===g&&(_=(_+1)%3);let y=r.getTriangle();y.a.copy(d[_]),y.b.copy(mt.end),y.c.copy(mt.start),io(y)||i.push(y),l.a.copy(d[v]),l.b.copy(mt.start),l.c.copy(mt.end),io(l)&&(i.splice(a,1),a--,c--)}else{let v=d.findIndex(T=>x>=2?e.distanceToPoint(T)<0:e.distanceToPoint(T)>0);if(v===0){let T=mt.start;mt.start=mt.end,mt.end=T}else if(v===-1)continue;let _=(v+1)%3,y=(v+2)%3,w=r.getTriangle(),S=r.getTriangle();d[_].distanceToSquared(mt.start)<d[y].distanceToSquared(mt.end)?(w.a.copy(d[_]),w.b.copy(mt.start),w.c.copy(mt.end),S.a.copy(d[_]),S.b.copy(d[y]),S.c.copy(mt.start)):(w.a.copy(d[y]),w.b.copy(mt.start),w.c.copy(mt.end),S.a.copy(d[_]),S.b.copy(d[y]),S.c.copy(mt.end)),l.a.copy(d[v]),l.b.copy(mt.end),l.c.copy(mt.start),io(w)||i.push(w),io(S)||i.push(S),io(l)&&(i.splice(a,1),a--,c--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0}};var so=class{constructor(e,t=500){let n=Ja()?SharedArrayBuffer:ArrayBuffer;this.expansionFactor=1.5,this.type=e,this.array=new e(new n(t*e.BYTES_PER_ELEMENT)),this.length=0}expand(e=null){let{type:t,array:n,expansionFactor:i}=this;e===null&&(e=~~(n.length*i));let r=new t(e);r.set(n,0),this.array=r}push(...e){let{array:t,length:n}=this;n+e.length>t.length&&(this.expand(),t=this.array);for(let i=0,r=e.length;i<r;i++)t[n+i]=e[i];this.length+=e.length}clear(){this.length=0}};var oc=class{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(e){return this.groupAttributes[0][e].type}getTotalLength(e){let{groupCount:t,groupAttributes:n}=this,i=0;for(let r=0;r<t;r++){let o=n[r];i+=o[e].length}return i}getGroupSet(e=0){let{groupAttributes:t}=this;if(t[e])return this.groupCount=Math.max(this.groupCount,e+1),t[e];let n=t[0];for(this.groupCount=Math.max(this.groupCount,e+1);e>=t.length;){let i={};t.push(i);for(let r in n)i[r]=new so(n[r].type)}return t[e]}getGroupArray(e,t=0){let{groupAttributes:n}=this;if(!n[0][e])throw new Error(`TypedAttributeData: Attribute with "${e}" has not been initialized`);return this.getGroupSet(t)[e]}initializeArray(e,t){let{groupAttributes:n}=this,r=n[0][e];if(r){if(r.type!==t)throw new Error(`TypedAttributeData: Array ${e} already initialized with a different type.`)}else for(let o=0,a=n.length;o<a;o++)n[o][e]=new so(t)}clear(){this.groupCount=0;let{groupAttributes:e}=this;e.forEach(t=>{for(let n in t)t[n].clear()})}delete(e){this.groupAttributes.forEach(t=>{delete t[e]})}reset(){this.groupAttributes=[]}};var zu=class{constructor(e){this.triangle=new st().copy(e),this.intersects={}}addTriangle(e,t){this.intersects[e]=new st().copy(t)}getIntersectArray(){let e=[],{intersects:t}=this;for(let n in t)e.push(t[n]);return e}},ac=class{constructor(){this.data={}}addTriangleIntersection(e,t,n,i){let{data:r}=this;r[e]||(r[e]=new zu(t)),r[e].addTriangle(n,i)}getTrianglesAsArray(e=null){let{data:t}=this,n=[];if(e!==null)e in t&&n.push(t[e].triangle);else for(let i in t)n.push(t[i].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(e=>parseInt(e))}getIntersectionIndices(e){let{data:t}=this;return t[e]?Object.keys(t[e].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(e=null,t=null){let{data:n}=this,i=new Set,r=[],o=a=>{if(n[a])if(t!==null)n[a].intersects[t]&&r.push(n[a].intersects[t]);else{let c=n[a].intersects;for(let l in c)i.has(l)||(i.add(l),r.push(c[l]))}};if(e!==null)o(e);else for(let a in n)o(a);return r}reset(){this.data={}}},cc=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new ac,this.triangleIntersectsB=new ac,this.intersectionEdges=[]}addIntersectingTriangles(e,t,n,i){let{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(e,t,n,i),o.addTriangleIntersection(n,i,e,t)}addEdge(e){this.intersectionEdges.push(e.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}};var Ri=new De,fc=new Fe,Qi=new st,lc=new st,uc=new st,hc=new st;function aw(s){for(let e of s)return e}function Pp(s,e,t,n,i,r){let{useGroups:o=!0}=r,{aIntersections:a,bIntersections:c}=bp(s,e),l=[],u=null,h;return h=o?0:-1,Cp(s,e,a,t,!1,i,h),Rp(s,e,a,t,!1,n,i,h),h=o?s.geometry.groups.length||1:-1,Cp(e,s,c,t,!0,i,h),Rp(e,s,c,t,!0,n,i,h),{groups:l,materials:u}}function Rp(s,e,t,n,i,r,o,a=0){let c=s.matrixWorld.determinant()<0;Ri.copy(e.matrixWorld).invert().multiply(s.matrixWorld),fc.getNormalMatrix(s.matrixWorld).multiplyScalar(c?-1:1);let l=s.geometry.groupIndices,u=s.geometry.index,h=s.geometry.attributes.position,f=e.geometry.boundsTree,p=e.geometry.index,g=e.geometry.attributes.position,x=t.ids,m=t.intersectionSet;for(let d=0,v=x.length;d<v;d++){let _=x[d],y=a===-1?0:l[_]+a,w=o.getGroupSet(y),S=3*_,T=u.getX(S+0),C=u.getX(S+1),M=u.getX(S+2);Qi.a.fromBufferAttribute(h,T).applyMatrix4(Ri),Qi.b.fromBufferAttribute(h,C).applyMatrix4(Ri),Qi.c.fromBufferAttribute(h,M).applyMatrix4(Ri),r.initialize(Qi);let b=m[_];for(let V=0,B=b.length;V<B;V++){let G=3*b[V],q=p.getX(G+0),ie=p.getX(G+1),Y=p.getX(G+2);lc.a.fromBufferAttribute(g,q),lc.b.fromBufferAttribute(g,ie),lc.c.fromBufferAttribute(g,Y),r.splitByTriangle(lc)}let k=r.triangles;for(let V=0,B=k.length;V<B;V++){let G=k[V],q=Ou(G,f),ie=Fu(n,q,i);if(ie!==sc){Qi.getBarycoord(G.a,hc.a),Qi.getBarycoord(G.b,hc.b),Qi.getBarycoord(G.c,hc.c);let Y=ie===to;Tp(_,hc,s.geometry,s.matrixWorld,fc,w,c!==Y)}}}return x.length}function Cp(s,e,t,n,i,r,o=0){let a=s.matrixWorld.determinant()<0;Ri.copy(e.matrixWorld).invert().multiply(s.matrixWorld),fc.getNormalMatrix(s.matrixWorld).multiplyScalar(a?-1:1);let c=e.geometry.boundsTree,l=s.geometry.groupIndices,u=s.geometry.index,h=s.geometry.attributes,f=h.position,p=[],g=s.geometry.halfEdges,x=new Set;for(let m=0,d=u.count/3;m<d;m++)m in t.intersectionSet||x.add(m);for(;x.size>0;){let m=aw(x);x.delete(m),p.push(m);let d=3*m,v=u.getX(d+0),_=u.getX(d+1),y=u.getX(d+2);uc.a.fromBufferAttribute(f,v).applyMatrix4(Ri),uc.b.fromBufferAttribute(f,_).applyMatrix4(Ri),uc.c.fromBufferAttribute(f,y).applyMatrix4(Ri);let w=Ou(uc,c),S=Fu(n,w,i);for(;p.length>0;){let T=p.pop(),C=o===-1?0:l[T]+o,M=r.getGroupSet(C);for(let q=0;q<3;q++){let ie=g.getSiblingTriangleIndex(T,q);ie!==-1&&x.has(ie)&&(p.push(ie),x.delete(ie))}if(S===sc)continue;let b=3*T,k=u.getX(b+0),V=u.getX(b+1),B=u.getX(b+2),G=S===to;Ep(k,V,B,h,s.matrixWorld,fc,M,G!==a)}}}function cw(s,e,t,n){let i=!1,r=-1,o=n.groupCount,a=s.attributes,c=n.groupAttributes[0];for(let u in c){let h=n.getTotalLength(u,o),f=c[u].type,p=a[u];if(!p||p.array.length<h){let x=e.attributes[u];p=new rt(new f(h),x.itemSize,x.normalized),s.setAttribute(u,p),i=!0}let g=0;for(let x=0;x<o;x++){let{array:m,type:d,length:v}=n.groupAttributes[x][u],_=new d(m.buffer,0,v);p.array.set(_,g),g+=_.length}p.needsUpdate=!0,r=h/p.itemSize}s.setDrawRange(0,r),s.clearGroups();let l=0;for(let u=0;u<o;u++){let h=n.getGroupArray("position",u).length/3;if(h!==0){let f=t[u];s.addGroup(l,h,f.materialIndex),l+=h}}if(s.index){let u=s.index.array;if(u.length<r)s.index=null,i=!0;else for(let h=0,f=u.length;h<f;h++)u[h]=h}return s.boundsTree=null,i&&s.dispose(),s}function Ip(s,e){let t=e;return Array.isArray(e)||(t=[],s.forEach(n=>{t[n.materialIndex]=e})),t}var dc=class{constructor(){this.triangleSplitter=new rc,this.attributeData=new oc,this.attributes=["position","uv","normal"],this.useGroups=!0,this.debug=new cc}evaluate(e,t,n,i=new Ei){e.prepareGeometry(),t.prepareGeometry();let{triangleSplitter:r,attributeData:o,attributes:a,useGroups:c,debug:l}=this,u=i.geometry,h=e.geometry.attributes;for(let d=0,v=a.length;d<v;d++){let _=a[d],y=h[_];o.initializeArray(_,y.array.constructor)}for(let d in o.attributes)a.includes(d)||o.delete(d);for(let d in u.attributes)a.includes(d)||(u.deleteAttribute(d),u.dispose());o.clear(),l.enabled&&(l.reset(),Uu(l)),Pp(e,t,n,r,o,{useGroups:c}),l.enabled&&Uu(null);let f=!c||e.geometry.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:e.geometry.groups.map(d=>({...d})),p=!c||t.geometry.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.geometry.groups.map(d=>({...d})),g=Ip(f,e.material),x=Ip(p,t.material);p.forEach(d=>{d.materialIndex+=g.length}),cw(u,e.geometry,[...f,...p],o);let m=u.groups;if(c){let d=new Map,v=[...g,...x],_=0;for(let y=0,w=v.length;y<w;y++)!!m.find(T=>T.materialIndex===y)?(d.set(y,_),_++):v[y]=null;for(let y=0,w=m.length;y<w;y++){let S=m[y];S.materialIndex=d.get(S.materialIndex)}i.material=v.filter(y=>y)}return i}evaluateHierarchy(e,t=new Ei){e.updateMatrixWorld(!0);let n=(r,o)=>{let a=r.children;for(let c=0,l=a.length;c<l;c++){let u=a[c];u.isOperationGroup?n(u,o):o(u)}},i=r=>{let o=r.children,a=!1;for(let l=0,u=o.length;l<u;l++){let h=o[l];a=i(h)||a}let c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let l;return n(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return a||c};return i(e),t.geometry=e._cachedGeometry,t.material=e._cachedMaterials,t}reset(){this.triangleSplitter.reset()}};function ku(s,e){if(e===Ud)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wr||e===Da){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Wr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var pc=class extends hn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yu(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new rh(t)})}load(e,t,n,i){let r=this,o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Os.extractUrlBase(e),this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Kn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Op){try{o[Ye.KHR_BINARY_GLTF]=new oh(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new dh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new Xu;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new ah(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new ch;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new lh;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function lw(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wu=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ee(16777215);c.color!==void 0&&u.fromArray(c.color);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Us(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ns(u),l.distance=h;break;case"spot":l=new wa(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Xu=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let i=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Oe))}return Promise.all(i)}},qu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(a,a)}return Promise.all(r)}},ju=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Zu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Oe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ku=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ju=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee(a[0],a[1],a[2]),Promise.all(r)}},$u=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Oe)),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},th=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},nh=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ih=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},sh=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}},rh=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==mn.TRIANGLES&&l.mode!==mn.TRIANGLE_STRIP&&l.mode!==mn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,p=[];for(let g of h){let x=new De,m=new P,d=new Kt,v=new P(1,1,1),_=new ua(g.geometry,g.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,x.compose(m,d,v));for(let y in c)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);tt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Op="glTF",ro=12,Lp={JSON:1313821514,BIN:5130562},oh=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ro,r=new DataView(e,ro),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Lp.JSON){let l=new Uint8Array(e,ro+o,a);this.content=n.decode(l)}else if(c===Lp.BIN){let l=ro+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ah=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=hh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=hh[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=$s[f.componentType];l[h]=p.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(let p in f.attributes){let g=f.attributes[p],x=c[p];x!==void 0&&(g.normalized=x)}h(f)},a,l)})})}},ch=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},lh=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},mc=class extends xi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,g=e*l,x=g-l,m=-2*p+3*f,d=p-f,v=1-m,_=d-f+h;for(let y=0;y!==a;y++){let w=o[x+y+a],S=o[x+y+c]*u,T=o[g+y+a],C=o[g+y]*u;r[y]=v*w+_*S+m*T+d*C}return r}},uw=new Kt,uh=class extends mc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return uw.fromArray(r).normalize().toArray(r),r}},mn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dp={9728:ht,9729:Pt,9984:Ko,9985:nu,9986:dr,9987:fi},Np={33071:nn,33648:vr,10497:$e},Hu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hw={CUBICSPLINE:void 0,LINEAR:Gi,STEP:Rs},Vu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),s.DefaultMaterial}function es(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dw(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function pw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mw(s){let e,t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gu(t.attributes):e=s.indices+":"+Gu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Gu(s.targets[n]);return e}function Gu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function fh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var _w=new De,dh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ls(this.options.manager):this.textureLoader=new Sa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};es(r,a,i),Pi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Os.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Hu[i.type],a=$s[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new rt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Hu[i.type],l=$s[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(p&&p!==h){let d=Math.floor(f/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count,_=t.cache.get(v);_||(x=new l(a,d*p,i.count*p/u),_=new Ar(x,p/u),t.cache.add(v,_)),m=new Rr(_,c,f%p/u,g)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),m=new rt(x,c,g);if(i.sparse!==void 0){let d=Hu.SCALAR,v=$s[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new v(o[1],_,i.sparse.count*d),S=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new rt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,C=w.length;T<C;T++){let M=w[T];if(m.setX(M,S[T*c]),c>=2&&m.setY(M,S[T*c+1]),c>=3&&m.setZ(M,S[T*c+2]),c>=4&&m.setW(M,S[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Dp[f.magFilter]||Pt,u.minFilter=Dp[f.minFilter]||fi,u.wrapS=Np[f.wrapS]||$e,u.wrapT=Np[f.wrapT]||$e,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Bt(x);m.needsUpdate=!0,f(m)}),t.load(Os.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||gw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Dr,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Xi,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return gi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let h=i[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Oe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mt);let u=r.alphaMode||Vu.OPAQUE;if(u===Vu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Vu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==Nt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nt&&(a.emissive=new Ee().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Nt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Oe)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&es(i,h,r),h})}createUniqueName(e){let t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Up(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=mw(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Up(new ot,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?fw(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let x=u[p],m=o[p],d,v=l[p];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new ca(x,v):new qe(x,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?d.geometry=ku(d.geometry,Da):m.mode===mn.TRIANGLE_FAN&&(d.geometry=ku(d.geometry,Wr));else if(m.mode===mn.LINES)d=new Lr(x,v);else if(m.mode===mn.LINE_STRIP)d=new mi(x,v);else if(m.mode===mn.LINE_LOOP)d=new ha(x,v);else if(m.mode===mn.POINTS)d=new fa(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&pw(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Pi(d,r),m.extensions&&es(i,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&es(i,h[0],r),h[0];let f=new It;r.extensions&&es(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(Na.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new pi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new De;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new la(a,c)})}loadAnimation(e){let n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],o=[],a=[],c=[],l=[];for(let u=0,h=n.channels.length;u<h;u++){let f=n.channels[u],p=n.samplers[f.sampler],g=f.target,x=g.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,d=n.parameters!==void 0?n.parameters[p.output]:p.output;g.node!==void 0&&(r.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",d)),c.push(p),l.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(u){let h=u[0],f=u[1],p=u[2],g=u[3],x=u[4],m=[];for(let d=0,v=h.length;d<v;d++){let _=h[d],y=f[d],w=p[d],S=g[d],T=x[d];if(_===void 0)continue;_.updateMatrix();let C;switch(Ci[T.path]){case Ci.weights:C=vi;break;case Ci.rotation:C=In;break;case Ci.position:case Ci.scale:default:C=Mi;break}let M=_.name?_.name:_.uuid,b=S.interpolation!==void 0?hw[S.interpolation]:Gi,k=[];Ci[T.path]===Ci.weights?_.traverse(function(B){B.morphTargetInfluences&&k.push(B.name?B.name:B.uuid)}):k.push(M);let V=w.array;if(w.normalized){let B=fh(V.constructor),G=new Float32Array(V.length);for(let q=0,ie=V.length;q<ie;q++)G[q]=V[q]*B;V=G}for(let B=0,G=k.length;B<G;B++){let q=new C(k[B]+"."+Ci[T.path],y.array,V,b);S.interpolation==="CUBICSPLINE"&&(q.createInterpolant=function(Y){let W=this instanceof In?uh:mc;return new W(this.times,this.values,this.getValueSize()/3,Y)},q.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(q)}}return new va(i,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,_w)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Cr:l.length>1?u=new It:l.length===1?u=l[0]:u=new tt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Pi(u,r),r.extensions&&es(n,u,r),r.matrix!==void 0){let h=new De;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new It;n.name&&(r.name=i.createUniqueName(n.name)),Pi(r,n),n.extensions&&es(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,p]of i.associations)(f instanceof zt||f instanceof Bt)&&h.set(f,p);return u.traverse(f=>{let p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=l(r),r})}};function xw(s,e,t){let n=e.attributes,i=new vt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let u=fh($s[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,c=new P;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let x=fh($s[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Yt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Up(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=hh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Pi(s,e),xw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?dw(s,e.targets,t):s})}var yw=Oe,Qs=class s extends hn{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){let r=this,o=new Kn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){let t=this;function n(F,U){if(F.nodeType!==1)return;let R=y(F),A=!1,$=null;switch(F.nodeName){case"svg":U=g(F,U);break;case"style":r(F);break;case"g":U=g(F,U);break;case"path":U=g(F,U),F.hasAttribute("d")&&($=i(F));break;case"rect":U=g(F,U),$=c(F);break;case"polygon":U=g(F,U),$=l(F);break;case"polyline":U=g(F,U),$=u(F);break;case"circle":U=g(F,U),$=h(F);break;case"ellipse":U=g(F,U),$=f(F);break;case"line":U=g(F,U),$=p(F);break;case"defs":A=!0;break;case"use":U=g(F,U);let ue=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),I=F.viewportElement.getElementById(ue);I?n(I,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+ue);break;default:}$&&(U.fill!==void 0&&U.fill!=="none"&&$.color.setStyle(U.fill,yw),S($,ve),V.push($),$.userData={node:F,style:U});let ce=F.childNodes;for(let J=0;J<ce.length;J++){let ue=ce[J];A&&ue.nodeName!=="style"&&ue.nodeName!=="defs"||n(ue,U)}R&&(G.pop(),G.length>0?ve.copy(G[G.length-1]):ve.identity())}function i(F){let U=new fn,R=new Q,A=new Q,$=new Q,ce=!0,J=!1,ue=F.getAttribute("d");if(ue===""||ue==="none")return null;let I=ue.match(/[a-df-z][^a-df-z]*/ig);for(let te=0,H=I.length;te<H;te++){let j=I[te],Z=j.charAt(0),de=j.slice(1).trim();ce===!0&&(J=!0,ce=!1);let z;switch(Z){case"M":z=m(de);for(let L=0,me=z.length;L<me;L+=2)R.x=z[L+0],R.y=z[L+1],A.x=R.x,A.y=R.y,L===0?U.moveTo(R.x,R.y):U.lineTo(R.x,R.y),L===0&&$.copy(R);break;case"H":z=m(de);for(let L=0,me=z.length;L<me;L++)R.x=z[L],A.x=R.x,A.y=R.y,U.lineTo(R.x,R.y),L===0&&J===!0&&$.copy(R);break;case"V":z=m(de);for(let L=0,me=z.length;L<me;L++)R.y=z[L],A.x=R.x,A.y=R.y,U.lineTo(R.x,R.y),L===0&&J===!0&&$.copy(R);break;case"L":z=m(de);for(let L=0,me=z.length;L<me;L+=2)R.x=z[L+0],R.y=z[L+1],A.x=R.x,A.y=R.y,U.lineTo(R.x,R.y),L===0&&J===!0&&$.copy(R);break;case"C":z=m(de);for(let L=0,me=z.length;L<me;L+=6)U.bezierCurveTo(z[L+0],z[L+1],z[L+2],z[L+3],z[L+4],z[L+5]),A.x=z[L+2],A.y=z[L+3],R.x=z[L+4],R.y=z[L+5],L===0&&J===!0&&$.copy(R);break;case"S":z=m(de);for(let L=0,me=z.length;L<me;L+=4)U.bezierCurveTo(x(R.x,A.x),x(R.y,A.y),z[L+0],z[L+1],z[L+2],z[L+3]),A.x=z[L+0],A.y=z[L+1],R.x=z[L+2],R.y=z[L+3],L===0&&J===!0&&$.copy(R);break;case"Q":z=m(de);for(let L=0,me=z.length;L<me;L+=4)U.quadraticCurveTo(z[L+0],z[L+1],z[L+2],z[L+3]),A.x=z[L+0],A.y=z[L+1],R.x=z[L+2],R.y=z[L+3],L===0&&J===!0&&$.copy(R);break;case"T":z=m(de);for(let L=0,me=z.length;L<me;L+=2){let be=x(R.x,A.x),Ve=x(R.y,A.y);U.quadraticCurveTo(be,Ve,z[L+0],z[L+1]),A.x=be,A.y=Ve,R.x=z[L+0],R.y=z[L+1],L===0&&J===!0&&$.copy(R)}break;case"A":z=m(de,[3,4],7);for(let L=0,me=z.length;L<me;L+=7){if(z[L+5]==R.x&&z[L+6]==R.y)continue;let be=R.clone();R.x=z[L+5],R.y=z[L+6],A.x=R.x,A.y=R.y,o(U,z[L],z[L+1],z[L+2],z[L+3],z[L+4],be,R),L===0&&J===!0&&$.copy(R)}break;case"m":z=m(de);for(let L=0,me=z.length;L<me;L+=2)R.x+=z[L+0],R.y+=z[L+1],A.x=R.x,A.y=R.y,L===0?U.moveTo(R.x,R.y):U.lineTo(R.x,R.y),L===0&&$.copy(R);break;case"h":z=m(de);for(let L=0,me=z.length;L<me;L++)R.x+=z[L],A.x=R.x,A.y=R.y,U.lineTo(R.x,R.y),L===0&&J===!0&&$.copy(R);break;case"v":z=m(de);for(let L=0,me=z.length;L<me;L++)R.y+=z[L],A.x=R.x,A.y=R.y,U.lineTo(R.x,R.y),L===0&&J===!0&&$.copy(R);break;case"l":z=m(de);for(let L=0,me=z.length;L<me;L+=2)R.x+=z[L+0],R.y+=z[L+1],A.x=R.x,A.y=R.y,U.lineTo(R.x,R.y),L===0&&J===!0&&$.copy(R);break;case"c":z=m(de);for(let L=0,me=z.length;L<me;L+=6)U.bezierCurveTo(R.x+z[L+0],R.y+z[L+1],R.x+z[L+2],R.y+z[L+3],R.x+z[L+4],R.y+z[L+5]),A.x=R.x+z[L+2],A.y=R.y+z[L+3],R.x+=z[L+4],R.y+=z[L+5],L===0&&J===!0&&$.copy(R);break;case"s":z=m(de);for(let L=0,me=z.length;L<me;L+=4)U.bezierCurveTo(x(R.x,A.x),x(R.y,A.y),R.x+z[L+0],R.y+z[L+1],R.x+z[L+2],R.y+z[L+3]),A.x=R.x+z[L+0],A.y=R.y+z[L+1],R.x+=z[L+2],R.y+=z[L+3],L===0&&J===!0&&$.copy(R);break;case"q":z=m(de);for(let L=0,me=z.length;L<me;L+=4)U.quadraticCurveTo(R.x+z[L+0],R.y+z[L+1],R.x+z[L+2],R.y+z[L+3]),A.x=R.x+z[L+0],A.y=R.y+z[L+1],R.x+=z[L+2],R.y+=z[L+3],L===0&&J===!0&&$.copy(R);break;case"t":z=m(de);for(let L=0,me=z.length;L<me;L+=2){let be=x(R.x,A.x),Ve=x(R.y,A.y);U.quadraticCurveTo(be,Ve,R.x+z[L+0],R.y+z[L+1]),A.x=be,A.y=Ve,R.x=R.x+z[L+0],R.y=R.y+z[L+1],L===0&&J===!0&&$.copy(R)}break;case"a":z=m(de,[3,4],7);for(let L=0,me=z.length;L<me;L+=7){if(z[L+5]==0&&z[L+6]==0)continue;let be=R.clone();R.x+=z[L+5],R.y+=z[L+6],A.x=R.x,A.y=R.y,o(U,z[L],z[L+1],z[L+2],z[L+3],z[L+4],be,R),L===0&&J===!0&&$.copy(R)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(R.copy($),U.currentPath.currentPoint.copy(R),ce=!0);break;default:console.warn(j)}J=!1}return U}function r(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let U=0;U<F.sheet.cssRules.length;U++){let R=F.sheet.cssRules[U];if(R.type!==1)continue;let A=R.selectorText.split(/,/gm).filter(Boolean).map($=>$.trim());for(let $=0;$<A.length;$++){let ce=Object.fromEntries(Object.entries(R.style).filter(([,J])=>J!==""));B[A[$]]=Object.assign(B[A[$]]||{},ce)}}}function o(F,U,R,A,$,ce,J,ue){if(U==0||R==0){F.lineTo(ue.x,ue.y);return}A=A*Math.PI/180,U=Math.abs(U),R=Math.abs(R);let I=(J.x-ue.x)/2,te=(J.y-ue.y)/2,H=Math.cos(A)*I+Math.sin(A)*te,j=-Math.sin(A)*I+Math.cos(A)*te,Z=U*U,de=R*R,z=H*H,L=j*j,me=z/Z+L/de;if(me>1){let _e=Math.sqrt(me);U=_e*U,R=_e*R,Z=U*U,de=R*R}let be=Z*L+de*z,Ve=(Z*de-be)/be,N=Math.sqrt(Math.max(0,Ve));$===ce&&(N=-N);let E=N*U*j/R,ae=-N*R*H/U,xe=Math.cos(A)*E-Math.sin(A)*ae+(J.x+ue.x)/2,ye=Math.sin(A)*E+Math.cos(A)*ae+(J.y+ue.y)/2,O=a(1,0,(H-E)/U,(j-ae)/R),pe=a((H-E)/U,(j-ae)/R,(-H-E)/U,(-j-ae)/R)%(Math.PI*2);F.currentPath.absellipse(xe,ye,U,R,O,O+pe,ce===0,A)}function a(F,U,R,A){let $=F*R+U*A,ce=Math.sqrt(F*F+U*U)*Math.sqrt(R*R+A*A),J=Math.acos(Math.max(-1,Math.min(1,$/ce)));return F*A-U*R<0&&(J=-J),J}function c(F){let U=_(F.getAttribute("x")||0),R=_(F.getAttribute("y")||0),A=_(F.getAttribute("rx")||F.getAttribute("ry")||0),$=_(F.getAttribute("ry")||F.getAttribute("rx")||0),ce=_(F.getAttribute("width")),J=_(F.getAttribute("height")),ue=1-.551915024494,I=new fn;return I.moveTo(U+A,R),I.lineTo(U+ce-A,R),(A!==0||$!==0)&&I.bezierCurveTo(U+ce-A*ue,R,U+ce,R+$*ue,U+ce,R+$),I.lineTo(U+ce,R+J-$),(A!==0||$!==0)&&I.bezierCurveTo(U+ce,R+J-$*ue,U+ce-A*ue,R+J,U+ce-A,R+J),I.lineTo(U+A,R+J),(A!==0||$!==0)&&I.bezierCurveTo(U+A*ue,R+J,U,R+J-$*ue,U,R+J-$),I.lineTo(U,R+$),(A!==0||$!==0)&&I.bezierCurveTo(U,R+$*ue,U+A*ue,R,U+A,R),I}function l(F){function U(ce,J,ue){let I=_(J),te=_(ue);$===0?A.moveTo(I,te):A.lineTo(I,te),$++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new fn,$=0;return F.getAttribute("points").replace(R,U),A.currentPath.autoClose=!0,A}function u(F){function U(ce,J,ue){let I=_(J),te=_(ue);$===0?A.moveTo(I,te):A.lineTo(I,te),$++}let R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new fn,$=0;return F.getAttribute("points").replace(R,U),A.currentPath.autoClose=!1,A}function h(F){let U=_(F.getAttribute("cx")||0),R=_(F.getAttribute("cy")||0),A=_(F.getAttribute("r")||0),$=new Zn;$.absarc(U,R,A,0,Math.PI*2);let ce=new fn;return ce.subPaths.push($),ce}function f(F){let U=_(F.getAttribute("cx")||0),R=_(F.getAttribute("cy")||0),A=_(F.getAttribute("rx")||0),$=_(F.getAttribute("ry")||0),ce=new Zn;ce.absellipse(U,R,A,$,0,Math.PI*2);let J=new fn;return J.subPaths.push(ce),J}function p(F){let U=_(F.getAttribute("x1")||0),R=_(F.getAttribute("y1")||0),A=_(F.getAttribute("x2")||0),$=_(F.getAttribute("y2")||0),ce=new fn;return ce.moveTo(U,R),ce.lineTo(A,$),ce.currentPath.autoClose=!1,ce}function g(F,U){U=Object.assign({},U);let R={};if(F.hasAttribute("class")){let J=F.getAttribute("class").split(/\s/).filter(Boolean).map(ue=>ue.trim());for(let ue=0;ue<J.length;ue++)R=Object.assign(R,B["."+J[ue]])}F.hasAttribute("id")&&(R=Object.assign(R,B["#"+F.getAttribute("id")]));function A(J,ue,I){I===void 0&&(I=function(H){return H.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),H}),F.hasAttribute(J)&&(U[ue]=I(F.getAttribute(J))),R[J]&&(U[ue]=I(R[J])),F.style&&F.style[J]!==""&&(U[ue]=I(F.style[J]))}function $(J){return Math.max(0,Math.min(1,_(J)))}function ce(J){return Math.max(0,_(J))}return A("fill","fill"),A("fill-opacity","fillOpacity",$),A("fill-rule","fillRule"),A("opacity","opacity",$),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",$),A("stroke-width","strokeWidth",ce),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",ce),A("visibility","visibility"),U}function x(F,U){return F-(U-F)}function m(F,U,R){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);let A={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},$=0,ce=1,J=2,ue=3,I=$,te=!0,H="",j="",Z=[];function de(be,Ve,N){let E=new SyntaxError('Unexpected character "'+be+'" at index '+Ve+".");throw E.partial=N,E}function z(){H!==""&&(j===""?Z.push(Number(H)):Z.push(Number(H)*Math.pow(10,Number(j)))),H="",j=""}let L,me=F.length;for(let be=0;be<me;be++){if(L=F[be],Array.isArray(U)&&U.includes(Z.length%R)&&A.FLAGS.test(L)){I=ce,H=L,z();continue}if(I===$){if(A.WHITESPACE.test(L))continue;if(A.DIGIT.test(L)||A.SIGN.test(L)){I=ce,H=L;continue}if(A.POINT.test(L)){I=J,H=L;continue}A.COMMA.test(L)&&(te&&de(L,be,Z),te=!0)}if(I===ce){if(A.DIGIT.test(L)){H+=L;continue}if(A.POINT.test(L)){H+=L,I=J;continue}if(A.EXP.test(L)){I=ue;continue}A.SIGN.test(L)&&H.length===1&&A.SIGN.test(H[0])&&de(L,be,Z)}if(I===J){if(A.DIGIT.test(L)){H+=L;continue}if(A.EXP.test(L)){I=ue;continue}A.POINT.test(L)&&H[H.length-1]==="."&&de(L,be,Z)}if(I===ue){if(A.DIGIT.test(L)){j+=L;continue}if(A.SIGN.test(L)){if(j===""){j+=L;continue}j.length===1&&A.SIGN.test(j)&&de(L,be,Z)}}A.WHITESPACE.test(L)?(z(),I=$,te=!1):A.COMMA.test(L)?(z(),I=$,te=!0):A.SIGN.test(L)?(z(),I=ce,H=L):A.POINT.test(L)?(z(),I=J,H=L):de(L,be,Z)}return z(),Z}let d=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(F){let U="px";if(typeof F=="string"||F instanceof String)for(let A=0,$=d.length;A<$;A++){let ce=d[A];if(F.endsWith(ce)){U=ce,F=F.substring(0,F.length-ce.length);break}}let R;return U==="px"&&t.defaultUnit!=="px"?R=v.in[t.defaultUnit]/t.defaultDPI:(R=v[U][t.defaultUnit],R<0&&(R=v[U].in*t.defaultDPI)),R*parseFloat(F)}function y(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;let U=w(F);return G.length>0&&U.premultiply(G[G.length-1]),ve.copy(U),G.push(U),U}function w(F){let U=new Fe,R=q;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){let A=_(F.getAttribute("x")),$=_(F.getAttribute("y"));U.translate(A,$)}if(F.hasAttribute("transform")){let A=F.getAttribute("transform").split(")");for(let $=A.length-1;$>=0;$--){let ce=A[$].trim();if(ce==="")continue;let J=ce.indexOf("("),ue=ce.length;if(J>0&&J<ue){let I=ce.slice(0,J),te=m(ce.slice(J+1));switch(R.identity(),I){case"translate":if(te.length>=1){let H=te[0],j=0;te.length>=2&&(j=te[1]),R.translate(H,j)}break;case"rotate":if(te.length>=1){let H=0,j=0,Z=0;H=te[0]*Math.PI/180,te.length>=3&&(j=te[1],Z=te[2]),ie.makeTranslation(-j,-Z),Y.makeRotation(H),W.multiplyMatrices(Y,ie),ie.makeTranslation(j,Z),R.multiplyMatrices(ie,W)}break;case"scale":if(te.length>=1){let H=te[0],j=H;te.length>=2&&(j=te[1]),R.scale(H,j)}break;case"skewX":te.length===1&&R.set(1,Math.tan(te[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":te.length===1&&R.set(1,0,0,Math.tan(te[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":te.length===6&&R.set(te[0],te[2],te[4],te[1],te[3],te[5],0,0,1);break}}U.premultiply(R)}}return U}function S(F,U){function R(J){le.set(J.x,J.y,1).applyMatrix3(U),J.set(le.x,le.y)}function A(J){let ue=J.xRadius,I=J.yRadius,te=Math.cos(J.aRotation),H=Math.sin(J.aRotation),j=new P(ue*te,ue*H,0),Z=new P(-I*H,I*te,0),de=j.applyMatrix3(U),z=Z.applyMatrix3(U),L=q.set(de.x,z.x,0,de.y,z.y,0,0,0,1),me=ie.copy(L).invert(),N=Y.copy(me).transpose().multiply(me).elements,E=k(N[0],N[1],N[4]),ae=Math.sqrt(E.rt1),xe=Math.sqrt(E.rt2);if(J.xRadius=1/ae,J.yRadius=1/xe,J.aRotation=Math.atan2(E.sn,E.cs),!((J.aEndAngle-J.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let O=ie.set(ae,0,0,0,xe,0,0,0,1),pe=Y.set(E.cs,E.sn,0,-E.sn,E.cs,0,0,0,1),_e=O.multiply(pe).multiply(L),re=Ae=>{let{x:Le,y:Ie}=new P(Math.cos(Ae),Math.sin(Ae),0).applyMatrix3(_e);return Math.atan2(Ie,Le)};J.aStartAngle=re(J.aStartAngle),J.aEndAngle=re(J.aEndAngle),T(U)&&(J.aClockwise=!J.aClockwise)}}function $(J){let ue=M(U),I=b(U);J.xRadius*=ue,J.yRadius*=I;let te=ue>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);J.aRotation+=te,T(U)&&(J.aStartAngle*=-1,J.aEndAngle*=-1,J.aClockwise=!J.aClockwise)}let ce=F.subPaths;for(let J=0,ue=ce.length;J<ue;J++){let te=ce[J].curves;for(let H=0;H<te.length;H++){let j=te[H];j.isLineCurve?(R(j.v1),R(j.v2)):j.isCubicBezierCurve?(R(j.v0),R(j.v1),R(j.v2),R(j.v3)):j.isQuadraticBezierCurve?(R(j.v0),R(j.v1),R(j.v2)):j.isEllipseCurve&&(se.set(j.aX,j.aY),R(se),j.aX=se.x,j.aY=se.y,C(U)?A(j):$(j))}}}function T(F){let U=F.elements;return U[0]*U[4]-U[1]*U[3]<0}function C(F){let U=F.elements,R=U[0]*U[3]+U[1]*U[4];if(R===0)return!1;let A=M(F),$=b(F);return Math.abs(R/(A*$))>Number.EPSILON}function M(F){let U=F.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function b(F){let U=F.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function k(F,U,R){let A,$,ce,J,ue,I=F+R,te=F-R,H=Math.sqrt(te*te+4*U*U);return I>0?(A=.5*(I+H),ue=1/A,$=F*ue*R-U*ue*U):I<0?$=.5*(I-H):(A=.5*H,$=-.5*H),te>0?ce=te+H:ce=te-H,Math.abs(ce)>2*Math.abs(U)?(ue=-2*U/ce,J=1/Math.sqrt(1+ue*ue),ce=ue*J):Math.abs(U)===0?(ce=1,J=0):(ue=-.5*ce/U,ce=1/Math.sqrt(1+ue*ue),J=ue*ce),te>0&&(ue=ce,ce=-J,J=ue),{rt1:A,rt2:$,cs:ce,sn:J}}let V=[],B={},G=[],q=new Fe,ie=new Fe,Y=new Fe,W=new Fe,se=new Q,le=new P,ve=new Fe,ee=new DOMParser().parseFromString(e,"image/svg+xml");return n(ee.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:V,xml:ee.documentElement}}static createShapes(e){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(x,m,d,v){let _=x.x,y=m.x,w=d.x,S=v.x,T=x.y,C=m.y,M=d.y,b=v.y,k=(S-w)*(T-M)-(b-M)*(_-w),V=(y-_)*(T-M)-(C-T)*(_-w),B=(b-M)*(y-_)-(S-w)*(C-T),G=k/B,q=V/B;if(B===0&&k!==0||G<=0||G>=1||q<0||q>1)return null;if(k===0&&B===0){for(let ie=0;ie<2;ie++)if(o(ie===0?d:v,x,m),i.loc==n.ORIGIN){let Y=ie===0?d:v;return{x:Y.x,y:Y.y,t:i.t}}else if(i.loc==n.BETWEEN){let Y=+(_+i.t*(y-_)).toPrecision(10),W=+(T+i.t*(C-T)).toPrecision(10);return{x:Y,y:W,t:i.t}}return null}else{for(let W=0;W<2;W++)if(o(W===0?d:v,x,m),i.loc==n.ORIGIN){let se=W===0?d:v;return{x:se.x,y:se.y,t:i.t}}let ie=+(_+G*(y-_)).toPrecision(10),Y=+(T+G*(C-T)).toPrecision(10);return{x:ie,y:Y,t:G}}}function o(x,m,d){let v=d.x-m.x,_=d.y-m.y,y=x.x-m.x,w=x.y-m.y,S=v*w-y*_;if(x.x===m.x&&x.y===m.y){i.loc=n.ORIGIN,i.t=0;return}if(x.x===d.x&&x.y===d.y){i.loc=n.DESTINATION,i.t=1;return}if(S<-Number.EPSILON){i.loc=n.LEFT;return}if(S>Number.EPSILON){i.loc=n.RIGHT;return}if(v*y<0||_*w<0){i.loc=n.BEHIND;return}if(Math.sqrt(v*v+_*_)<Math.sqrt(y*y+w*w)){i.loc=n.BEYOND;return}let T;v!==0?T=y/v:T=w/_,i.loc=n.BETWEEN,i.t=T}function a(x,m){let d=[],v=[];for(let _=1;_<x.length;_++){let y=x[_-1],w=x[_];for(let S=1;S<m.length;S++){let T=m[S-1],C=m[S],M=r(y,w,T,C);M!==null&&d.find(b=>b.t<=M.t+Number.EPSILON&&b.t>=M.t-Number.EPSILON)===void 0&&(d.push(M),v.push(new Q(M.x,M.y)))}}return v}function c(x,m,d){let v=new Q;m.getCenter(v);let _=[];return d.forEach(y=>{y.boundingBox.containsPoint(v)&&a(x,y.points).forEach(S=>{_.push({identifier:y.identifier,isCW:y.isCW,point:S})})}),_.sort((y,w)=>y.point.x-w.point.x),_}function l(x,m,d,v,_){(_==null||_==="")&&(_="nonzero");let y=new Q;x.boundingBox.getCenter(y);let w=[new Q(d,y.y),new Q(v,y.y)],S=c(w,x.boundingBox,m);S.sort((V,B)=>V.point.x-B.point.x);let T=[],C=[];S.forEach(V=>{V.identifier===x.identifier?T.push(V):C.push(V)});let M=T[0].point.x,b=[],k=0;for(;k<C.length&&C[k].point.x<M;)b.length>0&&b[b.length-1]===C[k].identifier?b.pop():b.push(C[k].identifier),k++;if(b.push(x.identifier),_==="evenodd"){let V=b.length%2===0,B=b[b.length-2];return{identifier:x.identifier,isHole:V,for:B}}else if(_==="nonzero"){let V=!0,B=null,G=null;for(let q=0;q<b.length;q++){let ie=b[q];V?(G=m[ie].isCW,V=!1,B=ie):G!==m[ie].isCW&&(G=m[ie].isCW,V=!0)}return{identifier:x.identifier,isHole:V,for:B}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(x=>{let m=x.getPoints(),d=-999999999,v=999999999,_=-999999999,y=999999999;for(let w=0;w<m.length;w++){let S=m[w];S.y>d&&(d=S.y),S.y<v&&(v=S.y),S.x>_&&(_=S.x),S.x<y&&(y=S.x)}return h<=_&&(h=_+1),u>=y&&(u=y-1),{curves:x.curves,points:m,isCW:Tn.isClockWise(m),identifier:-1,boundingBox:new Ea(new Q(y,v),new Q(_,d))}});f=f.filter(x=>x.points.length>1);for(let x=0;x<f.length;x++)f[x].identifier=x;let p=f.map(x=>l(x,f,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(x=>{if(!p[x.identifier].isHole){let d=new Yn;d.curves=x.curves,p.filter(_=>_.isHole&&_.for===x.identifier).forEach(_=>{let y=f[_.identifier],w=new Zn;w.curves=y.curves,d.holes.push(w)}),g.push(d)}}),g}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){let r=[],o=[],a=[];if(s.pointsToStrokeWithBuffers(e,t,n,i,r,o,a)===0)return null;let c=new ot;return c.setAttribute("position",new Je(r,3)),c.setAttribute("normal",new Je(o,3)),c.setAttribute("uv",new Je(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,i,r,o,a,c){let l=new Q,u=new Q,h=new Q,f=new Q,p=new Q,g=new Q,x=new Q,m=new Q,d=new Q,v=new Q,_=new Q,y=new Q,w=new Q,S=new Q,T=new Q,C=new Q,M=new Q;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,e=te(e);let b=e.length;if(b<2)return 0;let k=e[0].equals(e[b-1]),V,B=e[0],G,q=t.strokeWidth/2,ie=1/(b-1),Y=0,W,se,le,ve,ee=!1,ge=0,F=c*3,U=c*2;R(e[0],e[1],l).multiplyScalar(q),m.copy(e[0]).sub(l),d.copy(e[0]).add(l),v.copy(m),_.copy(d);for(let H=1;H<b;H++){V=e[H],H===b-1?k?G=e[1]:G=void 0:G=e[H+1];let j=l;if(R(B,V,j),h.copy(j).multiplyScalar(q),y.copy(V).sub(h),w.copy(V).add(h),W=Y+ie,se=!1,G!==void 0){R(V,G,u),h.copy(u).multiplyScalar(q),S.copy(V).sub(h),T.copy(V).add(h),le=!0,h.subVectors(G,B),j.dot(h)<0&&(le=!1),H===1&&(ee=le),h.subVectors(G,V),h.normalize();let Z=Math.abs(j.dot(h));if(Z>Number.EPSILON){let de=q/Z;h.multiplyScalar(-de),f.subVectors(V,B),p.copy(f).setLength(de).add(h),C.copy(p).negate();let z=p.length(),L=f.length();f.divideScalar(L),g.subVectors(G,V);let me=g.length();switch(g.divideScalar(me),f.dot(C)<L&&g.dot(C)<me&&(se=!0),M.copy(p).add(V),C.add(V),ve=!1,se?le?(T.copy(C),w.copy(C)):(S.copy(C),y.copy(C)):ce(),t.strokeLineJoin){case"bevel":J(le,se,W);break;case"round":ue(le,se),le?$(V,y,S,W,0):$(V,T,w,W,1);break;case"miter":case"miter-clip":default:let be=q*t.strokeMiterLimit/z;if(be<1)if(t.strokeLineJoin!=="miter-clip"){J(le,se,W);break}else ue(le,se),le?(g.subVectors(M,y).multiplyScalar(be).add(y),x.subVectors(M,S).multiplyScalar(be).add(S),A(y,W,0),A(g,W,0),A(V,W,.5),A(V,W,.5),A(g,W,0),A(x,W,0),A(V,W,.5),A(x,W,0),A(S,W,0)):(g.subVectors(M,w).multiplyScalar(be).add(w),x.subVectors(M,T).multiplyScalar(be).add(T),A(w,W,1),A(g,W,1),A(V,W,.5),A(V,W,.5),A(g,W,1),A(x,W,1),A(V,W,.5),A(x,W,1),A(T,W,1));else se?(le?(A(d,Y,1),A(m,Y,0),A(M,W,0),A(d,Y,1),A(M,W,0),A(C,W,1)):(A(d,Y,1),A(m,Y,0),A(M,W,1),A(m,Y,0),A(C,W,0),A(M,W,1)),le?S.copy(M):T.copy(M)):le?(A(y,W,0),A(M,W,0),A(V,W,.5),A(V,W,.5),A(M,W,0),A(S,W,0)):(A(w,W,1),A(M,W,1),A(V,W,.5),A(V,W,.5),A(M,W,1),A(T,W,1)),ve=!0;break}}else ce()}else ce();!k&&H===b-1&&I(e[0],v,_,le,!0,Y),Y=W,B=V,m.copy(S),d.copy(T)}if(!k)I(V,y,w,le,!1,W);else if(se&&r){let H=M,j=C;ee!==le&&(H=C,j=M),le?(ve||ee)&&(j.toArray(r,0*3),j.toArray(r,3*3),ve&&H.toArray(r,1*3)):(ve||!ee)&&(j.toArray(r,1*3),j.toArray(r,3*3),ve&&H.toArray(r,0*3))}return ge;function R(H,j,Z){return Z.subVectors(j,H),Z.set(-Z.y,Z.x).normalize()}function A(H,j,Z){r&&(r[F]=H.x,r[F+1]=H.y,r[F+2]=0,o&&(o[F]=0,o[F+1]=0,o[F+2]=1),F+=3,a&&(a[U]=j,a[U+1]=Z,U+=2)),ge+=3}function $(H,j,Z,de,z){l.copy(j).sub(H).normalize(),u.copy(Z).sub(H).normalize();let L=Math.PI,me=l.dot(u);Math.abs(me)<1&&(L=Math.abs(Math.acos(me))),L/=n,h.copy(j);for(let be=0,Ve=n-1;be<Ve;be++)f.copy(h).rotateAround(H,L),A(h,de,z),A(f,de,z),A(H,de,.5),h.copy(f);A(f,de,z),A(Z,de,z),A(H,de,.5)}function ce(){A(d,Y,1),A(m,Y,0),A(y,W,0),A(d,Y,1),A(y,W,1),A(w,W,0)}function J(H,j,Z){j?H?(A(d,Y,1),A(m,Y,0),A(y,W,0),A(d,Y,1),A(y,W,0),A(C,W,1),A(y,Z,0),A(S,Z,0),A(C,Z,.5)):(A(d,Y,1),A(m,Y,0),A(w,W,1),A(m,Y,0),A(C,W,0),A(w,W,1),A(w,Z,1),A(T,Z,0),A(C,Z,.5)):H?(A(y,Z,0),A(S,Z,0),A(V,Z,.5)):(A(w,Z,1),A(T,Z,0),A(V,Z,.5))}function ue(H,j){j&&(H?(A(d,Y,1),A(m,Y,0),A(y,W,0),A(d,Y,1),A(y,W,0),A(C,W,1),A(y,Y,0),A(V,W,.5),A(C,W,1),A(V,W,.5),A(S,Y,0),A(C,W,1)):(A(d,Y,1),A(m,Y,0),A(w,W,1),A(m,Y,0),A(C,W,0),A(w,W,1),A(w,Y,1),A(C,W,0),A(V,W,.5),A(V,W,.5),A(C,W,0),A(T,Y,1)))}function I(H,j,Z,de,z,L){switch(t.strokeLineCap){case"round":z?$(H,Z,j,L,.5):$(H,j,Z,L,.5);break;case"square":if(z)l.subVectors(j,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),f.subVectors(u,l).add(H),de?(h.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(h.toArray(r,1*3),h.toArray(r,3*3),f.toArray(r,0*3));else{l.subVectors(Z,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),f.subVectors(u,l).add(H);let me=r.length;de?(h.toArray(r,me-1*3),f.toArray(r,me-2*3),f.toArray(r,me-4*3)):(h.toArray(r,me-2*3),f.toArray(r,me-1*3),f.toArray(r,me-4*3))}break;case"butt":default:break}}function te(H){let j=!1;for(let de=1,z=H.length-1;de<z;de++)if(H[de].distanceTo(H[de+1])<i){j=!0;break}if(!j)return H;let Z=[];Z.push(H[0]);for(let de=1,z=H.length-1;de<z;de++)H[de].distanceTo(H[de+1])>=i&&Z.push(H[de]);return Z.push(H[H.length-1]),Z}}};var Dn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};var Ut=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vw=new pi(-1,1,1,-1,0,1),ph=new ot;ph.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3));ph.setAttribute("uv",new Je([0,2,0,0,2,0],2));var gn=class{constructor(e){this._mesh=new qe(ph,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var er=class extends Ut{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Qe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jt.clone(e.uniforms),this.material=new Qe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oo=class extends Ut{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},gc=class extends Ut{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ao=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new er(Dn),this.clock=new ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oo!==void 0&&(o instanceof oo?n=!0:o instanceof gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _c=class extends Ut{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Fp={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var tr=class s extends Ut{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new Ee(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pt(r,o,{type:Dt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new pt(r,o,{type:Dt});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new pt(r,o,{type:Dt});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Fp;this.highPassUniforms=jt.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new Q(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Dn;this.copyUniforms=jt.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Qe({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Zo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ee,this.oldClearAlpha=1,this.basic=new Nt,this.fsQuad=new gn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new Q(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Qe({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Qe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};tr.BlurDirectionX=new Q(1,0);tr.BlurDirectionY=new Q(0,1);var Bp={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			gl_FragColor = LinearTosRGB( gl_FragColor );

		}`};var xc=class extends Ut{constructor(e=bn,t=1){super(),this.toneMapping=e,this.toneMappingExposure=t;let n=Bp;this.uniforms=jt.clone(n.uniforms),this.material=new Qe({uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),e===Ql?this.material.defines.LINEAR_TONE_MAPPING="":e===eu?this.material.defines.REINHARD_TONE_MAPPING="":e===tu?this.material.defines.CINEON_TONE_MAPPING="":e===Gr&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.fsQuad=new gn(this.material)}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=this.toneMappingExposure,this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(c+l)*u,f=c-h,p=l-h,g=e-f,x=t-p,m,d;g>x?(m=1,d=0):(m=0,d=1);let v=g-m+u,_=x-d+u,y=g-1+2*u,w=x-1+2*u,S=c&255,T=l&255,C=this.perm[S+this.perm[T]]%12,M=this.perm[S+m+this.perm[T+d]]%12,b=this.perm[S+1+this.perm[T+1]]%12,k=.5-g*g-x*x;k<0?n=0:(k*=k,n=k*k*this.dot(this.grad3[C],g,x));let V=.5-v*v-_*_;V<0?i=0:(V*=V,i=V*V*this.dot(this.grad3[M],v,_));let B=.5-y*y-w*w;return B<0?r=0:(B*=B,r=B*B*this.dot(this.grad3[b],y,w)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=.3333333333333333,l=(e+t+n)*c,u=Math.floor(e+l),h=Math.floor(t+l),f=Math.floor(n+l),p=1/6,g=(u+h+f)*p,x=u-g,m=h-g,d=f-g,v=e-x,_=t-m,y=n-d,w,S,T,C,M,b;v>=_?_>=y?(w=1,S=0,T=0,C=1,M=1,b=0):v>=y?(w=1,S=0,T=0,C=1,M=0,b=1):(w=0,S=0,T=1,C=1,M=0,b=1):_<y?(w=0,S=0,T=1,C=0,M=1,b=1):v<y?(w=0,S=1,T=0,C=0,M=1,b=1):(w=0,S=1,T=0,C=1,M=1,b=0);let k=v-w+p,V=_-S+p,B=y-T+p,G=v-C+2*p,q=_-M+2*p,ie=y-b+2*p,Y=v-1+3*p,W=_-1+3*p,se=y-1+3*p,le=u&255,ve=h&255,ee=f&255,ge=this.perm[le+this.perm[ve+this.perm[ee]]]%12,F=this.perm[le+w+this.perm[ve+S+this.perm[ee+T]]]%12,U=this.perm[le+C+this.perm[ve+M+this.perm[ee+b]]]%12,R=this.perm[le+1+this.perm[ve+1+this.perm[ee+1]]]%12,A=.6-v*v-_*_-y*y;A<0?i=0:(A*=A,i=A*A*this.dot3(this.grad3[ge],v,_,y));let $=.6-k*k-V*V-B*B;$<0?r=0:($*=$,r=$*$*this.dot3(this.grad3[F],k,V,B));let ce=.6-G*G-q*q-ie*ie;ce<0?o=0:(ce*=ce,o=ce*ce*this.dot3(this.grad3[U],G,q,ie));let J=.6-Y*Y-W*W-se*se;return J<0?a=0:(J*=J,a=J*J*this.dot3(this.grad3[R],Y,W,se)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,h,f,p,g,x=(e+t+n+i)*c,m=Math.floor(e+x),d=Math.floor(t+x),v=Math.floor(n+x),_=Math.floor(i+x),y=(m+d+v+_)*l,w=m-y,S=d-y,T=v-y,C=_-y,M=e-w,b=t-S,k=n-T,V=i-C,B=M>b?32:0,G=M>k?16:0,q=b>k?8:0,ie=M>V?4:0,Y=b>V?2:0,W=k>V?1:0,se=B+G+q+ie+Y+W,le=o[se][0]>=3?1:0,ve=o[se][1]>=3?1:0,ee=o[se][2]>=3?1:0,ge=o[se][3]>=3?1:0,F=o[se][0]>=2?1:0,U=o[se][1]>=2?1:0,R=o[se][2]>=2?1:0,A=o[se][3]>=2?1:0,$=o[se][0]>=1?1:0,ce=o[se][1]>=1?1:0,J=o[se][2]>=1?1:0,ue=o[se][3]>=1?1:0,I=M-le+l,te=b-ve+l,H=k-ee+l,j=V-ge+l,Z=M-F+2*l,de=b-U+2*l,z=k-R+2*l,L=V-A+2*l,me=M-$+3*l,be=b-ce+3*l,Ve=k-J+3*l,N=V-ue+3*l,E=M-1+4*l,ae=b-1+4*l,xe=k-1+4*l,ye=V-1+4*l,O=m&255,pe=d&255,_e=v&255,re=_&255,Ae=a[O+a[pe+a[_e+a[re]]]]%32,Le=a[O+le+a[pe+ve+a[_e+ee+a[re+ge]]]]%32,Ie=a[O+F+a[pe+U+a[_e+R+a[re+A]]]]%32,Ce=a[O+$+a[pe+ce+a[_e+J+a[re+ue]]]]%32,Re=a[O+1+a[pe+1+a[_e+1+a[re+1]]]]%32,Ne=.6-M*M-b*b-k*k-V*V;Ne<0?u=0:(Ne*=Ne,u=Ne*Ne*this.dot4(r[Ae],M,b,k,V));let ke=.6-I*I-te*te-H*H-j*j;ke<0?h=0:(ke*=ke,h=ke*ke*this.dot4(r[Le],I,te,H,j));let X=.6-Z*Z-de*de-z*z-L*L;X<0?f=0:(X*=X,f=X*X*this.dot4(r[Ie],Z,de,z,L));let we=.6-me*me-be*be-Ve*Ve-N*N;we<0?p=0:(we*=we,p=we*we*this.dot4(r[Ce],me,be,Ve,N));let oe=.6-E*E-ae*ae-xe*xe-ye*ye;return oe<0?g=0:(oe*=oe,g=oe*oe*this.dot4(r[Re],E,ae,xe,ye)),27*(u+h+f+p+g)}};var co={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Q},cameraProjectionMatrix:{value:new De},cameraInverseProjectionMatrix:{value:new De},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );

			vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
			vec3 viewNormal = getViewNormal( vUv );

			vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
			vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

			// compute matrix used to reorient a kernel vector

			vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
			vec3 bitangent = cross( viewNormal, tangent );
			mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

		 float occlusion = 0.0;

		 for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

				vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
				vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

				vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
				samplePointNDC /= samplePointNDC.w;

				vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

				float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
				float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
				float delta = sampleDepth - realDepth;

				if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

					occlusion += 1.0;

				}

			}

			occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

			gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

		}`},lo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},uo={uniforms:{tDiffuse:{value:null},resolution:{value:new Q}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};var nr=class s extends Ut{constructor(e,t,n,i){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernelSize=32,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(),this.generateRandomKernelRotations();let r=new Tr;r.format=di,r.type=qn,this.beautyRenderTarget=new pt(this.width,this.height,{type:Dt}),this.normalRenderTarget=new pt(this.width,this.height,{minFilter:ht,magFilter:ht,type:Dt,depthTexture:r}),this.ssaoRenderTarget=new pt(this.width,this.height,{type:Dt}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Qe({defines:Object.assign({},co.defines),uniforms:jt.clone(co.uniforms),vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,blending:Lt}),this.ssaoMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new xa,this.normalMaterial.blending=Lt,this.blurMaterial=new Qe({defines:Object.assign({},uo.defines),uniforms:jt.clone(uo.uniforms),vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Qe({defines:Object.assign({},lo.defines),uniforms:jt.clone(lo.uniforms),vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,blending:Lt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Qe({uniforms:jt.clone(Dn.uniforms),vertexShader:Dn.vertexShader,fragmentShader:Dn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:$l,blendDst:Ca,blendEquation:Mn,blendSrcAlpha:Jl,blendDstAlpha:Ca,blendEquationAlpha:Mn}),this.fsQuad=new gn(null),this.originalClearColor=new Ee}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.capabilities.isWebGL2===!1&&(this.noiseTexture.format=su),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case s.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Lt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Hr,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.beautyRenderTarget.setSize(e,t),this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(){let e=this.kernelSize,t=this.kernel;for(let n=0;n<e;n++){let i=new P;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/e;r=Na.lerp(.1,1,r*r),i.multiplyScalar(r),t.push(i)}}generateRandomKernelRotations(){let n=new yc,i=4*4,r=new Float32Array(i);for(let o=0;o<i;o++){let a=Math.random()*2-1,c=Math.random()*2-1,l=0;r[o]=n.noise3d(a,c,l)}this.noiseTexture=new Pr(r,4,4,ru,Sn),this.noiseTexture.wrapS=$e,this.noiseTexture.wrapT=$e,this.noiseTexture.needsUpdate=!0}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}};nr.OUTPUT={Default:0,SSAO:1,Blur:2,Beauty:3,Depth:4,Normal:5};var vc=class extends Ut{constructor(e,t,n,i){super(),this.scene=e,this.camera=t,this.sampleLevel=4,this.unbiased=!0,this.clearColor=n!==void 0?n:0,this.clearAlpha=i!==void 0?i:0,this._oldClearColor=new Ee;let r=Dn;this.copyUniforms=jt.clone(r.uniforms),this.copyMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Hr,blendEquation:Mn,blendDst:Vr,blendDstAlpha:Vr,blendSrc:Pa,blendSrcAlpha:Vr}),this.fsQuad=new gn(this.copyMaterial)}dispose(){this.sampleRenderTarget&&(this.sampleRenderTarget.dispose(),this.sampleRenderTarget=null),this.copyMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.sampleRenderTarget&&this.sampleRenderTarget.setSize(e,t)}render(e,t,n){this.sampleRenderTarget||(this.sampleRenderTarget=new pt(n.width,n.height,{type:Dt}),this.sampleRenderTarget.texture.name="SSAARenderPass.sample");let i=ww[Math.max(0,Math.min(this.sampleLevel,5))],r=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);let o=e.getClearAlpha(),a=1/i.length,c=1/32;this.copyUniforms.tDiffuse.value=this.sampleRenderTarget.texture;let l={fullWidth:n.width,fullHeight:n.height,offsetX:0,offsetY:0,width:n.width,height:n.height},u=Object.assign({},this.camera.view);u.enabled&&Object.assign(l,u);for(let h=0;h<i.length;h++){let f=i[h];this.camera.setViewOffset&&this.camera.setViewOffset(l.fullWidth,l.fullHeight,l.offsetX+f[0]*.0625,l.offsetY+f[1]*.0625,l.width,l.height);let p=a;if(this.unbiased){let g=-.5+(h+.5)/i.length;p+=c*g}this.copyUniforms.opacity.value=p,e.setClearColor(this.clearColor,this.clearAlpha),e.setRenderTarget(this.sampleRenderTarget),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:t),h===0&&(e.setClearColor(0,0),e.clear()),this.fsQuad.render(e)}this.camera.setViewOffset&&u.enabled?this.camera.setViewOffset(u.fullWidth,u.fullHeight,u.offsetX,u.offsetY,u.width,u.height):this.camera.clearViewOffset&&this.camera.clearViewOffset(),e.autoClear=r,e.setClearColor(this._oldClearColor,o)}},ww=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]];var Nn,ts,mh,Mw=25,zp=1,kp=10,gh=0,_h=[];function Hp(s,e){let t=(s-zp)/1e3;if(gh+=t,zp=s,!window.virtual_office.fast)if(gh>=kp){let i=0;var n=_h.reduce(function(o,a){return o+a},0);i=n/_h.length,i<Mw&&(console.log(i+" FPS too low, switching effects off"),Nn.passes.splice(0,Nn.passes.length),window.virtual_office.fast=!0,e.shadowMap.enabled=!1)}else{let i=1/t;_h.push(i)}gh>=kp&&(window.virtual_office.effects.scaleDone=!0)}function Vp(s,e){var t=new _c(e,window.virtual_office.camera);if(Nn=new ao(s),Nn.setSize(window.innerWidth,window.innerHeight),Nn.addPass(t),!window.virtual_office.fast){s.shadowMap.enabled=!0;let n=new nr(e,window.virtual_office.camera,window.innerWidth,window.innerHeight);n.kernelRadius=20,n.output=nr.OUTPUT.Beauty,Nn.addPass(n);let i=new vc(e,window.virtual_office.camera);i.sampleLevel=1,Nn.addPass(i),mh=new Wi,mh.set(1);let r=new tr(new Q(window.innerWidth,window.innerHeight),1.5,.4,.85);r.threshold=.15,r.strength=.85,r.radius=.85,ts=new ao(s),ts.setSize(window.innerWidth,window.innerHeight),ts.renderToScreen=!1,ts.addPass(t),ts.addPass(r);let o=new er(new Qe({uniforms:{baseTexture:{value:null},bloomTexture:{value:ts.renderTarget2.texture}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,defines:{}}),"baseTexture");o.needsSwap=!0,Nn.addPass(o);let a=new xc(Gr);a.toneMappingExposure=Math.pow(Math.PI/3,4),Nn.addPass(a)}return[Nn,ts,mh]}var ho=class extends hn{constructor(e){super(e)}load(e,t,n,i){let r=this,o=new Kn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){let c=r.parse(JSON.parse(a));t&&t(c)},n,i)}parse(e){return new xh(e)}},xh=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],i=Sw(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}};function Sw(s,e,t){let n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[],a=0,c=0;for(let l=0;l<n.length;l++){let u=n[l];if(u===`
`)a=0,c-=r;else{let h=bw(u,i,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function bw(s,e,t,n,i){let r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}let o=new fn,a,c,l,u,h,f,p,g;if(r.o){let x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,d=x.length;m<d;)switch(x[m++]){case"m":a=x[m++]*e+t,c=x[m++]*e+n,o.moveTo(a,c);break;case"l":a=x[m++]*e+t,c=x[m++]*e+n,o.lineTo(a,c);break;case"q":l=x[m++]*e+t,u=x[m++]*e+n,h=x[m++]*e+t,f=x[m++]*e+n,o.quadraticCurveTo(h,f,l,u);break;case"b":l=x[m++]*e+t,u=x[m++]*e+n,h=x[m++]*e+t,f=x[m++]*e+n,p=x[m++]*e+t,g=x[m++]*e+n,o.bezierCurveTo(h,f,p,g,l,u);break}}return{offsetX:r.ha*e,path:o}}var fo=class extends ga{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}};function Gp(s){var e=new It;Tw(r=>{r.position.set(-6.4,15,1),r.name="neon_sign",window.virtual_office.scene_objects.neon_sign=r,e.add(r)},s),window.virtual_office.scene_objects.tvWebGL=Xp(720),window.virtual_office.scene_objects.tvWebGL.position.y=8,window.virtual_office.scene_objects.tvWebGL.position.z=-14-window.virtual_office.room_depth/2,window.virtual_office.scene_objects.tvWebGL.name="tvWebGL";var t=new kt(20.8,11.7,.02),n=new ln({color:3355443}),i=new qe(t,n);return i.position.set(0,8,.5),i.name="tv",e.add(i),e.name="backWall",e.webGLScreen=window.virtual_office.scene_objects.tvWebGL,window.virtual_office.loaders.gtlf.load("./assets/models/Small Monstera.glb",function(r){let o=r.scene.children[0];o.traverse(function(c){c.isMesh&&(c.castShadow=!0)}),o.name="plant",o.scale.setScalar(7.5),o.position.set(30,-5,window.virtual_office.settings.adjusted_gap),e.add(o);let a=o.clone();a.position.x=-a.position.x,a.rotation.y=-Math.PI/2,e.add(a),window.virtual_office.loaders.stats.gtlf.loaded++}),e}function Tw(s,e){new ho().load("./assets/fonts/Stigmature.json",n=>{let i=new fo("about us",{font:n,size:2.7,height:.5,curveSegments:4});var r=new ln({color:16777215,emissive:14313669,emissiveIntensity:1}),o=new qe(i,r);let a=new Ns(14313669,window.virtual_office.fast?.35:.1);if(a.position.set(5.5,.25,5),a.castShadow=!0,window.virtual_office.debug){let c=new Yi(a.shadow.camera);e.add(c);let l=new Aa(a,5);e.add(l)}o.layers.enable(1),o.add(a),s(o),window.virtual_office.loaders.stats.fonts.loaded++})}function yh(s,e){s.map&&(s.map.magFilter=Pt,s.map.needsUpdate=!0),e=window.virtual_office.fast?e/4:e;let t=e;return s.color.setRGB(s.color.r*t,s.color.g*t,s.color.b*t),s}function Wp(s,e,t){var n=new It;window.virtual_office.scene_objects.desk_labels=[];for(var i=0;i<4;i++){var r=Ew(i);r.rotation.y=Math.PI/2;var o=Xp(i);o.rotation.y=-Math.PI/2,o.position.y=7.7,r.webGLScreen=o,i<2?(r.position.x=-(s*e)*1.25,r.rotation.y+=Math.PI,ni(r,i),o.position.x=-(s*e)-3.25,o.rotation.y=Math.PI/4,ni(o,i),o.position.z+=.175):(r.position.x=s*e*1.25,ni(r,i),o.position.x=s*e+3.25,o.rotation.y=-Math.PI/4,ni(o,i),o.position.z+=.175),(i==0||i==3)&&(r.position.x+=1.25),(i==1||i==2)&&(r.position.x-=1.25),i==0&&(o.position.x+=.5),i==1&&(o.position.x-=2),i==2&&(o.position.x-=.5),i==3&&(o.position.x+=2),r.scale.set(e,e,e),r.children.forEach(a=>{if((a.name=="cpu"||a.name=="screen"||a.name=="base")&&(i<2?a.rotation.y=-Math.PI/4:a.rotation.y=Math.PI/4,a.updateMatrixWorld()),a.type=="DirectionalLight"&&(a.position.set(0,1.6,0),a.updateMatrixWorld(),window.virtual_office.debug)){let c=new Yi(a.shadow.camera);t.add(c);let l=new Ra(a,.25);t.add(l)}}),r.deskIndex=i,n.add(r),n.add(o)}return window.virtual_office.loaders.gtlf.load("./assets/models/Office Chair.glb",function(a){let c=a.scene.children[0];c.scale.setScalar(12),c.traverse(function(u){u.isMesh&&(u.castShadow=!0)}),c.name="chair",c.position.y=-5,c.rotation.y=-Math.PI/2;for(var l=0;l<4;l++){let u=c.clone();switch(u.deskIndex=l,ni(u,l),l<2?(u.rotation.y-=Math.PI,u.position.x=-(s*e)*.7):u.position.x=s*e*.7,(l==0||l==3)&&(u.position.x+=1.25),(l==1||l==2)&&(u.position.x-=1.25),l){case 0:u.position.x-=s*4,u.position.z+=s*2;break;case 1:u.position.x-=s,u.rotation.y+=Math.PI/8,u.position.z+=s;break;case 2:u.position.x+=s*4,u.rotation.y-=Math.PI/12,u.position.z-=s*2;break;case 3:u.position.x+=s,u.rotation.y-=Math.PI/3,u.position.z-=s;break}n.add(u)}window.virtual_office.loaders.stats.gtlf.loaded++}),n}function ni(s,e){e<2?s.position.z=-15+(e===0?-1.5:.5)*window.virtual_office.settings.adjusted_gap:s.position.z=-15+(e===2?-1.5:.5)*window.virtual_office.settings.adjusted_gap}function Ew(s){var e=new It;e.name="desk",window.virtual_office.loaders.gtlf.load("./assets/models/Desk.glb",function(f){let p=f.scene.children[0],g=window.virtual_office.fast?3:1.5;p.traverse(function(x){x.isMesh&&(x.castShadow=!0,yh(x.material,g))}),p.position.y=-.4555,p.rotation.y=-Math.PI,e.add(p),window.virtual_office.loaders.stats.gtlf.loaded++});var t=new kt(.64,.48,.02),n=new ln({color:2236962}),i=new qe(t,n);i.position.set(0,.7,.05),i.castShadow=!0,i.receiveShadow=!1,i.name="screen",e.add(i);var r=new kt(.1,.15,.025),o=new ln({color:6710886}),a=new qe(r,o);a.position.set(0,.4,.0625),a.castShadow=!0,a.receiveShadow=!1,a.name="cpu",e.add(a);var c=new kt(.25,.01,.125),l=new qe(c,o);l.position.set(0,.32,.0625),l.castShadow=!0,l.receiveShadow=!1,l.name="base",e.add(l);var u=(f,p,g)=>{f.scale.setScalar(.1),f.geometry.computeBoundingBox();let x=f.geometry.boundingBox,m=x.max.x-x.min.x;f.rotation.y=Math.PI,p<2?(f.rotation.y-=Math.PI/4,f.translateX(-.05-m/20)):(f.rotation.y+=Math.PI/4,f.translateX(.05-m/20)),f.position.y=1.1,f.updateMatrixWorld(),g.add(f)};Aw(s,u,e),window.virtual_office.loaders.gtlf.load("./assets/models/Ceiling Light.glb",function(f){let p=f.scene.children[0];p.scale.setScalar(1),window.desk=p;let g=window.virtual_office.fast?120:60;p.traverse(function(x){if(x.isMesh&&(x.castShadow=!0,yh(x.material,g),x.name=="CUBezierCurve006_3")){var m=new ln({color:61183,emissive:61183,emissiveIntensity:100,shininess:200});x.material=m,x.layers.enable(1)}}),p.position.set(0,1.95,0),p.name="ceilLightMesh2",e.add(p),window.virtual_office.loaders.stats.gtlf.loaded++});let h=new Us(61183,.015);return h.castShadow=!0,h.name="ceilLightActual",h.target=i,e.add(h),e}function Aw(s,e,t){let n="";switch(s){case 0:n="Case studies";break;case 1:n="Services";break;case 2:n="Portfolio";break;case 3:n="Contact us";break}new ho().load("./assets/fonts/VeraMono.json",r=>{let o=new fo(n,{font:r,size:1.1,height:.2});var a=new ln({color:16777215,emissive:61183,emissiveIntensity:.5}),c=new qe(o,a);c.layers.enable(1),c.name="desk_label",e(c,s,t),window.virtual_office.loaders.stats.fonts.loaded++,window.virtual_office.scene_objects.desk_labels.push({mesh:c,originalPosition:c.position.clone()})})}function Xp(s){let e,t;switch(s){case 0:e="../assets/images/pages/case_studies.png",t="../case_studies.html";break;case 1:e="../assets/images/pages/services.png",t="../services.html";break;case 2:e="../assets/images/pages/portfolio.png",t="../portfolio.html";break;case 3:e="../assets/images/pages/contact_us.png",t="../contact_us.html";break;case 720:e="../assets/images/pages/about_us.png",t="../about_us.html";break}var n=new ln;window.virtual_office.loaders.texture.load(e,o=>{n.needsUpdate=!0,n.map=o});var i=new br(s==720?19.2:6.4,s==720?10.8:4.8),r=new qe(i,yh(n,s==720?12:8));return r.pageUrl=t,r.castShadow=!1,r.receiveShadow=!0,r.name="screenWebGL",window.virtual_office.loaders.stats.screens.loaded++,r}function qp(){window.virtual_office.started=!0,document.getElementById("loadingSign").style.display="none",Rw()}function Yp(s){for(var e in window.virtual_office.tweens)window.virtual_office.tweens[e].update(s)}function jp(){window.virtual_office.tweens.slideBack=Pw();let s=-Math.PI/2;window.virtual_office.tweens.openDoor=Iw(s),window.virtual_office.tweens.enterTheOffice=Cw(),window.virtual_office.tweens.dollyUp=Lw(),window.virtual_office.tweens.panDown=Dw(),vh()}function Rw(){let t=[];for(let r=0;r<30;r++){let o=r/29,a=Math.sin(o*Math.PI)**2,c=Math.random()*.2+.9;t.push(a*c)}let i={emissiveIntensity:0};window.virtual_office.tweens.doorSignFlickerA=new TWEEN.Tween(i).easing(TWEEN.Easing.Quadratic.Out).to({emissiveIntensity:.8},.5*1e3).onUpdate(r=>{ns(r)}),window.virtual_office.tweens.doorSignFlickerB=new TWEEN.Tween(i).delay(.5*1e3).to({emissiveIntensity:0},.1*1e3).onUpdate(r=>{ns(r)}),window.virtual_office.tweens.doorSignFlickerC=new TWEEN.Tween(i).delay((.5+.1)*1e3).easing(TWEEN.Easing.Quadratic.Out).to({emissiveIntensity:.4},.2*1e3).onUpdate(r=>{ns(r)}),window.virtual_office.tweens.doorSignFlickerD=new TWEEN.Tween(i).delay((.5+.1+.2)*1e3).to({emissiveIntensity:0},.1*1e3).onUpdate(r=>{ns(r)}),window.virtual_office.tweens.doorSignFlickerE=new TWEEN.Tween(i).easing(TWEEN.Easing.Quadratic.Out).to({emissiveIntensity:.4},.2*1e3).onUpdate(r=>{ns(r)}),window.virtual_office.tweens.doorSignFlickerF=new TWEEN.Tween(i).to({emissiveIntensity:0},.1*1e3).onUpdate(r=>{ns(r)}),window.virtual_office.tweens.doorSignFlickerG=new TWEEN.Tween(i).easing(TWEEN.Easing.Quadratic.Out).to({emissiveIntensity:1},.2*1e3).onUpdate(r=>{ns(r)}).onComplete(()=>{window.virtual_office.tweens.slideBack.start()}),window.virtual_office.tweens.doorSignFlickerA.chain(window.virtual_office.tweens.doorSignFlickerB),window.virtual_office.tweens.doorSignFlickerB.chain(window.virtual_office.tweens.doorSignFlickerC),window.virtual_office.tweens.doorSignFlickerC.chain(window.virtual_office.tweens.doorSignFlickerD),window.virtual_office.tweens.doorSignFlickerD.chain(window.virtual_office.tweens.doorSignFlickerE),window.virtual_office.tweens.doorSignFlickerE.chain(window.virtual_office.tweens.doorSignFlickerF),window.virtual_office.tweens.doorSignFlickerF.chain(window.virtual_office.tweens.doorSignFlickerG),window.virtual_office.tweens.doorSignFlickerA.start()}function ns(s){window.virtual_office.scene_objects.door_sign.traverse(e=>{e.isMesh&&(e.material.emissiveIntensity=s.emissiveIntensity)})}function Cw(){let s={x:15+window.virtual_office.room_depth/2},e=-20+window.virtual_office.room_depth/2;return new TWEEN.Tween(s,!1).to({x:e},1e3).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{window.virtual_office.camera.position.z=s.x,window.virtual_office.camera.updateProjectionMatrix()}).onComplete(()=>{window.virtual_office.scene_objects.room.material.forEach((t,n)=>{t.opacity>0&&t.name!="floor"&&t.name!="ceiling"&&(window.virtual_office.scene_objects.room.material.side=Rt)})})}function Pw(){let s={x:window.virtual_office.settings.startPosZ+window.virtual_office.room_depth/2},e=15+window.virtual_office.room_depth/2;return new TWEEN.Tween(s,!1).to({x:e},1e3).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{window.virtual_office.camera.position.z=s.x,window.virtual_office.camera.updateProjectionMatrix()}).onComplete(()=>{window.virtual_office.tweens.openDoor.start()})}function Iw(s){return new TWEEN.Tween(window.virtual_office.scene_objects.door.rotation).to({y:s},500).onComplete(()=>{window.virtual_office.tweens.enterTheOffice.start(),window.virtual_office.tweens.panDown.delay(500).start(),window.virtual_office.tweens.dollyUp.delay(500).start()})}function Lw(){return new TWEEN.Tween(window.virtual_office.camera.position).to({y:18},500).onUpdate(()=>{window.virtual_office.camera.updateProjectionMatrix()})}function Dw(){let s=-(Math.PI/30)*window.virtual_office.camera.aspect;return new TWEEN.Tween(window.virtual_office.camera.rotation).to({x:s},500).onUpdate(()=>{window.virtual_office.camera.updateProjectionMatrix()})}function vh(){window.virtual_office.tweens.moveCamera=Nw(),window.virtual_office.tweens.rotateCamera=Uw();let s=-(Math.PI/30)*window.virtual_office.camera.aspect,e={x:0,y:18,z:-20+window.virtual_office.room_depth/2},t={x:s,y:0,z:0};window.virtual_office.tweens.resetCameraPosition=Ow(e),window.virtual_office.tweens.resetCameraRotation=Fw(t)}function Nw(){return new TWEEN.Tween(window.virtual_office.camera.position).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{window.virtual_office.camera.updateProjectionMatrix()}).onComplete(()=>{window.virtual_office.moving=!1})}function Uw(){return new TWEEN.Tween(window.virtual_office.camera.rotation).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{window.virtual_office.camera.updateProjectionMatrix()}).onComplete(()=>{window.virtual_office.moving=!1})}function Ow(s){return new TWEEN.Tween(window.virtual_office.camera.position).to(s,1e3).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{window.virtual_office.camera.updateProjectionMatrix()}).onComplete(()=>{window.virtual_office.moving=!1})}function Fw(s){return new TWEEN.Tween(window.virtual_office.camera.rotation).to(s,1e3).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(()=>{window.virtual_office.camera.updateProjectionMatrix()})}function wh(){window.virtual_office.settings.adjusted_gap=bh(),window.virtual_office.room_depth=8*window.virtual_office.settings.adjusted_gap;var s=window.innerWidth,e=window.innerHeight;if(window.virtual_office.renderers.webgl.setSize(s,e),window.virtual_office.fast||(window.virtual_office.effects.main.setSize(s,e),window.virtual_office.effects.bloom.setSize(s,e)),window.virtual_office.camera.aspect=s/e,window.virtual_office.camera.fov=Sh(window.virtual_office.camera.aspect),!window.virtual_office.selected&&!window.virtual_office.moving){let n=-20;window.virtual_office.camera.position.z=n+window.virtual_office.room_depth/2,window.virtual_office.camera.rotation.x=-(Math.PI/30)*window.virtual_office.camera.aspect}window.virtual_office.camera.updateProjectionMatrix();let t=Th();if(window.virtual_office.scene_objects.room.geometry=t.geometry,!window.virtual_office.started)window.virtual_office.camera.aspect<.88?window.virtual_office.settings.startPosZ=-5:window.virtual_office.settings.startPosZ=-10;else{window.virtual_office.scene_objects.deskGroup.children.forEach(function(i,r){i.name=="desk"&&(ni(i,i.deskIndex),ni(i.webGLScreen,i.deskIndex),i.webGLScreen.position.z+=.175),i.name=="chair"&&ni(i,i.deskIndex)}),window.virtual_office.scene_objects.deskGroup.children.forEach(function(i,r){i.name=="plant"&&(i.position.z=window.virtual_office.settings.adjusted_gap)});let n=-15-window.virtual_office.room_depth/2;window.virtual_office.scene_objects.wallGroup.position.z=n,window.virtual_office.scene_objects.tvWebGL.position.z=n+1,window.virtual_office.scene_objects.door.position.z=-15+window.virtual_office.room_depth/2,window.virtual_office.scene_objects.door_frame.position.z=-15+window.virtual_office.room_depth/2}}function Zp(s){window.virtual_office.raycaster.setFromCamera(new Q(window.virtual_office.pointer.x,window.virtual_office.pointer.y),window.virtual_office.camera);let e=window.virtual_office.raycaster.intersectObjects(s.children);if(e.length>0)for(let t=0;t<e.length;t++)if(window.virtual_office.selected)document.documentElement.style.cursor="inherit",window.virtual_office.hovered||(window.virtual_office.hovered=window.virtual_office.selected);else{if(window.virtual_office.hovered=e[t].object,document.documentElement.style.cursor="default",e[t].object.name=="screen"||e[t].object.name=="desk_part"||e[t].object.name=="desk_label"){document.documentElement.style.cursor="pointer",Bw(e[t].object.parent);break}if(e[t].object.name=="neon_sign"||e[t].object.name=="tv"){document.documentElement.style.cursor="pointer",zw(e[t].object.parent);break}}else window.virtual_office.hovered=!1}function Bw(s){if(window.virtual_office.pointer.z&&!window.virtual_office.moving&&!window.virtual_office.selected){window.virtual_office.moving=!0,window.virtual_office.selected=s;let t=new tt;t.scale.copy(virtual_office.selected.webGLScreen.scale),t.position.copy(virtual_office.selected.webGLScreen.position);var e=window.virtual_office.selected.webGLScreen.rotation.clone();let n=window.virtual_office.camera.fov*(Math.PI/180),i=2*Math.atan(Math.tan(n/2)*window.virtual_office.camera.aspect),r=window.innerWidth/(2*Math.tan(i/2)),o=t.position.x>0?-1:1,a=r*.00625;t.translateX(o*a/1.4),t.translateZ(a/1.4),document.getElementById("pageOverlay").src=window.virtual_office.selected.webGLScreen.pageUrl,window.virtual_office.tweens.rotateCamera.to({x:e.x,y:e.y,z:e.z},1e3).start(),window.virtual_office.tweens.moveCamera.to(t.position,1e3).onComplete(Kp).start()}}function zw(s){if(window.virtual_office.pointer.z&&!window.virtual_office.moving&&!window.virtual_office.selected){window.virtual_office.moving=!0,window.virtual_office.selected=s;let e=window.virtual_office.selected.webGLScreen.position.z,t=window.virtual_office.camera.fov*(Math.PI/180),n=2*Math.atan(Math.tan(t/2)*window.virtual_office.camera.aspect),i=window.innerWidth/(2*Math.tan(n/2));e+=i*.015;let r=new P(0,window.virtual_office.selected.webGLScreen.position.y,e);document.getElementById("pageOverlay").src=window.virtual_office.selected.webGLScreen.pageUrl,window.virtual_office.tweens.rotateCamera.to({x:0,y:0,z:0},1e3).start(),window.virtual_office.tweens.moveCamera.to(r,1e3).onComplete(Kp).start()}}function Mh(){window.virtual_office.moving=!0;var s=-(Math.PI/30)*window.virtual_office.camera.aspect;let e={x:0,y:18,z:-20+window.virtual_office.room_depth/2},t={x:s,y:0,z:0};vh(),window.virtual_office.tweens.resetCameraRotation.start(),window.virtual_office.tweens.resetCameraPosition.onStart(kw).start(),window.virtual_office.selected=!1}function Kp(){document.getElementById("pageOverlay").style.display="block",document.getElementById("exitSign").style.display="block"}function kw(){document.getElementById("pageOverlay").style.display="none",document.getElementById("exitSign").style.display="none"}function Jp(){window.virtual_office.triggers.updateSigns=Vw()}function $p(s){for(var e in window.virtual_office.triggers)window.virtual_office.triggers[e].update(s)}var Hw=.001;function Vw(){return{update:s=>{if(window.virtual_office.hovered&&window.virtual_office.scene_objects.neon_sign&&window.virtual_office.scene_objects.desk_labels&&window.virtual_office.scene_objects.desk_labels.length==4&&window.virtual_office.scene_objects.deskGroup&&window.virtual_office.scene_objects.deskGroup.children.length==12){if(window.virtual_office.hovered.name=="neon_sign"||window.virtual_office.hovered.name=="tv")ir(window.virtual_office.scene_objects.neon_sign.material.emissive,16777215,{r:255,g:255,b:255}),window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity=po(window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity,.5);else{ir(window.virtual_office.scene_objects.neon_sign.material.emissive,14313669,{r:218,g:104,b:197});let e=Math.min(Math.max(1+Math.sin(s/400),0),1);window.virtual_office.scene_objects.neon_sign.material.emissiveIntensity=e}window.virtual_office.scene_objects.deskGroup.children.forEach(e=>{let t=window.virtual_office.hovered&&(window.virtual_office.hovered.name=="screen"||window.virtual_office.hovered.name=="desk_part"||window.virtual_office.hovered.name=="desk_label")&&window.virtual_office.hovered.parent.uuid==e.uuid;e.children.forEach(n=>{n.name=="desk_label"&&(t?ir(n.material.emissive,16777215,{r:255,g:255,b:255}):ir(n.material.emissive,61183,{r:0,g:238,b:255})),n.name=="ceilLightActual"&&(t?n.intensity=po(n.intensity,window.virtual_office.fast?window.virtual_office.settings.light_intensity.fast.desk.active:window.virtual_office.settings.light_intensity.highP.desk.active):n.intensity=po(n.intensity,window.virtual_office.fast?window.virtual_office.settings.light_intensity.fast.desk.normal:window.virtual_office.settings.light_intensity.highP.desk.normal)),n.name=="ceilLightMesh2"&&n.children.forEach(i=>{i.name=="CUBezierCurve006_3"&&(t?(ir(i.material.emissive,16777215,{r:255,g:255,b:255}),i.material.emissiveIntensity=po(i.material.emissiveIntensity,window.virtual_office.fast?1:.5)):(ir(i.material.emissive,61183,{r:0,g:238,b:255}),i.material.emissiveIntensity=po(i.material.emissiveIntensity,.25)))})})})}}}}function ir(s,e,t){if(s.getHex()!=e){let n=Xw(s.getHex()),[i,r]=Ww(n,t);Gw(n,r)&&s.set(`${i.toString(16).toUpperCase().padStart(6,"0")}`)}}function po(s,e){if(s!=e){let t=wc(s,e);Math.abs(s-t)>Hw&&(s=t)}return s}function Gw(s,e){let t=(i,r)=>Math.abs(r-i)>=1;return t(s.r,e.r)||t(s.g,e.g)||t(s.b,e.b)}function wc(s,e,t=.1){let n=t*window.virtual_office.fps;if(s=parseFloat(s),e=parseFloat(e),s!=e){let i=e>=s?1:-1,r=(e-s)/n;s=i===1?Math.min(s+r,e):Math.max(s+r,e)}return s}function Ww(s,e,t=.1){let n={r:wc(s.r,e.r,t),g:wc(s.g,e.g,t),b:wc(s.b,e.b,t)};return[qw(Math.ceil(n.r),Math.ceil(n.g),Math.ceil(n.b)),n]}function Xw(s){let e=s>>16&255,t=s>>8&255,n=s&255;return{r:e,g:t,b:n}}var qw=(s,e,t)=>"#"+[s,e,t].map(n=>{let i=n.toString(16);return i.length===1?"0"+i:i}).join("");var Ah,Ct,Rh,mo,em;window.virtual_office={camera:!1,controls:!1,debug:!1,effects:{main:!1,bloom:!1,bloomLayer:!1,scaleDone:!1},exitSignClick:!1,fast:!1,fps:0,init:tm,loaders:{gltf:!1,texture:!1,stats:{fonts:{target:5,loaded:0},gtlf:{target:10,loaded:0},screens:{target:5,loaded:0},svg:{target:1,loaded:0},textures:{target:9,loaded:0}}},moving:!1,pointer:!1,raycaster:!1,renderers:{webgl:!1},settings:{adjusted_gap:!1,gap:1.3,light_intensity:{fast:{desk:{normal:.015,active:.05}},highP:{desk:{normal:.015,active:.035}}},room_depth:!1,scale:11,startPosZ:-10},scene_objects:{},selected:!1,started:!1,triggers:{},tweens:{}};function tm(){requestAnimationFrame(nm);let s,e=new URL(window.location.href);e.searchParams.has("debug")&&(window.virtual_office.debug=!0,s=Yw()),e.searchParams.has("fast")&&(window.virtual_office.fast=!0),window.virtual_office.loaders.gtlf=new pc,window.virtual_office.loaders.texture=new Ls,Ah=new dc,Ah.useGroups=!0,window.virtual_office.settings.adjusted_gap=bh(),window.virtual_office.room_depth=8*window.virtual_office.settings.adjusted_gap,Qw();var t=window.innerWidth,n=window.innerHeight,i=t/n,r=Sh(i);if(window.virtual_office.camera=new wt(r,i,1,1e3),window.virtual_office.camera.aspect=t/n,i<.88&&(window.virtual_office.settings.startPosZ=-5),window.virtual_office.camera.position.set(0,10.775,window.virtual_office.settings.startPosZ+window.virtual_office.room_depth/2),window.virtual_office.pointer=new P,window.virtual_office.raycaster=new Ta,$w(),window.virtual_office.debug){let h=new Yi(window.virtual_office.camera);Ct.add(h)}[window.virtual_office.effects.main,window.virtual_office.effects.bloom,window.virtual_office.effects.bloomLayer]=new Vp(window.virtual_office.renderers.webgl,Ct),em=new Nt({color:"black"}),mo={},window.virtual_office.controls=new Fa(window.virtual_office.camera,window.virtual_office.renderers.webgl.domElement),window.virtual_office.controls.enabled=window.virtual_office.debug,window.virtual_office.controls.target.set(0,10,0),window.virtual_office.controls.update(),window.virtual_office.debug&&(Rh=new Qd,document.body.appendChild(Rh.dom)),Jp(),jp(),window.addEventListener("orientationchange",wh),window.addEventListener("resize",wh),document.getElementById("exitSign").addEventListener("click",Mh),document.getElementById("exitSign").addEventListener("touchend",Mh);function o(h){window.virtual_office.pointer.x=h.clientX/window.innerWidth*2-1,window.virtual_office.pointer.y=-(h.clientY/window.innerHeight)*2+1}window.addEventListener("pointermove",o);function a(h){window.virtual_office.selected||(h.preventDefault(),window.virtual_office.pointer.x=h.changedTouches[0].clientX/window.innerWidth*2-1,window.virtual_office.pointer.y=-(h.changedTouches[0].clientY/window.innerHeight)*2+1,window.virtual_office.pointer.z=1)}function c(h){window.virtual_office.selected||(h.preventDefault(),window.virtual_office.pointer.x=h.changedTouches[0].clientX/window.innerWidth*2-1,window.virtual_office.pointer.y=-(h.changedTouches[0].clientY/window.innerHeight)*2+1,window.virtual_office.pointer.z=0)}window.addEventListener("touchstart",a,!1),window.addEventListener("touchend",c,!1);function l(h){window.virtual_office.pointer.z=1}function u(h){window.virtual_office.pointer.z=0}window.addEventListener("pointerdown",l,!1),window.addEventListener("pointerup",u,!1)}function Sh(s){var e,t=.88;return s<t?e=Mc(s,.5,t,60,60):s<2?e=Mc(s,t,2,60,45):s<2.25?e=Mc(s,2,2.25,45,40):s<3?e=Mc(s,2.25,5,40,90):e=90,e}function nm(s){if(jw(),requestAnimationFrame(nm),Hp(s,window.virtual_office.renderers.webgl),window.virtual_office.started)$p(s),Yp(s),window.virtual_office.debug||Zp(Ct),window.virtual_office.scene_objects.desk_labels.forEach((t,n)=>{let i=n*(Math.PI/2),r=Math.sin(s*.0025+i)*.01;t.mesh.position.y=t.originalPosition.y+r});else{let t=!1;for(var e in window.virtual_office.loaders.stats)window.virtual_office.loaders.stats[e].loaded==window.virtual_office.loaders.stats[e].target&&window.virtual_office.scene_objects.door_sign&&window.virtual_office.effects.scaleDone&&window.matrix_scene.stage==3?t=!0:t=!1;t&&qp()}window.virtual_office.debug&&Rh.update(),window.matrix_scene.stage>1&&(window.virtual_office.fast?window.virtual_office.renderers.webgl.render(Ct,window.virtual_office.camera):(Ct.traverse(Zw),window.virtual_office.effects.bloom.render(),Ct.traverse(Kw),window.virtual_office.effects.main.render()))}function Yw(){let s={factor:123,title:"hello",color:"#ff0055"},e=new Tweakpane.Pane;return e.addInput(s,"factor"),e.addInput(s,"title"),e.addInput(s,"color"),e}function Mc(s,e,t,n,i){return(s-e)*(i-n)/(t-e)+n}var Eh=0,Qp=performance.now();function jw(){let s=performance.now(),e=s-Qp;Eh++,e>=1e3&&(window.virtual_office.fps=Math.round(Eh*1e3/e),Eh=0,Qp=s)}function Zw(s){s.isMesh&&window.virtual_office.effects.bloomLayer.test(s.layers)===!1&&(mo[s.uuid]=s.material,s.material=em)}function Kw(s){mo[s.uuid]&&(s.material=mo[s.uuid],delete mo[s.uuid])}function bh(){var s=window.innerWidth,e=window.innerHeight,t=window.virtual_office.settings.gap*window.virtual_office.settings.scale;return s<e&&(t*=e/s),t}var ii=8.2,si=20.4,im=.2;function Jw(){var s=new tt;return window.virtual_office.loaders.texture.load("./assets/models/desk-diffuse.jpg",t=>{t.wrapS=$e,t.wrapT=$e,t.repeat.set(ii/8,si/8);var n=new kt(ii,si,im),i=new _i({map:t,name:"door"}),r=new qe(n,i);r.position.set(ii/2,0,0),r.updateMatrixWorld(),s.add(r);let o=new It;o.name="doorFrame",o.position.z=-15+window.virtual_office.room_depth/2;var a=.4,c=.4,l=new kt(ii+2*a,a,c),u=new qe(l,i);u.position.set(0,5+si/2+a,0),o.add(u);var h=new kt(a,si+a,c),f=new Nt({color:8421504}),p=new qe(h,i);p.position.set(-(ii/2)-a/2,-5+si/2-a/2,0),o.add(p);var g=new qe(h,i);g.position.set(ii/2+a/2,-5+si/2-a/2,0),o.add(g),window.virtual_office.scene_objects.door_frame=o,Ct.add(window.virtual_office.scene_objects.door_frame),window.virtual_office.loaders.stats.textures.loaded++,Ct.visible=!0}),new Qs().load("./assets/logo.svg",function(t){let n=new It;n.scale.multiplyScalar(.0025),n.position.x=1.35,n.position.y=7.5,n.position.z=.15,n.scale.y*=-1;let i=0;for(let o of t.paths){let a=o.userData.style.fill;if(a!==void 0&&a!=="none"){let l=new _i({emissiveIntensity:0,emissive:new Ee().setStyle(a)}),u=Qs.createShapes(o);for(let h of u){let f=new _a(h),p=new qe(f,l);p.renderOrder=i++,p.layers.enable(1),n.add(p)}}let c=o.userData.style.stroke;if(c!==void 0&&c!=="none"){let l=new _i({emissiveIntensity:0,emissive:new Ee().setStyle(c)});o.userData.style.strokeWidth*=2;for(let u of o.subPaths){let h=Qs.pointsToStroke(u.getPoints(),o.userData.style);if(h){let f=new qe(h,l);f.renderOrder=i++,f.layers.enable(1),n.add(f)}}}}window.virtual_office.scene_objects.door_sign=n,s.add(n);let r=n.clone();r.scale.multiplyScalar(2.5),r.position.x=-6.85,r.position.y=28.5,r.position.z=1.5,r.name="backWallLogo",window.virtual_office.scene_objects.wallGroup.add(r),window.virtual_office.loaders.stats.svg.loaded++}),s}function Th(){var s=new kt(ii,si,im);let e=new _i({opacity:0,transparent:!0}),t=new Ei(s,e);t.position.set(-ii/2,-5+si/2,-15+window.virtual_office.room_depth/2),t.position.x+=4.1,t.updateMatrixWorld();let n=80,i=37.5,r=new kt(n,i,window.virtual_office.room_depth),o=new ln({shininess:5,side:Mt});o.name="floor",window.virtual_office.loaders.texture.load("./assets/textures/EAK309.png",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(8,8),o.map=p,o.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++});let a=new _i({aoMapIntensity:1.5,normalScale:new Q(7.5,7.5),side:Mt});a.name="ceiling",window.virtual_office.loaders.texture.load("./assets/textures/Ceiling_Drop_Tiles_001_height.png",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(4,4),a.displacementMap=p,a.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++}),window.virtual_office.loaders.texture.load("./assets/textures/Ceiling_Drop_Tiles_001_ambientOcclusion.jpg",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(4,4),a.aoMap=p,a.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++}),window.virtual_office.loaders.texture.load("./assets/textures/Ceiling_Drop_Tiles_001_basecolor.jpg",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(4,4),a.map=p,a.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++}),window.virtual_office.loaders.texture.load("./assets/textures/Ceiling_Drop_Tiles_001_normal.jpg",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(4,4),a.normalMap=p,a.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++});let c=new gi({alphaTest:.99,aoMapIntensity:.5,color:10530223,displacementScale:.001,name:"backwall",opacity:1,side:Mt,transparent:!0}),l=c.clone();l.name="sidewall",window.virtual_office.loaders.texture.load("./assets/textures/brick_wall_001_displacement_4k.jpg",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(n/10,i/10),c.aoMap=p,c.displacementMap=p,c.needsUpdate=!0;let g=p.clone();g.repeat.set(window.virtual_office.room_depth/10,i/10),l.aoMap=g,l.displacementMap=g,l.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++}),window.virtual_office.loaders.texture.load("./assets/textures/brick_wall_001_nor_gl_4k.jpg",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(n/10,i/10),c.normalMap=p,c.needsUpdate=!0;let g=p.clone();g.repeat.set(window.virtual_office.room_depth/10,i/10),l.normalMap=g,l.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++}),window.virtual_office.loaders.texture.load("./assets/textures/brick_wall_001_rough_4k.jpg",p=>{p.wrapS=$e,p.wrapT=$e,p.repeat.set(n/10,i/10),c.roughnessMap=p,c.needsUpdate=!0;let g=p.clone();g.repeat.set(window.virtual_office.room_depth/10,i/10),l.roughnessMap=g,l.needsUpdate=!0,window.virtual_office.loaders.stats.textures.loaded++});let u=[l,l,a,o,c,c],h=new Ei(r,u);h.position.y=13.75,h.position.z=-15,h.updateMatrixWorld();let f=new qe(new ot,new Nt);return Ah.evaluate(h,t,1,f),f.receiveShadow=!0,f.layers.enable(1),f}function $w(){Ct=new aa,Ct.visible=!1,window.virtual_office.scene_objects.door=Jw(),window.virtual_office.scene_objects.door.position.set(-ii/2,-5+si/2,-15+window.virtual_office.room_depth/2),Ct.add(window.virtual_office.scene_objects.door),window.virtual_office.scene_objects.deskGroup=Wp(window.virtual_office.settings.gap,window.virtual_office.settings.scale,Ct),Ct.add(window.virtual_office.scene_objects.deskGroup);var s=new Ma(window.virtual_office.fast?5592405:4473924);Ct.add(s),window.virtual_office.scene_objects.screens_loaded=0,window.virtual_office.scene_objects.room=Th(),Ct.add(window.virtual_office.scene_objects.room),window.virtual_office.scene_objects.wallGroup=Gp(Ct),window.virtual_office.scene_objects.wallGroup.position.z=-15-window.virtual_office.room_depth/2,Ct.add(window.virtual_office.scene_objects.wallGroup),Ct.add(window.virtual_office.scene_objects.tvWebGL)}function Qw(){window.virtual_office.renderers.webgl=new Er({antialias:window.virtual_office.fast}),window.virtual_office.renderers.webgl.setPixelRatio(window.devicePixelRatio),window.virtual_office.renderers.webgl.setSize(window.innerWidth,window.innerHeight),document.querySelector("#webgl").appendChild(window.virtual_office.renderers.webgl.domElement),document.querySelector("body").style.overflow="hidden"}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
