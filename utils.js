const Joi = require('joi')
exports.convertJoiErrorMessageInToObject = function (errors) {
    const errorObject = {};
    errors.forEach( error => {
        errorObject[error.path[0]] = error.message;
    })
    return errorObject;
}

exports.validateUser = function(user) {
    const JoiSchema = Joi.object({
      email: Joi.string().email().min(5).max(50).required(),
      password: Joi.string().min(5).required(),
    }).options({ abortEarly: false });
  
 return JoiSchema.validate(user);
}
