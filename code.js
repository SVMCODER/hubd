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
