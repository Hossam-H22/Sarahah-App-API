

import joi from 'joi'
import { generalFields } from '../../middleware/validation.js';

export const sendMessage = {
    body: joi.object({
        message: joi.string().min(5).max(15000).required().messages({
            'string.empty': 'Please fill in your meassage',
            'any.required': 'meassage is required',
        }),
    }).required(),
    params: joi.object({
        receiverId: generalFields.id,
    }).required(),

};


export const deleteMessage = {
    params: joi.object({
        messageId: generalFields.id,
    }).required(),

};