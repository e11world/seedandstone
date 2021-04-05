// slider on home page (best seller)

var slider = tns({
  container: '.best-sellers-list',
  items: 4,
  loop: true,
  edgePadding: 0,
  mouseDrag: true,
  arrowKeys: true,
  "slideBy": 1,
  "swipeAngle": false,
  autoplayButtonOutput: false,
  controlsContainer: "#customize-controls",
  gutter: 80,
  responsive: {
    320: {
      edgePadding: 0,
      gutter: 10,
      items: 1
    },
    640: {
      edgePadding: 0,
      gutter: 20,
      items: 2
    },
    700: {
      gutter: 30
    },
    900: {
      items: 4
    }
  }
});

document.querySelector(".next").onclick = () => {
  slider.goTo("next");
};

document.querySelector(".prev").onclick = () => {
  slider.goTo("prev");
};

const slideCount = () => {
  const info = slider.getInfo();
  const slideCount = `slideCount: ${info.slideCount}`;
  const items = `items: ${info.items}`;
  //   console.log(slideCount, items);
};

window.onresize = function(e) {
  slideCount();
};

slideCount();
