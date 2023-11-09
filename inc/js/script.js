// .....toggle btn transform..... //
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};


// .....back to top button..... //
let mybutton = document.getElementById("btn-back-to-top");
// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// .....copyright text year...... //
var getYear = new Date().getFullYear();
document.getElementById("getYear").innerHTML = getYear;
