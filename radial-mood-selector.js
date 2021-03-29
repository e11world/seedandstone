// radial wheel mood selector

$(document).ready(function() {

  var previous = "mood-1";
  var original = "mood";
  var toOpen = "";
  var over;

  var tmpAnimation = 0;
  var element = $(".menunav");

  var delay = function(elem, callback) {
    var timeout = null;
    timeout = setTimeout(function() {
      if (over) {
        callback(elem);
      }
    }, 50);

    // mouseout
    $(elem).mouseout(function() {
      over = false;
      clearTimeout(timeout);
    });
  };

  //   mouseenter
  var currentTab = 1;

  $(".over").click(function(event) {
    over = true;
    //console.log('here')
    let targetId = String(event.target.id).replace("-label", "");
    
    delay(document.getElementById(targetId), function(context) {
      toOpen = document.getElementById(targetId);
      //console.log('to open', toOpen)
      openMenu(toOpen);
      previous = targetId;
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

    let targetPos = $target.position();
    // let parentPos = $(".circle").offset();

    let targetTop = Math.round(targetPos.top);
    let selectedID = Number($(this).attr("id"));
    if (targetTop === -100 || targetTop > -150 && targetTop < -20) {

     	console.log(targetTop);
    } else if (targetTop === 74 || targetTop > 20 && targetTop < 120) {
		console.log(targetTop);
      console.log(targetTop);
      tmpAnimation = tmpAnimation - 72;
      $("ul.circle").animate({
        degrees: tmpAnimation
      }, {
        duration: 800,
        step: function(now) {
          element.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    } else if (targetTop > -250 && targetTop < -150) {
      tmpAnimation = tmpAnimation + 72;
        $("ul.circle").animate({
          degrees: tmpAnimation
        }, {
          duration: 800,
          step: function(now) {
            element.css({
              transform: "rotate(" + now + "deg)"
            });
          }
        });
    	console.log(targetTop, 'this is it for mobile');
    } else {
    console.log(targetTop);
      tmpAnimation = tmpAnimation + 72;
      $("ul.circle").animate({
        degrees: tmpAnimation
      }, {
        duration: 800,
        step: function(now) {
          element.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    }

  });

  $(".forwards").click(function(e) {
    e.preventDefault();

    $target = $(event.target);
    let targetPos = $target.position();
    // let parentPos = $(".circle").offset();

    let targetTop = Math.round(targetPos.top);
    // let selectedID = Number($(this).attr("id"));
    
    if (targetTop === -100 || targetTop > -150 && targetTop < -20) {
    
    } else if (targetTop === 74 || targetTop > 50 && targetTop < 120) {
    //console.log(targetTop);
      tmpAnimation = tmpAnimation - 72;
      $("ul.circle").animate({
        degrees: tmpAnimation
      }, {
        duration: 200,
        step: function(now) {
          element.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    } else {
    console.log(targetTop);
      tmpAnimation = tmpAnimation + 72;
      $("ul.circle").animate({
        degrees: tmpAnimation
      }, {
        duration: 200,
        step: function(now) {
          element.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    }
  });

  $(".backwards").click(function(e) {
    e.preventDefault();

    $target = $(event.target);
    let targetPos = $target.position();
    // let parentPos = $(".circle").offset();

    let targetTop = Math.round(targetPos.top);
    // let selectedID = Number($(this).attr("id"));
    if (targetTop === -100 || targetTop > -150 && targetTop < -20) {
    console.log(targetTop);
    //} else if (targetTop === 74 || targetTop > 50 && targetTop < 120) {
    } else if (targetTop === 74 || targetTop < 11 && targetTop > 150) {
    console.log(targetTop);
      tmpAnimation = tmpAnimation + 72;
      $("ul.circle").animate({
        degrees: tmpAnimation
      }, {
        duration: 200,
        step: function(now) {
          element.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    } else {
    console.log(targetTop);
      tmpAnimation = tmpAnimation - 72;
      $("ul.circle").animate({
        degrees: tmpAnimation
      }, {
        duration: 200,
        step: function(now) {
          element.css({
            transform: "rotate(" + now + "deg)"
          });
        }
      });
    }
  });

  function openMenu(context) {

    
    let closeID = document.getElementById(previous);
    
    if (closeID !== context) {
    
      if ($(closeID).hasClass("mood-visible")) {


        $(closeID).animate({"opacity":"0"}, 350);
        $(closeID).delay(100).removeClass("mood-visible");
        $(closeID).delay(100).addClass("mood-hidden");
        $(context).css("opacity","0");
        $(context).delay(100).addClass("mood-visible");
        $(context).delay(100).animate({"opacity":"1"}, 650);

        $(context).delay(500).removeClass("mood-hidden");
        

        $('.scrollbar').animate({
            scrollTop: 0
        }, 800);


      /*
        $(context).removeClass("mood-hidden")
        $(context).addClass("mood-visible")
        let closeID = document.getElementById(previous);
        $(closeID).removeClass("mood-visible")
        $(closeID).addClass("mood-hidden")
        */
      }
    }
    
    
  }

  /*
  function closeMenu(context) {
    //console.log('switcher 2222');
    $(context).toggleClass("mood-visible");
    $(context).toggleClass("mood-hidden");
  }
*/

});

var element = $(".menunav");
var tmpAnimation = 0;



$(document).ready(function() {


  var step = 33;
  var scrolling = false;

  $('.custom-scrollbar-arrow-top').click(function() {
    $('.scrollbar').animate({
      scrollTop: 0
    }, 600);
  })

  // Scroll to the bottom
  $('.custom-scrollbar-arrow-bottom').click(function() {
    $(".scrollbar").animate({
      scrollTop: $(document).height()
    }, 1600);
  })

  
  $('.mood-circle-notification-inner').click(function() {
    $(".mood-wheel").animate({"right": "0","opacity":"1"}, 650).addClass('animate-mood-wheel-in');
    $(".mood-circle-notification-x").animate({"opacity":"1", "display": "block"}, 400).addClass('visible');
  })

  $('.mood-circle-notification-x').click(function() {
    $(".mood-wheel").addClass('animate-mood-wheel-out');
    $(".mood-circle-notification-x").animate({"opacity":"0", "display": "none"}, 350).removeClass('visible');
    $(".mood-wheel").animate({"right": "-100px", "opacity":"0"}, 350).removeClass('animate-mood-wheel-in');
  })

/*
  var $win = $(window);
  var $stat = $('.ico-hand-click');
  $win.on('scroll', function () {
      var scrollTop = $win.scrollTop();
      $stat.each(function () {
          var $self = $(this);
          var prev=$self.offset();
          console.log(scrollTop);
          console.log(prev.top);
          if ( (scrollTop - prev.top) > - 500) {
            $self.css('opacity', '1').addClass('animated move-to-place');
          } else {
            // console.log('n');
            $self.removeClass('animated move-to-place');
          }
      });
  }).scroll();
*/


});





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



