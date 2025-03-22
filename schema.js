const Joi = require("joi");

module.exports.blogSchema = Joi.object({
    blog: Joi.object({
        title: Joi.string().required(),
        image: Joi.string().allow("", null),
        content: Joi.string().required().max(400),
        tags: Joi.string().required(),
    }).required(),
});
