import express from 'express'; // Web Framework
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import{connectDB} from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { app, server } from './lib/socket.js';

dotenv.config();

const PORT = process.env.PORT; 

// Middleware
// Extracts json data out of body
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
    connectDB();
});
