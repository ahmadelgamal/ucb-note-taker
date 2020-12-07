const express = require('express');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

app.use(routes);
