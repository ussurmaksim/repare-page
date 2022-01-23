

  let carousel = $('.top-slide');
let dots = $(carousel).next();
$(carousel).find('.item img').each(function() {
let ico = $(this).attr('src');
dots.append('<span class="img" style="background: url('+ico+')"></span>');
});
carousel.owlCarousel({

items: 1,
autoplay: true,
autoplayTimeout:6000,
nav: false,
dots: true,
loop: true,
animateOut: 'fadeOut',
dotsContainer: dots,/*Указываем класс блока пагинации*/
autoplayHoverPause: true,
onInitialized: carouselInitialized
});
dots.appendTo(carousel);
function carouselInitialized () {
dots.find('.img').click(function () {
carousel.trigger('to.owl.carousel', [$(this).index(), 300]);
});
}

