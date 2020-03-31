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

	$(document).on('click','.b-filter-text',function(){
		$(this).parents('.b-filter-wrap').toggleClass('active');
	});

	$(document).on('click',function(e){
		var container = $('.b-filter-wrap');
		if ( container.has(e.target).length === 0 ){
			container.removeClass('active');
		}
	});

});