

$(document).ready(function() {

  var prevLoc = "loc-1";
  var locToOpen = "";
  var locClicked;

  var element = $(".contact-us-locations-menu-container");

  var delay = function(elem, callback) {
    var timeout = null;
    timeout = setTimeout(function() {
      if (locClicked) {
        callback(elem);
      }
    }, 50);
  };

  //   mouseenter
  var currentTab = 1;

  $(".contact-us-location").click(function(event) {
    locClicked = true;
    //console.log('here')
    let targetId = String(event.target.id).replace("menu-", "");
    
    delay(document.getElementById(targetId), function(context) {
      locToOpen = document.getElementById(targetId);
      //console.log('to open', locToOpen)
      openMenu(locToOpen);
      prevLoc = targetId;
    });

    // console.log($(this).attr('id'));
    // console.log(event.target.id);
    // var clickedBtnID = $(this).attr('id');
    // alert('you clicked on button #' + clickedBtnID);
    // $(this).toggleClass('radial-menu-selected');
    event.stopPropagation(); // stops click event from bubbling up from child
    $(".menu-selected").removeClass("menu-selected"); // remove all previously selected classes

    $target = $(event.target);
    $target.parent("li").addClass("menu-selected");

    // console.log(targetTop, targetPos, tmpAnimation, selectedID, currentTab);

    let selectedID = Number($(this).attr("id"));

  });


  function openMenu(context) {

    
    let closeID = document.getElementById(prevLoc);
    
    if (closeID !== context) {
    
      if ($(closeID).hasClass("location-visible")) {


        $(closeID).animate({"opacity":"0"}, 350);
        $(closeID).delay(100).removeClass("location-visible");
        $(closeID).delay(100).addClass("location-hidden");
        $(context).css("opacity","0");
        $(context).delay(100).addClass("location-visible");
        $(context).delay(100).animate({"opacity":"1"}, 650);

        $(context).delay(500).removeClass("location-hidden");
        

        $('.scrollbar').animate({
            scrollTop: 0
        }, 800);


      /*
        $(context).removeClass("location-hidden")
        $(context).addClass("location-visible")
        let closeID = document.getElementById(prevLoc);
        $(closeID).removeClass("location-visible")
        $(closeID).addClass("location-hidden")
        */
      }
    }
    
    
  }

});

var element = $(".menunav");
var tmpAnimation = 0;





var $animation_elements = $('.animate');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  let padding = 150;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top + padding;
    var element_bottom_position = (element_top_position + element_height + padding);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view animated move-to-place');
    } else {
      $element.removeClass('in-view animated move-to-place');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



