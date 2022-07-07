require("dotenv").config({path:__dirname + '/.env'});

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const postModel = require("./models/post");
const cors = require("cors");



app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('monogodb has been connected');
});
console.log(typeof process.env.DATABASE);


app.get("/", (req, res) => {
  res.send('working!')
})

app.get("/getPosts/:user", (req, res) => {
  const user = req.params.user;
  postModel
    .find({ author: user })
    .sort({ createdAt: -1 })
    .exec((err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
});

app.get("/getPost/:postId", (req, res) => {
  const post = req.params.postId;
  postModel.find({ _id: post }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.get("/deletePost/:postId", (req, res) => {
  const post = req.params.postId;
  postModel.findOneAndDelete({ _id: post }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.post("/createPost", async (req, res) => {
  const body = req.body;
  const post = new postModel(body);
  await post.save();

  res.json(post);
});



app.listen(process.env.PORT || 3001, (req, res) => {
  console.log(`Server up and running`);
});
