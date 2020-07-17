$(".qx").click(function(){
		$('.xf').css('display','none')
});

$(".sj .topr").click(function(){
		$('.xf').css('display','block')
});

$(".toprt").toggle(function(){
		$('.toprf').slideDown()
},function(){
	    $('.toprf').slideUp()
	}
);

$(".btn-tc").click(function(){
		$('.xf2').fadeIn();
		setTimeout(function() {

                    $('.xf2').fadeOut();                                

                }, 1500);               

            })

$(".xf2r").click(function(){
		$('.xf2').fadeOut()
});








//返回顶部
$(".xxxxxxxxx").click(function(){
		$('html, body').animate({scrollTop:0}, 600);
});

$(".xxxxxxxxx").click(function(){
		$('html, body').animate({scrollTop:0}, 600);
});

//
var mySwiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
	pagination: '.pagination',
	loop:true,
	grabCursor: true,
	paginationClickable: true,
	autoplay: 3000,
	autoplayDisableOnInteraction: false
})
$('.arrow-left').on('click', function(e){
	e.preventDefault()
	mySwiper.swipePrev()
})
$('.arrow-right').on('click', function(e){
	e.preventDefault()
	mySwiper.swipeNext()
})
var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
    });