/*To understand line breaking in console.log() in nested loops.
Want to print array in triangle shape like this.
    #
   # #
  # # #
 # # # #
# # # # #

*/

for (var i = 0; i<5; i++) {
    var str = "";
    for (var j=0; j<=i; j++) {
    str += "  #";
       }
   console.log(str);
  }

/*
#
#  #
#  #  #
#  #  #  #
#  #  #  #  #

*/