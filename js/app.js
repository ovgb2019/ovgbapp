// Put everything inside an onload to ensure that everything has loaded in before any code is executed
window.onload = function() {

  // Constants for the dropdown
  const DROP_DOWN = document.querySelector('.destination-select'); // Select the drop down
  const DROP_DOWN_ITEM = document.querySelectorAll('.destination-select li'); // Create array of li items in drop down list
  
  // Set this via QR or nav button
  // *** Hard coded peony for testing purposes ***
  let currentLocation = 'bike';
  
  // List of items in the drop down (order matters)
  const LOCATIONS = [
    'Select Destination',
    'Peony Garden',
    'Waterfall Garden',
    'Bridge',
    'DayLily Collection',
    'Bike Path',
    'Memory Garden'
  ];

  // Animate zoom/ position of location
  const animatedZoom = function(classes) {
    // Target object element holding SVG of map
    const MAP_OBJ = document.getElementById('svgMapObj');
    // Get the SVG document inside the Object tag
    const MAP_SVG = MAP_OBJ.contentDocument.getElementById('svgMap');
    // Reset Class List
    MAP_SVG.removeAttribute('class');
    // Add classes to SVG
    MAP_SVG.classList.add(classes);
  }

  
  // Create evenbt listener on drop down menu
  DROP_DOWN.addEventListener('click', function() {
    // Loop through the elements in the drop down and add event listeners to them
    DROP_DOWN_ITEM.forEach(item => {
      // toggle the hidden class on each item in the list (unhiding them)
      item.classList.toggle('hidden');
      
      // Add the event listener to the item
      item.addEventListener('click', function() {
        // Upon clicking an item in the list set the displayed text to the selected location name
        document.getElementById('placeholder').textContent = `Go to: ${LOCATIONS[item.value]}`;

        // If current location is Peony Garden
        if(currentLocation === 'peony') {
          // destination is set to Waterfall Garden
          if (item.value === 2) {
            animatedZoom('moveTo-peony-waterfall');
          // destination is set to Bridge
          } else if (item.value === 3) {
            animatedZoom('moveTo-bridge-peony');
          // destination is set to DayLily Collection
          } else if (item.value === 4) {
            animatedZoom('moveTo-peony-daylily');
          // destination is set to Bike Path
          } else if (item.value === 5) {
            animatedZoom('moveTo-peony-bike');
          // destination is set to Memory Garden
          } else if (item.value === 6) {
            animatedZoom('moveTo-memory-peony');
          }
        } 
        // If current location is Waterfall Garden
        else if(currentLocation === 'waterfall') {
          // destination is set to Peony Garden
          if (item.value === 1) {
            animatedZoom('moveTo-peony-waterfall');
          // destination is set to Bridge
          } else if (item.value === 3) {
            animatedZoom('moveTo-bridge-waterfall');
          // destination is set to DayLily Collection
          } else if (item.value === 4) {
            animatedZoom('moveTo-daylily-waterfall');
          // destination is set to Bike Path
          } else if (item.value === 5) {
            animatedZoom('moveTo-peony-bike');
          // destination is set to Memory Garden
          } else if (item.value === 6) {
            animatedZoom('moveTo-memory-waterfall');
          }
        }
        // If current location is Bridge
        else if(currentLocation === 'bridge') {
          // destination is set to Peony Garden
          if (item.value === 1) {
            animatedZoom('moveTo-bridge-peony');
          // destination is set to Waterfall Garden
          } else if (item.value === 2) {
            animatedZoom('moveTo-bridge-waterfall');
          // destination is set to DayLily Collection
          } else if (item.value === 4) {
            animatedZoom('moveTo-daylily-bridge');
          // destination is set to Bike Path
          } else if (item.value === 5) {
            animatedZoom('moveTo-bridge-bike');
          // destination is set to Memory Garden
          } else if (item.value === 6) {
            animatedZoom('moveTo-memory-bridge');
          }
        }
        // If current location is DayLily Collection
        else if(currentLocation === 'daylily') {
          // destination is set to Peony Garden
          if (item.value === 1) {
            animatedZoom('moveTo-peony-daylily');
          // destination is set to Waterfall Garden
          } else if (item.value === 2) {
            animatedZoom('moveTo-daylily-waterfall');
          // destination is set to Bridge
          } else if (item.value === 3) {
            animatedZoom('moveTo-daylily-bridge');
          // destination is set to Bike Path
          } else if (item.value === 5) {
            animatedZoom('moveTo-bike-daylily');
          // destination is set to Memory Garden
          } else if (item.value === 6) {
            animatedZoom('moveTo-memory-daylily');
          }
        }
        // If current location is Bike Path
        else if(currentLocation === 'bike') {
          // destination is set to Peony Garden
          if (item.value === 1) {
            animatedZoom('moveTo-peony-bike');
          // destination is set to Waterfall Garden
          } else if (item.value === 2) {
            animatedZoom('moveTo-waterfall-bike');
          // destination is set to Bridge
          } else if (item.value === 3) {
            animatedZoom('moveTo-bridge-bike');
          // destination is set to DayLily Collection
          } else if (item.value === 4) {
            animatedZoom('moveTo-bike-daylily');
          // destination is set to Memory Garden
          } else if (item.value === 6) {
            animatedZoom('moveTo-memory-bike');
          }
        }
        // If current location is Memory Garden
        else if(currentLocation === 'memory') {
          // destination is set to Peony Garden
          if (item.value === 1) {
            animatedZoom('moveTo-memory-peony');
          // destination is set to Waterfall Garden
          } else if (item.value === 2) {
            animatedZoom('moveTo-memory-waterfall');
          // destination is set to Bridge
          } else if (item.value === 3) {
            animatedZoom('moveTo-memory-bridge');
          // destination is set to DayLily Collection
          } else if (item.value === 4) {
            animatedZoom('moveTo-memory-daylily');
          // destination is set to Bike Path
          } else if (item.value === 5) {
            animatedZoom('moveTo-memory-bike');
          }
        }
      });

    });

  });
  
  }
  
  