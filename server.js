const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(express.static(path.join(__dirname, "public")));

let users = [];

io.on("connection", (socket) => {
  console.log("Nouvel utilisateur connecté:", socket.id);

  socket.on("join", (userData) => {
    socket.username = userData.username;
    socket.photo = userData.photo;
    users.push({ username: userData.username, photo: userData.photo, id: socket.id });
    io.emit("user list", users);
    io.emit("chat message", {
      name: "SYSTEM",
      text: userData.username + " a rejoint le groupe",
      photo: "https://i.imgur.com/7bYwF9d.png"
    });
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("typing", () => {
    socket.broadcast.emit("typing", socket.username);
  });

  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing", socket.username);
  });

  socket.on("disconnect", () => {
    users = users.filter(u => u.id !== socket.id);
    io.emit("user list", users);
    if (socket.username) {
      io.emit("chat message", {
        name: "SYSTEM",
        text: socket.username + " a quitté le groupe",
        photo: "https://i.imgur.com/7bYwF9d.png"
      });
    }
  });
});

server.listen(3000, () => {
  console.log("🚀 Serveur DevBook lancé sur http://localhost:3000");
});
