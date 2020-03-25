let btn = document.querySelectorAll(".num");
let btnOperacije = document.querySelectorAll(".opr");

let x = 0;
let y = 0;
let op = "";
let rez = 0;

btn.forEach(elem => {
  elem.addEventListener("click", () => {
    if (x == 0) {
      x = elem.textContent;
    } else {
      y = elem.textContent;
    }
  });
});

btnOperacije.forEach(elem => {
  elem.addEventListener("click", () => {
    op = elem.textContent;
  });
});

let jednako = document.getElementById("jednako");
jednako.addEventListener("click", () => {
  x = parseInt(x);
  y = parseInt(y);
  switch (op) {
    case "+":
      rez = x + y;
      break;
    case "-":
      rez = x - y;
      break;
    case "*":
      rez = x * y;
      break;
    case "/":
      rez = x / y;
      break;
  }

  let paragraf = document.getElementById("rezultat");
  paragraf.innerText = rez;
  x = 0;
  y = 0;
  rez = 0;
});
