/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.sendFile("index.html", { root: publicRoot })
};
