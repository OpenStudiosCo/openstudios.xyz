// var canvas = document.getElementById('canvas'),
//     ctx = canvas.getContext('2d'),
//     canvas2 = document.getElementById('canvas2'),
//     ctx2 = canvas2.getContext('2d'),
//     // full screen dimensions
//     cw = window.innerWidth,
//     ch = window.innerHeight,
const     charArr = ['モ', 'エ', 'ヤ', 'キ', 'オ', 'カ', '7', 'ケ', 'サ', 'ス', 'z', '1', '5', '2', 'ヨ', 'タ', 'ワ', '4', 'ネ', 'ヌ', 'ナ', '9', '8', 'ヒ', '0', 'ホ', 'ア', '3', 'ウ', ' ', 'セ', '¦', ':', '"', '꞊', 'ミ', 'ラ', 'リ', '╌', 'ツ', 'テ', 'ニ', 'ハ', 'ソ', '▪', '—', '<', '>', '0', '|', '+', '*', 'コ', 'シ', 'マ', 'ム', 'メ'];
//     maxCharCount = 100,
//     fallingCharArr = [],
//     fontSize = 32,
//     maxColums = cw / (fontSize);
// canvas.width = canvas2.width = cw;
// canvas.height = canvas2.height = ch;

const backgroundImage = new Image();
backgroundImage.src = "/assets/images/cs1xl.jpg"; // Replace with your image's path

const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);
