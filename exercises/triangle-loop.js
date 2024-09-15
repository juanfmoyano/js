/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

// Way 1
let linePrint = "#";
for (let i = 0; i < 7; i++) {
  console.log(linePrint);
  linePrint += "#";
}

// Way 2
let whileCounter = 0;
while (whileCounter < 7) {
  console.log("#".repeat(whileCounter + 1));
  whileCounter++;
}

// Way 3
for (let i = 0; i < 7; i++) {
  console.log("#".repeat(i + 1));
}

// Way 4
for (let line = "#"; line.length < 8; line += "#") console.log(line);
