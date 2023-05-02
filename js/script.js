const commentsCarousel = document.querySelector(".comments__container");
firstReview = commentsCarousel.querySelectorAll("article")[0];
arrowIcons = document.querySelectorAll(".comments i");
dotIndicator =document.querySelectorAll(".comments__nav-dots i");

let firstReviewWidth = firstReview.clientWidth +40; // get first review width 

arrowIcons.forEach(icon => {
	icon.addEventListener("click", () =>{
		if(icon.id === "left"){
	       commentsCarousel.scrollLeft -= firstReviewWidth; // icon clicked is left minus first review width
        }
        else{
	      commentsCarousel.scrollLeft +=firstReviewWidth; // icon clicked is right plus first review width
        }
		
 
		showHideIcons();
	})
});

function showHideIcons(){
	if(commentsCarousel.scrollLeft === 0){
		arrowIcons[0].style.display = "none"; //if not scrolled (0 pixels) display none
	}
	else{
		arrowIcons[0].style.display = "block"; // if its scrolled display arrow
	}

}

dotIndicator.forEach(dot => {
	dot.addEventListener("click", () =>{
	 
	 commentsCarousel.scrollLeft -= firstReviewWidth;
	
	})
})


window.addEventListener("load", () =>{
	hideloader();
})

function hideloader(){
	const loader = document.querySelector(".loader");
	loader.classList.add("loader-hidden");
}


