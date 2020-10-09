$(document).ready(function(){

	$(document).on('click','.b-filter-list li',function(){
		var el = $(this).attr('data-filter');
		
		if ( !$(this).hasClass('active') ){
			$(this).parents('.b-filter-list').find('li').removeClass('active');
			$(this).parents('.b-services').find('.b-service').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
			$(this).parents('.b-filter-wrap').find('.b-filter-text span').text($(this).text());
		}
		$('.b-filter-wrap').removeClass('active');
	});

	$(document).on('click','.b-filters li',function(){
		var el = $(this).attr('data-filter');
		
		if ( !$(this).hasClass('active') ){
			$(this).parents('.b-filters').find('li').removeClass('active');
			$(this).parents('.filter-wrap').find('.b-filter-item').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
			$(this).parents('.b-filter-wrap').find('.b-filter-text span').text($(this).text());
		}
		$('.b-filter-wrap').removeClass('active');
	});

	$(document).on('click','.b-filter-text',function(){
		$(this).parents('.b-filter-wrap').toggleClass('active');
	});

	$(document).on('click',function(e){
		var container = $('.b-filter-wrap');

		if ( container.has(e.target).length === 0 ){
			container.removeClass('active');
		}
	});

	$('.b-slider-wrap').slick();
	$('.main-6-ekr-slider').slick();

	$(document).on('click','.b-slider-filter li',function(){
		var el = $(this).attr('data-filter');

		if ( !$(this).hasClass('active') ){
			$(this).parents('.b-slider-filter').find('li').removeClass('active');
			$(this).parents('.b-slider').find('.b-slider-wrap').removeClass('active');
			$(this).addClass('active');
			$(el).addClass('active');
			$('.b-slider-wrap').slick('reinit');
		}
	});

	$('.b-share input').on('focus',function(){
		$(this).select();
		document.execCommand('copy');
	});

	$(document).on('click','.b-share .btn',function(){
		$btn = $(this);
		$(this).parent('.b-share').find('input').select();
		document.execCommand('copy');
		$(this).find('span').text('Готово!');
		setTimeout(function(){
			$btn.find('span').text('Скопировать');
		},1000);
	});

	function backSize(){
		if ( $(window).width() > 1230 ){
			var bw = 730 + ($(window).width() - 1230)/2;
			$('.main-6-ekr-title-wrap .back').css('width',bw);
		} else {
			$('.main-6-ekr-title-wrap .back').removeAttr('style');
		}
	}
	backSize();

	$(window).resize(function(){
		backSize();
	});

});