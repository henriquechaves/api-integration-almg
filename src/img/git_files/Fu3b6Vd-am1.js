if (self.CavalryLogger) { CavalryLogger.start_js(["mhrZe"]); }

__d('BasicFBNux',['AsyncRequest','XBasicFBNuxDismissController','XBasicFBNuxViewController'],(function a(b,c,d,e,f,g){var h={subscribeHide:function i(j,k){j.subscribe('hide',h.onDismiss.bind(this,k));},onView:function i(j){var k=c('XBasicFBNuxViewController').getURIBuilder().setInt('nux_id',j).getURI();new (c('AsyncRequest'))().setURI(k).send();},onDismiss:function i(j){var k=c('XBasicFBNuxDismissController').getURIBuilder().setInt('nux_id',j).getURI();new (c('AsyncRequest'))().setURI(k).send();}};f.exports=h;}),null);
__d('FileInputUploader',['ArbiterMixin','DOM','DTSG','FileForm','Form','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this._inputElem=k;this._data={};}j.prototype.setInput=function(k){'use strict';this._inputElem=k;return this;};j.prototype.setURI=function(k){'use strict';this._uri=k;return this;};j.prototype.setData=function(k){'use strict';this._data=k;return this;};j.prototype.setPreprocessHandler=function(k){'use strict';this._preprocessHandler=k;return this;};j.prototype.setNetworkErrorRetryLimit=function(k){'use strict';this._retryLimit=k;return this;};j.prototype.setFiles=function(k){'use strict';this._files=k;return this;};j.prototype.setAllowCrossOrigin=function(k){'use strict';this._allowCrossOrigin=!!k;return this;};j.prototype.setAllowCrossPageTransition=function(k){'use strict';this._allowCrossPageTransition=!!k;return this;};j.prototype.setUploadInParallel=function(k){'use strict';this._uploadInParallel=!!k;return this;};j.prototype.setConcurrentLimit=function(k){'use strict';this._concurrentLimit=k;return this;};j.prototype.abort=function(){'use strict';if(this._fileForm){this._fileForm.abort();this._destroyFileForm();}};j.prototype.send=function(){'use strict';this._createForm();var k=!this._inputElem.parentElement;if(!k){var l=this._inputElem.cloneNode(false);c('DOM').replace(this._inputElem,l);}c('DOM').appendContent(this._formElem,this._inputElem);c('DOM').appendContent(document.body,this._formElem);this._fileForm.submit();if(!k)c('DOM').replace(l,this._inputElem);this._removeFormEl();};j.prototype._onFileFormEvent=function(k,l){'use strict';if(k==='success'||k==='failure')this._destroyFileForm();return this.inform(k,l);};j.prototype._createForm=function(){'use strict';this._destroyFileForm();this._formElem=c('DOM').create('form',{action:this._uri,method:'post'});this._fileForm=new (c('FileForm'))(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit});if(this._files)this._fileForm.setFiles(this._files);this._fileForm.subscribe(c('FileForm').EVENTS,this._onFileFormEvent.bind(this));c('Form').createHiddenInputs(babelHelpers['extends']({fb_dtsg:c('DTSG').getToken()},this._data),this._formElem);};j.prototype._removeFormEl=function(){'use strict';c('DOM').remove(this._formElem);this._formElem=null;};j.prototype._destroyFileForm=function(){'use strict';if(this._fileForm){this._fileForm.destroy();this._fileForm=null;}};f.exports=j;}),null);
__d('escapeJSQuotes',[],(function a(b,c,d,e,f,g){function h(i){if(typeof i=='undefined'||i==null||!i.valueOf())return '';return i.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}f.exports=h;}),null);
__d('PageTransitions',['invariant','fbt','Arbiter','Bootloader','DOMQuery','DOMScroll','Env','Event','HistoryManager','JSLogger','LayerHideOnEscape','PageHooks','PageNavigationStageLogger','PageTransitionsConfig','PageTransitionsRegistrar','React','ScriptPath','URI','Vector','areEqual','clickRefAction','escapeJSQuotes','ge','goOrReplace','isInIframe'],(function a(b,c,d,e,f,g,h,i){var j=['mh_','killabyte','tfc_','tfi_'],k={};function l(q,r){k[q.getUnqualifiedURI()]=r;}function m(q){return k[q.getUnqualifiedURI()];}function n(q){delete k[q.getUnqualifiedURI()];}function o(){var q={};window.location.search.slice(1).split('&').forEach(function(r){var s=r.split('='),t=s[0],u=s[1];if(j.some(function(v){return t.startsWith(v);}))q[t]=u;});return q;}var p={_scroll_locked:false,_transitions_disabled:false,isInitialized:function q(){return !!p._initialized;},_init:function q(){if(!c('Env').ALLOW_TRANSITION_IN_IFRAME&&c('isInIframe')())return;if(p._initialized)return p;var r=c('PageTransitionsRegistrar').getMostRecentURI();p._current_uri=r;p._most_recent_uri=r;p._next_uri=r;p._initialized=true;var s,t=c('URI').getRequestURI(false);if(t.getFragment().startsWith('/')){s=t.getFragment();}else s=r;c('HistoryManager').init().setCanonicalLocation('#'+s).registerURIHandler(p._historyManagerHandler);c('Event').listen(window,'scroll',function(){if(!p._scroll_locked)l(p._current_uri,c('Vector').getScrollPosition());});return p;},registerHandler:c('PageTransitionsRegistrar').registerHandler,removeHandler:c('PageTransitionsRegistrar').removeHandler,getCurrentURI:function q(r){this._init();if(!p._current_uri&&!r)return new (c('URI'))(p._most_recent_uri);return new (c('URI'))(p._current_uri);},isTransitioning:function q(){this._init();return !p._current_uri;},getNextURI:function q(){this._init();return this._next_uri;},getMostRecentURI:function q(){this._init();return new (c('URI'))(p._most_recent_uri);},go:function q(r,s){this._init();var t=o(),u=new (c('URI'))(r).removeQueryData('quickling').addQueryData(t).getQualifiedURI();c('JSLogger').create('pagetransition').debug('go',{uri:u.toString()});n(u);!s&&c('clickRefAction')('uri',{href:u.toString()},null,'INDIRECT');p._loadPage(u,function(v){if(v){c('HistoryManager').go(u.toString(),false,s);}else c('goOrReplace')(window.location,u,s);});},_historyManagerHandler:function q(r){if(r.charAt(0)!='/')return false;c('clickRefAction')('h',{href:r});if(!c('ScriptPath').getClickPointInfo())c('ScriptPath').setClickPointInfo({click:'back'});p._loadPage(new (c('URI'))(r),function(s){if(!s)c('goOrReplace')(window.location,r,true);});return true;},_loadPage:function q(r,s){if(new (c('URI'))(r).getFragment()&&c('areEqual')(new (c('URI'))(r).setFragment(null).getQualifiedURI(),new (c('URI'))(p._current_uri).setFragment(null).getQualifiedURI())){c('Arbiter').inform("pre_page_fragment_transition",{from:new (c('URI'))(p._current_uri).getFragment(),to:new (c('URI'))(r).getFragment()});if(p.restoreScrollPosition(r)){p._current_uri=p._most_recent_uri=r;c('Arbiter').inform("page_fragment_transition",{fragment:new (c('URI'))(r).getFragment()});return;}}c('PageNavigationStageLogger').setCookieForNavigation(r);var t;if(p._current_uri)t=m(p._current_uri);var u=function x(){if(t&&p._current_uri)l(p._current_uri,t);p._current_uri=null;p._next_uri=r;if(t)c('DOMScroll').scrollTo(t,false);p._scroll_locked=true;var y=p._handleTransition(r);if(s)if(y===c('PageTransitionsRegistrar').DELAY_HISTORY){setTimeout(function(){return s(y);},0);}else s(y);},v=p._next_uri;p._next_uri=r;var w=c('PageHooks').runHooks('onbeforeleavehooks');p._next_uri=v;if(w){p._warnBeforeLeaving(w,u);}else u();},_handleTransition:function q(r){window.onbeforeleavehooks=undefined;if(p._transitions_disabled||!r.isSameOrigin())return false;var s=c('PageTransitionsConfig').reloadOnBootloadError&&this._hasBootloadErrors();if(s)return false;var t,u=b.AsyncRequest;if(u)t=u.getLastID();c('Arbiter').inform("pre_page_transition",{from:p.getMostRecentURI(),to:r});var v=c('PageTransitionsRegistrar')._getTransitionHandlers();for(var w=v.length-1;w>=0;--w){var x=v[w];if(!x)continue;for(var y=x.length-1;y>=0;--y){var z=x[y](r);if(z===true||z===c('PageTransitionsRegistrar').DELAY_HISTORY){var aa={sender:this,uri:r,id:t};try{c('Arbiter').inform("page_transition",aa);}catch(ba){}return z;}else x.splice(y,1);}}return false;},disableTransitions:function q(){p._transitions_disabled=true;},_hasBootloadErrors:function q(){return c('Bootloader').getErrorUrls().length>0;},unifyURI:function q(){this._init();p._current_uri=p._most_recent_uri=p._next_uri;},transitionComplete:function q(r){this._init();p._scroll_locked=false;p._executeCompletionCallbacks();p.unifyURI();if(!r)p.restoreScrollPosition(p._current_uri);try{if(document.activeElement&&document.activeElement.nodeName==='A')document.activeElement.blur();}catch(s){}},_executeCompletionCallbacks:function q(){var r=c('PageTransitionsRegistrar')._getCompletionCallbacks();if(r.length>0){c('PageTransitionsRegistrar')._resetCompletionCallbacks();r.forEach(function(s){return s();});}},registerCompletionCallback:c('PageTransitionsRegistrar').registerCompletionCallback,rewriteCurrentURI:function q(r,s){this._init();var t=c('PageTransitionsRegistrar')._getTransitionHandlers(),u=t.length||1,v=false;c('PageTransitionsRegistrar').registerHandler(function(){if(r==p.getMostRecentURI().getUnqualifiedURI().toString()){p.transitionComplete();return true;}v=true;},u);p.go(s,true);t.length===u+1&&t[u].length===(v?0:1)||h(0);t.length=u;},_warnBeforeLeaving:function q(r,s){c('Bootloader').loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(t,u,v,w,x,y){var z=new t({width:450,addedBehaviors:[c('LayerHideOnEscape')]},c('React').createElement('div',null,c('React').createElement(u,{showCloseButton:false},i._("Sair da P\u00e1gina?")),c('React').createElement(v,null,c('React').createElement(y,{shade:'medium',size:'medium'},r)),c('React').createElement(x,null,c('React').createElement(w,{action:'cancel',label:i._("Ficar nesta P\u00e1gina")}),c('React').createElement(w,{action:'confirm',use:'confirm',label:i._("Sair desta P\u00e1gina")}))));z.subscribe('confirm',function(){z.hide();s();});z.show();},'PageTransitions');},restoreScrollPosition:function q(r){var s=m(r);if(s){c('DOMScroll').scrollTo(s,false);return true;}function t(w){if(!w)return null;var x="a[name='"+c('escapeJSQuotes')(w)+"']";return c('DOMQuery').scry(document.body,x)[0]||c('ge')(w);}var u=t(new (c('URI'))(r).getFragment());if(u){var v=c('Vector').getElementPosition(u);v.x=0;c('DOMScroll').scrollTo(v);return true;}return false;}};f.exports=p;b.PageTransitions=p;}),null);