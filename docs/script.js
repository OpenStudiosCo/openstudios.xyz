const     charArr = ['モ', 'エ', 'ヤ', 'キ', 'オ', 'カ', '7', 'ケ', 'サ', 'ス', 'z', '1', '5', '2', 'ヨ', 'タ', 'ワ', '4', 'ネ', 'ヌ', 'ナ', '9', '8', 'ヒ', '0', 'ホ', 'ア', '3', 'ウ', ' ', 'セ', '¦', ':', '"', '꞊', 'ミ', 'ラ', 'リ', '╌', 'ツ', 'テ', 'ニ', 'ハ', 'ソ', '▪', '—', '<', '>', '0', '|', '+', '*', 'コ', 'シ', 'マ', 'ム', 'メ'];

const backgroundImage = new Image();
backgroundImage.src = "/assets/images/cs1xl.jpg"; // Replace with your image's path

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvas2 = document.getElementById('canvas2');
canvas2.style.display = 'none';
const ctx2 = canvas2.getContext('2d');

const w = canvas.width = canvas2.width = document.body.offsetWidth;
const h = canvas.height = canvas2.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

// Function to draw the background image
function drawBackground() {
  var imageAspectRatio = backgroundImage.width / backgroundImage.height;
  var canvasAspectRatio = w / h;
  var scale = 1;

  if (imageAspectRatio > canvasAspectRatio) {
      // Image is wider than the canvas, scale based on width
      scale = w / (backgroundImage.width * 0.125);
  } else {
      // Image is taller than the canvas, scale based on height
      scale = h / (backgroundImage.height * 0.125);
  }

  var scaledWidth = backgroundImage.width * scale;
  var scaledHeight = backgroundImage.height * scale;

  // Calculate the top-left coordinates of the image to center it
  var imageX = (w - scaledWidth) / 2;
  var imageY = (-scaledHeight / 55) + (h - scaledHeight) / 2;

  // Draw the image on the canvas at the calculated position
  ctx2.drawImage(backgroundImage, imageX, imageY, scaledWidth, scaledHeight);
}

function getAverageColor(context, x, y) {
  const imageData = context.getImageData(x, y, 5, 5).data;
  let r = 0,
      g = 0,
      b = 0;
  for (let i = 0; i < imageData.length; i += 4) {
      r += imageData[i];
      g += imageData[i + 1];
      b += imageData[i + 2];
  }
  const count = imageData.length / 4;
  return `rgb(${Math.floor(r / count)}, ${Math.floor(g / count)}, ${Math.floor(b / count)})`;
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function matrix () {
  drawBackground();
  ctx.fillStyle = "rgba(0,0,0,0.001)";
  ctx.fillRect(0, 0, w, h);
  
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
    const x = ind * 20;

    ctx.fillStyle = getAverageColor(ctx2, x,y);
    ctx.fillText(text, x, y);
    
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;

  });
}



setInterval(matrix, 50);
