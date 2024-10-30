const bodyParser = require('body-parser');
const cors = require('cors')
const express = require("express");
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

const database = require('./js/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

// ------ API -------
app.get("/api/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/quotes", function (req, res) {
  database.selectAllQuotes((err, results) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true, results: results });
  })
})

app.post("/api/quotes", function (req, res) {
  database.insertQuote(1, req.body.content, req.body.person, req.body.context, (err, results) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({success: true});
  })
})


// ------ React frontend -------
app.use(express.static(path.join(__dirname, './clientbuild')));

app.get("*", function (req, res) {
  return res.sendFile(path.resolve(__dirname, './clientbuild', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});