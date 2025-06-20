const express = require('express');
const { login } = require('../controllers/authController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

const router = express.Router();
router.get('/login', login);
router.post('/login', login);

router.get('/dados', authenticateJWT, (req, res) => {
  res.json({ dadosPrivados: 'Informações secretas acessadas com JWT!', usuario: req.user });
});

module.exports = router;
