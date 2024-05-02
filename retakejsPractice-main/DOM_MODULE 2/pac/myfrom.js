function init() {
    // Add event listener to the "Register" button
    document.getElementById("registerButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        showUserRegister(); // Call the function to display user registration details
    });
}

function showUserRegister() {
    // Get the values from the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Create a new <p> element
    var paragraph = document.createElement("p");

    // Set the text content of the <p> element
    paragraph.textContent = "Name: " + name + ", Email: " + email;

    // Get the reference to the last <div> tag
    var userRegisterDiv = document.querySelector("div#userRegister");
    
    // Add the <p> element to the last <div> tag
    userRegisterDiv.appendChild(paragraph);
}


init(); // Call the init function to initialize event listener
