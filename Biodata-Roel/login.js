document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('log_name').value;
        const password = document.getElementById('log_pass').value;

        // Check if the username and password match
        if (username == "johnroelf@yahoo.com" && password == "Codeko2") {
            // Redirect to another site
            window.location.href = 'Biodata/biodata.html'; // My Link for biodata
            // pop up correct credentials
            alert('You are Succesfully Login');
        } else if (username == "" || password == ""){ // if the credenial user's inputted are not complete
            alert('Please Complete Credentials');
        } else{
            // Display error message if they inputted wrong credentials
            alert('Invalid Credentials! Please try again.');
        }
    });
    return false;
});

// Event listener for right-click on the document
document.addEventListener("contextmenu", function(event) {
    // Prevent the default right-click behavior
    event.preventDefault();
    
    // Display an alert or warning to the user
    alert("\n           It is not allowed!      -     Sabi ni Roel");
});


