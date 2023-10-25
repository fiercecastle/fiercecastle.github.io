const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 9001;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));


// Custom middleware to handle URL redirection and alert
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'public', req.path);

  // Check if the request has no file extension and the file doesn't exist
  if (!path.extname(req.path) && !fs.existsSync(filePath)) {
    // Redirect to the same URL with .html appended
    return res.redirect(req.path + '.html');
  }

  // Check if the URL doesn't start with "about:blank" or "file:"
 if (!req.url.startsWith('about:blank') && !req.url.startsWith('file:')) {
    // Display an alert if the URL doesn't match
    return res.send('<script>alert("Get out of here, idiot.")</script>');
  }

  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
