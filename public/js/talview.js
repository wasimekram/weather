console.log("hello")

const input = document.querySelector('input[name="userEmail"]')
const userForm = document.querySelector('form')
const userName = document.querySelector('#userName')
const userID = document.querySelector('#userID')
const userPassword = document.querySelector('#userPassword')
const userEmail = document.querySelector('#userEmail')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
let query = {}

userForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("Hello")

    messageOne.textContent = messageOne.textContent + "     " + input.value
    query = { userName:userName.value, userID:userID.value, userPassword:userPassword.value, userEmail:userEmail.value}
    messageTwo.textContent= JSON.stringify(query)

})