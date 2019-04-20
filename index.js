const readlineSync = require("readline-sync");

const URL = readlineSync.question(
  "Por favor, colocar a url da página para ser processada:"
);

console.log(URL);
