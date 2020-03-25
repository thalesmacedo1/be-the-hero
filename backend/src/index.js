const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());    // para reconhecer o json. se não no post dá undefined, pq não reconhece o json.
app.use(routes);

app.listen(3000);