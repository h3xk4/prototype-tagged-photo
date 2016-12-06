import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route, Link, History } from 'react-router'

const data = require('./data.json');
const hero = document.querySelector('.hero_image');
const heroCanvas = document.querySelector('.hero_canvas');

/**
 * Note
 */

class Notes extends React.Component {

  constructor() {
    super();
    this.newNote = this.newNote.bind(this);
  }

  newNote(e) {

    console.log('New note');

    // Position calculations
    const xWidth = hero.width;
    const yHeight = hero.height;
    const xPosition = e.pageX - hero.offsetLeft;
    const yPosition = e.pageY - hero.offsetTop;
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
    heroCanvas.appendChild(newMarker);

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

  render() {
    return (
      <div className="hero_notes" onClick={this.newNote}></div>
    )
  }
}


/**
 * App
 */

class App extends React.Component {

  render() {
    return (
      <Notes />
    )
  }
}

ReactDOM.render(
  <App />, document.querySelector('.hero_canvas')
);
