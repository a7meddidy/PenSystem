const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(process.env.DB_URL).then((connect) => {
    console.log(`Database Connected ${connect.connection.host}`);
  });
};

module.exports = dbConnection;
