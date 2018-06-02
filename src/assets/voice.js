var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

let submitToChat = $('#submitToChat');
let chatTextArea = $('#chatTextArea');
let interimTextDisplay = $('#interimTextDisplay');
let dictationButton = $('#dictationButton');
let chatDisplay = $('#chatDisplay');
let transcriptDisplay = $('#interimTextDisplayLabel');
let micIcon = $('#microphoneIcon');
let validatorWindowExpanded = false;


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
  // transcriptDisplay.toggle();
  toggleStartStop();
};


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
      let takeOff = 'take off',
        calibrate = 'calibrate',
        moveLeft = 'move left',
        moveRight = 'move right',
        moveUp = 'move up',
        moveDown = 'move down',
        moveFront = 'move front',
        moveBack = 'move back',
        turnLeft = 'turn left',
        turnRight = 'turn right',
        stop = 'stop',
        land = 'land';
      for (let i = 0; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          final += e.results[i][0].transcript;

          console.log('final transcription:', e.results[i][0].transcript);

          chatTextArea.focus();

          if (recognizing === true) {
            toggleStartStop();
            // transcriptDisplay.toggle();
          } else {
            interim += e.results[i][0].transcript;
          }
        }

        if (final === takeOff) {
          document.getElementById('chatTextArea').innerHTML = "Taking off!";
        }

        interimTextDisplay.text(interim);
      }
      chatTextArea.text('');
      interimTextDisplay.text('');
    }
  }
}















// ============= END OF: Speech Recognition Functions ============= \\


// takes an array and splits along space characters
  function splitIntoArray(string) {
    sentenceArray = string.split(' ');
    return sentenceArray;
  }

// grabs current timestamp for use in the chat window display
  function getTimestamp() {
    return moment().format('hh:mm:ss a');
  }

  // utility function to post chat messages to the chat window when submitted
  function createChatLineItem(who, what) {
    let itemWho = $('<span>');
    if (who === 'You') {
      itemWho.addClass('userChat');
    }
    else {
      itemWho.addClass('computerChat');
    }
    itemWho.text(who);
    let itemWhen = $('<span>');
    itemWhen.addClass('timestamp').text(' (' + getTimestamp() + '): ');
    chatDisplay.append(itemWho, itemWhen, what, '<br>')
      .animate({
        scrollTop: chatDisplay[0].scrollHeight - chatDisplay[0].clientHeight
      }, 300);
  }

  // onPageLoadInitialize();

  function chatSubmitHandler() {
    submittedChat = chatTextArea.text().trim();
    chatTextArea.empty();
    console.log(submittedChat);
    createChatLineItem('You', submittedChat);
    splitIntoArray(submittedChat);
    spellCheck();
    console.log('spell-check complete!');
    console.log(sentenceArray);
    recognition = '';
  }

  // ============= Utility Event Handlers ============= \\
  // click handler to start or stop voice-to-text dictation
  dictationButton.on('click', function(){
    transcriptDisplay.toggle();
    toggleStartStop();
  });

  // enter button handler when chat box is in focus
  chatTextArea.keypress(function(event) {
    if (event.which === 13) {
      document.execCommand('insertHTML', false, '<div></div>');
      chatSubmitHandler();
      return false;
    }
  });

  // submit button handler
  submitToChat.on('click', function() {
    event.preventDefault();
    chatSubmitHandler();
  });





