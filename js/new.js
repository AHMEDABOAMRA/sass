$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
	
	
	
	});
$(document).ready(function() {

$(".over").click(function(){

$(".over").css("display","none");
$(".idk .fab").css("display","none");

  });
	 $(".idk .fab").click(function(){
  
$(".over").css("display","none");
$(".idk .fab").css("display","none");

  });
	  });
$(document).ready(function() {

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	 autoplay:true,
	nav:true,

    autoplayTimeout:2000,
dots:false,	
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
  });
