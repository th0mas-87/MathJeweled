
$(document).ready(function() {
	$('div#home').css('height', $('div#home').width() + 'px');
	$('div#home').click(function() {
		$('div#main').fadeOut('slow', function() {
			window.location = 'index.html';
		});
	});
	$('div#main h1').css('font-size', $(window).width() / 7.5 + 'px');
	$('nav').css('width', $(window).width() * 0.85 + 'px');
	$('nav a').css('font-size', $(window).width() / 50 + 'px');
	$('nav').css('top', $('div#main h1').position().top + $(window).width() / 4.5 + 'px');
	$('div#main').css('animation-play-state', 'running');
	$('div#main').css('-webkit-animation-play-state', 'running');
	$('nav').css('animation-play-state', 'running');
	$('nav').css('-webkit-animation-play-state', 'running');
	$('nav a:nth-child(1)').click(function() {
		$('div#main').fadeOut('slow', function() {
			window.location = 'game.html';
		});
	});
	$('nav a:nth-child(3)').click(function() {
		$('div#main').fadeOut('slow', function() {
			window.location = 'creators.html';
		});
	});
});

$(window).resize(function() {
	$('*').css('transition', '0.25s ease');
	$('*').css('-webkit-transition', '0.25s ease');
	setTimeout(function() {
	$('div#home').css('height', $('div#home').width() + 'px');
	$('div#main h1').css('font-size', $(window).width() / 7.5 + 'px');
		setTimeout(function() {
			$('nav').css('width', $(window).width() * 0.85 + 'px');
			$('nav a').css('font-size', $(window).width() / 50 + 'px');
			$('nav').css('top', $('div#main h1').position().top + $(window).width() / 4.5 + 'px');
			setTimeout(function() {
				$('*').css('transition', 'none');
				$('*').css('-webkit-transition', 'none');
			}, 250);
		}, 250);
	}, 250);
});
