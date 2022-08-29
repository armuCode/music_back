const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { allData } = require("./src/bulkCreate.js");
const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
  try {
    server.listen(PORT, async () => {
      await allData();
      console.log("Data loaded");
      console.log(`%s listening at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
});
