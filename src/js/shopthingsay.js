$(function() {
	//获取选择商品的信息  打印到页面；
	var images = getCookie("$picUrl");
	var title = getCookie("$title");
	var prise = getCookie("$prise");
	$("h4").html(title)
	$(".prise").html(prise);
	var $img = $("<img src='../" + images + "'/>");
	$img.addClass("img-pos")
	$img.appendTo(".sore");

	$(".sore").xzoom({
		position: "left"
	});

	//点击弹出购物车；

	$(".carlist").on("click", function() {
		$(this).css("background", "#DC143C");
		$(".carlist-list").animate({
			right: 55
		});
	})
	$(".carlist-close").on("click", function() {
		$(".carlist-list").animate({
			right: -255
		});
		$(".carlist").css("background", "")
	});

	//点击加入购物车；
	var $carul = $("<ul/>");
	var i = 0;

	$(".p-car-1").on("click", function() {
		i += 1;
		$(".carlist span").html(i);
		//		   $(".wenhou").css("display","none");
		$carul.addClass("carul");
		var $carli = $("<li/>").html(i);
		var $imgclone = $img.clone();
		var $carp = $("<p/>").html(title).css({
			color: "darkgray",
			fontSize: 12
		});
		var closebtn = $("<a href='#'>删除</a>");
		$imgclone.addClass("cloneimg");
		$imgclone.appendTo($carli);
		$carp.appendTo($carli);
		closebtn.appendTo($carli);
		$carli.appendTo($carul);
		$carul.appendTo(".carlist-list");

		//图片飞入购物车效果；
		var copyimg = $imgclone.clone();
		var $position = $img.offset(); //获取原图坐标

		var $width = $img.width(); //获取原图宽度
		//	 			alert($width);

		//	 			var $height=copyimg.height();
		copyimg.css({
			position: "absolute",
			left: $position.left,
			top: $position.top,
			width: $width
			
		});
		copyimg.appendTo("body");
		var $carposition = $(".carlist").offset();
		copyimg.animate({
			left: $carposition.left,
			top: $carposition.top,
			width: 0,
			opacity: 0
		}, function() {
			copyimg.remove();

		})
          //点击清空按钮，实现删除购物车所有商品；
		$(".clear").on("click", function() {
			$carul.find("li").remove();
			i = 0;
			$(".carlist span").html(i);
			$(".wenhou").css("display", "block");
			$(".pay").css("display", "none");
			$(".clear").css("display", "none");
			$(".carlist span").css("display", "none");
		})
		
		//点击删除， 实现删除单个商品
		closebtn.on("click", function() {
			i -= 1;
			$(".carlist span").html(i);
			$carli.remove();
			if(i == 0 || i < 0) {
				$(".wenhou").css("display", "block");
				$(".pay").css("display", "none");
				$(".clear").css("display", "none");
				$(".carlist span").css("display", "none");
			}
		})

		if(i > 0) {
			$(".carlist span").css("display", "block");
			$(".wenhou").css("display", "none");
			$(".pay").css("display", "block");
			$(".clear").css("display", "block");
		}

	})
       
       
       //点击去结算  跳转到统计页面；
	$(".pay").on("click", function() {
		open("shop-car.html")
		var cookiesText = setCookie("i", i);

	})
  
})