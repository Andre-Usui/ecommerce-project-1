const { doubleCsrf } = require("csrf-csrf");



module.exports = {
  
  invalidCsrfTokenError, // This is just for convenience if you plan on making your own middleware.
  generateToken, // Use this in your routes to provide a CSRF hash + token cookie and token.
  validateRequest, // Also a convenience if you plan on making your own middleware.
  doubleCsrfProtection, // This is the default CSRF protection middleware.
} = doubleCsrf({
  getSecret: () => process.env.CSRF_SECRET,
  cookieName: "csrfToken",
  cookieOptions: {
    sameSite: 'strict',
    secure: true,
    //secure: false, // for development
    maxAge: 1000 * 60 * 60 * 24,
  }
});