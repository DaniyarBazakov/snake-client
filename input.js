let connection;

const movementCommands = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right'
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  const command = movementCommands[key];
  if (key === "\u0003") {
    process.exit();
  }
  if (command) {
    connection.write(`Move: ${command}`);
  }
};

module.exports = { setupInput };