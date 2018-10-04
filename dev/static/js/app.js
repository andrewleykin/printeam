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
})();