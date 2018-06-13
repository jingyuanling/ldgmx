$(function(){
	//三级联动插件JS
    /**
     * 通过数组id获取地址列表数组
     *
     * @param {Number} id
     * @return {Array} 
     */ 
    function getAddrsArrayById(id) {
        var results = [];
        if (addr_arr[id] != undefined)
            addr_arr[id].forEach(function(subArr) {
                results.push({
                    key: subArr[0],
                    val: subArr[1]
                });
            });
        else {
            return;
        }
        return results;
    }
    /**
     * 通过开始的key获取开始时应该选中开始数组中哪个元素
     *
     * @param {Array} StartArr
     * @param {Number|String} key
     * @return {Number} 
     */         
    function getStartIndexByKeyFromStartArr(startArr, key) {
        var result = 0;
        if (startArr != undefined)
            startArr.forEach(function(obj, index) {
                if (obj.key == key) {
                    result = index;
                    return false;
                }
            });
        return result;
    }

    //bind the click event for 'input' element
    $("#myAddrs").click(function() {
        var PROVINCES = [],
            startCities = [],
            startDists = [];
        //Province data，shall never change.
        addr_arr[0].forEach(function(prov) {
            PROVINCES.push({
                key: prov[0],
                val: prov[1]
            });
        });
        //init other data.
        var $input = $(this),
            dataKey = $input.attr("data-key"),
            provKey = 1, //default province 北京
            cityKey = 36, //default city 北京
            distKey = 37, //default district 北京东城区
            distStartIndex = 0, //default 0
            cityStartIndex = 0, //default 0
            provStartIndex = 0; //default 0

        if (dataKey != "" && dataKey != undefined) {
            var sArr = dataKey.split("-");
            if (sArr.length == 3) {
                provKey = sArr[0];
                cityKey = sArr[1];
                distKey = sArr[2];

            } else if (sArr.length == 2) { //such as 台湾，香港 and the like.
                provKey = sArr[0];
                cityKey = sArr[1];
            }
            startCities = getAddrsArrayById(provKey);
            startDists = getAddrsArrayById(cityKey);
            provStartIndex = getStartIndexByKeyFromStartArr(PROVINCES, provKey);
            cityStartIndex = getStartIndexByKeyFromStartArr(startCities, cityKey);
            distStartIndex = getStartIndexByKeyFromStartArr(startDists, distKey);
        }
        var navArr = [{//3 scrollers, and the title and id will be as follows:
            title: "收货地址选择",
            id: "scs_items_prov"
        }, {
            title: "",
            id: "scs_items_city"
        }, {
            title: "",
            id: "scs_items_dist"
        }];
        SCS.init({
            navArr: navArr,
            onOk: function(selectedKey, selectedValue) {
                $input.val(selectedValue).attr("data-key", selectedKey);
            }
        });
        var distScroller = new SCS.scrollCascadeSelect({
            el: "#" + navArr[2].id,
            dataArr: startDists,
            startIndex: distStartIndex
        });
        var cityScroller = new SCS.scrollCascadeSelect({
            el: "#" + navArr[1].id,
            dataArr: startCities,
            startIndex: cityStartIndex,
            onChange: function(selectedItem, selectedIndex) {
                distScroller.render(getAddrsArrayById(selectedItem.key), 0); //re-render distScroller when cityScroller change
            }
        });
        var provScroller = new SCS.scrollCascadeSelect({
            el: "#" + navArr[0].id,
            dataArr: PROVINCES,
            startIndex: provStartIndex,
            onChange: function(selectedItem, selectedIndex) { //re-render both cityScroller and distScroller when provScroller change
                cityScroller.render(getAddrsArrayById(selectedItem.key), 0);
                distScroller.render(getAddrsArrayById(cityScroller.getSelectedItem().key), 0);
            }
        });
    });
	
	
	
	//提交订单页面js
	//选择地址弹框
	$('.show-address').click(function(){
		$('.add-address-gray').fadeIn();
	});
	$('.add-address-close').click(function(){
		$('.add-address-gray').fadeOut();
	});
	//选择优惠券弹框
	$('.special-offers').click(function(){
		$('.choose-coupons-gray').fadeIn();
	});
	//选择是否使用优惠券
	$('.choose-use').click(function(){
		$('.choose-use-sel').toggleClass('pay_sel_active');
	});
    //确定按钮
	$('.whether-use-coupon .sure').click(function(){
		$('.choose-coupons-gray').fadeOut();
	});
	//返回支付的叉号点击事件
	$('.pay-return-close').click(function(){
		$('.pay-return-gray').fadeOut();
	});
	//是否继续付款确认弹框
	$('.think-again').click(function(){
		$('.confirm-bounced-gray').fadeOut();
	});
	
	//收货地址页面js
	//删除按钮
	$('.address-delete-btn').click(function(){
		$('.confirm-bounced-gray').fadeIn();
	});
	$('.give-up,.think-again').click(function(){
		$('.confirm-bounced-gray').fadeOut();
	});
	//添加收货地址按钮
	$('.address-btm-btn').click(function(){
		$('.add-address-gray').fadeIn();
	})
	//选择支付方式
	$('.wine-submit-down li').click(function(){
		$('.wine-submit-down li').find('.pay-right-sel').removeClass('pay_sel_active');
		$(this).find('.pay-right-sel').addClass('pay_sel_active');
	});
	//
	$('.address-two-btn .left').click(function(){
		$('.address-two-btn .left').find('span').removeClass('pay_sel_active');
		$(this).find('span').addClass('pay_sel_active');
	});
});
