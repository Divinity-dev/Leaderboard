const display = document.getElementById('table');
const show = (Score) => {
  display.innerHTML += `<tr>
    <td>${Score.user}: ${Score.score}</td>
</tr>`;
};
const scoredisplay = (list) => {
  list.forEach((item, index) => {
    show(item, index);
  });
};
export default scoredisplay;