// $(document).ready(function(){
  //*登陆注册**************************************************
  //本地数据缓存
  // console.log(111)
  // console.log(localStorage.getItem('keyName'),localStorage.getItem('keyPass'))
  // var strName = localStorage.getItem('keyName');
  // var strPass = localStorage.getItem('keyPass');
  // console.log(localStorage.getItem)
  // if(strName){
  //   $('#user').val(strName);
  // }
  // if(strPass){
  //   $('#pass').val(strPass);
  // }




  // 头部登陆注册按钮
  // var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  // var passreg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
  // $('[data-login="login"]').click(function () {
  //   $('[data-key="login"]').show();

  //   //埋点  进入密码登陆页面
  //   $.module.track({
  //       title : '进入密码登陆页面'
  //   });

    //自动登陆
    // if(strName&&strPass){
    //   setTimeout(function(){
    //     $.post("/login",{
    //       mobile:$('.login-password').find('.phoneipt').val(),
    //       password:$('.login-password').find('.passwordipt').val(),
    //       checked:$('.login-password').find('.checkbox').prop('checked'),
    //     },function(res){
    //       // console.log(res)
    //       if(res.code==200){
    //         var strName = $('#user').val();
    //         var strPass = $('#pass').val();
    //         localStorage.setItem('keyName',strName);
    //         if($('#remember').is(':checked')){
    //           localStorage.setItem('keyPass',strPass);
    //         }else{
    //           localStorage.removeItem('keyPass');
    //         }
    //
    //         window.location.reload()
    //
    //       }else if(res.code==401){
    //         alert("此用户不存在")
    //       }
    //     });
    //   },2000)
    // }
//   })
//   $('[data-login="register"]').click(function () {
//     $('[data-key="register"]').show();
//   })
//   //点击注册页立即登陆
//   $(".register-boxs .loginbtn").click(function () {
//     $('[data-key="register"]').hide();
//     $('[data-key="login"]').show();
//   })
//   //登陆注册眼睛按钮
//   $(".iptbox-eyebtn").each(function(){
//     $(this).click(function(){
//       if($(this).attr("src")=="/web/images/icon-eye-open.png"){
//         $(this).attr("src","/web/images/icon-eye-close.png")
//         $(this).prev().attr('type','text')
//       }else{
//         $(this).attr("src","/web/images/icon-eye-open.png")
//         $(this).prev().attr('type','password')
//       }
//     })
//   })
//   //  关闭登陆注册模态框
//   $('.login-boxs .closebtn').click(function(){
//     $(this).parents('.login-boxs').css('display','none');
//     var currentR = window.location.pathname.slice(1).split('/')[0];
//     if(currentR === 'find' || currentR === 'wuyouweituo'){
//       $('[name="tel"]').val('');
//     }
//   })
//   //选择登陆方式
//   $('.login-type .btn').click(function(){
//     $(".login-type .btn").removeClass('selected');
//     $(this).addClass('selected');
//     if($(this).data('name')=="password"){
//       $(".login-code").hide();
//       $(".login-password").show();
//     }else{
//       $(".login-code").show();
//       $(".login-password").hide();
//       //埋点
//       $.module.track({
//           title:'进入快捷登陆页面'
//       });
//     }
//   })
//   //  登陆验证
//   //1.手机号
//   $('.phoneipt').blur(function(){
//     if($(this).val()){
//       if (!myreg.test($(this).val())){
//         $(this).parent().siblings('.warnbox').show();
//       } else {
//         $(this).parent().siblings('.warnbox').hide();
//       }
//     }
//   })
//   //控制验证码
//   $('.phoneipt').bind("input propertychange change",function(){
//     if($(this).val()){
//       if($(this).parent().siblings('.getcode-btn')){
//         if (!myreg.test($(this).val())){
//           $(this).parent().siblings('.getcode-btn').addClass('disabled');
//         } else {
//           if(yznum==60){
//             $(this).parent().siblings('.getcode-btn').removeClass('disabled')
//           }
//         }
//       }
//     }
//   })
//   //个人中心页面控制验证码
//   $('.codephone').bind("input propertychange change",function(){
//     if($(this).val()){
//       if($(this).siblings('.getcode-btn')){
//         if (!myreg.test($(this).val())){
//           $(this).siblings('.getcode-btn').addClass('disabled');
//         } else {
//           if(yznum==60) {
//             $(this).siblings('.getcode-btn').removeClass('disabled');
//           }
//         }
//       }
//     }
//   })
//   $('.phoneipt').focus(function(){
//     $(this).parent().siblings('.warnbox').hide();
//   })
//   $('.passwordipt').focus(function(){
//     $(this).parent().siblings('.warnbox').hide();
//   })
//   $('.codeipt').focus(function(){
//     $(this).parent().siblings('.warnbox').hide();
//   })
// //  获取验证码
//   var yznum=60;
//   $(".getcode-btn").click(function(){
//     if(!$(this).hasClass('disabled')){
//       $(this).addClass('disabled');
      
//       $(this).text(yznum+'s后重新获取');
//       var that=this;
//       // 倒计时
//       var timer = setInterval(function () {
//         yznum--;
//         $(that).text(yznum+'s后重新获取')
//         if (yznum == 0) {
//           clearInterval(timer)
//           $(that).text('获取验证码')
//           $(that).removeClass('disabled')
//           yznum=60;
//         }
//       }, 1000)
//       var phoneipt1 = $(".phoneipt").eq(1).val();   //验证码登录
//       var phoneipt2 = $(".phoneipt").eq(2).val();   //注册
//       var phoneipt3 = $(".phoneipt").eq(3).val();   //找回密码
//       var phoneipt4 = $(".codephone").val();   //找回密码
//       if($(that).data('name')=="1"){
//         //验证码登录
//         $.ajax({
//           url:"/api/sign-up-code",
//           type:'post',
//           data:{
//             mobile:phoneipt1,
//             flag:2
//           },
//           success: function(res){
//             if(res.code!=200){
//               alert(res.message);
//               clearInterval(timer);
//               $(that).removeClass('disabled');
//               $(that).text('获取验证码')
//             }else if(res.code==200){
//               //埋点
//               $.module.track({
//                   title:'成功发送验证码',
//                   mobile: phoneipt1
//               });
//             }
//           },
//           error: function(res){
//             alert(res.responseJSON.message);
//             clearInterval(timer);
//             $(that).removeClass('disabled');
//             $(that).text('获取验证码')
//           },
//         });
//         //埋点
//         $.module.track({
//           title:'点击“获取验证码”',
//           mobile: phoneipt1
//         });
//       }
//       if($(that).data('name')=="2"){
//         //注册
//         $.ajax({
//           url:"/api/sign-up-code",
//           type:'post',
//           data:{
//             mobile:phoneipt2,
//             flag:1
//           },
//           success: function(res){
//             if(res.code==400){
//               alert("该账号已经注册过");
//               clearInterval(timer);
//               $(that).removeClass('disabled');
//               $(that).text('获取验证码')
//             }
//           },
//           error: function(res){
//             alert(res.responseJSON.message);
//             clearInterval(timer);
//             $(that).removeClass('disabled');
//             $(that).text('获取验证码')
//           },
//         });
//       }
//       if($(that).data('name')=="3"){
//         //找回密码
//         $.ajax({
//           url:"/api/sign-up-code",
//           type:'post',
//           data:{
//             mobile:phoneipt3,
//             flag:2
//           },
//           success: function(res){
//             if(res.code!=200){
//               alert(res.message);
//               clearInterval(timer);
//               $(that).removeClass('disabled');
//               $(that).text('获取验证码')
//             }
//           },
//           error: function(res){
//             alert(res.responseJSON.message);

//             clearInterval(timer);
//             $(that).removeClass('disabled');
//             $(that).text('获取验证码')
//           },
//         });
//       }
//       if($(that).data('name')=="4"){
//         //更换绑定手机号
//         $.ajax({
//           url:"/api/sign-up-code",
//           type:'post',
//           data:{
//             mobile:phoneipt4,
//             flag:1
//           },
//           success: function(res){
//             if(res.code==400){
//               alert(res.message);
//               clearInterval(timer);
//               $(that).removeClass('disabled');
//               $(that).text('获取验证码')
//             }
//           },
//           error: function(res){
//             alert(res.responseJSON.message);
//             clearInterval(timer);
//             $(that).removeClass('disabled');
//             $(that).text('获取验证码')
//           },
//         });
//       }
//     }
//   })
// //  点击登陆页立即注册
//   $('.registerbtn').click(function(){
//     $('.login-boxs').hide();
//     $(".register-boxs").show();
//   })
// // 重复密码验证
//   $('.repeat-passwordipt').blur(function(){
//     var pass=$(".new-passwordipt").val()
//     if($(this).val()!=pass){
//       $(this).parent().siblings('.warnbox').show();
//     }else{
//       $(this).parent().siblings('.warnbox').hide();
//     }
//   })
// //  点击登陆页忘记密码
//   $('.forget-password-btn').on('click',function(){
//     $('.login-boxs').hide();
//     $(".password-boxs").show();
//   })

// //  密码登陆
//   $('.enter-password').keyup(function(event){
//     if(event.keyCode ==13){
//       $('#login-button-pass').click();
//     }
//   });
//   $("#login-button-pass").click(function(){
//     var accountval=$('.login-password').find('.phoneipt').val();
//     var passval=$('.login-password').find('.passwordipt').val();
//     var account,pass;
//     if(!accountval||!passval){
//       alert('账号密码不能为空')
//       return;
//     }else if(accountval||passval){
//       if (!myreg.test($('.login-password').find('.phoneipt').val())){
//         $('.login-password').find('.phoneipt').parent().siblings('.warnbox').show();
//         account=false;
//       } else {
//         $('.login-password').find('.phoneipt').parent().siblings('.warnbox').hide();
//         account=true;
//       }
//       if(account==true){
//         $.post("/login",{
//           mobile:$('.login-password').find('.phoneipt').val(),
//           password:$('.login-password').find('.passwordipt').val(),
//           checked:$('.login-password').find('.checkbox').prop('checked'),
//           remeber_token:$('#remember').is(':checked'),
//         },function(res){
//           if(res.code==200){
//             // var strName = $('#user').val();
//             // var strPass = $('#pass').val();
//             // localStorage.setItem('keyName',strName);
//             // if($('#remember').is(':checked')){
//             //   localStorage.setItem('keyPass',strPass);
//             // }else{
//             //   localStorage.removeItem('keyPass','');
//             // }
//             // alert('登陆成功')
//             // console.log(localStorage.getItem('keyName'))
//             // console.log(localStorage.getItem('keyPass'))

//             //埋点
//             var user = res.user;
//             $.module.identify({
//               title:'密码登录成功',
//               '名称':  user?user.name:null,
//               user_id: user? user.id : null,
//               mobile: $('.login-password').find('.phoneipt').val(),
//             });

//             var currentType = window.location.pathname.slice(1).split('/')[0];
//             if(currentType === 'find' || currentType === 'wuyouweituo'){
//               $('[data-key="login"]').hide();
//               reSetMobile(res);
//               login_in()
//               return;
//             }else{
//               window.location.reload()
//             }

//           }else if((res.code==400)){
//             $('.login-password').find('.passwordipt').parent().siblings('.warnbox').show();
//             //埋点
//             $.module.track({
//                 title : '密码登录失败',
//                 mobile: $('.login-password').find('.phoneipt').val(),
//             });
//           }else if(res.code==401){
//             alert("此用户不存在")
//           }
//         });

//       }else{
//         // alert('账号或密码错误')
//       }
//     }

//   })

//   //登录后用户信息
//   function login_in() {
//     $.get('/login-in',function (res) {
//       $('.login-box').html(res)
//     })
//   }
// //  登录成功之后在这里给委托里的手机号赋值
//   function reSetMobile (data) {
//     $('[name="tel"]').val(data.user.mobile);
//     var mobile = data.user.mobile;
//     var a = mobile.split('');
//     a.splice(3, 4, '****');
//     var inputMobile = a.join('');

//     $('[data-show="phpShowData"]').hide();
//     $('[data-show="isLogin"]').show();

//     $('[data-name="user-mobile"]').html(inputMobile);
//     $('input[data-name="input-mobile"]').val(mobile);
//   }
// //  验证码登陆
//   $("#login-button-code").click(function(){
//     var accountval=$('.login-code').find('.phoneipt').val();
//     var codeval=$('.login-code').find('.codeipt').val();
//     var account,code;
//     if(!accountval){
//       alert('请输入手机号！')
//       return;
//     }else if(!codeval){
//       alert('请输入验证码！')
//       return;
//     }else if(accountval||codeval){
//       if (!myreg.test($('.login-code').find('.phoneipt').val())){
//         $('.login-code').find('.phoneipt').parent().siblings('.warnbox').show();
//         account=false;
//       } else {
//         $('.login-code').find('.phoneipt').parent().siblings('.warnbox').hide();
//         account=true;
//       }
//       if(!$('.login-code').find('.checkbox').is(':checked')){
//         alert('请选择房信用户协议')
//       }else if(account==true){
//         $.ajax({
//           url:"/yzmlogin",
//           type:'post',
//           data:{
//             mobile:$('.login-code').find('.phoneipt').val(),
//             code:$('.login-code').find('.codeipt').val(),
//           },
//           success: function(res){
//             if(res.code==200){
//               // alert('登陆成功')
//               var currentType = window.location.pathname.slice(1).split('/')[0];
//               if(currentType === 'find' || currentType === 'wuyouweituo'){
//                 $('[data-key="login"]').hide();
//                 reSetMobile(res);
//                 login_in()
//                 return;
//               }else{
//                 window.location.reload()
//               }
//               //埋点
//               $.module.track({
//                   title:'密码登陆成功',
//                   mobile: $('.login-code').find('.phoneipt').val(),
//               });
//             }else {
//               alert(res.message)
//               //埋点
//               $.module.track({
//                   title:'密码登录失败',
//                   mobile: $('.login-code').find('.phoneipt').val(),
//               });
//             }
//           },
//           error: function(res){
//             alert(res.responseJSON.message);
//             //埋点
//             $.module.track({
//                 title:'密码登录失败',
//                 mobile: $('.login-code').find('.phoneipt').val(),
//             });
//           },
//           complete:function(res){
//           },
//         });

//       }else{
//         // alert('验证码错误')
//       }

//     }
//   })

// //  点击注册
//   $("#register-button").click(function(){
//     var accountval=$('.register-boxs').find('.phoneipt').val();
//     var codeval=$('.register-boxs').find('.codeipt').val();
//     var passval=$('.register-boxs').find('.passwordipt').val()
//     var account,code,pass;
//     if(!accountval){
//       alert('请输入手机号！')
//       return;
//     }else if(!codeval){
//       alert('请输入验证码！')
//       return;
//     }else if(!passval){
//       alert('请输入密码！')
//       return;
//     }else if(accountval||codeval||passval){
//       if (!myreg.test($('.register-boxs').find('.phoneipt').val())){
//         $('.register-boxs').find('.phoneipt').parent().siblings('.warnbox').show();
//         account=false;
//       } else {
//         $('.register-boxs').find('.phoneipt').parent().siblings('.warnbox').hide();
//         account=true;
//       }
//       if (!passreg.test($('.register-boxs').find('.passwordipt').val())){
//         $('.register-boxs').find('.passwordipt').parent().siblings('.warnbox').show();
//         pass=false;
//       } else {
//         $('.register-boxs').find('.passwordipt').parent().siblings('.warnbox').hide();
//         pass=true;
//       }

//       if(!$('.register-boxs').find('.checkbox').is(':checked')){
//         alert('请选择房信用户协议')
//       }else if(account==true&&pass==true){
//         $.ajax({
//           url:"/api/sign-up",
//           type:'post',
//           data:{
//             mobile:$('.register-boxs').find('.phoneipt').val(),
//             code:$('.register-boxs').find('.codeipt').val(),
//             password:$('.register-boxs').find('.passwordipt').val()
//           },
//           success: function(res){
//             if(res.code==200){
//               alert('注册成功')
//               var currentType = window.location.pathname.slice(1).split('/')[0];
//               if(currentType === 'find' || currentType === 'wuyouweituo'){
//                 $('[data-key="register"]').hide();
//                 reSetMobile(res);
//                 login_in()
//                 return;
//               }else{
//                 window.location.reload()
//               }
//             }else {
//               alert(res.message);
//               // $('.register-boxs').find('.codeipt').parent().siblings('.warnbox').show();
//             }
//           },
//           error: function(res){
//             alert(res.responseJSON.message);
//           },
//           complete:function(res){
//           },
//         });
//       }else{
//         // alert('验证码错误')
//       }

//     }
//   })

// //  找回密码
//   $(".password-boxs .surebtn").click(function(){
//     var accountval=$(".password-boxs .phoneipt").val();
//     var codeval=$(".password-boxs .codeipt").val();
//     var newpassval=$(".password-boxs .new-passwordipt").val();
//     var repassval=$(".password-boxs .repeat-passwordipt").val();
//     var account,code,newpass,repass;
//     if(!accountval){
//       alert('请输入手机号！')
//       return;
//     }else if(!codeval){
//       alert('请输入验证码！')
//       return;
//     }else if(!newpassval||!repassval){
//       alert('请输入密码！')
//       return;
//     }else if(accountval||codeval||newpassval||repassval){
//       if (!myreg.test($('.password-boxs').find('.phoneipt').val())){
//         $('.password-boxs').find('.phoneipt').parent().siblings('.warnbox').show();
//         account=false;
//       } else {
//         $('.password-boxs').find('.phoneipt').parent().siblings('.warnbox').hide();
//         account=true;
//       }
//       if (!passreg.test($('.password-boxs').find('.new-passwordipt').val())){
//         $('.password-boxs').find('.new-passwordipt').parent().siblings('.warnbox').show();
//         newpass=false;
//       } else {
//         $('.password-boxs').find('.new-passwordipt').parent().siblings('.warnbox').hide();
//         newpass=true;
//       }

//       if( $('.password-boxs').find('.repeat-passwordipt').val()!=newpassval){
//         $('.password-boxs').find('.repeat-passwordipt').parent().siblings('.warnbox').show();
//         repass=false;
//       }else{
//         $('.password-boxs').find('.repeat-passwordipt').parent().siblings('.warnbox').hide();
//         repass=true;
//       }
//       if(account==true&&newpass==true&&repass==true){

//         // $.post("/findpassword",{
//         //   mobile:$('.password-boxs').find('.phoneipt').val(),
//         //   code:$('.password-boxs').find('.codeipt').val(),
//         //   newpassword:$('.password-boxs').find('.new-passwordipt').val(),
//         //   repeatpwd:$('.password-boxs').find('.repeat-passwordipt').val(),
//         // },function (res) {
//         //   if(res.code==200){
//         //     alert('修改成功')
//         //     window.location.reload();
//         //   }else if(res.code==400){
//         //     $('.register-boxs').find('.codeipt').parent().siblings('.warnbox').show();
//         //   }else if(res.code==401){
//         //     alert("此用户不存在")
//         //   }
//         // })
//         $.ajax({
//           url:"/findpassword",
//           type:'post',
//           data:{
//             mobile:$('.password-boxs').find('.phoneipt').val(),
//             code:$('.password-boxs').find('.codeipt').val(),
//             newpassword:$('.password-boxs').find('.new-passwordipt').val(),
//             repeatpwd:$('.password-boxs').find('.repeat-passwordipt').val()
//           },
//           success: function(res){
//             if(res.code==200){
//               alert('修改成功')
//               $('.password-boxs').hide();
//               $('[data-key="login"]').show();

//             }else {
//               alert(res.message);
//               // $('.register-boxs').find('.codeipt').parent().siblings('.warnbox').show();
//             }
//           },
//           error: function(res){
//             alert(res.responseJSON.message);
//           },
//           complete:function(res){
//           },
//         });
//       }else{
//       }
//     }
//   })

// //  成功提示模态框
// //   $('.fixed-success').fadeIn();
// //   setTimeout(function () {
// //     $('.fixed-success').fadeOut();
// //   },1000)
// //  修改信息模态框
//   $(".fixed-success-change .surebtn").click(function(){
//     $(".fixed-success-change").fadeOut();
//   })
//   // 用户协议弹窗
//   $(".open-agreement").click(function () {
//     $("#agreement1").fadeIn(200);
//   })

//   // 短信验证码登录
//   $(".check-agreement1").click(function (e) {
//     if (e.target.checked) {
//       $('.btn-save1').attr('disabled', false)
//     } else {
//       $('.btn-save1').attr('disabled', true)
//     }
//   })

//   // 注册用户协议
//   $(".check-agreement").click(function (e) {
//     if (e.target.checked) {
//       $('.btn-save').attr('disabled', false)
//     } else {
//       $('.btn-save').attr('disabled', true)
//     }
//   })
//   // 关闭弹窗
//   $('[data-close="close"]').on("click", function () {
//     $(this).parents('.close-box').fadeOut(200);
//   });

// });

