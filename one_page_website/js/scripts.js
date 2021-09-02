function openModal() {
  document.getElementById("myModal").style.display = "block"; //opens modal in a block display//
}

function closeModal() {
  document.getElementById("myModal").style.display = "none"; //closes modal//
}

var slideIndex = 1; //creates var to store what slide we are on//
showSlides(slideIndex); //calls func//

function plusSlides(n) { //updates slide index//
  showSlides(slideIndex += n); //calls func//
}

function currentSlide(n) { //displays current slide//
  showSlides(slideIndex = n); //displays curerent slide at the index//
}

function showSlides(n) { //shows slides//
  var i; //creates var//
  var slides = document.getElementsByClassName("mySlides"); //create var from mySlides//
  var dots = document.getElementsByClassName("demoh"); //create var from the demoh//
  var captionText = document.getElementById("caption"); //create var for captions//
  if (n > slides.length) {slideIndex = 1} //updates slide index//
  if (n < 1) {slideIndex = slides.length} //updates slide index//
  for (i = 0; i < slides.length; i++) { //hides the slides//
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //sets active slide for dot clicked//
  }
  slides[slideIndex-1].style.display = "block"; //styles active slide//
  dots[slideIndex-1].className += " active"; //sets active//
  captionText.innerHTML = dots[slideIndex-1].alt; //displays caption from alt atribute//
}
