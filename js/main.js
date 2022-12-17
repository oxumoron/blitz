// =========   BURGER START

let menuBtn = document.querySelector('.header__top-btn');
let menu = document.querySelector('.header__top-menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
// =========   BURGER END

$(function () {

  $('.apartments__tabs-block .apartments__link').on('click', function () {
    if (!$(this).hasClass('active')) {
      const parentTabs = $(this).closest('.apartments__tabs-block');
      parentTabs.find('.apartments__link.active, .apartments__tabs-content.active').removeClass('active');
      const elemIndex = $(this).index();
      $(this).addClass('active');
      parentTabs.find('.apartments__tabs-content').eq(elemIndex).addClass('active');
    }
  });

  $('.more__slider').slick({
    dots: true,
    // infinite: true,
    // speed: 300,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true
  });

});