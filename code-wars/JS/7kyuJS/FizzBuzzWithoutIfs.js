const fizzBuzz = n => {
  return n % 15 === 0 ? "FizzBuzz" :
    n % 5 === 0 ? "Buzz" :
      n % 3 === 0 ? "Fizz" : n
};