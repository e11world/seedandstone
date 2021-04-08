$(document).ready(function () {
if ($(window).width() < 768) {       // if width is less than 600px
               // execute mobile function
} else {    
  /* the viewport is less than 768 pixels wide */
  // $('.slider').slick();

    $(".category-img").css("opacity", "0");
    $(".category-img").css({ top: "0" });
    setTimeout(() => {
      $(".category-img").css({ top: "-260px" });
    }, 10);
  // $(".category-item").hover(function () {
  //stuff to do on mouse enter
  //   $(".category-title-icon").animate({"opacity":"1"}, 350).css("background-color", "#FF7F30").delay(3000).addClass('animate-mood-wheel-in');
  // });

  // $(".category-img").css("display", "none");
  
  
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
      console.log('prev');
  });

  */

  // var catID = $(".category-number").html();

  // $( ".category-item" ).hover(
  //   function() {
  //       $(".category-number").html( $( this ).find("p").html() );
  //   }, function() {
  //     $(".category-number").html( catID );
  //   }
  // );

  $(".category-item")
    .mouseenter(function () {
      $(this).css("zIndex", "9").css("overflow", "visible");

      let desc = $(this).attr('data-id'); //get the description
      $('.category-number').text(desc);
      // console.log(desc);
      // $("#content").text($(this).text());

      $(this).prev().css("zIndex", "10");
      $(this)
        .find(".category-title-icon")
        .animate({ opacity: "1" }, 350)
        .css("background-color", "#FF7F30")
        .css("zIndex", "60");
      $(this)
        .find(".category-title-icon > .category-img")
        // .siblings()
        .animate({ opacity: "1" }, 100)
        .css("display", "inline-block");
      // .addClass("visible rotate");
    })
    .mouseleave(function () {
      $(this).css("zIndex", "8").css("overflow", "hidden");
      $(this).prev().css("zIndex", "9");
      $(this)
        .find(".category-title-icon")
        .animate({ opacity: ".3" }, 50)
        .css("background-color", "#000");
      $(this)
        .find(".category-title-icon > .category-img")
        // .siblings()
        .animate({ opacity: "0", display: "none" }, 400);
      // .removeClass("visible rotate");
    });
    
  } 
});
