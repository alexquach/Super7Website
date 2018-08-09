
var slideIndex = 0;

window.addEventListener("onload", slideshow(), false);

function slideshow(){
	var slides = document.getElementsByClassName("slide");
	var mobile = document.getElementsByClassName("mobile-slide");

	for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
	   mobile[i].style.display = "none";
    }

	slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

	slides[slideIndex-1].style.display = "block";
	mobile[slideIndex-1].style.display = "block";

	setTimeout(slideshow, 3500);
}

$("a.toscroll").on('click',function(e) {
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#")+1);
    $('html, body').animate({
        scrollTop: $('#'+hash).offset().top
    }, 500);
    return false;
})
