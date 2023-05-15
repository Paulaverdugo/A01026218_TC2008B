document.addEventListener("mousemove", function(event) {
    var xPos = event.pageX;
    var yPos = event.pageY;
    var mousePositionElement = document.getElementById("mousePosition");
    mousePositionElement.textContent = "Posición del mouse: " + xPos + ", " + yPos;
});

// Se obtiene el elemento del formulario con el id "form1"
var form = document.getElementById("form1");

// Se agrega un event listener al formulario que se activa cuando se envía el formulario
form.addEventListener("submit", function(event) {

  // Se utiliza el método preventDefault() para evitar que se recargue la página al enviar el formulario
  event.preventDefault();

  // Se obtiene el valor de la caja de texto con el id "form-fname" y se asigna a la variable firstName
  var firstName = document.getElementById("form-fname").value;

  // Se obtiene el valor de la caja de texto con el id "form-lname" y se asigna a la variable lastName
  var lastName = document.getElementById("form-lname").value;

  // Se concatena el valor de la variable firstName con un espacio y el valor de la variable lastName y se asigna a la variable fullName
  var fullName = firstName + " " + lastName;

  // Se crea un nuevo elemento <p> y se asigna a la variable fullNameElement
  var fullNameElement = document.createElement("p");

  // Se asigna el texto "Nombre completo: " y el valor de la variable fullName al contenido del elemento fullNameElement
  fullNameElement.textContent = "Nombre completo: " + fullName;

  // Se agrega el elemento creado después del botón de enviar utilizando el método appendChild()
  form.appendChild(fullNameElement);
});

const btnInsertRow = document.getElementById('btn-insert-r');
btnInsertRow.addEventListener('click', function() {
  const table = document.getElementById('sampleTable');
  const newRow = table.insertRow();
  const newCell1 = newRow.insertCell();
  const newCell2 = newRow.insertCell();
  newCell1.innerHTML = 'Row ' + (table.rows.length) + ' column 1';
  newCell2.innerHTML = 'Row ' + (table.rows.length) + ' column 2';
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

var imagen = document.getElementById("imagenGato");

imagen.addEventListener("mouseenter", function() {
  var newWidth = Math.floor(Math.random() * 301) + 300; // generate random width between 300 and 600
  var newHeight = Math.floor(Math.random() * 301) + 300; // generate random height between 300 and 600
  
  var newImage = new Image(); // create new Image object
  newImage.src = "http://placekitten.com/" + newWidth + "/" + newHeight; // set the source of the new image to a random size
  newImage.alt = "Random cat image"; // set alternative text for the new image
  newImage.id = "imagenGato"; // set the id for the new image

  // replace the existing image with the new one
  var oldImage = document.getElementById("imagenGato");
  oldImage.parentNode.replaceChild(newImage, oldImage);});