//* validators/register.validator.js
import Joi from 'joi';

const accountSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).max(20).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{7,20}$')).required(),
    firstName: Joi.string().min(1).max(30).required(),
    lastName: Joi.string().min(1).max(30).required()
});

export default { account: accountSchema };
