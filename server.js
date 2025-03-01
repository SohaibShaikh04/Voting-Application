const express = require('express');
const http = require('http'); // Import HTTP module
const { Server } = require('socket.io');
const db = require('./db'); // Database connection
const app = express();
require('dotenv').config();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(express.json());

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", credentials: true },
});

io.on("connection", (socket) => {
  console.log("New WebSocket connection");

  socket.on("vote", async () => {
    try {
      const updatedCandidates = await db.Candidate.find({}, "name party voteCount");
      io.emit("voteUpdate", updatedCandidates); // Broadcast updated votes
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
