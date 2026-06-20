require("dotenv").config();

const dns = require("dns");
const http = require("http");

const connectDB = require("./src/database/db");
const app = require("./src/app");

dns.setServers(["1.1.1.1"]);

const server = http.createServer(app);

connectDB();

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}. Move forward.`);
});