var sliderItems = document.getElementsByClassName("sliderGaleryItem"); // vsetky obrazky
var actualIndex = 0; // docasny index, v ktorom uchovavam zobrazeny index obrazka

sliderItems[actualIndex].classList.add("showCustomImageSliderItem"); // inicializacia prveho obrazka

function showHideImageSliderItem(nextPrev){ // nextPrev = +1 alebo - 1
	sliderItems[actualIndex].classList.remove("showCustomImageSliderItem"); // schovaj predchadzajuci obrazok
	actualIndex += nextPrev; // zvys/zniz index
	
	if(actualIndex == sliderItems.length){ // ak uz je na konci pola zase nastavi index na 0
		actualIndex = 0;
	} else if(actualIndex == -1){ // ak uz je na zaciatku pola zase nastavi index na posledny prvok 5
		actualIndex = sliderItems.length - 1;
	}
	
	sliderItems[actualIndex].classList.add("showCustomImageSliderItem"); // zobraz dalsi/predchadzajuci obrazok
}

// automaticke zavolanie funkcie po 3000 milisekundach = 3 sekundy
setInterval(function(){ 
	showHideImageSliderItem(+1); 
}, 3000);