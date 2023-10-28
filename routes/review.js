const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");

const reviewController = require("../comtrollers/reviews.js");
const {
  validateReview,
  isLoggedIn,
  isReviewsAuthor,
} = require("../middleware.js");

//

// reviews
//post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewsAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
