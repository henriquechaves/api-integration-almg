if (self.CavalryLogger) { CavalryLogger.start_js(["0O7A6"]); }

__d('AppsDivebarDisplayController',['cx','AppsDivebarConfigData','AsyncRequest','Arbiter','CSS','UIPagelet','$'],(function a(b,c,d,e,f,g,h){var i=171,j={isVisible:function k(){if(this._visible!==undefined)return this._visible;this._visible=!c('AppsDivebarConfigData').hidden;return this._visible;},showApps:function k(){this._visible=true;var l={fb_source_category:'sidebar'};c('UIPagelet').loadFromEndpoint('GamesDivebarPagelet','pagelet_canvas_nav_content',l);c('CSS').show(c('$')('apps_gripper'));c('CSS').show(c('$')('pagelet_canvas_nav_content'));c('CSS').addClass(c('$')('pagelet_canvas_nav_content'),"_4woj");c('Arbiter').inform('AppsDivebar/show-apps');new (c('AsyncRequest'))('/ajax/feed/apps/resize').setData({height:''+i,menu:true}).setMethod('POST').send();},hideApps:function k(){this._visible=false;c('CSS').hide(c('$')('pagelet_canvas_nav_content'));c('CSS').hide(c('$')('apps_gripper'));c('Arbiter').inform('AppsDivebar/hide-apps');new (c('AsyncRequest'))('/ajax/feed/apps/resize').setData({height:'1',menu:true}).setMethod('POST').send();}};f.exports=j;}),null);
__d('ChatSidebarDropdownConstants',[],(function a(b,c,d,e,f,g){var h={SOUND:'sound',ADVANCED_SETTINGS:'advanced_settings',BLOCK_SETTINGS:'block_settings',TURN_OFF_DIALOG:'turn_off_dialog',CLOSE_ALL_TABS:'close_all_tabs',LOWER_ALL_TABS:'lower_all_tabs',SIDEBAR:'sidebar',HIDE_GROUPS:'hide_groups',ONLINE:'online',VIDEOCALL_ON:'videoon',VIDEOCALL_OFF:'videooff',PAUSE:'pause',SHOW_APPS:'show_apps',HIDE_APPS:'hide_apps',SHOW_TICKER:'show_ticker',HIDE_TICKER:'hide_ticker',HIDE_ADMINED_PAGES:'hide_admined_pages',EMOJI_SETTINGS:'emoji_settings'};f.exports=h;}),null);
__d("XChatEmojiSettingsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/chat\/emoji_settings\/",{__asyncDialog:{type:"Int"}});}),null);
__d('ChatSidebarDropdown.react',['cx','fbt','AppsDivebarDisplayController','Arbiter','AsyncRequest','ChatConfig','ChatOptions','ChatSidebarDropdownConstants','ChatVisibility','ContextualDialogArrow','ContextualLayerAutoFlip','ConversationNubUtils','CurrentUser','FantaTabActions','FBRTCCallBlockingStore','FBRTCSupport','LayerHideOnBlur','Link.react','LogHistory','MenuSeparator.react','PinnedConversationNubsConfig','PopoverMenu.react','PresencePrivacy','PresenceState','React','ReactXUIMenu','SidebarType','SubscriptionsHandler','TrackingNodes','URI','XChatEmojiSettingsController','emptyFunction','ge','joinClasses'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('ReactXUIMenu').SelectableItem,m=c('ReactXUIMenu').SelectableMenu,n=c('ReactXUIMenu').Item,o=c('React').PropTypes,p=c('LogHistory').getInstance('blackbird');j=babelHelpers.inherits(q,c('React').PureComponent);k=j&&j.prototype;function q(){var r,s;for(var t=arguments.length,u=Array(t),v=0;v<t;v++)u[v]=arguments[v];return s=(r=k.constructor).call.apply(r,[this].concat(u)),this.$ChatSidebarDropdown6=function(w,x){var y=x.item.getValue(),z=x.item.isSelected&&x.item.isSelected();this.$ChatSidebarDropdown5(y,!!z);}.bind(this),this.state={appsVisible:c('AppsDivebarDisplayController').isVisible(),isConversationsEnabled:c('PinnedConversationNubsConfig').isEnabled,isOnline:c('ChatVisibility').isOnline(),isTickerVisible:this.$ChatSidebarDropdown2(),isCallBlocked:c('FBRTCCallBlockingStore').getBlockingStatus(),pendingChange:false},s;}q.prototype.componentDidMount=function(){this.$ChatSidebarDropdown1=new (c('SubscriptionsHandler'))();this.$ChatSidebarDropdown1.addSubscriptions(c('Arbiter').subscribe(['Ticker/resized','ticker/show'],function(){this.setState({isTickerVisible:this.$ChatSidebarDropdown2()});}.bind(this)),c('Arbiter').subscribe(['AppsDivebar/show-apps','AppsDivebar/hide-apps'],function(){this.setState({appsVisible:c('AppsDivebarDisplayController').isVisible()});}.bind(this)),c('PresencePrivacy').subscribe('privacy-user-presence-changed',function(){this.setState({isOnline:c('ChatVisibility').isOnline()});}.bind(this)),c('Arbiter').subscribe('buddylist/hide',function(){this.refs.menu.hidePopover();}.bind(this)),c('Arbiter').subscribe('sidebar/visibility',function(r,s){if(!s)this.refs.menu.hidePopover();}.bind(this)),c('FBRTCCallBlockingStore').addListener(function(){this.setState({isCallBlocked:c('FBRTCCallBlockingStore').getBlockingStatus()});}.bind(this)));if(c('PinnedConversationNubsConfig').userSettingsIsEnabled)this.$ChatSidebarDropdown1.addSubscriptions(c('Arbiter').subscribe(c('ConversationNubUtils').TURN_CONVERSATIONS_OFF_EVENT,function(){this.setState({isConversationsEnabled:false});}.bind(this)),c('Arbiter').subscribe(c('ConversationNubUtils').TURN_CONVERSATIONS_ON_EVENT,function(){this.setState({isConversationsEnabled:true});}.bind(this)));};q.prototype.componentWillUnmount=function(){this.$ChatSidebarDropdown1&&this.$ChatSidebarDropdown1.release();};q.prototype.$ChatSidebarDropdown2=function(){var r=c('ge')('pagelet_ticker');return !!(r&&r.offsetHeight!==0);};q.prototype.$ChatSidebarDropdown3=function(r,s){var t=s?'sidebar_dropdown_visibility_error':'sidebar_dropdown_set_visibility';p.debug(t,JSON.stringify({action:r}));};q.prototype.$ChatSidebarDropdown4=function(r,s){if(this.state.pendingChange)return;this.setState({pendingChange:true});var t={};t[r]=!s;c('ChatOptions').setSetting(r,!s,'mini_sidebar_menu');new (c('AsyncRequest'))('/ajax/chat/settings.php').setHandler(c('PresenceState').doSync).setErrorHandler(function(){return c('ChatOptions').setSetting(r,s,'mini_sidebar_menu_error');}).setFinallyHandler(function(){return this.setState({pendingChange:false});}.bind(this)).setData(t).setAllowCrossPageTransition(true).send();};q.prototype.$ChatSidebarDropdown5=function(r,s){var t=true;switch(r){case c('ChatSidebarDropdownConstants').SOUND:this.$ChatSidebarDropdown4(r,s);break;case c('ChatSidebarDropdownConstants').ADVANCED_SETTINGS:case c('ChatSidebarDropdownConstants').TURN_OFF_DIALOG:this.$ChatSidebarDropdown3(r,false);break;case c('ChatSidebarDropdownConstants').LOWER_ALL_TABS:c('FantaTabActions').minimizeAllTabs();break;case c('ChatSidebarDropdownConstants').CLOSE_ALL_TABS:c('FantaTabActions').closeAllTabs();this.$ChatSidebarDropdown3(r,false);break;case c('ChatSidebarDropdownConstants').HIDE_GROUPS:this.$ChatSidebarDropdown4(r,s);break;case c('ChatSidebarDropdownConstants').SIDEBAR:this.props.onToggleSidebar();t=false;break;case c('ChatSidebarDropdownConstants').ONLINE:!this.state.isOnline?c('ChatVisibility').goOnline():this.$ChatSidebarDropdown3(r,true);break;case c('ChatSidebarDropdownConstants').VIDEOCALL_ON:c('FBRTCCallBlockingStore').turnOnVideoCalling();break;case c('ChatSidebarDropdownConstants').VIDEOCALL_OFF:break;case c('ChatSidebarDropdownConstants').PAUSE:break;case c('ChatSidebarDropdownConstants').SHOW_TICKER:c('Arbiter').inform('ChatSidebarDropdown/openTicker');break;case c('ChatSidebarDropdownConstants').HIDE_TICKER:c('Arbiter').inform('ChatSidebarDropdown/closeTicker');break;case c('ConversationNubUtils').TURN_CONVERSATIONS_OFF_EVENT:c('ConversationNubUtils').turnConversationsOff();break;case c('ConversationNubUtils').TURN_CONVERSATIONS_ON_EVENT:c('ConversationNubUtils').turnConversationsOn();break;case c('ChatSidebarDropdownConstants').SHOW_APPS:c('AppsDivebarDisplayController').showApps();break;case c('ChatSidebarDropdownConstants').HIDE_APPS:c('AppsDivebarDisplayController').hideApps();break;case c('ChatSidebarDropdownConstants').HIDE_ADMINED_PAGES:this.$ChatSidebarDropdown4(r,s);break;}if(t&&this.refs.menu)this.refs.menu.hidePopover();};q.prototype.$ChatSidebarDropdown7=function(){return c('React').createElement(l,{value:c('ChatSidebarDropdownConstants').SOUND,selected:c('ChatOptions').getSetting(c('ChatSidebarDropdownConstants').SOUND)},i._("Sons do bate-papo"));};q.prototype.$ChatSidebarDropdown8=function(){if(!c('ChatConfig').get('messenger_new_emoji_set'))return null;var r=c('XChatEmojiSettingsController').getURIBuilder().getURI();return c('React').createElement(n,{href:r,rel:'dialog',value:c('ChatSidebarDropdownConstants').EMOJI_SETTINGS},i._("Emoji"));};q.prototype.$ChatSidebarDropdown9=function(){if(c('CurrentUser').isWorkUser())return null;return c('React').createElement(n,{href:new (c('URI'))('/settings?tab=blocking'),value:c('ChatSidebarDropdownConstants').BLOCK_SETTINGS},i._("Configura\u00e7\u00f5es de bloqueio"));};q.prototype.$ChatSidebarDropdown10=function(){return c('React').createElement(n,{href:new (c('URI'))('/ajax/chat/privacy/settings_dialog.php'),rel:'dialog',value:c('ChatSidebarDropdownConstants').ADVANCED_SETTINGS},i._("Configura\u00e7\u00f5es avan\u00e7adas..."));};q.prototype.$ChatSidebarDropdown11=function(){return c('React').createElement(n,{value:c('ChatSidebarDropdownConstants').LOWER_ALL_TABS},i._("Recolher todas as guias de bate-papo"));};q.prototype.$ChatSidebarDropdown12=function(){return c('React').createElement(n,{value:c('ChatSidebarDropdownConstants').CLOSE_ALL_TABS},i._("Fechar todas as guias de bate-papo"));};q.prototype.$ChatSidebarDropdown13=function(){return c('React').createElement(n,{className:"_4kqp",value:c('ChatSidebarDropdownConstants').SIDEBAR},i._("Ocultar barra lateral"));};q.prototype.$ChatSidebarDropdown14=function(){if(this.props.sidebarType===c('SidebarType').BUDDYLIST_NUB||!c('ChatConfig').get('show_admined_pages'))return null;return c('React').createElement(l,{className:"_4kqp",value:c('ChatSidebarDropdownConstants').HIDE_ADMINED_PAGES,selected:c('ChatOptions').getSetting(c('ChatSidebarDropdownConstants').HIDE_ADMINED_PAGES)},i._("Ocultar P\u00e1ginas"));};q.prototype.$ChatSidebarDropdown15=function(){if(this.props.sidebarType===c('SidebarType').BUDDYLIST_NUB)return null;return c('React').createElement(l,{value:c('ChatSidebarDropdownConstants').HIDE_GROUPS,selected:c('ChatOptions').getSetting(c('ChatSidebarDropdownConstants').HIDE_GROUPS)},i._("Ocultar grupos"));};q.prototype.$ChatSidebarDropdown16=function(){var r=c('ChatVisibility').isOnline(),s=r?new (c('URI'))('/ajax/chat/privacy/settings_dialog.php').addQueryData('dialog_type','turn_off_dialog'):'#',t=r?i._("Desativar bate-papo"):i._("Ativar o bate-papo"),u=r?c('ChatSidebarDropdownConstants').TURN_OFF_DIALOG:c('ChatSidebarDropdownConstants').ONLINE;return c('React').createElement(n,{href:s,rel:r?'dialog':'',value:u},t);};q.prototype.$ChatSidebarDropdown17=function(){if(!c('FBRTCSupport').isVideoCallBlockingSupported())return;var r=this.state.isCallBlocked,s=r?'#':new (c('URI'))('/videocall/off/'),t=r?i._("Ativar liga\u00e7\u00f5es de voz\/videochamadas"):i._("Desativar videochamadas\/liga\u00e7\u00f5es de voz"),u=r?c('ChatSidebarDropdownConstants').VIDEOCALL_ON:c('ChatSidebarDropdownConstants').VIDEOCALL_OFF;return c('React').createElement(n,{href:s,rel:r?'':'dialog',value:u},t);};q.prototype.$ChatSidebarDropdown18=function(){if(!c('PinnedConversationNubsConfig').userSettingsIsEnabled)return null;var r=this.state.isConversationsEnabled,s=r?i._("Desativar guias de publica\u00e7\u00e3o"):i._("Ativar guias de publica\u00e7\u00e3o"),t=r?c('ConversationNubUtils').TURN_CONVERSATIONS_OFF_EVENT:c('ConversationNubUtils').TURN_CONVERSATIONS_ON_EVENT;return c('React').createElement(n,{value:t},s);};q.prototype.$ChatSidebarDropdown19=function(){if(!c('ChatConfig').get('has_apps_option')||this.props.sidebarType!==c('SidebarType').SIDEBAR)return null;var r=this.state.appsVisible,s=r?i._("Ocultar jogos"):i._("Mostrar jogos"),t=r?c('ChatSidebarDropdownConstants').HIDE_APPS:c('ChatSidebarDropdownConstants').SHOW_APPS;return [c('React').createElement(c('MenuSeparator.react'),{key:'apps_separator'}),c('React').createElement(n,{value:t,key:'apps_menu'},s)];};q.prototype.$ChatSidebarDropdown20=function(){if(!c('ChatConfig').get('has_ticker_toggle_option')||this.props.sidebarType!==c('SidebarType').SIDEBAR)return null;var r=this.state.isTickerVisible,s=r?i._("Ocultar Novidades"):i._("Mostrar Novidades"),t=r?c('ChatSidebarDropdownConstants').HIDE_TICKER:c('ChatSidebarDropdownConstants').SHOW_TICKER;return [c('React').createElement(c('MenuSeparator.react'),{key:'ticker_separator'}),c('React').createElement(n,{value:t,key:'ticker_menu'},s)];};q.prototype.$ChatSidebarDropdown21=function(){return c('React').createElement(m,{className:'fbChatSidebarDropdown/PopoverMenu',multiple:true,onItemClick:this.$ChatSidebarDropdown6},this.$ChatSidebarDropdown7(),this.$ChatSidebarDropdown8(),this.$ChatSidebarDropdown9(),this.$ChatSidebarDropdown10(),c('React').createElement(c('MenuSeparator.react'),null),this.$ChatSidebarDropdown11(),this.$ChatSidebarDropdown12(),this.$ChatSidebarDropdown13(),this.$ChatSidebarDropdown14(),this.$ChatSidebarDropdown15(),this.$ChatSidebarDropdown16(),this.$ChatSidebarDropdown17(),this.$ChatSidebarDropdown18(),this.$ChatSidebarDropdown19(),this.$ChatSidebarDropdown20());};q.prototype.render=function(){var r=i._("Op\u00e7\u00f5es"),s=c('joinClasses')(this.props.className,"_5qth"+(' '+"_5vm9")+(!c('ChatVisibility').isOnline()?' '+"_5vma":'')),t=c('TrackingNodes').getTrackingInfo(c('TrackingNodes').types.DROPDOWN_BUTTON);return c('React').createElement(c('PopoverMenu.react'),{alignh:'right',alignv:'top',className:s,layerBehaviors:[c('ContextualLayerAutoFlip'),c('ContextualDialogArrow'),c('LayerHideOnBlur')],menu:this.$ChatSidebarDropdown21(),onHide:this.props.onHide,onShow:this.props.onShow,ref:'menu'},c('React').createElement(c('Link.react'),{'aria-label':r,className:"_5vmb button",'data-ft':t,'data-hover':'tooltip','data-tooltip-content':r,'data-tooltip-position':'below',href:'#'}));};q.propTypes={className:o.string,onHide:o.func,onShow:o.func,onToggleSidebar:o.func.isRequired,sidebarType:o.string.isRequired};q.defaultProps={className:'',onHide:c('emptyFunction'),onShow:c('emptyFunction')};f.exports=q;}),null);