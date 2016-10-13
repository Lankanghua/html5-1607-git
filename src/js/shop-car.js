$(function(){
	   var $title=getCookie("$title");
	   var $prise=getCookie("$prise") 
	   var $imgurl=getCookie("$picUrl")
	   var $i=getCookie("i");
	   var $img=$("<img src='../"+$imgurl+"'/>").addClass("addimg")
	   console.log($imgurl);
	   $(".td1").html($img);
	   $(".td2").html($title);
	    $(".td3").html($prise);
	    $(".td4").html($i);
	    var inall=$i*$prise;
	     $(".td5").html(inall);
	     $(".h3-1 span").html(inall)
	     
})
