const events = require("events");
const scorekeeper = new events.EventEmitter();
var score1 = 0;
var score2 = 0;
function make_basket(team) {
  if (team === "A") {
    score1 += 1;
  } else {
    score2 += 1;
  }
  console.log("Score of team A is" + score1);
  console.log("Score of team B is" + score2);
  console.log(" ");
}
scorekeeper.on("make_basket", make_basket);
function scored(team) {
  scorekeeper.emit("make_basket", team);
}
scored("A");
scored("B");
scored("A");
scored("B");
scored("A");
scored("B");
