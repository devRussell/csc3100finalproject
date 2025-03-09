document.querySelector('#btnSwapLogIn').addEventListener('click', function(){
    document.querySelector('#frmRegister').style.display = 'none'
    document.querySelector('#frmLogin').style.display = 'block'
})
document.querySelector('#btnSwapRegister').addEventListener('click', function(){
    document.querySelector('#frmLogin').style.display = 'none'
    document.querySelector('#frmRegister').style.display = 'block'
})