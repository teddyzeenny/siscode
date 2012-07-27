(function(b){var a={init:function(d){d=b.extend({tooltip:".tooltip"},d);var f,c,e;b(this).each(function(){var h,g;g=b(this).find(d.tooltip);c=g.height();e=(b(this).width()-16-g.width())/2;g.css({top:(-c-20)+"px",left:e+"px"}).hide();h=null;b(this).on("mouseenter",function(){clearTimeout(h);g.fadeIn()}).on("mouseleave",function(){h=setTimeout(function(){g.fadeOut()},300)})});return this}};b.fn.tooltip=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)}else{b.error("Method "+c+" does not exist on jQuery.tooltip")}}}})(jQuery);// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
// 
// Version 0.9.8
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
((function(){var a;a=function(){function a(){this.options_index=0,this.parsed=[]}return a.prototype.add_node=function(a){return a.nodeName==="OPTGROUP"?this.add_group(a):this.add_option(a)},a.prototype.add_group=function(a){var b,c,d,e,f,g;b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:a.label,children:0,disabled:a.disabled}),f=a.childNodes,g=[];for(d=0,e=f.length;d<e;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},a.prototype.add_option=function(a,b,c){if(a.nodeName==="OPTION")return a.text!==""?(b!=null&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},a}(),a.select_to_array=function(b){var c,d,e,f,g;d=new a,g=b.childNodes;for(e=0,f=g.length;e<f;e++)c=g[e],d.add_node(c);return d.parsed},this.SelectParser=a})).call(this),function(){var a,b;b=this,a=function(){function a(a,b){this.form_field=a,this.options=b!=null?b:{},this.set_default_values(),this.is_multiple=this.form_field.multiple,this.set_default_text(),this.setup(),this.set_up_html(),this.register_observers(),this.finish_setup()}return a.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.result_single_selected=null,this.allow_single_deselect=this.options.allow_single_deselect!=null&&this.form_field.options[0]!=null&&this.form_field.options[0].text===""?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.search_contains=this.options.search_contains||!1,this.choices=0,this.single_backstroke_delete=this.options.single_backstroke_delete||!1,this.max_selected_options=this.options.max_selected_options||Infinity},a.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||"Select Some Options":this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||"Select an Option",this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||"No results match"},a.prototype.mouse_enter=function(){return this.mouse_on_container=!0},a.prototype.mouse_leave=function(){return this.mouse_on_container=!1},a.prototype.input_focus=function(a){var b=this;if(!this.active_field)return setTimeout(function(){return b.container_mousedown()},50)},a.prototype.input_blur=function(a){var b=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return b.blur_test()},100)},a.prototype.result_add_option=function(a){var b,c;return a.disabled?"":(a.dom_id=this.container_id+"_o_"+a.array_index,b=a.selected&&this.is_multiple?[]:["active-result"],a.selected&&b.push("result-selected"),a.group_array_index!=null&&b.push("group-option"),a.classes!==""&&b.push(a.classes),c=a.style.cssText!==""?' style="'+a.style+'"':"",'<li id="'+a.dom_id+'" class="'+b.join(" ")+'"'+c+">"+a.html+"</li>")},a.prototype.results_update_field=function(){return this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.result_single_selected=null,this.results_build()},a.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},a.prototype.results_search=function(a){return this.results_showing?this.winnow_results():this.results_show()},a.prototype.keyup_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale();switch(b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:a.preventDefault();if(this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},a.prototype.generate_field_id=function(){var a;return a=this.generate_random_id(),this.form_field.id=a,a},a.prototype.generate_random_char=function(){var a,b,c;return a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",c=Math.floor(Math.random()*a.length),b=a.substring(c,c+1)},a}(),b.AbstractChosen=a}.call(this),function(){var a,b,c,d,e=Object.prototype.hasOwnProperty,f=function(a,b){function d(){this.constructor=a}for(var c in b)e.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};d=this,a=jQuery,a.fn.extend({chosen:function(c){return!a.browser.msie||a.browser.version!=="6.0"&&a.browser.version!=="7.0"?this.each(function(d){var e;e=a(this);if(!e.hasClass("chzn-done"))return e.data("chosen",new b(this,c))}):this}}),b=function(b){function e(){e.__super__.constructor.apply(this,arguments)}return f(e,b),e.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_value=this.form_field_jq.val(),this.is_rtl=this.form_field_jq.hasClass("chzn-rtl")},e.prototype.finish_setup=function(){return this.form_field_jq.addClass("chzn-done")},e.prototype.set_up_html=function(){var b,d,e,f;return this.container_id=this.form_field.id.length?this.form_field.id.replace(/[^\w]/g,"_"):this.generate_field_id(),this.container_id+="_chzn",this.f_width=this.form_field_jq.outerWidth(),b=a("<div />",{id:this.container_id,"class":"chzn-container"+(this.is_rtl?" chzn-rtl":""),style:"width: "+this.f_width+"px;"}),this.is_multiple?b.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>'):b.html('<a href="javascript:void(0)" class="chzn-single chzn-default"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'),this.form_field_jq.hide().after(b),this.container=a("#"+this.container_id),this.container.addClass("chzn-container-"+(this.is_multiple?"multi":"single")),this.dropdown=this.container.find("div.chzn-drop").first(),d=this.container.height(),e=this.f_width-c(this.dropdown),this.dropdown.css({width:e+"px",top:d+"px"}),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chzn-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chzn-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chzn-search").first(),this.selected_item=this.container.find(".chzn-single").first(),f=e-c(this.search_container)-c(this.search_field),this.search_field.css({width:f+"px"})),this.results_build(),this.set_tab_index(),this.form_field_jq.trigger("liszt:ready",{chosen:this})},e.prototype.register_observers=function(){var a=this;return this.container.mousedown(function(b){return a.container_mousedown(b)}),this.container.mouseup(function(b){return a.container_mouseup(b)}),this.container.mouseenter(function(b){return a.mouse_enter(b)}),this.container.mouseleave(function(b){return a.mouse_leave(b)}),this.search_results.mouseup(function(b){return a.search_results_mouseup(b)}),this.search_results.mouseover(function(b){return a.search_results_mouseover(b)}),this.search_results.mouseout(function(b){return a.search_results_mouseout(b)}),this.form_field_jq.bind("liszt:updated",function(b){return a.results_update_field(b)}),this.search_field.blur(function(b){return a.input_blur(b)}),this.search_field.keyup(function(b){return a.keyup_checker(b)}),this.search_field.keydown(function(b){return a.keydown_checker(b)}),this.is_multiple?(this.search_choices.click(function(b){return a.choices_click(b)}),this.search_field.focus(function(b){return a.input_focus(b)})):this.container.click(function(a){return a.preventDefault()})},e.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled)return this.container.addClass("chzn-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus",this.activate_action),this.close_field();this.container.removeClass("chzn-disabled"),this.search_field[0].disabled=!1;if(!this.is_multiple)return this.selected_item.bind("focus",this.activate_action)},e.prototype.container_mousedown=function(b){var c;if(!this.is_disabled)return c=b!=null?a(b.target).hasClass("search-choice-close"):!1,b&&b.type==="mousedown"&&!this.results_showing&&b.stopPropagation(),!this.pending_destroy_click&&!c?(this.active_field?!this.is_multiple&&b&&(a(b.target)[0]===this.selected_item[0]||a(b.target).parents("a.chzn-single").length)&&(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(document).click(this.click_test_action),this.results_show()),this.activate_field()):this.pending_destroy_click=!1},e.prototype.container_mouseup=function(a){if(a.target.nodeName==="ABBR"&&!this.is_disabled)return this.results_reset(a)},e.prototype.blur_test=function(a){if(!this.active_field&&this.container.hasClass("chzn-container-active"))return this.close_field()},e.prototype.close_field=function(){return a(document).unbind("click",this.click_test_action),this.is_multiple||(this.selected_item.attr("tabindex",this.search_field.attr("tabindex")),this.search_field.attr("tabindex",-1)),this.active_field=!1,this.results_hide(),this.container.removeClass("chzn-container-active"),this.winnow_results_clear(),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},e.prototype.activate_field=function(){return!this.is_multiple&&!this.active_field&&(this.search_field.attr("tabindex",this.selected_item.attr("tabindex")),this.selected_item.attr("tabindex",-1)),this.container.addClass("chzn-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},e.prototype.test_active_click=function(b){return a(b.target).parents("#"+this.container_id).length?this.active_field=!0:this.close_field()},e.prototype.results_build=function(){var a,b,c,e,f;this.parsing=!0,this.results_data=d.SelectParser.select_to_array(this.form_field),this.is_multiple&&this.choices>0?(this.search_choices.find("li.search-choice").remove(),this.choices=0):this.is_multiple||(this.selected_item.addClass("chzn-default").find("span").text(this.default_text),this.form_field.options.length<=this.disable_search_threshold?this.container.addClass("chzn-container-single-nosearch"):this.container.removeClass("chzn-container-single-nosearch")),a="",f=this.results_data;for(c=0,e=f.length;c<e;c++)b=f[c],b.group?a+=this.result_add_group(b):b.empty||(a+=this.result_add_option(b),b.selected&&this.is_multiple?this.choice_build(b):b.selected&&!this.is_multiple&&(this.selected_item.removeClass("chzn-default").find("span").text(b.text),this.allow_single_deselect&&this.single_deselect_control_build()));return this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.search_results.html(a),this.parsing=!1},e.prototype.result_add_group=function(b){return b.disabled?"":(b.dom_id=this.container_id+"_g_"+b.array_index,'<li id="'+b.dom_id+'" class="group-result">'+a("<div />").text(b.label).html()+"</li>")},e.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight();if(b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(c<f)return this.search_results.scrollTop(c)}},e.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},e.prototype.results_show=function(){var a;if(!this.is_multiple)this.selected_item.addClass("chzn-single-with-drop"),this.result_single_selected&&this.result_do_highlight(this.result_single_selected);else if(this.max_selected_options<=this.choices)return this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1;return a=this.is_multiple?this.container.height():this.container.height()-1,this.form_field_jq.trigger("liszt:showing_dropdown",{chosen:this}),this.dropdown.css({top:a+"px",left:0}),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results()},e.prototype.results_hide=function(){return this.is_multiple||this.selected_item.removeClass("chzn-single-with-drop"),this.result_clear_highlight(),this.form_field_jq.trigger("liszt:hiding_dropdown",{chosen:this}),this.dropdown.css({left:"-9000px"}),this.results_showing=!1},e.prototype.set_tab_index=function(a){var b;if(this.form_field_jq.attr("tabindex"))return b=this.form_field_jq.attr("tabindex"),this.form_field_jq.attr("tabindex",-1),this.is_multiple?this.search_field.attr("tabindex",b):(this.selected_item.attr("tabindex",b),this.search_field.attr("tabindex",-1))},e.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},e.prototype.search_results_mouseup=function(b){var c;c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first();if(c.length)return this.result_highlight=c,this.result_select(b)},e.prototype.search_results_mouseover=function(b){var c;c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first();if(c)return this.result_do_highlight(c)},e.prototype.search_results_mouseout=function(b){if(a(b.target).hasClass("active-result"))return this.result_clear_highlight()},e.prototype.choices_click=function(b){b.preventDefault();if(this.active_field&&!a(b.target).hasClass("search-choice")&&!this.results_showing)return this.results_show()},e.prototype.choice_build=function(b){var c,d,e=this;return this.is_multiple&&this.max_selected_options<=this.choices?(this.form_field_jq.trigger("liszt:maxselected",{chosen:this}),!1):(c=this.container_id+"_c_"+b.array_index,this.choices+=1,this.search_container.before('<li class="search-choice" id="'+c+'"><span>'+b.html+'</span><a href="javascript:void(0)" class="search-choice-close" rel="'+b.array_index+'"></a></li>'),d=a("#"+c).find("a").first(),d.click(function(a){return e.choice_destroy_link_click(a)}))},e.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),this.is_disabled?b.stopPropagation:(this.pending_destroy_click=!0,this.choice_destroy(a(b.target)))},e.prototype.choice_destroy=function(a){return this.choices-=1,this.show_search_field_default(),this.is_multiple&&this.choices>0&&this.search_field.val().length<1&&this.results_hide(),this.result_deselect(a.attr("rel")),a.parents("li").first().remove()},e.prototype.results_reset=function(){this.form_field.options[0].selected=!0,this.selected_item.find("span").text(this.default_text),this.is_multiple||this.selected_item.addClass("chzn-default"),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq.trigger("change");if(this.active_field)return this.results_hide()},e.prototype.results_reset_cleanup=function(){return this.selected_item.find("abbr").remove()},e.prototype.result_select=function(a){var b,c,d,e;if(this.result_highlight)return b=this.result_highlight,c=b.attr("id"),this.result_clear_highlight(),this.is_multiple?this.result_deactivate(b):(this.search_results.find(".result-selected").removeClass("result-selected"),this.result_single_selected=b,this.selected_item.removeClass("chzn-default")),b.addClass("result-selected"),e=c.substr(c.lastIndexOf("_")+1),d=this.results_data[e],d.selected=!0,this.form_field.options[d.options_index].selected=!0,this.is_multiple?this.choice_build(d):(this.selected_item.find("span").first().text(d.text),this.allow_single_deselect&&this.single_deselect_control_build()),(!a.metaKey||!this.is_multiple)&&this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field_jq.val()!==this.current_value)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[d.options_index].value}),this.current_value=this.form_field_jq.val(),this.search_field_scale()},e.prototype.result_activate=function(a){return a.addClass("active-result")},e.prototype.result_deactivate=function(a){return a.removeClass("active-result")},e.prototype.result_deselect=function(b){var c,d;return d=this.results_data[b],d.selected=!1,this.form_field.options[d.options_index].selected=!1,c=a("#"+this.container_id+"_o_"+b),c.removeClass("result-selected").addClass("active-result").show(),this.result_clear_highlight(),this.winnow_results(),this.form_field_jq.trigger("change",{deselected:this.form_field.options[d.options_index].value}),this.search_field_scale()},e.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect&&this.selected_item.find("abbr").length<1)return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')},e.prototype.winnow_results=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;this.no_results_clear(),j=0,k=this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html(),g=this.search_contains?"":"^",f=new RegExp(g+k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),n=new RegExp(k.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"i"),s=this.results_data;for(o=0,q=s.length;o<q;o++){c=s[o];if(!c.disabled&&!c.empty)if(c.group)a("#"+c.dom_id).css("display","none");else if(!this.is_multiple||!c.selected){b=!1,i=c.dom_id,h=a("#"+i);if(f.test(c.html))b=!0,j+=1;else if(c.html.indexOf(" ")>=0||c.html.indexOf("[")===0){e=c.html.replace(/\[|\]/g,"").split(" ");if(e.length)for(p=0,r=e.length;p<r;p++)d=e[p],f.test(d)&&(b=!0,j+=1)}b?(k.length?(l=c.html.search(n),m=c.html.substr(0,l+k.length)+"</em>"+c.html.substr(l+k.length),m=m.substr(0,l)+"<em>"+m.substr(l)):m=c.html,h.html(m),this.result_activate(h),c.group_array_index!=null&&a("#"+this.results_data[c.group_array_index].dom_id).css("display","list-item")):(this.result_highlight&&i===this.result_highlight.attr("id")&&this.result_clear_highlight(),this.result_deactivate(h))}}return j<1&&k.length?this.no_results(k):this.winnow_results_set_highlight()},e.prototype.winnow_results_clear=function(){var b,c,d,e,f;this.search_field.val(""),c=this.search_results.find("li"),f=[];for(d=0,e=c.length;d<e;d++)b=c[d],b=a(b),b.hasClass("group-result")?f.push(b.css("display","auto")):!this.is_multiple||!b.hasClass("result-selected")?f.push(this.result_activate(b)):f.push(void 0);return f},e.prototype.winnow_results_set_highlight=function(){var a,b;if(!this.result_highlight){b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first();if(a!=null)return this.result_do_highlight(a)}},e.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c)},e.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},e.prototype.keydown_arrow=function(){var b,c;this.result_highlight?this.results_showing&&(c=this.result_highlight.nextAll("li.active-result").first(),c&&this.result_do_highlight(c)):(b=this.search_results.find("li.active-result").first(),b&&this.result_do_highlight(a(b)));if(!this.results_showing)return this.results_show()},e.prototype.keyup_arrow=function(){var a;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight)return a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices>0&&this.results_hide(),this.result_clear_highlight())},e.prototype.keydown_backstroke=function(){return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(this.pending_backstroke=this.search_container.siblings("li.search-choice").last(),this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus"))},e.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},e.prototype.keydown_checker=function(a){var b,c;b=(c=a.which)!=null?c:a.keyCode,this.search_field_scale(),b!==8&&this.pending_backstroke&&this.clear_backstroke();switch(b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:this.keydown_arrow()}},e.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(i=0,j=g.length;i<j;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return c=a("<div />",{style:f}),c.text(this.search_field.val()),a("body").append(c),h=c.width()+25,c.remove(),h>this.f_width-10&&(h=this.f_width-10),this.search_field.css({width:h+"px"}),b=this.container.height(),this.dropdown.css({top:b+"px"})}},e.prototype.generate_random_id=function(){var b;b="sel"+this.generate_random_char()+this.generate_random_char()+this.generate_random_char();while(a("#"+b).length>0)b+=this.generate_random_char();return b},e}(AbstractChosen),c=function(a){var b;return b=a.outerWidth()-a.width()},d.get_side_border_padding=c}.call(this);var Handlebars={};Handlebars.VERSION="1.0.beta.6";Handlebars.helpers={};Handlebars.partials={};Handlebars.registerHelper=function(b,c,a){if(a){c.not=a}this.helpers[b]=c};Handlebars.registerPartial=function(a,b){this.partials[a]=b};Handlebars.registerHelper("helperMissing",function(a){if(arguments.length===2){return undefined}else{throw new Error("Could not find property '"+a+"'")}});var toString=Object.prototype.toString,functionType="[object Function]";Handlebars.registerHelper("blockHelperMissing",function(f,d){var a=d.inverse||function(){},h=d.fn;var c="";var g=toString.call(f);if(g===functionType){f=f.call(this)}if(f===true){return h(this)}else{if(f===false||f==null){return a(this)}else{if(g==="[object Array]"){if(f.length>0){for(var e=0,b=f.length;e<b;e++){c=c+h(f[e])}}else{c=a(this)}return c}else{return h(f)}}}});Handlebars.registerHelper("each",function(f,d){var g=d.fn,a=d.inverse;var c="";if(f&&f.length>0){for(var e=0,b=f.length;e<b;e++){c=c+g(f[e])}}else{c=a(this)}return c});Handlebars.registerHelper("if",function(b,a){var c=toString.call(b);if(c===functionType){b=b.call(this)}if(!b||Handlebars.Utils.isEmpty(b)){return a.inverse(this)}else{return a.fn(this)}});Handlebars.registerHelper("unless",function(c,b){var d=b.fn,a=b.inverse;b.fn=a;b.inverse=d;return Handlebars.helpers["if"].call(this,c,b)});Handlebars.registerHelper("with",function(b,a){return a.fn(b)});Handlebars.registerHelper("log",function(a){Handlebars.log(a)});var handlebars=(function(){var f={trace:function c(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,param:27,STRING:28,INTEGER:29,BOOLEAN:30,hashSegments:31,hashSegment:32,ID:33,EQUALS:34,pathSegments:35,SEP:36,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],performAction:function b(g,j,k,n,m,i,l){var h=i.length-1;switch(m){case 1:return i[h-1];break;case 2:this.$=new n.ProgramNode(i[h-2],i[h]);break;case 3:this.$=new n.ProgramNode(i[h]);break;case 4:this.$=new n.ProgramNode([]);break;case 5:this.$=[i[h]];break;case 6:i[h-1].push(i[h]);this.$=i[h-1];break;case 7:this.$=new n.InverseNode(i[h-2],i[h-1],i[h]);break;case 8:this.$=new n.BlockNode(i[h-2],i[h-1],i[h]);break;case 9:this.$=i[h];break;case 10:this.$=i[h];break;case 11:this.$=new n.ContentNode(i[h]);break;case 12:this.$=new n.CommentNode(i[h]);break;case 13:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1]);break;case 14:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1]);break;case 15:this.$=i[h-1];break;case 16:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1]);break;case 17:this.$=new n.MustacheNode(i[h-1][0],i[h-1][1],true);break;case 18:this.$=new n.PartialNode(i[h-1]);break;case 19:this.$=new n.PartialNode(i[h-2],i[h-1]);break;case 20:break;case 21:this.$=[[i[h-2]].concat(i[h-1]),i[h]];break;case 22:this.$=[[i[h-1]].concat(i[h]),null];break;case 23:this.$=[[i[h-1]],i[h]];break;case 24:this.$=[[i[h]],null];break;case 25:i[h-1].push(i[h]);this.$=i[h-1];break;case 26:this.$=[i[h]];break;case 27:this.$=i[h];break;case 28:this.$=new n.StringNode(i[h]);break;case 29:this.$=new n.IntegerNode(i[h]);break;case 30:this.$=new n.BooleanNode(i[h]);break;case 31:this.$=new n.HashNode(i[h]);break;case 32:i[h-1].push(i[h]);this.$=i[h-1];break;case 33:this.$=[i[h]];break;case 34:this.$=[i[h-2],i[h]];break;case 35:this.$=[i[h-2],new n.StringNode(i[h])];break;case 36:this.$=[i[h-2],new n.IntegerNode(i[h])];break;case 37:this.$=[i[h-2],new n.BooleanNode(i[h])];break;case 38:this.$=new n.IdNode(i[h]);break;case 39:i[h-2].push(i[h]);this.$=i[h-2];break;case 40:this.$=[i[h]];break}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],defaultActions:{16:[2,1],37:[2,23],53:[2,21]},parseError:function d(h,g){throw new Error(h)},parse:function e(o){var x=this,l=[0],G=[null],s=[],H=this.table,h="",q=0,E=0,j=0,n=2,u=1;this.lexer.setInput(o);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}}var i=this.lexer.yylloc;s.push(i);if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError}function w(p){l.length=l.length-2*p;G.length=G.length-p;s.length=s.length-p}function v(){var p;p=x.lexer.lex()||1;if(typeof p!=="number"){p=x.symbols_[p]||p}return p}var D,z,k,C,I,t,B={},y,F,g,m;while(true){k=l[l.length-1];if(this.defaultActions[k]){C=this.defaultActions[k]}else{if(D==null){D=v()}C=H[k]&&H[k][D]}if(typeof C==="undefined"||!C.length||!C[0]){if(!j){m=[];for(y in H[k]){if(this.terminals_[y]&&y>2){m.push("'"+this.terminals_[y]+"'")}}var A="";if(this.lexer.showPosition){A="Parse error on line "+(q+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+m.join(", ")+", got '"+this.terminals_[D]+"'"}else{A="Parse error on line "+(q+1)+": Unexpected "+(D==1?"end of input":"'"+(this.terminals_[D]||D)+"'")}this.parseError(A,{text:this.lexer.match,token:this.terminals_[D]||D,line:this.lexer.yylineno,loc:i,expected:m})}}if(C[0] instanceof Array&&C.length>1){throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+D)}switch(C[0]){case 1:l.push(D);G.push(this.lexer.yytext);s.push(this.lexer.yylloc);l.push(C[1]);D=null;if(!z){E=this.lexer.yyleng;h=this.lexer.yytext;q=this.lexer.yylineno;i=this.lexer.yylloc;if(j>0){j--}}else{D=z;z=null}break;case 2:F=this.productions_[C[1]][1];B.$=G[G.length-F];B._$={first_line:s[s.length-(F||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(F||1)].first_column,last_column:s[s.length-1].last_column};t=this.performAction.call(B,h,E,q,this.yy,C[1],G,s);if(typeof t!=="undefined"){return t}if(F){l=l.slice(0,-1*F*2);G=G.slice(0,-1*F);s=s.slice(0,-1*F)}l.push(this.productions_[C[1]][0]);G.push(B.$);s.push(B._$);g=H[l[l.length-2]][l[l.length-1]];l.push(g);break;case 3:return true}}return true}};var a=(function(){var j=({EOF:1,parseError:function l(o,n){if(this.yy.parseError){this.yy.parseError(o,n)}else{throw new Error(o)}},setInput:function(n){this._input=n;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this},input:function(){var o=this._input[0];this.yytext+=o;this.yyleng++;this.match+=o;this.matched+=o;var n=o.match(/\n/);if(n){this.yylineno++}this._input=this._input.slice(1);return o},unput:function(n){this._input=n+this._input;return this},more:function(){this._more=true;return this},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;if(n.length<20){n+=this._input.substr(0,20-n.length)}return(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput();var o=new Array(n.length+1).join("-");return n+this.upcomingInput()+"\n"+o+"^"},next:function(){if(this.done){return this.EOF}if(!this._input){this.done=true}var r,p,o,n;if(!this._more){this.yytext="";this.match=""}var s=this._currentRules();for(var q=0;q<s.length;q++){p=this._input.match(this.rules[s[q]]);if(p){n=p[0].match(/\n.*/g);if(n){this.yylineno+=n.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-1:this.yylloc.last_column+p[0].length};this.yytext+=p[0];this.match+=p[0];this.matches=p;this.yyleng=this.yytext.length;this._more=false;this._input=this._input.slice(p[0].length);this.matched+=p[0];r=this.performAction.call(this,this.yy,this,s[q],this.conditionStack[this.conditionStack.length-1]);if(r){return r}else{return}}}if(this._input===""){return this.EOF}else{this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function g(){var n=this.next();if(typeof n!=="undefined"){return n}else{return this.lex()}},begin:function h(n){this.conditionStack.push(n)},popState:function m(){return this.conditionStack.pop()},_currentRules:function k(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function h(n){this.begin(n)}});j.performAction=function i(r,o,q,n){var p=n;switch(q){case 0:if(o.yytext.slice(-1)!=="\\"){this.begin("mu")}if(o.yytext.slice(-1)==="\\"){o.yytext=o.yytext.substr(0,o.yyleng-1),this.begin("emu")}if(o.yytext){return 14}break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:return 24;break;case 4:return 16;break;case 5:return 20;break;case 6:return 19;break;case 7:return 19;break;case 8:return 23;break;case 9:return 23;break;case 10:o.yytext=o.yytext.substr(3,o.yyleng-5);this.popState();return 15;break;case 11:return 22;break;case 12:return 34;break;case 13:return 33;break;case 14:return 33;break;case 15:return 36;break;case 16:break;case 17:this.popState();return 18;break;case 18:this.popState();return 18;break;case 19:o.yytext=o.yytext.substr(1,o.yyleng-2).replace(/\\"/g,'"');return 28;break;case 20:return 30;break;case 21:return 30;break;case 22:return 29;break;case 23:return 33;break;case 24:o.yytext=o.yytext.substr(1,o.yyleng-2);return 33;break;case 25:return"INVALID";break;case 26:return 5;break}};j.rules=[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^[^\x00]{2,}?(?=(\{\{))/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[\/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^true(?=[}\s])/,/^false(?=[}\s])/,/^[0-9]+(?=[}\s])/,/^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/,/^\[[^\]]*\]/,/^./,/^$/];j.conditions={mu:{rules:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],inclusive:false},emu:{rules:[2],inclusive:false},INITIAL:{rules:[0,1,26],inclusive:true}};return j})();f.lexer=a;return f})();if(typeof require!=="undefined"&&typeof exports!=="undefined"){exports.parser=handlebars;exports.parse=function(){return handlebars.parse.apply(handlebars,arguments)};exports.main=function commonjsMain(a){if(!a[1]){throw new Error("Usage: "+a[0]+" FILE")}if(typeof process!=="undefined"){var c=require("fs").readFileSync(require("path").join(process.cwd(),a[1]),"utf8")}else{var b=require("file").path(require("file").cwd());var c=b.join(a[1]).read({charset:"utf-8"})}return exports.parser.parse(c)};if(typeof module!=="undefined"&&require.main===module){exports.main(typeof process!=="undefined"?process.argv.slice(1):require("system").args)}}Handlebars.Parser=handlebars;Handlebars.parse=function(a){Handlebars.Parser.yy=Handlebars.AST;return Handlebars.Parser.parse(a)};Handlebars.print=function(a){return new Handlebars.PrintVisitor().accept(a)};Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(b,a){}};Handlebars.log=function(b,a){Handlebars.logger.log(b,a)};(function(){Handlebars.AST={};Handlebars.AST.ProgramNode=function(c,b){this.type="program";this.statements=c;if(b){this.inverse=new Handlebars.AST.ProgramNode(b)}};Handlebars.AST.MustacheNode=function(d,c,b){this.type="mustache";this.id=d[0];this.params=d.slice(1);this.hash=c;this.escaped=!b};Handlebars.AST.PartialNode=function(c,b){this.type="partial";this.id=c;this.context=b};var a=function(b,c){if(b.original!==c.original){throw new Handlebars.Exception(b.original+" doesn't match "+c.original)}};Handlebars.AST.BlockNode=function(c,b,d){a(c.id,d);this.type="block";this.mustache=c;this.program=b};Handlebars.AST.InverseNode=function(c,b,d){a(c.id,d);this.type="inverse";this.mustache=c;this.program=b};Handlebars.AST.ContentNode=function(b){this.type="content";this.string=b};Handlebars.AST.HashNode=function(b){this.type="hash";this.pairs=b};Handlebars.AST.IdNode=function(f){this.type="ID";this.original=f.join(".");var d=[],g=0;for(var e=0,b=f.length;e<b;e++){var c=f[e];if(c===".."){g++}else{if(c==="."||c==="this"){this.isScoped=true}else{d.push(c)}}}this.parts=d;this.string=d.join(".");this.depth=g;this.isSimple=(d.length===1)&&(g===0)};Handlebars.AST.StringNode=function(b){this.type="STRING";this.string=b};Handlebars.AST.IntegerNode=function(b){this.type="INTEGER";this.integer=b};Handlebars.AST.BooleanNode=function(b){this.type="BOOLEAN";this.bool=b};Handlebars.AST.CommentNode=function(b){this.type="comment";this.comment=b}})();Handlebars.Exception=function(b){var a=Error.prototype.constructor.apply(this,arguments);for(var c in a){if(a.hasOwnProperty(c)){this[c]=a[c]}}this.message=a.message};Handlebars.Exception.prototype=new Error;Handlebars.SafeString=function(a){this.string=a};Handlebars.SafeString.prototype.toString=function(){return this.string.toString()};(function(){var c={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var d=/&(?!\w+;)|[<>"'`]/g;var b=/[&<>"'`]/;var a=function(e){return c[e]||"&amp;"};Handlebars.Utils={escapeExpression:function(e){if(e instanceof Handlebars.SafeString){return e.toString()}else{if(e==null||e===false){return""}}if(!b.test(e)){return e}return e.replace(d,a)},isEmpty:function(e){if(typeof e==="undefined"){return true}else{if(e===null){return true}else{if(e===false){return true}else{if(Object.prototype.toString.call(e)==="[object Array]"&&e.length===0){return true}else{return false}}}}}}})();Handlebars.Compiler=function(){};Handlebars.JavaScriptCompiler=function(){};(function(f,e){f.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,assignToHash:15,pushStringParam:16};f.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:2,lookup:1,invokeMustache:3,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:3,invokePartial:1,push:1,assignToHash:1,pushStringParam:1};f.DISASSEMBLE_MAP={};for(var h in f.OPCODE_MAP){var g=f.OPCODE_MAP[h];f.DISASSEMBLE_MAP[g]=h}f.multiParamSize=function(i){return f.MULTI_PARAM_OPCODES[f.DISASSEMBLE_MAP[i]]};f.prototype={compiler:f,disassemble:function(){var t=this.opcodes,r,n;var q=[],v,m,w;for(var s=0,o=t.length;s<o;s++){r=t[s];if(r==="DECLARE"){m=t[++s];w=t[++s];q.push("DECLARE "+m+" = "+w)}else{v=f.DISASSEMBLE_MAP[r];var u=f.multiParamSize(r);var k=[];for(var p=0;p<u;p++){n=t[++s];if(typeof n==="string"){n='"'+n.replace("\n","\\n")+'"'}k.push(n)}v=v+" "+k.join(" ");q.push(v)}}return q.join("\n")},guid:0,compile:function(i,k){this.children=[];this.depths={list:[]};this.options=k;var l=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(l){for(var j in l){this.options.knownHelpers[j]=l[j]}}return this.program(i)},accept:function(i){return this[i.type](i)},program:function(m){var k=m.statements,o;this.opcodes=[];for(var n=0,j=k.length;n<j;n++){o=k[n];this[o.type](o)}this.isSimple=j===1;this.depths.list=this.depths.list.sort(function(l,i){return l-i});return this},compileProgram:function(m){var j=new this.compiler().compile(m,this.options);var n=this.guid++;this.usePartial=this.usePartial||j.usePartial;this.children[n]=j;for(var o=0,k=j.depths.list.length;o<k;o++){depth=j.depths.list[o];if(depth<2){continue}else{this.addDepth(depth-1)}}return n},block:function(o){var l=o.mustache;var n,p,j,k;var m=this.setupStackForMustache(l);var i=this.compileProgram(o.program);if(o.program.inverse){k=this.compileProgram(o.program.inverse);this.declare("inverse",k)}this.opcode("invokeProgram",i,m.length,!!l.hash);this.declare("inverse",null);this.opcode("append")},inverse:function(k){var j=this.setupStackForMustache(k.mustache);var i=this.compileProgram(k.program);this.declare("inverse",i);this.opcode("invokeProgram",null,j.length,!!k.mustache.hash);this.declare("inverse",null);this.opcode("append")},hash:function(n){var m=n.pairs,p,o;this.opcode("push","{}");for(var k=0,j=m.length;k<j;k++){p=m[k];o=p[1];this.accept(o);this.opcode("assignToHash",p[0])}},partial:function(i){var j=i.id;this.usePartial=true;if(i.context){this.ID(i.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",j.original);this.opcode("append")},content:function(i){this.opcode("appendContent",i.string)},mustache:function(i){var j=this.setupStackForMustache(i);this.opcode("invokeMustache",j.length,i.id.original,!!i.hash);if(i.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ID:function(m){this.addDepth(m.depth);this.opcode("getContext",m.depth);this.opcode("lookupWithHelpers",m.parts[0]||null,m.isScoped||false);for(var k=1,j=m.parts.length;k<j;k++){this.opcode("lookup",m.parts[k])}},STRING:function(i){this.opcode("pushString",i.string)},INTEGER:function(i){this.opcode("push",i.integer)},BOOLEAN:function(i){this.opcode("push",i.bool)},comment:function(){},pushParams:function(l){var j=l.length,k;while(j--){k=l[j];if(this.options.stringParams){if(k.depth){this.addDepth(k.depth)}this.opcode("getContext",k.depth||0);this.opcode("pushStringParam",k.string)}else{this[k.type](k)}}},opcode:function(i,l,k,j){this.opcodes.push(f.OPCODE_MAP[i]);if(l!==undefined){this.opcodes.push(l)}if(k!==undefined){this.opcodes.push(k)}if(j!==undefined){this.opcodes.push(j)}},declare:function(i,j){this.opcodes.push("DECLARE");this.opcodes.push(i);this.opcodes.push(j)},addDepth:function(i){if(i===0){return}if(!this.depths[i]){this.depths[i]=true;this.depths.list.push(i)}},setupStackForMustache:function(i){var j=i.params;this.pushParams(j);if(i.hash){this.hash(i.hash)}this.ID(i.id);return j}};e.prototype={nameLookup:function(k,i,j){if(/^[0-9]+$/.test(i)){return k+"["+i+"]"}else{if(e.isValidJavaScriptVariableName(i)){return k+"."+i}else{return k+"['"+i+"']"}}},appendToBuffer:function(i){if(this.environment.isSimple){return"return "+i+";"}else{return"buffer += "+i+";"}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(i,j,l,k){this.environment=i;this.options=j||{};this.name=this.environment.name;this.isChild=!!l;this.context=l||{programs:[],aliases:{self:"this"},registers:{list:[]}};this.preamble();this.stackSlot=0;this.stackVars=[];this.compileChildren(i,j);var n=i.opcodes,m;this.i=0;for(b=n.length;this.i<b;this.i++){m=this.nextOpcode(0);if(m[0]==="DECLARE"){this.i=this.i+2;this[m[1]]=m[2]}else{this.i=this.i+m[1].length;this[m[0]].apply(this,m[1])}}return this.createFunctionContext(k)},nextOpcode:function(r){var o=this.environment.opcodes,m=o[this.i+r],l,p;var q,i;if(m==="DECLARE"){l=o[this.i+1];p=o[this.i+2];return["DECLARE",l,p]}else{l=f.DISASSEMBLE_MAP[m];q=f.multiParamSize(m);i=[];for(var k=0;k<q;k++){i.push(o[this.i+k+1+r])}return[l,i]}},eat:function(i){this.i=this.i+i.length},preamble:function(){var i=[];this.useRegister("foundHelper");if(!this.isChild){var j=this.namespace;var k="helpers = helpers || "+j+".helpers;";if(this.environment.usePartial){k=k+" partials = partials || "+j+".partials;"}i.push(k)}else{i.push("")}if(!this.environment.isSimple){i.push(", buffer = "+this.initializeBuffer())}else{i.push("")}this.lastContext=0;this.source=i},createFunctionContext:function(p){var q=this.stackVars;if(!this.isChild){q=q.concat(this.context.registers.list)}if(q.length>0){this.source[1]=this.source[1]+", "+q.join(", ")}if(!this.isChild){var k=[];for(var o in this.context.aliases){this.source[1]=this.source[1]+", "+o+"="+this.context.aliases[o]}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.source.push("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var n=0,j=this.environment.depths.list.length;n<j;n++){r.push("depth"+this.environment.depths.list[n])}if(p){r.push(this.source.join("\n  "));return Function.apply(this,r)}else{var m="function "+(this.name||"")+"("+r.join(",")+") {\n  "+this.source.join("\n  ")+"}";Handlebars.log(Handlebars.logger.DEBUG,m+"\n\n");return m}},appendContent:function(i){this.source.push(this.appendToBuffer(this.quotedString(i)))},append:function(){var i=this.popStack();this.source.push("if("+i+" || "+i+" === 0) { "+this.appendToBuffer(i)+" }");if(this.environment.isSimple){this.source.push("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){var j=this.nextOpcode(1),i="";this.context.aliases.escapeExpression="this.escapeExpression";if(j[0]==="appendContent"){i=" + "+this.quotedString(j[1][0]);this.eat(j)}this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+i))},getContext:function(i){if(this.lastContext!==i){this.lastContext=i}},lookupWithHelpers:function(k,l){if(k){var i=this.nextStack();this.usingKnownHelper=false;var j;if(!l&&this.options.knownHelpers[k]){j=i+" = "+this.nameLookup("helpers",k,"helper");this.usingKnownHelper=true}else{if(l||this.options.knownHelpersOnly){j=i+" = "+this.nameLookup("depth"+this.lastContext,k,"context")}else{this.register("foundHelper",this.nameLookup("helpers",k,"helper"));j=i+" = foundHelper || "+this.nameLookup("depth"+this.lastContext,k,"context")}}j+=";";this.source.push(j)}else{this.pushStack("depth"+this.lastContext)}},lookup:function(j){var i=this.topStack();this.source.push(i+" = ("+i+" === null || "+i+" === undefined || "+i+" === false ? "+i+" : "+this.nameLookup(i,j,"context")+");")},pushStringParam:function(i){this.pushStack("depth"+this.lastContext);this.pushString(i)},pushString:function(i){this.pushStack(this.quotedString(i))},push:function(i){this.pushStack(i)},invokeMustache:function(k,j,i){this.populateParams(k,this.quotedString(j),"{}",null,i,function(l,n,m){if(!this.usingKnownHelper){this.context.aliases.helperMissing="helpers.helperMissing";this.context.aliases.undef="void 0";this.source.push("else if("+m+"=== undef) { "+l+" = helperMissing.call("+n+"); }");if(l!==m){this.source.push("else { "+l+" = "+m+"; }")}}})},invokeProgram:function(k,l,j){var i=this.programExpression(this.inverse);var m=this.programExpression(k);this.populateParams(l,null,m,i,j,function(n,p,o){if(!this.usingKnownHelper){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";this.source.push("else { "+n+" = blockHelperMissing.call("+p+"); }")}})},populateParams:function(p,k,t,q,x,w){var l=x||this.options.stringParams||q||this.options.data;var j=this.popStack(),v;var n=[],m,o,u;if(l){this.register("tmp1",t);u="tmp1"}else{u="{ hash: {} }"}if(l){var s=(x?this.popStack():"{}");this.source.push("tmp1.hash = "+s+";")}if(this.options.stringParams){this.source.push("tmp1.contexts = [];")}for(var r=0;r<p;r++){m=this.popStack();n.push(m);if(this.options.stringParams){this.source.push("tmp1.contexts.push("+this.popStack()+");")}}if(q){this.source.push("tmp1.fn = tmp1;");this.source.push("tmp1.inverse = "+q+";")}if(this.options.data){this.source.push("tmp1.data = data;")}n.push(u);this.populateCall(n,j,k||j,w,t!=="{}")},populateCall:function(n,j,k,q,o){var m=["depth0"].concat(n).join(", ");var i=["depth0"].concat(k).concat(n).join(", ");var p=this.nextStack();if(this.usingKnownHelper){this.source.push(p+" = "+j+".call("+m+");")}else{this.context.aliases.functionType='"function"';var l=o?"foundHelper && ":"";this.source.push("if("+l+"typeof "+j+" === functionType) { "+p+" = "+j+".call("+m+"); }")}q.call(this,p,i,j);this.usingKnownHelper=false},invokePartial:function(i){params=[this.nameLookup("partials",i,"partial"),"'"+i+"'",this.popStack(),"helpers","partials"];if(this.options.data){params.push("data")}this.pushStack("self.invokePartial("+params.join(", ")+");")},assignToHash:function(i){var j=this.popStack();var k=this.topStack();this.source.push(k+"['"+i+"'] = "+j+";")},compiler:e,compileChildren:function(j,n){var p=j.children,r,q;for(var o=0,k=p.length;o<k;o++){r=p[o];q=new this.compiler();this.context.programs.push("");var m=this.context.programs.length;r.index=m;r.name="program"+m;this.context.programs[m]=q.compile(r,n,this.context)}},programExpression:function(k){if(k==null){return"self.noop"}var p=this.environment.children[k],o=p.depths.list;var n=[p.index,p.name,"data"];for(var m=0,j=o.length;m<j;m++){depth=o[m];if(depth===1){n.push("depth0")}else{n.push("depth"+(depth-1))}}if(o.length===0){return"self.program("+n.join(", ")+")"}else{n.shift();return"self.programWithDepth("+n.join(", ")+")"}},register:function(i,j){this.useRegister(i);this.source.push(i+" = "+j+";")},useRegister:function(i){if(!this.context.registers[i]){this.context.registers[i]=true;this.context.registers.list.push(i)}},pushStack:function(i){this.source.push(this.nextStack()+" = "+i+";");return"stack"+this.stackSlot},nextStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return"stack"+this.stackSlot},popStack:function(){return"stack"+this.stackSlot--},topStack:function(){return"stack"+this.stackSlot},quotedString:function(i){return'"'+i.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'}};var a=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");var d=e.RESERVED_WORDS={};for(var c=0,b=a.length;c<b;c++){d[a[c]]=true}e.isValidJavaScriptVariableName=function(i){if(!e.RESERVED_WORDS[i]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(i)){return true}return false}})(Handlebars.Compiler,Handlebars.JavaScriptCompiler);Handlebars.precompile=function(d,c){c=c||{};var b=Handlebars.parse(d);var a=new Handlebars.Compiler().compile(b,c);return new Handlebars.JavaScriptCompiler().compile(a,c)};Handlebars.compile=function(b,a){a=a||{};var d;function c(){var g=Handlebars.parse(b);var f=new Handlebars.Compiler().compile(g,a);var e=new Handlebars.JavaScriptCompiler().compile(f,a,undefined,true);return Handlebars.template(e)}return function(f,e){if(!d){d=c()}return d.call(this,f,e)}};Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(d,e,f){var c=this.programs[d];if(f){return Handlebars.VM.program(e,f)}else{if(c){return c}else{c=this.programs[d]=Handlebars.VM.program(e);return c}}},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(d,c){c=c||{};return a.call(b,Handlebars,d,c.helpers,c.partials,c.data)}},programWithDepth:function(b,d,c){var a=Array.prototype.slice.call(arguments,2);return function(f,e){e=e||{};return b.apply(this,[f,e.data||d].concat(a))}},program:function(a,b){return function(d,c){c=c||{};return a(d,c.data||b)}},noop:function(){return""},invokePartial:function(a,b,d,e,c,f){options={helpers:e,partials:c,data:f};if(a===undefined){throw new Handlebars.Exception("The partial "+b+" could not be found")}else{if(a instanceof Function){return a(d,options)}else{if(!Handlebars.compile){throw new Handlebars.Exception("The partial "+b+" could not be compiled when running in runtime-only mode")}else{c[b]=Handlebars.compile(a);return c[b](d,options)}}}}};Handlebars.template=Handlebars.VM.template;// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);
/*jslint browser:true,devel:true,white:true,nomen:true,bad_new:true*/
/*globals jQuery,Backbone,Handlebars,_, undefined*/ 

(function ($, Backbone, _, H, undef) {
	"use strict";
	
	//Handlebars 'equal' helper, enables us to select an option
	H.registerHelper('equal', function(lvalue, rvalue, options) {
		if (arguments.length < 3) {
			throw new Error("Handlebars Helper equal needs 2 parameters");
		}
		if(+lvalue !== +rvalue ) {
			return options.inverse(this);
		} else {
			return options.fn(this);
		}
	});
	
	
	//All variables go here
	var CourseInputModel,
		CourseInputCollection,
		MyCourseInputCollection,
		CourseInputListView,
		MyCourseInputListView,
		CourseInputView,
		MyCourseInputView,
		AppRouter,
		MyAppRouter,
		SubjectModel,
		SubjectCollection,
		subjects,
		MySubjectCollection,
		SubjectListView,
		
		CourseModel,
		MyCourseModel,
		CourseView,
		MyCourseView,
		CourseCollection,
		MyCourseCollection,
		CourseScheduleView,
		MyCourseScheduleView,
		
		CourseSlotModel,
		CourseSlotCollection,
		CourseSlotView,
		PaginationView,
		
		cacheKey;
		
		cacheKey = $('body').data('cache_key');
	
	/**** First module responsible for getting data from the inputs ****/
	SubjectModel = Backbone.Model.extend({
		
	});
	
	SubjectCollection = Backbone.Collection.extend({
		model: SubjectModel
	});
	
	SubjectListView = Backbone.View.extend({
			template: H.compile($('#course-input-subjects').html()),
			
			initialize: function() {
				this.$el.on('change', function() {
					console.log('Change!!!');
				});
			},
			
			render: function() {
				var subjects = [];
				_.each(this.collection.models, function(model) {
					subjects.push(model.toJSON());
				});
				this.$el.html(this.template({subjects: subjects}))
				.val(this.options.selected_id);
				return this;
			}
	});
	
	//Course model
	CourseInputModel = Backbone.Model.extend({
		defaults: {
			subject_id: null,
			number: null,
			crn: null
		},
		
		clear: function() {
			this.destroy();
		}
	});
	
	//Course view
	CourseInputView = Backbone.View.extend({
		tagName: 'div',
		className: 'cli-course-input',
		template: H.compile($('#course-input-tmpl').html()),
		numberTemplate: H.compile($('#course-input-numbers').html()),
		
		events: {
			'change select[name=subject_id]':'fillNumber',
			'click .remove-course' : 'removeCourse',
			'keyup .course-crn' : 'crnKeyUp'
		},
		
		crnKeyUp: function(event) {
			if(this.$(event.target).val().length > 0) {
				this.$('select').prop('disabled',true).trigger('liszt:updated');
			} else {
				this.$('select').prop('disabled',false).trigger('liszt:updated');
			}
		},
		
		fillNumber: function() {
			var modelId,
				numbers,
				selectedModel;
			modelId = this.$('select[name=subject_id]').val();
			if (modelId) {
				selectedModel = MySubjectCollection.get(modelId).toJSON();	
			} else {
				selectedModel = {numbers:[]};
			}
			this.$('select[name=number]').html(this.numberTemplate(selectedModel))
			.trigger('liszt:updated');
			
		},
		
		render: function() {
			var view,
				subjects = [],
				data;
			data = this.model.toJSON();
			_.each(MySubjectCollection.models, function(model) {
				subjects.push(model.toJSON());
			});
			data.subjects = subjects;
			this.$el.html(this.template(data))
			.find('select[name=subject_id]').val(this.model.get('subject_id')).trigger('change')
			.end()
			.find('select[name=number]').val(this.model.get('number'));


			return this;
		},
		
		afterRender: function() {
			this.$('select').chosen();
		},
		
		initialize: function() {
      this.model.on('destroy', this.remove, this);
    },
		
		removeCourse: function() {
			this.model.clear();
		}
	});

	//Course collection, has all the courses inside it
	CourseInputCollection = Backbone.Collection.extend({
		model: CourseInputModel
	});
	
	//Course collection view, updates the URL and fills the courses
	CourseInputListView = Backbone.View.extend({
		el: '.cil',
		
		page: 1,
		
		events: {
			"click #add-course"	: 'addInputModel',
			"click .cil-submit"	: 'updateUrlEvent',
			'keypress .course-input' : 'keyLog'
		},
		
		keyLog: function(e) {
			if (e.keyCode === 13) {
				this.updateUrlEvent();
			}
		},
		
		initialize: function() {
			this.collection.on('add', this.addInput, this);
		},
		
		addInput: function(model) {
			var view, $viewEl;
			view = new CourseInputView({model:model});
			view.render();
			$viewEl = view.$el;
			this.$('.cil-courses').append($viewEl);
			view.afterRender();
		},
		
		addInputModel: function() {
			this.collection.add(new CourseInputModel());
			
		},
		
		updateUrlEvent: function(){
			this.updateUrl();
		},
		
		updateUrl: function(action) {
			if (action === undef) {
				this.page = 1;
			} else if(action === -1) {
				this.page -= 1;
			} else if (action === 1) {
				this.page += 1;
			}
			this.page = Math.max(1, this.page);
			var data = [], url = '', days = [], val;
			this.$('.cli-course-input').each(function() {
				data.push([
					$(this).find('select[name=subject_id]').val(),$(this).find('select[name=number]').val(),$(this).find('input[name=crn]').val()
				]);
			});
			_.each(data, function(item) {
				url = url + item.join('-') + '_';
			});
			$('input[name^="filter"]').each(function(){
				if ($(this).prop('checked')) {
					days.push($(this).val());
				}
			});
			days = days.join('-') + '_';
			url = 'c/' + this.page + '_' + days + url.substr(0, url.length-1);
			
			MyAppRouter.navigate(url, {trigger: true});
		},
		
		updateFilters: function(days) {
		 var $boxes, self;
		 self = this;
		 $boxes = self.$('input[name^="filter"]');
		 $boxes.prop('checked', false);
		 
		 _.each(days, function(day) {
			 self.$('input[name="filter[' + day + ']"]').prop('checked', true);
		 });
		}
		
	});
	
	
	//Create the necessary models and views	
	subjects = $('#subjects-data').data('subjects');
	MySubjectCollection = new SubjectCollection();
	MySubjectCollection.reset(subjects);
	MyCourseInputCollection = new CourseInputCollection();
	MyCourseInputListView = new CourseInputListView({collection:MyCourseInputCollection});
	
	/**** End of First Module ****/
	
	/**********************************************************************/
	
	/**** Second module responsible for displaying the actual schedule ****/
	
	//Each Course has a CourseSlot that will appear on the screen
	CourseSlotModel = Backbone.Model.extend({
	});
	
	//The CourseSlot collection
	CourseSlotCollection = Backbone.Collection.extend({
		model: CourseSlotModel
	});
	
	//The CourseModel that we will be fetching from the server
	CourseModel = Backbone.Model.extend({
	});
	
	//The CourseModels will be encapsulated inside the CourseCollection
	CourseCollection = Backbone.Collection.extend({
		model: CourseModel,
		
		maxPage: 0,
		page: 0,
		
		//Specify the url where the courses will be fetched
		url: '/siscode/courses/fetch',
		
		//Each course has a specific color
		colors: [
			{
				background: '#73A5F7',
				border: '#03F'
			},
			{
				background: '#FF828E',
				border: '#D80505'
			},
			{
				background: '#FF71FF',
				border: '#B300B3'
			},
			{
				background: '#FFFF80',
				border: '#FF0'
			},
			{
				background: '#AFA',
				border: '#80FF00'
			},
			{
				background: '#FFA980',
				border: '#FF8000'
			}
		],
		
		initialize: function() {
			this.on('reset', this.fixSlots, this);
		},
		
		//Here we assign a color to each course and put the course info inside the course slots
		fixSlots: function(col) {
			var courseSlot, self, color;
			self = this;
			_.each(col.models, function(model, key) {
				//Set a color for each CourseModel
				if(self.colors[key] !== undef) {
					color = self.colors[key];
				} else {
					color = self.colors[key%self.colors.length];
				}
				model.set('color', color);
				//Get the courseSlot which are in turn models
				courseSlot = model.get('CourseSlot');
				_.each(courseSlot.models, function(courseSlotModel) {
					//Put the courseModel in the courseSlot (inception!) so we can easily retrieve the course info
					courseSlotModel.courseModel = model;
				});
			});
		},
		
		//Get the data from the server and create the corresponding models and collections
		parse: function(response) {
			var data = [];
			this.maxPage = response.pagination.total;
			this.page = response.pagination.page;
			//The reponse that we get from the server has 'status' and 'content', inside content we have an array that has 'Course' and 'CourseSlot' 
			_.each(response.content, function(item) {
				var courseSlotModels = [], modelData;
				_.each(item.CourseSlot, function(courseSlotData) {
					//Fill the courseSlotModels array with each course slot
					courseSlotModels.push(new CourseSlotModel(courseSlotData));
				});
				//inside modelData put the Course info and the CourseSlot as a collection
				modelData = item.Course;
				modelData.CourseSlot = new CourseSlotCollection(courseSlotModels);
				//Store all the model data inside 'data' variable that will be returned later
				data.push(modelData);
			});
			return data;
		}
	});
	
	//CourseScheduleView is the view of the CourseCollection holding all the courses fetched
	CourseScheduleView = Backbone.View.extend({
		el: '.schedule',
		
		initialize: function() {
			var self = this;
			this.collection.on('reset', this.addAll, this);
			this.$('.paginator').each(function() {
				$(this).html((new PaginationView({collection:self.collection})).render().$el);
			});
		},
		
		loading: function(show) {
			if (show) {
				this.$('.loader').show();
			} else {
				this.$('.loader').hide();
			}
		},
		
		addAll: function(col) {
			this.$('.schedule-day').html('');
			var self = this;
			_.each(col.models, function(model) {
				self.addOne(model);
			});
		},
		
		addOne: function(model) {	
			var view,
				$list,
				self,
				topPos,
				startTime,
				endTime,
				height;
			self = this;
			_.each(model.get('CourseSlot').models, function (modelSlot) {
				view = new CourseSlotView({model:modelSlot});
				view.render();
				$list = self.$('.day-' + modelSlot.get('day'));
				$list.append(view.$el);
				view.afterInsert();
				startTime = self.fixTime(modelSlot.get('start_time'));
				endTime = self.fixTime(modelSlot.get('end_time'));
				topPos = 40 + (startTime * 40);
				height = 40 + (endTime * 40) - topPos;
				view.$el.css({
					position: 'absolute',
					top: topPos + 'px',
					height: height + 'px'
				});
			});
		},
		
		fixTime: function(time) {
				time = time.split(':');
				time[0] = +time[0];
				time[1] = +time[1];
				time = (time[0] - 7) + time[1]/60;
				return time;
		}
		
	});
	
	//The CourseSlot view
	CourseSlotView = Backbone.View.extend({
		tagName: 'div',
		className: 'course-slot',
		
		render: function() {
			var $template,
				compiled,
				data;
			$template = $('#course-slot-view-tmpl').html();
			compiled = H.compile($template);
			data = this.model.toJSON();
			data.Course = this.model.courseModel.toJSON();
			data.start_time = data.start_time.substr(0, 5);
			data.end_time = data.end_time.substr(0, 5);
			data.Course.subject_code = MySubjectCollection.get(data.Course.subject_id).get("code");
			this.$el.html(compiled(data));
			this.$('.course-slot-wrapper').css({
				backgroundColor: this.model.courseModel.get('color').background,
				borderColor: this.model.courseModel.get('color').border
			});
			
			return this;
		},
		
		afterInsert: function() {
			this.$el.tooltip({
				tooltip: '.tooltip-content'
			});
		}
	});
	
	PaginationView = Backbone.View.extend ({
		tagName: 'div',
		
		events: {
			'click .next': 'updateUrlNext',
			'click .previous': 'updateUrlPrevious'
		},
		
		updateUrlNext: function() {
			if (+this.collection.page < +this.collection.maxPage) {
				MyCourseInputListView.updateUrl(1);
			}
		},
		
		updateUrlPrevious: function() {
			MyCourseInputListView.updateUrl(-1);
		},
		
		initialize: function() {
			this.collection.on('reset', this.render, this);
		},
		
		render: function() {
			var $template, compiled, data;
			$template = $('#pagination-view-tmpl').html();
			compiled = H.compile($template);
			data = {
				page: this.collection.page,
				maxPage: this.collection.maxPage
			};
			this.$el.html(compiled(data));
			if (+this.collection.page >= +this.collection.maxPage) {
				this.$('.next').addClass('disabled');
			}
			if (+this.collection.page === 1) {
				this.$('.previous').addClass('disabled');
			}
			if (this.collection.maxPage === 0) {
				this.$el.hide();
			} else {
				this.$el.show();
			}
			return this;
		}
	});

	//Create the necessary collections and views
	MyCourseCollection = new CourseCollection();
	MyCourseScheduleView = new CourseScheduleView({collection:MyCourseCollection});
	/***** End of the second module ****/
	
	/**********************************************************************/
	
	/**** Router module common to both modules  ****/
	
	AppRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'c/:d': 'fillCourseInput'
		},
		
		index: function() {
			MyCourseInputCollection.add([new CourseInputModel(), new CourseInputModel()]);
		},

		fillCourseInput: function(d) {
			var data = [],
				models,
				array,
				days,
				page,
				joinedCourses = [],
				url;
			data = d.split('_');
			page = data.splice(0,1);
			page = page[0];
			days = data.splice(0,1);
			days = days[0].split('-');
			_.each(data, function(item, key) {
				array = item.split('-');
				data[key] = {
					subject_id: array[0],
					number: array[1],
					crn: array[2]
				};
			});
			
			models = [];
			_.each(MyCourseInputCollection.models, function(model) {
				models.push(model);
			});
			_.each(models, function(model) {
				model.clear();
			});
			
			_.each(data, function(modelData) {
				MyCourseInputCollection.add(new CourseInputModel(modelData));
			});
			
			MyCourseInputListView.updateFilters(days);
			MyCourseInputListView.page = +page;
			
			_.each(data, function(course, key) {
				if (course.crn !== '') {
					joinedCourses.push('--' + course.crn);
				} else if (course.subject_id !== '' && course.number !== '') {
					joinedCourses.push(course.subject_id + '-' + course.number + '-');
				}
			});
			joinedCourses = _.sortBy(joinedCourses, function(item) {
				return item;
			});
			url = page + '_' + days.join('-') + '_' + joinedCourses.join('_') + '.json?_=' + cacheKey;

			MyCourseCollection.url = '/siscode/courses/fetch/' + url;
			MyCourseScheduleView.loading(true);
			MyCourseCollection.reset();
			MyCourseCollection.fetch({
				complete: function() {
					MyCourseScheduleView.loading(false);
				}
			});
		}
	});
	MyAppRouter = new AppRouter();
	
	Backbone.history.start({pushState: true, root: '/siscode/'});

	/**** End of Router Module ****/
	
}(jQuery, Backbone, _, Handlebars));