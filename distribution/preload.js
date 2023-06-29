(()=>{var t={134:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HOTP:()=>yt,Secret:()=>vt,TOTP:()=>Nt,URI:()=>Ut,version:()=>Lt});const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function i(t,e,n,r){let i,s,o;const u=e||[0],h=(n=n||0)>>>3,a=-1===r?3:0;for(i=0;i<t.length;i+=1)o=i+h,s=o>>>2,u.length<=s&&u.push(0),u[s]|=t[i]<<8*(a+r*(o%4));return{value:u,binLen:8*t.length+n}}function s(t,e,n){switch(e){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(t){case"HEX":return function(t,e,r){return function(t,e,n,r){let i,s,o,u;if(0!=t.length%2)throw new Error("String of HEX type must be in byte increments");const h=e||[0],a=(n=n||0)>>>3,c=-1===r?3:0;for(i=0;i<t.length;i+=2){if(s=parseInt(t.substr(i,2),16),isNaN(s))throw new Error("String of HEX type contains invalid characters");for(u=(i>>>1)+a,o=u>>>2;h.length<=o;)h.push(0);h[o]|=s<<8*(c+r*(u%4))}return{value:h,binLen:4*t.length+n}}(t,e,r,n)};case"TEXT":return function(t,r,i){return function(t,e,n,r,i){let s,o,u,h,a,c,l,f,w=0;const d=n||[0],g=(r=r||0)>>>3;if("UTF8"===e)for(l=-1===i?3:0,u=0;u<t.length;u+=1)for(s=t.charCodeAt(u),o=[],128>s?o.push(s):2048>s?(o.push(192|s>>>6),o.push(128|63&s)):55296>s||57344<=s?o.push(224|s>>>12,128|s>>>6&63,128|63&s):(u+=1,s=65536+((1023&s)<<10|1023&t.charCodeAt(u)),o.push(240|s>>>18,128|s>>>12&63,128|s>>>6&63,128|63&s)),h=0;h<o.length;h+=1){for(c=w+g,a=c>>>2;d.length<=a;)d.push(0);d[a]|=o[h]<<8*(l+i*(c%4)),w+=1}else for(l=-1===i?2:0,f="UTF16LE"===e&&1!==i||"UTF16LE"!==e&&1===i,u=0;u<t.length;u+=1){for(s=t.charCodeAt(u),!0===f&&(h=255&s,s=h<<8|s>>>8),c=w+g,a=c>>>2;d.length<=a;)d.push(0);d[a]|=s<<8*(l+i*(c%4)),w+=2}return{value:d,binLen:8*w+r}}(t,e,r,i,n)};case"B64":return function(t,e,i){return function(t,e,n,i){let s,o,u,h,a,c,l,f=0;const w=e||[0],d=(n=n||0)>>>3,g=-1===i?3:0,p=t.indexOf("=");if(-1===t.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(t=t.replace(/=/g,""),-1!==p&&p<t.length)throw new Error("Invalid '=' found in base-64 string");for(o=0;o<t.length;o+=4){for(a=t.substr(o,4),h=0,u=0;u<a.length;u+=1)s=r.indexOf(a.charAt(u)),h|=s<<18-6*u;for(u=0;u<a.length-1;u+=1){for(l=f+d,c=l>>>2;w.length<=c;)w.push(0);w[c]|=(h>>>16-8*u&255)<<8*(g+i*(l%4)),f+=1}}return{value:w,binLen:8*f+n}}(t,e,i,n)};case"BYTES":return function(t,e,r){return function(t,e,n,r){let i,s,o,u;const h=e||[0],a=(n=n||0)>>>3,c=-1===r?3:0;for(s=0;s<t.length;s+=1)i=t.charCodeAt(s),u=s+a,o=u>>>2,h.length<=o&&h.push(0),h[o]|=i<<8*(c+r*(u%4));return{value:h,binLen:8*t.length+n}}(t,e,r,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(t){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t,e,r){return function(t,e,n,r){return i(new Uint8Array(t),e,n,r)}(t,e,r,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(t){throw new Error("UINT8ARRAY not supported by this environment")}return function(t,e,r){return i(t,e,r,n)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function o(t,e,n,i){switch(t){case"HEX":return function(t){return function(t,e,n,r){const i="0123456789abcdef";let s,o,u="";const h=e/8,a=-1===n?3:0;for(s=0;s<h;s+=1)o=t[s>>>2]>>>8*(a+n*(s%4)),u+=i.charAt(o>>>4&15)+i.charAt(15&o);return r.outputUpper?u.toUpperCase():u}(t,e,n,i)};case"B64":return function(t){return function(t,e,n,i){let s,o,u,h,a,c="";const l=e/8,f=-1===n?3:0;for(s=0;s<l;s+=3)for(h=s+1<l?t[s+1>>>2]:0,a=s+2<l?t[s+2>>>2]:0,u=(t[s>>>2]>>>8*(f+n*(s%4))&255)<<16|(h>>>8*(f+n*((s+1)%4))&255)<<8|a>>>8*(f+n*((s+2)%4))&255,o=0;o<4;o+=1)c+=8*s+6*o<=e?r.charAt(u>>>6*(3-o)&63):i.b64Pad;return c}(t,e,n,i)};case"BYTES":return function(t){return function(t,e,n){let r,i,s="";const o=e/8,u=-1===n?3:0;for(r=0;r<o;r+=1)i=t[r>>>2]>>>8*(u+n*(r%4))&255,s+=String.fromCharCode(i);return s}(t,e,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(t){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t){return function(t,e,n){let r;const i=e/8,s=new ArrayBuffer(i),o=new Uint8Array(s),u=-1===n?3:0;for(r=0;r<i;r+=1)o[r]=t[r>>>2]>>>8*(u+n*(r%4))&255;return s}(t,e,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(t){throw new Error("UINT8ARRAY not supported by this environment")}return function(t){return function(t,e,n){let r;const i=e/8,s=-1===n?3:0,o=new Uint8Array(i);for(r=0;r<i;r+=1)o[r]=t[r>>>2]>>>8*(s+n*(r%4))&255;return o}(t,e,n)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}const u=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],a=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],c="Chosen SHA variant is not supported";function l(t,e){let n,r;const i=t.binLen>>>3,s=e.binLen>>>3,o=i<<3,u=4-i<<3;if(i%4!=0){for(n=0;n<s;n+=4)r=i+n>>>2,t.value[r]|=e.value[n>>>2]<<o,t.value.push(0),t.value[r+1]|=e.value[n>>>2]>>>u;return(t.value.length<<2)-4>=s+i&&t.value.pop(),{value:t.value,binLen:t.binLen+e.binLen}}return{value:t.value.concat(e.value),binLen:t.binLen+e.binLen}}function f(t){const e={outputUpper:!1,b64Pad:"=",outputLen:-1},n=t||{},r="Output length must be a multiple of 8";if(e.outputUpper=n.outputUpper||!1,n.b64Pad&&(e.b64Pad=n.b64Pad),n.outputLen){if(n.outputLen%8!=0)throw new Error(r);e.outputLen=n.outputLen}else if(n.shakeLen){if(n.shakeLen%8!=0)throw new Error(r);e.outputLen=n.shakeLen}if("boolean"!=typeof e.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof e.b64Pad)throw new Error("Invalid b64Pad formatting option");return e}function w(t,e,n,r){const i=t+" must include a value and format";if(!e){if(!r)throw new Error(i);return r}if(void 0===e.value||!e.format)throw new Error(i);return s(e.format,e.encoding||"UTF8",n)(e.value)}class d{constructor(t,e,n){const r=n||{};if(this.t=e,this.i=r.encoding||"UTF8",this.numRounds=r.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=t,this.h=[],this.u=0,this.l=!1,this.A=0,this.H=!1,this.S=[],this.p=[]}update(t){let e,n=0;const r=this.m>>>5,i=this.C(t,this.h,this.u),s=i.binLen,o=i.value,u=s>>>5;for(e=0;e<u;e+=r)n+this.m<=s&&(this.R=this.U(o.slice(e,e+r),this.R),n+=this.m);return this.A+=n,this.h=o.slice(n>>>5),this.u=s%this.m,this.l=!0,this}getHash(t,e){let n,r,i=this.v;const s=f(e);if(this.K){if(-1===s.outputLen)throw new Error("Output length must be specified in options");i=s.outputLen}const u=o(t,i,this.T,s);if(this.H&&this.F)return u(this.F(s));for(r=this.g(this.h.slice(),this.u,this.A,this.B(this.R),i),n=1;n<this.numRounds;n+=1)this.K&&i%32!=0&&(r[r.length-1]&=16777215>>>24-i%32),r=this.g(r,i,0,this.L(this.o),i);return u(r)}setHMACKey(t,e,n){if(!this.M)throw new Error("Variant does not support HMAC");if(this.l)throw new Error("Cannot set MAC key after calling update");const r=s(e,(n||{}).encoding||"UTF8",this.T);this.k(r(t))}k(t){const e=this.m>>>3,n=e/4-1;let r;if(1!==this.numRounds)throw new Error("Cannot set numRounds with MAC");if(this.H)throw new Error("MAC key already set");for(e<t.binLen/8&&(t.value=this.g(t.value,t.binLen,0,this.L(this.o),this.v));t.value.length<=n;)t.value.push(0);for(r=0;r<=n;r+=1)this.S[r]=909522486^t.value[r],this.p[r]=1549556828^t.value[r];this.R=this.U(this.S,this.R),this.A=this.m,this.H=!0}getHMAC(t,e){const n=f(e);return o(t,this.v,this.T,n)(this.Y())}Y(){let t;if(!this.H)throw new Error("Cannot call getHMAC without first setting MAC key");const e=this.g(this.h.slice(),this.u,this.A,this.B(this.R),this.v);return t=this.U(this.p,this.L(this.o)),t=this.g(e,this.v,this.m,t,this.v),t}}function g(t,e){return t<<e|t>>>32-e}function p(t,e){return t>>>e|t<<32-e}function m(t,e){return t>>>e}function A(t,e,n){return t^e^n}function b(t,e,n){return t&e^~t&n}function v(t,e,n){return t&e^t&n^e&n}function I(t){return p(t,2)^p(t,13)^p(t,22)}function y(t,e){const n=(65535&t)+(65535&e);return(65535&(t>>>16)+(e>>>16)+(n>>>16))<<16|65535&n}function N(t,e,n,r){const i=(65535&t)+(65535&e)+(65535&n)+(65535&r);return(65535&(t>>>16)+(e>>>16)+(n>>>16)+(r>>>16)+(i>>>16))<<16|65535&i}function H(t,e,n,r,i){const s=(65535&t)+(65535&e)+(65535&n)+(65535&r)+(65535&i);return(65535&(t>>>16)+(e>>>16)+(n>>>16)+(r>>>16)+(i>>>16)+(s>>>16))<<16|65535&s}function E(t){return p(t,7)^p(t,18)^m(t,3)}function S(t){return p(t,6)^p(t,11)^p(t,25)}function R(t){return[1732584193,4023233417,2562383102,271733878,3285377520]}function T(t,e){let n,r,i,s,o,u,h;const a=[];for(n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],h=0;h<80;h+=1)a[h]=h<16?t[h]:g(a[h-3]^a[h-8]^a[h-14]^a[h-16],1),u=h<20?H(g(n,5),b(r,i,s),o,1518500249,a[h]):h<40?H(g(n,5),A(r,i,s),o,1859775393,a[h]):h<60?H(g(n,5),v(r,i,s),o,2400959708,a[h]):H(g(n,5),A(r,i,s),o,3395469782,a[h]),o=s,s=i,i=g(r,30),r=n,n=u;return e[0]=y(n,e[0]),e[1]=y(r,e[1]),e[2]=y(i,e[2]),e[3]=y(s,e[3]),e[4]=y(o,e[4]),e}function U(t,e,n,r){let i;const s=15+(e+65>>>9<<4),o=e+n;for(;t.length<=s;)t.push(0);for(t[e>>>5]|=128<<24-e%32,t[s]=4294967295&o,t[s-1]=o/4294967296|0,i=0;i<t.length;i+=16)r=T(t.slice(i,i+16),r);return r}class L extends d{constructor(t,e,n){if("SHA-1"!==t)throw new Error(c);super(t,e,n);const r=n||{};this.M=!0,this.F=this.Y,this.T=-1,this.C=s(this.t,this.i,this.T),this.U=T,this.B=function(t){return t.slice()},this.L=R,this.g=U,this.R=[1732584193,4023233417,2562383102,271733878,3285377520],this.m=512,this.v=160,this.K=!1,r.hmacKey&&this.k(w("hmacKey",r.hmacKey,this.T))}}function C(t){let e;return e="SHA-224"==t?h.slice():a.slice(),e}function K(t,e){let n,r,i,s,o,h,a,c,l,f,w;const d=[];for(n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],h=e[5],a=e[6],c=e[7],w=0;w<64;w+=1)d[w]=w<16?t[w]:N(p(g=d[w-2],17)^p(g,19)^m(g,10),d[w-7],E(d[w-15]),d[w-16]),l=H(c,S(o),b(o,h,a),u[w],d[w]),f=y(I(n),v(n,r,i)),c=a,a=h,h=o,o=y(s,l),s=i,i=r,r=n,n=y(l,f);var g;return e[0]=y(n,e[0]),e[1]=y(r,e[1]),e[2]=y(i,e[2]),e[3]=y(s,e[3]),e[4]=y(o,e[4]),e[5]=y(h,e[5]),e[6]=y(a,e[6]),e[7]=y(c,e[7]),e}class F extends d{constructor(t,e,n){if("SHA-224"!==t&&"SHA-256"!==t)throw new Error(c);super(t,e,n);const r=n||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=s(this.t,this.i,this.T),this.U=K,this.B=function(t){return t.slice()},this.L=C,this.g=function(e,n,r,i){return function(t,e,n,r,i){let s,o;const u=15+(e+65>>>9<<4),h=e+n;for(;t.length<=u;)t.push(0);for(t[e>>>5]|=128<<24-e%32,t[u]=4294967295&h,t[u-1]=h/4294967296|0,s=0;s<t.length;s+=16)r=K(t.slice(s,s+16),r);return o="SHA-224"===i?[r[0],r[1],r[2],r[3],r[4],r[5],r[6]]:r,o}(e,n,r,i,t)},this.R=C(t),this.m=512,this.v="SHA-224"===t?224:256,this.K=!1,r.hmacKey&&this.k(w("hmacKey",r.hmacKey,this.T))}}class M{constructor(t,e){this.N=t,this.I=e}}function B(t,e){let n;return e>32?(n=64-e,new M(t.I<<e|t.N>>>n,t.N<<e|t.I>>>n)):0!==e?(n=32-e,new M(t.N<<e|t.I>>>n,t.I<<e|t.N>>>n)):t}function k(t,e){let n;return e<32?(n=32-e,new M(t.N>>>e|t.I<<n,t.I>>>e|t.N<<n)):(n=64-e,new M(t.I>>>e|t.N<<n,t.N>>>e|t.I<<n))}function P(t,e){return new M(t.N>>>e,t.I>>>e|t.N<<32-e)}function O(t,e,n){return new M(t.N&e.N^t.N&n.N^e.N&n.N,t.I&e.I^t.I&n.I^e.I&n.I)}function _(t){const e=k(t,28),n=k(t,34),r=k(t,39);return new M(e.N^n.N^r.N,e.I^n.I^r.I)}function Y(t,e){let n,r;n=(65535&t.I)+(65535&e.I),r=(t.I>>>16)+(e.I>>>16)+(n>>>16);const i=(65535&r)<<16|65535&n;return n=(65535&t.N)+(65535&e.N)+(r>>>16),r=(t.N>>>16)+(e.N>>>16)+(n>>>16),new M((65535&r)<<16|65535&n,i)}function $(t,e,n,r){let i,s;i=(65535&t.I)+(65535&e.I)+(65535&n.I)+(65535&r.I),s=(t.I>>>16)+(e.I>>>16)+(n.I>>>16)+(r.I>>>16)+(i>>>16);const o=(65535&s)<<16|65535&i;return i=(65535&t.N)+(65535&e.N)+(65535&n.N)+(65535&r.N)+(s>>>16),s=(t.N>>>16)+(e.N>>>16)+(n.N>>>16)+(r.N>>>16)+(i>>>16),new M((65535&s)<<16|65535&i,o)}function x(t,e,n,r,i){let s,o;s=(65535&t.I)+(65535&e.I)+(65535&n.I)+(65535&r.I)+(65535&i.I),o=(t.I>>>16)+(e.I>>>16)+(n.I>>>16)+(r.I>>>16)+(i.I>>>16)+(s>>>16);const u=(65535&o)<<16|65535&s;return s=(65535&t.N)+(65535&e.N)+(65535&n.N)+(65535&r.N)+(65535&i.N)+(o>>>16),o=(t.N>>>16)+(e.N>>>16)+(n.N>>>16)+(r.N>>>16)+(i.N>>>16)+(s>>>16),new M((65535&o)<<16|65535&s,u)}function j(t,e){return new M(t.N^e.N,t.I^e.I)}function X(t){const e=k(t,19),n=k(t,61),r=P(t,6);return new M(e.N^n.N^r.N,e.I^n.I^r.I)}function z(t){const e=k(t,1),n=k(t,8),r=P(t,7);return new M(e.N^n.N^r.N,e.I^n.I^r.I)}function D(t){const e=k(t,14),n=k(t,18),r=k(t,41);return new M(e.N^n.N^r.N,e.I^n.I^r.I)}const G=[new M(u[0],3609767458),new M(u[1],602891725),new M(u[2],3964484399),new M(u[3],2173295548),new M(u[4],4081628472),new M(u[5],3053834265),new M(u[6],2937671579),new M(u[7],3664609560),new M(u[8],2734883394),new M(u[9],1164996542),new M(u[10],1323610764),new M(u[11],3590304994),new M(u[12],4068182383),new M(u[13],991336113),new M(u[14],633803317),new M(u[15],3479774868),new M(u[16],2666613458),new M(u[17],944711139),new M(u[18],2341262773),new M(u[19],2007800933),new M(u[20],1495990901),new M(u[21],1856431235),new M(u[22],3175218132),new M(u[23],2198950837),new M(u[24],3999719339),new M(u[25],766784016),new M(u[26],2566594879),new M(u[27],3203337956),new M(u[28],1034457026),new M(u[29],2466948901),new M(u[30],3758326383),new M(u[31],168717936),new M(u[32],1188179964),new M(u[33],1546045734),new M(u[34],1522805485),new M(u[35],2643833823),new M(u[36],2343527390),new M(u[37],1014477480),new M(u[38],1206759142),new M(u[39],344077627),new M(u[40],1290863460),new M(u[41],3158454273),new M(u[42],3505952657),new M(u[43],106217008),new M(u[44],3606008344),new M(u[45],1432725776),new M(u[46],1467031594),new M(u[47],851169720),new M(u[48],3100823752),new M(u[49],1363258195),new M(u[50],3750685593),new M(u[51],3785050280),new M(u[52],3318307427),new M(u[53],3812723403),new M(u[54],2003034995),new M(u[55],3602036899),new M(u[56],1575990012),new M(u[57],1125592928),new M(u[58],2716904306),new M(u[59],442776044),new M(u[60],593698344),new M(u[61],3733110249),new M(u[62],2999351573),new M(u[63],3815920427),new M(3391569614,3928383900),new M(3515267271,566280711),new M(3940187606,3454069534),new M(4118630271,4000239992),new M(116418474,1914138554),new M(174292421,2731055270),new M(289380356,3203993006),new M(460393269,320620315),new M(685471733,587496836),new M(852142971,1086792851),new M(1017036298,365543100),new M(1126000580,2618297676),new M(1288033470,3409855158),new M(1501505948,4234509866),new M(1607167915,987167468),new M(1816402316,1246189591)];function Z(t){return"SHA-384"===t?[new M(3418070365,h[0]),new M(1654270250,h[1]),new M(2438529370,h[2]),new M(355462360,h[3]),new M(1731405415,h[4]),new M(41048885895,h[5]),new M(3675008525,h[6]),new M(1203062813,h[7])]:[new M(a[0],4089235720),new M(a[1],2227873595),new M(a[2],4271175723),new M(a[3],1595750129),new M(a[4],2917565137),new M(a[5],725511199),new M(a[6],4215389547),new M(a[7],327033209)]}function V(t,e){let n,r,i,s,o,u,h,a,c,l,f,w;const d=[];for(n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],u=e[5],h=e[6],a=e[7],f=0;f<80;f+=1)f<16?(w=2*f,d[f]=new M(t[w],t[w+1])):d[f]=$(X(d[f-2]),d[f-7],z(d[f-15]),d[f-16]),c=x(a,D(o),(p=u,m=h,new M((g=o).N&p.N^~g.N&m.N,g.I&p.I^~g.I&m.I)),G[f],d[f]),l=Y(_(n),O(n,r,i)),a=h,h=u,u=o,o=Y(s,c),s=i,i=r,r=n,n=Y(c,l);var g,p,m;return e[0]=Y(n,e[0]),e[1]=Y(r,e[1]),e[2]=Y(i,e[2]),e[3]=Y(s,e[3]),e[4]=Y(o,e[4]),e[5]=Y(u,e[5]),e[6]=Y(h,e[6]),e[7]=Y(a,e[7]),e}class W extends d{constructor(t,e,n){if("SHA-384"!==t&&"SHA-512"!==t)throw new Error(c);super(t,e,n);const r=n||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=s(this.t,this.i,this.T),this.U=V,this.B=function(t){return t.slice()},this.L=Z,this.g=function(e,n,r,i){return function(t,e,n,r,i){let s,o;const u=31+(e+129>>>10<<5),h=e+n;for(;t.length<=u;)t.push(0);for(t[e>>>5]|=128<<24-e%32,t[u]=4294967295&h,t[u-1]=h/4294967296|0,s=0;s<t.length;s+=32)r=V(t.slice(s,s+32),r);return o="SHA-384"===i?[r[0].N,r[0].I,r[1].N,r[1].I,r[2].N,r[2].I,r[3].N,r[3].I,r[4].N,r[4].I,r[5].N,r[5].I]:[r[0].N,r[0].I,r[1].N,r[1].I,r[2].N,r[2].I,r[3].N,r[3].I,r[4].N,r[4].I,r[5].N,r[5].I,r[6].N,r[6].I,r[7].N,r[7].I],o}(e,n,r,i,t)},this.R=Z(t),this.m=1024,this.v="SHA-384"===t?384:512,this.K=!1,r.hmacKey&&this.k(w("hmacKey",r.hmacKey,this.T))}}const J=[new M(0,1),new M(0,32898),new M(2147483648,32906),new M(2147483648,2147516416),new M(0,32907),new M(0,2147483649),new M(2147483648,2147516545),new M(2147483648,32777),new M(0,138),new M(0,136),new M(0,2147516425),new M(0,2147483658),new M(0,2147516555),new M(2147483648,139),new M(2147483648,32905),new M(2147483648,32771),new M(2147483648,32770),new M(2147483648,128),new M(0,32778),new M(2147483648,2147483658),new M(2147483648,2147516545),new M(2147483648,32896),new M(0,2147483649),new M(2147483648,2147516424)],Q=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function q(t){let e;const n=[];for(e=0;e<5;e+=1)n[e]=[new M(0,0),new M(0,0),new M(0,0),new M(0,0),new M(0,0)];return n}function tt(t){let e;const n=[];for(e=0;e<5;e+=1)n[e]=t[e].slice();return n}function et(t,e){let n,r,i,s;const o=[],u=[];if(null!==t)for(r=0;r<t.length;r+=2)e[(r>>>1)%5][(r>>>1)/5|0]=j(e[(r>>>1)%5][(r>>>1)/5|0],new M(t[r+1],t[r]));for(n=0;n<24;n+=1){for(s=q(),r=0;r<5;r+=1)o[r]=(h=e[r][0],a=e[r][1],c=e[r][2],l=e[r][3],f=e[r][4],new M(h.N^a.N^c.N^l.N^f.N,h.I^a.I^c.I^l.I^f.I));for(r=0;r<5;r+=1)u[r]=j(o[(r+4)%5],B(o[(r+1)%5],1));for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)e[r][i]=j(e[r][i],u[r]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)s[i][(2*r+3*i)%5]=B(e[r][i],Q[r][i]);for(r=0;r<5;r+=1)for(i=0;i<5;i+=1)e[r][i]=j(s[r][i],new M(~s[(r+1)%5][i].N&s[(r+2)%5][i].N,~s[(r+1)%5][i].I&s[(r+2)%5][i].I));e[0][0]=j(e[0][0],J[n])}var h,a,c,l,f;return e}function nt(t){let e,n,r=0;const i=[0,0],s=[4294967295&t,t/4294967296&2097151];for(e=6;e>=0;e--)n=s[e>>2]>>>8*e&255,0===n&&0===r||(i[r+1>>2]|=n<<8*(r+1),r+=1);return r=0!==r?r:1,i[0]|=r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}function rt(t){return l(nt(t.binLen),t)}function it(t,e){let n,r=nt(e);r=l(r,t);const i=e>>>2,s=(i-r.value.length%i)%i;for(n=0;n<s;n++)r.value.push(0);return r.value}class st extends d{constructor(t,e,n){let r=6,i=0;super(t,e,n);const o=n||{};if(1!==this.numRounds){if(o.kmacKey||o.hmacKey)throw new Error("Cannot set numRounds with MAC");if("CSHAKE128"===this.o||"CSHAKE256"===this.o)throw new Error("Cannot set numRounds for CSHAKE variants")}switch(this.T=1,this.C=s(this.t,this.i,this.T),this.U=et,this.B=tt,this.L=q,this.R=q(),this.K=!1,t){case"SHA3-224":this.m=i=1152,this.v=224,this.M=!0,this.F=this.Y;break;case"SHA3-256":this.m=i=1088,this.v=256,this.M=!0,this.F=this.Y;break;case"SHA3-384":this.m=i=832,this.v=384,this.M=!0,this.F=this.Y;break;case"SHA3-512":this.m=i=576,this.v=512,this.M=!0,this.F=this.Y;break;case"SHAKE128":r=31,this.m=i=1344,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"SHAKE256":r=31,this.m=i=1088,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"KMAC128":r=4,this.m=i=1344,this.X(n),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"KMAC256":r=4,this.m=i=1088,this.X(n),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"CSHAKE128":this.m=i=1344,r=this.O(n),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"CSHAKE256":this.m=i=1088,r=this.O(n),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;default:throw new Error(c)}this.g=function(t,e,n,s,o){return function(t,e,n,r,i,s,o){let u,h,a=0;const c=[],l=i>>>5,f=e>>>5;for(u=0;u<f&&e>=i;u+=l)r=et(t.slice(u,u+l),r),e-=i;for(t=t.slice(u),e%=i;t.length<l;)t.push(0);for(u=e>>>3,t[u>>2]^=s<<u%4*8,t[l-1]^=2147483648,r=et(t,r);32*c.length<o&&(h=r[a%5][a/5|0],c.push(h.I),!(32*c.length>=o));)c.push(h.N),a+=1,0==64*a%i&&(et(null,r),a=0);return c}(t,e,0,s,i,r,o)},o.hmacKey&&this.k(w("hmacKey",o.hmacKey,this.T))}O(t,e){const n=function(t){const e=t||{};return{funcName:w("funcName",e.funcName,1,{value:[],binLen:0}),customization:w("Customization",e.customization,1,{value:[],binLen:0})}}(t||{});e&&(n.funcName=e);const r=l(rt(n.funcName),rt(n.customization));if(0!==n.customization.binLen||0!==n.funcName.binLen){const t=it(r,this.m>>>3);for(let e=0;e<t.length;e+=this.m>>>5)this.R=this.U(t.slice(e,e+(this.m>>>5)),this.R),this.A+=this.m;return 4}return 31}X(t){const e=function(t){const e=t||{};return{kmacKey:w("kmacKey",e.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:w("Customization",e.customization,1,{value:[],binLen:0})}}(t||{});this.O(t,e.funcName);const n=it(rt(e.kmacKey),this.m>>>3);for(let t=0;t<n.length;t+=this.m>>>5)this.R=this.U(n.slice(t,t+(this.m>>>5)),this.R),this.A+=this.m;this.H=!0}_(t){const e=l({value:this.h.slice(),binLen:this.u},function(t){let e,n,r=0;const i=[0,0],s=[4294967295&t,t/4294967296&2097151];for(e=6;e>=0;e--)n=s[e>>2]>>>8*e&255,0===n&&0===r||(i[r>>2]|=n<<8*r,r+=1);return r=0!==r?r:1,i[r>>2]|=r<<8*r,{value:r+1>4?i:[i[0]],binLen:8+8*r}}(t.outputLen));return this.g(e.value,e.binLen,this.A,this.B(this.R),t.outputLen)}}class ot{constructor(t,e,n){if("SHA-1"==t)this.P=new L(t,e,n);else if("SHA-224"==t||"SHA-256"==t)this.P=new F(t,e,n);else if("SHA-384"==t||"SHA-512"==t)this.P=new W(t,e,n);else{if("SHA3-224"!=t&&"SHA3-256"!=t&&"SHA3-384"!=t&&"SHA3-512"!=t&&"SHAKE128"!=t&&"SHAKE256"!=t&&"CSHAKE128"!=t&&"CSHAKE256"!=t&&"KMAC128"!=t&&"KMAC256"!=t)throw new Error(c);this.P=new st(t,e,n)}}update(t){return this.P.update(t),this}getHash(t,e){return this.P.getHash(t,e)}setHMACKey(t,e,n){this.P.setHMACKey(t,e,n)}getHMAC(t,e){return this.P.getHMAC(t,e)}}const ut=(()=>{if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"__GLOBALTHIS__",{get(){return this},configurable:!0});try{if("undefined"!=typeof __GLOBALTHIS__)return __GLOBALTHIS__}finally{delete Object.prototype.__GLOBALTHIS__}return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0})(),ht={SHA1:"SHA-1",SHA224:"SHA-224",SHA256:"SHA-256",SHA384:"SHA-384",SHA512:"SHA-512","SHA3-224":"SHA3-224","SHA3-256":"SHA3-256","SHA3-384":"SHA3-384","SHA3-512":"SHA3-512"},at="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",ct=t=>{let e=t.length;for(;"="===t[e-1];)--e;const n=(e<t.length?t.substring(0,e):t).toUpperCase(),r=new ArrayBuffer(5*n.length/8|0),i=new Uint8Array(r);let s=0,o=0,u=0;for(let t=0;t<n.length;t++){const e=at.indexOf(n[t]);if(-1===e)throw new TypeError(`Invalid character found: ${n[t]}`);o=o<<5|e,s+=5,s>=8&&(s-=8,i[u++]=o>>>s)}return r},lt=t=>{const e=new Uint8Array(t);let n=0,r=0,i="";for(let t=0;t<e.length;t++)for(r=r<<8|e[t],n+=8;n>=5;)i+=at[r>>>n-5&31],n-=5;return n>0&&(i+=at[r<<5-n&31]),i},ft=t=>{const e=new ArrayBuffer(t.length/2),n=new Uint8Array(e);for(let e=0;e<t.length;e+=2)n[e/2]=parseInt(t.substring(e,e+2),16);return e},wt=t=>{const e=new Uint8Array(t);let n="";for(let t=0;t<e.length;t++){const r=e[t].toString(16);1===r.length&&(n+="0"),n+=r}return n.toUpperCase()},dt=t=>{const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let e=0;e<t.length;e++)n[e]=255&t.charCodeAt(e);return e},gt=t=>{const e=new Uint8Array(t);let n="";for(let t=0;t<e.length;t++)n+=String.fromCharCode(e[t]);return n},pt=ut.TextEncoder?new ut.TextEncoder("utf-8"):null,mt=ut.TextDecoder?new ut.TextDecoder("utf-8"):null,At=t=>{if(!pt)throw new Error("Encoding API not available");return pt.encode(t).buffer},bt=t=>{if(!mt)throw new Error("Encoding API not available");return mt.decode(t)};class vt{constructor(){let{buffer:t,size:e=20}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.buffer=void 0===t?(t=>{if(!ut.crypto?.getRandomValues)throw new Error("Cryptography API not available");return ut.crypto.getRandomValues(new Uint8Array(t)).buffer})(e):t}static fromLatin1(t){return new vt({buffer:dt(t)})}static fromUTF8(t){return new vt({buffer:At(t)})}static fromBase32(t){return new vt({buffer:ct(t)})}static fromHex(t){return new vt({buffer:ft(t)})}get latin1(){return Object.defineProperty(this,"latin1",{enumerable:!0,value:gt(this.buffer)}),this.latin1}get utf8(){return Object.defineProperty(this,"utf8",{enumerable:!0,value:bt(this.buffer)}),this.utf8}get base32(){return Object.defineProperty(this,"base32",{enumerable:!0,value:lt(this.buffer)}),this.base32}get hex(){return Object.defineProperty(this,"hex",{enumerable:!0,value:wt(this.buffer)}),this.hex}}const It=(t,e)=>{{if(t.length!==e.length)throw new TypeError("Input strings must have the same length");let n=-1,r=0;for(;++n<t.length;)r|=t.charCodeAt(n)^e.charCodeAt(n);return 0===r}};class yt{static get defaults(){return{issuer:"",label:"OTPAuth",algorithm:"SHA1",digits:6,counter:0,window:1}}constructor(){let{issuer:t=yt.defaults.issuer,label:e=yt.defaults.label,secret:n=new vt,algorithm:r=yt.defaults.algorithm,digits:i=yt.defaults.digits,counter:s=yt.defaults.counter}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.issuer=t,this.label=e,this.secret="string"==typeof n?vt.fromBase32(n):n,this.algorithm=r.toUpperCase(),this.digits=i,this.counter=s}static generate(t){let{secret:e,algorithm:n=yt.defaults.algorithm,digits:r=yt.defaults.digits,counter:i=yt.defaults.counter}=t;const s=new Uint8Array(((t,e,n)=>{{const r=ht[t.toUpperCase()];if(void 0===r)throw new TypeError("Unknown hash function");const i=new ot(r,"ARRAYBUFFER");return i.setHMACKey(e,"ARRAYBUFFER"),i.update(n),i.getHMAC("ARRAYBUFFER")}})(n,e.buffer,(t=>{const e=new ArrayBuffer(8),n=new Uint8Array(e);let r=t;for(let t=7;t>=0&&0!==r;t--)n[t]=255&r,r-=n[t],r/=256;return e})(i))),o=15&s[s.byteLength-1];return(((127&s[o])<<24|(255&s[o+1])<<16|(255&s[o+2])<<8|255&s[o+3])%10**r).toString().padStart(r,"0")}generate(){let{counter:t=this.counter++}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return yt.generate({secret:this.secret,algorithm:this.algorithm,digits:this.digits,counter:t})}static validate(t){let{token:e,secret:n,algorithm:r,digits:i,counter:s=yt.defaults.counter,window:o=yt.defaults.window}=t;if(e.length!==i)return null;let u=null;for(let t=s-o;t<=s+o;++t){const o=yt.generate({secret:n,algorithm:r,digits:i,counter:t});It(e,o)&&(u=t-s)}return u}validate(t){let{token:e,counter:n=this.counter,window:r}=t;return yt.validate({token:e,secret:this.secret,algorithm:this.algorithm,digits:this.digits,counter:n,window:r})}toString(){const t=encodeURIComponent;return"otpauth://hotp/"+(this.issuer.length>0?`${t(this.issuer)}:${t(this.label)}?issuer=${t(this.issuer)}&`:`${t(this.label)}?`)+`secret=${t(this.secret.base32)}&`+`algorithm=${t(this.algorithm)}&`+`digits=${t(this.digits)}&`+`counter=${t(this.counter)}`}}class Nt{static get defaults(){return{issuer:"",label:"OTPAuth",algorithm:"SHA1",digits:6,period:30,window:1}}constructor(){let{issuer:t=Nt.defaults.issuer,label:e=Nt.defaults.label,secret:n=new vt,algorithm:r=Nt.defaults.algorithm,digits:i=Nt.defaults.digits,period:s=Nt.defaults.period}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.issuer=t,this.label=e,this.secret="string"==typeof n?vt.fromBase32(n):n,this.algorithm=r.toUpperCase(),this.digits=i,this.period=s}static generate(t){let{secret:e,algorithm:n,digits:r,period:i=Nt.defaults.period,timestamp:s=Date.now()}=t;return yt.generate({secret:e,algorithm:n,digits:r,counter:Math.floor(s/1e3/i)})}generate(){let{timestamp:t=Date.now()}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Nt.generate({secret:this.secret,algorithm:this.algorithm,digits:this.digits,period:this.period,timestamp:t})}static validate(t){let{token:e,secret:n,algorithm:r,digits:i,period:s=Nt.defaults.period,timestamp:o=Date.now(),window:u}=t;return yt.validate({token:e,secret:n,algorithm:r,digits:i,counter:Math.floor(o/1e3/s),window:u})}validate(t){let{token:e,timestamp:n,window:r}=t;return Nt.validate({token:e,secret:this.secret,algorithm:this.algorithm,digits:this.digits,period:this.period,timestamp:n,window:r})}toString(){const t=encodeURIComponent;return"otpauth://totp/"+(this.issuer.length>0?`${t(this.issuer)}:${t(this.label)}?issuer=${t(this.issuer)}&`:`${t(this.label)}?`)+`secret=${t(this.secret.base32)}&`+`algorithm=${t(this.algorithm)}&`+`digits=${t(this.digits)}&`+`period=${t(this.period)}`}}const Ht=/^otpauth:\/\/([ht]otp)\/(.+)\?([A-Z0-9.~_-]+=[^?&]*(?:&[A-Z0-9.~_-]+=[^?&]*)*)$/i,Et=/^[2-7A-Z]+=*$/i,St=/^SHA(?:1|224|256|384|512|3-224|3-256|3-384|3-512)$/i,Rt=/^[+-]?\d+$/,Tt=/^\+?[1-9]\d*$/;class Ut{static parse(t){let e;try{e=t.match(Ht)}catch(t){}if(!Array.isArray(e))throw new URIError("Invalid URI format");const n=e[1].toLowerCase(),r=e[2].split(/(?::|%3A) *(.+)/i,2).map(decodeURIComponent),i=e[3].split("&").reduce(((t,e)=>{const n=e.split(/=(.*)/,2).map(decodeURIComponent),r=n[0].toLowerCase(),i=n[1],s=t;return s[r]=i,s}),{});let s;const o={};if("hotp"===n){if(s=yt,void 0===i.counter||!Rt.test(i.counter))throw new TypeError("Missing or invalid 'counter' parameter");o.counter=parseInt(i.counter,10)}else{if("totp"!==n)throw new TypeError("Unknown OTP type");if(s=Nt,void 0!==i.period){if(!Tt.test(i.period))throw new TypeError("Invalid 'period' parameter");o.period=parseInt(i.period,10)}}if(2===r.length?(o.label=r[1],o.issuer=r[0]):(o.label=r[0],void 0!==i.issuer&&(o.issuer=i.issuer)),void 0===i.secret||!Et.test(i.secret))throw new TypeError("Missing or invalid 'secret' parameter");if(o.secret=i.secret,void 0!==i.algorithm){if(!St.test(i.algorithm))throw new TypeError("Invalid 'algorithm' parameter");o.algorithm=i.algorithm}if(void 0!==i.digits){if(!Tt.test(i.digits))throw new TypeError("Invalid 'digits' parameter");o.digits=parseInt(i.digits,10)}return new s(o)}static stringify(t){if(t instanceof yt||t instanceof Nt)return t.toString();throw new TypeError("Invalid 'HOTP/TOTP' object")}}const Lt="9.1.2"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=n(134);function e(e,n){utools.db.promises.allDocs(n?[n]:null).then((n=>{let r=[];n.forEach((e=>{let n=t.URI.parse(e.url);r.push({title:n.generate(),description:`${e._id}--${n.issuer}`,id:e._id,type:"code"})})),1===r.length?r.push({title:"删除动态码",type:"remove",id:r[0].id}):0===r.length&&r.push({title:"无数据",description:"复制绑定码的URL后打开uTools以添加"}),e(r)}))}window.exports={otp_list:{mode:"list",args:{enter:(t,n)=>{e(n)},search:(t,n,r)=>{e(r,n)},select:(t,e,n)=>{switch(utools.hideMainWindow(),e.type){case"code":const t=e.title;utools.copyText(t),utools.showNotification('"'+t+'" 已复制'),utools.outPlugin();break;case"edit":utools.outPlugin();break;case"remove":utools.db.remove(e.id),utools.showNotification("删除完成"),utools.outPlugin()}},placeholder:"输入序号编辑动态口令"}},otp_add:{mode:"none",args:{enter:t=>{utools.hideMainWindow(),utools.db.promises.allDocs().then((e=>{utools.db.put({_id:`${e.length?e.sort(((t,e)=>Number(t._id)-Number(e._id)))[0]._id+1:1}`,url:t.payload})})),utools.showNotification("添加完成"),utools.outPlugin()}}}}})()})();