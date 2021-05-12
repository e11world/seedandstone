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

  if ($(window).width() > 800) {
      // theSlider();
      // $('#lightSlider .col-item').css('width', '100%');
      // console.log('not mobile');
  } else {
      // initTeaserHeight();
      // $('#lightSlider').parent().parent().find('.lSAction, .lSPager').remove();
      $('#lightSlider').parent().find('.lSSlideWrapper, .usingCss').remove();
      $('#lightSlider').parent().parent().find('.lSSlideOuter').remove();
      $('#lightSlider').children().removeAttr('style');
      slider.destroy();
      // console.log('mobile');
  }

  $(window).on('resize', function(e) {
      // clearTimeout(resizeTimer);
      // resizeTimer = setTimeout(function() {
          if ($(window).width() > 800) {
              // console.log('> 767');
              /*var slider = $('#lightSlider').lightSlider();
              slider.destroy();
              $('#lightSlider .col-item').css('width', '33.33333333%');
              // initTeaserHeight();
              $('.lSPager').remove();
              $('.lSAction').remove();
              $('#lightSlider').parent().removeClass('lSSlideWrapper').removeAttr('style');*/
          } else {
              console.log('smaller > 800');
              /*
              $('.lSPager').remove();
              var slider = $('#lightSlider').lightSlider();
              slider.destroy();
              $('#lightSlider .col-item').css('width', '100%');
              theSlider();*/
                    
              $('#lightSlider').parent().find('.lSSlideWrapper, .usingCss').remove();
              $('#lightSlider').parent().parent().find('.lSSlideOuter').remove();
              $('#lightSlider').children().removeAttr('style');
              slider.destroy();
          }
      // }, 250);
      // initTeaserHeight();
  });
  

});