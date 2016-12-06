var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};


/**
 * tagged image with notes
 */

const data = []
const canvas = document.querySelector('.tagged');
const hero = document.querySelector('.hero');


/**
 * Create a new marker
 */

function addMarker(e) {

  // Position calculations
  const xWidth = hero.width;
  const yHeight = hero.height;
  const xPosition = e.pageX - this.offsetLeft;
  const yPosition = e.pageY - this.offsetTop;
  const x = (xPosition / xWidth) * 100;
  const y = (yPosition / yHeight) * 100;

  // Create new marker element
  const newMarker = document.createElement('div');

  newMarker.classList.add('note_marker');
  newMarker.style.left = (x - 0.5)+ '%';
  newMarker.style.top = (y - 1) + '%';

  // Create the marker content
  const noteContent = document.createElement('div');
  noteContent.classList.add('note_content');

  const noteContentInput = document.createElement('textarea');
  //noteContentInput.setAttribute('type', 'text');
  noteContentInput.classList.add('note_input');

  // Build the marker
  noteContent.appendChild(noteContentInput);
  newMarker.appendChild(noteContent);
  canvas.appendChild(newMarker);

  // Create the marker data object
  const markerData = {
    id: data.length,
    x: x,
    y: y,
    text: noteContentInput.value
  }

  // Push marker data to data object
  data.push(markerData);

  // Add marker data to local storage
  localStorage.setItem('data', JSON.stringify(data));
}


/**
 * Add a marker
 */

canvas.addEventListener('click', addMarker, false);


/**
 * Is note content showing?
 * If yes, then disable addMarker()
 */

canvas.addEventListener('mouseover', function(e) {

  // get hovered element
  const el = e.target.className;

  // Only allow new markers if hover is hero image
  if (el == 'hero') { this.addEventListener('click', addMarker, false); }
  else { this.removeEventListener('click', addMarker, false); }
});


/**
 * Reset notes
 */

const reset = document.querySelector('.reset');

reset.addEventListener('click', resetNotes, false);

function resetNotes() {
  localStorage.clear();
  const notes = document.querySelectorAll('.note_marker');
  forEach(notes, function (index, el) {
    el.remove();
  });
}



