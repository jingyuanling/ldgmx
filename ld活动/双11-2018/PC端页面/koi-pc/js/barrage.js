//弹幕
setInterval(function(){
	var _lable = $("<div class='barrage-content'>" + "<img src='img/user-photo.png'/>" + '<p>' + '内容内容内容内容内容内容内' + "</p>" + "</div>");
    $(".mask").append(_lable.show());
    init_barrage();
},3000);
//初始化弹幕技术
function init_barrage() {
    var _top = 0;
    $(".mask .barrage-content").show().each(function () {
        var _left = $(window).width();//浏览器最大宽度，作为定位left的值
        var _height = $('.mask').height();//浏览器最大高度
        var _pheight = $('.mask .barrage-content').height();
        _top += _pheight*2;
        if (_top >= (_height-_pheight)) {
            _top = 0;
        }
        $(this).css({left: _left, top: _top});

       //定时弹出文字
        var time = 20000;
        if ($(this).index() % 2 == 0) {
            time = 15000;
        }

        $(this).animate({left: "-" + _left + "px"}, time, function () {
            $(this).remove();
        });
    });

}