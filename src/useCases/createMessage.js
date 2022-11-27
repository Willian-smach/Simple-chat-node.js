import { Message } from '../models/message.js';
import { io } from '../server.js';

export async function createMessage(req = Request, res = Response){
	try {
		const { name, messageText } = req.body;
		//console.log({ name, messageText });

		if(!name){
			res.status(400).json({
				error: 'Nome é obrigatório'
			});
		}

		const message = await Message.create({ name, messageText });

		io.emit('message', req.body);

		res.status(201).json(message);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
