const getAboutPage = async (req, res) => {
  try {
    const locals = {
      title: "Pensamentos Insanos",
      description1: "Pensamentos que não serão bem recebidos",
      description2: "tampouco bem interpretados",
    };

    res.render("about", {
      locals,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAboutPage,
};
