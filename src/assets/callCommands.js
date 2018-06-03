$( document ).ready(function() {
  console.log( "ready!" );

  // TAKE OFF BUTTON
  $('#takeOff').on('click', (event) => {
    event.preventDefault();
    takeOff();
  });

  // CALIBRATE BUTTON
  $('#calibrate').on('click', (event) => {
    event.preventDefault();
    calibrate();
  });

  // MOVE LEFT BUTTON
  $('#moveLeft').on('click', (event) => {
    event.preventDefault();
    moveLeft();
  });

  // MOVE RIGHT BUTTON
  $('#moveRight').on('click', (event) => {
    event.preventDefault();
    moveRight();
  });

  // MOVE UP BUTTON
  $('#moveUp').on('click', (event) => {
    event.preventDefault();
    moveUp();
  });

  // MOVE DOWN BUTTON
  $('#moveDown').on('click', (event) => {
    event.preventDefault();
    moveDown();
  });

  // MOVE FRONT BUTTON
  $('#moveFront').on('click', (event) => {
    event.preventDefault();
    moveFront();
  });

  // MOVE BACK BUTTON
  $('#moveBack').on('click', (event) => {
    event.preventDefault();
    moveBack();
  });

  // TURN LEFT BUTTON
  $('#turnLeft').on('click', (event) => {
    event.preventDefault();
    turnLeft();
  });

  // TURN RIGHT BUTTON
  $('#turnRight').on('click', (event) => {
    event.preventDefault();
    turnRight();
  });

  // STOP BUTTON
  $('#stop').on('click', (event) => {
    event.preventDefault();
    stop();
  });

  // LAND BUTTON
  $('#land').on('click', (event) => {
    event.preventDefault();
    land();
  });

  let chatTextAreaDisplay = document.getElementById('chatTextArea');
  let oldVal = chatTextAreaDisplay.innerHTML;

  function checkChange(){

    if(chatTextAreaDisplay.innerHTML !== oldVal) {
      console.log("value changed");


      if (chatTextAreaDisplay.innerHTML === 'Taking off!') {
        takeOff();
      } else if (chatTextAreaDisplay.innerHTML === 'Calibrating!') {
        calibrate();
      } else if (chatTextAreaDisplay.innerHTML === 'Moving left!') {
        moveLeft();
      } else if (chatTextAreaDisplay.innerHTML === 'Moving right!') {
        moveRight();
      } else if (chatTextAreaDisplay.innerHTML === 'Moving up!') {
        moveUp();
      } else if (chatTextAreaDisplay.innerHTML === 'Moving down!') {
        moveDown();
      } else if (chatTextAreaDisplay.innerHTML === 'Moving front!') {
        moveFront();
      } else if (chatTextAreaDisplay.innerHTML === 'Moving back!') {
        moveBack();
      } else if (chatTextAreaDisplay.innerHTML === 'Turning left!') {
        turnLeft();
      } else if (chatTextAreaDisplay.innerHTML === 'Turning right!') {
        turnRight();
      } else if (chatTextAreaDisplay.innerHTML === 'Stopping current command!') {
        stop();
      } else if (chatTextAreaDisplay.innerHTML === 'Landing!') {
        land();
      }
      oldVal = chatTextAreaDisplay.innerHTML;
    } else {
      console.log('nope');
    }
  }
  setInterval(checkChange, 2000);

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
  }

  const moveUp = () => {
    console.log('MOVE UP!');
    $.get('https://localhost:8002/api/move-up', (data) => {});
  }

  const moveDown = () => {
    console.log('MOVE DOWN!');
    $.get('https://localhost:8002/api/move-down', (data) => {});
  }

  const moveFront = () => {
    console.log('MOVE FRONT!');
    $.get('https://localhost:8002/api/move-front', (data) => {});
  }

  const moveBack = () => {
    console.log('MOVE BACK!');
    $.get('https://localhost:8002/api/move-back', (data) => {});
  }

  const turnLeft = () => {
    console.log('TURN LEFT!');
    $.get('https://localhost:8002/api/turn-left', (data) => {});
  }

  const turnRight = () => {
    console.log('TURN RIGHT!');
    $.get('https://localhost:8002/api/turn-right', (data) => {});
  }

  const stop = () => {
    console.log('STOP!');
    $.get('https://localhost:8002/api/stop', (data) => {});
  }

  const land = () => {
    console.log('LAND!');
    $.get('https://localhost:8002/api/land', (data) => {});
  }



});
