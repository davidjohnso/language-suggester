//Business Logic
function leaveAlert() {
  alert("Where do you think your going! You can't leave yet!");
};

// User Interface Logic
window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    const quesOne = document.getElementById("question-one").value.toLowerCase();
    const quesTwo = document.getElementById("question-two").value.toLowerCase();
    const quesThree = document.getElementById("question-three").value.toLowerCase();
    const quesFour = document.getElementById("question-four").value.toLowerCase();
    const quesFive = document.getElementById("question-five").value.toLowerCase();
    event.preventDefault();
    console.log(quesOne);
  };

    // if(button-two) {
  //   let leaveButton = document.getElementById("button-two");
  //   leaveButton.addEventListener("click", leaveAlert);
  // }
};