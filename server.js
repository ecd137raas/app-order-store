const http = require('http');
const app = require('./app')

const port = 3000; // ou a porta que você está usando

app.listen(port, '192.168.1.4', () => {
  console.log(`Server running at http://192.168.1.4:${port}/`);
});
