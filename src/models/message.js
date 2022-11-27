import { mongoose, Schema } from 'mongoose';

export const Message = mongoose.model('Message', new Schema({
	name: {
		type: String,
		required: true,
	},
	messageText: {
		type: String,
		required: true,
	},
}));
