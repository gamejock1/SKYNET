let flightPlanActions = [];

// Command Functions
const takeOff = () => {
  console.log('TAKE OFF!');
  $.get('https://localhost:8002/api/takeoff', (data) => {});
};

const calibrate = () => {
  console.log('CALIBRATE!');
  $.get('https://localhost:8002/api/calibrate', (data) => {});
};

const moveLeft = () => {
  console.log('MOVE LEFT!');
  $.get('https://localhost:8002/api/move-left', (data) => {});
};

const moveRight = () => {
  console.log('MOVE RIGHT!');
  $.get('https://localhost:8002/api/move-right', (data) => {});
};

const moveUp = () => {
  console.log('MOVE UP!');
  $.get('https://localhost:8002/api/move-up', (data) => {});
};

const moveDown = () => {
  console.log('MOVE DOWN!');
  $.get('https://localhost:8002/api/move-down', (data) => {});
};

const moveFront = () => {
  console.log('MOVE FRONT!');
  $.get('https://localhost:8002/api/move-front', (data) => {});
};

const moveBack = () => {
  console.log('MOVE BACK!');
  $.get('https://localhost:8002/api/move-back', (data) => {});
};

const turnLeft = () => {
  console.log('TURN LEFT!');
  $.get('https://localhost:8002/api/turn-left', (data) => {});
};

const turnRight = () => {
  console.log('TURN RIGHT!');
  $.get('https://localhost:8002/api/turn-right', (data) => {});
};

const stop = () => {
  console.log('STOP!');
  $.get('https://localhost:8002/api/stop', (data) => {});
};

const land = () => {
  console.log('LAND!');
  $.get('https://localhost:8002/api/land', (data) => {});
};

console.log( "ready!" );

// TAKE OFF BUTTON
$(document).on('click', '#takeOff', (event) => {
  event.preventDefault();
  takeOff();
});

// CALIBRATE BUTTON
$(document).on('click', '#calibrate', (event) => {
  event.preventDefault();
  calibrate();
});

// MOVE LEFT BUTTON
$(document).on('click', '#moveLeft', (event) => {
  event.preventDefault();
  moveLeft();
});

// MOVE RIGHT BUTTON
$(document).on('click', '#moveRight', (event) => {
  event.preventDefault();
  moveRight();
});

// MOVE UP BUTTON
$(document).on('click', '#moveUp', (event) => {
  event.preventDefault();
  moveUp();
});

// MOVE DOWN BUTTON
$(document).on('click', '#moveDown', (event) => {
  event.preventDefault();
  moveDown();
});

// MOVE FRONT BUTTON
$(document).on('click', '#moveFront', (event) => {
  event.preventDefault();
  moveFront();
});

// MOVE BACK BUTTON
$(document).on('click', '#moveBack', (event) => {
  event.preventDefault();
  moveBack();
});

// TURN LEFT BUTTON
$(document).on('click', '#turnLeft', (event) => {
  event.preventDefault();
  turnLeft();
});

// TURN RIGHT BUTTON
$(document).on('click', '#turnRight', (event) => {
  event.preventDefault();
  turnRight();
});

// STOP BUTTON
$(document).on('click', '#stop', (event) => {
  event.preventDefault();
  stop();
});

// LAND BUTTON
$(document).on('click', '#land', (event) => {
  event.preventDefault();
  land();
});


// FLIGHT PLANS
// =====================================================
$(document).on('click', '.flightPlanButton', function(event) {
  event.preventDefault();
  let flightPlanId = this.id;
  $.get('https://skynet-table.herokuapp.com/api/flight-plan-actions/' + flightPlanId, (data) => {

    flightPlanActions = data.flightPlans;
    console.log(flightPlanActions);

    let triggerFlightActions = () => {
      for (let i = 0; i < flightPlanActions.length; i++) {
        if (i !== 0) {
          console.log('made it this far');
          setTimeout(flightPlanActions[i-1].action_wait, function() {
            console.log('waited:', flightPlanActions[i-1].action_wait);
            switch (flightPlanActions[i].action_type) {
              case ("takeoff"):
                takeOff();
                break;
              case ("land"):
                land();
                break;
              default:
                console.log('htf');
            }
          });
        } else {
          switch (flightPlanActions[i].action_type) {
            case ("takeoff"):
              takeOff();
              break;
            case ("land"):
              land();
              break;
            default:
              console.log('htf');
          }
        }
      }
    };
    triggerFlightActions();
  });
});


