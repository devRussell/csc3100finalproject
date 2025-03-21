//swaps from the login page to the register page
document.querySelector('#btnSwapStudentLogIn').addEventListener('click', function(){
    document.querySelector('#frmStudentRegistration').style.display = 'none'
    document.querySelector('#frmStudentLogin').style.display = 'block'
})

//swaps from the login page to the register page
document.querySelector('#btnSwapStudentRegister').addEventListener('click', function(){
    document.querySelector('#frmStudentLogin').style.display = 'none'
    document.querySelector('#frmStudentRegistration').style.display = 'block'
})

//Validation for the registration form
document.querySelector('#btnStudentRegister').addEventListener('click', function(){

    //regexr for testing the validity of entered values and generic variables
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let blnError = false
    let strMessage = ""

    //variables to store the value of user input
    let strInstructorEmail = document.querySelector('#txtStudentEmail').value
    let strInstructorPassword = document.querySelector('#txtStudentPasswordRegister').value
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
    if(!regEmail.test(strInstructorEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Email address must be valid">Email address must be valid</p>'
    }

    //checking to make sure the password is NIST complient
    if(strInstructorPassword.length < 8 || strInstructorPassword.length > 64){
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
    }
})