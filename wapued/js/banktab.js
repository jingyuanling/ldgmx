// JavaScript Document
function tabcolor(obj){
	var oul=document.getElementById("payul");
	var oli=oul.getElementsByTagName("li");
	for(var i=0;i<oli.length;i++){
		oli[i].className="";
	}
	obj.className="ontheli";
}