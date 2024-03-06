let fizzBuzz = (limit) => {
  let array = [" "];
  for (let i = 1; i <= limit; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      array.push("FizzBuzz");
    } else if (i % 3 == 0) {
      array.push("Fizz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  return array.forEach((a) => {
    console.log(a);
  });
};

fizzBuzz(100);
