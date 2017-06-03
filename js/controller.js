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
	
		function populateColumns(selectors) {
			for (var i = 1; i < 17; i = i + 4) {
		 		for (var i2 = 0; i2 < selectors.length; i2++) {
		   		setTimeout(createImageAppendfunc(i+i2, selectors[i2]), i*50);   
		 		}
			}
			// setTimeout(enableUserScroll, 40*50);
			// setTimeout(enableUserResize, 40*50);   
		}

		function scrollPopulatecolumns(selectors, columns, increment) {
			for (i = 0; i < columns.length; i++) {
				    if($(window).scrollTop() + $(window).height() > columns[i]) {
						for (var i2 = increment[i]; i2 < 17; i2 = i2 + 4) {
							$(selectors[i]).append('<img src="'+"images/p"+i2+".jpg"+'" class="pic">');
						}
					}				
			}
		}

		function enableUserScroll() {

			if (!$('#photocontainer').length) {
				return;
			} //this says if photocontainer is not present this code will not be active. This is because
			 // $(window).on("scroll") is a global function so will remain active in other Angular Windows.
			

			$(window).on("scroll",function() {

				var column1height = Array.from(document.getElementById("c1").children).reduce((s, x)=>s+x.height, 0);
				var column2height = Array.from(document.getElementById("c2").children).reduce((s, x)=>s+x.height, 0);
				var column3height = Array.from(document.getElementById("c3").children).reduce((s, x)=>s+x.height, 0);
				var column4height = Array.from(document.getElementById("c4").children).reduce((s, x)=>s+x.height, 0);


				if ($('#mobilejsquery').is(':visible')) {
					console.log("small");		
					scrollPopulatecolumns(['#c1', '#c2', '#c1', '#c2',],[column1height, column2height, column1height, column2height],[1,2,3,4])
				   
				}
				if ($('#tabletjsquery').is(':visible')) {
					console.log("medium");		
					scrollPopulatecolumns(['#c1', '#c2', '#c3', '#c2',],[column1height, column2height, column3height, column2height],[1,2,3,4])
				   
				}
				if ($('#desktopjsquery').is(':visible')) {
					console.log("large");		
					scrollPopulatecolumns(['#c1', '#c2', '#c3', '#c4',],[column1height, column2height, column3height, column4height],[1,2,3,4])
				   
				}								
				// these for loops append new images as the user scrolls to the bottom of whichever
				// column contains the least photos as they are different aspect ratios and create
				// an uneven bottom.
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
					populateColumns(['#c1', '#c2', '#c1', '#c2']);
					setTimeout(enableUserScroll , 30*50);
					setTimeout(enableUserResize, 50*50);
				} else if (!$('#mobilejsquery').is(':visible')) {
					imgReloadNeededmob = true;
				}
				if ($('#tabletjsquery').is(':visible') && imgReloadNeededtab) {
					$("#c1, #c2, #c3, #c4").children().detach();
					imgReloadNeededtab = false;
					// console.log("medium");
					populateColumns(['#c1', '#c2', '#c3', '#c2']);
					setTimeout(enableUserScroll , 30*50);
					setTimeout(enableUserResize, 50*50); 
				} else if (!$('#tabletjsquery').is(':visible')) {
					imgReloadNeededtab = true;
				}
				if ($('#desktopjsquery').is(':visible') && imgReloadNeededdesk) {
					$("#c1, #c2, #c3, #c4").children().detach();
					imgReloadNeededdesk = false;
					// console.log("large");
					populateColumns(['#c1', '#c2', '#c3', '#c4']);
					setTimeout(enableUserScroll , 30*50);
					setTimeout(enableUserResize, 50*50);
				} else if (!$('#desktopjsquery').is(':visible')) {
					imgReloadNeededdesk = true;
				}				
			});
		} 

		//for mobile^^
		//^^ this reloads the images if the user changes screen size over a certain bracket 320px/768px/1440px
		//it only performs this reload one time when screen-sized has changed then waits until the value has changed 
		// to another value and back again bfore repeating its action.

		if ($('#mobilejsquery').is(':visible')) {
				console.log("small-load");
				populateColumns(['#c1', '#c2', '#c1', '#c2']);
				imgReloadNeededmob = false;
		} //mobile initial image loader ^^
		else if ($('#tabletjsquery').is(':visible')) {
				console.log("medium-load");
				populateColumns(['#c1', '#c2', '#c3', '#c2']);
				imgReloadNeededtab = false;
		} //tablet ^^
		else if ($('#desktopjsquery').is(':visible')) {
				console.log("large-load");
				populateColumns(['#c1', '#c2', '#c3', '#c4']);
				imgReloadNeededdesk = false;
		} //desktop ^^

		setTimeout(enableUserScroll , 30*50); 
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


