
// ANIMATIONS

// PAGE ANIMATION

// Works on internal links, ignores external links or links containing #
function internalLink(myLink) {
    return (myLink.host == window.location.host);
}
$('a').each(function() {
  if (internalLink(this) && (this).href.indexOf('#') === -1) {
  $(this).click(function(e){
  e.preventDefault();
  var moduleURL = jQuery(this).attr("href");
  setTimeout( function() { window.location = moduleURL }, 700 );
  // Class that has page out interaction tied to click
  $('.page-transition').click();
});
    }
});









// LETTER ANIMATIONS

/*
add these to css/html
<style>.letter {display: inline-block;} .animWord {white-space: nowrap;}</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"></script>
*/



// Find all text with .anim-letter class and break each letter into a span
var animWord = document.getElementsByClassName("anim-letter");
for (var i = 0; i < animWord.length; i++) {

var wordWrap = animWord.item(i);
wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="anim-word">$2</span>');

}


var animLetter = document.getElementsByClassName("anim-word");
for (var i = 0; i < animLetter.length; i++) {

   var letterWrap = animLetter.item(i);
   letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}



// Slide In Animation
var slideIn = anime.timeline({
  loop: false,
  autoplay: false,
});

slideIn
  .add({
    targets: '.slide-in .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
 }).add({
    targets: '.slide-in',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

// Slide Up Animation
var slideUp = anime.timeline({
  loop: false,
  autoplay: false,
});

slideUp
    .add({
    targets: '.slide-up .letter',
    translateY: ["1.1em", 0],
    opacity: [0,1],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.slide-up',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  
// Fade Up ONLY Animation
var fadeUpOnly = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpOnly 
  .add({
    targets: '.fade-up-only .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  })
  


// Fade Up ONLY Animation social links
var fadeUpOnlySocialMediaLinks = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpOnlySocialMediaLinks 
  .add({
    targets: '.hero-social-media-link',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 150 * i
  })
  


// Fade Up ONLY Animation social links
var fadeUpOnlyHdrLogo = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpOnlyHdrLogo 
  .add({
    targets: '.brand',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 150 * i
  })

  
// Fade Up ONLY Animation social links
var fadeUpOnlyHdrNav = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpOnlyHdrNav 
  .add({
    targets: '.nav-link',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 150 * i
  })

  
// Fade Up ONLY Animation social links
var fadeUpOnlyHdrSeachCart = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpOnlyHdrSeachCart 
  .add({
    targets: '.nav-menu > div',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 1000 + 150 * i
  })
  
  
  


  // Fade Up ONLY Animation
var fadeUpOnlyOnScroll = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUpOnlyOnScroll 
  .add({
    targets: '.fade-up-only-scroll .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  })
  

// Fade Up Animation and out
var fadeUp = anime.timeline({
  loop: false,
  autoplay: false,
});

fadeUp 
  .add({
    targets: '.fade-up .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.fade-up .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });
  
  
// Rotate In Animation
var rotateIn = anime.timeline({
  loop: false,
  autoplay: false,
});

rotateIn 
    .add({
    targets: '.rotate-in .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.rotate-in',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

// Pop In Animation
var popIn = anime.timeline({
  loop: false,
  autoplay: false,
});

popIn
    .add({
    targets: '.pop-in .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.pop-in',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

// Play your animation with these
fadeUp.play();
slideUp.play();
slideIn.play();
rotateIn.play();
popIn.play();



// Wait before playing animation
setTimeout(() => {  
	// Put the play below this line
    fadeUpOnlyHdrLogo.play();
}, 100);
setTimeout(() => {  
	// Put the play below this line
    fadeUpOnlyHdrNav.play();
}, 350);
setTimeout(() => {  
	// Put the play below this line
    fadeUpOnlyHdrSeachCart.play();
}, 900);
setTimeout(() => {  
	// Put the play below this line
    fadeUpOnly.play();
}, 1500);
setTimeout(() => {  
	// Put the play below this line
    fadeUpOnlySocialMediaLinks.play();
}, 2000);


// Play animaton when something is clicked
$( ".your-button-class" ).click(function() {
	// Put the play below this line
});


// Play animaton when hovered in
$( ".your-button-class" ).mouseenter(function() {
		// Put the play below this line
});

// Play animation when scrolled into view
$('.main-title-lg').on('inview', function(event, isInView) {
  if (isInView) {
      
    fadeUpOnlyOnScroll.play();
    fadeUpOnlyOnScroll.restart();
		// Put the play below this line
  } else {
  }
});