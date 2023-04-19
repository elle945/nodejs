const http = require('http')
let count = 0

const app = (req, res) => {
    if (req.url === '/') {
        res.write('Hejsan svejsan')
        res.end()
    } else if (req.url === '/foo') {
        res.write('bar')
        res.end()
    } else if (req.url === '/baz') {
        res.write('qux')
        res.end()
    } else if (req.url === '/count') {
        if (req.method === 'GET') {
            res.write(`${count}`)
            res.end()
        } else {
            res.statusCode = 405
            res.end()
        }
    } else if (req.url === '/increment')
        if (req.method === 'POST') {
            count++
            res.end()
        } else {
            res.statusCode = 405
            res.end()
        }
    else if (req.url.startsWith('/add/')) {
        if (req.method === 'POST') {
            const urlParam = parseInt(req.url.split('/').pop())
            count += urlParam
            res.end()
        } else {
            res.statusCode = 405
            res.end()
        }
    } else {
        res.statusCode = 404
        res.end()
    }
}
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/redirect')) {
        res.writeHead(301, { Location: 'http://localhost:3000/' })
        res.end()
    } else {
        app(req, res)
    }
})

const redirection = http.createServer((req, res) => {
    res.writeHead(302, { Location: 'http://localhost:3000/' })
    res.end()
})

redirection.listen(8080, () => {
    console.log('Server started on 8080')
})

server.listen(3000, () => {
    console.log('Server started on 3000')
})
