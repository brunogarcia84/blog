const Post = require("../models/Post");

const getMainPage = async (req, res) => {
  try {
    const locals = {
      title: "Pensamentos Insanos",
      description1: "Pensamentos que não serão bem recebidos",
      description2: "tampouco bem interpretados",
    };

    let perPage = 1;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const data_side = await Post.aggregate([{ $sort: { createdAt: 1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.count();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      data_side,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMainPage,
};
