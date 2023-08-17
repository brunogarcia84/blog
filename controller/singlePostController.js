const Post = require("../models/Post");

const getSinglePost = async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: "Pensamentos Insanos",
      description1: "Eis aqui o pensamento que será repudiado",
    };

    res.render("singlePost", {
      locals,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSinglePost,
};
