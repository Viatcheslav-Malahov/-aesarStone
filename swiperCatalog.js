const swiper = new Swiper('.product__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    1920: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1680: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: "fraction",
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.hdr__swiper-button-next',
    prevEl: '.hdr__swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});