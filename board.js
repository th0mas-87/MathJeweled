
function Board(width, height, percentOperators, maxOperator, seed, output) {
	this.width = width;
	this.height = height;
	this.percentOperators = percentOperators;
	this.maxOperator = maxOperator;
	this.seed = seed;
	this.output = output;
	this.pieces;
}

/*###############################################################
	Utility Functions
###############################################################*/

Board.prototype.getRandomNumber = function(min, max) {
	return parseInt(Math.random() * (max - min + 1) + min);
}

Board.prototype.idToOperator = function(id) {
	if (id < 10) {
		return '' + id;
	}
	else if (id == 10) {
		return '+';
	}
	else if (id == 11) {
		return '-';
	}
	else if (id == 12) {
		return '*';
	}
	else if (id == 13) {
		return '/';
	}
	else if (id == 14) {
		return '%'
	}
}

Board.prototype.idToFancyOperator = function(id) {
	if (id < 10) {
		return '' + id;
	}
	else if (id == 10) {
		return '+';
	}
	else if (id == 11) {
		return '-';
	}
	else if (id == 12) {
		return '&times;';
	}
	else if (id == 13) {
		return '&divide;';
	}
	else if (id == 14) {
		return '%';
	}
}

Board.prototype.newPiece = function() {
	if (this.getRandomNumber(1, 100) < this.percentOperators) {
		return this.getRandomNumber(10, this.maxOperator);
	}
	else {
		return this.getRandomNumber(1, 9);
	}
}

Board.prototype.getPiece = function(x, y) {
	return this.pieces[x][y];
}

Board.prototype.getCoordinates = function(tile) {
	var coordinates = new Array(2);
	coordinates[0] = tile.attr('class');
	coordinates[1] = tile.parent().attr('id').substr(-1);
	return coordinates;
}

Board.prototype.setPiece = function(x, y, id) {
	this.pieces[x][y] = id;
	$(this.output + ' #r' + y + ' .' + x).html(this.idToFancyOperator(id));
}

/*###############################################################
	Click Handler Function
###############################################################*/

Board.prototype.clickHandler = function() {
	if ($(this).attr('id') == 'selected-1') {
		$(this).attr('id', '');
	}
	else {
		if ($('#selected-1').length == 1 && $('#selected-2').length == 0) {
			var coordinates2 = getBoard().getCoordinates($(this));
			var coordinates1 = getBoard().getCoordinates($('#selected-1'));
			var xChange = coordinates2[0] - coordinates1[0];
			var yChange = coordinates2[1] - coordinates1[1];
			if (xChange > -2 && xChange < 2 && yChange > -2 && yChange < 2) {
				$(this).attr('id', 'selected-2');
				$('#selected-1').addClass('moving');
				$(this).addClass('moving');
				$('#selected-1').css('transition', 'left 0.25s ease, top 0.25s ease');
				$('#selected-1').css('left', xChange * $('#selected-1').width() + 'px');
				$('#selected-1').css('top', yChange * $('#selected-1').height() + 'px');
				$(this).css('transition', 'right 0.25s ease, bottom 0.25s ease');
				$(this).css('right', xChange * $(this).width() + 'px');
				$(this).css('bottom', yChange * $(this).height() + 'px');
				setTimeout(function() {
					$('#selected-1').css('transition', 'none');
					$('#selected-1').css('left', '0');
					$('#selected-1').css('top', '0');
					$('#selected-2').css('transition', 'none');
					$('#selected-2').css('right', '0');
					$('#selected-2').css('bottom', '0');
					var temp = getBoard().getPiece(coordinates1[0], coordinates1[1]);
					getBoard().setPiece(coordinates1[0], coordinates1[1], getBoard().getPiece(coordinates2[0], coordinates2[1]));
					getBoard().setPiece(coordinates2[0], coordinates2[1], temp);
					$('#selected-1').removeClass('moving');
					$('#selected-2').removeClass('moving');
					$('#selected-1').attr('id', '');
					$('#selected-2').attr('id', '');
				}, 250);
			}
		}
		else {
			$(this).attr('id', 'selected-1');
		}
	}
}

/*###############################################################
	Initialize Function
###############################################################*/

Board.prototype.initialize = function() {
	for (var y = 0; y < this.height; y++) {
		$(this.output).append('<div id=\"r' + y + '\"></div>');
		for (var x = 0; x < this.width; x++) {
			$(this.output + ' #r' + y).append('<div class=\"' + x + '\"></div>');
			$(this.output + ' #r' + y + ' .' + x).click(this.clickHandler);
		}
	}
	Math.seedrandom(this.seed);
	this.pieces = new Array(this.width);
	for (var x = 0; x < this.width; x++) {
		this.pieces[x] = new Array(this.height);
		for (var y = 0; y < this.height; y++) {
			this.setPiece(x, y, this.newPiece());
		}
	}
	console.log(this.pieces);
}
