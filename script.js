document.addEventListener("DOMContentLoaded", function () {
    function moveRandomEl(elm) {
      elm.style.position = "absolute";
      elm.style.top =
        Math.floor(Math.random() * (window.innerHeight - 50)) + "px";
      elm.style.left =
        Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
    }
  
    const moveRandom = document.querySelector("#move-random");
    if (moveRandom) {
      moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
      });
    }
  });
  