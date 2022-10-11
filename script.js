const worker = new Worker("worker.js");

const sumButton = document.getElementById("sumButton");
const backgroundButton = document.getElementById("backgroundButton");
sumButton.addEventListener("click", function () {
  let sum = 0;
  for (let index = 0; index < 10000000000000; index++) {
    sum += index;
  }
  alert(`total sum ${sum}`);
});

worker.onmessage = function (message) {
  console.log(message);
};

backgroundButton.addEventListener("click", function () {
  if (document.getElementById("container").style.backgroundColor != "blue") {
    document.getElementById("container").style.backgroundColor = "blue";
  } else {
    document.getElementById("container").style.backgroundColor = "green";
  }
});
