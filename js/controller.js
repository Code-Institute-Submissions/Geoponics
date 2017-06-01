angular.module('RouteControllers', ['ui.bootstrap'])

	.controller('HomeController', function($scope) {
		$(window).off("scroll");
	})

    .controller('GalleryController', function($scope) {

    	var imgReloadNeededmob = true;
    	var imgReloadNeededtab = true;
    	var imgReloadNeededdesk = true;

		function createImageAppendfunc(index, columnSelector) {
		    return function() { $(columnSelector).append(`<img src="images/p${index}.jpg" class="pic">`); };
		}
		
		function enableUserScroll() {

		    // this function adds new images to the gallery page when opened and inserts new images as the user
			// scrolls, it will repeat to infinity.
	  		
			if (!$('#photocontainer').length) {
				return;
			} //this says if photocontainer is not present this code will not be active. This is because
			 // $(window).on("scroll") is a global function so will remain active in other Angular Windows.
			

			$(window).on("scroll",function() {
				if ($('#mobilejsquery').is(':visible')) {
					console.log("small");		
					var column1height = Array.from(document.getElementById("c1").children).reduce((s, x)=>s+x.height, 0);
					var column2height = Array.from(document.getElementById("c2").children).reduce((s, x)=>s+x.height, 0);
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
				    if($(window).scrollTop() + $(window).height() > column1height) {
						for (var i = 3; i < 17; i = i + 4) {
							$('#c1').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
						}
					}
				    if($(window).scrollTop() + $(window).height() > column2height) {
						for (var i = 4; i < 17; i = i + 4) {
							$('#c2').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
						}
				    }
				   // these for loops append new images as the user scrolls to the bottom of whichever
				   // column contains the least photos as they are different aspect ratios and create
				   // an uneven bottom.
				}
				else if ($('#tabletjsquery').is(':visible')) {
					console.log("medium");			
					var column1height = Array.from(document.getElementById("c1").children).reduce((s, x)=>s+x.height, 0);
					var column2height = Array.from(document.getElementById("c2").children).reduce((s, x)=>s+x.height, 0);
					var column3height = Array.from(document.getElementById("c3").children).reduce((s, x)=>s+x.height, 0);
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
				    if($(window).scrollTop() + $(window).height() > column2height) {
						for (var i = 4; i < 17; i = i + 4) {
							$('#c2').append('<img src="'+"images/p"+i+".jpg"+'" class="pic">');
						}
				    }
				   // these for loops append new images as the user scrolls to the bottom of whichever
				   // column contains the least photos as they are different aspect ratios and create
				   // an uneven bottom.
				}
				else if ($('#desktopjsquery').is(':visible')) {
					console.log("large");			
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
				}         
			});
		}

		function enableUserResize() {

			if (!$('#photocontainer').length) {
				return;
			}

			$(window).resize(function() {		
				if ($('#mobilejsquery').is(':visible') && imgReloadNeededmob) {
					$("#c1, #c2, #c3, #c4").children().detach();
					imgReloadNeededmob = false;
					// console.log("small");
					for (var i = 1; i < 17; i = i + 4) {
						setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
						setTimeout(createImageAppendfunc(i+1, "#c2"), i*50);	
						setTimeout(createImageAppendfunc(i+2, "#c1"), i*50);	
						setTimeout(createImageAppendfunc(i+3, "#c2"), i*50);
							
					}
					setTimeout(enableUserScroll , 30*50);
					setTimeout(enableUserResize, 50*50);
				} else if (!$('#mobilejsquery').is(':visible')) {
					imgReloadNeededmob = true;
				}
				if ($('#tabletjsquery').is(':visible') && imgReloadNeededtab) {
					$("#c1, #c2, #c3, #c4").children().detach();
					imgReloadNeededtab = false;
					// console.log("medium");
					for (var i = 1; i < 17; i = i + 4) {
						setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
						setTimeout(createImageAppendfunc(i+1, "#c2"), i*50);	
						setTimeout(createImageAppendfunc(i+2, "#c3"), i*50);	
						setTimeout(createImageAppendfunc(i+3, "#c2"), i*50);
							
					}
					setTimeout(enableUserScroll , 30*50);
					setTimeout(enableUserResize, 50*50); 
				} else if (!$('#tabletjsquery').is(':visible')) {
					imgReloadNeededtab = true;
				}
				if ($('#desktopjsquery').is(':visible') && imgReloadNeededdesk) {
					$("#c1, #c2, #c3, #c4").children().detach();
					imgReloadNeededdesk = false;
					// console.log("large");
					for (var i = 1; i < 17; i = i + 4) {
						setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
						setTimeout(createImageAppendfunc(i+1, "#c2"), i*50);	
						setTimeout(createImageAppendfunc(i+2, "#c3"), i*50);	
						setTimeout(createImageAppendfunc(i+3, "#c4"), i*50);
							
					} 
					setTimeout(enableUserScroll , 30*50);
					setTimeout(enableUserResize, 50*50);
				} else if (!$('#desktopjsquery').is(':visible')) {
					imgReloadNeededdesk = true;
				}				
			});
		} //for mobile^^
		//^^ this reloads the images if the user changes screen size over a certain bracket 320px/768px/1440px
		//it only performs this reload one time when screen-sized has changed then waits until the value has changed 
		// to another value and back again bfore repeating its action.

		if ($('#mobilejsquery').is(':visible')) {
				console.log("small-load");
				for (var i = 1; i < 17; i = i + 4) {
					setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
					setTimeout(createImageAppendfunc(i+1, "#c2"), i*50);	
					setTimeout(createImageAppendfunc(i+2, "#c1"), i*50);	
					setTimeout(createImageAppendfunc(i+3, "#c2"), i*50);	
				}
				imgReloadNeededmob = false;
		} //mobile initial image loader ^^
		if ($('#tabletjsquery').is(':visible')) {
				console.log("medium-load");
				for (var i = 1; i < 17; i = i + 4) {
					setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
					setTimeout(createImageAppendfunc(i+1, "#c2"), i*50);	
					setTimeout(createImageAppendfunc(i+2, "#c3"), i*50);	
					setTimeout(createImageAppendfunc(i+3, "#c2"), i*50);	
				}
				imgReloadNeededtab = false;
		} //tablet ^^
		if ($('#desktopjsquery').is(':visible')) {
				console.log("large-load");
				for (var i = 1; i < 17; i = i + 4) {
					setTimeout(createImageAppendfunc(i, "#c1"),	i*50);
					setTimeout(createImageAppendfunc(i+1, "#c2"), i*50);	
					setTimeout(createImageAppendfunc(i+2, "#c3"), i*50);	
					setTimeout(createImageAppendfunc(i+3, "#c4"), i*50);	
				}
				imgReloadNeededdesk = false;
		} //desktop ^^

		setTimeout(enableUserScroll , 30*50) 
		setTimeout(enableUserResize, 30*50);
		//this puts a hold on the user scrolling + resizing until the initial images have loaded/reloaded as it caused repeated images to be shown, this
		// is because they were inserted by both my scroll function and initial loading function at the same time.

	})

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

    // .controller('BookingController', function($scope) {

    // });    


