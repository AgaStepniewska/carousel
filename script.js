$(function(){
	var carouselList = $("#carousel ul"),
	    intervalLeft = setInterval(changeSlideLeft, 3000);	

	function changeSlideLeft() {
		carouselList.animate(
			{'marginLeft':-600}, 
			500,
			moveFirstSlide
		);
	}
	
  	function moveFirstSlide() {
     	var firstItem = carouselList.find("li:first"),
         	lastItem = carouselList.find("li:last");
		
		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	}
	
	var leftArrow = $('.left'),
		rightArrow = $('.right');
	
	leftArrow.click(function() {
		carouselList.animate(
			{left: '-600px'}, 
			500, 
			moveFirstSlide(),
	    	clearInterval(intervalLeft)
		); 
	}); 
    
	rightArrow.click(function() {
		clearInterval(intervalLeft);
		carouselList.animate(
			{left: '600px'}, 
			500,
      		moveFirstSlide(), 
		);
	});
  
});