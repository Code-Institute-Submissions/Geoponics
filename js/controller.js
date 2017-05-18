angular.module('RouteControllers', [])

    .controller('GalleryController', function($scope) {



		// var IMAGES = ['images/p1.jpg','images/p2.jpg'];
		// console.log(IMAGES);

		// for (var i = 1; i < 17; i++) {
		// 	console.log(i);	
		// 	$('.anewbox').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
		// }
		// ^^ this places all the photos from images inside one container, 17 is the number of images in the folder ^^
		// +1 so this needs to be updated if more pictures are added. Need something else to read folder contents.

		for (var i = 1; i < 17; i = i + 4) {
			console.log(i);	
			$('#c1').append(`<img src="images/p${i}.jpg" class="pic">`);
		}
		for (var i = 2; i < 17; i = i + 4) {
			console.log(i);	
			$('#c2').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
		}
		for (var i = 3; i < 17; i = i + 4) {
			console.log(i);	
			$('#c3').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
		}
		for (var i = 4; i < 17; i = i + 4) {
			console.log(i);	
			$('#c4').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
		}
		//^^ this places the <img> tags in each column (#c1/2/3/4) and divides them equally. it assigns photos ^^ 
		// a numberical value which corresponds with a number i gave each .jpg in the file directory. Hopefully
		// this would lessen the coding necessary considerably if adding hundereds of photos.



		// $(document).on('scroll', function() {
  //   		if($(this).scrollTop()>=$('#theTarget').position()){
  //       		for (var i = 1; i < 17; i = i + 4) {
		//  			console.log(i);	
		//  			$('#c1').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
		//  		}
  //  		 		}
		// })

		// function isScrolledIntoView(el) {
  //   		var elemTop = el.getBoundingClientRect().top;
  //   		var elemBottom = el.getBoundingClientRect().bottom;

  //   		var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  //   		return isVisible;
		// }
        
		$(window).scroll(function() {

		   if($(window).scrollTop() + $(window).height() == $(document).height()) {
				for (var i = 1; i < 17; i = i + 4) {
					console.log(i);	
					$('#c1').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
				}
				for (var i = 2; i < 17; i = i + 4) {
					console.log(i);	
					$('#c2').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
				}
				for (var i = 3; i < 17; i = i + 4) {
					console.log(i);	
					$('#c3').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
				}
				for (var i = 4; i < 17; i = i + 4) {
					console.log(i);	
					$('#c4').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
				}
		   }
		});

		// ^^ detects wether the use has scrolled to the bottom of the page by finding the windows height adding the scroll height
		// and checking wether it is equal to the size of the document.

		// $(window).resize(function() {

		// 	if ($(window).width() < 767) {
		// 		console.log("small")
		// 		$('.anewbox').children().removeclass("fade").addClass("fade");
		// 	}
		// 	if ($(window).width() >= 767 && $(window).width() < 1440)  {
		// 		console.log("medium")
		//      	$('.anewbox').children().removeclass("fade").addClass("fade");
		 
		//  	}
		// 	else if ($(window).width() > 1440) {
		// 		console.log("Large")
		// 		$('.anewbox').children().removeclass("fade").addClass("fade");
		// 	}
		// });

		// this uses jqueries window resize function to check wether the image has been resized above or below certain breakpoints
		// if the window size is in a certain bracket i use jquery to detach or append objects.


		// if ($(window).width() < 768) {
		//     console.log('Small');
		//     $('#c4').detach().appendTo('#c1');
		//     $('#c3').detach().appendTo('#c2');
		//   }
		// else if ($(window).width() >= 767 && $(window).width() < 1440)  {
		// 	console.log('Medium');
		// 	$('#c4').detach().appendTo('#c1');
		//     $('#c3').detach().appendTo("#photocontainer");	
		// }
		// else {
		//     console.log('Large');
		//     $('#c3').detach().appendTo("#photocontainer");
		//     $('#c4').detach().appendTo("#photocontainer");
		// }

		//this does the same but only once on refresh of the page



	});