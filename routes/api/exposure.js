const express = require('express');
const router = express.Router();

/**
 * @route Get /api/exposure/test
 * @desc Test route
 */
router.get('/test', (req, res) => res.send('Exposure API Route'));

/**
 * @route Get /api/exposure/$val2$
 * @desc Pass second value received from person route
 */
router.get('/:val2', (req, res) => {
  const val1 = parseInt(req.params.val2);
  res.status(200).json({
    val5: (val1 * 2) / val1 + val1 / 2 || 'Value is not a number',
  });
});

module.exports = router;
