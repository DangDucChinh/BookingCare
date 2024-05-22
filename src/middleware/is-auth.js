
const authenticateUser = (req, res, next) => {
  if (req.session && req.session.data && req.session.data.user && req.session.data.isLoggedIn) {
    // Người dùng đã đăng nhập
    console.log('authen ok');
    next();
  } else {
    // Người dùng chưa đăng nhập, chuyển hướng hoặc trả về lỗi
    res.status(401).json({
      errCode: 0,
      message: 'chưa thể authen được tại  is-authen.js',
    });
  }
};

module.exports = authenticateUser;
