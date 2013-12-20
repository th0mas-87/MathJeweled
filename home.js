
$(document).ready(function() {
	$('span#h1').css('font-size', $(window).width() / 7 + 'px');
	$('span#h2').css('font-size', $(window).width() / 45 + 'px');
	$('span#h2').css('top', $('span#h1').height() + 15 + 'px');
	$('span#h1').css('animation-play-state', 'running');
	$('span#h1').css('-webkit-animation-play-state', 'running');
	$('span#h2').css('animation-play-state', 'running');
	$('span#h2').css('-webkit-animation-play-state', 'running');
	$('nav').css('animation-play-state', 'running');
	$('nav').css('-webkit-animation-play-state', 'running');
	$('nav').css('top', $('span#h2').position().top + $(window).width() / 12 + 'px');
	$('nav a').css('font-size', $(window).width() / 35 + 'px');
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});

$(window).resize(function() {
	$('*').css('transition', '0.5s ease');
	$('*').css('-webkit-transition', '0.5s ease');
	setTimeout(function() {
		$('span#h1').css('font-size', $(window).width() / 7 + 'px');
		$('span#h2').css('font-size', $(window).width() / 45 + 'px');
		setTimeout(function() {
			$('span#h2').css('top', $('span#h1').height() + 15 + 'px');
			setTimeout(function() {
				$('nav').css('top', $('span#h2').position().top + $(window).width() / 12 + 'px');
				$('nav a').css('font-size', $(window).width() / 35 + 'px');
				setTimeout(function() {
					$('*').css('transition', 'none');
					$('*').css('-webkit-transition', 'none');
				}, 750);
			}, 750);
		}, 750);
	}, 500);
});
