const http = require('http');
const express = require('express');
const app = express();

const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer);

// Conexão direta entre usuário e servidor
io.addListener('connection', (socket) => {

    console.log("Um usuário conectado");
    socket.addListener("Nova mensagem", (msg) => {
        io.emit("Nova mensagem", msg);
    });

});

app.use(express.static('../public'));

const ipv4 = "xxx.xxx.x.xxx"; // Com ele é possível outros usuários acessarem, sem ele, apenas o localhost pode acessar
httpServer.listen(1000, ipv4);
