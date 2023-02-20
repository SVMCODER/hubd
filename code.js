const output = document.querySelector('#output')
const input = document.querySelector('#input')

input.addEventListener('input', (e) => {
 output.innerHTML= `${localStorage.getItem('name')} <hr>`+e.target.value
})
document.querySelector('#input').innerHTML = `
<!-- BOILER PLATE STARTS -->
<!DOCTYPEhtml>
<html>
<head>
<link type='stylesheet' src='http://www.vidyamandir-india.in/SVMPSchool/css/style.css'>
<title> MY FIRST WEBSITE </title>
</head>
<body>
<h1> Hello, world </h1>
</body>
</html>
<!-- BOILER PLATE ENDS -->
`
function save() {
    pname = document.getElementById('pname').value;


    pauthor = localStorage.getItem('name')
    time = Date().replace('GMT+0530 (India Standard Time)','')
  
       


        localStorage.setItem('projectfile',localStorage.getItem('projectfile')+`
        <br>
        <div align='center'>
        <div class='pcnt button'>
          <h5>${pname}</h5>
          <img src='https://img.icons8.com/emoji/600/000000/file-folder-emoji.png' alt='NO INTERNET CONNECTION' class='pimg'>
          <hr>
          <h6 class='pp'>CONGRATULATIONS ON CREATING THIS PROJECT</h6>
          <hr><br>
          <p class='pp'>Coded on: ${time} </p>
          <div>
            <p class=-'pd'>Developer: ${pauthor} </p>
          </div>
        </div>
        </div>`);
        alert('SAVED!')
    
}
