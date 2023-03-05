import url from './Export.js';
import scoredisplay from './scoredisplay.js';

const domdisplay = async () => {
  await fetch(url).then((res) => res.json()).then((json) => {
    scoredisplay(json.result);
  });
};
export default domdisplay;