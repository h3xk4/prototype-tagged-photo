const canvas = document.querySelector('.tagged');
const hero = document.querySelector('.hero');


/**
 * Add marker
 */

canvas.addEventListener('click', function(e) {

  const xWidth = hero.width;
  const yHeight = hero.height;

  const xPosition = e.pageX - this.offsetLeft;
  const yPosition = e.pageY - this.offsetTop;

  const x = (xPosition / xWidth) * 100;
  const y = (yPosition / yHeight) * 100;

  const newMarker = document.createElement("span");

  newMarker.classList.add("marker");
  newMarker.style.left = (x - 0.5)+ "%";
  newMarker.style.top = (y - 1) + "%";

  canvas.appendChild(newMarker);
})
