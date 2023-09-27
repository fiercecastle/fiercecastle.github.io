const express = require('express');
const path = require('path');
const fs = require('fs'); // Add this line to import the fs module

const app = express();
const port = 9001;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to handle URL redirection
app.use((req, res, next) => {
  const filePath = path.join(__dirname, 'public', req.path);
  
  // Check if the request has no file extension and the file doesn't exist
  if (!path.extname(req.path) && !fs.existsSync(filePath)) {
    // Redirect to the same URL with .html appended
    return res.redirect(req.path + '.html');
  }
  
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
