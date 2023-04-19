
const http = require('http')

const app = http.createServer((req, res) => {
    if ( req.url === '/') {
        res.write('Hejsan svejsan')
      } else if ( req.url === '/foo') {
        res.write('bar')
      } else if (req.url === '/baz') {
        res.write('qux')
      } else {
        res.statusCode = 404
      }

      res.end()
    })
app.listen({ port: 8080 }, () => {
    console.log('Server started')
})
