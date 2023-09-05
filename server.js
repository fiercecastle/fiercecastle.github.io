const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Started!\n');
});

const port = 20;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
