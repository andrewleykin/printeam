(function(){
  if($('.page--maraphon').length) {
		var duration = 400,
		addContrastClass = function() {
			$('.page--maraphon').addClass('contrast');
		},
		removeContrastClass = function() {
			$('.page--maraphon').removeClass('contrast');
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
			if (nextSlide == 1) {
        addContrastClass()
      } else {
        removeContrastClass()
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