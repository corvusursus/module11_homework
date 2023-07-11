function isPrime(num) {
  if ( num <= 1 || num > 1000) {
  console.log ("данные не верны");
  return;}


for (let i = 2; i<=Math.sqrt(num); i++)
if ( num % i === 0)
{
  return false
} 
return num > 1
};
console.log ( isPrime(0))
console.log ( isPrime(12))
console.log ( isPrime(1200))