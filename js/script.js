$(document).ready(function(){
	//tab code
	$('.tab_cont:first').show();
	$('.tab_nav li:first').addClass('active');

	$('.tab_nav li').click(function(event) {
		index = $(this).index();
		$('.tab_nav li').removeClass('active');
		$(this).addClass('active');
		$('.tab_cont').hide();
		$('.tab_cont').eq(index).show();
	});

	$('.tab_cont1:first').show();
	$('.tab_nav1 li:first').addClass('active');

	$('.tab_nav1 li').click(function(event) {
		index = $(this).index();
		$('.tab_nav li').removeClass('active');
		$(this).addClass('active');
		$('.tab_cont1').hide();
		$('.tab_cont1').eq(index).show();
	});


//accordian code
	$('.accordian_box:first').addClass('active')
	$('.accordian_box:first').children('.acc_trigger').children('i').addClass('fa-minus')
	$('.accordian_box:first').children('.acc_trigger').addClass('selected').next('.acc_cont').show()

	$('.acc_trigger').click(function(event){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).children('i').removeClass('fa-minus');
			$(this).next().slideUp();
			$(this).parent().removeClass('active');
		}else{
			$('.acc_trigger').removeClass('selected');
			$(this).addClass('selected');
			$('.acc_trigger').children('i').removeClass('fa-minus');
			$(this).children('i').addClass('fa-minus');
			$('.acc_trigger').next().slideUp();
			$(this).next().slideDown();
			$('.accordian_box').removeClass('active');
			$(this).parent().addClass('active');

		}
	});
});