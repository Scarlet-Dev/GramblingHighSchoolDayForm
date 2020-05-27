const express = require('express');
const fs = require('fs');
const sqlite = require('sql.js');

// const filebuffer = fs.readFileSync("db/usda.sqlite3");

// const db = new sqlite.Database(filebuffer);
await initSqlJs({
    locateFile: file => ""
}).then(function(SQL){
    var db = new SQL.Database();
});

// const db = new SQL.Database();

const app = express();

app.set("port", process.env.PORT || 3001);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

const COLUMNS = [
    "",
    "",
    ""
]

// app.get("/api/getStates", (req, res) => {
//     const param = req.query.q;
    
//     if(!param){
//         res.json({
//             error: ""
//         })
//         return;
//     }
// })

app.listen(app.get("port", () => {
    console.log("Listening right now.")
}))