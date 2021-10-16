const express = require('express')
const app = express()
const port = process.env.PORT || 8080


const http = require('http')

const server = http.createServer(app)

const {Server} = require('socket.io')

const io = new Server(server)



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')

})
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/test.html')

})
var dem = 1

io.on('connection', (socket) => {
	
	var ip = socket.client.request.headers['x-forwarded-for'] || socket.client.conn.remoteAddress || socket.conn.remoteAddress || socket.request.connection.remoteAddress;
	console.log(ip)
	console.log('user ket noi ' + dem)
	dem += 1
	socket.on('on-chat', data => {
			io.emit('user-chat', data)
	})
}) 


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)


})