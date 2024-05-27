const studentName = prompt('Ingrese su nombre: ');
const surname = prompt('Ingrese su apellido: ');
const birthday = prompt(
  'Ingrese su fecha de nacimiento con el siguiente formato: AAAA-MM-DD'
);

const body = document.querySelector('body');

const paragraphName = document.createElement('p');
const paragraphSurname = document.createElement('p');
const paragraphBirthday = document.createElement('p');
alert(`Bienvenido ${studentName} ${surname}`);
paragraphName.innerText = `Nombre: ${studentName}`;
paragraphSurname.innerText = `Apellido: ${surname}`;
paragraphBirthday.innerText = `Fecha de nacimiento: ${birthday}`;

body.appendChild(paragraphName);
body.appendChild(paragraphSurname);
body.appendChild(paragraphBirthday);

let studentBirthDate = new Date(birthday);
let today = new Date();

const livingDays = Math.floor((today - studentBirthDate) / 1000 / 60 / 60 / 24);
const livingDaysDom = document.createElement('p');
livingDaysDom.innerText = `Ha vivido ${livingDays} días`;

body.appendChild(livingDaysDom);
