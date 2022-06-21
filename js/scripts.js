//Business Logic
function leaveAlert() {
  alert("Where do you think your going! You can't leave yet!");
};
//Business Logic
function leaveAlert() {
  alert("Where do you think your going! You can't leave yet!");
};

function getValues() {
  const quesOne = document.getElementById("question-one").value;
  const quesTwo = document.getElementById("question-two").value;
  const quesThree = document.getElementById("question-three").value;
  const quesFour = document.getElementById("question-four").value;
  const quesFive = document.getElementById("question-five").value;

  document.querySelector("input#question-one").innerText = quesOne;
  document.querySelector("input#question-two").innerText = quesTwo;
  document.querySelector("input#question-three").innerText = quesThree;
  document.querySelector("input#question-four").innerText = quesFour;
  document.querySelector("input#question-five").innerText = quesFive;
};

// User Interface Logic
window.addEventListener("load", function(event) {
  let form = document.getElementById("button-two");
  form.addEventListener("click", leaveAlert);
  event.preventDefault();
});