import { ManageAccount } from './firebaseconect.js';

document.getElementById("formulario-crear").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const account = new ManageAccount();
  account.register(email, username, password);

});

console.log('Formulario de Registro');
