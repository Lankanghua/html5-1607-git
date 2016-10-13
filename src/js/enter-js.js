jQuery(function() {
	var $judge = $(".judge"); //获取提示框；
   
	//判断用户名输入格式是否正确；  
	jQuery(".username").blur(function() {
			var $p = $("<div/>");
			var $us = jQuery(".username").val();
			var istrue = /^\D\w{6,17}/.test($us);
			console.log(istrue);
			if(istrue) {
				$judge.css("display", "none");
			} else {
				$judge.html("&nbsp;用户名输入不正确！").css("display", "block");

			}

		})
		//判断密码输入格式是否正确；
	jQuery(".paw").blur(function() {
		var $p = $("<div/>");
		var $us = jQuery(".paw").val();
		var istrue = /\w{8,17}$/.test($us);
		console.log(istrue);
		if(istrue) {
			$judge.css("display", "none");
		} else {
			$judge.html("&nbsp;密码输入不正确！").css("display", "block");

		};

	});

	//获取cookies;
	var name = getCookie("$name");
	var pawold = getCookie("$pawold");

	if(name != "") {
		$(".username").val(name);
		//	        console.log($name);
	}
	if(pawold != "") {
		$(".paw").val(pawold);
	}
       var cookiesText;
	$(".registerbtn").on("click", function() {
	var  a= $(".username").val();
	console.log(a);
		if($(".username").val() == name && $(".paw").val() == pawold) {
			window.open("../index.html")
//			设置cookies
//			
			var d = new Date();
			d.setDate(d.getDate() + 7);
		    cookiesText2= setCookie("yonghuming",a,d,"/src");
			

		} else if($(".username").val() != name) {
			$judge.html("&nbsp;该账户尚未注册！").css("display", "block");

		} else if($(".paw").val() != pawold) {
			$judge.html("&nbsp;密码输入不正确！").css("display", "block");
		}
	})

}) 