const swiper = new Swiper('.hdr__swiper', {
  // Optional parameters
  loop: true,

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