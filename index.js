window.addEventListener("scroll", function(){
	var header = document.querySelector("nav");
	header.classList.toggle("sticky", window.scrollY > 0);
})
var xbars = document.querySelector(".fa-bars");
var xmark = document.querySelector(".fa-xmark");
xbars.addEventListener("click", function(){
	document.querySelector(".linksadd").style.display = "block";
	document.querySelector(".link").style.display = "block";
})
xmark.addEventListener("click", function(){
	document.querySelector(".linksadd").style.display = "none";
	document.querySelector(".link").style.display = "none";
})