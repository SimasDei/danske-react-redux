const express = require('express');
const router = express.Router();

/**
 * @route Get /api/person
 * @desc Test route
 */
router.get('/test', (req, res) => res.send('Person API Route'));

/**
 * @route Get /api/person/$input$
 * @desc Pass user input value
 */
router.get('/:input', (req, res) => {
  const input = req.params.input;
  res.status(200).json({
    val1: input,
    val2: input / 2 || 'Value is not a number',
  });
});

module.exports = router;
