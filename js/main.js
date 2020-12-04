$(document).ready(function(){
	
	
	jQuery('#mobile-menu').meanmenu({
	
	meanScreenWidth: "767",
	meanMenuContainer: '.menu-place'
	
	
	
	
	
	
	});
	
	
	
	
	
	
	
	
	$('.slider-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})


	$('.project-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.blog-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
$('.brand-active').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        992:{
            items:4
        },
		1200:{
            items:6
        }
    }
})

$('.video-popup').magnificPopup({
	type:'image'
	
})






















	
})