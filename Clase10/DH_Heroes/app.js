// 1. require
const path = require ('path');
const express = require ('express');
const app = express ();

// 2. Puertos
app.listen (3030, () => {console.log ('Todo joya!! Ya podes ir a http://localhost:3030')});

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})