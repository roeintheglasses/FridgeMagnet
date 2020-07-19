//imports
const express = require("express");
const path = require("path");

//Path and Env variables Setup
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

//Express consts
const app = express();

// Express & ejs Setup
app.use(express.static(publicDirectoryPath));
app.set("view engine", "ejs");

//Bodyparser
app.use(express.urlencoded({
    extended: false
}));

//Routes
app.use('/', (req, res) => {
    res.render('index')
});

app.get('/*', (req, res) => {
    res.render('404')
})

//Server start
app.listen(port, console.log("Server running at port " + port));