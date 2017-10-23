$(function () {
	$('.BOX .NUM ul li').mouseover(function(){
		var index = $(this).index();
		var TOP =(-300)*index+'px';
		$('.BOX .divs ul').stop().animate({
			marginTop:TOP
		},500);
	})

	//单选
	var TEXT=1;
	$('.User .User_box').click(function(){
		$(this).find(".xuan").toggleClass("sele");
		var LE=$('.User .User_box .User_info .sele').length;
		$('.head span strong').text(LE);
		if(LE==3){
			$('.foot .all .all_xuan').addClass('BLO').removeClass('NON');
		}
		else{
			$('.foot .all .all_xuan').addClass('NON').removeClass('BLO');
		}
	})
	//全选
	$('.foot .all').click(function(){
		if($(".all_xuan").hasClass("NON")){
            $(".all_xuan").addClass("BLO").removeClass("NON");
            $(".xuan").addClass("sele").removeClass("nosele");
            var LE=$('.User .User_box .User_info .sele').length;
            $('.head span strong').text(LE);
        }else {
            $(".all_xuan").addClass("NON").removeClass("BLO");
            $(".xuan").addClass("nsele").removeClass("sele");
            $('.head span strong').text("0");
        }
	})
})