const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        image: Joi.object({
            url: Joi.string().optional(),
            filename: Joi.string().optional()
        }).optional(),
        description: Joi.string().required(),
        ingredients: Joi.string().required(),
        steps: Joi.string().required(),
        categories: Joi.array().items(
            Joi.string().valid(
                'Trending', 'Vegetarian', 'Non-Vegetarian', 'Indian', 'Italian',
                'Western', 'Maharashtrian', 'South Indian', 'Dessert', 'Coffee', 'salad', 'Breakfast'
            )
        ).required()
    }).required()
});


module.exports.reviewSchema = Joi.object({
    review:Joi.object({
     rating:Joi.number().required().min(1).max(5),
     comment:Joi.string().required()
    }).required()
})

module.exports.searchSchema = Joi.object({
    q: Joi.string().min(1).required()
});