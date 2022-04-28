const express = require('express')
const path = require('path')


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'fcd6fd019ed846d3b2794dbe9d731107',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')
// record a generic message and send it to Rollbar

const app = express()
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`beam us up ${port}!`))