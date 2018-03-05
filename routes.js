const express = require('express');
const router = express.Router();

router.post('/user/login', (request, response) => {
  let loginUser = request.body;

  if (loginUser['email'] === 'test@mail.com' && loginUser['password'] === '1234') {
    response.json({
      "data": {
        "id": 1000,
        "email": loginUser['email']
      }
    });
  } else {
    response.json({
      "error": {
        "code": 500,
        "message": "Incorrect email or password"
      }
    });
  }
});

module.exports = router;
