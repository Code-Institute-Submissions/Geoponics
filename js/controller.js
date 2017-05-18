angular.module('RouteControllers', [])

	.controller('HomeController', function($scope) {
		$(window).off("scroll");
	})


    .controller('GalleryController', function($scope) {

		function createImageAppendfunc(index, columnSelector) {
		    return function() { $(columnSelector).append(`<img src="images/p${index}.jpg" class="pic">`); };
		}


		function enableUserScroll() {
	  		
			if (!$('#photocontainer').length) {
				return;
			}

			$(window).on("scroll",function() {

				var column1height = Array.from(document.getElementById("c1").children).reduce((s, x)=>s+x.height, 0);
				var column2height = Array.from(document.getElementById("c2").children).reduce((s, x)=>s+x.height, 0);
				var column3height = Array.from(document.getElementById("c3").children).reduce((s, x)=>s+x.height, 0);
				var column4height = Array.from(document.getElementById("c4").children).reduce((s, x)=>s+x.height, 0);

			   if($(window).scrollTop() + $(window).height() > column1height) {
					for (var i = 1; i < 17; i = i + 4) {
						$('#c1').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
					}
				}		   		
			   if($(window).scrollTop() + $(window).height() > column2height) {	
					for (var i = 2; i < 17; i = i + 4) {
						$('#c2').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
					}
				}
			   if($(window).scrollTop() + $(window).height() > column3height) {
					for (var i = 3; i < 17; i = i + 4) {
						$('#c3').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
					}
				}
			   if($(window).scrollTop() + $(window).height() > column4height) {
					for (var i = 4; i < 17; i = i + 4) {
						$('#c4').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
					}
			   }
			});
		}

		for (var i = 1; i < 17; i = i + 4) {
			setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
			setTimeout(createImageAppendfunc(i+1, "#c2"),	i*50);	
			setTimeout(createImageAppendfunc(i+2, "#c3"),	i*50);	
			setTimeout(createImageAppendfunc(i+3, "#c4"),	i*50);	
		}

		setTimeout(enableUserScroll , 20*50)

	});

		//^^ this places the <img> tags in each column (#c1/2/3/4) and divides them equally. it assigns photos ^^ 
		// a numberical value which corresponds with a number i gave each .jpg in the file directory. Hopefully
		// this would lessen the coding necessary considerably if adding hundereds of photos.


