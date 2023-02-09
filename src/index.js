import './style.css';
import send from './modules/send.js';
import domdisplay from './modules/functions.js';

domdisplay();
const username = document.getElementById('name');
const userscore = document.getElementById('score');
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  send({ user: username.value, score: userscore.value });
  username.value = '';
  userscore.value = '';
});
document.getElementById('refresh').onclick = () => {
  window.location.reload();
};
