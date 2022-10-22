const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    fs.readFile("C:\\Windows.old\\brute_good.txt", function (err, file) {
        if (err) {
            throw err
        }
        res.writeHeader(200, {"Content-Type": "text/plain"})
        const lines = file.toString().split(/\r?\n/)
        res.write(JSON.stringify({
            success: true,
            listSSH: lines
        }))
        res.end()
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
const http = require('http')
const fs = require('fs')

const hostname = '0.0.0.0'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    fs.readFile("C:\\Windows.old\\brute_good.txt", function (err, file) {
        if (err) {
            throw err
        }
        res.writeHeader(200, {"Content-Type": "text/plain"})
        res.write(file)
        res.end()
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
