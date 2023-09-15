exports.home = function (req, res) {
  res.render("pages/home.ejs", {title: "home"});
};

exports.about = function (req, res) {
  res.render("pages/about.ejs", {title: "about"});
};

exports.contact = function (req, res) {
  res.render("pages/contact.ejs", {title: "contact"});
};
