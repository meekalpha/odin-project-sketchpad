randomColours = 0;
gradient = 0;
trail = 0;

function initialise(){
	var res = prompt("Choose number of rows (1 - 100)");

	if ($.isNumeric(res)){
		res = Number(res);
		if (res > 100){
			res = 100;
		} else if (res < 1){
			res = 1;
		}
	} else {
		res = 50;
	}

	$('#sketchpad').empty();
	var i;
	for (i = 0; i < res*res; i++){
		$('#sketchpad').append('<div class="grid-block"></div>');
	}
	var dim = 100/res;
	$('.grid-block').css('width',dim+'%');
	$('.grid-block').css('height',dim+'%');
}

function getRandomColour(){
	var letters = '0123456789ABCDEF'.split("");
	var colour = '#';
	var i;
	for (i = 0; i < 6; i++){
		colour += letters[Math.floor(Math.random() * 16)];
	}
	return colour;
}

function toggleColour(){
	randomColours = (randomColours + 1) % 2;
}
function toggleGradient(){
	gradient = (gradient + 1) % 2;

}
function toggleTrail(){
	trail = (trail + 1) % 2;
}


$(document).ready(function(){
	initialise();
});

$(document).on('mouseenter','.grid-block',function(){
	colour = "black";
	opacity = 1.0;
	if (randomColours){
		colour = getRandomColour();
	}
	if (gradient){
		opacity = Number($(this).css('opacity')) + 0.25;
		if (opacity > 1.0){opacity = 1.0;}
	}

	$(this).css("background-color",colour);
	$(this).fadeTo('fast',opacity);
});
$(document).on('mouseleave','.grid-block',function(){
	console.log("mouseleave");
	if (trail){
		$(this).fadeTo('slow',0.0);
	}
});