if (self.CavalryLogger) { CavalryLogger.start_js(["OCecw"]); }

__d("FollowRequestResultEnum",[],(function a(b,c,d,e,f,g){f.exports={REVERT:"revert"};}),null);
__d("ImageExtensions",[],(function a(b,c,d,e,f,g){f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best",PNG2JPG:"png2jpg"};}),null);
__d("ProfileOverviewDOMID",[],(function a(b,c,d,e,f,g){f.exports={MEDLEY_ROOT:"timeline-medley",PREFIX_APP_COLLECTION:"pagelet_timeline_app_collection_",PREFIX_COLLECTION_WRAPPER:"collection_wrapper_",PREFIX_MEDLEY:"pagelet_timeline_medley_",PREFIX_MEDLEY_HEADER:"medley_header_",PREFIX_RECOMMENDATION:"pagelet_recommendation_"};}),null);
__d("ProfileTabConst",[],(function a(b,c,d,e,f,g){f.exports={ALBUM:"album",ALBUMS:"albums",ALBUMS_ALL:"albums_all",ALBUMS_FEATURED:"albums_featured",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RESUME:"resume",REVIEWS:"reviews",SAVE_LISTS:"lists",SAVED_FOR_LATER:"saved",SPORTS:"sports",TAGGED_NOTES:"notes_tagged",TIMELINE:"timeline",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",ENDORSEMENTS:"endorsements",ISSUES:"issues",PAGE_JOBS:"jobs",PAGE_LIVE_VIDEOS:"live_videos",PAGE_EPISODES:"episodes",PAGE_SHOW:"show",PAGE_PLAYLISTS:"playlists",PAGE_SHOW_VIDEOS:"show_videos",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"};}),null);
__d("SeeFirstNuxEvents",[],(function a(b,c,d,e,f,g){f.exports={SWITCHER_NUX_IMP:"switcher_nux_imp",SEE_FIRST_SELECTED:"see_first_selected",XOUT:"xout",NOT_NOW:"not_now",IMP:"imp",ENTER_DIALOG:"enter_dialog",BATCH_SEE_FIRST_SELECTED:"batch_see_first_selected"};}),null);
__d("TimelineDOMID",[],(function a(b,c,d,e,f,g){f.exports={COMPOSER_CONTAINER:"timeline_composer_container",MEMORIES:"pagelet_timeline_memories",RECENT:"pagelet_timeline_recent",RECENT_CAPSULE_CONTAINER:"recent_capsule_container",STICKY_HEADER:"timeline_sticky_header",TAB_CONTENT:"timeline_tab_content",TAB_CONTENT_EXTRA:"timeline_tab_content_extra",UNDER_COMPOSER:"timeline_under_composer",SERP_ENTRY_POINT:"serp_entry_point",UNSEEN_STORIES_INDICATOR:"recent_unseen_stories_indicator",TIMELINE_SCHEDULED_POSTS:"timeline_scheduled_posts",FIG_COMPOSER:"profile_fig_composer",FIG_TIMELINE:"profile_fig_timeline",FIG_ESCAPE_HATCH:"profile_fig_escape_hatch",FIG_INFO_REVIEW:"profile_fig_info_review",FIG_INTRO_CARD:"profile_fig_intro_card",FIG_PROTILES:"profile_fig_protiles",FIG_ADS:"profile_fig_ads",PREFIX_MONTH_ALL:"pagelet_timeline_month_all_",PREFIX_YEAR:"pagelet_timeline_year_",PREFIX_FIG_PROTILES:"profile_fig_protiles_",SUFFIX_MORE_PAGER:"_more_pager"};}),null);
__d("XFollowPrivacyNuxLogViewAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/follow\/follow_privacy\/nux\/log\/view\/",{});}),null);
__d("XPubcontentChainedSuggestionsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"String"},profileid:{type:"Int"},eh:{type:"Bool",defaultValue:false},friendid:{type:"Int"}});}),null);
__d('SubscribeButton',['Arbiter','AsyncRequest','Button','CSS','Event','TooltipData','XFollowPrivacyNuxLogViewAsyncController','XPubcontentChainedSuggestionsController'],(function a(b,c,d,e,f,g){var h={SUBSCRIBED:'FollowingUser',UNSUBSCRIBED:'UnfollowingUser',_enable:function i(j){c('Button').setEnabled(j,true);c('TooltipData').remove(j);},_disable:function i(j,k){c('Button').setEnabled(j,false);if(k)c('TooltipData').set(j,k);},init:function i(j,k,l,m,n,o,p,q,r,s,t,u){var v=!t,w=!(r===undefined||r===null);if(w&&!p&&!q)h._disable(k,r);c('Event').listen(k,'click',function(){c('Arbiter').inform(h.SUBSCRIBED,{profile_id:m,contextID:u,suppress:true});if(s){s.show();var x=c('XFollowPrivacyNuxLogViewAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(x).send();}});c('Arbiter').subscribe(h.SUBSCRIBED,function(x,y){if(m==y.profile_id){if(!n)l.suppressNextMouseEnter&&l.suppressNextMouseEnter();if(w){if(typeof y.connected!=='undefined')p=y.connected;if(p||q)h._enable(k);}j.swap(v);if(o===true&&y.chaining!==false){var z=c('XPubcontentChainedSuggestionsController').getURIBuilder().setInt('profileid',m).getURI();new (c('AsyncRequest'))().setURI(z).send();}}});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(x,y){if(m==y.profile_id){j.unswap(v);l.hideFlyout&&l.hideFlyout();if(w){if(typeof y.connected!=='undefined')p=y.connected;if(!p&&!q)h._disable(k,r);}c('Arbiter').inform('SubMenu/Reset');}});},initSubscribe:function i(j,k){c('Event').listen(j,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.SUBSCRIBED,{profile_id:k}),0);});},initUnsubscribe:function i(j,k,l){c('Event').listen(j,'click',function(){setTimeout(c('Arbiter').inform.bind(c('Arbiter'),h.UNSUBSCRIBED,{profile_id:k,contextID:l}),0);});},initSubscribeMenuItem:function i(j,k,l){c('CSS').hide(k);this._initMenuItem(j,k,l);},initUnsubscribeMenuItem:function i(j,k,l){c('CSS').hide(j);this._initMenuItem(j,k,l);},_initMenuItem:function i(j,k,l){this.initSubscribe(j,l);this.initUnsubscribe(k,l);c('Arbiter').subscribe(h.SUBSCRIBED,function(m,n){c('CSS').hide(j);c('CSS').show(k);});c('Arbiter').subscribe(h.UNSUBSCRIBED,function(m,n){c('CSS').hide(k);c('CSS').show(j);});}};f.exports=h;}),null);
__d("XFeedSeeFirstNuxController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/feed\/control\/see_first\/nux\/",{});}),null);
__d('ProfileHoverButton',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','FollowRequestResultEnum','MenuStaticItem','ProfileSubFollowStatus','Run','SeeFirstNuxEvents','SubscribeButton','SubscriptionsHandler','XFeedSeeFirstNuxController'],(function a(b,c,d,e,f,g,h,i){var j=1;function k(l,m,n,o){'use strict';this.$ProfileHoverButton1=l;this.$ProfileHoverButton2=m;this.$ProfileHoverButton3=o;this.$ProfileHoverButton4=n;this.$ProfileHoverButton5=null;this.$ProfileHoverButton6=new (c('SubscriptionsHandler'))();this.$ProfileHoverButton2.subscribe('itemclick',function(p,q){if(q.item instanceof c('MenuStaticItem'))return;var r=q.item.getValue();if(r==='unfollow'){c('Arbiter').inform(c('SubscribeButton').UNSUBSCRIBED,{profile_id:this.$ProfileHoverButton3.id});c('Arbiter').inform(c('FeedBlacklistButton').BLACKLIST,{profile_id:this.$ProfileHoverButton3.id});if(this.$ProfileHoverButton4)this.$ProfileHoverButton4.hide();}else{this.setSelected(r);if(r===c('ProfileSubFollowStatus').SEE_FIRST&&this.$ProfileHoverButton4){this.$ProfileHoverButton4.hide();this.logNux(c('SeeFirstNuxEvents').SEE_FIRST_SELECTED);}}}.bind(this));this.$ProfileHoverButton6.addSubscriptions(c('Arbiter').subscribe(c('SubscribeButton').SUBSCRIBED,this.setSelected.bind(this,c('ProfileSubFollowStatus').REGULAR_FOLLOW)));this.$ProfileHoverButton6.addSubscriptions(c('Arbiter').subscribe(c('FollowRequestResultEnum').REVERT,this.handleResponse.bind(this)));if(this.$ProfileHoverButton4){this.$ProfileHoverButton4.show();this.logNux(c('SeeFirstNuxEvents').IMP);this.$ProfileHoverButton6.addSubscriptions(c('Event').listen(c('DOM').find(this.$ProfileHoverButton4.getRoot(),"._50zy"),'click',this.logNux.bind(this,c('SeeFirstNuxEvents').XOUT)));}c('Run').onLeave(this.cleanUp.bind(this));}k.prototype.logNux=function(event){'use strict';var l=c('XFeedSeeFirstNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))(l).setData({event:event,id:this.$ProfileHoverButton3.id}).send();};k.prototype.getButtons=function(){'use strict';return c('DOM').scry(this.$ProfileHoverButton1,"._3oz-");};k.prototype.getSelected=function(){'use strict';var l=this.getButtons(),m=null;l.forEach(function(n){var o=n.getAttribute('data-status');if(c('CSS').matchesSelector(n,"._52-0"))m=o;});return m;};k.prototype.setSelected=function(l){'use strict';this.$ProfileHoverButton5=this.getSelected();var m=this.getButtons();m.forEach(function(n){var o=n.getAttribute('data-status');if(o===l){c('CSS').addClass(n,"_52-0");}else c('CSS').removeClass(n,"_52-0");});this.$ProfileHoverButton2.forEachItem(function(n){if(!n.getValue)return;var o=n.getValue();if(o==='unfollow')return;var p=n.getRoot();if(o===l){c('CSS').addClass(p,"_52-0");}else c('CSS').removeClass(p,"_52-0");});};k.prototype.handleResponse=function(event,l){'use strict';if(l.id!==this.$ProfileHoverButton3.id||l.location!==j)return;if(event===c('FollowRequestResultEnum').REVERT)this.revert();};k.prototype.revert=function(){'use strict';if(this.$ProfileHoverButton5===null)return;this.setSelected(this.$ProfileHoverButton5);};k.prototype.cleanUp=function(){'use strict';this.$ProfileHoverButton6&&this.$ProfileHoverButton6.release();this.$ProfileHoverButton6=null;this.$ProfileHoverButton1=null;this.$ProfileHoverButton2=null;this.$ProfileHoverButton3=null;};f.exports=k;}),null);
__d('Dialog',['fbt','Animation','Arbiter','AsyncRequest','Button','ContextualThing','CSS','DOM','Event','Focus','Form','HTML','Keys','Locale','Parent','Run','Style','URI','Vector','bind','createArrayFromMixed','emptyFunction','getObjectValues','getOverlayZIndex','removeFromArray','shield'],(function $module_Dialog(global,require,requireDynamic,requireLazy,module,exports,fbt){var _supportsPositionFixed2=function _supportsPositionFixed(){var body=document.body,test=document.createElement('div'),control=document.createElement('div');body.insertBefore(test,body.firstChild);body.insertBefore(control,body.firstChild);test.style.position='fixed';test.style.top='20px';var result=test.offsetTop!==control.offsetTop;body.removeChild(test);body.removeChild(control);_supportsPositionFixed2=require('emptyFunction').thatReturns(result);return result;};function Dialog(model){'use strict';this._show_loading=true;this._auto_focus=true;this._submit_on_enter=false;this._fade_enabled=true;this._onload_handlers=[];this._top=125;this._uniqueID='dialog_'+Dialog._globalCount++;this._content=null;this._obj=null;this._popup=null;this._overlay=null;this._causal_elem=null;this._previous_focus=null;this._buttons=[];this._buildDialog();if(model)this._setFromModel(model);Dialog._init();}Dialog.prototype.show=function(){'use strict';this._showing=true;if(this._async_request){if(this._show_loading)this.showLoading();}else this._update();return this;};Dialog.prototype.showLoading=function(){'use strict';this._loading=true;require('CSS').addClass(this._frame,'dialog_loading_shown');this._renderDialog();return this;};Dialog.prototype.hide=function(){'use strict';if(!this._showing&&!this._loading)return this;this._showing=false;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}if(this._fade_enabled&&Dialog._stack.length<=1){this._fadeOut();}else this._hide();return this;};Dialog.prototype.cancel=function(){'use strict';if(!this._cancelHandler||this._cancelHandler()!==false)this.hide();};Dialog.prototype.getRoot=function(){'use strict';return this._obj;};Dialog.prototype.getBody=function(){'use strict';return require('DOM').scry(this._obj,'div.dialog_body')[0];};Dialog.prototype.getButtonElement=function(button){'use strict';if(typeof button=='string')button=Dialog._findButton(this._buttons,button);if(!button||!button.name)return null;var inputs=require('DOM').scry(this._popup,'input'),name_filter=function name_filter(elem){return elem.name==button.name;};return inputs.filter(name_filter)[0]||null;};Dialog.prototype.getContentNode=function(){'use strict';return require('DOM').find(this._content,'div.dialog_content');};Dialog.prototype.getFormData=function(){'use strict';return require('Form').serialize(this.getContentNode());};Dialog.prototype.setAllowCrossPageTransition=function(allow){'use strict';this._cross_transition=allow;return this;};Dialog.prototype.setAllowCrossQuicklingNavigation=function(allow){'use strict';this._cross_quickling=allow;return this;};Dialog.prototype.setShowing=function(){'use strict';this.show();return this;};Dialog.prototype.setHiding=function(){'use strict';this.hide();return this;};Dialog.prototype.setTitle=function(title){'use strict';var node=this._nodes.title,inner_node=this._nodes.title_inner,content_node=this._nodes.content;require('DOM').setContent(inner_node,this._format(title||''));require('CSS').conditionShow(node,!!title);require('CSS').conditionClass(content_node,'dialog_content_titleless',!title);return this;};Dialog.prototype.setBody=function(body){'use strict';require('DOM').setContent(this._nodes.body,this._format(body));return this;};Dialog.prototype.setExtraData=function(data){'use strict';this._extra_data=data;return this;};Dialog.prototype.setReturnData=function(data){'use strict';this._return_data=data;return this;};Dialog.prototype.setShowLoading=function(show){'use strict';this._show_loading=show;return this;};Dialog.prototype.setFullBleed=function(is_full_bleed){'use strict';this._full_bleed=is_full_bleed;this._updateWidth();require('CSS').conditionClass(this._obj,'full_bleed',is_full_bleed);return this;};Dialog.prototype.setCausalElement=function(elem){'use strict';this._causal_elem=elem;return this;};Dialog.prototype.setUserData=function(data){'use strict';this._user_data=data;return this;};Dialog.prototype.getUserData=function(){'use strict';return this._user_data;};Dialog.prototype.setAutohide=function(autohide){'use strict';if(autohide){if(this._showing){this._autohide_timeout=setTimeout(require('shield')(this.hide,this),autohide);}else this._autohide=autohide;}else{this._autohide=null;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}}return this;};Dialog.prototype.setSummary=function(summary){'use strict';var node=this._nodes.summary;require('DOM').setContent(node,this._format(summary||''));require('CSS').conditionShow(node,!!summary);return this;};Dialog.prototype.setButtons=function(b){'use strict';var buttons,button;if(!Array.isArray(b)){buttons=Array.from(arguments);}else buttons=b;for(var i=0;i<buttons.length;++i)if(typeof buttons[i]=='string'){button=Dialog._findButton(Dialog._STANDARD_BUTTONS,buttons[i]);buttons[i]=button;}this._buttons=buttons;var button_content=[];if(buttons&&buttons.length>0)for(var ii=0;ii<buttons.length;ii++){button=buttons[ii];var button_input=require('DOM').create('input',{type:'button',name:button.name||'',value:button.label}),button_node=require('DOM').create('label',{className:'uiButton uiButtonLarge uiButtonConfirm'},button_input);if(button.className){button.className.split(/\s+/).forEach(function(e){require('CSS').addClass(button_node,e);});if(require('CSS').hasClass(button_node,'inputaux')){require('CSS').removeClass(button_node,'inputaux');require('CSS').removeClass(button_node,'uiButtonConfirm');}if(require('CSS').hasClass(button_node,'uiButtonSpecial'))require('CSS').removeClass(button_node,'uiButtonConfirm');}if(button.icon)require('DOM').prependContent(button_node,require('DOM').create('img',{src:button.icon,className:'img mrs'}));if(button.disabled)require('Button').setEnabled(button_node,false);require('Event').listen(button_input,'click',this._handleButton.bind(this,button.name));for(var attr in button)if(attr.indexOf('data-')===0&&attr.length>5)button_input.setAttribute(attr,button[attr]);button_content.push(button_node);}require('DOM').setContent(this._nodes.buttons,button_content);this._updateButtonVisibility();return this;};Dialog.prototype.setButtonsMessage=function(message){'use strict';require('DOM').setContent(this._nodes.button_message,this._format(message||''));this._has_button_message=!!message;this._updateButtonVisibility();return this;};Dialog.prototype._updateButtonVisibility=function(){'use strict';var show=this._buttons.length>0||this._has_button_message;require('CSS').conditionShow(this._nodes.button_wrapper,show);require('CSS').conditionClass(this._obj,'omitDialogFooter',!show);};Dialog.prototype.setClickButtonOnEnter=function(input_id,button){'use strict';this._clickOnEnterTarget=input_id;if(!this._clickOnEnterListener)this._clickOnEnterListener=require('Event').listen(this._nodes.body,'keypress',function(event){var target=event.getTarget();if(target&&target.id===this._clickOnEnterTarget)if(require('Event').getKeyCode(event)==require('Keys').RETURN){this._handleButton(button);event.kill();}return true;}.bind(this));return this;};Dialog.prototype.setStackable=function(stackable,shown){'use strict';this._is_stackable=stackable;this._shown_while_stacked=stackable&&shown;return this;};Dialog.prototype.setHandler=function(handler){'use strict';this._handler=handler;return this;};Dialog.prototype.setCancelHandler=function(cancelHandler){'use strict';this._cancelHandler=Dialog.call_or_eval.bind(null,this,cancelHandler);return this;};Dialog.prototype.setCloseHandler=function(close_handler){'use strict';this._close_handler=Dialog.call_or_eval.bind(null,this,close_handler);return this;};Dialog.prototype.clearHandler=function(){'use strict';return this.setHandler(null);};Dialog.prototype.setPostURI=function(post_uri,asynchronous){'use strict';if(asynchronous===undefined)asynchronous=true;if(asynchronous){this.setHandler(this._submitForm.bind(this,'POST',post_uri));}else this.setHandler(function(){require('Form').post(post_uri,this.getFormData());this.hide();}.bind(this));return this;};Dialog.prototype.setGetURI=function(get_uri){'use strict';this.setHandler(this._submitForm.bind(this,'GET',get_uri));return this;};Dialog.prototype.setModal=function(modal){'use strict';this._modal=modal;require('CSS').conditionClass(this._obj,'generic_dialog_modal',modal);return this;};Dialog.prototype.setSemiModal=function(clickout){'use strict';if(clickout){this.setModal(true);this._semiModalListener=require('Event').listen(this._obj,'click',function(e){if(!require('DOM').contains(this._popup,e.getTarget()))this.hide();}.bind(this));}else this._semiModalListener&&this._semiModalListener.remove();this._semi_modal=clickout;return this;};Dialog.prototype.setWideDialog=function(is_wide){'use strict';this._wide_dialog=is_wide;this._updateWidth();return this;};Dialog.prototype.setContentWidth=function(width){'use strict';this._content_width=width;this._updateWidth();return this;};Dialog.prototype.setTitleLoading=function(loading){'use strict';if(loading===undefined)loading=true;var header=require('DOM').find(this._popup,'h2.dialog_title');if(header)require('CSS').conditionClass(header,'loading',loading);return this;};Dialog.prototype.setSecure=function(is_secure){'use strict';require('CSS').conditionClass(this._nodes.title,'secure',is_secure);return this;};Dialog.prototype.setClassName=function(class_name){'use strict';class_name.split(/\s+/).forEach(require('CSS').addClass.bind(require('CSS'),this._obj));return this;};Dialog.prototype.setFadeEnabled=function(enabled){'use strict';this._fade_enabled=enabled;return this;};Dialog.prototype.setFooter=function(footer){'use strict';var node=this._nodes.footer;require('DOM').setContent(node,this._format(footer||''));require('CSS').conditionShow(node,!!footer);return this;};Dialog.prototype.setAutoFocus=function(focus){'use strict';this._auto_focus=focus;return this;};Dialog.prototype.setTop=function(top){'use strict';this._top=top;this._resetDialogObj();return this;};Dialog.prototype.onloadRegister=function(handler){'use strict';require('createArrayFromMixed')(handler).forEach(function(i){if(typeof i=='string')i=new Function(i);this._onload_handlers.push(i.bind(this));}.bind(this));return this;};Dialog.prototype.setAsyncURL=function(url){'use strict';return this.setAsync(new (require('AsyncRequest'))(url));};Dialog.prototype.setAsync=function(async_request){'use strict';var handler=function(response){if(this._async_request!=async_request)return;this._async_request=null;var payload=response.getPayload(),dialog=payload;if(this._loading)this._showing=true;if(typeof dialog=='string'){this.setBody(dialog);}else this._setFromModel(dialog);this._update();}.bind(this),data=async_request.getData();data.__d=1;async_request.setData(data);var orig_handler=async_request.getHandler()||require('emptyFunction');async_request.setHandler(function(response){orig_handler(response);handler(response);});var request=async_request,orig_error_handler=request.getErrorHandler()||require('emptyFunction'),orig_trans_error_handler=request.getTransportErrorHandler()||require('emptyFunction'),handle_error=function(){this._async_request=null;this._loading=false;if(this._showing&&this._shown_while_stacked){this._update();}else this._hide(this._is_stackable);}.bind(this),server_cancel_handler=request.getServerDialogCancelHandler()||handle_error;request.setAllowCrossPageTransition(this._cross_transition).setErrorHandler(function(response){handle_error();orig_error_handler(response);}).setTransportErrorHandler(function(response){handle_error();orig_trans_error_handler(response);}).setServerDialogCancelHandler(server_cancel_handler);async_request.send();this._async_request=async_request;if(this._showing)this.show();return this;};Dialog.prototype._format=function(content){'use strict';if(typeof content=='string'){content=require('HTML')(content);}else content=require('HTML').replaceJSONWrapper(content);if(content instanceof require('HTML'))content.setDeferred(true);return content;};Dialog.prototype._update=function(){'use strict';if(!this._showing)return;if(this._autohide&&!this._async_request&&!this._autohide_timeout)this._autohide_timeout=setTimeout(require('bind')(this,'hide'),this._autohide);require('CSS').removeClass(this._frame,'dialog_loading_shown');this._loading=false;this._renderDialog();this._runOnloads();this._previous_focus=document.activeElement;require('Focus').set(this._frame);};Dialog.prototype._runOnloads=function(){'use strict';for(var i=0;i<this._onload_handlers.length;++i)try{this._onload_handlers[i]();}catch(ex){}this._onload_handlers=[];};Dialog.prototype._updateWidth=function(){'use strict';var dialog_width=2*(Dialog._BORDER_WIDTH+Dialog._HALO_WIDTH);if(this._content_width){dialog_width+=this._content_width;if(!this._full_bleed)dialog_width+=2*Dialog._PADDING_WIDTH;}else if(this._wide_dialog){dialog_width+=Dialog.SIZE.WIDE;}else dialog_width+=Dialog.SIZE.STANDARD;this._popup.style.width=dialog_width+'px';};Dialog.prototype._updateZIndex=function(){'use strict';if(!this._hasSetZIndex&&this._causal_elem){var z_index=require('getOverlayZIndex')(this._causal_elem),node=this._causal_elem;while(!z_index&&(node=require('ContextualThing').getContext(node)))z_index=require('getOverlayZIndex')(node);this._hasSetZIndex=z_index>(this._modal?400:200);require('Style').set(this._obj,'z-index',this._hasSetZIndex?z_index:'');}};Dialog.prototype._renderDialog=function(){'use strict';this._updateZIndex();this._pushOntoStack();this._obj.style.height=null;if(this._obj&&this._obj.style.display){this._obj.style.visibility='hidden';this._obj.style.display='';this.resetDialogPosition();this._obj.style.visibility='';this._obj.dialog=this;}else this.resetDialogPosition();clearInterval(this.active_hiding);this.active_hiding=setInterval(this._activeResize.bind(this),500);this._submit_on_enter=false;if(this._auto_focus){var input=require('Form').getFirstElement(this._content,['input[type="text"]','textarea','input[type="password"]']);if(input){setTimeout(require('Form').focusFirst.bind(this,this._content),0);}else this._submit_on_enter=true;}var bottom=require('Vector').getElementDimensions(this._content).y+require('Vector').getElementPosition(this._content).y;Dialog._bottoms.push(bottom);this._bottom=bottom;Dialog._updateMaxBottom();return this;};Dialog.prototype._buildDialog=function(){'use strict';this._obj=require('DOM').create('div',{className:'generic_dialog',id:this._uniqueID});this._obj.style.display='none';require('DOM').appendContent(document.body,this._obj);if(!this._popup)this._popup=require('DOM').create('div',{className:'generic_dialog_popup'});this._obj.appendChild(this._popup);require('CSS').addClass(this._obj,'pop_dialog');if(require('Locale').isRTL())require('CSS').addClass(this._obj,'pop_dialog_rtl');require('DOM').setContent(this._popup,require('DOM').create('div',{className:'pop_container_advanced'},require('DOM').create('div',{className:'pop_content',id:'pop_content'})));var frame=require('DOM').find(this._popup,'div.pop_content');frame.setAttribute('tabIndex','0');frame.setAttribute('role','alertdialog');this._frame=this._content=frame;var loading=require('DOM').create('div',{className:'dialog_loading'},fbt._("Carregando...")),title_inner=require('DOM').create('span'),title=require('DOM').create('h2',{className:'dialog_title hidden_elem',id:'title_'+this._uniqueID},title_inner),summary=require('DOM').create('div',{className:'dialog_summary hidden_elem'}),body=require('DOM').create('div',{className:'dialog_body'}),buttons=require('DOM').create('div',{className:'rfloat mlm'}),button_message=require('DOM').create('div',{className:'dialog_buttons_msg'}),button_wrapper=require('DOM').create('div',{className:'dialog_buttons clearfix hidden_elem'},[buttons,button_message]),footer=require('DOM').create('div',{className:'dialog_footer hidden_elem'}),content=require('DOM').create('div',{className:'dialog_content'},[summary,body,button_wrapper,footer]);this._nodes={summary:summary,body:body,buttons:buttons,button_message:button_message,button_wrapper:button_wrapper,footer:footer,content:content,title:title,title_inner:title_inner};require('DOM').setContent(this._frame,[title,content,loading]);};Dialog.prototype._activeResize=function(){'use strict';if(this.last_offset_height!=this._content.offsetHeight){this.last_offset_height=this._content.offsetHeight;this.resetDialogPosition();}};Dialog.prototype.resetDialogPosition=function(){'use strict';if(!this._popup)return;this._resetDialogObj();};Dialog.prototype._resetDialogObj=function(){'use strict';var total_margin=2*Dialog._PAGE_MARGIN,viewport_dimensions=require('Vector').getViewportDimensions(),viewport_width=viewport_dimensions.x-total_margin,viewport_height=viewport_dimensions.y-total_margin,total_halo_width=2*Dialog._HALO_WIDTH,content_dimensions=require('Vector').getElementDimensions(this._content),content_width=content_dimensions.x+total_halo_width,content_height=content_dimensions.y+total_halo_width,top=this._top,empty_horiz_space=viewport_width-content_width,empty_vertical_space=viewport_height-content_height;if(empty_vertical_space<0){top=Dialog._PAGE_MARGIN;}else if(top>empty_vertical_space)top=Dialog._PAGE_MARGIN+Math.max(empty_vertical_space,0)/2;var is_fixed=_supportsPositionFixed2();if(!is_fixed)top+=require('Vector').getScrollPosition().y;require('Style').set(this._popup,'marginTop',top+'px');var scroll=is_fixed&&(empty_horiz_space<0||empty_vertical_space<0);require('CSS').conditionClass(this._obj,'generic_dialog_fixed_overflow',scroll);require('CSS').conditionClass(document.documentElement,'generic_dialog_overflow_mode',scroll);};Dialog.prototype._fadeOut=function(temporary){'use strict';if(!this._popup)return;try{new (require('Animation'))(this._obj).duration(0).checkpoint().to('opacity',0).hide().duration(250).ondone(this._hide.bind(this,temporary)).go();}catch(e){this._hide(temporary);}};Dialog.prototype._hide=function(temporary){'use strict';if(this._obj)this._obj.style.display='none';require('CSS').removeClass(document.documentElement,'generic_dialog_overflow_mode');clearInterval(this.active_hiding);if(this._bottom){var bs=Dialog._bottoms;bs.splice(bs.indexOf(this._bottom),1);Dialog._updateMaxBottom();}if(this._previous_focus&&document.activeElement&&require('DOM').contains(this._obj,document.activeElement))require('Focus').set(this._previous_focus);if(temporary)return;this.destroy();};Dialog.prototype.destroy=function(){'use strict';this._popFromStack();clearInterval(this.active_hiding);if(this._obj){require('DOM').remove(this._obj);this._obj=null;}this._clickOnEnterListener&&this._clickOnEnterListener.remove();if(this._close_handler)this._close_handler({return_data:this._return_data});};Dialog.prototype._handleButton=function(button){'use strict';if(typeof button=='string')button=Dialog._findButton(this._buttons,button);var value=Dialog.call_or_eval(button,button.handler);if(value===false)return;if(button.name=='cancel'){this.cancel();}else if(Dialog.call_or_eval(this,this._handler,{button:button})!==false)this.hide();};Dialog.prototype._submitForm=function(method,uri,button){'use strict';var data=this.getFormData();if(button)data[button.name]=button.name;if(this._extra_data)Object.assign(data,this._extra_data);var async_request=new (require('AsyncRequest'))().setURI(uri).setData(data).setMethod(method).setNectarModuleDataSafe(this._causal_elem).setReadOnly(method=='GET');this.setAsync(async_request);return false;};Dialog.prototype._setFromModel=function(original_model){'use strict';var model={};Object.assign(model,original_model);for(var propertyName in model){if(propertyName=='onloadRegister'){this.onloadRegister(model[propertyName]);continue;}var mutator=this['set'+propertyName.substr(0,1).toUpperCase()+propertyName.substr(1)];mutator.apply(this,require('createArrayFromMixed')(model[propertyName]));}};Dialog.prototype._updateBottom=function(){'use strict';var bottom=require('Vector').getElementDimensions(this._content).y+require('Vector').getElementPosition(this._content).y;Dialog._bottoms[Dialog._bottoms.length-1]=bottom;Dialog._updateMaxBottom();};Dialog.prototype._pushOntoStack=function(){'use strict';var stack=Dialog._stack;if(!stack.length)require('Arbiter').inform('layer_shown',{type:'Dialog'});require('removeFromArray')(stack,this);stack.push(this);for(var i=stack.length-2;i>=0;i--){var prev_dialog=stack[i];if(!prev_dialog._is_stackable&&!prev_dialog._async_request){prev_dialog._hide();}else if(!prev_dialog._shown_while_stacked)prev_dialog._hide(true);}};Dialog.prototype._popFromStack=function(){'use strict';var stack=Dialog._stack,was_top=stack[stack.length-1]===this;require('removeFromArray')(stack,this);if(stack.length){if(was_top)stack[stack.length-1].show();}else require('Arbiter').inform('layer_hidden',{type:'Dialog'});};Dialog._updateMaxBottom=function(){'use strict';Dialog.max_bottom=Math.max.apply(Math,Dialog._bottoms);};Dialog.newButton=function(name,label,className,handler){'use strict';var button={name:name,label:label};if(className)button.className=className;if(handler)button.handler=handler;return button;};Dialog.getCurrent=function(){'use strict';var stack=Dialog._stack;return stack.length?stack[stack.length-1]:null;};Dialog.hideCurrent=function(){'use strict';var dialog=Dialog.getCurrent();dialog&&dialog.hide();};Dialog.bootstrap=function(uri,data,read_only,method,model,elem){'use strict';data=data||{};Object.assign(data,new (require('URI'))(uri).getQueryData());method=method||(read_only?'GET':'POST');var status_elem=require('Parent').byClass(elem,'stat_elem')||elem;if(status_elem&&require('CSS').hasClass(status_elem,'async_saving'))return false;var request=new (require('AsyncRequest'))().setReadOnly(!!read_only).setMethod(method).setRelativeTo(elem).setStatusElement(status_elem).setURI(uri).setNectarModuleDataSafe(elem).setData(data),dialog=new Dialog(model).setCausalElement(elem).setAsync(request);dialog.show();return false;};Dialog.showFromModel=function(model,causal_element){'use strict';var dialog=new Dialog(model).setCausalElement(causal_element).show();if(model.hiding)dialog.hide();};Dialog._init=function(){'use strict';this._init=require('emptyFunction');require('Run').onLeave(require('shield')(Dialog._tearDown,null,false));require('Arbiter').subscribe('page_transition',require('shield')(Dialog._tearDown,null,true));require('Event').listen(document.documentElement,'keydown',function(event){if(require('Event').getKeyCode(event)==require('Keys').ESC&&!event.getModifiers().any){if(Dialog._escape())event.kill();}else if(require('Event').getKeyCode(event)==require('Keys').RETURN&&!event.getModifiers().any)if(Dialog._enter())event.kill();});require('Event').listen(window,'resize',function(event){var dialog=Dialog.getCurrent();dialog&&dialog._resetDialogObj();});};Dialog._findButton=function(buttons,name){'use strict';if(buttons)for(var i=0;i<buttons.length;++i)if(buttons[i].name==name)return buttons[i];return null;};Dialog._tearDown=function(is_page_transition){'use strict';var stack=Dialog._stack.slice();for(var ii=stack.length-1;ii>=0;ii--)if(is_page_transition&&!stack[ii]._cross_transition||!is_page_transition&&!stack[ii]._cross_quickling)stack[ii].hide();};Dialog._escape=function(){'use strict';var dialog=Dialog.getCurrent();if(!dialog)return false;var semi_modal=dialog._semi_modal,buttons=dialog._buttons;if(!buttons.length&&!semi_modal)return false;if(semi_modal&&!buttons.length){dialog.hide();return true;}var button_to_simulate,cancel_button=Dialog._findButton(buttons,'cancel');if(dialog._cancelHandler){dialog.cancel();return true;}else if(cancel_button){button_to_simulate=cancel_button;}else if(buttons.length==1){button_to_simulate=buttons[0];}else return false;dialog._handleButton(button_to_simulate);return true;};Dialog._enter=function(){'use strict';var dialog=Dialog.getCurrent();if(!dialog||!dialog._submit_on_enter)return false;if(document.activeElement!=dialog._frame)return false;var buttons=dialog._buttons;if(!buttons)return false;dialog._handleButton(buttons[0]);return true;};Dialog.call_or_eval=function(obj,func,args){'use strict';if(!func)return undefined;args=args||{};if(typeof func=='string'){var params=Object.keys(args).join(', ');func=eval('({f: function('+params+') { '+func+'}})').f;}return func.apply(obj,require('getObjectValues')(args));};Object.assign(Dialog,{OK:{name:'ok',label:fbt._("OK")},CANCEL:{name:'cancel',label:fbt._("Cancelar"),className:'inputaux'},CLOSE:{name:'close',label:fbt._("Fechar")},NEXT:{name:'next',label:fbt._("Avan\u00e7ar")},SAVE:{name:'save',label:fbt._("Salvar")},SUBMIT:{name:'submit',label:fbt._("Enviar")},CONFIRM:{name:'confirm',label:fbt._("Confirmar")},DELETE:{name:'delete',label:fbt._("Excluir")},_globalCount:0,_bottoms:[0],max_bottom:0});Object.assign(Dialog,{OK_AND_CANCEL:[Dialog.OK,Dialog.CANCEL],_STANDARD_BUTTONS:[Dialog.OK,Dialog.CANCEL,Dialog.CLOSE,Dialog.SAVE,Dialog.SUBMIT,Dialog.CONFIRM,Dialog.DELETE],SIZE:{WIDE:555,STANDARD:445},_HALO_WIDTH:10,_BORDER_WIDTH:1,_PADDING_WIDTH:10,_PAGE_MARGIN:40,_stack:[]});Object.assign(Dialog.prototype,{_cross_quickling:false,_cross_transition:false,_loading:false,_showing:false});module.exports=Dialog;global.Dialog=Dialog;}),null);
__d('TidyArbiter',['TidyArbiterMixin'],(function a(b,c,d,e,f,g){var h=babelHelpers['extends']({},c('TidyArbiterMixin'));f.exports=h;}),null);
__d('ProfileTabUtils',['ProfileOverviewDOMID','ProfileTabConst'],(function a(b,c,d,e,f,g){function h(j){return !j||j===c('ProfileTabConst').TIMELINE||j===c('ProfileTabConst').WALL;}var i={isActivityLogTab:function j(k){return k===c('ProfileTabConst').ALL_ACTIVITY||k===c('ProfileTabConst').APPROVAL;},isOverviewTab:function j(k){return k===c('ProfileTabConst').INFO||k===c('ProfileTabConst').OVERVIEW;},isTimelineTab:h,isMapTab:function j(k){return k===c('ProfileTabConst').MAP;},tabHasFixedAds:function j(k){return true;},tabHasScrubber:function j(k){return i.isActivityLogTab(k);},tabHasStickyHeader:h,getIDForCollectionToken:function j(k){return c('ProfileOverviewDOMID').PREFIX_APP_COLLECTION+k;},getIDForSectionKey:function j(k){return c('ProfileOverviewDOMID').PREFIX_MEDLEY+k;}};f.exports=i;}),null);
__d('TimelineCoverCollapse',['$','Arbiter','DOMDimensions','Style','TidyArbiter','getViewportDimensions'],(function a(b,c,d,e,f,g){g.collapse=function(h,i){i--;var j=c('getViewportDimensions')().height,k=c('DOMDimensions').getDocumentDimensions().height,l=j+i;if(k<=l)c('Style').set(c('$')('globalContainer'),'min-height',l+'px');window.scrollBy(0,i);c('TidyArbiter').inform('TimelineCover/coverCollapsed',i,c('Arbiter').BEHAVIOR_STATE);};}),null);