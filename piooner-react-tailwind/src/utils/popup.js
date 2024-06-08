// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("HinhAnh");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// for (var btn in btns) {
//     btn.onclick = function() {
//         modal.style.display = "block";
//       }
// }
export var

var openPopup = function() {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
var closePopup = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }