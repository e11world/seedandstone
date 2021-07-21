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
    var newHeading = "<h1>Important Note:</h1>";
    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = "<em>Lorem Ipsum is dummy text...</em>";

    $("body").prepend(banner_popup);
    $(banner_popup).wrap('<div class="top_banner_wrapper"></div>').parent();
    $(banner_popup).append(newHeading, newParagraph);
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
    var delivery_notice_banner = $(banner_popup).parent();

    // var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    var inFifteenSeconds = new Date(new Date().getTime() + 10 * 1000);


    // var date = new Date();
    // date.setTime(date.getTime() + (8 * 1000));

	$.cookie('delivery_notice_banner', 'yes', {
		expires: 1,
		// expires: date,
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
}
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