const path = require('path');
const fs = require('fs');

const RESUME_DIR = path.join(__dirname, '..', 'public', 'resumes');

const getExistingFile = (fileNames) => {
  for (const name of fileNames) {
    const fullPath = path.join(RESUME_DIR, name);
    if (fs.existsSync(fullPath)) {
      return { fullPath, fileName: name };
    }
  }
  return null;
};

const downloadPdfResume = (req, res) => {
  const found = getExistingFile([
    'Nakul-Gupta_Resume.pdf',
    'Nakul_Gupta_Resume.pdf',
    'NakulGupta_Resume.pdf',
    'resume.pdf',
  ]);

  if (!found) {
    return res.status(404).json({
      success: false,
      message:
        'PDF resume file not found on server. Please ensure Nakul-Gupta_Resume.pdf is placed in server/public/resumes/.',
    });
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${found.fileName}"`);

  res.sendFile(found.fullPath, (err) => {
    if (err) {
      console.error('Error sending PDF resume:', err.message);
      if (!res.headersSent) {
        res.status(500).json({
          success: false,
          message: 'Error sending PDF file from server.',
        });
      }
    }
  });
};

const downloadDocxResume = (req, res) => {
  const found = getExistingFile([
    'Nakul-Gupta_Resume.docx',
    'Nakul_Gupta_Resume.docx',
    'NakulGupta_Resume.docx',
    'resume.docx',
  ]);

  if (!found) {
    return res.status(404).json({
      success: false,
      message:
        'Word (.docx) resume file not found on server. Please ensure Nakul-Gupta_Resume.docx is placed in server/public/resumes/.',
    });
  }

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  );
  res.setHeader('Content-Disposition', `attachment; filename="${found.fileName}"`);

  res.sendFile(found.fullPath, (err) => {
    if (err) {
      console.error('Error sending DOCX resume:', err.message);
      if (!res.headersSent) {
        res.status(500).json({
          success: false,
          message: 'Error sending DOCX file from server.',
        });
      }
    }
  });
};

module.exports = {
  downloadPdfResume,
  downloadDocxResume,
};
