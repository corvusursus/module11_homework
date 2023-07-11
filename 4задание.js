function numbers (a, b) {

  let start = a;

  const interval = setInterval (function() {
    console.log(start);
    if (start = b) {
      clearInterval(interval);
    }
    start++;
  },1000);
}

numbers(3, 12);