/*!
 * Simple Age Verification (https://github.com/Herudea/age-verification))
 */
var banner_popup, sidebar_popup;

$(document).ready(function(){
    check_cookie_delivery_notice_banner();
    check_cookie_delivery_notice_sidebar_popup();
});
check_cookie_delivery_notice_banner = function() {
	if ($.cookie('delivery_notice_banner')) {
		hide_delivery_notice_banner();
	} else {
		show_delivery_notice_banner();
	}
};

check_cookie_delivery_notice_sidebar_popup = function() {
	if ($.cookie('delivery_notice_sidebar_popup')) {
		hide_delivery_notice_sidebar_popup();
	} else {
		show_delivery_notice_sidebar_popup();
	}
};

show_delivery_notice_banner = function() {
    var banner_popup = document.createElement("div")
    banner_popup.classList.add('notice-content')
    var noticeText = 'Delivering Now. Shop online or call <a href="tel:+18885757333" class="notice-link"><strong><em class="italic-text-2">888 575-7333</em></strong></a><strong class="bold-text-2"><em class="italic-text-3"> to place your order.</em></strong>';
    var actionBtn = document.createElement("p");
    actionBtn.innerHTML = '<a href="/shop?dtche%5Bpath%5D=locations" class="notice-link notice-btn-action"><strong><em class="italic-text">Shop Now</em></strong></a>';
    var closeBtn = '<div class="notice-close-btn"><a href="#" class="btn-x w-inline-block"><img src="https://uploads-ssl.webflow.com/604bf2ef08cd1b653a122272/607f4b951fa7c436d0f0fb5f_plus.svg" alt="Plus Icon" class="close-x" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;"></a></div>';

    setTimeout(function(){
        $("body").prepend( $(banner_popup).hide().delay(500).show('slow') );
        $(banner_popup).wrap('<div class="notice top-banner-notice"></div>').parent();
        $(banner_popup).append('<div class="notice-text">'+noticeText+actionBtn.innerHTML,closeBtn+'</div>');
        $(banner_popup).slideDown('900');
    }, 2000);

    banner_setCookie();
};
banner_setCookie = function() {

    var date = new Date();
    date.setTime(date.getTime() + (11 * 1000));

	$.cookie('delivery_notice_banner', 'yes', {
		expires: 1,
		// expires: date,
		path: '/'
	});
};

hide_delivery_notice_banner = function() {
    $('.top-banner-notice').remove();
}

setTimeout(function(){
    $('.top-banner-notice').slideUp(600, function() { $(this).remove(); } );
}, 11000);


// $(document).ready(function(){
//     $('.notice-close-btn .btn-x').click(function() {
//         console.log('notice-close-btn btn x hide it');
//         // $('.top-banner-notice').slideUp(600, function() { $(this).remove(); } );
//     });
// });
$(document).on("click", ".notice-close-btn .btn-x", function(){
        $('.top-banner-notice').slideUp(600, function() { $(this).remove(); } );
});








show_delivery_notice_sidebar_popup = function() {
    var sidebar_popup = document.createElement("div")
    sidebar_popup.classList.add('popup-inner')
    var noticeText = '<img src="https://uploads-ssl.webflow.com/604bf2ef08cd1b653a122272/60d3a5622b090254d48346c2_seedandstone-logo.svg" loading="lazy" alt="" class="popup-logo"><h4 class="popup-title"><span class="popup-title-bold">Delivering</span>Now</h4><div class="popup-text">Free <span class="popup-text-special">same-day delivery</span> on applicable orders<span class="popup-text-special"></span></div><a href="/shop?dtche%5Bpath%5D=locations" class="popup-btn-action w-inline-block"><div class="popup-action-btn-text">View Menu</div></a>';
    var actionBtn = document.createElement("p");
    actionBtn.innerHTML = '<img src="https://uploads-ssl.webflow.com/604bf2ef08cd1b653a122272/60d3a5622b090254d48346c2_seedandstone-logo.svg" loading="lazy" alt="" class="popup-logo">';
    var closeBtn = '<a href="#" class="popup-btn-close w-inline-block"><div class="popup-btn-close-text">Close</div><img src="https://uploads-ssl.webflow.com/604bf2ef08cd1b653a122272/607f4b951fa7c436d0f0fb5f_plus.svg" loading="lazy" alt="Plus Icon" class="popup-x"></a>';

    setTimeout(function(){
        $("body").prepend( $(sidebar_popup).hide().delay(500).show('slow').css("display", "block") );
        $(sidebar_popup).wrap('<div class="pinned-popup pinned-popup-notice popup-delivery"></div>').parent();
        $(sidebar_popup).append('<div class="notice-text">'+closeBtn+noticeText+'</div>');
        // $(sidebar_popup).slideDown('900');
        $('.popup-inner .notice-text').css({"textAlign":"right","display":"flex","flexDirection":"column"});
        // $('.pinned-popup.popup-delivery').attr('style', 'display: block !important');
    // $('.pinned-popup.popup-delivery').fadeIn(500).css("display", "block !important").show();
    // $('.pinned-popup.popup-delivery').css("display", "block !important");
    $('.pinned-popup.popup-delivery').addClass('animate-sidebar-popup');
    }, 5000);

    sidebar_popup_setCookie();
};
sidebar_popup_setCookie = function() {
    var date = new Date();
    date.setTime(date.getTime() + (11 * 1000));

	$.cookie('delivery_notice_sidebar_popup', 'yes', {
		expires: 1,
		// expires: date,
		path: '/'
	});
};

hide_delivery_notice_sidebar_popup = function() {
    $('.pinned-popup-notice').remove();
}

setTimeout(function(){
    $('.pinned-popup-notice').slideUp(600, function() { $(this).remove(); } );
}, 25000);

$(document).on("click", ".pinned-popup-notice .popup-btn-close", function(){
        $('.pinned-popup-notice').slideUp(600, function() { $(this).remove(); } );
});
