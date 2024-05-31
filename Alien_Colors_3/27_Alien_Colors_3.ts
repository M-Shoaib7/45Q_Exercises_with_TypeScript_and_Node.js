  // Turn your if-else chain from Exercise 5-4 into an if-else chain
  //Write three versions of this program, making sure each message is printed for the appropriate color alien.
  // version 1

let alienColors : string = "green";

//f the alien is green, print a message that the player earned 5 points.

// If the alien is yellow, print a message that the player earned 10 points.

// If the alien is red, print a message that the player earned 15 points
if(alienColors === "green"){
    console.log(" the player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log(" the player earned 10 points.");
}
else if(alienColors === "red"){
    console.log(" the player earned 15 points.");
}
else{
    console.log("Please select the right color");
}

//version 2
alienColors = "yellow";

if(alienColors === "green"){
    console.log(" the player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log(" the player earned 10 points.");
}
else if(alienColors === "red"){
    console.log(" the player earned 15 points.");
}
else{
    console.log("Please select the right color");
}

//version 3
alienColors = "red";

if(alienColors === "green"){
    console.log(" the player earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log(" the player earned 10 points.");
}
else if(alienColors === "red"){
    console.log(" the player earned 15 points.");
}
else{
    console.log("Please select the right color");
}