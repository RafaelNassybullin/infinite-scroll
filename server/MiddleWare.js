module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return next(res.status(400).json({message: 'Error'}));
    }

    const accessToken = authorizationHeader.split(' ')[1];

    if (!accessToken) {
      return next(res.status(400).json({message: 'Error'}));
    }

    const userData = accessToken;

    if (userData !== process.env.kjdfnkgmdflkvmdfkjb94j39mb98j3j9m39bm938j9m9) {
      return next(res.status(400).json({message: 'Error'}));
    }

    req.user = userData;

    next();

  } catch {
    return next(res.status(400).json({message: 'Error'}));
  }
};
