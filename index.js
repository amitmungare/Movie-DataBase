// require express for setting up the express server
const express = require('express');
// set up the port number
const port = 8000;

// using express
const app = express();

app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('assets'));

// make the app to listen on asigned port number
app.listen(port, function (err) {
    if (err) {
        console.log('err on port: ', err);
    }
    console.log(`server running on port: ${port}`);
});
