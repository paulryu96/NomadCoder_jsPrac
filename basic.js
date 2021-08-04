const loginForm = document.querySelector('#LoginForm')
const typeName = loginForm.querySelector('input')
const loginBt = loginForm.querySelector('button')
const showName = loginForm.querySelector('h1')

loginBt.addEventListener('click', handleLoginBt)

function handleLoginBt(){
  showName.innerText = "welcome " + typeName.value
}