$(document).ready(function() {
	var rowCount = 16;
	var newgrid = function() {
		rowCount = parseInt(prompt("Enter number of rows"));
		$('#container').empty();
	};
	

	var grid = function() {
		var squareSize = 960 / rowCount;

		for (var j = 1; j <= rowCount; j++) {
		$("#container").append("<div class='temp'></div>");
		$(".temp").attr('id', 'row' + j).addClass("row").removeClass("temp");

		for (var i = 1; i <= rowCount; i++) {
			$('#row' + j).append("<div class='square'></div>");
			
		}};
		$(".square").css({"width": squareSize, "height": squareSize});
	};

	var black_gray = function() {
		$(".square").mouseover(function() {
			$(this).addClass('squareHover')
		});
		$(".square").mouseleave(function(){
			$(this).addClass('squareChange');
		});

	};

	grid();
	black_gray();


	$('#resetButton').click(function() {
		newgrid();
		grid();
		black_gray();
	});

	$('#fade').click(function() {
		newgrid();
		grid();
		$('.square').addClass('black');
		$('.black').mouseover(function() {
		var op = $(this).css('opacity');
		$(this).css('opacity', (op > 0.1) ? (op - 0.1) : op );
		});
	});

	$('#random').click(function() {
		newgrid();
		grid();
		$('.square').mouseover(function() {
			$(this).css('background-color', ('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)));
		});
		
		
	});
});