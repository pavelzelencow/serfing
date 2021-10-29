$(function () {

$('.header__slider').slick({
    infinity: true,
    fade: true,
    prevArrow: '<button type="button" class="slider-arrows slider-arrows-left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slider-arrows slider-arrows-right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
    asNavFor: '.slider-dotshead',
});

$('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
})

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slider-arrows slider-arrows-left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slider-arrows slider-arrows-right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
    asNavFor: '.slider-map', 
})

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
})

$('.holder__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button type="button" class="slider-arrows slider-arrows-left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slider-arrows slider-arrows-right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
});

$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', function(){
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);
});

let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');

$('.summ').html('$' + summ);

$('.surfboard-box__circle').on('click', function(){
  $(this).toggleClass('active')  
});

new WOW().init();

});