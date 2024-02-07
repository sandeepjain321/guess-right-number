let y = Math.floor(Math.random() * 10 + 1);

let guess = 1;

document.querySelector(".btn").onclick = function showguess() {
  let x = document.getElementById("text").value;
  if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
  } else if (x > y) {
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  } else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }
};
