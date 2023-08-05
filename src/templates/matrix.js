/**
 * Matrix rain effect based on a few sources,
 * - https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
 * - https://github.com/Rezmason/matrix
 * - https://codepen.io/riazxrazor/pen/Gjomdp
 * 
 */

const charArr = ['モ', 'エ', 'ヤ', 'キ', 'オ', 'カ', '7', 'ケ', 'サ', 'ス', 'z', '1', '5', '2', 'ヨ', 'タ', 'ワ', '4', 'ネ', 'ヌ', 'ナ', '9', '8', 'ヒ', '0', 'ホ', 'ア', '3', 'ウ', ' ', 'セ', '¦', ':', '"', '꞊', 'ミ', 'ラ', 'リ', '╌', 'ツ', 'テ', 'ニ', 'ハ', 'ソ', '▪', '—', '<', '>', '0', '|', '+', '*', 'コ', 'シ', 'マ', 'ム', 'メ'];

const backgroundImage = new Image();
backgroundImage.src = "/assets/images/cs1xl.jpg"; // Replace with your image's path

const symbols_canvas_1 = document.getElementById('loader_symbols');
const symbols_context_1 = symbols_canvas_1.getContext('2d');

const symbols_canvas_2 = document.getElementById('loader_symbols2');
const symbols_context_2 = symbols_canvas_1.getContext('2d');

const image_canvas = document.getElementById('loader_image');
image_canvas.style.display = 'none';
const image_context = image_canvas.getContext('2d', { willReadFrequently: true });

const fontSize = 15;

let w = symbols_canvas_1.width = image_canvas.width = document.body.offsetWidth;
let h = symbols_canvas_1.height = image_canvas.height = document.body.offsetHeight;
let cols = Math.floor(w / fontSize) + 1;
let ypos = Array(cols).fill(0);

symbols_context_1.fillStyle = '#000';
symbols_context_1.fillRect(0, 0, w, h);

// Function to draw the background image
function drawBackground() {
    var imageAspectRatio = backgroundImage.width / backgroundImage.height;
    var symbols_canvas_1AspectRatio = w / h;
    var scale = 1;

    if (imageAspectRatio > symbols_canvas_1AspectRatio) {
        // Image is wider than the symbols_canvas_1, scale based on width
        scale = w / (backgroundImage.width * 0.125);
    } else {
        // Image is taller than the symbols_canvas_1, scale based on height
        scale = h / (backgroundImage.height * 0.125);
    }

    var scaledWidth = backgroundImage.width * scale;
    var scaledHeight = backgroundImage.height * scale;

    // Calculate the top-left coordinates of the image to center it
    var imageX = (w - scaledWidth) / 2;
    var imageY = (-scaledHeight / 55) + (h - scaledHeight) / 2;

    // Draw the image on the symbols_canvas_1 at the calculated position
    image_context.drawImage(backgroundImage, imageX, imageY, scaledWidth, scaledHeight);
}

function getAverageColor(context, x, y) {
    const imageData = context.getImageData(x, y, 5, 5).data;
    let r = 0,
        g = 0,
        b = 0;
    let randomDelta = Math.tan(randomInt( 1 , 50)) * 2;
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

function matrix () {
    drawBackground();
    symbols_context_1.fillStyle = "rgba(0,0,0,0.001)";
    symbols_context_1.fillRect(0, 0, w, h);
    
    symbols_context_1.font = '15pt monospace';
    
    ypos.forEach((y, ind) => {
        const text = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
        const x = ind * 20;

        symbols_context_1.fillStyle = getAverageColor(image_context, x,y);
        symbols_context_1.fillText(text, x, y);
        
        if (y > 1 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;

    });
}

function handleViewportChange() {
    w = symbols_canvas_1.width = image_canvas.width = document.body.offsetWidth;
    h = symbols_canvas_1.height = image_canvas.height = document.body.offsetHeight;
    cols = Math.floor(w / 20) + 1;
    ypos = Array(cols).fill(0);

    symbols_context_1.fillStyle = '#000';
    symbols_context_1.fillRect(0, 0, w, h);
}

window.addEventListener('orientationchange', handleViewportChange);
window.addEventListener('resize', handleViewportChange);

setInterval(matrix, 75);
