# SKYNET - by The Table

* **Created:** Tuesday, March 27th, 2018

Welcome to Skynet!

Skynet (brought to you by The Table) is a powerful speech-to-DRONE web application that makes flying a drone a breeze by simply using your voice (or manual button commands). Skynet uses Mozilla's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to recognize a user's voice in order to execute commands. With Skynet, you also have the ability to create custom flight plans. The idea behind this is, instead of telling the drone to takeOff(), calibrate(), and land(), you can simply create a flight plan "Alpha", for instance, with those commands built in, and then simply tell the drone to execute flight plan "Alpha". The drone will take care of taking off, calibrating, and landing all on its own. 

Note: Skynet currently only works on Google Chrome.

![TheCodeDictator](https://commons.wikimedia.org/wiki/File:Terminator-skynet.png)

## Getting Started

Preparing for drone flight is no simple task. There are a couple of dependencies and prerequisites that are required in order to get this all functioning. There are actually 3 repositories that are needed before we discuss prerequisites and instructions.

1. SKYNET Front-End: 
  https://skynet-table.herokuapp.com
  https://github.com/gamejock1/SKYNET
2. SKYNET Database: 
  https://the-table-skynet.herokuapp.com
  https://github.com/agonz519/skynet-flightplans-db
3. Drone Control App to be run on localhost:
  https://github.com/agonz519/project-x
  
```
* This is a web page exercise.  As such, you're welcome to download a copy and run it locally for review purposes.  

* Otherwise, you can view the output at: https://github.com/gamejock1/SKYNET
```

### Prerequisites

These are things you need to install and setup to run Skynet:

```
- Google Chrome
- Google Chrome CORs browser extension for making cross origin requests. 
- Angular.js installed globally
- Drone control app running on localhost
  https://github.com/agonz519/project-x
- ARDrone 2.0 connected to drone control application
- Database for Flight Plans and Flight Plan Actions
  https://github.com/agonz519/skynet-flightplans-db
- FFMpeg installed globally for drone video feed
- SSL Certificate for Running HTTPs from Localhost
- 2 Network cards to simultaneously connect to the ARDrone (the drone uses WiFi to connect) as well as the web to access manual/voice flight controls
----In our case we tethered a hotspot to our computer to connect to the web, and used the computers network card to connect to the drone. 

```

### Installing

These are a set of step-by-step set of instructions to how we were able to get the drone to fly using our application:

```
Not Applicable
```

## Running the unit-level tests

These are the details of how to run the automated tests for this system:

```
Not Applicable
```

### End-to-end tests

These are the details of what these tests test and why:

```
Not Applicable
```

### And coding style tests

This is where you will find details outlining the approach and coding style in terms of  what these tests test and why

```
Not Applicable
```

## Deployment

Additional notes about how to deploy this on a live system can be found here:

```
Not Applicable: This is a static website for educational purposes and therefore is suggested not to be deployed outside of its current location on Github
```

## Built With

* [Webstorm](https://www.jetbrains.com/webstorm/) (Version: 2017.3.4) - Generation of HTML, CSS, TypeScript and JavaScript

## Contributing

* Thomas Yeager - Co-Author
* Alex Gonzalez - Co-Author
* Geoff Goodwin - Co-Author

## Versioning

* version 1.0 - Manual flight controls, voice controls, and flight plan creation and execution.

## Authors

* **Thomas Yeager** - *Front-end, Angular.js* - [gamejock1](https://github.com/gamejock1)
* **Alex Gonzalez** - *Back-end, Drone controls manual/voice, Express Routes* - [agonz519](https://github.com/agonz519)
* **Geoff Goodwin** - *Database, Custom ORM, Flight Plan Functionality* - [Geoff-Goodwin-Dev](https://github.com/Geoff-Goodwin-Dev)

## Licenses

None


## Acknowledgments
 
* SKYNET uses Mozilla's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to recognize a user's voice and create HTML elements that are requested.
