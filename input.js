const { movementCommands, sayMesage } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  const command = movementCommands[key];
  const message = sayMesage[key];
  if (key === "\u0003") {
    process.exit();
  }
  if (command) {
    connection.write(`Move: ${command}`);
  }
  if (message) {
    connection.write(`Say: ${message}`);
  }
};

module.exports = { setupInput };