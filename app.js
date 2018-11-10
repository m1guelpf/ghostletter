const app = require('express')(),
      bodyParser = require('body-parser');

app.use(bodyParser.json())

});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});