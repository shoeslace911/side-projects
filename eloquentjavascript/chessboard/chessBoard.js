const chessBoard = (x, y) => {
  let hashArray = [];
  let positiveHash = [];
  let negativeHash = [];
  var repTimes = 0;
  for (let i = 1; i <= x; i++) {
    if (repTimes % 2 == 0) {
      for (let i = 0; i <= y; i++) {
        if (i % 2 == 0) {
          positiveHash.push(" ");
        } else {
          positiveHash.push("#");
        }
      }
      hashArray.push(positiveHash.join(""));
      positiveHash = [];
    } else {
      for (let i = 0; i <= y; i++) {
        if (i % 2 == 0) {
          negativeHash.push("#");
        } else {
          negativeHash.push(" ");
        }
      }
      hashArray.push(negativeHash.join(""));
      negativeHash = [];
    }
    repTimes += 1;
  }
  return console.log(hashArray);
};

chessBoard(10, 10);