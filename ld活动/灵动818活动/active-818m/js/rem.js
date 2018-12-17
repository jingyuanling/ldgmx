//(function(window){
//  var document = window.document,
//  docEl = document.documentElement,
//  psd = 750,
//  dpr = 1,
//  scale = 1/dpr,
//  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//  var metaEl = document.createElement('meta');
//  metaEl.name = 'viewport';
//  metaEl.content = 'initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale;
//  docEl.firstElementChild.appendChild(metaEl);
//  var recalc = function (){
//      var width = docEl.clientWidth;
//      if(width/dpr > psd){
//          width = psd * dpr;
//      }
//      docEl.dataset.width = width;
//      docEl.dataset.persent = 100 * (width / psd);
//      docEl.style.fontSize = 100 * (width / psd)+'px';
//  };
//  recalc();
//  if(!document.addEventListener) return;
//  window.addEventListener('resizeEvt' , recalc, false);
//})(window);
// 1rem=100px

(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

