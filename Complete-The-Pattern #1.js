function pattern(n)
{  
  let str = '';
  if (n == 0) return str;
  for (let i = 1; i <= n; i++)
  {
    for (let j = 0; j < i; j++)
      str += i;  
    if(i == n) break;
    str += "\n";
  }
  return (str);
}
