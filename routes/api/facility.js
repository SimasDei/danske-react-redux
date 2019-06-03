const express = require('express');
const router = express.Router();

/**
 * @route Get /api/facility/test
 * @desc Test route
 */
router.get('/test', (req, res) => res.send('Facility API Route'));

/**
 * @route Get /api/facility/$val1$
 * @desc Pass received value from person route
 */
router.get('/:val1', (req, res) => {
  const val1 = req.params.val1;
  res.status(200).json({
    val3: val1 * 2 || 'Value is not a number',
    val4: val1 - (val1 / 2) * 3 || 'Value is not a number',
  });
});

module.exports = router;
