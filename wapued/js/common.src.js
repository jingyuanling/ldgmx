var ARRAY_WEEK_CN =["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"];
var HTML5_DEFAULT_IMG_300x300 = '/images/html5/default_300x300.gif';
var HTML5_DEFAULT_IMG_220x220 = '/images/html5/default_220x220.gif';
window.m_prefix="m.360buy.com_";
window.m_cityId="cityId";
window.m_userCity="userCity";
window.m_categoryId="categoryId";
window.m_userCityDetail="userCityDetail";
window.m_longitudeLatitude="longitudeLatitude";
window.m_timeout = 1000*20;//超时时间暂定为20秒,考虑到gps环境
window.m_waitText = "&#21162;&#21147;&#21152;&#36733;&#20013;&#46;&#46;&#46;";//努力加载中...
//判断传入的字符串是否为传空
function isNotBlank(val) {
		if (val == undefined || val == null || val == "null" || val == 'undefined') {
				return false;
			}
		return true;
};
//判断是否是数字
function isDigital(val) {
	var reg =/^\d$/;
	return reg.test(val);
};
//判断输入位数限制
function textLimit(val,min,max) {
	if(!val) return false;
	var len = val.trim().length;
	if (len < min || len > max ) return false;
	return true;
};
//判断邮箱格式是否正确
function testEmail(val) {
	var reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z][a-z.]{2,8}$/;
	return reg.test(val)
};
//查看浏览器是否支持经纬度
function testGeolocation() {
	if (!!navigator.geolocation){
		testGeolocation = function(){
			return true;
		}
		return testGeolocation();
	}
	testGeolocation = function(){
		return false;
	}
	return testGeolocation();
};
//查看浏览器是否支持session以及local存储
function testStorage(){
	return testSessionStorage() || testLocalStorage();
}
//查看浏览器是否支持本地Session存储
function testSessionStorage() {
	if (!!window.sessionStorage){
		testSessionStorage = function () {
			return true;
		}
	} else {
		testSessionStorage = function() {
			return false;
		}
	}
	return testSessionStorage();
};
//查看浏览器是否支持本地Local存储
function testLocalStorage() {
	if (!!window.localStorage){
		testLocalStorage = function () {
			return true;
		}
	} else {
		testLocalStorage = function() {
			return false;
		}
	}
	return testLocalStorage();
};
//转换为json对象    qianxiaozhi
function json(v){
     return eval("("+v+")");
};
//判断是否是手机号码
function testPhone(val){
	var reg = /^1\d{10}$/;
	return reg.test(val);
};
//创建spinner对象
function createSpinner(){
	var optss = {
			lines:12,
			length:6,
			width:4,
			radius:10,
			color:'#333',
			speed:1,
			trail:60,
			shadow:false,
			hwaccel:false
		}
	return new Spinner(optss);
//	createSpinner = function(){return temp;}
//	return  createSpinner();
}

//本地购物车开始

/**
 * 添加购物车 传入商品ID 每次添加一个
 */
var addCart = function(id,sid){
	var sourceType=$("#resourceType").val();
	var sourceValue=$("#resourceValue").val();
	if(sourceType==null || sourceType=="" || typeof(sourceType)==undefined){
		sourceType="unknown";
	}
	if(sourceValue==null || sourceValue=="" || typeof(sourceValue)==undefined){
		sourceValue="unknown";
	}
	if(!testLocalStorage()){ //not support html5
        if(!!sid)
		   location.href='/cart/add.action?sid='+sid+'&wareId='+id+"&resourceType="+sourceType+"&resourceValue="+sourceValue;
        else
           location.href='/cart/add.action?wareId='+id+"&resourceType="+sourceType+"&resourceValue="+sourceValue;
		return;
	}
	
	var data=window.localStorage.getItem("cartItem");
	if(data!=null){
		var array=JSON.parse(data);
		if(array.length>=10){
			return;
		}
		for(var i=0;i<=array.length;i++){
			if(array[i]!=null&&array[i].id==id){ 
				array[i].num+=1;
				break;
			}else if(i==array.length){
				var obj=new Object();
				obj.id=id;
				obj.num=1;
				obj.resourceType=sourceType;
				obj.resourceValue=sourceValue;
				array[array.length]=obj;
				break;
			}
		}
	}else{
		array=new Array();
		var obj=new Object();
		obj.id=id;
		obj.num=1;
		obj.resourceType=sourceType;
		obj.resourceValue=sourceValue;
		array[0]=obj;
	}
	window.localStorage.setItem("cartItem",JSON.stringify(array));
	updateToolBar();
};

/**
 * 获取购物车内商品
 * @returns
 */
var getCart=function(){
	if(!testLocalStorage()){ //not support html5
		return;
	}
	return window.localStorage.getItem("cartItem");
};

/**
 * 清空购物车
 */
var clearCart=function(){
	if(!testLocalStorage()){ //not support html5
		return;
	}
	window.localStorage.removeItem("cartItem");
	updateToolBar();
};
/**
 * 删除购物车内物品
 * @param id
 * @param num
 * @param sid
 * @param jump
 */
var delCart=function(id,sid,num,jump){
	if(!testLocalStorage()){ //not support html5
        if(!!sid)
		   location.href='/cart/remove.action?sid='+sid+'&wareId='+id+'&num='+num;
        else
           location.href='/cart/remove.action?wareId='+id+'&num='+num;
		return;
	}
	
	var data=window.localStorage.getItem("cartItem");
	
	if(data!=null){
		var array=JSON.parse(data);
		for(var i=0;i<array.length;i++){
			if(array[i].id==id){
				array.splice(i,1);
				break;
			}
		}
		window.localStorage.setItem("cartItem",JSON.stringify(array));
	}
	
	if(jump){
		syncCart(sid, true);
	}
	updateToolBar();
};
/**
 * 更新购物车内商品数量
 * @param id
 * @param num
 */
var updateCart=function(id,num,sid){
	if(!testLocalStorage()){ //not support html5
        if(!!sid)
		   location.href='/cart/modify.action?sid='+sid+'&wareId='+id+'&num='+num;
        else
           location.href='/cart/modify.action?wareId='+id+'&num='+num;
		return;
	}
	var data=window.localStorage.getItem("cartItem");
	if(data!=null){
		var array=JSON.parse(data);
		for(var i=0;i<array.length;i++){
			if(array[i].id==id){
				array[i].num=Number(num);
				break;
			}
		}
		window.localStorage.setItem("cartItem",JSON.stringify(array));
	}
	updateToolBar();
};
/**
 * 更新购物车图标
 */
var updateToolBar=function(weblocation){
	if(!testLocalStorage()){ //not support html5
		return;
	}
	var wareCount=0;

	var data=window.localStorage.getItem("cartItem");
	if(data!=null){
		var array=JSON.parse(data);
		if(array!=null){
			for(var i=0;i<array.length;i++){
				wareCount+=Number(array[i].num);
			}
		}
	}
	if(wareCount!=0){
		$("#html5_cart_img").attr("src","/images/html5/cartm.png");
		$("#html5_cart_img").attr("height","22");
		$("#html5_cart_img").attr("width","26");
	}else{
		$("#html5_cart_img").attr("src","/images/html5/cart.png");
		$("#html5_cart_img").attr("height","21");
		$("#html5_cart_img").attr("width","22");
	}
/*	
	if(window.location.href.indexof('/cart/cart.action')>0){
		$("#cart_totalnum").text(cartdata.num);
	}
	/*
	if(weblocation!=null&&weblocation=='index'){
		if(wareCount!=0){
			$("#html5_cart").hide();
			$("#html5_cart_full").show();
		}else{
			$("#html5_cart").show();
			$("#html5_cart_full").hide();
		}
	}else{
		$("#html5_cart").show();
		$("#html5_cart_full").hide();
		$("#html5_cart_num").text(wareCount==0?"":"("+wareCount+")");
	}*/
};
/**
 * 与服务器同步购物车
 * @param sid
 * @param jump 是否跳转到购物车
 */
var syncCart=function(sid,jump){
	var sourceType=$("#resourceType").val();
	var sourceValue=$("#resourceValue").val();
	
	if(sourceType==null || sourceType=="" || typeof(sourceType)==undefined){
		sourceType="unknown";
	}
	if(sourceValue==null || sourceValue=="" || typeof(sourceValue)==undefined){
		sourceValue="unknown";
	}
	
	if(!testLocalStorage()){ //not support html5
        if(!!sid)
		   location.href='/cart/cart.action?sid='+sid+"&resourceType="+sourceType+"&resourceValue="+sourceValue;
        else
           location.href='/cart/cart.action'+"?resourceType="+sourceType+"&resourceValue="+sourceValue;
		return;
	}
	var paraJson=getCart();
	if(paraJson==null) paraJson='';
	jQuery.get('/cart/update.json?sid='+sid,
    	{updatejson:paraJson},
    		function(data){

    		if(sid==''){
    			sid=data.sid;
    		}

    		//TODO 购物车商品同步优化
    		cartdata=eval('('+data.cartDetail+')');
    		refreshLocalCart(cartdata,sid);
    		
    		if(jump || getCart()==null){ //如果需要跳转
                if(!!sid)
                   location.href='/cart/cart.action?sid='+sid;
                else
                   location.href='/cart/cart.action?';
    		}else{
    			var oriPrice=cartdata.price - cartdata.discount; 
    			var realPrice=oriPrice - cartdata.rePrice; 
    			$("#cart_oriPrice").text(oriPrice.toFixed(2));
    			$("#cart_rePrice").text(cartdata.rePrice.toFixed(2));
    			$("#cart_realPrice").text(realPrice.toFixed(2));
    			
    			$("#cart_totalnum").text(cartdata.num);
    			
    			if(cartdata.message!=null&&cartdata.message!=''){ //运费的提示
    				$("#pay_tip").text(cartdata.message);
    				$("#pay_tip_div").show();
    			}else{
    				$("#pay_tip_div").hide();
				}
    		}
   		});
};

var refreshLocalCart = function(cartdata,sid){
//	clearCart();
	if(typeof(cartdata)!='undefined'&&cartdata!=null){
		if(cartdata.skus!=null&&cartdata.skus.length>0){
			for(var i=0;i<cartdata.skus.length;i++){
//				addCart(cartdata.skus[i].Id, sid);
				updateCart(cartdata.skus[i].Id,cartdata.skus[i].Num,sid);
			}
		}
		if(cartdata.suits!=null&&cartdata.suits.length>0){
			for(var j=0;j<cartdata.suits.length;j++){
				if(cartdata.suits[j].Skus!=null&&cartdata.suits[j].Skus.length>0){
	    			for(var i=0;i<cartdata.suits[j].Skus.length;i++){
//	    				addCart(cartdata.suits[j].Skus[i].Id, sid);
	    				updateCart(cartdata.suits[j].Skus[i].Id,cartdata.suits[j].Skus[i].Num,sid);
	    			}
    			}
			}
		}
		if(cartdata.gifts!=null&&cartdata.gifts.length>0){
			for(var i=0;i<cartdata.gifts.length;i++){
//				addCart(cartdata.gifts[i].MainSku.Id, sid);
				updateCart(cartdata.gifts[i].MainSku.Id,cartdata.gifts[i].MainSku.Num,sid);
			}
		}
	}
}

//本地购物车结束

/**
 * 转换请求地址  同TuanUtil
 * @param baseUrl         跳转地址
 * @param sid             sid
 * @param arguments       参数列表 如： ['1','product']
 */
function urlEncode(baseUrl,sid,arguments){
      var url ='';
      var urls = baseUrl.split('.');
      url = url+urls[0];
      if(arguments && arguments.length){
           arguments.forEach(function(v){
               url =url+'-';
               if(v && v!=-1 && v!='-1')
                  url =url+v;
               else
                 url =url+'0';
           });
       }
       url = url+'.'+urls[1];
       if (!!sid) {
    	   if(/\?/.test(url))
    		   url =url+'&sid='+sid;
    	   else
    		   url =url+'?sid='+sid;
       }
      return url;
    }
/**
 * 提交按钮等待条隐藏
 * @param $submit
 * @param wait
 */
function hideWait($submit,wait){
	wait.stop();
	$submit.hide();
	$submit.next().show();
	$("header").show();
	$("footer").show();
}
/**
 * 提交按钮等待条显示
 * @param $submit
 * @param wait
 */
function showWait($submit,wait){
	$submit.show();
	$submit.next().hide();
	$("header").hide();
	$("footer").hide();
	wait.spin($submit[0]);
}
/**
 * container 外围容器 slider 滑动容器 count 图片个数
 */
function createPicMove(container, slider, count){
	var $get = function (id) {
		return "string" == typeof id ? document.getElementById(id) : id;
	};

	var Extend = function(destination, source) {
		for (var property in source) {
			destination[property] = source[property];
		}
		return destination;
	}

	var CurrentStyle = function(element){
		return element.currentStyle || document.defaultView.getComputedStyle(element, null);
	}

	var Bind = function(object, fun) {
		var args = Array.prototype.slice.call(arguments).slice(2);
		return function() {
			return fun.apply(object, args.concat(Array.prototype.slice.call(arguments)));
		}
	}
	var Tween = {
		Quart: {
			easeOut: function(t,b,c,d){
				return -c * ((t=t/d-1)*t*t*t - 1) + b;
			}
		},
		Back: {
			easeOut: function(t,b,c,d,s){
				if (s == undefined) s = 1.70158;
				return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
			}
		},
		Bounce: {
			easeOut: function(t,b,c,d){
				if ((t/=d) < (1/2.75)) {
					return c*(7.5625*t*t) + b;
				} else if (t < (2/2.75)) {
					return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
				} else if (t < (2.5/2.75)) {
					return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
				} else {
					return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
				}
			}
		}
	}
	// 容器对象,滑动对象,切换数量
	var SlideTrans = function(container, slider, count, options) {
		this._slider = $get(slider);
		this._container = $get(container);// 容器对象
		this._timer = null;// 定时器
		this._count = Math.abs(count);// 切换数量
		this._target = 0;// 目标值
		this._t = this._b = this._c = 0;// tween参数
		
		this.Index = 0;// 当前索引
		
		this.SetOptions(options);
		
		this.Auto = !!this.options.Auto;
		this.Duration = Math.abs(this.options.Duration);
		this.Time = Math.abs(this.options.Time);
		this.Pause = Math.abs(this.options.Pause);
		this.Tween = this.options.Tween;
		this.onStart = this.options.onStart;
		this.onFinish = this.options.onFinish;
		
		var bVertical = !!this.options.Vertical;
		this._css = bVertical ? "top" : "left";// 方向
		
		// 样式设置
		var p = CurrentStyle(this._container).position;
		p == "relative" || p == "absolute" || (this._container.style.position = "relative");
		this._container.style.overflow = "hidden";
		this._slider.style.position = "absolute";
		
		this.Change = this.options.Change ? this.options.Change :
			this._slider[bVertical ? "offsetHeight" : "offsetWidth"] / this._count;
	};
	SlideTrans.prototype = {
	  // 设置默认属性
	  SetOptions: function(options) {
		this.options = {// 默认值
			Vertical:	true,// 是否垂直方向（方向不能改）
			Auto:		true,// 是否自动
			Change:		0,// 改变量
			Duration:	50,// 滑动持续时间
			Time:		10,// 滑动延时
			Pause:		4000,// 停顿时间(Auto为true时有效)
			onStart:	function(){},// 开始转换时执行
			onFinish:	function(){},// 完成转换时执行
			Tween:		Tween.Quart.easeOut// tween算子
		};
		Extend(this.options, options || {});
	  },
	  // 开始切换
	  Run: function(index) {
		// 修正index
		index == undefined && (index = this.Index);
		index < 0 && (index = this._count - 1) || index >= this._count && (index = 0);
		// 设置参数
		this._target = -Math.abs(this.Change) * (this.Index = index);
		this._t = 0;
		this._b = parseInt(CurrentStyle(this._slider)[this.options.Vertical ? "top" : "left"]);
		this._c = this._target - this._b;
		
		this.onStart();
		this.Move();
	  },
	  // 移动
	  Move: function() {
		clearTimeout(this._timer);
		// 未到达目标继续移动否则进行下一次滑动
		if (this._c && this._t < this.Duration) {
			this.MoveTo(Math.round(this.Tween(this._t++, this._b, this._c, this.Duration)));
			this._timer = setTimeout(Bind(this, this.Move), this.Time);
		}else{
			this.MoveTo(this._target);
			this.Auto && (this._timer = setTimeout(Bind(this, this.Next), this.Pause));
		}
	  },
	  // 移动到
	  MoveTo: function(i) {
		this._slider.style[this._css] = i + "px";
	  },
	  // 下一个
	  Next: function() {
		this.Run(++this.Index);
	  },
	  // 上一个
	  Previous: function() {
		this.Run(--this.Index);
	  },

	  // 停止
	  Stop: function() {
		clearTimeout(this._timer); this.MoveTo(this._target);
	  }
	};
	return new SlideTrans(container, slider, count, { Vertical: false });	// 图片数量更改后需更改此数值
}
function bind(obj,fun){
	var args = Array.prototype.slice.call(arguments).slice(2);
	return function() {
		return fun.apply(obj, args.concat(Array.prototype.slice.call(arguments)));
	}
}

/**
 * 首页位置服务
 */
function userLocation(id,clickId){
	function getUserLocation(flag,event) {
		// 提示信息 获取位置信息失败<a href=''>更新</a>
		var errorMsg = "&#33719;&#21462;&#22833;&#36133;"
				+ "<a onclick='getUserLocation();' style='color:blue;font-size:0.8125em;padding-left:15px;' "
				+ "href=''>&#26356;&#26032;</a>";
		$("#"+id).html(m_waitText);//努力加载中...
		
		var m_timeout = window.setTimeout(function() {
				$("#"+id).html(errorMsg);
			}, window.m_timeout);
		if (testGeolocation()) {
			navigator.geolocation
					.getCurrentPosition(
							function(position) {
								var latitude = position.coords.latitude;
								var longitude = position.coords.longitude;
								jQuery.get(
												"/tuan/location.json",
												{
													latitude : latitude,
													longitude : longitude
												},bind(this,
												function(flag,data) {
													if (data.status) {
														window.clearTimeout(m_timeout);
														if (data.cityId) {
															var txt = data.location.city
																	+ data.location.subCity;
															var fullname = data.location.fullNames;
															if(testStorage()) {//判断是否支持本地存储
																setCityId(data.cityId)
																setLongitudeLatitude(latitude+ ','+ longitude);
																setUserCity(txt);
																setUserCityDetail(fullname);
															}
															
															fullname = fullname + "<span  style='color:blue;font-size:0.875em;padding-left:15px;' href=''>&#26356;&#26032;</span>"
															txt = txt+ "<span  style='color:blue;font-size:0.875em;padding-left:15px;' href=''>&#26356;&#26032;</span>";
															if(!!flag){
																$("#"+id).html(txt);
															} else {
																$("#"+id).html(fullname);
															}
														} else {
															$("#"+id).html(errorMsg);
														}
													}
												},flag), "json");
							}, function() {
								$("#"+id).html(errorMsg);
								window.clearTimeout(m_timeout);
							},{timeout:5000});
		}
		event.preventDefault();
	}
	if(!!clickId){
		$("#"+clickId).click(bind(this,getUserLocation,clickId));
	} else {
		$("#"+id).click(bind(this,getUserLocation,clickId));
	}
}
/**
*注册离开页面时回调函数
*/
function registerUnloadEvent($submit,spinner){
	document.body.onunload=function(){
		hideWait($submit,spinner);
	};
}

//搜索框自动完成提示功能
function writeTipVal(wname){
    if(wname != ""){
       $("#keyword").val(wname);
       $("#shelper").html("");
       $("#searchForm").submit();
    }
}
function closeTip(){
    $("#shelper").html("");
    $("#shelper").hide();
}
var old_keyword = "";
var old_keyword2 = "";
function searchTipContent(){
    var keyword = $("#keyword").val().trim();
    if(keyword == ""){
        old_keyword = "";
        $("#shelper").html("");
        $("#shelper").hide();
    }else{
        if(keyword == old_keyword || keyword == old_keyword2){
        }else{
            $("#shelper").show();
            $("#keyword").removeAttr("style");
            keyword = $("#keyword").val().trim();
            old_keyword = keyword;
//            jQuery.get("/ware/searchTip.action?sid="+$("input[name='sid']").val(), {keyword:keyword}, function(data){
            jQuery.get("/ware/searchTip.action?", {keyword:keyword}, function(data){
                if(data!=null){
                    $("#shelper").html(data);
                }else{
                    $("#shelper").html("");
                }
            });
        }
    }
    setTimeout("searchTipContent()",500);
}
$(function() {
    $(".search input").attr("autocomplete","off"); // 消除表单中的输入框的缓存
    if(jQuery('#keyword').length > 0){ //判断对象是否存在
        old_keyword = $("#keyword").val().trim();
        searchTipContent();

        old_keyword2 = old_keyword;
        $("#keyword").focus(function(){
          if(old_keyword2 == $("#keyword").val().trim()){
             $("#keyword").val('');
          }
        });
        $("#keyword").blur(function(){
          if($("#keyword").val().trim() == ""){
             $("#keyword").val(old_keyword2);
             $("#keyword").attr("style", "color:#999999;");
          }
        });
    }
  //京东键相关绑定开始================
    if($('#btnJdkey')){
        $('#btnJdkey').click(function(){
        	if($('#jdkey').css('display')=='none'){
        		$('#jdkey').show();
        	}else{
        		$('#jdkey').hide();
        	}
        });
    }
    //选中效果
    var __tmpLocation=window.location.href.replace(/(^http:\/\/)|(\/*$)/g,'');//获得当前页面的路径，根据路径规则进行逐页替换
    //选中首页
    if(__tmpLocation.indexOf('/')<0 || (__tmpLocation.split('/').length<=2 && __tmpLocation.indexOf('/index')>=0)){
    	$('#jdkey .new-tbl-cell').eq(0).children().addClass('on');
    }
    if(__tmpLocation.indexOf('/category/all.html')>-1){
    	$('#jdkey .new-tbl-cell').eq(1).children().addClass('on');
    }
    if(__tmpLocation.indexOf('/cart/cart.action')>-1){
    	$('#jdkey .new-tbl-cell').eq(2).children().addClass('on');
    }
    if((__tmpLocation.indexOf('/user/')>-1) 
    		|| (__tmpLocation.indexOf('/myJd/')>-1)
    		|| (__tmpLocation.indexOf('/wallet/')>-1)
    		|| (__tmpLocation.indexOf('jrapp.jd.com/')>-1)){
    	
    	$('#jdkey .new-tbl-cell').eq(3).children().addClass('on');
    	
    }
    //京东键相关绑定结束-----------------
});
/**
 * 从本地缓存中获取当前用户所在城市ID
 *  2012-03-20
 * @returns
 */
function getCityId(){
	var result;
	if(testLocalStorage()) {
		result =  window.localStorage.getItem(m_prefix+m_cityId);
	} else if (testSessionStorage()) {
		result =  window.sessionStorage.getItem(m_prefix+m_cityId);
	}
	return result || 0;
}
/**
 * 从本地缓存中获取当前用户所在城市名称
 *  2012-03-20
 * @returns
 */
function getUserCity(){
	var result;
	if(testLocalStorage()) {
		result =  window.localStorage.getItem(m_prefix+m_userCity);
	} else if (testSessionStorage()) {
		result =  window.sessionStorage.getItem(m_prefix+m_userCity);
	}
	return result || null;
}
/**
 * 获取本地缓存中当前用户所在城市信息
 *  2012-03-20
 * @returns
 */
function getUserCityDetail(){
	var result ;
	if(testLocalStorage()) {
		result = window.localStorage.getItem(m_prefix+m_userCityDetail);
	} else if (testSessionStorage()) {
		result = window.sessionStorage.getItem(m_prefix+m_userCityDetail);
	}
	return result || null;
}
/**
 * 从本地缓存中获取当前用户所选类别
 *  2012-03-20
 * @returns
 */
function getCategoryId(){
	var result;
	if(testLocalStorage()) {
		result =  window.localStorage.getItem(m_prefix+m_categoryId);
	} else if (testSessionStorage){
		result =  window.sessionStorage.getItem(m_prefix+m_categoryId);
	}
	return result || 0;
}
/**
 * 获取本地缓存中经纬度
 *  2012-03-20
 * @returns
 */
function getLongitudeLatitude(){
	var result;
	if(testSessionStorage()) {
		result = window.sessionStorage.getItem(m_prefix+m_longitudeLatitude);
	} 
	return result || null;
}
/**
 * 设置本地缓存中当前用户所在城市ID
 *  2012-03-20
 * @returns
 */
function setCityId(val){
	if (!!val){ 
		if(testLocalStorage()) {
			window.localStorage.setItem(m_prefix+m_cityId,val);
		} else if (testSessionStorage()) {
			window.sessionStorage.setItem(m_prefix+m_cityId,val);
		}
	}
}
/**
 * 设置本地缓存中当前用户所在城市名称
 *  2012-03-20
 * @returns
 */
function setUserCity(val){
	if (!!val){
		if(testLocalStorage()) {
			window.localStorage.setItem(m_prefix+m_userCity,val);
		} else if (testSessionStorage()) {
			window.sessionStorage.setItem(m_prefix+m_userCity,val);
		}
	}
}
/**
 * 设置本地缓存中当前用户所在城市信息
 *  2012-03-20
 * @returns
 */
function setUserCityDetail(val){
	if (!!val){
		if(testLocalStorage()) {
			window.localStorage.setItem(m_prefix+m_userCityDetail,val);
		} else if (testSessionStorage()) {
			window.sessionStorage.setItem(m_prefix+m_userCityDetail,val);
		}
	}
}
/**
 * 设置本地缓存中当前用户所选类别
 *  2012-03-20
 * @returns
 */
function setCategoryId(val){
	if (!!val){ 
		if(testLocalStorage()) {
			window.localStorage.setItem(m_prefix+m_categoryId,val);
		} else if (testSessionStorage()) {
			window.sessionStorage.setItem(m_prefix+m_categoryId,val);
		}
	}
}
/**
 * 设置本地缓存中经纬度
 *  2012-03-20
 * @returns
 */
function setLongitudeLatitude(val){
	if (!!val){ 
		if(testSessionStorage()) {
			window.sessionStorage.setItem(m_prefix+m_longitudeLatitude,val);
		} 
	}
}
/**
 * 跳转到团购列表页面
 * 2012-03-20
 * @param id
 * @param sid
 */
function goTuanIndex(sid){
	var cid,cgid;
	try {
		cid = getCityId();
		cgid = getCategoryId();
	} catch (e){
	}
	!!cid || (cid = 0);
	!!cgid || (cgid = 0);
	var param = [
	             cid,cgid,0,0,1
	             ];
//	var url = urlEncode('/tuan/userLocation.action',sid,param);
	var url = urlEncode('/tuan/index.html',sid,param);
	/*var url;
	if (!!sid) {
		url = '/tuan/userLocation.action?sid='+sid;
	}*/
	return url || '#';
}
/**
 * 价格转换
 * 2012-03-21
 * 形如：192  ----》  192.0
 */
function priceTransform(price){
	try {
		return parseFloat(price).toFixed(1);
	} catch(e) {
		return price;
	}
	return price;
}
/**
 * 计算折扣金额
 * 2012-03-21
 * @param market
 * @param real
 */
function getDiscount(market,real){
	var save = (market - real).toString();
	var index = save.indexOf(".");
	if(index > 0) {//如果得到金额位数过长，则截取小数点后两位
  	  save = save.substring(0,save.indexOf(".")+2);
    }
	return save;
}


//解决android 滑动丢失页面动态加载的组件
document.ontouchend=function(){
        $('#hideInput').remove();
        $('#con_more').append('<label style="height:0px;font-size:0pt;" id="hideInput">&nbsp;</label>');
}


/**
 * 计算字符长度 支持中文（长度x2）
 * @param str  需要计算的字符串
 */
function strlen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        }
        else {
            len += 2;
        }
    }
    return len;
}
/***************************************** ajax分页组件  *************************************************************/
function changePage(url,page){
	var paging = document.paging;
	!!paging.startSpinner && paging.startSpinner();
	jQuery.get(url,{page:page},function(data){
		//更改页码
		paging.set('page',page);
		paging.show();
		//调用回调函数
		paging.callbackFun(data);
	},"json");
}

/**
 * 通用js分页组件
 *
 *   
 */
function Paging(argument) {
	document.paging = this;
	this.component = jQuery('#'+argument.fillId);//填充的DIV
	this.startSpinner = argument.startSpinner;//打开等待条
	this.stopSpinner = argument.stopSpinner;//关闭等待条
	this.num = parseInt(argument.num,10) || 5;//页码数
	this.count = parseInt(argument.count,10);//总条数
	this.page = parseInt(argument.page,10);//当前页
	this.totalPage = parseInt(argument.totalPage,10);//总页数
	this.message = argument.message || '&#26242;&#26080;&#25968;&#25454;';//当无数据时 页面提示信息   默认 暂无数据
	this.url = argument.url || '';//请求Url  不包含page参数
	this.callbackFun = argument.callback1;//回调函数 r
	this.isShowBotton = argument.isShowBotton;//是否显示按钮
	this.isShowNum = argument.isShowNum;//是否显示页码
	
	if (this.isShowBotton == undefined) 
		this.isShowBotton = true;
	if (this.isShowNum == undefined) 
		this.isShowNum = true;
	
	this.set = function(name,value){
		this[name] = value;
	}
	this.show = function(){
		this.component.empty();//清空
		if (!!this.count && this.count>0) {
			if (!!this.isShowBotton && this.totalPage > 1) {
				if (this.page<=this.totalPage && this.page>1) {//如果能向上翻页
					this.component.append('<a class="pre" onclick=changePage("'+this.url+'",'+((this.page-1))+');><span></span>&#19978;&#19968;&#39029;</a>');//上一页
				} else {
					this.component.append('<a class="dis-buttom"  "style=color:gray;">&#19978;&#19968;&#39029;</a>');
				}
				this.component.append('&nbsp;&nbsp;'+this.page+'/'+this.totalPage+'&nbsp;&nbsp;&nbsp;');
				if(this.page<this.totalPage) {//如果能向下翻页
					this.component.append('<a class="next" onclick=changePage("'+this.url+'",'+(this.page+1)+')>&#19979;&#19968;&#39029;<span></span></a>');//下一页
				} else {
					this.component.append('<a class="dis-buttom" "style=color:gray;">&#19979;&#19968;&#39029;</a>');
				}
				this.component.append(' <br /><br />');
//				this.component.append(' <div style="margin-top:10px;"></div>');
			}
			if (!!this.isShowNum && this.totalPage > 2) {//当也是大于2页时显示数字
				if (this.totalPage < this.num) {
					for (var i = 1; i <= this.totalPage; i++) {
						if (this.page == i) {
							this.component.append('<a  style="color:gray;">&nbsp;&nbsp;&nbsp;'+i+'&nbsp;&nbsp;&nbsp;</a>');
						} else {
							this.component.append('<a onclick=changePage("'+this.url+'",'+i+'); style="color:black;">&nbsp;&nbsp;&nbsp;'+i+'&nbsp;&nbsp;&nbsp;</a>');
						}
					}
				} else {
					var midd = Math.floor(this.num/2);
					var discount = this.totalPage - this.page;
					var previous = 0;
					var next = 0;
					
					if (this.page <= midd) {
						previous = this.page - 1;
						next = this.num - this.page;
					} else {
						if (discount >= midd) {
							if (this.num & 0x1) {
								previous = midd;
							} else {
								previous = midd - 1;
							}
							next = midd;
						}  else {
							previous = this.num - discount - 1;
							next = discount;
						}
					}
					
					for (var i = previous; i >= 1; i--) {
						this.component.append('<a onclick=changePage("'+this.url+'",'+(this.page - i)+'); style="color:black;">&nbsp;&nbsp;&nbsp;'+(this.page - i)+'&nbsp;&nbsp;&nbsp;</a>');
					}
					this.component.append('<a style="color:gray;">&nbsp;&nbsp;&nbsp;'+this.page+'&nbsp;&nbsp;&nbsp;</a>');
					for (var i = 1; i <= next; i++) {
						this.component.append('<a onclick=changePage("'+this.url+'",'+(this.page + i)+'); style="color:black;">&nbsp;&nbsp;&nbsp;'+(this.page + i)+'&nbsp;&nbsp;&nbsp;</a>');
					}
				}
			}
		} else {
			this.component.append('<div class="item radius" style="margin-top:20px;">'+this.message+'</div>');//暂无评论
		}
		this.component.append(' <br /><br />');
	};


}
 /**
     * 封装historyback
     */
    function pageBack(){
        var currentLocation = window.location.href;

        if(/#top/.test(currentLocation)){
             window.history.go(-2);
             window.location.load(window.location.href);
        }else{
             window.history.back();
             window.location.load(window.location.href);
        }
//        while(currentLocation != window.location.href ){
//             window.location.reload();
//        }
    }
    
    function backPassLoginPage(){
    	if(window.name=="login"){
	    	window.name="";
	    	window.history.go(-2);
    	}else{
    		window.history.back()
    	}
    }


/* 得到日期年月日等加数字后的日期
*
* 返回已添加指定时间间隔的日期对象。
dateObj.dateAdd(interval, number)
参数

dateObj
    必选项。任意 Date 对象。
interval
 y	年
q	季度
m	月
d	日
w	周
h	小时
n	分钟
s	秒
ms	毫秒
    必选项。
number

必选项。数值表达式，表示要添加的时间间隔的个数。数值表达式可以是正数（得到未来的日期）或负数（得到过去的日期）。
* */
Date.prototype.dateAdd = function(interval,number)
{
    var d = this;
    var k={'y':'FullYear', 'q':'Month', 'm':'Month', 'w':'Date', 'd':'Date', 'h':'Hours', 'n':'Minutes', 's':'Seconds', 'ms':'MilliSeconds'};
    var n={'q':3, 'w':7};
    eval('d.set'+k[interval]+'(d.get'+k[interval]+'()+'+((n[interval]||1)*number)+')');
    return d;
}
/* 计算两日期相差的日期年月日等
 返回两个日期对象之间的时间间隔。
dateObj.dateDiff(interval, dateObj2)
参数

interval
 y	年
q	季度
m	月
d	日
w	周
h	小时
n	分钟
s	秒
ms	毫秒
    必选项。
dateObj, dateObj2
    必选项。日期对象。用于计算的两个日期对象。
  * */
Date.prototype.dateDiff = function(interval,objDate2)
{
    var d=this, i={}, t=d.getTime(), t2=objDate2.getTime();
    i['y']=objDate2.getFullYear()-d.getFullYear();
    i['q']=i['y']*4+Math.floor(objDate2.getMonth()/4)-Math.floor(d.getMonth()/4);
    i['m']=i['y']*12+objDate2.getMonth()-d.getMonth();
    i['ms']=objDate2.getTime()-d.getTime();
    i['w']=Math.floor((t2+345600000)/(604800000))-Math.floor((t+345600000)/(604800000));
    i['d']=Math.floor(t2/86400000)-Math.floor(t/86400000);
    i['h']=Math.floor(t2/3600000)-Math.floor(t/3600000);
    i['n']=Math.floor(t2/60000)-Math.floor(t/60000);
    i['s']=Math.floor(t2/1000)-Math.floor(t/1000);
    return i[interval];
}
/**
 * 字符转换为日期  格式为 yyyy-mm-dd
 * @param dateVal
 */
var getDate= function(dateVal){
     var arrDate = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateVal);
     var year =   parseInt(arrDate[1],10);
     var month =   parseInt(arrDate[2],10)-1;
     var date =   parseInt(arrDate[3],10);
     var target = new Date();
     target.setFullYear(year);
     target.setMonth(month);
     target.setDate(date);
     return target;
}// JavaScript Document