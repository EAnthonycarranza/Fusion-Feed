const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const connectToDatabase = require('./config/connection');
const userRoutes = require('./controllers/api/userRoutes');

const app = express();
const PORT = 3001;

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",  // Adjust this if needed
        methods: ["GET", "POST"]
    }
});

let userCount = 0;

io.on('connection', (socket) => {
    userCount++;
    io.emit('userCount', userCount);

    socket.on('disconnect', () => {
        userCount--;
        io.emit('userCount', userCount);
    });
});

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('Hello from Social Media App Backend');
});

// Use Routes
app.use('/users', userRoutes);

// Start Server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
