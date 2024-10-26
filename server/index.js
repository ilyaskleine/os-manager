const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

// ------ API -------
app.get("/api/", function(req, res) {
  res.send("Hello World");
});


// ------ React frontend -------
app.use(express.static(path.join(__dirname, './clientbuild')));

app.get("*", function(req, res) {
  return res.sendFile(path.resolve(__dirname, './clientbuild',     'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});