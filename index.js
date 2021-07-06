const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({Welcome: 'How to create and API with Node.js, Express, and PostgreSQL.'})
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})