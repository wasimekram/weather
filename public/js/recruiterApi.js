console.log("hello")

const userForm = document.querySelector('form')
const rID = document.querySelector('#rID')
const rCompany = document.querySelector('#rCompany')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
let query = {}

userForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("Hello")

    messageOne.textContent = ""
    query = { rID: rID.value, rCompany: rCompany.value}
    messageTwo.textContent= JSON.stringify(query)

})