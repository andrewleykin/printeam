(function(){
  if($('.page--index').length) {
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