const app = require('express')(),
      bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.redirect('https://github.com/m1guelpf/ghostletter');
});

});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});