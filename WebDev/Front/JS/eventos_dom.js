document.addEventListener("mousemove", function(event) {
  let xPos = event.pageX;
  let yPos = event.pageY;
  let mousePositionElement = document.getElementById("mousePosition");
  mousePositionElement.textContent = "Posición del mouse: " + xPos + ", " + yPos;
});

let form = document.getElementById("form1");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let firstName = document.getElementById("form-fname").value;
  let lastName = document.getElementById("form-lname").value;
  let fullName = firstName + " " + lastName;
  let fullNameElement = document.createElement("p");
  fullNameElement.textContent = "Nombre completo: " + fullName;
  form.appendChild(fullNameElement);
});

const btnInsertRow = document.getElementById('btn-insert-r');
btnInsertRow.addEventListener('click', function() {
  const table = document.getElementById('sampleTable');
  const newRow = table.insertRow();
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const newCell = newRow.insertCell();
    newCell.innerHTML = 'Row ' + (table.rows.length) + ' column ' + (i + 1);
  }
});

const btnInsertCol = document.getElementById('btn-insert-c');
btnInsertCol.addEventListener('click', function() {
  const table = document.getElementById('sampleTable');
  for (let i = 0; i < table.rows.length; i++) {
    const cell = table.rows[i].insertCell();
    cell.innerHTML = 'Row ' + (i + 1) + ' column ' + (table.rows[i].cells.length);
  }
});

const btnChange = document.getElementById('btn-change');
btnChange.addEventListener('click', function() {
  const rowIndex = parseInt(document.getElementById('rowIndex').value);
  const colIndex = parseInt(document.getElementById('colIndex').value);
  const newValue = document.getElementById('newValue').value;
  const table = document.getElementById('myTable');
  const row = table.rows[rowIndex - 1];
  const cell = row.cells[colIndex - 1];
  cell.innerHTML = newValue;
});

const btnAddColor = document.getElementById('btn-add-color');
btnAddColor.addEventListener('click', function() {
  const colorSelect = document.getElementById('colorSelect');
  const newColor = document.createElement('option');
  const color = getRandomColor();
  newColor.text = color;
  newColor.style.backgroundColor = color;
  colorSelect.add(newColor);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const btnRmvColor = document.getElementById('btn-rmv-color');
btnRmvColor.addEventListener('click', function() {
  const colorSelect = document.getElementById('colorSelect');
  colorSelect.remove(colorSelect.selectedIndex);
});

let imagen = document.getElementById("imagenGato");

imagen.addEventListener("mouseenter", function() {
  let newWidth = Math.floor(Math.random() * 301) + 300; // generate random width between 300 and 600
  let newHeight = Math.floor(Math.random() * 301) + 300; // generate random height between 300 and 600
  
  let newImage = new Image(); // create new Image object
  newImage.src = "http://placekitten.com/" + newWidth + "/" + newHeight; // set the source of the new image to a random size
  newImage.alt = "Random cat image"; // set alternative text for the new image
  newImage.id = "imagenGato"; // set the id for the new image

  // replace the existing image with the new one
  let oldImage = document.getElementById("imagenGato");
  oldImage.parentNode.replaceChild(newImage, oldImage);});