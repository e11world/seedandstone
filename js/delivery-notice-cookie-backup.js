/*!
 * Simple Age Verification (https://github.com/Herudea/age-verification))
 */
var banner_popup, sidebar_popup;

$(document).ready(function(){
    check_cookie_delivery_notice_banner();
});
check_cookie_delivery_notice_banner = function() {
	// if ($.cookie('delivery_notice_banner') == "yes") {
	// if ($.cookie('delivery_notice_banner') && $.cookie('delivery_notice_banner') == "yes") {
	if ($.cookie('delivery_notice_banner')) {
    // if (!!$.cookie('delivery_notice_banner')) {
		hide_delivery_notice_banner();
        // console.log('hide_delivery_notice_banner');
	} else {
		show_delivery_notice_banner();
        // console.log('show_delivery_notice_banner 1st check');
		// $('body').css({'overflow-y':'hidden', 'position': 'fixed', 'height' : '100vh', 'opacity' : '1'});
	}
};

show_delivery_notice_banner = function() {

    // Add content before an element with ID container
    // $("#container").before("<p>&mdash; The Beginning &mdash;</p>");
	// var content_heading = $('<h2>Are you 19 or older?</h2>');
	// var content_buttons = $('<nav><ul><li><a href="#nothing" class="av_btn av_go" rel="yes">Yes</a></li><li><a href="#nothing" class="av_btn av_no" rel="no">No</a></li></nav>');
	// banner_wrapper.append(content_heading, content_buttons);
	
    var banner_popup = document.createElement("div")
    banner_popup.classList.add('notice-content')
    var noticeText = 'Delivering Now. Shop online or call <a href="tel:+18885757333" class="notice-link"><strong><em class="italic-text-2">888 575-7333</em></strong></a><strong class="bold-text-2"><em class="italic-text-3"> to place your order.</em></strong>';
    var actionBtn = document.createElement("p");
    actionBtn.innerHTML = '<a href="/shop?dtche%5Bpath%5D=locations" class="notice-link notice-btn-action"><strong><em class="italic-text">Shop Now</em></strong></a>';
    var closeBtn = '<div class="notice-close-btn"><a href="#" class="btn-x w-inline-block"><img src="https://uploads-ssl.webflow.com/604bf2ef08cd1b653a122272/607f4b951fa7c436d0f0fb5f_plus.svg" alt="Plus Icon" class="close-x" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;"></a></div>';

        

    setTimeout(function(){
    //   $('.top-banner-notice').remove();
        // $('.top-banner-notice').slideUp(600, function() { $(this).remove(); } );
        $("body").prepend( $(banner_popup).hide().delay(500).show('slow') );
        $(banner_popup).wrap('<div class="notice top-banner-notice"></div>').parent();
        $(banner_popup).append('<div class="notice-text">'+noticeText+actionBtn.innerHTML,closeBtn+'</div>');
        $(banner_popup).slideDown('900');
    }, 2600);

    // $(newHeading).append(newImage);
    // $(banner_popup).append(newHeading, newParagraph);
	// var banner_top_content = $('<div id="banner_top_content" class="banner_top_content"></div>');
    // var newImage = $('<img src="images/smiley.png" alt="Symbol">');
    // $("body").append(newHeading, newImage);

	// Append the prompt to the end of the document
	// $('.cookiez').fadeIn('1500');
	// $('.cookiez').append(sidebar_popup, banner_popup);
	// $('.cookiez .banner_popup').fadeIn('1500');
	// $('.cookiez').prepend(animated_bg);

    banner_setCookie();
	// banner_popup.find('a.av_btn').on('click', banner_setCookie);

};
banner_setCookie = function() {
	// e.preventDefault();

	// var delivery_notice_banner = $(e.currentTarget).attr('rel');
    // var delivery_notice_banner = $(banner_popup).parent();

    // var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    var inFifteenSeconds = new Date(new Date().getTime() + 10 * 1000);


    var date = new Date();
    date.setTime(date.getTime() + (11 * 1000));

	$.cookie('delivery_notice_banner', 'yes', {
		// expires: 1,
		expires: date,
		path: '/'
	});

	// if (delivery_notice_banner == "yes") {
	// 	hide_delivery_notice_banner();
    //     console.log('hide_delivery_notice_banner');
	// } else {
    //     console.log('show_delivery_notice_banner end');
	// }
};



hide_delivery_notice_banner = function() {
    // console.log('will hide it');
    // $.cookie("yes", null);
    $('.top-banner-notice').remove();
}

setTimeout(function(){
//   $('.top-banner-notice').remove();
    $('.top-banner-notice').slideUp(600, function() { $(this).remove(); } );
}, 11000);

/*

hide_delivery_notice_banner = function() {
	banner_popup.fadeOut("slow", function() {
        banner_popup.attr("style", "display: none !important");
    });
	// animated_bg.find('.cookiez').fadeOut(1000);

	$(this).delay(1000).queue(function() { 
		hide_delivery_notice_banner();
     $(this).dequeue();

  });
};
*/
// hide_delivery_notice_banner = function() {

// };


$(document).ready(function(){

    $('.notice-close-btn .btn-x').click(function() {
        console.log('notice-close-btn btn x hide it');
        // $('.top-banner-notice').slideUp(600, function() { $(this).remove(); } );
    });
    // $('.top-banner-notice .notice-close-btn a.btn-x img').click(function() {
    //     hide_delivery_notice_banner();
    // });
    // $('.top-banner-notice .notice-close-btn a.btn-x').click(function() {
    //     console.log('btn x hide it');
    // });
    // $('.top-banner-notice .notice-close-btn .btn-x').click(function() {
    //     console.log(' top-banner-notice notice-close-btn btn x hide it');
    // });
    // $(".notice-close-btn .btn-x").on( "click", function() {
    //     console.log('aaaaaaaaaaaaaaa btn x hide it');
    // });

    // $( ".notice-close-btn .btn-x" ).click(function() {
    //     console.log('bbbbbbbbbbbbbbbbbbb btn x hide it');
    // });
    // $( "p" ).click(function() {
    // $( this ).slideUp();

    //     console.log('pppppppppp btn x hide it');
    // });
});
$(document).on("click", ".notice-close-btn .btn-x", function(){
    // console.log('ccccccccccccccccccccccccccccc btn x hide it');
        $('.top-banner-notice').slideUp(600, function() { $(this).remove(); } );
});