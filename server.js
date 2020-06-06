const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const faker = require('faker');

const mailService = require('./services/email').default;
const dbService = require("./services/database").default;

const gramMailService = new mailService();
const gramDbService = new dbService(process.env.DATABASE_NAME, process.env.SCHEMA_NAME);

// Spinning up settings
//
//
/////////////////////////////
const app = express();
app.set("port", process.env.PORT || 3001);
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

/**
 * 
 */
function CreateandSeedDatabase(){
    console.log("Connecting and initialize database");

}

/**
 * Services and middleware
 */
const corsOptions = {
    origin: process.env.ORIGIN | '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    res.setHeader('Access-Control-Allow-Headers', `*`);
    next();
})

// API endpoints.
//
//
///////////////////
app.get("/api/getStates", (req, res) => {
    // const param = req.query.q;
    
    // if(!param){
    //     res.json({
    //         error: ""
    //     })
    //     return;
    // }
})

// Returns a list of programs.
app.get("/api/getPrograms", (req, res) =>{

})

// Returns a list of applicants.
app.get("/api/getApplicants", (req, res) => {
    let body = {};
    res.send(body)
});

// Returns applicant information via applicant Id.
app.get("/api/getApplicant/:id", (req, res) => {

});

// Processes the applicant's info. Saves it to the db.
app.post("/api/registrationForm", (req, res) => {
    
});

// Processes the contact form and sends a email to admin.
app.post("/api/saveContactForm", (req, res) => {

});


// Init server
//
//
//////////////////
app.listen(app.get("port", () => {
    console.log("Starting server...");
    console.log("Starting client");

    CreateandSeedDatabase();

    console.log("Listening right now.")
}))