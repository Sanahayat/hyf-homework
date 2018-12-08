/*- Write a program, that calculates the row of x's , y's and z's  in array.

       1
      1 1
     1 2 1
    1 3 3 1
   1 4 6 4 1
  x x x x x x
 y y y y y y y
z z z z z z z z
*/


let array = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],["x","x","x","x","x","x"],["y","y","y","y","y","y","y"],["z","z","z","z","z","z","z","z"]];
for(let i=0; i<8 ; i++)
    for(let j=0; j<=i; j++)
    {
        if(j==0 || i==j)
            array[i][j] = 1;
        else
            array[i][j] = array[i-1][j-1] + array[i-1][j];
    }
    console.log(array);