const net = require("net");
const { IP, PORT, INITIALS } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    ip: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write(`Name: ${INITIALS}`);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  return conn;
};

module.exports = { connect };

