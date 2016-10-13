$(function() {
	
	
	
//	$(".car").css("display","none");
jQuery(function() {
		jQuery(".photoshow").xcarousel({
			width: 1300,
			height: 480, 
			page: true, //是否显示页码
			autoPlay: true, //是否自动轮播
			type: 'fade', //动画类型：水平滚动x, 垂直滚动y, 渐现效果fade
			buttons: true, //是否显示前后按钮
			speed: 5000 //轮播图速度

		});
           // 点击Top回到顶部；
			jQuery(".gettop").on("click", function() {
                       $("body").animate({scrollTop:0});
		});
		
		

})       
       //滑动滚动条  加载商品列表
	     var i=0;
	     var cookieText1;
		 $.ajaxSetup({
		 	type:"get",
		 	url:"js/shangpin.json",
//		    dataType:"json",
//		 	async:true,
		 	success:function(res){

		         i++;
                  var $ul=$("<ul/>");
		 		     $ul.addClass("add-ul");
		 		$.each(res, function(index,item) {
//		 			removeCookie("");
		 			
		 		var  $li= $("<li/>");
		 		 var $div=$("<div/>"); 
//		 		console.log(item.title);
		 		 $div.addClass("add-div");
		 		 var $span=$("<img src='"+item.imgpic+"'/>");
		 		 $span.addClass("add-img");
		 		 var $p=$("<p/>").html(item.title);
		 		 var $prise=$("<p/>").html("价格：￥"+item.prise+"元");
		 		 $span.appendTo($div);
		 		 $p.appendTo($div);
		 		 $prise.appendTo($div);
		 		 var $a=$("<a href='html/shopthingsay.html'></a>");
		 		  $div.appendTo($li);
//		 		 $a.appendTo();
		 		 var $carbtn=$("<div/>").html("立即购买").addClass("carbtn").appendTo($div);
		 		 $li.appendTo($ul);
		 		 
		 		 $div.on("click",function(){
		 		 removeCookie("$picUrl","$title","$prise");
		 	    var d=new Date();
	  	     	d.setDate(d.getDate()+1);
	  	     	cookieText1=setCookie("$picUrl",item.imgpic,d);
	  	     	cookieText1=setCookie("$title",item.title,d)
	  	        cookieText1=setCookie("$prise",item.prise,d);
	  	        window.open("html/shopthingsay.html")
		 		 });
		 		 
		 		 
		 		 
		 		});
		 		$ul.appendTo(".navlist");
		 	}
		 });
//	           $.ajax();
	          $(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();

				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= $(document).height() - $(window).height() - 600 &&i<6){
					$.ajax();
				}
		})
	           
	           
	
	 $(".carlist").on("click",function(){
		$(this).css("background","#DC143C");
	$(".carlist-list").animate({right:55});
})
	$(".carlist-close").on("click",function(){
		$(".carlist-list").animate({right:-255});
		$(".carlist").css("background","")
	})
	
	 //获取登录信息  更改身份状态
	    
//	 var $user= getCookie("yonghuming");
////	     console.log($user+",2222");
//	     if($user!=""){
//	     	$(".head").children("ul").find("li").remove();
//	     	 var $li=$("<li/>").html("Hi,"+$user);
//	     	    $li.appendTo(".headul");
////	     	    $(".headul li").addClass("addli");
//	     	    var $li2=$("<li/>").html($("<a href='#'>退出</a>"));
//	     	     $li2.appendTo(".headul");
//	     	    var reback= $(".headul li").eq(1);
//	     	     reback.on("click",function(){
////	     	     	$user="";
//                  $li.remove();
//	     	     }) 
//	     }
	 
	 
})