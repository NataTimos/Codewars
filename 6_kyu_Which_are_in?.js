function inArray(array1,array2)
{  let arr=[];
  
    for (let i = 0; i < array2.length; i++)
      {
        let j = 0;
                while (j < array1.length)
                {
                   if (array2[i].includes(array1[j])) 
                    arr.push(array1[j]);
                    j++;            
                }              
      }
  let unic= [...new Set(arr.sort())];
  
  return unic;
}
