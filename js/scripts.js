//Business Logic

// User Interface Logic
window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    const quesOne = document.getElementById("question-one").value.toLowerCase();
    const quesTwo = document.getElementById("question-two").value.toLowerCase();
    const quesThree = document.getElementById("question-three").value.toLowerCase();
    const quesFour = document.getElementById("question-four").value.toLowerCase();
    const quesFive = document.getElementById("question-five").value.toLowerCase();

    let java = document.getElementById("java");
    let questions = document.getElementById("questions");
    let rust = document.getElementById("rust");

    if (quesOne === "no" || quesFive === "yes") {
      questions.style.display = "none";
      java.style.display = "block";
    }

    else {
      questions.style.display = "none";
      rust.style.display = "block";
    }

    event.preventDefault();
    console.log(quesOne);
  };
};