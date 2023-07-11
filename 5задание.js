function numbers (x,n) {
  if (n===0){
    return 1;
  } else {
    return x * numbers(x, n-1);
  }
  
  }
   numbers(x=5,n=2);
  const result = numbers(x,n);
  console.log(result); 