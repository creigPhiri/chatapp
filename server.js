const app = require('./app')
const http = require('http');
const server = http.createServer(app)

//mongoose implementation
const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:securepassword1@ds225010.mlab.com:25010/whatsapp-v2',{useNewUrlParser:true},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected to db')
    }
});

//socket.io implementation
const io = require('socket.io').listen(server);

//listen on every connection
io.on('connection',(socket)=>{
    console.log(`socket connection established`);
    
    socket.emit('test',{env:process.env.port})

    socket.username = 'Annonymous'
    //each socket object represents a client instance
    socket.on('change_username',(data)=>{
        socket.username = data.username;
    })
    //listening on new message
    socket.on("new_message",(data)=>{
        //broadcasting the message. io.sockets is an object of all sockets
        io.sockets.emit("new_message",{message:data.message, username:socket.username})
    })
    
    socket.on("typing",(data)=>{
        socket.broadcast.emit("typing",{username:socket.username})
    })
})

//establishing the port
const port = (process.env.PORT|| 3000);

server.listen(port,()=>{
    console.log(`now listening on port ${port}`);

});



