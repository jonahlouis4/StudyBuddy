(this["webpackJsonpstudy-buddy"]=this["webpackJsonpstudy-buddy"]||[]).push([[2],{75:function(t,e,i){"use strict";i.r(e),i.d(e,"s",(function(){return h}));var r=i(48);function s(t,e){return e.forEach((function(e){e&&"string"!==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(i){if("default"!==i&&!(i in t)){var r=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return e[i]}})}}))})),t}var n=Object(r.d)((function(t){!function(e,i){var r={};!function(t){t.__esModule=!0,t.digestLength=32,t.blockSize=64;var e=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function i(t,i,r,s,n){for(var h,f,a,o,u,c,d,p,b,g,l,y,v;n>=64;){for(h=i[0],f=i[1],a=i[2],o=i[3],u=i[4],c=i[5],d=i[6],p=i[7],g=0;g<16;g++)l=s+4*g,t[g]=(255&r[l])<<24|(255&r[l+1])<<16|(255&r[l+2])<<8|255&r[l+3];for(g=16;g<64;g++)y=((b=t[g-2])>>>17|b<<15)^(b>>>19|b<<13)^b>>>10,v=((b=t[g-15])>>>7|b<<25)^(b>>>18|b<<14)^b>>>3,t[g]=(y+t[g-7]|0)+(v+t[g-16]|0);for(g=0;g<64;g++)y=(((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&c^~u&d)|0)+(p+(e[g]+t[g]|0)|0)|0,v=((h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10))+(h&f^h&a^f&a)|0,p=d,d=c,c=u,u=o+y|0,o=a,a=f,f=h,h=y+v|0;i[0]+=h,i[1]+=f,i[2]+=a,i[3]+=o,i[4]+=u,i[5]+=c,i[6]+=d,i[7]+=p,s+=64,n-=64}return s}var r=function(){function e(){this.digestLength=t.digestLength,this.blockSize=t.blockSize,this.state=new Int32Array(8),this.temp=new Int32Array(64),this.buffer=new Uint8Array(128),this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this.reset()}return e.prototype.reset=function(){return this.state[0]=1779033703,this.state[1]=3144134277,this.state[2]=1013904242,this.state[3]=2773480762,this.state[4]=1359893119,this.state[5]=2600822924,this.state[6]=528734635,this.state[7]=1541459225,this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this},e.prototype.clean=function(){for(var t=0;t<this.buffer.length;t++)this.buffer[t]=0;for(t=0;t<this.temp.length;t++)this.temp[t]=0;this.reset()},e.prototype.update=function(t,e){if(void 0===e&&(e=t.length),this.finished)throw new Error("SHA256: can't update because hash was finished.");var r=0;if(this.bytesHashed+=e,this.bufferLength>0){for(;this.bufferLength<64&&e>0;)this.buffer[this.bufferLength++]=t[r++],e--;64===this.bufferLength&&(i(this.temp,this.state,this.buffer,0,64),this.bufferLength=0)}for(e>=64&&(r=i(this.temp,this.state,t,r,e),e%=64);e>0;)this.buffer[this.bufferLength++]=t[r++],e--;return this},e.prototype.finish=function(t){if(!this.finished){var e=this.bytesHashed,r=this.bufferLength,s=e/536870912|0,n=e<<3,h=e%64<56?64:128;this.buffer[r]=128;for(var f=r+1;f<h-8;f++)this.buffer[f]=0;this.buffer[h-8]=s>>>24&255,this.buffer[h-7]=s>>>16&255,this.buffer[h-6]=s>>>8&255,this.buffer[h-5]=s>>>0&255,this.buffer[h-4]=n>>>24&255,this.buffer[h-3]=n>>>16&255,this.buffer[h-2]=n>>>8&255,this.buffer[h-1]=n>>>0&255,i(this.temp,this.state,this.buffer,0,h),this.finished=!0}for(f=0;f<8;f++)t[4*f+0]=this.state[f]>>>24&255,t[4*f+1]=this.state[f]>>>16&255,t[4*f+2]=this.state[f]>>>8&255,t[4*f+3]=this.state[f]>>>0&255;return this},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype._saveState=function(t){for(var e=0;e<this.state.length;e++)t[e]=this.state[e]},e.prototype._restoreState=function(t,e){for(var i=0;i<this.state.length;i++)this.state[i]=t[i];this.bytesHashed=e,this.finished=!1,this.bufferLength=0},e}();t.Hash=r;var s=function(){function t(t){this.inner=new r,this.outer=new r,this.blockSize=this.inner.blockSize,this.digestLength=this.inner.digestLength;var e=new Uint8Array(this.blockSize);if(t.length>this.blockSize)(new r).update(t).finish(e).clean();else for(var i=0;i<t.length;i++)e[i]=t[i];for(i=0;i<e.length;i++)e[i]^=54;this.inner.update(e);for(i=0;i<e.length;i++)e[i]^=106;this.outer.update(e),this.istate=new Uint32Array(8),this.ostate=new Uint32Array(8),this.inner._saveState(this.istate),this.outer._saveState(this.ostate);for(i=0;i<e.length;i++)e[i]=0}return t.prototype.reset=function(){return this.inner._restoreState(this.istate,this.inner.blockSize),this.outer._restoreState(this.ostate,this.outer.blockSize),this},t.prototype.clean=function(){for(var t=0;t<this.istate.length;t++)this.ostate[t]=this.istate[t]=0;this.inner.clean(),this.outer.clean()},t.prototype.update=function(t){return this.inner.update(t),this},t.prototype.finish=function(t){return this.outer.finished?this.outer.finish(t):(this.inner.finish(t),this.outer.update(t,this.digestLength).finish(t)),this},t.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},t}();function n(t){var e=(new r).update(t),i=e.digest();return e.clean(),i}function h(t,e){var i=new s(t).update(e),r=i.digest();return i.clean(),r}function f(t,e,i,r){var s=r[0];if(0===s)throw new Error("hkdf: cannot expand more");e.reset(),s>1&&e.update(t),i&&e.update(i),e.update(r),e.finish(t),r[0]++}t.HMAC=s,t.hash=n,t.default=n,t.hmac=h;var a=new Uint8Array(t.digestLength);function o(t,e,i,r){void 0===e&&(e=a),void 0===r&&(r=32);for(var n=new Uint8Array([1]),o=h(e,t),u=new s(o),c=new Uint8Array(u.digestLength),d=c.length,p=new Uint8Array(r),b=0;b<r;b++)d===c.length&&(f(c,u,i,n),d=0),p[b]=c[d++];return u.clean(),c.fill(0),n.fill(0),p}function u(t,e,i,r){for(var n=new s(t),h=n.digestLength,f=new Uint8Array(4),a=new Uint8Array(h),o=new Uint8Array(h),u=new Uint8Array(r),c=0;c*h<r;c++){var d=c+1;f[0]=d>>>24&255,f[1]=d>>>16&255,f[2]=d>>>8&255,f[3]=d>>>0&255,n.reset(),n.update(e),n.update(f),n.finish(o);for(var p=0;p<h;p++)a[p]=o[p];for(p=2;p<=i;p++){n.reset(),n.update(o).finish(o);for(var b=0;b<h;b++)a[b]^=o[b]}for(p=0;p<h&&c*h+p<r;p++)u[c*h+p]=a[p]}for(c=0;c<h;c++)a[c]=o[c]=0;for(c=0;c<4;c++)f[c]=0;return n.clean(),u}t.hkdf=o,t.pbkdf2=u}(r);var s=r.default;for(var n in r)s[n]=r[n];t.exports=s}(r.c)})),h=s({__proto__:null,default:Object(r.e)(n)},[n])}}]);
//# sourceMappingURL=2.a869abba.chunk.js.map