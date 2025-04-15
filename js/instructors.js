//swaps from the registration page to the login page
document.querySelector('#btnSwapInstructorLogin').addEventListener('click', function(){
    document.querySelector('#frmInstructorRegistration').style.display = 'none'
    document.querySelector('#frmInstructorLogin').style.display = 'block'
})

//swaps from the login page to the register page
document.querySelector('#btnSwapInstructorRegister').addEventListener('click', function(){
    document.querySelector('#frmInstructorLogin').style.display = 'none'
    document.querySelector('#frmInstructorRegistration').style.display = 'block'
})

//swaps from the experience page to the login page
document.querySelector('#btnInstructorSignOut').addEventListener('click', function(){
    document.querySelector('#frmInstructorExperience').style.display = 'none'
    document.querySelector('#frmInstructorLogin').style.display = 'block'
})

//BACK BUTTON from the course view to the experience page
document.querySelector('#btnInstructorBackToExperience').addEventListener('click', function(){
    document.querySelector('#frmInstructorCourseView').style.display = 'none'
    document.querySelector('#frmInstructorExperience').style.display = 'block'
})

//BACK BUTTON from the team view to the course view
document.querySelector('#btnInstructorBackToCourseView').addEventListener('click', function(){
    document.querySelector('#frmInstructorTeamView').style.display = 'none'
    document.querySelector('#frmInstructorCourseView').style.display = 'block'
})

//BACK BUTTON from the student view to the team view
document.querySelector('#btnInstructorBackToTeamView').addEventListener('click', function(){
    document.querySelector('#frmInstructorStudentReview').style.display = 'none'
    document.querySelector('#frmInstructorTeamView').style.display = 'block'
})

//BACK BUTTON from create new team to course view
document.querySelector('#btnInstructorBackToCourseViewFromCreateTeam').addEventListener('click', function(){
    document.querySelector('#frmInstructorCreateNewTeam').style.display = 'none'
    document.querySelector('#frmInstructorCourseView').style.display = 'block'
})

//BACK BUTTON from create new review to course view
document.querySelector('#btnInstructorBackToCourseViewFromCreateReview').addEventListener('click', function(){
    document.querySelector('#frmInstructorCreateNewReview').style.display = 'none'
    document.querySelector('#frmInstructorCourseView').style.display = 'block'
})

//BACK BUTTON from create new course to experience page
document.querySelector('#btnInstructorBackToExperienceFromCreateCourse').addEventListener('click', function(){
    document.querySelector('#frmInstructorCreateNewCourse').style.display = 'none'
    document.querySelector('#frmInstructorExperience').style.display = 'block'
})

//BACK BUTTON from report to course view
document.querySelector('#btnInstructorBackToCourseViewFromReport').addEventListener('click', function(){
    document.querySelector('#frmInstructorReportView').style.display = 'none'
    document.querySelector('#frmInstructorCourseView').style.display = 'block'
})

//swap from experience to create course
document.querySelector('#btnInstructorCreateCourse').addEventListener('click', function(){
    document.querySelector('#frmInstructorExperience').style.display = 'none'
    document.querySelector('#frmInstructorCreateNewCourse').style.display = 'block'
})

//Validate the new course and create it, expect more once backend work is being done
document.querySelector('#btnInstructorCreateNewCourse').addEventListener('click', function(){
    let blnError = false
    let strMessage = ""

    let strNewCourse = document.querySelector('#txtNewCourseName').value

    if(strNewCourse.length < 1){
        blnError = true
        strMessage += `<p class="mb-0 mt-0" aria-label="new course's name cannot be empty">New Course's Name Cannot Be Empty</p>`
    }

    // shows error message if anything is wrong
    if(blnError){
        Swal.fire({
        title: "Oh no, there is an error",
        html: strMessage,
        icon: "error"
        });
    }

    //shows a success message if everyhthing is correct and moves them to the course view
    if(!blnError){
        Swal.fire({
        title: "New Course Created",
        icon: "success"
        });

        document.querySelector('#frmInstructorCreateNewCourse').style.display = 'none'
        document.querySelector('#frmInstructorExperience').style.display = 'block'
    }
})

//swap from experience to course view
document.querySelector('#btnInstructorPlaceholderCourse').addEventListener('click', function(){
    document.querySelector('#frmInstructorExperience').style.display = 'none'
    document.querySelector('#frmInstructorCourseView').style.display = 'block'
})

//swap from course view to create new review page
document.querySelector('#btnInstructorReviewCreate').addEventListener('click', function(){
    document.querySelector('#frmInstructorCourseView').style.display = 'none'
    document.querySelector('#frmInstructorCreateNewReview').style.display = 'block'
})

//Validate the new metric and add it to the review, expect more once backend work is being done
document.querySelector('#btnInstructorAddMetricToReview').addEventListener('click', function(){
    let blnError = false
    let strMessage = ""

    let strNewMetric = document.querySelector('#txtNewMetric').value

    if(strNewMetric.length < 1){
        blnError = true
        strMessage += `<p class="mb-0 mt-0" aria-label="new metric's name cannot be empty">New Metric's Name Cannot Be Empty</p>`
    }

    // shows error message if anything is wrong
    if(blnError){
        Swal.fire({
        title: "Oh no, there is an error",
        html: strMessage,
        icon: "error"
        });
    }

    //shows a success message if everyhthing is correct and moves them to the course view
    if(!blnError){
        Swal.fire({
        title: "Metric Added To Review",
        icon: "success"
        });
    }
})

//Validate and create a new review, expect more once backend work is being done
document.querySelector('#btnInstructorPublishNewReview').addEventListener('click', function(){
    let blnError = false
    let strMessage = ""

    let strNewMetric = document.querySelector('#txtNewMetric').value

    if(strNewMetric.length < 1){
        blnError = true
        strMessage += `<p class="mb-0 mt-0" aria-label="new metric's name cannot be empty">New Metric's Name Cannot Be Empty</p>`
    }

    // shows error message if anything is wrong
    if(blnError){
        Swal.fire({
        title: "Oh no, there is an error",
        html: strMessage,
        icon: "error"
        });
    }

    //shows a success message if everyhthing is correct and moves them to the course view
    if(!blnError){
        Swal.fire({
        title: "New Review Published",
        icon: "success"
        });

        document.querySelector('#frmInstructorCreateNewReview').style.display = 'none'
        document.querySelector('#frmInstructorCourseView').style.display = 'block'
    }
})

//swap from course view to create new team page
document.querySelector('#btnInstructorTeamCreate').addEventListener('click', function(){
    document.querySelector('#frmInstructorCourseView').style.display = 'none'
    document.querySelector('#frmInstructorCreateNewTeam').style.display = 'block'
})

//Validate and create a new team, expect more once backend work is being done
document.querySelector('#btnInstructorCreateNewTeam').addEventListener('click', function(){
    let blnError = false
    let strMessage = ""

    let strNewTeamName = document.querySelector('#txtNewTeamName').value

    if(strNewTeamName.length < 1){
        blnError = true
        strMessage += `<p class="mb-0 mt-0" aria-label="New Team Name Cannot Be Empty">New Team Name Cannot Be Empty</p>`
    }

    // shows error message if anything is wrong
    if(blnError){
        Swal.fire({
        title: "Oh no, there is an error",
        html: strMessage,
        icon: "error"
        });
    }

    //shows a success message if everyhthing is correct and moves them to the course view
    if(!blnError){
        Swal.fire({
        title: "New Team Created",
        icon: "success"
        });

        document.querySelector('#frmInstructorCreateNewTeam').style.display = 'none'
        document.querySelector('#frmInstructorCourseView').style.display = 'block'
    }
})

//swap from course view to report view
document.querySelector('#btnInstructorReport').addEventListener('click', function(){
    document.querySelector('#frmInstructorCourseView').style.display = 'none'
    document.querySelector('#frmInstructorReportView').style.display = 'block'
})

//Display the metrics of the review, needs the backend to work, so gotta wait to flesh it out
document.querySelector('#btnInstructorPlaceholderReviewName').addEventListener('click', function(){
    Swal.fire({
        title: "A Metric",
        text: "and its average, but like in a list for the whole review"
        });
})


//swap from course view to team view
document.querySelector('#btnInstructorPlaceholderTeam').addEventListener('click', function(){
    document.querySelector('#frmInstructorCourseView').style.display = 'none'
    document.querySelector('#frmInstructorTeamView').style.display = 'block'
})

//Generate a code for a student to join the team in a course
document.querySelector('#btnInstructorAddStudentToTeam').addEventListener('click', function(){
    Swal.fire({
        title: "Tell the student to enter this code:",
        text: "UUID will go here later, that's a backend thing"
        });
})

//swap from team view to a student's reviews
document.querySelector('#btnInstructorPlaceholderStudent').addEventListener('click', function(){
    document.querySelector('#frmInstructorTeamView').style.display = 'none'
    document.querySelector('#frmInstructorStudentReview').style.display = 'block'
})

//Validation for the registration form
document.querySelector('#btnIntructorRegister').addEventListener('click', function(){

    //regexr for testing the validity of entered values and generic variables
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let blnError = false
    let strMessage = ""

    //variables to store the value of user input
    let strInstructorEmail = document.querySelector('#txtInstructorEmail').value
    let strInstructorPassword = document.querySelector('#txtInstructorPasswordRegister').value
    let strInstructorFirstName = document.querySelector('#txtInstructorFirstName').value
    let strInstructorLastName = document.querySelector('#txtInstructorLastName').value

    //checking to make sure the first name isn't empty
    if(strInstructorFirstName == ""){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="First name cannot be empty">First name cannot be empty</p>'
    }
    
    //START THIS IS CODE THAT IS FOR TESTING, REMOVE IT WHEN EDEPLOYING
    let blnSkipRegistrationAndLogin = false
    if(strInstructorFirstName == "d"){
        blnSkipRegistrationAndLogin = true
    }
    //END THIS IS CODE THAT IS FOR TESTING, REMOVE IT WHEN EDEPLOYING

    //checking to make sure the last name isn't empty
    if(strInstructorLastName == ""){
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

        //START MORE TEST CODE TO REMOVE
        if(blnSkipRegistrationAndLogin){
            document.querySelector('#frmInstructorRegistration').style.display = 'none'
            document.querySelector('#frmInstructorExperience').style.display = 'block'
        }
        //END MORE TEST CODE TO REMOVE
    }

    //shows a success message if everyhthing is correct and moves them to the login page
    if(!blnError){
        Swal.fire({
        title: "Registration Successful",
        text: "",
        icon: "success"
        });

        document.querySelector('#frmInstructorRegistration').style.display = 'none'
        document.querySelector('#frmInstructorLogin').style.display = 'block'
    }
})

//validation for the login page
document.querySelector('#btnInstructorLogin').addEventListener('click',function(){
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let blnError = false
    let strMessage = ""

    let strInstructorEmail = document.querySelector('#txtInstructorUsername').value 
    let strInstructorPassword = document.querySelector('#txtInstructorPasswordLogin').value

    if(!regEmail.test(strInstructorEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0" aria-label="Email address must be valid">Email address must be valid</p>'
    }

    if(strInstructorPassword.length < 8 || strInstructorPassword.length > 64){
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

    //swaps from the login form to the experience form
    if(!blnError){
        Swal.fire({
        title: "Login Successful",
        text: "",
        icon: "success"
        });

        document.querySelector('#frmInstructorLogin').style.display = 'none'
        document.querySelector('#frmInstructorExperience').style.display = 'block'
    }
})