
// Function to handle the form submission
function submitForm() {
    // Prevent the default form submission
    event.preventDefault();
    
    // Redirect to the Google Form
    window.location.href = "https://hawleylinn.github.io/personality-test/";
}

// Add event listener to the form
document.getElementById("personalityForm").addEventListener("submit", submitForm);
