
$(document).ready(function() {
	$('div#home').css('height', $('div#home').width() + 'px');
	$('div#home').click(function() {
		$('div#main').fadeOut('slow', function() {
			window.location = 'index.html';
		});
	});
	$('div#main h1').css('font-size', $(window).width() / 7.5 + 'px');
	$('div#main').css('animation-play-state', 'running');
	$('div#main').css('-webkit-animation-play-state', 'running');
});

$(window).resize(function() {
	$('*').css('transition', '0.25s ease');
	$('*').css('-webkit-transition', '0.25s ease');
	setTimeout(function() {
	$('div#home').css('height', $('div#home').width() + 'px');
	$('div#main h1').css('font-size', $(window).width() / 7.5 + 'px');
		setTimeout(function() {
			$('*').css('transition', 'none');
			$('*').css('-webkit-transition', 'none');
		}, 250);
	}, 250);
});
