import express from 'express'
import users from "./routes/users.js";
import catalogue from "./routes/catalogue.js";
import news from "./routes/news.js";
import cors from 'cors';
const app = express();
const optionsCors = {
    headers: 'Access-Control-Allow-Origin',
    origin: 'https://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors());

app.use(express.json())
app.use(users)
app.use(catalogue)
app.use(news)

export default app;