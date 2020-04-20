const handleAllusers = (req, res, db) => {
  db.select("*")
    .from("users")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("Not connected to database"));
};

module.exports = {
  handleAllusers: handleAllusers,
};
