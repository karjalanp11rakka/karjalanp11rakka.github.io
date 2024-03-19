let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(num) {
  showDivs(slideIndex += num);
}

function showDivs(num) {
  var i;
  var x = document.getElementsByClassName("slide");

  if (num > x.length) {
    slideIndex = 1
  }
  if (num < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
   }
   x[slideIndex - 1].style.display = "block";
}
