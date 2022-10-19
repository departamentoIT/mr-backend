import chalk from "chalk";
import express from "express";
import users from "./routes/users.js";
import catalogue from "./routes/catalogue.js";
import news from "./routes/news.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
// const optionsCors = {
//     headers: 'Access-Control-Allow-Origin',
//     origin: 'https://localhost:3000',
//     optionsSuccessStatus: 200
// }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  let allowedOrigins = ["http://localhost:4200", "http://localhost:8080", "https://misionriqueza.com"];

  let origin = req.headers.origin;

  console.log(chalk.red.bgBlue.bold(`origin: ${origin}`));

  if (allowedOrigins.includes(origin)) {
    console.log(chalk.bgRed.white(`origin includes`, origin));
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, token, authorization, apiKeyToken, responseType, content-type"
  );

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

app.use(cors());
app.use(express.json());
app.use(users);
app.use(catalogue);
app.use(news);

export default app;
