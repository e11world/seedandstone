/*!
 * Simple Age Verification (https://github.com/Herudea/age-verification))
 */


var modal_content,
modal_screen;

var animated_bg = $(".animated-bg")
// Start Working ASAP.
// if(document.URL.indexOf("foo_page.html") >= 0){
var href = window.location.href;

$(document).on('click', '.av_go', function(){ 
    //  $(this).animate({"border-color":"#ff7f30"});
	 $("#modal_content nav li a.av_btn.av_go").css("border"," solid 2px #ff7f30");
	//  $("#modal_content nav li a.av_btn .av_go").css({"border":" solid 2px #ff7f30","font-size":"24px","color":"#eee"});

	store_selection = $('<div class="store-selection"><a href="#chilliwack" class="store-chilliwack" rel="chilliwack"><h3>chilliwack</h3> | <a href="#victoria" class="store-chilliwack" rel="victoria"><h3>victoria</h3></div>');
	$('#modal_content_wrapper').append(store_selection);
	store_selection.find('a').on('click', setStoreSelectionCookie);

	//  console.log('go yesaaaaaaaaaaaaa');
});

$(document).ready(function() {
	

	// if(window.location.href === "https://seed-and-stone-2021.webflow.io/terms"){
    // $('.animated-bg').css({'display' : 'none'});
	if (href.indexOf("terms") > -1) {
		hide_animated_bg();
	} else if (href.indexOf("purchase-terms") > -1){
		hide_animated_bg();
	} else {
		av_legality_check();
		onlyShopPages();
	}

	
	// if (window.location.href.indexOf("shop-victoria") > -1) {

	// }

	
	// if (href.indexOf("/ucpoolvehicles") != -1) {
    //     $("ul.sub li a:eq(0)").addClass("current");
    // } else if (href.indexOf("/car-rental") != -1) {
    //     $("ul.sub li a:eq(1)").addClass("current");
    // } else if (href.indexOf("/private-vehicle-usage") != -1) {
    //     $("ul.sub li a:eq(2)").addClass("current");
    // }



	// if (window.location.href.indexOf("terms") > -1) {
	// if (window.location.origin + "/" == window.location.href ) {	
	// 	console.log('home page');
        
	//     store_selection = $('<div class="store-selection"><a href="#chilliwack" class="store-chilliwack" rel="chilliwack"><h3>chilliwack</h3> | <a href="#victoria" class="store-chilliwack" rel="victoria"><h3>victoria</h3></div>');
        
	//     $('#modal_content_wrapper').append(store_selection);      
    // 	store_selection.find('a').on('click', setStoreSelectionCookie);

	// } else {
	// 	console.log('NOT home page');
	// }
	
});

setStoreSelectionCookie = function(e) {
	e.preventDefault();

	var store_location_selected = $(e.currentTarget).attr('rel');

    var date = new Date();
    date.setTime(date.getTime() + (83 * 1000));
	
	if (store_location_selected == "victoria") {
        // console.log('store is victoria');
        $.cookie('store_location_selected', store_location_selected, {
            expires: 7,
            // expires: date,
            path: '/'
        });
	} else if (store_location_selected == "chilliwack") {
        // console.log('store is chilliwack');
        $.cookie('store_location_selected', store_location_selected, {
            expires: 7,
            // expires: date,
            path: '/'
        });
	}
	
	replaceHPLinks(store_location_selected);

	checkBoth(store_location_selected);
	// console.log('nowwww', store_location_selected);
};

replaceHPLinks = function(store_location_selected) {
	
	// console.log('test', store_location_selected);

	// var newurl = $('.car-head-make a').attr('href');
	// newurl = newurl.replace('old','new');
	// $('.newlink').attr('href', url);


	if (store_location_selected == "victoria"){
		// console.log('replace to victoria');

		// LINKS TO REPLACE FOR PRODUCTS ON HOMEPAGE (after getting proper links in webflow for each product/category - default: chilliwack)
		
		$('.best-seller-item > a').attr('href',function(index,attr){
			return attr.replace('/shop?dtche%5Bpath%5D=locations','victoria');
		});

		// $('.best-seller-item > a').attr('href',function(index,attr){
		// 	return attr.replace('chilliwack','victoria');
		// });

		$('a .best-seller-item-link').attr('href',function(index,attr){
			return attr.replace('chilliwack','victoria');
		});

		$('a.mood-item-link').attr('href',function(index,attr){
			return attr.replace('chilliwack','victoria');
		});

		// $('a.category-title-icon').attr('href',function(index,attr){
		// 	return attr.replace('chilliwack','victoria');
		// });
		$('.category-item a').attr('href',function(index,attr){
			return attr.replace('chilliwack','victoria');
		});
		
		$('.otherlink').each(function(){
			$(this).children('a').attr("href", "/"+$(this).find('div').text());
			$(this).children('a').replace("href", "/");
		});

		
	}


	
	// https://www.seedandstone.com/shop?dtche%5Bpath%5D=locations
    // https://www.seedandstone.com/shop?dtche%5Bproduct%5D=citizen-stash-mac-1
    // https://www.seedandstone.com/shop?dtche%5Bsubcategories%5D=drinks&dtche%5Bcategory%5D=edibles
    // https://www.seedandstone.com/shop-chilliwack?dtche%5Bcategory%5D=vaporizers
    // https://www.seedandstone.com/shop?dtche%5Bcategory%5D=vaporizers&dtche%5Blocation%5D=seed-and-stone1
    // https://www.seedandstone.com/shop?dtche%5Bcategory%5D=vaporizers&dtche%5Blocation%5D=seed-and-stone-victoria-gordon-st
}

redirectPage = function(store_location_selected) {
	
	
	// console.log('test', store_location_selected);
	if (store_location_selected == "victoria"){
		// console.log("shop-" + store_location_selected);
		window.location = "/shop-" + store_location_selected;

		// var url = $(this).val(); // get selected value
		// if (url) { // require a URL
		// 	window.location = url; // redirect
		// }
		// return false;
	} else if (store_location_selected == "chilliwack"){
		// console.log("shop-" + store_location_selected);
		window.location = "/shop-" + store_location_selected;
		// var url = $(this).val(); // get selected value
		// if (url) { // require a URL
		// 	window.location = url; // redirect
		// }
		// return false;
	} 
	
	// console.log('finish stuff');
}
// function goToPage() {
//     window.location.href = 'http://www.mypage.com/info#load-stuff;
// }
// function pageLoad() {
//     if (window.location.hash === "#load-stuff") {
//         $('.my_class').load('my/url/path/with/content/to/load');
//     }
// }

checkBoth = function(store_location_selected) {

	if ( ($.cookie('store_location_selected')) && ($.cookie('is_legal_age')) ) {
		// console.log('have both cookies');
		
		if (window.location.origin + "/" == window.location.href ) {
 			replaceHPLinks(store_location_selected);
			 console.log('replace all links');
		// } else if (window.location.pathname == "shop") {
		// 	console.log('on shop page 1');
 			// redirectStuff();
		} else if (href.indexOf("shop") > -1) {
			console.log('any url with shop page');
			redirectPage(store_location_selected);
		// } else if (href.indexOf("/shop-victoria") != -1) {
		// 	// $("#animated-bg").addClass("no-click");
		// 	console.log('in victoria');
		// 	// hide_animated_bg();
		// } else if (href.indexOf("/shop-chilliwack") != -1) {
		// 	console.log('in chilliwack');
		// 	// $("#animated-bg").addClass("no-click chilliwack-pg");
		}  else {
			// console.log('done all CHEKUPSAA');
		}
		console.log('both done now');
		av_closeModal();
	} else if ( (!!$.cookie('store_location_selected')) && ($.cookie('is_legal_age')) ) {
		console.log('must work now');
	} else {
		console.log('not both cookies set');
	}
}



function onlyShopPages() {
	if ( ($.cookie('store_location_selected')) && ($.cookie('is_legal_age')) ) {
		// console.log('have both cookies');
		if (href.indexOf("/shop-victoria") != -1 || href.indexOf("/shop-chilliwack") != -1) {
			// console.log('in victoria');
			// $("#animated-bg").addClass("no-click");
			av_closeModal();
			hide_animated_bg();
		} 
		// else if (href.indexOf("/shop-chilliwack") != -1) {
		// 	console.log('in chilliwack');
		// 	$("#animated-bg").addClass("no-click chilliwack-pg");
		// }  
	}
}

// deleteCookie("myCookie");
//delete cookie
function deleteCookie(name) {
    //  setCookie(name,"",-1);
	 $.cookie(name, null, { path: '/' });
 }

av_legality_check = function() {
	// if (modal_content.is(':hidden') && ($.cookie('is_legal_age') != "yes")) {

 	// var cookieExist = $.cookie("is_legal_age");

    // if(!cookieExist ){
	// 	console.log('legal not set');
	// }

	// console.log($.cookie('is_legal_age'))
	// console.log($.cookie('store_location_selected'))

	if (!$.cookie('is_legal_age') || $.cookie('is_legal_age') === 'no'  || !$.cookie('store_location_selected')) {
		av_showmodal()
	}  else if ( (!!$.cookie('store_location_selected')) && ($.cookie('is_legal_age')) )  {
		console.log('ALL DONE');
		av_closeModal();
	}
		
	// if ( ($.cookie('is_legal_age') == null) || ($.cookie('is_legal_age') == "no") && (!$.cookie('store_location_selected')) ) {
	// if ( ($.cookie('is_legal_age') == null) || ($.cookie('is_legal_age') == "no") && ($.cookie('store_location_selected') == null) ) {
	// 	av_showmodal();
	// 	console.log('both need selection');
	// } else if ($.cookie('store_location_selected') == null) {
	// 	console.log('only legal is set');
	// 	// checkBoth();
	// } else {
	// 	console.log('done checks');
	// 	av_closeModal();

	// 	// $('body').css({'overflow-y':'hidden', 'position': 'fixed', 'height' : '100vh', 'opacity' : '1'});
	// 	// Make sure the prompt stays in the middle.
	// 	// $(window).on('resize', av_positionPrompt);
	// }
};


av_showmodal = function() {
	animated_bg = $('<div id="animated-bg"></div>');
	modal_screen = $('<div id="modal_screen"></div>');
	modal_content = $('<div id="modal_content"></div>');
	var modal_content_wrapper = $('<div id="modal_content_wrapper" class="content_wrapper"></div>');
	var modal_regret_wrapper = $('<div id="modal_regret_wrapper" class="content_wrapper" style="display:none;"></div>');

	// Question Content
	var content_heading = $('<h2>Are you 19 or older?</h2>');
	var content_buttons = $('<nav><ul><li><a href="#" class="av_btn av_go" rel="yes">Yes</a></li><li><a href="#" class="av_btn av_no" rel="no">No</a></li></nav>');
	var content_text = $('<p>You must verify that you are 19 years of age or older to enter this site.</p><br><p>By clicking yes, you agree to the <a href="/terms">Website Use Terms</a> of this website</p>');

	// Regret Content
	var regret_heading = $('<h2>We\'re Sorry!</h2>');
	var regret_buttons = $('<nav><small>You must also select a store location.</small> <ul><li><a href="#" style="padding: .6em .8em; color: #fff;line-height: 4; letter-spacing: 0;   text-transform: uppercase; border: 2px solid #fff;" class="" onclick="av_backToChoices();">Let\'s do this again!</a></li></ul></nav>');
	var regret_text = $('<p>You must be 19 years of age or older to enter this site.</p>');

	modal_content_wrapper.append(content_heading, content_buttons, content_text);
	modal_regret_wrapper.append(regret_heading, regret_text, regret_buttons);
	modal_content.append(modal_content_wrapper, modal_regret_wrapper);

	// Append the prompt to the end of the document

	$('body').css({'overflow-y':'hidden', 'height' : '100vh'});
	$('.animated-bg').css({'opacity' : '1'});
	
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

 	// var cookieExist = $.cookie("store_location_selected");

    // if(cookieExist == "null" ){
	// 	console.log('store_location_selected not set');

	// }

	if (is_legal_age == "yes") {
		checkBoth();
		
		// modal_content.find('a.av_btn').on('click', setStoreSelectionCookie);
		// uncomment 2 lines
		// av_closeModal();
		// $('body').css({'overflow-y':'initial', 'position': 'static', 'height' : 'initial'});

		// $(window).off('resize');
		// $('body').css({'overflow-y':'initial', 'position': 'initial', 'height' : 'initial'});
	} else {
		av_showRegret();
	}
};

av_closeModal = function() {
	console.log('close model');
	$('#modal_content').fadeOut("slow", function() {
        $(this).attr("style", "display: none !important");
    });
	$('#modal_screen').fadeOut();
	
	$('body').css({'overflow-y':'initial', 'position': 'static', 'height' : 'initial'});
	$('.vanta-canvas').css({'display' : 'none'});

	// animated_bg.find('.vanta-canvas').fadeOut(1000);
	// animated_bg.find('.cookiez').fadeOut(1000);
	// hide_animated_bg();
	setTimeout(hide_animated_bg, 1000);

	// $('.animated-bg').delay(1000).queue(function() { 
	// 	hide_animated_bg();
	// 	$(this).dequeue();
  	// });
};
hide_animated_bg = function() {
	console.log('hide anim bg');
	$('.animated-bg').css({'display' : 'none'});
	$(".animated-bg").hide();
	$(".animated-bg").css({display:"none"});
};

$(document).ready(function() {
	av_backToChoices = function() {
		console.log('backagain');
		$('#modal_content').removeClass('nope');
		$('#modal_regret_wrapper').hide();
		$('#modal_content_wrapper').show();
	};
});

av_showRegret = function() {
	$('#modal_content').addClass('nope');
	$('#modal_content').find('#modal_content_wrapper').hide();
	$('#modal_content').find('#modal_regret_wrapper').show();
};


av_positionPrompt = function() {
	// var top = ($(window).outerHeight() - $('#modal_content').outerHeight()) / 2;
	// var left = ($(window).outerWidth() - $('#modal_content').outerWidth()) / 2;
	$('#modal_content').css({
		// 'top': top,
		// 'left': left
	});

	if (modal_content.is(':hidden') && ($.cookie('is_legal_age') != "yes")) {
		modal_content.fadeIn('slow');
		// animated_bg.fadeIn('slow');
	} 
};