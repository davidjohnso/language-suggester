//Business Logic
function leaveAlert() {
  alert("Where do you think your going! You can't leave yet!");
};

// User Interface Logic
window.onload = function() {
  let leaveButton = document.getElementById("button-two");
  leaveButton.addEventListener("click", leaveAlert);
};