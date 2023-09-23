$(function(){
	$('.header__slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
		fade: true,
		responsive: [
		{
			breakpoint: 371,
			settings: {
				dots: false,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000,
			}
		}
		]
	});

	$('.produkt__name').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.produkt__content',
		vertical: true,
		prevArrow: '<button type="button" class="produkt-prev"><img src="images/produkt-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="produkt-next"><img src="images/produkt-next.svg" alt=""></button>',
		responsive: [
		{
			breakpoint: 891,
			settings: {
				arrows: false,
				vertical: false,
				slidesToShow: 3,
				dots: true
			},
			breakpoint: 461,
			settings: {
				arrows: false,
				vertical: false,
				slidesToShow: 1,
				dots: true
			}
		}
		]
	});
	$('.produkt__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.produkt__name',
		fade: true,
		arrows: false
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});

});