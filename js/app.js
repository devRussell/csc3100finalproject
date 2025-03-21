//Goes from landing page to the instructor registration page
document.querySelector('#btnGoToInstructorPage').addEventListener('click', function(){
    document.querySelector('#frmLandingPage').style.display = 'none' //hides the landing page
    fetch("components/instructors.html") //grabs the instructor page from the components folder
    //start of stuff from the charts example, I'm gonna be honest, idk fully whats its doing, but I get the gist
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/instructors.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divContent').innerHTML += html;
    })
    .catch(error => console.error("Error fetching chart:", error));
    //end of stuff from the charts example, I'm gonna be honest, idk fully whats its doing, but I get the gist
})

//Goes from landing page to the student registration page
document.querySelector('#btnGoToStudentPage').addEventListener('click', function(){
    document.querySelector('#frmLandingPage').style.display = 'none' //hides the landing page
    fetch("components/students.html") //grabs the instructor page from the components folder
    //start of stuff from the charts example, I'm gonna be honest, idk fully whats its doing, but I get the gist
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/students.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divContent').innerHTML += html;
    })
    .catch(error => console.error("Error fetching chart:", error));
    //end of stuff from the charts example, I'm gonna be honest, idk fully whats its doing, but I get the gist
})