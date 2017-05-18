
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("bottom!");
   }
});

// detects wether the use has scrolled to the bottom of the page by finding the windows height adding the scroll height
// and checking wether it is equal to the size of the document will use this to add new photos to the gallery as user scrolls.

$(window).resize(function() {

	if ($(window).width() < 767) {
		console.log("small");
     	$('#c3').detach().appendTo('#c2');
	}
	else if ($(window).width() >= 767 && $(window).width() < 1440)  {
		console.log("medium");
     	$('#c4').detach().appendTo('#c1');
     	$('#c3').detach().appendTo("#photocontainer");
 
 	}
	else {
		console.log("Large");
		$('#c3').detach().appendTo("#photocontainer");
     	$('#c4').detach().appendTo("#photocontainer");
	}
});

// this uses jqueries window resize function to check wether the image has been resized above or below certain breakpoints
// if the window size is in a certain bracket i use jquery to detach or append objects.


	if ($(window).width() < 768) {
	    console.log('Small');
	    $('#c3').detach().appendTo('#c2');
	  }
	else if ($(window).width() >= 767 && $(window).width() < 1440)  {
		console.log('Medium');
		$('#c4').detach().appendTo('#c1');
	    $('#c3').detach().appendTo("#photocontainer");	
	}
	else {
	    console.log('Large');
	    $('#c3').detach().appendTo("#photocontainer");
	    $('#c4').detach().appendTo("#photocontainer");
	}

//this does the same but only once on refresh of the page

var images = ['images/p1.jpg'];
var index = 0;

console.log("images");
