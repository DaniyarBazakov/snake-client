const IP = 'localhost';

const PORT = 50541;

const INITIALS = "DB"

const movementCommands = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right'
}

const sayMesage = {
  'h': 'Hello',
  'b': 'Bye',
  'l': 'LOL',
  'g': 'gg'
}

module.exports = {
  IP,
  PORT,
  movementCommands, 
  sayMesage,
  INITIALS
};