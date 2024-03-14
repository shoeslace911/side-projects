const chessBoard = (x, y) => {
  let hashArray = [];
  let positiveHash = [];
  let negativeHash = [];
  var repTimes = 0;
  for (let i = 1; i <= x; i++) {
    if (repTimes % 2 == 0) {
      for (let i = 0; i <= y; i++) {
        i % 2 == 0 ? positiveHash.push(" ") : positiveHash.push("#");
      }
      hashArray.push(positiveHash.join("") + "\n");
      positiveHash = [];
    } else {
      for (let i = 0; i <= y; i++) {
        i % 2 == 0 ? negativeHash.push("#") : negativeHash.push(" ");
      }
      hashArray.push(negativeHash.join("") + "\n");
      negativeHash = [];
    }
    repTimes += 1;
  }
  return console.log(hashArray.join(""));
};

// refactor
chessBoard(5, 20);
