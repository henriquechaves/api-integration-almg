if (self.CavalryLogger) { CavalryLogger.start_js(["dgZoU"]); }

__d("VideoBroadcastStatus",[],(function a(b,c,d,e,f,g){f.exports={PREVIEW:"PREVIEW",LIVE:"LIVE",LIVE_STOPPED:"LIVE_STOPPED",VOD_READY:"VOD_READY",SEAL_STARTED:"SEAL_STARTED",SCHEDULED_PREVIEW:"SCHEDULED_PREVIEW",SCHEDULED_LIVE:"SCHEDULED_LIVE",SCHEDULED_EXPIRED:"SCHEDULED_EXPIRED",SCHEDULED_CANCELED:"SCHEDULED_CANCELED",FIRST_PARTY_PREVIEW:"FIRST_PARTY_PREVIEW"};}),null);
__d("VideoPlayerFallbackEvents",[],(function a(b,c,d,e,f,g){f.exports={ENTER:"VideoPlayerFallbackEvents\/enter",RECOVER:"VideoPlayerFallbackEvents\/recover"};}),null);
__d('VideoWithClickPlayPause',['VideoPlayerReason','logVideosClickTracking'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$VideoWithClickPlayPause1=i;this.$VideoWithClickPlayPause2=this.$VideoWithClickPlayPause1.getVideoNode();this.$VideoWithClickPlayPause1.addListener('clickVideo',this.$VideoWithClickPlayPause3.bind(this));if(this.$VideoWithClickPlayPause1.hasSeenClick())this.$VideoWithClickPlayPause3();}h.prototype.$VideoWithClickPlayPause3=function(){'use strict';if(this.$VideoWithClickPlayPause1.isState('playing')){if(this.$VideoWithClickPlayPause1.getOption('VideoWithLiveBroadcast','isLive'))return;this.$VideoWithClickPlayPause1.pause(c('VideoPlayerReason').USER);}else{c('logVideosClickTracking')(this.$VideoWithClickPlayPause2);this.$VideoWithClickPlayPause1.play(c('VideoPlayerReason').USER);}};f.exports=h;}),null);
__d('VideoWithVODBroadcast',[],(function a(b,c,d,e,f,g){function h(i){'use strict';i.registerOption('VideoWithVODBroadcast','isLiveVOD',function(){return true;});}f.exports=h;}),null);
__d('VideoAutoplayControllerBase',['Arbiter','DesktopHscrollUnitEventConstants','Event','VideoPlayerExperiments','VideoPlayerAbortLoadingExperiment','VideoPlayerReason','Visibility','destroyOnUnload','SubscriptionsHandler','throttle','setTimeoutAcrossTransitions','emptyFunction'],(function a(b,c,d,e,f,g){var h=3000;function i(l,m){var n=[];return function(){var o=Date.now();n.unshift(o);var p=0;while(n[++p]+m>o);n=n.slice(0,p);return n.length<=l;};}function j(l,m,n){var o=null;return function(){var p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];if(m()){l.apply(undefined,r);return c('emptyFunction').thatReturnsFalse;}else if(!o)(function(){var t=setTimeout(function(){o=null;l.apply(undefined,r);},n);o=function u(){if(!o)return false;clearTimeout(t);o=null;return true;};})();return o;};}function k(l){'use strict';this.$VideoAutoplayControllerBase3=null;this.$VideoAutoplayControllerBase2=null;this.$VideoAutoplayControllerBase8=[];this.$VideoAutoplayControllerBase1=l;this.$VideoAutoplayControllerBase4=null;this.$VideoAutoplayControllerBase5=new (c('SubscriptionsHandler'))();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerBase8=[];this.$VideoAutoplayControllerBase3=null;if(this.$VideoAutoplayControllerBase4){this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=null;}this.$VideoAutoplayControllerBase5.release();}.bind(this));if(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow)this.$VideoAutoplayControllerBase6=j(function(m){var n=this.$VideoAutoplayControllerBase3;if(n)n.playWithoutUnmute(m);}.bind(this),i(c('VideoPlayerExperiments').autoplayMaxCallsPerWindow,c('VideoPlayerExperiments').autoplayThrottleWindow),c('VideoPlayerExperiments').autoplayThrottleDelay);this.$VideoAutoplayControllerBase7=c('emptyFunction').thatReturnsFalse;}k.prototype.getVideoUnits=function(){'use strict';return this.$VideoAutoplayControllerBase8;};k.prototype.setVideoUnits=function(l){'use strict';this.$VideoAutoplayControllerBase8=l;};k.prototype.addVideoUnit=function(l){'use strict';this.$VideoAutoplayControllerBase8.push(l);};k.prototype.getPlayingVideoUnit=function(){'use strict';return this.$VideoAutoplayControllerBase3;};k.prototype.setPlayingVideoUnit=function(l){'use strict';this.$VideoAutoplayControllerBase3=l;if(this.$VideoAutoplayControllerBase3)this.setupPlayingVideoUnitSubscriptions();};k.prototype.playVideo=function(l,m){'use strict';if(c('VideoPlayerExperiments').disableAutoplayForInactiveTab&&c('Visibility').isHidden()){this.$VideoAutoplayControllerBase2=l;return;}this.setPlayingVideoUnit(l);if(this.$VideoAutoplayControllerBase3){var n=this.$VideoAutoplayControllerBase6;if(n){this.$VideoAutoplayControllerBase7=n.call(this,m);}else this.$VideoAutoplayControllerBase3.playWithoutUnmute(m);}};k.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';throw new Error('Should be overridden');};k.prototype.addSubscriberVideoUnit=function(){'use strict';if(!this.getVideoUnits().length){this.$VideoAutoplayControllerBase5.addSubscriptions(c('Event').listen(window,'resize',this.updateAutoplay.bind(this)),c('Event').listen(window,'blur',this.$VideoAutoplayControllerBase9.bind(this)),c('Event').listen(window,'focus',this.$VideoAutoplayControllerBase10.bind(this)),c('Visibility').addListener(c('Visibility').HIDDEN,this.$VideoAutoplayControllerBase9.bind(this)),c('Visibility').addListener(c('Visibility').VISIBLE,this.$VideoAutoplayControllerBase10.bind(this)),c('Arbiter').subscribe(c('DesktopHscrollUnitEventConstants').HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this)));if(!this.$VideoAutoplayControllerBase11())this.$VideoAutoplayControllerBase12();}};k.prototype.$VideoAutoplayControllerBase9=function(){'use strict';if(!this.$VideoAutoplayControllerBase2){this.$VideoAutoplayControllerBase2=this.getPlayingVideoUnit();this.$VideoAutoplayControllerBase13(c('VideoPlayerReason').PAGE_VISIBILITY);}};k.prototype.$VideoAutoplayControllerBase10=function(){'use strict';if(this.$VideoAutoplayControllerBase2){this.playVideo(this.$VideoAutoplayControllerBase2,c('VideoPlayerReason').PAGE_VISIBILITY);this.$VideoAutoplayControllerBase2=null;}};k.prototype.$VideoAutoplayControllerBase12=function(){'use strict';if(this.$VideoAutoplayControllerBase4)this.$VideoAutoplayControllerBase4.remove();this.$VideoAutoplayControllerBase4=c('Event').listen(window,'scroll',c('throttle')(this.updateAutoplay.bind(this),this.$VideoAutoplayControllerBase1));};k.prototype.$VideoAutoplayControllerBase11=function(){'use strict';return !!this.$VideoAutoplayControllerBase4;};k.prototype.getClosestVideoUnits=function(l){'use strict';return this.$VideoAutoplayControllerBase8.filter(function(m){return m.getDistanceToViewport()>=0;}).sort(function(m,n){return m.getDistanceToViewport()-n.getDistanceToViewport();}).slice(0,l);};k.prototype.getVisibleUnits=function(){'use strict';var l=[];this.$VideoAutoplayControllerBase8.forEach(function(m){if(m.isVisible()){l.push(m);if(!m.wasVisible){m.wasVisible=true;m.logDisplayed();}}else m.wasVisible=false;});return l;};k.prototype.pausePlayingVideo=function(l,m){'use strict';var n=this.$VideoAutoplayControllerBase3;if(n){if(!this.$VideoAutoplayControllerBase7())n.pause(l);if(c('VideoPlayerAbortLoadingExperiment').canAbort&&typeof n.getIsInChannel==='function'&&!n.getIsInChannel()&&!m)c('setTimeoutAcrossTransitions')(function(){if(!n.isState('playing')&&typeof n.abortLoading==='function')n.abortLoading();},h);this.$VideoAutoplayControllerBase3=null;}};k.prototype.$VideoAutoplayControllerBase13=function(l){'use strict';this.pausePlayingVideo(l,true);};k.prototype.updateAutoplay=function(){'use strict';throw new Error('Should be overridden');};f.exports=k;}),null);
__d("XVideoAutoplayNuxAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/autoplay\/nux\/",{});}),null);
__d("XVideoAutoplayNuxDismissAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/autoplay\/nux\/dismiss\/",{});}),null);
__d("XVideoAutoplayNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video\/autoplay\/nux\/log\/view\/",{});}),null);
__d('VideoAutoplayControllerX',['csx','AsyncRequest','DOM','Event','Network','ifRequired','Run','SubscriptionsHandler','VideoAutoplayControllerBase','VideoPlayerExperiments','VideoPlayerPreloadExperiment','VideoPlayerReason','XVideoAutoplayNuxAsyncController','XVideoAutoplayNuxDismissAsyncController','XVideoAutoplayNuxLogViewAsyncController','destroyOnUnload','getViewportDimensions'],(function a(b,c,d,e,f,g,h){var i,j,k=null,l=500,m=false;function n(){return !c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad||m;}i=babelHelpers.inherits(o,c('VideoAutoplayControllerBase'));j=i&&i.prototype;function o(){'use strict';j.constructor.call(this,l);this.$VideoAutoplayControllerX1=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX2=new (c('SubscriptionsHandler'))();this.$VideoAutoplayControllerX3=true;this.$VideoAutoplayControllerX4=true;this.$VideoAutoplayControllerX5=null;this.$VideoAutoplayControllerX6=null;this.$VideoAutoplayControllerX7=false;this.$VideoAutoplayControllerX8=null;this.$VideoAutoplayControllerX9=false;this.$VideoAutoplayControllerX10=false;this.$VideoAutoplayControllerX11=false;var p=c('XVideoAutoplayNuxAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(p).setAllowCrossPageTransition().send();c('destroyOnUnload')(function(){this.$VideoAutoplayControllerX12();if(this===k)k=null;}.bind(this));c('Run').onAfterLoad(function(){m=true;if(c('VideoPlayerExperiments').delayAutoplayUntilAfterLoad)if(k)k.updateAutoplay();});}o.registerVideoUnit=function(p){'use strict';if(k==null)k=new o();k.addSubscriberVideoUnit();k.addVideoUnit(p);k.$VideoAutoplayControllerX13(p);k.$VideoAutoplayControllerX14();if(p.isVisible()&&n())k.updateAutoplay();if(k.shouldRestoreAllSubsequentStreamBufferSizes())k.restoreStreamBufferSize();};o.setShouldAutoplay=function(p){'use strict';if(k==null)k=new o();k.$VideoAutoplayControllerX3=p;k.$VideoAutoplayControllerX4=p;k.updateAutoplay();};o.prototype.$VideoAutoplayControllerX12=function(){'use strict';this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX2.release();};o.setAutoplayNux=function(p,q){'use strict';if(k==null)return;k.$VideoAutoplayControllerX5=p;k.$VideoAutoplayControllerX6=q;k.$VideoAutoplayControllerX7=true;var r=c('DOM').find(q.getContentRoot(),"._5cqr");c('Event').listen(r,'click',function(){k.$VideoAutoplayControllerX15();});var s=c('DOM').scry(q.getContentRoot(),"._36gl")[0];if(s)c('Event').listen(s,'click',function(){k.$VideoAutoplayControllerX15();});};o.prototype.$VideoAutoplayControllerX15=function(){'use strict';this.$VideoAutoplayControllerX6.hide();this.$VideoAutoplayControllerX7=false;var p=c('XVideoAutoplayNuxDismissAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(p).setAllowCrossPageTransition().send();};o.prototype.setupPlayingVideoUnitSubscriptions=function(){'use strict';if(this.getPlayingVideoUnit().addListener){this.$VideoAutoplayControllerX1.release();this.$VideoAutoplayControllerX1.engage();if(!this.getPlayingVideoUnit().isLooping())this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('finishPlayback',function(){this.setPlayingVideoUnit(null);}.bind(this)));this.$VideoAutoplayControllerX1.addSubscriptions(this.getPlayingVideoUnit().addListener('turnOffAutoplay',function(){this.setPlayingVideoUnit(null);}.bind(this)),this.getPlayingVideoUnit().addListener('pausePlayback',function(){this.$VideoAutoplayControllerX14();}.bind(this)),this.getPlayingVideoUnit().addListener('finishPlayback',function(){this.$VideoAutoplayControllerX14();}.bind(this)),c('Network').addListener('online',function(){this.$VideoAutoplayControllerX14();}.bind(this)),c('Network').addListener('offline',function(){this.$VideoAutoplayControllerX14();}.bind(this)));}};o.prototype.$VideoAutoplayControllerX14=function(){'use strict';if(c('VideoPlayerExperiments').webVideosBlockAutoplayWhenOffline)if(c('Network').isOnline()){this.$VideoAutoplayControllerX3=this.$VideoAutoplayControllerX4;}else{this.$VideoAutoplayControllerX4=this.$VideoAutoplayControllerX3;this.$VideoAutoplayControllerX3=false;return;}var p=this.getVideoUnits();for(var q=0;q<p.length;q++){var r=p[q].getVideoPlayerController();if(r!==null){if(r.getDataInsertionPosition()==='0'){this.$VideoAutoplayControllerX9=true;if(this.$VideoAutoplayControllerX10===false){r.restoreStreamBufferSize();r.once('beginPlayback',function(){this.$VideoAutoplayControllerX11=true;this.restoreStreamBufferSize();}.bind(this));this.$VideoAutoplayControllerX10=true;}}if(!c('VideoPlayerExperiments').autoplayBlockBlacklist)r.updateAutoplayRestrained();}}if(!this.$VideoAutoplayControllerX9)this.restoreStreamBufferSize();};o.prototype.shouldRestoreAllSubsequentStreamBufferSizes=function(){'use strict';if(!this.$VideoAutoplayControllerX9)return true;return this.$VideoAutoplayControllerX11;};o.prototype.restoreStreamBufferSize=function(){'use strict';var p=this.getVideoUnits();for(var q=0;q<p.length;q++){var r=p[q].getVideoPlayerController();if(r!==null)r.restoreStreamBufferSize();}};o.prototype.$VideoAutoplayControllerX13=function(p){'use strict';if(!p.addListener)return;var q=function(){var r=p.getVideoPlayerController();if(!r.isMuted()&&r.isState('playing')){if(this.$VideoAutoplayControllerX8&&this.$VideoAutoplayControllerX8!==p){var s=this.$VideoAutoplayControllerX8.getVideoPlayerController(),t=s.getOption('VideoWithLiveBroadcast','isLive');if(t){s.mute();}else s.pause(c('VideoPlayerReason').USER);}this.$VideoAutoplayControllerX8=p;}}.bind(this);this.$VideoAutoplayControllerX2.addSubscriptions(p.addListener('beginPlayback',q),p.addListener('changeVolume',q),p.addListener('unmuteVideo',q));};o.prototype.showAutoplayNUX=function(p){'use strict';if(this.$VideoAutoplayControllerX6&&!this.$VideoAutoplayControllerX6.isShown()){var q=p.getVideoPlayerController().getRootNode();c('DOM').prependContent(q,this.$VideoAutoplayControllerX5);this.$VideoAutoplayControllerX6.show();var r=c('XVideoAutoplayNuxLogViewAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(r).setAllowCrossPageTransition().send();}this.$VideoAutoplayControllerX7=false;};o.getChannelVideos=function(){'use strict';if(k)return k.getVideoUnits().filter(function(p){return p.getIsInChannel();});return null;};o.prototype.updateAutoplay=function(){'use strict';if(!this.$VideoAutoplayControllerX3){this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);return;}var p=this.getVisibleUnits();this.getClosestVideoUnits(c('VideoPlayerPreloadExperiment').preloadVideosCount).forEach(function(w){return w.preload();});var q=p.length,r=null;if(q==1){r=p[0];r=r.isAutoplayable()?r:null;}else if(q>1){var s=c('getViewportDimensions')().height/2;p.forEach(function(w){if(!w.isAutoplayable())return;var x=w.getDOMPosition(),y=x.y+x.height/2,z=Math.abs(y-s);w.playPriority=z;if(!r||w.playPriority<r.playPriority)r=w;});}var t=this.getPlayingVideoUnit();if(t){if(r!=t){var u=null;if('getCurentUnitVideoController' in t){u=t.getCurentUnitVideoController();}else u=t.getVideoPlayerController();if(u)u.setSmartBufferAdjustmentEnabled(false);if(r){var v=null;if('getCurentUnitVideoController' in r){v=r.getCurentUnitVideoController();}else v=r.getVideoPlayerController();if(v)v.setSmartBufferAdjustmentEnabled(true);}this.pausePlayingVideo(c('VideoPlayerReason').AUTOPLAY);this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX7)this.showAutoplayNUX(r);}}else if(r){this.playVideo(r,c('VideoPlayerReason').AUTOPLAY);if(this.$VideoAutoplayControllerX7)this.showAutoplayNUX(r);}};f.exports=o;}),null);
__d('VideoAutoplayPlayerBase',['EventEmitter'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;function j(){var k,l;'use strict';for(var m=arguments.length,n=Array(m),o=0;o<m;o++)n[o]=arguments[o];return l=(k=i.constructor).call.apply(k,[this].concat(n)),this.wasVisible=false,l;}j.prototype.isVisible=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDistanceToViewport=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getVideoPlayerController=function(){'use strict';return null;};j.prototype.logDisplayed=function(){'use strict';throw new Error('Should be overridden');};j.prototype.playWithoutUnmute=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.pause=function(k){'use strict';throw new Error('Should be overridden');};j.prototype.isAutoplayable=function(){'use strict';throw new Error('Should be overridden');};j.prototype.getDOMPosition=function(){'use strict';throw new Error('Should be overridden');};j.prototype.isLooping=function(){'use strict';throw new Error('Should be overridden');};j.prototype.isState=function(k){'use strict';throw new Error('Should be overridden');};f.exports=j;}),null);
__d('VideoCTAEndscreen',['cx','Arbiter','AttachmentRelatedShareConstants','CSS','Event','Focus','SubscriptionsHandler','VideoCTALoggingConfig','VideoPlayerReason','VideoPlayerLoggerEvent','logVideosClickTracking'],(function a(b,c,d,e,f,g,h){function i(j,k){'use strict';this.$VideoCTAEndscreen1=j;this.$VideoCTAEndscreen2=k.endscreenElement;this.$VideoCTAEndscreen3=k.replayElement;this.$VideoCTAEndscreen4=k.ctaElement;this.$VideoCTAEndscreen5=k.isPausescreen;this.$VideoCTAEndscreen6=new (c('SubscriptionsHandler'))();this.$VideoCTAEndscreen6.addSubscriptions(c('Event').listen(this.$VideoCTAEndscreen3,'click',function(){return this.$VideoCTAEndscreen7();}.bind(this)),j.addListener('beginPlayback',function(){return this.$VideoCTAEndscreen8();}.bind(this)),j.addListener('VideoChannelController/exitChannel',function(){if(j.isState('finished'))this.$VideoCTAEndscreen9();}.bind(this)));if(this.$VideoCTAEndscreen4)this.$VideoCTAEndscreen6.addSubscriptions(c('Event').listen(this.$VideoCTAEndscreen4,'click',function(){return this.$VideoCTAEndscreen10();}.bind(this)));if(this.$VideoCTAEndscreen5){this.$VideoCTAEndscreen6.addSubscriptions(j.addListener('pausePlayback',function(){return this.$VideoCTAEndscreen11();}.bind(this)));}else this.$VideoCTAEndscreen6.addSubscriptions(j.addListener('finishPlayback',function(){return this.$VideoCTAEndscreen9();}.bind(this)));}i.prototype.$VideoCTAEndscreen7=function(){'use strict';var j={reason:c('VideoPlayerReason').USER};this.$VideoCTAEndscreen1.clickVideo();if(this.$VideoCTAEndscreen1.isState('paused')){if(c('VideoCTALoggingConfig').shouldLogUnpausedEvent)this.$VideoCTAEndscreen1.logEvent(c('VideoPlayerLoggerEvent').UNPAUSED,j);}else if(this.$VideoCTAEndscreen1.isState('finished'))this.$VideoCTAEndscreen1.logEvent(c('VideoPlayerLoggerEvent').REPLAYED,j);var k=this.$VideoCTAEndscreen1.getVideoNode();c('logVideosClickTracking')(k);c('Focus').set(k);};i.prototype.$VideoCTAEndscreen10=function(){'use strict';c('Arbiter').inform(c('AttachmentRelatedShareConstants').FBVIDEO_CLICK,{attachment:this.$VideoCTAEndscreen1.getRootNode(),fbvideo_id:this.$VideoCTAEndscreen1.getVideoID()});};i.prototype.$VideoCTAEndscreen9=function(){'use strict';if(!this.$VideoCTAEndscreen1.getIsInChannel())this.$VideoCTAEndscreen11();};i.prototype.$VideoCTAEndscreen11=function(){'use strict';c('CSS').addClass(this.$VideoCTAEndscreen2,"_1qbf");};i.prototype.$VideoCTAEndscreen8=function(){'use strict';c('CSS').removeClass(this.$VideoCTAEndscreen2,"_1qbf");};f.exports=i;}),null);
__d('MountedContextMenu.react',['cx','ContextualLayer.react','DOMQuery','Event','Focus','LayerHideOnEscape','PopoverMenu.react','PopoverMenuInterface','React','ReactDOM','SubscriptionsHandler','isNode'],(function a(b,c,d,e,f,g,h){'use strict';var i=Object.prototype.hasOwnProperty,j=c('React').PropTypes;function k(m,n,o,p,q){var r=o.getContent().getBoundingClientRect(),s=o.getContext().getBoundingClientRect(),t=m-s.left,u=n-s.top;switch(q){case 'left':t-=r.width;break;case 'center':t-=s.width*.5;break;case 'right':t-=s.width-r.width;break;default:throw new Error('invalid alignment');}switch(p){case 'above':break;case 'left':t+=r.width;u-=r.height*.5;break;case 'right':t-=r.width;u-=r.height*.5;break;case 'below':u-=s.height;break;default:throw new Error('invalid position');}return {offsetX:t,offsetY:u};}var l=c('React').createClass({displayName:'MountedContextMenu',propTypes:{disableFocusOutline:j.bool,menu:function m(n,o,p){if(!i.call(n,o))return new Error(p+'.'+o+' is required');var q=n[o],r=q&&q.type;if(!(r&&r.prototype instanceof c('PopoverMenuInterface')))return new Error(o+' must implement PopoverMenuInterface');},mountedTriggerElem:function m(n,o,p){if(!i.call(n,o)){return new Error(p+'.'+o+' is required');}else if(!c('isNode')(n[o]))return new Error(p+'.'+o+' must be a raw DOM node');}},getDefaultProps:function m(){return {disableFocusOutline:false};},getInitialState:function m(){return {shown:false,lastOpenedX:0,lastOpenedY:0,offsetX:0,offsetY:0};},_getTriggerDOMNode:function m(){return this.props.mountedTriggerElem;},_getMenuDOMNode:function m(){var n=this.refs.popover.getMenu();return n&&n.getRoot();},_getLayer:function m(){return this.refs.menuLayer.layer;},renderLayers:function m(){return c('React').createElement(c('ContextualLayer.react'),{alignment:'right',behaviors:[c('LayerHideOnEscape')],contextRef:function(){return this._getTriggerDOMNode();}.bind(this),offsetX:this.state.offsetX,offsetY:this.state.offsetY,position:'below',ref:'menuLayer',shown:this.state.shown,key:'menu'},c('React').createElement(c('PopoverMenu.react'),{alignh:'left',menu:this.props.menu,position:'below',ref:'popover'},c('React').createElement('div',{className:"_4345",ref:'fakeTrigger'})));},render:function m(){if(this.props.mountedTriggerElem)return c('React').createElement('span',null,this.renderLayers());},_updatePosition:function m(n,o){var p=this._getLayer(),q=p.getOrientation(),r=q.getPosition(),s=q.getAlignment(),t=k(n,o,p,r,s),u=t.offsetX,v=t.offsetY;p.setOffsetX(u).setOffsetY(v);this.setState({offsetX:u,offsetY:v});},_onContextMenu:function m(n){var o=n.clientX,p=n.clientY;n.preventDefault();n.stopPropagation();this.showAt(o,p);},_onMousedownAnywhere:function m(n){var o=this._getMenuDOMNode(),p=o&&c('DOMQuery').contains(o,n.target),q=n.button===0;if(!(p&&q))this.hide();},_onRealTriggerFocus:function m(){if(this.props.disableFocusOutline)c('Focus').setWithoutOutline(this._getTriggerDOMNode());},_onFakeTriggerFocus:function m(){var n=this._getTriggerDOMNode();if(this.props.disableFocusOutline){c('Focus').setWithoutOutline(n);}else c('Focus').set(n);if(this.state.shown)this.hide();},_onWindowBlur:function m(){this.hide();},componentDidMount:function m(){var n=this._getTriggerDOMNode(),o=c('ReactDOM').findDOMNode(this.refs.fakeTrigger),p=this._getLayer(),q=this.refs.popover;this._subscriberHandler=new (c('SubscriptionsHandler'))();this._subscriberHandler.addSubscriptions(c('Event').listen(n,'contextmenu',this._onContextMenu),c('Event').listen(document.body,'mousedown',this._onMousedownAnywhere),c('Event').listen(n,'focus',this._onRealTriggerFocus),c('Event').listen(o,'focus',this._onFakeTriggerFocus),c('Event').listen(window,'blur',this._onWindowBlur),p.subscribe('show',function(){var r=this.state.lastOpenedX,s=this.state.lastOpenedY;this._updatePosition(r,s);q.showPopover();}.bind(this)),p.subscribe('hide',function(){q.hidePopover();}));},componentWillUnmount:function m(){this._subscriberHandler&&this._subscriberHandler.release();},show:function m(){this.setState({shown:true});},showAt:function m(n,o){this.setState({lastOpenedX:n,lastOpenedY:o});this.show();},hide:function m(){this.setState({shown:false});}});f.exports=l;}),null);
__d('VideoPlayerHTML5ContextMenu.react',['cx','fbt','ContextualLayer.react','DOMQuery','Event','Focus','FullScreen','getFullScreenElement','Keys','LayerAutoFocus','LayerHideOnEscape','MountedContextMenu.react','React','ReactDOM','ReactXUIMenu','SubscriptionsHandler','VideoContextMenuGK','isNode'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=Object.prototype.hasOwnProperty,m=c('ReactXUIMenu').Item,n=c('React').PropTypes,o=.35,p=6,q=60;j=babelHelpers.inherits(r,c('React').Component);k=j&&j.prototype;function r(){var s,t;for(var u=arguments.length,v=Array(u),w=0;w<u;w++)v[w]=arguments[w];return t=(s=k.constructor).call.apply(s,[this].concat(v)),this.state={permalinkVisible:false,fullscreened:false,screenWidth:screen.width,screenHeight:screen.height},this.$VideoPlayerHTML5ContextMenu2=function(){var x=c('getFullScreenElement')(),y=this.props.videoElem,z=!!(c('FullScreen').isFullScreen()&&x&&y&&c('DOMQuery').contains(x,y));this.setState({fullscreened:z});}.bind(this),this.$VideoPlayerHTML5ContextMenu5=function(){if(this.props.paused){return i._("Reproduzir");}else return i._("Pausar");}.bind(this),this.$VideoPlayerHTML5ContextMenu6=function(){if(this.props.muted){return i._("Reativar o som");}else return i._("Silenciar");}.bind(this),this.$VideoPlayerHTML5ContextMenu7=function(){this.props.onTogglePause&&this.props.onTogglePause();}.bind(this),this.$VideoPlayerHTML5ContextMenu8=function(){this.props.onToggleMute&&this.props.onToggleMute();}.bind(this),this.$VideoPlayerHTML5ContextMenu4=function(){c('Focus').set(c('ReactDOM').findDOMNode(this.refs.permalinkText));this.setState({permalinkVisible:true});}.bind(this),this.$VideoPlayerHTML5ContextMenu3=function(){this.setState({permalinkVisible:false});}.bind(this),this.$VideoPlayerHTML5ContextMenu9=function(){c('ReactDOM').findDOMNode(this.refs.permalinkText).select();}.bind(this),this.$VideoPlayerHTML5ContextMenu10=function(x){if(c('Event').getKeyCode(x)==c('Keys').ESC)this.setState({permalinkVisible:false});}.bind(this),this.$VideoPlayerHTML5ContextMenu11=function(x){x.preventDefault();},this.$VideoPlayerHTML5ContextMenu12=function(){var x=void 0,y=void 0;if(this.state.fullscreened){x=this.state.screenWidth;y=this.state.screenHeight;}else{var z=this.props.videoElem.getBoundingClientRect();x=z.width;y=z.height;}return {width:x,height:y};}.bind(this),this.$VideoPlayerHTML5ContextMenu13=function(x){var y=this.props.permalinkURL;if(y){var z={width:x+'px'};return c('React').createElement('div',{className:"_26oo",style:z},c('React').createElement('input',{className:"_26op autofocus",onFocus:this.$VideoPlayerHTML5ContextMenu9,onKeyDown:this.$VideoPlayerHTML5ContextMenu10,onMouseUp:this.$VideoPlayerHTML5ContextMenu11,readOnly:true,ref:'permalinkText',type:'text',value:y}),c('React').createElement('button',{className:"_26oq",onClick:this.$VideoPlayerHTML5ContextMenu3},i._("Fechar")));}}.bind(this),this.renderLayers=function(){var x=this.props.permalinkURL&&this.state.permalinkVisible,y=0,z=0,aa=null,ba=this.$VideoPlayerHTML5ContextMenu12(),ca=ba.width,da=ba.height,ea=ca*o;y=ca/2-ea/2;z=-da+p;if(this.state.fullscreened)z+=q;aa=this.$VideoPlayerHTML5ContextMenu13(ea);return c('React').createElement(c('ContextualLayer.react'),{alignment:'left',behaviors:[c('LayerHideOnEscape'),c('LayerAutoFocus')],contextRef:function(){return this.props.videoElem;}.bind(this),offsetX:y,offsetY:z,position:'below',ref:'permalinkLayer',shown:x,key:'permalinkOverlay'},aa);}.bind(this),this.$VideoPlayerHTML5ContextMenu14=function(){if(this.props.permalinkURL)return c('React').createElement(m,{onclick:this.$VideoPlayerHTML5ContextMenu4,ref:'permalinkMenuItem'},i._("Mostrar URL do v\u00eddeo"));}.bind(this),t;}r.prototype.componentDidMount=function(){var s=this.refs.permalinkLayer.layer;this.$VideoPlayerHTML5ContextMenu1=new (c('SubscriptionsHandler'))();this.$VideoPlayerHTML5ContextMenu1.addSubscriptions(c('FullScreen').subscribe('changed',this.$VideoPlayerHTML5ContextMenu2),s.subscribe('hide',this.$VideoPlayerHTML5ContextMenu3),s.subscribe('show',this.$VideoPlayerHTML5ContextMenu4));};r.prototype.componentWillUnmount=function(){this.$VideoPlayerHTML5ContextMenu1&&this.$VideoPlayerHTML5ContextMenu1.release();};r.prototype.hidePermalinkOverlay=function(){this.$VideoPlayerHTML5ContextMenu3();};r.prototype.render=function(){var s=this.props.paused!==null&&c('React').createElement(m,{onclick:this.$VideoPlayerHTML5ContextMenu7},this.$VideoPlayerHTML5ContextMenu5()),t=c('React').createElement(c('ReactXUIMenu'),{className:c('VideoContextMenuGK').menuRedesign?"_45di":''},s,c('React').createElement(m,{onclick:this.$VideoPlayerHTML5ContextMenu8},this.$VideoPlayerHTML5ContextMenu6()),this.$VideoPlayerHTML5ContextMenu14(),this.props.children);return c('React').createElement('span',null,c('React').createElement(c('MountedContextMenu.react'),{mountedTriggerElem:this.props.videoElem,menu:t,ref:'menu'}),this.renderLayers());};r.propTypes={videoElem:function s(t,u,v){if(!l.call(t,u)){return new Error(v+'.'+u+' is required');}else if(!c('isNode')(t[u]))return new Error(v+'.'+u+' must be a raw DOM node');},paused:n.bool,muted:n.bool,permalinkURL:n.string,onTogglePause:n.func.isRequired,onToggleMute:n.func.isRequired};f.exports=r;}),null);
__d('VideoContextMenu',['EventListener','Bootloader','URI','React','ReactDOM','VideoPlayerHTML5ContextMenu.react','VideoPlayerReason','VideoPlayerStates','UserAgent','CurrentUser','isFacebookURI'],(function a(b,c,d,e,f,g){var h=/(instagram)/g;function i(j,k,l){'use strict';this.$VideoContextMenu9=function(){var o='DebugOverlay',p='hidden';if(this.$VideoContextMenu2.hasOption(o,p)){this.$VideoContextMenu12(o,p,'Employee Debug Info','Hide Debug Information');}else this.$VideoContextMenu11(o,p);this.$VideoContextMenu8();}.bind(this);this.$VideoContextMenu8=function(){if(this.$VideoContextMenu6)this.$VideoContextMenu13();}.bind(this);this.$VideoContextMenu10=function(o){var p=/^a$/i.test(o.target.nodeName||''),q=p||c('CurrentUser').isEmployee()&&(c('UserAgent').isPlatform('Mac OS X')?o.getModifiers().meta:o.getModifiers().ctrl);if(q&&this.$VideoContextMenu6){c('ReactDOM').unmountComponentAtNode(this.$VideoContextMenu4);delete this.$VideoContextMenu6;}else if(!q&&!this.$VideoContextMenu6){o.preventDefault();this.$VideoContextMenu13();}}.bind(this);this.$VideoContextMenu2=j;this.$VideoContextMenu3=l;this.$VideoContextMenu4=k;this.$VideoContextMenu1={};this.$VideoContextMenu5=null;if(this.$VideoContextMenu3.permalinkURL){var m=new (c('URI'))(this.$VideoContextMenu3.permalinkURL).getQualifiedURI();if(!c('isFacebookURI')(m)){m.setSubdomain('www');m.setDomain(m.getDomain().replace(h,'facebook'));}this.$VideoContextMenu5=m.toString();}var n=['muteVideo','unmuteVideo','changeVolume','beginPlayback','pausePlayback','finishPlayback','adBreakIndicatorShowing'];['enterWatchAndScroll','exitWatchAndScroll'].forEach(function(o){return j.addListener(o,function(){if(this.$VideoContextMenu6)this.$VideoContextMenu6.hidePermalinkOverlay();this.$VideoContextMenu8();}.bind(this));}.bind(this));j.addListener('optionsChange',this.$VideoContextMenu9);this.$VideoContextMenu9();n.forEach(function(o){return j.addListener(o,this.$VideoContextMenu8);}.bind(this));c('EventListener').listen(this.$VideoContextMenu2.getRootNode(),'contextmenu',this.$VideoContextMenu10);}i.prototype.setPermalinkURL=function(j){'use strict';this.$VideoContextMenu5=j;this.$VideoContextMenu8();};i.prototype.$VideoContextMenu11=function(j,k){'use strict';if(this.$VideoContextMenu7)this.$VideoContextMenu7.removeMenuItem(j,k);};i.prototype.$VideoContextMenu12=function(j,k,l,m){'use strict';c('Bootloader').loadModules(["VideoComponentOptionMenuItems"],function(n){if(!this.$VideoContextMenu7)this.$VideoContextMenu7=new n(this.$VideoContextMenu2,this.$VideoContextMenu8);this.$VideoContextMenu7.addComponentOptionMenuItem(j,k,l,m);}.bind(this),'VideoContextMenu');};i.prototype.$VideoContextMenu14=function(j,k){'use strict';if(!this.$VideoContextMenu7)return undefined;return this.$VideoContextMenu7.getComponentOptionMenuItem(j,k);};i.prototype.$VideoContextMenu13=function(){'use strict';var j=this.$VideoContextMenu14('DebugOverlay','hidden'),k=this.$VideoContextMenu2.getRootNode(),l=false;if(this.$VideoContextMenu2.hasOption('VideoContextMenu','disablePauseMenuItem'))l=this.$VideoContextMenu2.getOption('VideoContextMenu','disablePauseMenuItem')&&!this.$VideoContextMenu2.isState(c('VideoPlayerStates').PAUSED);this.$VideoContextMenu6=c('ReactDOM').render(c('React').createElement(c('VideoPlayerHTML5ContextMenu.react'),{videoElem:k,paused:l?null:!this.$VideoContextMenu2.isState(c('VideoPlayerStates').PLAYING),muted:this.$VideoContextMenu2.isMuted(),permalinkURL:this.$VideoContextMenu5,onTogglePause:function(){return this.$VideoContextMenu15();}.bind(this),onToggleMute:function(){return this.$VideoContextMenu16();}.bind(this)},j),this.$VideoContextMenu4);};i.prototype.$VideoContextMenu16=function(){'use strict';if(this.$VideoContextMenu2.isMuted()){this.$VideoContextMenu2.unmute();}else this.$VideoContextMenu2.mute();};i.prototype.$VideoContextMenu15=function(){'use strict';if(!this.$VideoContextMenu2.isState('playing')){this.$VideoContextMenu2.play(c('VideoPlayerReason').USER);}else this.$VideoContextMenu2.pause(c('VideoPlayerReason').USER);};f.exports=i;}),null);
__d('VideoCover',['Bootloader','CSS','EventListener'],(function a(b,c,d,e,f,g){function h(i,j,k,l){var m=arguments.length<=4||arguments[4]===undefined?null:arguments[4];'use strict';this.$VideoCover1=j;this.$VideoCover2=k[0];this.$VideoCover3=l;this.$VideoCover4=i;if(m){this.$VideoCover5=m.hiddenAfterFinish;this.$VideoCover6=m.showWhileBuffering;this.$VideoCover7=m.showAfterFallback;}if(i.getState()==='playing')this.$VideoCover8();i.addListener('stateChange',function(){return this.$VideoCover9();}.bind(this));i.addListener('beginPlayback',this.$VideoCover8.bind(this));i.addListener('finishPlayback',this.$VideoCover10.bind(this));i.addListener('buffering',this.$VideoCover11.bind(this));i.addListener('buffered',this.$VideoCover12.bind(this));c('EventListener').listen(this.$VideoCover1,'click',this.$VideoCover13.bind(this));}h.prototype.$VideoCover11=function(){'use strict';if(this.$VideoCover6)c('CSS').show(this.$VideoCover1);};h.prototype.$VideoCover12=function(){'use strict';if(this.$VideoCover6)c('CSS').hide(this.$VideoCover1);};h.prototype.getCurrentCover=function(){'use strict';return this.$VideoCover2;};h.prototype.setSnowLiftURI=function(i){'use strict';this.$VideoCover3=i;};h.prototype.$VideoCover13=function(){'use strict';if(this.$VideoCover3!=null&&this.$VideoCover3.length>0){c('Bootloader').loadModules(["PhotoSnowlift"],function(i){return i.bootstrap(this.$VideoCover3);}.bind(this),'VideoCover');}else this.$VideoCover4.clickVideo();};h.prototype.$VideoCover8=function(){'use strict';c('CSS').hide(this.$VideoCover1);};h.prototype.$VideoCover10=function(){'use strict';var i=this.$VideoCover4.getOption('Looping','isLooping');if(this.$VideoCover5||i)return;c('CSS').show(this.$VideoCover1);};h.prototype.$VideoCover9=function(){'use strict';if(this.$VideoCover4.isState('fallback')&&this.$VideoCover7)c('CSS').show(this.$VideoCover1);};f.exports=h;}),null);
__d('VideoWithLoopingPlayback',['setImmediate','VideoPlayerLoggerSource','VideoPlayerReason'],(function a(b,c,d,e,f,g){function h(i){var j=arguments.length<=1||arguments[1]===undefined?-1:arguments[1];'use strict';this.$VideoWithLoopingPlayback5=function(){var k=this.$VideoWithLoopingPlayback1.getOption('FeedAutoplay','isVisibleForAutoplay'),l=this.$VideoWithLoopingPlayback1.getOption('WatchAndScroll','isActive'),m=this.$VideoWithLoopingPlayback1.getIsInChannel(),n=this.$VideoWithLoopingPlayback1.getSource()===c('VideoPlayerLoggerSource').TAHOE;if((k||k===undefined)&&!l&&!m&&!n&&(!this.$VideoWithLoopingPlayback4||this.$VideoWithLoopingPlayback3<this.$VideoWithLoopingPlayback4)){c('setImmediate')(function(){return this.$VideoWithLoopingPlayback1.play(c('VideoPlayerReason').LOOP);}.bind(this));this.$VideoWithLoopingPlayback3++;if(this.$VideoWithLoopingPlayback4&&this.$VideoWithLoopingPlayback3===this.$VideoWithLoopingPlayback4-1)this.$VideoWithLoopingPlayback1.setOption('Looping','isLooping',false);}}.bind(this);this.$VideoWithLoopingPlayback1=i;this.$VideoWithLoopingPlayback2=true;this.$VideoWithLoopingPlayback3=1;this.$VideoWithLoopingPlayback4=j>-1?j:null;this.$VideoWithLoopingPlayback1.addListener('finishPlayback',this.$VideoWithLoopingPlayback5);this.$VideoWithLoopingPlayback1.registerOption('Looping','isLooping',function(){return this.$VideoWithLoopingPlayback2;}.bind(this),function(k){return this.$VideoWithLoopingPlayback6(k);}.bind(this));}h.prototype.isLooping=function(){'use strict';return this.$VideoWithLoopingPlayback2;};h.prototype.getLoopCount=function(){'use strict';return this.$VideoWithLoopingPlayback3;};h.prototype.getMaxLoopCount=function(){'use strict';return this.$VideoWithLoopingPlayback4;};h.prototype.setMaxLoopCount=function(i){'use strict';this.$VideoWithLoopingPlayback4=i>-1?i:null;};h.prototype.$VideoWithLoopingPlayback6=function(i){'use strict';this.$VideoWithLoopingPlayback2=i;};f.exports=h;}),null);
__d('StreamingReactionsTrayEvents',[],(function a(b,c,d,e,f,g){var h='streamingReactionsTray/AddReactionAnimate',i='streamingReactionsTray/HideChannelViewDetails',j='streamingReactionsTray/ShowChannelViewDetails',k='streamingReactionsTray/UpdateSurface',l='streamingReactionsTray/ResizeChannelViewWindow',m='streamingReactionsTray/ReactionStateChange',n='streamingReactionsTray/FireworksAnimating',o={AddReactionAnimate:h,HideChannelViewDetails:i,ReactionStateChange:m,ResizeChannelViewWindow:l,ShowChannelViewDetails:j,UpdateSurface:k,FireworksAnimating:n};f.exports=o;}),null);