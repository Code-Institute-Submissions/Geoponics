angular.module('RouteControllers', [])

    .controller('GalleryController', function($scope) {

		for (var i = 1; i < 17; i++) {
			console.log(i);	
			$('#anewbox').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
		}
		// ^^ this places all the photos from images inside one container, 17 is the number of images in the folder ^^
		// +1 so this needs to be updated if more pictures are added. Need something else to read folder contents.



		$(window).scroll(function() {

			var pictureBox = Array.from(document.getElementById("anewbox").children).reduce((s, x)=>s+x.height, 0);
			pictureBox = pictureBox / 4;
			console.log(pictureBox)

		   if($(window).scrollTop() + $(window).height() > pictureBox) {
				for (var i = 1; i < 17; i++) {
					console.log("your thiiiis high");	
					$('#anewbox').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
				}
			}	
				   		
		});

		$(window).scroll(function() {
   			if($(window).scrollTop() + $(window).height() == $(document).height()) {
       			alert("bottom!");
   			}
		});

	});