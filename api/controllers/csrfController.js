const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const COOKIE_OPTIONS = require('../util/cookieOptions');
const {
  invalidCsrfTokenError,
  generateToken,
  validateRequest,
  doubleCsrfProtection
} = require('../middleware/csrf');

router.get('/', asyncHandler(async (req, res) => {
  try {
    const csrfToken = await generateToken(req, res);
    console.log(csrfToken)
    res.json({ csrfToken })
  } catch (err) {
    console.log(err)
  }
}));

module.exports = router;