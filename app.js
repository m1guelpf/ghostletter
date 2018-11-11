const app = require('express')(),
      bodyParser = require('body-parser'),
      asyncHandler = require('express-async-handler'),
      { handleWebhook } = require('./webhookHandler');

require('dotenv').load();

app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.redirect('https://github.com/m1guelpf/ghostletter');
});

app.get('health', (req,res) => {
  res.send('OK');
});

app.post('/', asyncHandler(async(req, res) => {
  await handleWebhook(req);
  res.send('OK');
}));

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});