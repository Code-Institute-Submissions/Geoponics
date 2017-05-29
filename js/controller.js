angular.module('RouteControllers', ['ui.bootstrap'])

	.controller('HomeController', function($scope) {
		$(window).off("scroll");
	})

    .controller('GalleryController', function($scope) {

    	var imgReloadNeeded = true;

		function createImageAppendfunc(index, columnSelector) {
		    return function() { $(columnSelector).append(`<img src="images/p${index}.jpg" class="pic">`); };
		}
		// this is creating a global function that helps me append my images, it does this because a nested
		// function for creating my image layout couldnt handle certain variable's without creating a global.

		function isMobileWidth() {
		    return $('#mobilejsquery').is(':visible');
		}

		// if ($('#mobilejsquery').is(':visible') == true) {
		// 	console.log("small")
		// }

		function enableUserScroll() {

		// this function adds new images to the gallery page when opened and inserts new images as the user
		// scrolls, it will repeat to infinity.
	  		
			if (!$('#photocontainer').length) {
				return;
			} //this says if photocontainer is not present this code will not be active. This is because
			 // $(window).on("scroll") is a global function so will remain active in other Angular Windows.
			
			$(window).on("scroll",function() {
				if ($('#mobilejsquery').is(':visible') && imgReloadNeeded) {
					imgReloadNeeded = false;
					console.log("small")
							
					var column1height = Array.from(document.getElementById("c1").children).reduce((s, x)=>s+x.height, 0);
					var column2height = Array.from(document.getElementById("c2").children).reduce((s, x)=>s+x.height, 0);
					var column3height = Array.from(document.getElementById("c3").children).reduce((s, x)=>s+x.height, 0);
					var column4height = Array.from(document.getElementById("c4").children).reduce((s, x)=>s+x.height, 0);
					// This finds the height of each column by finding column element ID c1 ect, and reducing 
					// (finding sum total) of all that columns children (photo's) and returning the combined height. 

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
				   // these for loops append new images as the user scrolls to the bottom of whichever
				   // column contains the least photos as they are different aspect ratios and create
				   // an uneven bottom.
				} else if (!$('#mobilejsquery').is(':visible')) {
					imgReloadNeeded = true;
				}
			});
		}

		for (var i = 1; i < 17; i = i + 4) {
			setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
			setTimeout(createImageAppendfunc(i+1, "#c2"),	i*50);	
			setTimeout(createImageAppendfunc(i+2, "#c3"),	i*50);	
			setTimeout(createImageAppendfunc(i+3, "#c4"),	i*50);	
		}
		// This creates the inital image layout, using the function createImageAppendfunc shown earlier.
		// It uses setTimeout to delay placing of each image into the different columns.

		setTimeout(enableUserScroll , 20*50)

	})

 //    .controller('GalleryController', function($scope) {

	// 	function createImageAppendfunc(index, columnSelector) {
	// 	    return function() { $(columnSelector).append(`<img src="images/p${index}.jpg" class="pic">`); };
	// 	}
	// 	// this is creating a global function that helps me append my images, it does this because a nested
	// 	// function for creating my image layout couldnt handle certain variable's without creating a global.

	// 	function isMobileWidth() {
	// 	    return $('#mobilejsquery').is(':visible');
	// 	}

	// 	if ($('#mobilejsquery').is(':visible') == true) {
	// 		console.log("small")
	// 	}

	// 	function enableUserScroll() {

	// 	// this function adds new images to the gallery page when opened and inserts new images as the user
	// 	// scrolls, it will repeat to infinity.
	  		
	// 		if (!$('#photocontainer').length) {
	// 			return;
	// 		} //this says if photocontainer is not present this code will not be active. This is because
	// 		 // $(window).on("scroll") is a global function so will remain active in other Angular Windows.

	// 		$(window).on("scroll",function() {

	// 			var column1height = Array.from(document.getElementById("c1").children).reduce((s, x)=>s+x.height, 0);
	// 			var column2height = Array.from(document.getElementById("c2").children).reduce((s, x)=>s+x.height, 0);
	// 			var column3height = Array.from(document.getElementById("c3").children).reduce((s, x)=>s+x.height, 0);
	// 			var column4height = Array.from(document.getElementById("c4").children).reduce((s, x)=>s+x.height, 0);
	// 			// This finds the height of each column by finding column element ID c1 ect, and reducing 
	// 			// (finding sum total) of all that columns children (photo's) and returning the combined height. 

	// 		   if($(window).scrollTop() + $(window).height() > column1height) {
	// 				for (var i = 1; i < 17; i = i + 4) {
	// 					$('#c1').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
	// 				}
	// 			}		   		
	// 		   if($(window).scrollTop() + $(window).height() > column2height) {	
	// 				for (var i = 2; i < 17; i = i + 4) {
	// 					$('#c2').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
	// 				}
	// 			}
	// 		   if($(window).scrollTop() + $(window).height() > column3height) {
	// 				for (var i = 3; i < 17; i = i + 4) {
	// 					$('#c3').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
	// 				}
	// 			}
	// 		   if($(window).scrollTop() + $(window).height() > column4height) {
	// 				for (var i = 4; i < 17; i = i + 4) {
	// 					$('#c4').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
	// 				}
	// 		   }
	// 		   // these for loops append new images as the user scrolls to the bottom of whichever
	// 		   // column contains the least photos as they are different aspect ratios and create
	// 		   // an uneven bottom.
	// 		});
	// 	}

	// 	for (var i = 1; i < 17; i = i + 4) {
	// 		setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
	// 		setTimeout(createImageAppendfunc(i+1, "#c2"),	i*50);	
	// 		setTimeout(createImageAppendfunc(i+2, "#c3"),	i*50);	
	// 		setTimeout(createImageAppendfunc(i+3, "#c4"),	i*50);	
	// 	}
	// 	// This creates the inital image layout, using the function createImageAppendfunc shown earlier.
	// 	// It uses setTimeout to delay placing of each image into the different columns.

	// 	setTimeout(enableUserScroll , 20*50)

	// })

    .controller('WorkshopController', function($scope) {

		$scope.workshopdata = WORKSHOPDATA;

		$scope.tabs = [
		{ title:'Dynamic Title 1', content:'Dynamic content 1' },
		{ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
		];

		$scope.alertMe = function() {
		setTimeout(function() {
		  $window.alert('You\'ve selected the alert tab!');
		});
		};

		$scope.model = {
		name: 'Tabs'
		};

    });


