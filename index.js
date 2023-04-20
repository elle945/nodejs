const express = require('express')

const app = express()

app.get('/add', (req, res) => {
    const x = parseInt(req.query.x)
    const y = parseInt(req.query.y)
    if (isNaN(x) || isNaN(y)) {
        res.status(400).send('Bad Request')
    } else {
        const sum = x + y
        res.status(200).send(`${sum}`)
    }
})


app.listen(8080, () => {
    console.log('server 8080 started')
})

//HELP WITH GET REQUEST
