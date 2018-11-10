const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});