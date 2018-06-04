
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

let submitToChat = $('#submitToChat');
let chatTextArea = $('#chatTextArea');
let interimTextDisplay = $('#interimTextDisplay');
let dictationButton = $('#dictationButton');
let micIcon = $('#microphoneIcon');

let idText;
let classText;
let submittedChat;
let final;
let interim;
let recognizing;

function reset() {
  recognizing = false;
  micIcon.attr("src", "micOff.png");
}

function startSpeech(){
  toggleStartStop();
}

function toggleStartStop() {
  if (recognizing === true) {
    recognition.stop();
    micIcon.attr("src", "micOff.png");
    recognizing = false;
  }
  else {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.start();
    micIcon.attr("src", "micOn.png");
    recognizing = true;
    recognition.onend = reset;
    recognition.onresult = function (e) {
      final = '';
      interim = '';
      for (let i = 0; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          final += e.results[i][0].transcript;
          console.log('final transcription:', e.results[i][0].transcript);
          chatTextArea.focus();
          if (recognizing === true) {
            toggleStartStop();
          } else {
            interim += e.results[i][0].transcript;
          }
        }

        switch (final) {
          case 'take off':
            document.getElementById('chatTextArea').innerHTML = "Taking off!";
            takeOff();
            break;
          case 'calibrate':
            document.getElementById('chatTextArea').innerHTML = "Calibrating!";
            calibrate();
            break;
          case 'move left':
            document.getElementById('chatTextArea').innerHTML = "Moving left!";
            moveLeft();
            break;
          case 'move right':
            document.getElementById('chatTextArea').innerHTML = "Moving right!";
            moveRight();
            break;
          case 'move up':
            document.getElementById('chatTextArea').innerHTML = "Moving up!";
            moveUp();
            break;
          case 'move down':
            document.getElementById('chatTextArea').innerHTML = "Moving down!";
            moveDown();
            break;
          case 'move front':
            document.getElementById('chatTextArea').innerHTML = "Moving front!";
            moveFront();
            break;
          case 'move back':
            document.getElementById('chatTextArea').innerHTML = "Moving back!";
            moveBack();
            break;
          case 'turn left':
            document.getElementById('chatTextArea').innerHTML = "Turning left!";
            turnLeft();
            break;
          case 'turn right':
            document.getElementById('chatTextArea').innerHTML = "Turning right!";
            turnRight();
            break;
          case 'stop':
            document.getElementById('chatTextArea').innerHTML = "Stopping current command!";
            stop();
            break;
          case 'land':
            document.getElementById('chatTextArea').innerHTML = "Landing!";
            land();
            break;
          default:
            return 'how you get here???';
        }

        interimTextDisplay.text(interim);
      }
      chatTextArea.text('');
      interimTextDisplay.text('');
    }
  }
}

// click handler to start or stop voice-to-text dictation
dictationButton.on('click', function(){
  transcriptDisplay.toggle();
  toggleStartStop();
});
