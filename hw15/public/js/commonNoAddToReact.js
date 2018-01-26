$(function() {


  $('.testimonials-carousel').slick({
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.testimonials-thumb-nav'
  });
  $('.testimonials-thumb-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.testimonials-carousel',
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    initialSlide: 1
  });

  let faqItem = $('.faq-item');

  faqItem.on('show.bs.collapse', function () {
    $(this).find('i').addClass('fa-minus')
  });
  faqItem.on('hide.bs.collapse', function () {
    $(this).find('i').removeClass('fa-minus')
  });

  //MASONRY

  $('.blog-gallery').masonry({
    itemSelector: '.blog-item'
  });

  $('a[href="#"], button').on('click', function (event) {
    event.preventDefault();
  })

});