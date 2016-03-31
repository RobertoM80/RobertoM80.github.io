$(document).ready(function(){
	var position;

	$(".nav li").on('click', function(){
		$('.navbar-collapse').removeClass("in");
		$(this).removeClass('animated pulse');
		$(this).addClass('animated bounce');
	});
	$(".nav li").mouseenter(function(){
		$(this).addClass("navOnHover", 400);
		$(this).addClass('animated pulse');
	}).mouseout(function(){
		$(this).removeClass("navOnHover", 200);
		$(this).removeClass('animated bounce');
		$(this).removeClass('animated pulse');
	});

	$('body li a').on('click', function(event){
		event.preventDefault();
		console.log(event.target.id);
		if(event.target.id === 'port'){
			position = $('#portfolio').offset();
			$('html, body').animate({ scrollTop: position.top}, 1000, 'linear');
		} else if((event.target.id === 'hm')||(event.target.id === 'logo')) {
			position = $('#top').offset();
			$('html, body').animate({ scrollTop: position.top}, 1000, 'linear');
		} else if(event.target.id === 'ab') {
			position = $('#about').offset();
			$('html, body').animate({ scrollTop: position.top}, 1000, 'linear');
		} else if(event.target.id === 'ct') {
			position = $('#foot').offset();
			$('html, body').animate({ scrollTop: position.top}, 1000, 'linear');
		}

	});


	$(".navbar-inverse").sticky({topSpacing:0});

	//$('body').on('scrollY', function(){
		console.log(document.documentElement.scrollTop || document.body.scrollTop);
	//});
	$(window).on('scroll', function(){
		if (((document.documentElement.scrollTop || document.body.scrollTop) > 0)&&
		((document.documentElement.scrollTop || document.body.scrollTop) < 580)) {
		$('li a.hm').addClass('active');
		$('li a.ab').removeClass('active');
		$('li a.port').removeClass('active');
		$('li a.ct').removeClass('active');
		console.log('aaaaa', document.documentElement.scrollTop || document.body.scrollTop);
        } else if (((document.documentElement.scrollTop || document.body.scrollTop) >= 580)&&
		((document.documentElement.scrollTop || document.body.scrollTop) < 1385)) {
        $('li a.port').removeClass('active');
		$('li a.hm').removeClass('active');
		$('li a.ab').addClass('active');
		$('li a.ct').removeClass('active');
        } else if (((document.documentElement.scrollTop || document.body.scrollTop) >= 1385)&&
		((document.documentElement.scrollTop || document.body.scrollTop) < 3270)) {
    	$('li a.port').addClass('active');
		$('li a.hm').removeClass('active');
		$('li a.ab').removeClass('active');
		$('li a.ct').removeClass('active');
    	console.log('bbbb', document.documentElement.scrollTop || document.body.scrollTop);
        } else if ((document.documentElement.scrollTop || document.body.scrollTop) >= 3270) {
    	$('li a.ct').addClass('active');
		$('li a.hm').removeClass('active');
		$('li a.ab').removeClass('active');
		$('li a.port').removeClass('active');
    	console.log('bbbb', document.documentElement.scrollTop || document.body.scrollTop);
        }
	});
});
