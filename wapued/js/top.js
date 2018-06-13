// JavaScript Document
window.onload=function(){
	var topnav=document.getElementById("layout_jdKey");
	var headnav=document.getElementById("layout_jdBar");
	topnav.onclick=function(){
		if(headnav.style.display=="none"){
			headnav.style.display="table";
		}else{
			headnav.style.display="none"
		}
	}
	showliebiao();
	var add=document.getElementById("add_cart");
	add.onclick=function(){
		clearInterval(time)
		var time=null;
		var messageBox=document.getElementById("messageBox");
		var a=2;
		messageBox.style.display="block";
		time=setInterval(function(){
			a--;
			if(a<=0){
				messageBox.style.display="none";
				clearInterval(time)
				return
			}
		},1000)
	}
}
function showliebiao(){
	if(showx==null){
		return
	}
	var showx=document.getElementById("showxuanze");
	var mva=document.getElementById("m_searchutempanel_1_shadowid9");
	var xdiv=document.getElementById("m_searchutempanel_1_menuid11");
	showx.onclick=function(){
		mva.style.display="block";
		xdiv.style.display="block"
	}
}
