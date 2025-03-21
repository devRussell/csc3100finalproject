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