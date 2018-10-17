$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();
(function(){
  if ($('.page--index').length && $(window).width() > 768) {
		var duration = 400,
			showAdvantageArrow = function() {
			setTimeout(function(){
				$('.advantage__arrow').addClass('active');
			},duration);
		},
		showChoiseImg = function() {
			setTimeout(function(){
				$('.choice__img').addClass('active')
			},duration);
		},
		addContrastClass = function() {
			$('.page--index').addClass('contrast');
		},
		removeContrastClass = function() {
			$('.page--index').removeClass('contrast');
		},
		showHeaderLogo = function() {
			$('.header__logo').removeClass('hide')
		},
		hideHeaderLogo = function() {
			$('.header__logo').addClass('hide')
		}

		$('.index-slider').slick({
			arrows: false,
			dots: true,
			speed: duration,
			fade: true,
			cssEase: 'linear',
			appendDots: $('.slider-dots'),
			customPaging: function(){
				return ' '
			}
		});

		$('.index-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			if (nextSlide != 4) {
				removeContrastClass()
			}
			if (nextSlide != 0) {
				showHeaderLogo()
			}
			switch (nextSlide) {
				case 0:
					hideHeaderLogo()
					break;
				case 1:
					showAdvantageArrow()
					break;
				case 2:
					showChoiseImg()
					break;
				case 4:
					addContrastClass()
					break;
				default:
					return false
			}
		});

		$('.link-order').click(function(){
			$('.index-slider').slick('slickGoTo', 3, false)
		});
		
		$(window).on('wheel', function(event){
			if(event.originalEvent.deltaY > 0){
				$('.index-slider').slick('slickNext')
			} else {
				$('.index-slider').slick('slickPrev')
			}
		});

		$('body').keyup(function(e) {
			if(e.which == 40){
				$('.index-slider').slick('slickNext')
			} else if(e.which == 38) {
				$('.index-slider').slick('slickPrev')
			}
		});
	}
})();
(function(){
  if($('.page--maraphon').length) {
		var duration = 400,
			flag = true,
			addContrastClass = function() {
				$('.page--maraphon').addClass('contrast');
			},
			removeContrastClass = function() {
				$('.page--maraphon').removeClass('contrast');
			},
			showHeaderLogo = function() {
				$('.header__logo').removeClass('hide');
			},
			hideHeaderLogo = function() {
				$('.header__logo').addClass('hide')
			}

		$('.maraphon-slider').slick({
			arrows: false,
			dots: true,
			speed: duration,
			fade: true,
			cssEase: 'linear',
			appendDots: $('.slider-dots'),
			customPaging: function(){
				return ' '
			}
		});

		$('.maraphon-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var target = $( event.target );
			if (target.is($('.maraphon-banner__list'))) {
				return false
			}
			if (nextSlide == 1) {
				addContrastClass()
				showHeaderLogo()
      } else {
				removeContrastClass()
				hideHeaderLogo()
			}
		});

		$('.link-order').click(function(){
			$('.maraphon-slider').slick('slickGoTo', 1, false)
		});
		
		$(window).on('wheel', function(event){
			if(event.originalEvent.deltaY > 0){
				$('.maraphon-slider').slick('slickNext')
			} else {
				$('.maraphon-slider').slick('slickPrev')
			}
		});

		$('body').keyup(function(e) {
			if(e.which == 40){
				$('.maraphon-slider').slick('slickNext')
			} else if(e.which == 38) {
				$('.maraphon-slider').slick('slickPrev')
			}
		});
	}
})();
// функция валидации формы
(function(){

	if ($('[data-validation]').length) {
		initializeValidate();
  }
  
	if($('.form').length) {
		clearForm();
	}

	function clearForm(){
		var inputs = $('.form').find('input, textarea'),
			newVal = '';

		for(i=0;i<inputs.length;i++) {
			inputs.eq(i).val(newVal);
		}
	}

	/* Validate Form */
	function initializeValidate() {
		$('[data-validation]').each(function () {
		    var validator = $(this),
		        inputs = validator.find('input:not(:checkbox, [type=hidden]), textarea'),
		        submit = validator.find('button[type=submit]'),
				stopSubmit = false;
			
		    validator.on('change keyup', 'input[data-name]', function () {
		        var elm = $(this);
		        checkValidity(elm);
		    });

		    submit.on('click', function (e) {
		        var mass = [];

		        stopSubmit = true;

		        for (var i = 0; i < inputs.length; i++) {

		            var input = inputs[i];
		            mass.push(input);

		            if (input.checkValidity() == true) {
		                var elm = input;
		                checkValidity(elm);
		            }

		            if ($(input).parent().hasClass('valid')) {
		                stopSubmit = false;
		            } else {
		                stopSubmit = true;
		                break;
		            }
            }
            if (validator.closest('page--index')) {
              $('.order__hidden').prop('value', 'Главная страница')
			}
			if (validator.closest('page--maraphon')) {
              $('.order__hidden').prop('value', 'Марафон')
            }

		        if (stopSubmit) {
		            e.preventDefault();
		        }
		    });
		});
	}

	function checkValidity(elm) {
	    var elm = $(elm),
	        val = elm.val(),
	        block = elm.parent(),
	        name_reg = /^[A-Za-zА-Яа-яЁё\-\s]+$/,
			    text_reg = /^[A-Za-zА-Яа-яёЁ\s\d]/,
	        mail_reg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
	        phone_reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/,
	        num_reg = /^\d+$/;


	    if (elm.prop('disabled')) {
	        return;
	    } else if (elm.is('[data-name="name"]')) {
	        if (name_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="email"]')) {
	        if (mail_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="phone"]')) {
	        if (phone_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="num"]')) {
	        if (num_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="text"]')) {
	        if (text_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } 
	}
})();
(function(){
	if ($('.footer__text').length) {
		$('.footer__text').lettering()
	}

	if ($('.order__label').length) {
		$('.order__input').each(function() {
			$(this).focus(function() {
					$(this).siblings('.order__label').addClass('hide');
			});
			$(this).blur(function(){
					if(!($(this).val())){
							$(this).siblings('.order__label').removeClass('hide')
					};
			});
		});
	}

	if ($('.page--maraphon').length) {
		var img = $('.header__logo').find('.logo__img'),
			src = 'app/img/general/logo-maraphon-small.png';

		img.prop('src', src);
	}

	if ($('.maraphon-banner__list').length) {
		$('.maraphon-banner__list').slick({
			infinite: true,
			speed: 20000,
			autoplay: true,
			autoplaySpeed: 0,
			cssEase: 'linear',
			arrows: false
		})
	}

	if ($('.top-banner').length && $(window).width() > 768) {
		var scene = document.getElementById('parallax-img');
		var section = document.getElementById('top-banner');
		var parallaxInstance = new Parallax(scene, {
			relativeInput: true,
			hoverOnly: true,
			inputElement: section
		});
	}

	if ($(window).width() <= 768) {
		$('.advantage__arrow').addClass('wow fadeInLeft');
		$('.choice__img').addClass('active wow fadeInLeft');
		
		if ($(window).scrollTop() >= $('.top-banner').height() / 2) {
			$('.header').removeClass('fixed');
			$('.header__logo').removeClass('hide');
		} else {
			$('.header').addClass('fixed');
			$('.header__logo').addClass('hide');
		}
		$(window).on('scroll', function(){
			if ($(window).scrollTop() >= $('.top-banner').height() - 100) {
				$('.header').removeClass('fixed');
				$('.header__logo').removeClass('hide');
			} else {
				$('.header').addClass('fixed');
				$('.header__logo').addClass('hide');
			}
		});
	}

	if ($('.page--thanks').length) {
		$('.header__logo').removeClass('hide');
		$('.thanks__arrow').addClass('active');

		setTimeout(function(){
			window.location.replace("/");
		},4000);
	}
})();