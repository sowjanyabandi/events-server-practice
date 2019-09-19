const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const db = require("./db");
const Event = require("./event/model");
const router = require("./event/router");
const app = express();
const port = 4000;

const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParserMiddleware = bodyParser();
app.use(bodyParserMiddleware);

app.use(router);

app.listen(port, () => console.log(`listening on port:${port}`));
