const express = require("express");
const { connect } = require("./app/config/database");
const cors = require("cors");
const app = express();
const logger = require("morgan");

const families = require("./app/api/routes/families.route");
const habitat = require("./app/api/routes/habitat.route");
const animal = require("./app/api/routes/animal.route");
const collaboration = require("./app/api/routes/collaboration.route");

const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");
const PORT = 4000;

connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:4200'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/families", families);
app.use("/habitat", habitat);
app.use("/animal", animal);
app.use("/collaboration", collaboration);

app.use((req, res, next) => {
    let err = new Error();
    err.status = 404;
    err.message = HTTPSTATUSCODE[404];
    next(err);
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.disable('x-powered-by');

app.get('/debug', (req, res) => {
    console.log('This is a console message');
    res.send('Using debug module with Node.js');
});

app.listen(PORT, () => {
    console.log(`Node server listening on port ${PORT}`);
});


