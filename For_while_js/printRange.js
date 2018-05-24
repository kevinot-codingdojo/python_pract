//show only odd or even days in a month
//s1 is the first odd or even day of the month
//e1 is the last day of the month
//k1 is the increment (sKip)
function printRange(s1,e1,k1)
{
  for (s1; s1 <= e1; s1 += k1)
  console.log(s1);
}
printRange(1,31,2)
