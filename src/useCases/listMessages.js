
import { Message } from '../models/message.js';

export async function listMessagens(req = Request, res = Response){
	try {
		const messages = await Message.find();
		res.json(messages);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
