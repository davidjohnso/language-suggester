//Business Logic

// User Interface Logic
window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    const quesOne = document.getElementById("question-one").value.toLowerCase();
    const quesTwo = document.getElementById("question-two").value.toLowerCase();
    const quesThree = document.getElementById("question-three").value.toLowerCase();
    const quesFour = document.getElementById("question-four").value.toLowerCase();
    const quesFive = document.getElementById("question-five").value.toLowerCase();

    const questions = document.getElementById("questions");
    const java = document.getElementById("java");
    const rust = document.getElementById("rust");
    const cSharp = document.getElementById("c-sharp");
    const python = document.getElementById("python");

    if(quesOne === "no") {
      questions.style.display = "none";
      java.style.display = "block";
    }

    else if(quesTwo === "bird") {
      questions.style.display = "none";
      cSharp.style.display = "block";
    }

    else if (quesOne === "yes" || quesFive === "yes") {
      questions.style.display = "none";
      rust.style.display = "block";
    }

    else {
      questions.style.display = "none";
      python.style.display = "block";
    }    
    console.log(quesOne);
    console.log(quesTwo);
    console.log(quesThree);
  };
};