
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

Board.prototype.setPiece = function(x, y, id) {
	this.pieces[x][y] = id;
	$(this.output + ' #r' + y + ' #' + x).html(this.idToFancyOperator(id));
}

/*###############################################################
	Initialize Function
###############################################################*/

Board.prototype.initialize = function() {
	for (var y = 0; y < this.height; y++) {
		$(this.output).append('<div id=\"r' + y + '\"></div>');
		for (var x = 0; x < this.width; x++) {
			$(this.output + ' #r' + y).append('<div id=\"' + x + '\"></div>');
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
