const Post = require("../models/Post");

const getDashboard = (req, res) => {
  try {
    const locals = {
      title: "Pensamentos Insanos",
      description1: "Pensamentos que não serão bem recebidos",
      description2: "tampouco bem interpretados",
    };
    res.render("dashboard", { locals });
  } catch (error) {
    console.log(error);
  }
};

const createNewPost = async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
    };

    await Post.create(newPost);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDashboard,
  createNewPost,
};
