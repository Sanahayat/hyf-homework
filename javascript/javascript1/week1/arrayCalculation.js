/*- Write a program, that calculates the row of x's and y's as arrays

       1
      1 1
     1 2 1
    1 3 3 1
   1 4 6 4 1
  x x x x x x
 y y y y y y y

*/

let calculationArray = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],["x","x","x","x","x","x"],["y","y","y","y","y","y","y"]];
let rowOfX = 0;
let rowOfY = 0;
for(let i=0; i<calculationArray.length; i++){
    for(let j=0; j<=i; j++){
        if(calculationArray[i][j] == "x")
            rowOfX++;
        if(calculationArray[i][j] == "y")
            rowOfY++;
    }
}
console.log("number of X's in row are: " + rowOfX);
console.log("number of Y's in row are: " + rowOfY);