/*!
 * Simple Age Verification (https://github.com/Herudea/age-verification))
 */

var modal_content,
modal_screen;

var animated_bg = $(".animated-bg")
// Start Working ASAP.
// if(document.URL.indexOf("foo_page.html") >= 0){ 
$(document).ready(function() {
	// if(window.location.href === "https://seed-and-stone-2021.webflow.io/terms"){
	if (window.location.href.indexOf("terms") > -1) {
		$('.animated-bg').css({'display' : 'none'});
	} else if (window.location.href.indexOf("purchase-terms") > -1){
		$('.animated-bg').css({'display' : 'none'});
		
	} else {
		av_legality_check();
	}
	
});


av_legality_check = function() {
	if ($.cookie('is_legal_age') == "yes") {
		// legal!
		// Do nothing?
		hide_animated_bg();
		$('body').css({'overflow-y':'initial', 'position': 'static', 'height' : 'initial'});
		$('.vanta-canvas').css({'display' : 'none'});
	} else {
		av_showmodal();
		$('body').css({'overflow-y':'hidden', 'height' : '100vh'});
		// $('body').css({'overflow-y':'hidden', 'position': 'fixed', 'height' : '100vh', 'opacity' : '1'});
		$('.animated-bg').css({'opacity' : '1'});
		// Make sure the prompt stays in the middle.
		// $(window).on('resize', av_positionPrompt);
	}
};

av_showmodal = function() {
	// animated_bg = $('<div id="animated-bg"></div>');
	modal_screen = $('<div id="modal_screen"></div>');
	modal_content = $('<div id="modal_content"></div>');
	var modal_content_wrapper = $('<div id="modal_content_wrapper" class="content_wrapper"></div>');
	var modal_regret_wrapper = $('<div id="modal_regret_wrapper" class="content_wrapper" style="display:none;"></div>');

	// Question Content
	var content_heading = $('<h2>Are you 19 or older?</h2>');
	var content_buttons = $('<nav><ul><li><a href="#nothing" class="av_btn av_go" rel="yes">Yes</a></li><li><a href="#nothing" class="av_btn av_no" rel="no">No</a></li></nav>');
	var content_text = $('<p>You must verify that you are 19 years of age or older to enter this site.</p><br><p>By clicking yes, you agree to the <a href="/terms">Website Use Terms</a> of this website</p>');

	// Regret Content
	var regret_heading = $('<h2>We\'re Sorry!</h2>');
	var regret_buttons = $('<nav><small>I hit the wrong button!</small> <ul><li><a href="#nothing" class="av_btn av_go" rel="yes">I\'m old enough!</a></li></ul></nav>');
	var regret_text = $('<p>You must be 19 years of age or older to enter this site.</p>');

	modal_content_wrapper.append(content_heading, content_buttons, content_text);
	modal_regret_wrapper.append(regret_heading, regret_buttons, regret_text);
	modal_content.append(modal_content_wrapper, modal_regret_wrapper);

	// Append the prompt to the end of the document
	$('.cookiez').fadeIn('1500');
	// 
	$('.cookiez').append(modal_screen, modal_content);
	$('.cookiez .modal_content').fadeIn('1500');
	// $('.cookiez').prepend(animated_bg);

	// Center the box
	// av_positionPrompt();

	modal_content.find('a.av_btn').on('click', av_setCookie);
};

av_setCookie = function(e) {
	e.preventDefault();

	var is_legal_age = $(e.currentTarget).attr('rel');

	$.cookie('is_legal_age', is_legal_age, {
		expires: 30,
		path: '/'
	});

	if (is_legal_age == "yes") {
		av_closeModal();
		// $(window).off('resize');
		$('body').css({'overflow-y':'initial', 'position': 'static', 'height' : 'initial'});
		// $('body').css({'overflow-y':'initial', 'position': 'initial', 'height' : 'initial'});
	} else {
		av_showRegret();
	}
};

av_closeModal = function() {
	modal_content.fadeOut("slow", function() {
        modal_content.attr("style", "display: none !important");
    });
	modal_screen.fadeOut();

	animated_bg.find('.vanta-canvas').fadeOut(1000);
	animated_bg.find('.cookiez').fadeOut(1000);

	$(this).delay(1000).queue(function() { 
		hide_animated_bg();
     $(this).dequeue();

  });
};

av_showRegret = function() {
	modal_content.addClass('nope');
	modal_content.find('#modal_content_wrapper').hide();
	modal_content.find('#modal_regret_wrapper').show();
	
};

hide_animated_bg = function() {
	animated_bg.hide();
	$(".animated-bg").css({display:"none"});
};

av_positionPrompt = function() {
	// var top = ($(window).outerHeight() - $('#modal_content').outerHeight()) / 2;
	// var left = ($(window).outerWidth() - $('#modal_content').outerWidth()) / 2;
	modal_content.css({
		// 'top': top,
		// 'left': left
	});

	if (modal_content.is(':hidden') && ($.cookie('is_legal_age') != "yes")) {
		modal_content.fadeIn('slow');
		animated_bg.fadeIn('slow');
	} 
};
