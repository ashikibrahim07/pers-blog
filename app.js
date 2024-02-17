import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import env, { configDotenv } from "dotenv";
const app = express();
const port = 4000;

env.config();

//DATABASE

const db = new pg.Client({
  user: process.env.PROCESS_USERNAME,
  host: process.env.PROCESS_HOST,
  database: process.env.PROCESS_DATABASE,
  password: process.env.PROCESS_PASSWORD,
  port: process.env.PROCESS_PORT,
});
db.connect();

//MIDDLEWARES

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//ROUTES

app.get("/", (req, res) => {
  db.query("SELECT * FROM posts ORDER BY posted_at DESC", (err, result) => {
    if (err) {
      console.log("error fetching query", err);
      res.status(500).send("error fetching query");
    } else {
      const posts = result.rows;
      res.render("home", { posts });
    }
  });
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/create", (req, res) => {
  const { title, content } = req.body;
  const currentTime = new Date();
  db.query(
    "INSERT INTO posts (title,content, posted_at) VALUES ($1,$2,$3)",
    [title, content, currentTime],
    (err, result) => {
      if (err) {
        console.log("Error Inserting Post", err);
        res.status(500).send("Error Inserting Post");
      } else {
        console.log("New Post Inserted", result.rows);
        res.redirect("/");
      }
    }
  );
});

app.get("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  db.query("SELECT * FROM posts WHERE id=$1", [postId], (err, result) => {
    if (err) {
      console.log("error fetching post", err);
      res.status(500).send("error fetching post");
    } else {
      const post = result.rows[0];
      res.render("edit", { post });
    }
  });
});

app.post("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  db.query(
    "UPDATE posts SET title=$1, content=$2 WHERE id=$3",
    [title, content, postId],
    (err, result) => {
      if (err) {
        console.log("error updating post", err);
        res.status(500).send("error updating post");
      } else {
        db.query("SELECT * FROM posts", (err, result) => {
          if (err) {
            console.log("error fetching posts", err);
            res.status(500).send("error fetching posts");
          } else {
            const posts = result.rows;
            res.redirect("/");
          }
        });
      }
    }
  );
});

app.get("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  db.query("DELETE FROM posts WHERE id=$1", [postId], (err, result) => {
    if (err) {
      console.log("error deleting post", err);
      res.status(500).send("error deleting post");
    } else {
      const posts = result.rows;
      res.redirect("/");
    }
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.post("/contact", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userMessage = req.body.message;
  const currentTime = new Date();
  db.query(
    "INSERT INTO user_details_and_message (name,email,message, submitted_at) VALUES ($1,$2,$3, $4)",
    [userName, userEmail, userMessage, currentTime],
    (err, result) => {
      if (err) {
        console.log(
          "User Tried to enter some message. but Error Sending Message",
          err
        );
        res.status(500).send("Error Sending Message");
      } else {
        console.log("New Message Inserted", result.rows);
        res.render("contact.ejs");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
