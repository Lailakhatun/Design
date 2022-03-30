$(function(){
    'use strict'

    // type js
    var typed = new Typed('.test', {
        strings: [
          'Company',
          
        ],
        typeSpeed: 50,
        backSpeed: 50,
        startDelay: 800,
        backDelay: 800,
        loop: true,
        
    });

    // slick slider
    $('.client_slider').slick({
      arrows:true,
      slidesToShow: 1,
      slidesToScroll:1,
      dots:false,
      nextArrow: '<i class="fas fa-angle-right next-ar"></i>',
      prevArrow: '<i class="fas fa-angle-left prev-ar"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            arrows:false
          }
        }
      ]
    });

    // love slider
    $('.love_slider').slick({
      arrows:true,
      slidesToShow: 5,
      slidesToScroll:5,
      dots:false,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
          }
        }
      ]
    });

    
     // aos js
     AOS.init();

    //  Back to top

    $('.back-to-top').on('click',function(){
      $('html,body').animate({
        scrollTop:0,
      },1000);
    });
    $(window).scroll(function () {
      var scrolling2 =  $(this).scrollTop();

      if(scrolling2 > 200){
        $('.back-to-top').fadeIn();

      }else{
        $('.back-to-top').fadeOut()
      }
    });

    //  sticky menu

    var navOff = $('.main_menu').offset().top;
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if (scrolling > navOff) {
        $('.main_menu').addClass('menu-fix');
      }else{
        $('.main_menu').removeClass('menu-fix');
      }
    });

});

// Dark mode
document.getElementById('checkbox');
checkbox.addEventListener('change',() => {
  document.body.classList.toggle('dark');
});