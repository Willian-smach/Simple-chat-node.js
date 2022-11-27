import { Router } from 'express';

import { listMessagens } from './useCases/listMessages.js';
import { createMessage } from './useCases/createMessage.js';

export const router = Router();

router.get('/messages', listMessagens);

router.post('/messages', createMessage)
