
import {
  userRouter , studentRouter
} from '../rountes/index.js';
import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import handlebars from "express-handlebars";
import morgan from "morgan";
const app = express();
const port = 3001;
// 
app.use('/users',userRouter)
app.use('/students',studentRouter)



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 
app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

//
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/new", (req, res) => {
  res.render("new");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  res.send("search");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
