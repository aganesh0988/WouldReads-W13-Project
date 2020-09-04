const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const { environment } = require('./config');
const app = express();
const indexRouter = require("./routes/index")


app.use(morgan("dev"));
app.use(express.json())
app.use(cors({}));

app.use("/", indexRouter)
