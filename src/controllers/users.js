const User = require("./../models/users");

exports.createUser = (req, res) => {
  const userDB = new User({
    name: "EndavaUser",
    email: "david.carrero@endava.com",
    age: 31,
    password: "123456",
  });
  try {
    userDB.save((err, user) => {
      if (err) throw Error(err);
      console.log("user created");
      return res.status(200).json({
        status: 200,
        response: user,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
};

exports.getUser = (req, res) => {
  try {
    User.find({ email: "david.carrero@endava.com" }, (err, docs) => {
      if (err) throw Error(err);
      console.log(docs);
      console.log("user found");
      return res.status(200).json({
        status: 200,
        response: docs,
      });
    });
  } catch (error) {
    console.log("fail");
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
};

exports.deleteUser = (req, res) => {
  try {
    User.deleteOne({ email: "david.carrero@endava.com" }, (err) => {
      if (err) throw Error(err);
      console.log("user deleted");
      return res.status(200).json({
        status: 200,
      });
    });
  } catch (error) {
    console.log("fail");
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
};

exports.updateUser = (req, res) => {
  try {
    User.updateOne(
      { email: "david.carrero@endava.com", name: "David" },
      (err, docs) => {
        if (err) throw Error(err);
        console.log("user updated");
        return res.status(200).json({
          status: 200,
          response: docs,
        });
      }
    );
  } catch (error) {
    console.log("fail");
    res.status(400).json({
      status: 400,
      response: error,
    });
  }
};

exports.login = (req, res) => {
  res.send("<h1>Welcome to the main page </h1>");
};
