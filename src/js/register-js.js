jQuery(function() {
	var $number = [];
	for(var i = 0; i < 4; i++) {
		$code = parseInt(Math.random() * 10);
		$number.push($code);
		jQuery(".code-number").html($number);
		//		     	console.log($number)

	}

	$(".repeat").click(function() {
			$number = [];
			for(var i = 0; i < 4; i++) {
				$code = parseInt(Math.random() * 10);
				$number.push($code);
				jQuery(".code-number").html($number)

			}
 
			$number = [];
		})
		//注册信息验证；
		//帐号信息填写是否正确；
	var $judge = $(".judge");
	var $us;
	var istruey;
	//判断用户名输入是否正确；  
	jQuery(".username").blur(function() {
			var $p = $("<div/>");
			$us = jQuery(".username").val();
			console.log($us);
			istruey = /^\D\w{6,17}/.test($us);
			//	  	        console.log(istruey);
			if(istruey) {
				$judge.css("display", "none");
			} else {
				$judge.html("&nbsp;sorry，您的大名不够霸气！").css("display", "block");

			}

		})
		//判断密码填写是否正确；
	var $p;
	var istruem;
	jQuery(".paw").blur(function() {
		var $p = $("<div/>");
		var $us = jQuery(".paw").val();
		istruem = /^\D\w{6,17}/.test($us);
		//	  	        console.log(istruem);
		if(istruem) {
			$judge.css("display", "none");
		} else {
			$judge.html("&nbsp;亲，您的密码不够安全，请重新设置！").css("display", "block");

		}

	})
	var $code;
	var $codenumber;
	$(".code").blur(function() {
			var $code = $(".code").val();
			$code = parseInt($code);
			$codenumber = $(".code-number").text();
			$codenumber = parseInt($codenumber)
			if($code != $codenumber) {

				$judge.html("&nbsp;亲，暗号不对啊！").css("display", "block");
			} else {
				$judge.css("display", "none");
			}
			//	  	             console.log(typeof $code)
			//	  	             console.log(typeof $codenumber)
			//	  	             console.log($code);
			//	  	             console.log($codenumber)

		})
		//cookies;

	//	  	     	var cookieText1=setCookie("$psw",$psw,d); 
	var cookieText;
	$(".registerbtn").on("click", function() {

		//检测漏填处；    
		if($(".username").val() == "") {
			$judge.html("&nbsp;客官，您忘了填写您的大名了！").css("display", "block");
		} else if($(".paw").val() == "") {
			$judge.html("&nbsp;客官，您忘了填写密码了！").css("display", "block");
		} else if($(".code").val() == "") {
			$judge.html("&nbsp;客官，您忘了填写暗号了！").css("display", "block");
		} else if(istruey && istruem) {
			var d = new Date();
			d.setDate(d.getDate() + 7);
			cookieText = setCookie("$name", $us, d);
			cookieText = setCookie("$pawold", $us, d);
			console.log(istruey)

			window.open("enter.html")
		}

	})

	//	  	        var a = getCookie(name)  ;
	//	                 console.log(a)

})