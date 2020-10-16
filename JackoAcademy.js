$(document).ready(function() {
  $('.video-gallery').magnificPopup({
  delegate: 'a',
  type: 'iframe',
  gallery:{
    enabled:true
  }
});
});

$('.carousel').carousel({
  interval: 1000
})

// When the user clicks on div, open the popup
function popupFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
