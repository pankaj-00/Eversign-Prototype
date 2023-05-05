import Express from "express";
import routes from "./routes.js";
import connect from "./handlers/connect.js";
import dotenv from "dotenv";
import cors from "cors";

const app = Express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(Express.json());

const port = process.env.EXPRESS_PORT;

app.listen(port, async () => {
  console.log(`App is running on http://localhost:${port}`);
  connect();
  routes(app);
});
