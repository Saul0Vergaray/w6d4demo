const express = require('express')
const path = require('path')


// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'ee939a754c3548d799dbb4fa9f1b0b6a',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
// record a generic message and send it to Rollbar

const app = express()
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
    rollbar.log("Hello world!");
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`beam us up ${port}!`))