"use strict"
const xo = document.getElementsByClassName("box");
      
// Function to write "O" in a random place when the user adds "X"
function inserir() {
  let i = Math.floor(Math.random() * 9);
  if (xo[i].firstChild.textContent == "") {
    xo[i].firstChild.innerHTML = "O";
  } else {
    let j = 0;
    while (j < 10) {
      if (xo[j].firstChild.textContent == "") {
        xo[j].firstChild.innerHTML = "O";
        break;
      }
    j++;
    }           
  }
} 

// Event for each box 
xo[0].addEventListener("click", function aaa() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[1].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[2].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[3].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[4].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[5].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[6].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[7].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});

xo[8].addEventListener("click", function() {
  if (this.firstChild.textContent == "") {
    this.firstChild.innerHTML = "X";
    inserir();
  }
});