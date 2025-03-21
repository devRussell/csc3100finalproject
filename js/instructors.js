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