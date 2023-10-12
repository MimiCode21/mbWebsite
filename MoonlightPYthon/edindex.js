// // Ask user their name
// let guestName = prompt("What is your name?");
// // name is added to guestlist
// let addToGuestList = guestName;
// // Name can now be called on guestlist
// let guestList = addToGuestList;
// // let guestList = ["Mina", "Huggie", "Alam", "Marge", "Winnie", "sistrin"];


// if (guestList.includes(guestName)) {
//     alert("Welcome to Moonlight, please enter with the code moon");
// }
// else {
//     alert("Sorry, your name is not on the Private Members List. Please contact our staff should you wish to join.")
// }

// NEW CODE

// Ask and store user name
// const newMemberForm = document.getElementById("newMemberForm"); //Get the form element

// const submitButton = document.getElementById("submit"); //Get the submit button

// let newMemberCount = 0; //Initialise the member count to 0

// let greeting = "Hello";
// let newMemberGreeting = "Your in… Welcome to Moonlight Members Club… Instructions to follow..";

// Created an array to store new member's names 
// const newMember = []; 

// Modifiying the function to handle the form submission!!!
// function newPrivateMember(event) {
  
  //Prevent the form from submitting and reloading page!!!
  // event.preventDefault();
  
  // const nameInput = document.getElementById("name");// Get the name from the input element
  // const newName = nameInput.value; //Get the value entered by the user!!!
  
  //check if the member limit of 5 is reached
//  if (newMemberCount < 5) {
   //Add new member to the array
  //  newMember.push(newName);
   
   //Increment member count
  //  newMemberCount++;
   
   // Display greeting
//    alert(`${greeting} ${newName} ${newMemberGreeting}`)
//  } else {
   //Display limit reached message
//    alert("Sorry, you have not made it through to the Private Members List. Please try again at the next open date... email will follow on dates.")
//  }

  //reset the form input
  // nameInput.value = "";
  
  //to stop the form from resubmitting
//   return false
// }
    
    
    // NEW CODE TO USE

    // To ensure js code runs after the DOM is fully loaded, js code is wrapped in a DOMContentLoaded event listener and excecutes when alert button is clicked
document.addEventListener("DOMContentLoaded", function () {
  //to get the quiz container
const quiz = document.getElementById("quiz");
//   Get alert button  
const alertButton = document.getElementById("memberButton");

// Set the quiz to hide initially
quiz.style.display = "none";
  
//   TO P DELETE
//   function alertBtn() {
//   alert("Click for Membership Delegation")
// }

  //Function to show the quiz questions, as they will be hidden before this.
function showQuiz() {
  quiz.style.display = "block";
}
// document.getElementById("memberButton").addEventListener("click", showQuiz); ???

// const alertButton = document.getElementById("alertButton");

alertButton.addEventListener("click", function () {
  alert("Click for Membership Delegation");
  
  showQuiz(); // show the quiz after clicking the alert button
  // document.getElementsByTagName("body").style.backgroundColor = "#183D3D";
});

// function to handle quiz results
function submitQuiz(event) {
  event.preventDefault(); //prevent form submission and page reload
  
  //Get user's answers
  const q1Answer = document.querySelector('input[name="socialMedia"]:checked');
  const q2Answer = document.querySelector('input[name="camera"]:checked');
  
  //Get results container
  const result = document.getElementById("result");
  const groupText = document.getElementById("group");
  
  if (q1Answer && q2Answer) {
      //find out the groups based on answers
      const group = membersGroup(q1Answer.value, q2Answer.value);

      //     show result
      groupText.textContent = group;
      result.style.display = "block";
      quiz.style.display = "none";
    } else {
      alert("Please answer all questions.");
    }
  }
  
  const submitQuizButton = document.getElementById("submitQuiz");
  submitQuizButton.addEventListener("click", submitQuiz);

//Function to handle form submission
function newPrivateMember(event) {
  //Prevent the form from submitting and reloading page!!!
  event.preventDefault();

  const nameInput = document.getElementById("name"); // Get the name from the input element
  const newName = nameInput.value; //Get the value entered by the user!!!

  //check if the member limit of 5 is reached
  if (newMemberCount < 5) {
    //Add new member to the array
    newMember.push(newName);

    //Increment member count
    newMemberCount++;

    // Display greeting
    alert(`${greeting} ${newName} ${newMemberGreeting}`);
  } else {
    //Display limit reached message
    alert(
      "Sorry, you have not made it through to the Private Members List. Please try again at the next open date... email will follow on dates."
    );
  }

  //reset the form input
  nameInput.value = "";
}

const newMemberForm = document.getElementById("newmemberForm");
submitFormButton.addEventListener("submitForm", newPrivateMember); 
});

//Function for grouping quiz
  
function membersGroup(answer1, answer2) {
  //   group members based on answers
  if (answer1 === "Twitter" && answer2 === "Behind") {
    return "You are assigned in the Members group named The Studio Member, please use code STUDIO, upon entrance. Do not disclose this code to anyone, if it is reported your membership will be terminated.";
  } else if (answer1 === "Tiktok" && answer2 === "In front") {
    return "You are assigned in the Members Group named The Show Member, please use code SHOW, upon entrance. Do not disclose this code to anyone, if it is reported, your membership will be terminated.";
  } else {
    return "You are placed in a holding Membership Tank. Please use code TANK, upon entrance. Do not disclose this code to anyone, if it is reported, your membership will be terminated.";
  }
}
  
 
    