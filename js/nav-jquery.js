$("#navbutton").on("click", function(){

	if ( $(".linksholder").hasClass("highlight") ) {

		// $(".linksholder").slideUp();
		$(".linksholder").addClass("unhighlight");
		$(".linksholder").removeClass("highlight linkBckgrnd");

	}
	else {

		// $(".linksholder").slideDown();
		$(".linksholder").addClass("highlight linkBckgrnd");
		$(".linksholder").removeClass("unhighlight");
	
	}

});

$('.navelement').on('click', function(){

	$(".linksholder").addClass("unhighlight");
	$(".linksholder").removeClass("highlight linkBckgrnd");

});