$(document).ready(function () {
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
});

function updateContainer() {
	var toggled = false;
  
    if ($(window).width() < 769 && !toggled) {
      //console.log('smalleraaa');
      $('a.dropdown-header').attr('href', 'javascript:void(true)');

      $('.nav-button-animated').on('click', function(e){
        
        //console.log('mob menu click');
        //e.stopImmediatePropagation();
        e.preventDefault();
       
       if( $('.nav-button-animated').hasClass('w--open') ) {
          //$('.subNav').attr('aria-expanded', 'true').removeClass('hidden');
         //console.log('NOT x mob menu');
         $('.sub-menu-parent .sub-menu').removeClass("open").hide(); 
        }
        else {
          //$('.subNav').attr('aria-expanded', 'false').addClass('hidden');
          //console.log('x mob menu');
        }
      })

      $('.dropdown-header').on('click', function(e){

        //console.log('shop clicked');
        toggled = true;
        e.preventDefault();
        //e.stopImmediatePropagation();
        //$(this).next($('.sub-menu')).removeClass("open");
        //$(this).attr('href', '#shop');
        //$(this).next($('.sub-menu')).stop().slideToggle(300);
        //$(this).next($('.sub-menu')).stop().css('display', 'none').slideToggle(300);
        //$(this).next($('.sub-menu')).toggleClass('open').slideToggle(300);
        $(this).next($('.sub-menu')).stop().slideToggle(300).toggleClass("open");
      })

    } else {
    	toggled = false;
        //console.log('biiiiiiiiiiiiiiiiiig');
        $('a.dropdown-header').attr('href', '/shop?dtche%5Bpath%5D=locations');
        $('.sub-menu-parent .sub-menu').removeClass('open');
  	}    
    
}
