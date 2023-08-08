/**
 * Matrix rain effect based on a few sources,
 * - https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
 * - https://github.com/Rezmason/matrix
 * - https://codepen.io/riazxrazor/pen/Gjomdp
 * 
 */

const charArr = ['モ', 'エ', 'ヤ', 'キ', 'オ', 'カ', '7', 'ケ', 'サ', 'ス', 'z', '1', '5', '2', 'ヨ', 'タ', 'ワ', '4', 'ネ', 'ヌ', 'ナ', '9', '8', 'ヒ', '0', 'ホ', 'ア', '3', 'ウ', ' ', 'セ', '¦', ':', '"', '꞊', 'ミ', 'ラ', 'リ', '╌', 'ツ', 'テ', 'ニ', 'ハ', 'ソ', '▪', '—', '<', '>', '0', '|', '+', '*', 'コ', 'シ', 'マ', 'ム', 'メ'];

const backgroundImage = new Image();
backgroundImage.src = document.getElementById('doorImage').src;

const canvas = document.getElementById('loader_symbols');
const ctx = canvas.getContext('2d');

const fontSize = 20;

const canvas2 = document.getElementById('loader_image');
canvas2.style.display = 'none';
const ctx2 = canvas2.getContext('2d', {
    willReadFrequently: true
});

let w = canvas.width = canvas2.width = document.body.offsetWidth;
let h = canvas.height = canvas2.height = document.body.offsetHeight;
let cols = Math.floor(w / 20) + 1;
let ypos = Array(cols).fill(0);

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
    let randomDelta = Math.tan(randomInt(1, 50)) * 2;
    for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i] + randomDelta;
        g += imageData[i + 1] + randomDelta;
        b += imageData[i + 2] + randomDelta;
    }
    const count = imageData.length / 4;
    return `rgb(${Math.floor(r / count)}, ${Math.floor(g / count)}, ${Math.floor(b / count)})`;
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let clock = 0;

function matrix() {
    drawBackground();
    ctx.fillStyle = "rgba(0,0,0,0.001)";
    ctx.fillRect(0, 0, w, h);

    ctx.font = '15pt monospace';

    ypos.forEach((y, ind) => {
        const text = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
        const x = ind * 20;

        ctx.fillStyle = getAverageColor(ctx2, x, y);
        ctx.fillText(text, x, y);

        clock++;

        if (y > 1 + randomInt(1, clock)) ypos[ind] = 0;
        else ypos[ind] = y + fontSize;

    });

    if ( window.virtual_office &&  window.virtual_office.started) {
        document.getElementById('loadingSign').style.display = 'none';
        clearInterval(matrixScene);
    }
}

function handleViewportChange() {
    w = canvas.width = canvas2.width = document.body.offsetWidth;
    h = canvas.height = canvas2.height = document.body.offsetHeight;
    cols = Math.floor(w / 20) + 1;
    ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
}

window.addEventListener('orientationchange', handleViewportChange);
window.addEventListener('resize', handleViewportChange);

const matrixScene = setInterval(matrix, 75);
