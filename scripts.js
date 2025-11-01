/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");
    const Message = document.querySelector(".message");


    // Add an event listener for form submission
    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        // Sanitize user input
        const emailData = document.getElementById('email').value;
        const email = emailData.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
        

        // Check if email has entered
        if(email === ""){
            Message.textContent = "Please enter a valid email address.";
            Message.style.color = "red";
        }
        else{
            Message.innerHTML= `<p>Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!</p>`;
            Message.style.color = "blue"; 
        }
    });
});