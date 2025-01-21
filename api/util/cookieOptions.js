const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true ,
  //secure: false,  // for development
  sameSite: 'lax',
  maxAge: 1000 * 60 * 60 * 24, // 1 day in milliseconds
};

module.exports = COOKIE_OPTIONS;