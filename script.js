const worker = new Worker("worker.js");

const sumButton = document.getElementById("sumButton");
const backgroundButton = document.getElementById("backgroundButton");

sumButton.addEventListener("click", function () {
  worker.postMessage("Sum Button clicked");
});

worker.onmessage = function (event) {
  alert(`Total Sum: ${event.data}` );
};
backgroundButton.addEventListener("click", function () {
  if (document.getElementById("container").style.backgroundColor != "blue") {
    document.getElementById("container").style.backgroundColor = "blue";
  } else {
    document.getElementById("container").style.backgroundColor = "green";
  }
});
