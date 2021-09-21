const express = require("express");
const cors = require("cors");
const app = express();
const { connect } = require("./db");
const { helloWorld } = require("./controllers/users");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

class App {
  constructor() {
    this.initApp();
    this.routes();
    this.initDatabase();
  }

  initApp() {
    app.use(cors());
    app.use(express.json());
  }

  routes() {
    // Routes
    app.use(adminRoutes);
    app.use(userRoutes);

    app.use((req, res, next) => {
      res.status(404).send("<h1>Page not found</h1>");
    });
  }

  initDatabase() {
    connect(
      "mongodb+srv://AdminEndava:Endava2021@endava.yyroa.mongodb.net/Endava?retryWrites=true&w=majority"
    );
  }

  initServer(port) {
    app.listen(port, () => {
      console.log(`Server Listening on http://localhost:${port}`);
    });
  }
}

module.exports = App;
