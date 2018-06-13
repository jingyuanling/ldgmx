  alert(1)
  window.onload = function () {
        var aP = document.getElementsByTagName('p');
             for (var i = 0; i < 2; i++) {
                aP[i].index = i;
                aP[i].onclick = function () {
                    for (var i = 0; i < 2; i++) {
                        aP[i].className = '';
                    }
                  this.className = 'active';
                }
             }  
          }
