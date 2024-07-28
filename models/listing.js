const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        url: {
            type: String,
            required: true,
        },
        filename: {
            type: String,
            required: true,
        },
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    steps: {
        type: String,
        required: true,
    },
    reviews: {
        type: [{ type: Schema.Types.ObjectId, ref: "Review" }],
        default: [],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user", // assuming the model name for the user is "user"
        required: true,
    },
    categories: {
        type: [String],
        enum: [
            'Trending',
            'Vegetarian',
            'Non-Vegetarian',
            'Indian',
            'Italian',
            'Western',
            'Maharashtrian',
            'South Indian',
            'Dessert',
            'Coffee',
            'salad',
            'Breakfast',
        ],
        required: true,
    },

});

listingSchema.index({ title: 'text', description: 'text' });


listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
