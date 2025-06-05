var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: "auto",
  speed: 1000,
  coverflowEffect: {
    rotate: -17,
  stretch: -15,
  depth: 330,
  modifier:1,
    slideShadows: true,
  },
  autoplay:{

    delay:5000,
    disableOnInteraction:false,
  }
  

  // rotate: 0,
  //   stretch: 0,
  //   depth: 150,
  //   modifier: 2.5,
});

// Initialize Magnific Popup gallery
$(document).ready(function () {
  $('.mySwiper').magnificPopup({
    delegate: 'a.popup-gallery',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});