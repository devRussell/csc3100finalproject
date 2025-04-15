//swaps from the register page to the login page
document.querySelector('#btnSwapStudentLogIn').addEventListener('click', function(){
    document.querySelector('#frmStudentRegistration').style.display = 'none'
    document.querySelector('#frmStudentLogin').style.display = 'block'
})

//swaps from the login page to the register page
document.querySelector('#btnSwapStudentRegister').addEventListener('click', function(){
    document.querySelector('#frmStudentLogin').style.display = 'none'
    document.querySelector('#frmStudentRegistration').style.display = 'block'
})

//swaps from the experience page to the login page
document.querySelector('#btnSignOut').addEventListener('click', function(){
    document.querySelector('#frmStudentExperience').style.display = 'none'
    document.querySelector('#frmStudentLogin').style.display = 'block'
})

// Shows student score when the user clicks on the score button
document.querySelector('#btnStudentScore').addEventListener('click', function() {
    document.querySelector('#studentScore').style.display = 'block';
    document.querySelector('#btnHideScore').style.display = 'block';
    document.querySelector('#btnStudentScore').style.display = 'none';
});

document.querySelector('#btnHideScore').addEventListener('click', function() {
    document.querySelector('#studentScore').style.display = 'none';
    document.querySelector('#btnHideScore').style.display = 'none';
    document.querySelector('#btnStudentScore').style.display = 'block';
});

// Handle privacy selection changes
document.querySelector('#cboPrivatePublic').addEventListener('change', function () {
    const privacy = this.value;
    if (privacy === 'public') {
        document.querySelector('#publicReviewInput').style.display = 'block';
        document.querySelector('#privateReviewInput').style.display = 'none';
    } else if (privacy === 'private') {
        document.querySelector('#publicReviewInput').style.display = 'none';
        document.querySelector('#privateReviewInput').style.display = 'block';
    }
});

//hides pending reviews when the user clicks on the submit button or the delete button
// Function to reset the review form
function resetReviewForm() {
    // Reset the privacy dropdown to "public"
    document.querySelector('#cboPrivatePublic').value = 'public';
    
    // Reset the student name input
    document.querySelector('#txtStudentName').value = '';
    
    // Reset the public review textarea
    document.querySelector('#txtPublicReview').value = '';
    
    // Reset the private review dropdown
    document.querySelector('#cboPrivateReviewType').value = 'positive';
    
    // Show the public review input and hide the private review input
    document.querySelector('#publicReviewInput').style.display = 'block';
    document.querySelector('#privateReviewInput').style.display = 'none';
}

// Hide divPendingReviews and reset the form on submit
document.querySelector('#btnStudentReviewSubmit').addEventListener('click', function () {
    resetReviewForm();
});

// Hide divPendingReviews and reset the form on delete
document.querySelector('#btnStudentReviewDelete').addEventListener('click', function () {
    resetReviewForm();
});

//Validation for the registration form
document.querySelector('#btnStudentRegister').addEventListener('click', function(){
    // alert("test")

    //regexr for testing the validity of entered values and generic variables
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const regPhone = /^(?:\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;
    let blnError = false
    let strMessage = ""

    //variables to store the value of user input
    let strStudentEmail = document.querySelector('#txtStudentEmail').value
    let strStudentPhone = document.querySelector('#numPhoneNumber').value
    let strStudentPassword = document.querySelector('#txtStudentPasswordRegister').value
    let strStudentFirstName = document.querySelector('#txtStudentFirstName').value
    let strStudentLastName = document.querySelector('#txtStudentLastName').value

    //checking to make sure the first name isn't empty
    if(strStudentFirstName == ""){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="First name cannot be empty">First name cannot be empty</p>'
    }

    //checking to make sure the last name isn't empty
    if(strStudentLastName == ""){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Last name cannot be empty">Last name cannot be empty</p>'
    }
    
    // checking email validity
    if(!regEmail.test(strStudentEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Email address must be valid">Email address must be valid</p>'
    }

    if(!regPhone.test(strStudentPhone)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Phone number must be valid">Phone number must be valid</p>'
    }

    //checking to make sure the password is NIST complient
    if(strStudentPassword.length < 8 || strStudentPassword.length > 64){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Password must be valid (between 8 and 64 caracter)">Password must be valid (between 8 and 64 caracter)</p>'
    }

    // shows error message if anything is wrong
    if(blnError){
        Swal.fire({
        title: "Oh no, there is an error",
        html: strMessage,
        icon: "error"
        });
    }

    //shows a success message if everyhthing is correct
    if(!blnError){
        Swal.fire({
        title: "Registration Successful",
        text: "",
        icon: "success"
        });

        document.querySelector('#frmStudentRegistration').style.display = 'none'
        document.querySelector('#frmStudentLogin').style.display = 'block'
    }
})

//Validation for the login page
document.querySelector('#btnStudentLogin').addEventListener('click',function(){
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let blnError = false
    let strMessage = ""

    let strStudentEmail = document.querySelector('#txtStudentUsername').value 
    let strStudentPassword = document.querySelector('#txtStudentPasswordLogin').value

    if(!regEmail.test(strStudentEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Email address must be valid">Email address must be valid</p>'
    }

    if(strStudentPassword.length < 8 || strStudentPassword.length > 64){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Password must be valid (between 8 and 64 caracter)">Password must be valid (between 8 and 64 caracter)</p>'
    }

    if(blnError){
        Swal.fire({
        title: "Oh no, there is an error",
        html: strMessage,
        icon: "error"
        });
    }

    if(!blnError){
        Swal.fire({
        title: "Login Successful",
        text: "",
        icon: "success"
        });

        //swaps from register to experience page
        document.querySelector('#frmStudentLogin').style.display = 'none'
        document.querySelector('#frmStudentExperience').style.display = 'block'
    }
})