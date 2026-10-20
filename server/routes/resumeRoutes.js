const express = require('express');
const router = express.Router();
const {
  downloadPdfResume,
  downloadDocxResume,
} = require('../controllers/resumeController');

router.get('/pdf', downloadPdfResume);
router.get('/docx', downloadDocxResume);

module.exports = router;
