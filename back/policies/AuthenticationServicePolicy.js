const Joi = require('joi');

export default class AuthenticationServicePolicy {
  static validate(req, res, next) {
    const schema = {
      fullName: Joi.string().required(),
      userRole: Joi.string(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$'),
      ),
    };

    const { error } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'you must provide a valid email address',
          });
          break;
        case 'password':
          res.status(400).send({
            error: `the password must match the following rules
            <br>
            1. it must contain only the following characters:
            lower case, upper case and numbers
            <br>
            2. it must be at least 8 charcters in length and not 
            greater than 32 
            `,
          });
          break;
        default:
          res.status(400).send({
            error: 'invalid registration information',
          });
      }
    } else {
      next();
    }
  }
}
