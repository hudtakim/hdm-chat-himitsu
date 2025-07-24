const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require("path");

app.use(express.static(path.join(__dirname, "client")));
app.use(express.static("public")); // if needed

let waitingUsers = [];

function tryMatch() {
  while (waitingUsers.length >= 2) {
    const socket1 = waitingUsers.shift();
    const socket2 = waitingUsers.shift();

    socket1.partner = socket2;
    socket2.partner = socket1;

    socket1.emit("start");
    socket2.emit("start");
  }
}

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Masukkan pengguna ke antrean saat koneksi dibuat
  waitingUsers.push(socket);
  socket.emit("waiting", { msg: "Waiting for a partner..." });
  tryMatch();

  socket.on("message", (data) => {
    if (socket.partner) {
      socket.partner.emit("message", data);
    }
  });

  socket.on("find", () => {
    if (socket.partner) {
      socket.partner.emit("end");
      socket.partner.partner = null;
      socket.partner = null;
    }

    waitingUsers = waitingUsers.filter((s) => s !== socket);

    waitingUsers.push(socket);
    socket.emit("waiting", { msg: "Finding new partner..." });
    tryMatch();
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    waitingUsers = waitingUsers.filter((s) => s !== socket);

    if (socket.partner) {
      socket.partner.emit("end");
      socket.partner.partner = null;
    }
  });
});

const port = 3077;
server.listen(port, () => console.log("Server running on http://localhost:" + port));
