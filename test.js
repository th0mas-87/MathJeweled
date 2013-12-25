
var board = new Board(7, 7, 33, 14, 'bla', 'div#board');

$(document).ready(function() {
	board.initialize();
	$(window).resize();
	$('div#main').css('animation-play-state', 'running');
	$('div#main').css('-webkit-animation-play-state', 'running');
	$('div#home').click(function() {
		$('div#main').fadeOut('slow', function() {
			window.location = 'index.html';
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
			$('div#board div div').css('width', 100 / board.width + '%');
			$('div#board div div').css('height', 100 / board.height + '%');
			$('div#board div div').css('font-size', ($(window).width() / 2 * (board.height / board.width)) / board.height * 0.5 + 'px');
			$('div#board div div').css('line-height', ($(window).width() / 2 * (board.height / board.width)) / board.height + 'px');
			setTimeout(function() {
				$('div#board').css('width', $(window).width() / 2 + 'px');
				$('div#board').css('height', ($(window).width() / 2 * (board.height / board.width)) + 'px');
				setTimeout(function() {
					$('*').css('transition', 'none');
					$('*').css('-webkit-transition', 'none');
				}, 250);
			}, 250);
		}, 250);
	}, 250);
});

function getBoard() {
	return board;
}
