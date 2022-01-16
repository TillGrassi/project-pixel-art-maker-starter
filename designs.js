// Select color input
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');

/*function makeGrid creates a grid with the size of the
use input and creates the event listener to colorize the cells*/
function makeGrid(height, width) {
	for (let z = 0; z < height; z++) {
		let row = canvas.insertRow(z);
		for (let y = 0; y < width; y++) {
			let cell = row.insertCell(y);
			cell.addEventListener('click', function(event) {
				cell.style.backgroundColor = color.value;
				cell.addEventListener('contextmenu', function(event) {
					event.preventDefault();
					cell.style.backgroundColor = 'white';

				})
			})
		}
	}
}
/* this function resets the grid by clicking the submit button
and also calls the makeGrid function */
sizePicker.addEventListener('submit', function(event) {
	event.preventDefault();
	while (canvas.hasChildNodes()) {
		canvas.removeChild(canvas.firstChild)
	}
	makeGrid(height.value, width.value);
})
