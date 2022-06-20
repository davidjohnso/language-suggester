//Business Logic
function leaveAlert() {
  alert("Where do you think your going! You can't leave yet!");
};

// User Interface Logic
window.addEventListener("load", function(event) {
  let form = document.getElementById("button-two");
  form.addEventListener("click", leaveAlert);
  event.preventDefault();
});