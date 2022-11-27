import express from 'express';
import mongoose from 'mongoose';
import {router} from './router.js';
import {createServer} from 'http';
import { Server } from 'socket.io';

const PORT = 3001;
	const app = express();
	const httpServer = createServer(app);
	export const io = new Server(httpServer);

	app.use(express.json());
	app.use(express.urlencoded({extended: false}))
	app.use(router);

	app.use(express.static('./public')); // INDICANDO O LOCAL DOS ARQUIVOS ESTÁTICOS, NO CASO O INDEX.HTML


	httpServer.listen(PORT, () => {
		console.log(`Server started on port: ${PORT}`);
	});

	io.on('connection', socket =>{
		console.log(`a user is connected ${socket.id}`);
	});

mongoose.connect('mongodb://localhost:27017')
.then(() => {
	console.log('DB Connected');
})
.catch(() => console.log('Error to connect DB'));



