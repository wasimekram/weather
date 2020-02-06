console.log("hello")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value
    messageOne.textContent = "\nLoading..."
    messageTwo.textContent=""


    fetch('/weather?location=' + location).then((response)=>{
        response.json().then((data)=>{
          if(data.error){
              messageOne.textContent =data.error
          }
          else{
              messageOne.innerText = "\n\nThe location is " + data.data.response.body.features[0].place_name +  "\n"
             messageOne.innerText+="The latitude is " + data.data.latitude + " \n "
              messageOne.innerText+="The longitude is " + data.data.longitude
              messageTwo.innerText = data.forecastData.message + "\nHourly forecast: " + data.forecastData.response.body.hourly.summary + "\nDaily forecast: " + data.forecastData.response.body.daily.summary

              console.log(data)
          }
        })
    })
})