$(document).ready(function () {
      var slider = $("#lightSlider").lightSlider({
        item: 6,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: true,
        controls: false,
        prevHtml: '',
        nextHtml: '',

        rtl: false,
        adaptiveHeight: false,

        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,

        thumbItem: 10,
        pager: false,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',

        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,

        responsive: [
          {
            breakpoint: 800,
            settings: {
              item: 3,
              slideMove: 1,
              // slideMargin: 0,
            }
          },
          {
            breakpoint: 480,
            settings: {
              item: 2,
              slideMove: 1
            }
          }],

        onBeforeStart: function (el) { },
        onSliderLoad: function (el) { },
        onBeforeSlide: function (el) { },
        onAfterSlide: function (el) { },
        onBeforeNextSlide: function (el) { },
        onBeforePrevSlide: function (el) { }
      });

      $('.circle-arrow-prev').click(function () {
        slider.goToPrevSlide();
      });
      $('.circle-arrow-next').click(function () {
        slider.goToNextSlide();
      });

      /*
      var count = 1, min=1, max=7;
      
      $(".circle-arrow-next").on("click", function(){
          // if ($(this).hasClass("goToStart")) {
          //     $(this).parents(".lSSlideWrapper").next().children().first().trigger("click");
          //     $(this).removeClass("goToStart");
          //     
          // }

          // if ($(this).prev().hasClass("goToEnd")) {
          //     $(this).prev().removeClass("goToEnd")
          // }
          
        if(count<=max) {
          count += 1;
          $(".category-number").text( '0' + count).fadeIn();
          // $(".slider").css('background-position', count +'px 0px');
          }
          console.log('next');
      });

      $(".circle-arrow-prev").on("click", function(){
          if(count>min){
            count = count - 1;
            $(".category-number").text( '0' + count).fadeIn();
          }
          // console.log('prev');
      });
    */

    });