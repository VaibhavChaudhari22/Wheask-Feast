const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review");
const Listing = require("../models/listing");
const {validatereview, isLoggedIn, isReviewAuthor} = require("../middleware.js")


const reviewController = require("../controllers/reviews.js")




//review post route
router.post("/",isLoggedIn, validatereview,wrapAsync(reviewController.createReview));

//review delete route

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,
    wrapAsync(reviewController.destroyReview));


module.exports = router;

