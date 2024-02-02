const botaoEnviar = document.getElementById("enviar");
const caixaTexto = document.getElementById("texto");
const chat = document.getElementById("mensagens");

const socket = io();

botaoEnviar.addEventListener("click", () => {

    if(caixaTexto.value !== "") {
        socket.emit("Nova mensagem", caixaTexto.value);
        caixaTexto.value = "";
    }

});

socket.addEventListener("Nova mensagem", (msg) => {

    const elementoMsg = document.createElement("li"); // <li><li/>
    elementoMsg.textContent = msg;
    elementoMsg.classList.add("mensagem");

    chat.appendChild(elementoMsg);

});
