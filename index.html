const express = require('express')
const app = express()
const port = process.env.PORT || 8080 
const http = require('http')

const server = http.createServer(app)

const {Server} = require('socket.io')

const io = new Server(server)



app.get('/', (req, res) => {

  //res.cookie('sites', makeid(50));
  res.sendFile(__dirname + '/index.html')

})
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/test.html')

})
var clients = 0;

io.on('connection', (socket) => {
	
	var ip = socket.client.request.headers['x-forwarded-for'] || socket.client.conn.remoteAddress || socket.conn.remoteAddress || socket.request.connection.remoteAddress;
	console.log(ip)
	console.log('user ket noi === ' + clients)
	clients++

	//io.emit("new msg", { msg: `Hiện tại có ${clients} đang kết nối !!` });	
	io.emit("count",clients);	


	socket.on('on-chat', data => {
		
  		//cai nay gui cho tat ca ke ca minh
		//io.emit('user-chat', data)
		//

		//gui cho moi nguoi tru minh ra
		io.emit("count",clients);
		socket.broadcast.emit('user-chat', data);
		

		

		
			
	})
	socket.on("disconnect", function() {
    clients--;
    io.emit("count",clients);
  });
	
}) 


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)


})
