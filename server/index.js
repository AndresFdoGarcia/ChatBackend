import express from "express";
import cors from "cors";
import logger from "morgan";
import {connectDB} from "./db.js"
import transRoutes from "./routes/trans.routes.js"
import chatRoutes from "./routes/chat.routes.js"
import messageRoutes from "./routes/msg.routes.js"
import { Server as SocketServer } from "socket.io"
import {createServer} from "node:http"

const port = process.env.PORT ?? 3000;
const app = express();

const server = createServer(app);
const io = new SocketServer(server,{
    cors:{
        origin: "http://localhost:5173"
    }
});

io.on('connection', socket =>{
    console.log(" a user is Connnected");

    socket.on('event',(body) =>{
        socket.broadcast.emit('incMsg', {
            body,
            from: socket.id
        })
    })
});
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use("/api/trans",transRoutes);
app.use("/api/chats",chatRoutes);
app.use("/api/messages",messageRoutes);
app.get('/',(req,res)=>{
    res.send('<h1>Esto es un servidor</h1>');
});

server.listen(port,()=>{
    console.log(`Server running port ${port}`);
});

connectDB();