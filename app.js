const express = require('express');
const pth = require('path');
const hbs = require('hbs');
const geocode = require('./src/utils/geocode');
const forecast = require('./src/utils/forecast');

const app = express();
const publicDirectoryPath = pth.join(__dirname, './public');
const viewsPath = pth.join(__dirname, './templates/views');
const partialsPath = pth.join(__dirname, './templates/partials');

const port = process.env.PORT || 3000;

//handlebars
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'taskmanager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About page",
        name: "Wasim"
    })
});

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Wasim"
    })
});

app.get('/weather', (req, res) => {

    if (!req.query.location) {
        return res.send({error: "Please provide an address"})
    }
    geocode(req.query.location, (error, data) => {
        if (error) {
            return res.send({error})
        }
        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({forecastData, data, "location": req.query.location})
        })
    })

});

app.get('/help', (req, res) => {
    res.render("help",
        {
            title: "Help page",
            name: "Wasim"
        })
});

app.get('/api', (req, res) => {
    res.render("api",
        {
            title: "Api for recruitment",
            name: "Wasim"
        })
});

app.get('/api/user', (req, res) => {
    res.render("api/user",
        {
            title: "Api for User"
            ,
            name: "Wasim"
        })
});
app.get('/api/candidate', (req, res) => {
    res.render("api/candidate",
        {
            title: "Api for Candidate",
            name: "Wasim"
        })
});
app.get('/api/recruiter', (req, res) => {
    res.render("api/recruiter",
        {
            title: "Api for Recruiter",
            name: "Wasim"
        })
});

app.get('/billing', (req, res) => {
    res.render("billing",
        {
            title: "Billing",
            name: "Wasim"
        })
});

app.get('/billing/create', (req, res) => {
    res.render("billing/create",
        {
            title: "Create Form",
            name: "Wasim"
        })
});


app.listen(port, () => {
    console.log("Server is up on port " + port)
});

