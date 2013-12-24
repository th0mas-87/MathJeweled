
$(document).ready(function() {
	setTimeout(function() {
		$('span#h1').css('font-size', $(window).width() / 7 + 'px');
		$('span#h2').css('font-size', $(window).width() / 45 + 'px');
		$('nav').css('width', $(window).width() * 0.85 + 'px');
		$('nav a').css('font-size', $(window).width() / 50 + 'px');
		$('span#h2').css('top', $('span#h1').height() + 15 + 'px');
		$('nav').css('top', $('span#h2').position().top + $(window).width() / 12 + 'px');
		$('span#h1').css('animation-play-state', 'running');
		$('span#h1').css('-webkit-animation-play-state', 'running');
		$('span#h2').css('animation-play-state', 'running');
		$('span#h2').css('-webkit-animation-play-state', 'running');
		$('nav').css('animation-play-state', 'running');
		$('nav').css('-webkit-animation-play-state', 'running');
		$('#hackathon').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
		$('nav a:nth-child(1)').click(function() {
			$('div#container').fadeOut('slow', function() {
				window.location = 'test.html';
			});
		});
		$('nav a:nth-child(2)').click(function() {
			$('div#container').fadeOut('slow', function() {
				window.location = 'learn.html';
			});
		});
	}, 250);
});

$(window).resize(function() {
	$('*').css('transition', '0.25s ease');
	$('*').css('-webkit-transition', '0.25s ease');
	setTimeout(function() {
		$('span#h1').css('font-size', $(window).width() / 7 + 'px');
		$('span#h2').css('font-size', $(window).width() / 45 + 'px');
		setTimeout(function() {
			$('span#h2').css('top', $('span#h1').height() + 15 + 'px');
			setTimeout(function() {
				$('nav').css('top', $('span#h2').position().top + $(window).width() / 12 + 'px');
				$('nav').css('width', $(window).width() * 0.85 + 'px');
				$('nav a').css('font-size', $(window).width() / 50 + 'px');
				setTimeout(function() {
					$('*').css('transition', 'none');
					$('*').css('-webkit-transition', 'none');
				}, 250);
			}, 250);
		}, 250);
	}, 250);
});
