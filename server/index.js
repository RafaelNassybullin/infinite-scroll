require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./Router")
const helmet = require("helmet");

const PORT = 8888;
const app = express();

app.use(function (req, res, next) {
    res.removeHeader("Date");
    next();
});

app.use(helmet());
app.use(helmet.contentSecurityPolicy());
app.use(helmet.hidePoweredBy());
app.use(helmet.crossOriginEmbedderPolicy());
app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  const admin = "http://localhost:3001";
  const users = "http://localhost:3000";

  const allowedOrigins = [admin, users];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, OPTIONS, PUT, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);

  return next();
});

app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://rafael:rafael@cluster0.ksvub.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start()
