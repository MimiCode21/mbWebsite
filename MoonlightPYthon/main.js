// Define the quiz element globally
const quiz = document.getElementById("quiz");
const alertButton = document.getElementById("memberButton");
// Function to show the quiz questions
function showQuiz() {
    // Get the quiz container
    quiz.style.display = "block";
}

// Need this block of code to be hidden. To ensure code runs after the DOM is fully loaded, code is wrapped in a DOMContentLoaded event listener and executes when alert button is clicked
document.addEventListener("DOMContentLoaded", function () {
    
    // Added a click event listener to the alert button
    alertButton.addEventListener("click", function () {
        // Calling the showQuiz function when the alert button is clicked
        showQuiz();
    });
});

// CODE FOR THE FORM
// Select the form element
let newMemberForm = document.getElementById("newMemberForm");
// Initialize the member count to 0
let newMemberCount = 0;
let greeting = "Hello";
let newMemberGreeting = "You're in… Welcome to Moonlight Members Club. Please click the Membership Acceptance button below to continue.";
// Created an array to store new member's names 
let newMember = [];

// Attach an event listener to the form's submit event
newMemberForm.addEventListener("submit", function (event) {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    const nameInput = document.getElementById("name"); // Get the name from the input element
    const newName = nameInput.value; // Get the value entered by the user

    // Check if the member limit of 5 is reached
    if (newMemberCount < 5) {
        // Add new member to the array
        newMember.push(newName);

        // Increment member count
        newMemberCount++;

        // Display greeting
        alert(`${greeting} ${newName} ${newMemberGreeting}`);
    } else {
        // Display limit reached message
        alert("Sorry, you have not made it through to the Private Members List. Please try again at the next open date... an email will follow on those dates.");
    }

    // Reset the form input
    nameInput.value = "";

    // Clear radio button selections without deleting data entry
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });
    // to show the quiz again when the form is submitted
    showQuiz();
});


 // Get results container
 const result = document.getElementById("result");
 const groupText = document.getElementById("group");

// Function to handle quiz results
function submitQuiz(event) {
    event.preventDefault(); // Prevent form submission and page reload
    // Get user's answers
    const q1Answer = document.querySelector('input[name="socialMedia"]:checked');
    const q2Answer = document.querySelector('input[name="camera"]:checked');

    if (q1Answer && q2Answer) {
        // Find out the groups based on answers
        const group = membersGroup(q1Answer.value, q2Answer.value);

        // Show result
        groupText.textContent = group;
        result.style.display = "block";
        quiz.style.display = "none"; // reset the quiz display to "none"
    } else {
        alert("Please answer all questions.");
    }
}

// Add event listener to click to submit results
const submitQuizButton = document.getElementById("submitQuiz");
submitQuizButton.addEventListener("click", submitQuiz);

// Function for grouping members quiz
function membersGroup(answer1, answer2) {
    // Group members based on answers
    if (answer1 === "Twitter" && answer2 === "Behind") {
        return "You are assigned to the Members group named The Studio Member. Please use code STUDIO upon entrance. Do not disclose this code to anyone; if it is reported, your membership will be terminated.";
    } else if (answer1 === "TikTok" && answer2 === "In front") {
        return "You are assigned to the Members Group named The Show Member. Please use code SHOW upon entrance. Do not disclose this code to anyone; if it is reported, your membership will be terminated.";
    } else {
        return "You are placed in a holding Membership Tank. Please use code TANK upon entrance. Do not disclose this code to anyone; if it is reported, your membership will be terminated.";
    }
}

// To clear the quiz result for the next user
const quizResults = document.getElementById("result");
const clearResult = document.getElementById("clearResult");

clearResult.addEventListener("click", function () {
    // Clear radio button selections
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });
    quizResults.textContent = "";
    result.style.display = "none"; //set the results back to block
    showQuiz();
});


