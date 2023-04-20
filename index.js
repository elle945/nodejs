const express = require('express')
let useragent = require('express-useragent')

userAgents = []
values = []

const app = express()
app.use(useragent.express())
app.get('/', (req, res) => {
    res.send(req.useragent)
})
app.get('/log', (req, res) => {
    const userAgent = req.useragent.source
    const data = { userAgent: userAgent, time: new Date().toISOString() }
    values.push(data)
    res.send(values)
})
app.delete('/log', (req, res) => {
    if (req.method === 'DELETE') {
        values = []
        res.send(values)
    } else res.status(405)
})

app.listen(8080, () => {
    console.log('server on port 8080')
})

//HELP WITH GET REQUEST
