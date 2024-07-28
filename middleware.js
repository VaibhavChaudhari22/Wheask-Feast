const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require('./utils/ExpressError');
const { listingSchema, reviewSchema,searchSchema } = require("./schema");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in first");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    if (!listing.owner.equals(req.user._id)) { // Assuming req.user._id is the current user's ID
        req.flash("error", "You are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body, { abortEarly: false });
  
    if (error) {
        const details = error.details.map(el => el.message).join(', ');
        throw new ExpressError(details, 400);
    } else {
        next();
    }
  };

module.exports.validatereview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const details = error.details.map(el => el.message).join(', ');
        throw new ExpressError(details, 400);
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review) {
        req.flash("error", "Review not found");
        return res.redirect(`/listings/${id}`);
    }
    if (!review.author.equals(req.user._id)) { // Assuming req.user._id is the current user's ID
        req.flash("error", "You are not the owner of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};


module.exports.validateSearch = (req, res, next) => {
    const { error } = searchSchema.validate(req.query);
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
};
