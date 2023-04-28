const express = require('express')
const app = express()

app.use(express.json())

const accounts = []

app.post('/create-account', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send('Email och/eller lösenord saknas')
    }

    const existingAccount = accounts.find((account) => account.email === email)

    if (existingAccount) {
        return res.status(409).send('Konto med samma email finns redan')
    }

    const newAccount = { email, password }
    accounts.push(newAccount)

    res.status(201).send('Konto skapat')
})

app.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send('Email och/eller lösenord saknas')
    }
    const existingAccount = accounts.find(
        (account) => account.email === email && account.password === password
    )

    if (existingAccount) {
        return res.status(200).send('Inloggning lyckades')
    }
    res.status(401).send('Fel email och/eller lösenord')
})

app.listen(8080, () => {
    console.log('Server started on port 8080')
})
