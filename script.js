const year = new Date();
 document.getElementById("date").innerHTML = year.getFullYear();

 let slideIndex = 7;
 showSlides(slideIndex);

 function plusSlides(n) {
   showSlides(slideIndex += n);
 }

 function currentSlide(n) {
   showSlides(slideIndex = n);
 }

 function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let item = document.getElementsByClassName("item");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "block";
   }
   slideIndex++;
   if (n > slides.length) {slideIndex = 7}
   if (n < 7) { slideIndex = slides.length }
   if (slideIndex > slides.length) {slideIndex = 7}
   if (slideIndex < 7) { slideIndex = slides.length }
   for (i = 0; i < slides.length; i++) {
     slides[i].className = slides[i].className.replace(" active left", "");
   }
   slides[slideIndex-1].style.display = "block";
   slides[slideIndex-1].className += " active left";
   slides[slideIndex-2].style.display = "block";
   slides[slideIndex-2].className += " active left";
   slides[slideIndex-3].style.display = "block";
   slides[slideIndex-3].className += " active left";
   slides[slideIndex-4].style.display = "block";
   slides[slideIndex-4].className += " active left";
   slides[slideIndex-5].style.display = "block";
   slides[slideIndex-5].className += " active left";
   slides[slideIndex-6].style.display = "block";
   slides[slideIndex-6].className += " active left";
   slides[slideIndex-7].style.display = "block";
   slides[slideIndex-7].className += " active left";
// setTimeout(showSlides, 5000); // Change image every 2 seconds
 }