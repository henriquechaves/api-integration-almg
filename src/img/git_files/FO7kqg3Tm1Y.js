if (self.CavalryLogger) { CavalryLogger.start_js(["+G\/yU"]); }

__d("legacy:UIControllerRegistry",[],(function a(b,c,d,e,f,g){b.__UIControllerRegistry=b.__UIControllerRegistry||{};}),3);
__d('ArticleAuthorEngagementBlock',['csx','CSS','DOMQuery','Event','Parent','Style'],(function a(b,c,d,e,f,g,h){var i="._4lu7",j="._5zb4",k={registerClickHandler:function l(m,n,o){c('Event').listen(m,'click',function(p){if(p.target&&(c('Parent').bySelector(p.target,i)||c('Parent').bySelector(p.target,j)))return;if(n!==undefined&&c('CSS').shown(n)===false){if(o){var q=c('DOMQuery').scry(m,"._3c21"),r=c('DOMQuery').scry(m,"._6m3");if(q.length===0||r.length===0)return;var s=q[0],t=r[0];c('Style').set(s,'height','237px');c('Style').set(t,'height','179px');}c('CSS').show(n);}});}};f.exports=k;}),null);