const express = require('express')
const pth = require('path')
const hbs = require('hbs')
const geocode = require('./src/utils/geocode')
const forecast = require('./src/utils/forecast')
const request = require('request')

const app = express()
const publicDirectoryPath = pth.join(__dirname, './public')
const viewsPath = pth.join(__dirname, './templates/views')
const partialsPath = pth.join(__dirname, './templates/partials')

const port = process.env.port || 3000

//handlebars
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About title",
        name: "Wasim"
    })
})

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Wasim"
    })
})

app.get('/weather', (req, res) => {

    if (!req.query.location) {
        return res.send({error: "Please provide an address"})
    }
    geocode(req.query.location, (error, data) => {
        if (error) {
            return res.send({error})
        }
        forecast(data.longitude, data.latitude, (error, data) => {
            if (error) {
                return res.send({error})
            }
            res.send({data})
        })
    })

})

app.get('/help', (req, res) => {
    res.render("help",
        {
            title: "Help page",
            name: "Wasim"
        })
})

app.get('/api', (req, res)=>{
    res.render("api",
        {
            title: "Api for recruitment",
            name:"Wasim"
        })
})

app.get('/api/user', (req, res)=>{
    res.render("api/user",
        {
            title: "Api for recruitment",
            name:"Wasim"
        })
})
app.get('/api/candidate', (req, res)=>{
    res.render("api/candidate",
        {
            title: "Api for recruitment",
            name:"Wasim"
        })
})
app.get('/api/recruiter', (req, res)=>{
    res.render("api/recruiter",
        {
            title: "Api for recruitment",
            name:"Wasim"
        })
})


app.listen(port, () => {
    console.log("Server is up on port " + port)
})