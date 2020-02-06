console.log("hello")

const cID = document.querySelector('#cID')
const cResume = document.querySelector('#cResume')
const cSkills = document.querySelector('#cSkills')
const cJobID = document.querySelector('#cJobID')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
let query = {}

userForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("Hello")

    messageOne.textContent = "Candidate details are: "
    query = { cID: cID.value, cResume:cResume.value, cSkills:cSkills.value, cJobID:cJobID.value }
    messageTwo.textContent= JSON.stringify(query)

})