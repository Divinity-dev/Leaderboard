import url from './Export.js';

const send = async (scoreobj) => {
  await fetch(url, {
    method: 'post',
    body: JSON.stringify(scoreobj),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
};
export default send;