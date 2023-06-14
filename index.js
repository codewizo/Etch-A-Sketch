var container = document.querySelector('.container');

// Create 16x16 grid of square divs
for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
    // Create a new div element
    var square = document.createElement('div');

    // Add the 'square' class to the div
    square.classList.add('square');

    // Append the div to the container
    container.appendChild(square);
    }
}