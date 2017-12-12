
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("bottom!");
   }
});

// detects wether the use has scrolled to the bottom of the page by finding the windows height adding the scroll height
// and checking wether it is equal to the size of the document will use this to add new photos to the gallery as user scrolls.
