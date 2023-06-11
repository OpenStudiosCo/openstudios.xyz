import { init, animate } from 'virtual-office'

function domReady(callback) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // DOM is already ready or in the process of loading
    callback();
  } else {
    // DOMContentLoaded event listener
    document.addEventListener('DOMContentLoaded', callback);
  }
}

domReady(
  function () {
    init();
    animate();    
  }
);


// // Expose the virtual office module to the window scope
// window.virtualOffice = { greet };
