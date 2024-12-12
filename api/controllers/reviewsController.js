const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const protect = require('../middleware/auth');
const reviewModel = require('../models/reviewModel');


// fetch reviews by _project_id

router.get('/productreviews/:id', asyncHandler(async (req, res) => {
  const reviews = await reviewModel.find({ _product_id: req.params.id });
  if (reviews) {
    res.status(200).json(reviews);
  } else {
    res.status(404).json({ message: 'Products reviews not found' });
  }
}));


// fetch review by review._id

router.get('/review/:id', asyncHandler(async (req, res) => {
  const review = await reviewModel.findById(req.params.id);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).json({ message: 'Products reviews not found' });
  }
}));


// add review

router.post('/addreview', protect, asyncHandler(async (req, res) => {
  const { rating, comment, _product_id } = req.body;
  const userId = req.user._id;
  const newReview = {
    rating: rating,
    comment: comment,
    _user_id: userId,
    _product_id: _product_id
  }
  try {
    await reviewModel.create(newReview);
    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json({ message: 'Review add not compete', error: err })
  }
}));


// edit review by review Id

router.put('/editreview/:id', protect, asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const userId = req.user._id;
  const reviewId = req.params.id;
  const review = await reviewModel.findById(reviewId);
  if (!review) {
    return res.status(404).json({ error: 'Review not found' })
  } else if (review._user_id.toString() !== userId.toString()) {
    return res.status(403).json({ error: 'You are not authorized to edit this review.' })
  } else {
    review.rating = rating || review.rating;
    review.comment = comment || review.comment;
  } try {
    const updatedReview = await review.save();
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: 'Review edit not compete', error: err })
    console.log(err);
  }

}));


// delete review by review Id

router.post('/deletereview/:id', protect, asyncHandler(async (req, res) => {
  const reviewId = req.params.id;
  const userId = req.user._id;
  try {
    const review = await reviewModel.findById(reviewId);
    if (!review) {
      res.status(404).json({ error: 'Review doesnt exist' });
    } else if (review._user_id.toString() !== userId.toString()) {
      return res.status(403).json({ error: 'You are not authorized to edit this review.' })
    } else {
      await review.deleteOne();
      res.status(200).json({ message: `${JSON.stringify(review.name)} was deleleted.` });
    }
  } catch (err) {
    res.status(400).json({ message: 'Review delete not compete', error: err })
  }
}));

module.exports = router;