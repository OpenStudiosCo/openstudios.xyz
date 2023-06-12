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
    let pane;

    // Create an object to talk to the application.
    window.virtual_office = {
      debug: false,
      fast: false,
    };

    
    let url = new URL(window.location.href);

    // Check if we're in debug mode.
    if (url.searchParams.has('debug')) {
      window.virtual_office.debug = true;

      // Start the UI.
      pane = debug_ui();
    }

    // Check if we're in fast mode.
    if (url.searchParams.has('fast')) {
      window.virtual_office.fast = true;
    }

    init( pane );
    animate();    
  }
);

function debug_ui() {
  const PARAMS = {
    factor: 123,
    title: 'hello',
    color: '#ff0055',
  };
  
  const pane = new Tweakpane.Pane();
  
  pane.addInput(PARAMS, 'factor');
  pane.addInput(PARAMS, 'title');
  pane.addInput(PARAMS, 'color');

  return pane;
}


// // Expose the virtual office module to the window scope
// window.virtualOffice = { greet };
