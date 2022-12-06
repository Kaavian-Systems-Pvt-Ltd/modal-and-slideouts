(()=> 
{
let e = { '994' : (e , t , o)=> 
{
(t = o (645) (!1)).push ([ e.id , '@import url(https://fonts.googleapis.com/css?family=Fira+Sans);' ]) , t.push ([ e.id , '.overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7)}.modal{position:fixed;left:30.5%;top:30%;background-color:white;border-radius:20px;font-family:\'Fira Sans\';box-shadow:5px 5px 5px 1px rgba(0,0,0,0.5)}.exit{background-color:transparent;border:none;position:fixed;left:61.5%;top:31.5%}.modal--alert--security .exit{position:fixed;left:58.5%;top:21.5%}.modal--info{padding:2% 2% 2% 2%;width:30%;height:20%}.modal--info .modalHeader h2{font-weight:600;font-size:24px;text-align:left;margin-top:0%}.modal--alert{padding:2% 2% 2% 2%;width:30%;height:25%}.modal--alert .modalBody{margin:8% 5% 8%}.modal--alert--btn{position:fixed;left:44%;top:54%;width:30%}.modal--alert .modalBody .modal--alert--btn button{font-family:Fira sans;font-size:20px;width:25%;border-radius:10px;border:none}.modal--alert--security{position:fixed;left:35%;top:20%;width:22.5%;height:43%}.modal--alert--security .modalBody{font-size:16px;margin-left:8%}.alert--success,.alert--error,.alert--warn{margin:-3% 45%}.alert--success{color:#0e8692}.alert--success--btn button{background-color:#0e8692;color:white;padding:3%}.alert--error{color:#FF0000}.alert--error--btn button{background-color:#FF0000;color:black;padding:3%}.alert--warn{color:#FFB800}.alert--warn--btn button{background-color:#FFB800;color:black;padding:3%}.alert--security img{width:12%;margin:0% 44% 0%}.alert--security h2{font-weight:600;font-size:24px;text-align:center;margin:2% 0%}.alert--security--btn{position:fixed;left:39.5%;top:54%;width:70%}.alert--security--btn button{padding:0.5%}.alert--security--btn .positive{margin-bottom:2%;background-color:#0e8692;color:white}.alert--security--btn .negative{position:fixed;left:36%;top:61.5%;margin-bottom:5%;background-color:white;color:#a9d6da}.modal--normal{padding:2% 2% 2% 2%}.modal--normal .modalBody{margin:2% 0%}.modal--normal .modalButton button{border-radius:10px}.modal--normal .modalButton .positive{background-color:#0e8692;border:none;color:white}.modal--normal .modalButton .negative{background-color:white;border:solid #a9d6da;color:#a9d6da}.modal--normal--small{width:30%;height:25%}.modal--normal--small .modalHeader h2{margin:-2% 0% 0%;font-size:24px;text-align:center}.modal--normal--small .modalBody{text-align:center}.modal--normal--small .modalContent{margin-top:-1.5%}.modal--normal--small .modalButton button{width:15%;padding:0.4%;font-size:20px;margin-top:-0.5%}.modal--normal--small .modalButton .positive{position:fixed;left:40%;top:50%}.modal--normal--small .modalButton .negative{position:fixed;left:40%;top:56%}.modal--normal--medium{position:fixed;left:27.5%;top:25%;width:40%;height:35%}.modal--normal .modalHeader h2{margin:-1% 0% 0%;padding:0% 5%}.modal--normal--medium .exit{position:fixed;left:68.5%;top:26.5%}.modal--normal--medium .modalBody .modalContent{height:23.5vh;padding:1% 5% 1%;margin-top:-1%}.modal--normal--medium .modalButton{position:relative;left:34%;margin-top:3%}.modal--normal--medium .modalButton button{width:30%;height:5vh;font-size:20px}.modal--normal--medium .positive{margin-right:2.5%}.modal--normal--large{position:fixed;left:23.5%;top:23%;width:50%;height:50%}.modal--normal--large .exit{position:fixed;left:74.5%;top:24.5%}.modal--normal--large .modalBody .modalContent{height:38.5vh;padding:1% 5% 1%;margin-top:-1%}.modal--normal--large .modalButton{position:relative;left:37.5%;margin-top:2%}.modal--normal--large .modalButton button{width:30%;height:5vh;font-size:20px}.modal--normal--large .positive{margin-right:2.5%}\n' , '' ]) , e.exports = t;
} , '645' : e=> 
{
'use strict';e.exports = function(e)
{
let t = [];return t.toString = function()
{
return this.map ((function(t)
{
let o = function(e , t)
{
let o , n , r , i = e[1] || '' , a = e[3];if(!a)return i;if(t && 'function' === typeof btoa)
{
let l = (o = a , n = btoa (unescape (encodeURIComponent (JSON.stringify (o)))) , r = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat (n) , '/*# '.concat (r , ' */')) , d = a.sources.map ((function(e)
{
return'/*# sourceURL='.concat (a.sourceRoot || '').concat (e , ' */');
}));return[ i ].concat (d).concat ([ l ]).join ('\n');
}return[ i ].join ('\n');
} (t , e);return t[2] ? '@media '.concat (t[2] , ' {').concat (o , '}') : o;
})).join ('');
} , t.i = function(e , o , n)
{
'string' === typeof e && (e = [ [ null , e , '' ] ]);let r = {};if(n)for(let i = 0;i < this.length;i++)
{
let a = this[i][0];null != a && (r[a] = !0);
}for(let l = 0;l < e.length;l++)
{
let d = [].concat (e[l]);n && r[d[0]] || (o && (d[2] ? d[2] = ''.concat (o , ' and ').concat (d[2]) : d[2] = o) , t.push (d));
}
} , t;
};
} , '353' : (e , t , o)=> 
{
let n = o (379) , r = o (994);'string' === typeof(r = r.__esModule ? r.default : r) && (r = [ [ e.id , r , '' ] ]);n (r , { 'insert' : 'head' , 'singleton' : !1 }) , e.exports = r.locals || {};
} , '379' : (e , t , o)=> 
{
'use strict';let n , r = function()
{
let e = {};return function(t)
{
if(void 0 === e[t])
{
let o = document.querySelector (t);if(window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)try
{
o = o.contentDocument.head;
}
catch(e)
{
o = null;
}e[t] = o;
}return e[t];
};
} () , i = [];function a(e)
{
for(var t = -1 , o = 0;o < i.length;o++)if(i[o].identifier === e)
{
t = o;break;
}return t;
}function l(e , t)
{
for(var o = {} , n = [] , r = 0;r < e.length;r++)
{
let l = e[r] , d = t.base ? l[0] + t.base : l[0] , s = o[d] || 0 , c = ''.concat (d , ' ').concat (s);o[d] = s + 1;let m = a (c) , u = { 'css' : l[1] , 'media' : l[2] , 'sourceMap' : l[3] };-1 !== m ? (i[m].references++ , i[m].updater (u)) : i.push ({ 'identifier' : c , 'updater' : g (u , t) , 'references' : 1 }) , n.push (c);
}return n;
}function d(e)
{
let t = document.createElement ('style') , n = e.attributes || {};if(void 0 === n.nonce)
{
let i = o.nc;i && (n.nonce = i);
}if(Object.keys (n).forEach ((function(e)
{
t.setAttribute (e , n[e]);
})) , 'function' === typeof e.insert)e.insert (t);else
{
let a = r (e.insert || 'head');if(!a)throw new Error ('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');a.appendChild (t);
}return t;
}let s , c = (s = [] , function(e , t)
{
return s[e] = t , s.filter (Boolean).join ('\n');
});function m(e , t , o , n)
{
let r = o ? '' : n.media ? '@media '.concat (n.media , ' {').concat (n.css , '}') : n.css;if(e.styleSheet)e.styleSheet.cssText = c (t , r);else
{
let i = document.createTextNode (r) , a = e.childNodes;a[t] && e.removeChild (a[t]) , a.length ? e.insertBefore (i , a[t]) : e.appendChild (i);
}
}function u(e , t , o)
{
let n = o.css , r = o.media , i = o.sourceMap;if(r ? e.setAttribute ('media' , r) : e.removeAttribute ('media') , i && 'undefined' !== typeof btoa && (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat (btoa (unescape (encodeURIComponent (JSON.stringify (i)))) , ' */')) , e.styleSheet)e.styleSheet.cssText = n;else
{
for(;e.firstChild;)e.removeChild (e.firstChild);e.appendChild (document.createTextNode (n));
}
}let p = null , f = 0;function g(e , t)
{
let o , n , r;if(t.singleton)
{
let i = f++;o = p || (p = d (t)) , n = m.bind (null , o , i , !1) , r = m.bind (null , o , i , !0);
}
else o = d (t) , n = u.bind (null , o , t) , r = function()
{
!function(e)
{
if(null === e.parentNode)return!1;e.parentNode.removeChild (e);
} (o);
};return n (e) , function(t)
{
if(t)
{
if(t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)return;n (e = t);
}
else r ();
};
}e.exports = function(e , t)
{
(t = t || {}).singleton || 'boolean' === typeof t.singleton || (t.singleton = (void 0 === n && (n = Boolean (window && document && document.all && !window.atob)) , n));let o = l (e = e || [] , t);return function(e)
{
if(e = e || [] , '[object Array]' === Object.prototype.toString.call (e))
{
for(let n = 0;n < o.length;n++)
{
let r = a (o[n]);i[r].references--;
}for(var d = l (e , t) , s = 0;s < o.length;s++)
{
let c = a (o[s]);0 === i[c].references && (i[c].updater () , i.splice (c , 1));
}o = d;
}
};
};
} } , t = {};function o(n)
{
let r = t[n];if(void 0 !== r)return r.exports;let i = t[n] = { 'id' : n , 'exports' : {} };return e[n] (i , i.exports , o) , i.exports;
}o.n = e=> 
{
let t = e && e.__esModule ? ()=> e.default : ()=> e;return o.d (t , { 'a' : t }) , t;
} , o.d = (e , t)=> 
{
for(let n in t)o.o (t , n) && !o.o (e , n) && Object.defineProperty (e , n , { 'enumerable' : !0 , 'get' : t[n] });
} , o.g = function()
{
if('object' === typeof globalThis)return globalThis;try
{
return this || new Function ('return this') ();
}
catch(e)
{
if('object' === typeof window)return window;
}
} () , o.o = (e , t)=> Object.prototype.hasOwnProperty.call (e , t) , o.r = e=> 
{
'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty (e , Symbol.toStringTag , { 'value' : 'Module' }) , Object.defineProperty (e , '__esModule' , { 'value' : !0 });
} , (()=> 
{
let e;o.g.importScripts && (e = `${o.g.location}`);let t = o.g.document;if(!e && t && (t.currentScript && (e = t.currentScript.src) , !e))
{
let n = t.getElementsByTagName ('script');n.length && (e = n[n.length - 1].src);
}if(!e)throw new Error ('Automatic publicPath is not supported in this browser');e = e.replace (/#.*$/ , '').replace (/\?.*$/ , '').replace (/\/[^\/]+$/ , '/') , o.p = e;
}) () , o.nc = void 0;let n = {};(()=> 
{
'use strict';o.r (n) , o.d (n , { 'Modal' : ()=> c , 'Slideouts' : ()=> m });const e = require ('react');let t = o.n (e);const r = require ('prop-types');let i = o.n (r);const a = require ('@mui/icons-material');o (353);const l = `${o.p}images/Vectorsecurity.png`;let d = function(e)
{
let o = e.title , n = e.mode , r = function()
{
return t ().createElement ('div' , { 'className' : 'alert--security' } , t ().createElement ('img' , { 'src' : l , 'alt' : 'security' }) , t ().createElement ('h2' , null , o));
};return t ().createElement ('div' , { 'className' : 'modalHeader' } , 'alert--success' === n ? t ().createElement (a.CheckCircleOutline , { 'className' : 'alert--success' , 'sx' : { 'fontSize' : 50 } }) : null , 'alert--error' === n ? t ().createElement (a.ErrorOutline , { 'className' : 'alert--error' , 'sx' : { 'fontSize' : 50 } }) : null , 'alert--warn' === n ? t ().createElement (a.WarningAmberRounded , { 'className' : 'alert--warn' , 'sx' : { 'fontSize' : 50 } }) : null , 'alert--security' === n ? t ().createElement (r , null) : null , 'info' === n || 'normal' === n ? t ().createElement ('h2' , null , o) : null);
};d.propTypes = { 'title' : i ().string.isRequired , 'mode' : i ().string.isRequired };let s = function(e)
{
let o = e.mode , n = e.onPositive , r = e.onNegative , i = !![ 'normal' , 'alert--security' ].includes (o , 0);return t ().createElement ('div' , { 'className' : [ 'modalButton' , ''.concat (o , '--btn') , 'modal--'.concat (o.split ('-')[0] , '--btn') ].join (' ') } , 'info' === o ? null : t ().createElement (t ().Fragment , null , t ().createElement ('button' , { 'className' : 'btn positive' , 'onClick' : null == n ? void 0 : n.onClick } , null == n ? void 0 : n.label) , i ? t ().createElement ('button' , { 'className' : 'btn negative' , 'onClick' : null == r ? void 0 : r.onClick } , null == r ? void 0 : r.label) : null));
};s.propTypes = { 'mode' : i ().string.isRequired , 'onPositive' : i ().shape ({ 'label' : i ().string.isRequired , 'onClick' : i ().func.isRequired }).isRequired , 'onNegative' : i ().shape ({ 'label' : i ().string.isRequired , 'onClick' : i ().func.isRequired }) };var c = function(e)
{
let o = e.visibility , n = void 0 === o ? 'hidden' : o , r = e.size , i = e.mode , l = e.title , c = e.Body , m = e.onPositive , u = e.onNegative , p = i.split ('-') , f = 'normal' === p[0] ? 'modal--'.concat (p[0] , '--').concat (r) : 'modal--'.concat (p[0]);return t ().createElement ('div' , { 'id' : 'modalView' , 'className' : 'overlay' , 'style' : { 'visibility' : n } } , t ().createElement ('div' , { 'className' : [ f , 'modal--'.concat (i) , 'modal' ].join (' ') } , t ().createElement ('button' , { 'className' : 'exit' , 'onClick' : function()
{
document.getElementById ('modalView').style.visibility = 'hidden';
} } , t ().createElement (a.HighlightOff , null)) , t ().createElement (d , { 'title' : l , 'mode' : i }) , t ().createElement ('div' , { 'className' : 'modalBody' } , t ().createElement ('div' , { 'className' : 'modalContent' } , t ().createElement (c , null)) , t ().createElement (s , { 'mode' : i , 'onPositive' : m , 'onNegative' : u }))));
};c.propTypes = { 'visibility' : i ().string.isRequired , 'size' : i ().string.isRequired , 'mode' : i ().string.isRequired , 'title' : i ().func.isRequired , 'Body' : i ().func.isRequired , 'onPositive' : i ().object.isRequired , 'onNegative' : i ().object };var m = function()
{
return t ().createElement ('h2' , null , 'Slideout component');
};
}) ();let r = exports;for(let i in n)r[i] = n[i];n.__esModule && Object.defineProperty (r , '__esModule' , { 'value' : !0 });
}) ();