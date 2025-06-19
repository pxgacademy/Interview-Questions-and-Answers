// const a = 50
// const b = 60

// a^2 + 2*a*b + b^2

const answer = (a, b) => (a ^ 2) + 2 * a * b + (b ^ 2);

console.log(answer(50, 60));

const answer2 = (a, b) => {
  const x = a ^ 2;
  const y = 2 * a * b;
  const z = b ^ 2;
  return x + y + z;
};

console.log(answer2(50, 60));

console.log("3" + "3" + "3");
