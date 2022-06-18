//Business Logic
function leaveButtonAlert(event) {
  event.preventDefault();
  alert("Where do you think your going! You can't leave yet!");
};

//User Interface Logic
  window.addEventListener("load", function() {
    const form = document.getElementById("button-two");
    form.addEventListener("click", leaveButtonAlert);
  });