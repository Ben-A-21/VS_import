/*************************************** 
 * Vismem_Search_Builder_Pavlovia Test *
 ***************************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'vismem_search_builder_pavlovia';  // from the Builder filename that created this script
let expInfo = {'participant': '00000', 'session': '001', 'age': '99', 'gender': '', 'experimenter': 'MI'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent1RoutineBegin());
flowScheduler.add(consent1RoutineEachFrame());
flowScheduler.add(consent1RoutineEnd());
flowScheduler.add(consent1_2RoutineBegin());
flowScheduler.add(consent1_2RoutineEachFrame());
flowScheduler.add(consent1_2RoutineEnd());
flowScheduler.add(consent1_3RoutineBegin());
flowScheduler.add(consent1_3RoutineEachFrame());
flowScheduler.add(consent1_3RoutineEnd());
flowScheduler.add(InstructRoutineBegin());
flowScheduler.add(InstructRoutineEachFrame());
flowScheduler.add(InstructRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var consent1Clock;
var consent_1;
var key_resp_3;
var text_3;
var consent1_2Clock;
var consent;
var key_resp_4;
var text_4;
var consent1_3Clock;
var consent_2;
var key_resp_6;
var text_5;
var InstructClock;
var inst_text;
var proceed_key;
var fixationClock;
var fixation_target;
var corrAns_reminder_text;
var memory_2;
var trialClock;
var x_pos;
var y_pos;
var opacVal;
var random_ID;
var memory;
var target;
var dist1;
var dist2;
var dist3;
var dist4;
var dist5;
var dist6;
var dist7;
var dist8;
var fixation_searchClock;
var fixation_target_2;
var corrAns_reminder_text_2;
var search_txt_2;
var searchClock;
var search_txt;
var search_img;
var key_resp;
var break_2Clock;
var text_2;
var key_resp_2;
var thanksClock;
var Perfo;
var msg;
var text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "consent1"
  consent1Clock = new util.Clock();
  consent_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_1', units : 'height', 
    image : 'Slide1.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : 0.8533,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'After reading, press Space to continue\n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.49)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "consent1_2"
  consent1_2Clock = new util.Clock();
  consent = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent', units : 'height', 
    image : 'Slide2.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : 0.8533,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'After reading, press Space to continue\n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.49)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "consent1_3"
  consent1_3Clock = new util.Clock();
  consent_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consent_2', units : 'height', 
    image : 'Slide3.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : 0.8533,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'I consent (Y) I do not consent (Esc)\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.49)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instruct"
  InstructClock = new util.Clock();
  inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_text',
    text: "The next screen shown will require you to memorize the targets.\n\nThis will be followed by a 'Search' screen, \nin which you will use the keys below to indicate if a target is present or absent. \nAt most one of the targets will be present in the search screen.\n\n'M' ->present\n'V'  <-absent \n\nReady? Press Space Bar \nto start \n\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  proceed_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_target = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_target', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  corrAns_reminder_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'corrAns_reminder_text',
    text: 'Present: m\n\nAbsent: v',
    font: 'Arial',
    units: undefined, 
    pos: [0, 4], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  memory_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'memory_2',
    text: 'Memorise...\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  x_pos = [(- 400), (- 300), (- 200), (- 100), 0, 100, 200, 300, 400];
  y_pos = [(- 200), (- 150), (- 100), (- 50), 0, 50, 100, 150, 200, 250];
  opacVal = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  random_ID = (Math.floor((Math.random() * ((10000 - 0) + 1))) + 0);
  psychoJS.experiment.addData('random_ID', random_ID);
  
  memory = new visual.TextStim({
    win: psychoJS.window,
    name: 'memory',
    text: 'Memorise...\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -1.0 
  });
  
  target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -2.0 
  });
  dist1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -3.0 
  });
  dist2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -4.0 
  });
  dist3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist3', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -5.0 
  });
  dist4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist4', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -6.0 
  });
  dist5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist5', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -7.0 
  });
  dist6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist6', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -8.0 
  });
  dist7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist7', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -9.0 
  });
  dist8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist8', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -10.0 
  });
  // Initialize components for Routine "fixation_search"
  fixation_searchClock = new util.Clock();
  fixation_target_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixation_target_2', units : 'pix', 
    vertices: [[-[20, 20][0]/2.0, -[20, 20][1]/2.0], [+[20, 20][0]/2.0, -[20, 20][1]/2.0], [0, [20, 20][1]/2.0]],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([0, 1, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  corrAns_reminder_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'corrAns_reminder_text_2',
    text: 'Present: m\n\nAbsent: v',
    font: 'Arial',
    units: undefined, 
    pos: [0, 4], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  search_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'search_txt_2',
    text: 'Search...\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('green'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "search"
  searchClock = new util.Clock();
  search_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'search_txt',
    text: 'Search...\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.44], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('green'),  opacity: 1,
    depth: 0.0 
  });
  
  search_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'search_img', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 0.8533,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -1.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "Press 'Space Bar' to continue",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  Perfo = 0;
  msg = "doh!";
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_3_allKeys;
var consent1Components;
function consent1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'consent1'-------
    t = 0;
    consent1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    consent1Components = [];
    consent1Components.push(consent_1);
    consent1Components.push(key_resp_3);
    consent1Components.push(text_3);
    
    for (const thisComponent of consent1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function consent1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'consent1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consent1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_1* updates
    if (t >= 0.0 && consent_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_1.tStart = t;  // (not accounting for frame time here)
      consent_1.frameNStart = frameN;  // exact frame index
      
      consent_1.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'consent1'-------
    for (const thisComponent of consent1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var consent1_2Components;
function consent1_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'consent1_2'-------
    t = 0;
    consent1_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    consent1_2Components = [];
    consent1_2Components.push(consent);
    consent1_2Components.push(key_resp_4);
    consent1_2Components.push(text_4);
    
    for (const thisComponent of consent1_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function consent1_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'consent1_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consent1_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent* updates
    if (t >= 0.0 && consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent.tStart = t;  // (not accounting for frame time here)
      consent.frameNStart = frameN;  // exact frame index
      
      consent.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent1_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent1_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'consent1_2'-------
    for (const thisComponent of consent1_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "consent1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var consent1_3Components;
function consent1_3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'consent1_3'-------
    t = 0;
    consent1_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    consent1_3Components = [];
    consent1_3Components.push(consent_2);
    consent1_3Components.push(key_resp_6);
    consent1_3Components.push(text_5);
    
    for (const thisComponent of consent1_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function consent1_3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'consent1_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = consent1_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_2* updates
    if (t >= 0.0 && consent_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_2.tStart = t;  // (not accounting for frame time here)
      consent_2.frameNStart = frameN;  // exact frame index
      
      consent_2.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent1_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent1_3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'consent1_3'-------
    for (const thisComponent of consent1_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "consent1_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _proceed_key_allKeys;
var InstructComponents;
function InstructRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Instruct'-------
    t = 0;
    InstructClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    proceed_key.keys = undefined;
    proceed_key.rt = undefined;
    _proceed_key_allKeys = [];
    // keep track of which components have finished
    InstructComponents = [];
    InstructComponents.push(inst_text);
    InstructComponents.push(proceed_key);
    
    for (const thisComponent of InstructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function InstructRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Instruct'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *inst_text* updates
    if (t >= 0.0 && inst_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      inst_text.tStart = t;  // (not accounting for frame time here)
      inst_text.frameNStart = frameN;  // exact frame index
      
      inst_text.setAutoDraw(true);
    }

    
    // *proceed_key* updates
    if (t >= 0.0 && proceed_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proceed_key.tStart = t;  // (not accounting for frame time here)
      proceed_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { proceed_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { proceed_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { proceed_key.clearEvents(); });
    }

    if (proceed_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = proceed_key.getKeys({keyList: ['space'], waitRelease: false});
      _proceed_key_allKeys = _proceed_key_allKeys.concat(theseKeys);
      if (_proceed_key_allKeys.length > 0) {
        proceed_key.keys = _proceed_key_allKeys[_proceed_key_allKeys.length - 1].name;  // just the last key pressed
        proceed_key.rt = _proceed_key_allKeys[_proceed_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Instruct'-------
    for (const thisComponent of InstructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Psychopy_Exp_Params.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(fixationRoutineBegin(snapshot));
    thisScheduler.add(fixationRoutineEachFrame(snapshot));
    thisScheduler.add(fixationRoutineEnd(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(fixation_searchRoutineBegin(snapshot));
    thisScheduler.add(fixation_searchRoutineEachFrame(snapshot));
    thisScheduler.add(fixation_searchRoutineEnd(snapshot));
    thisScheduler.add(searchRoutineBegin(snapshot));
    thisScheduler.add(searchRoutineEachFrame(snapshot));
    thisScheduler.add(searchRoutineEnd(snapshot));
    thisScheduler.add(break_2RoutineBegin(snapshot));
    thisScheduler.add(break_2RoutineEachFrame(snapshot));
    thisScheduler.add(break_2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var fixationComponents;
function fixationRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fixation_target);
    fixationComponents.push(corrAns_reminder_text);
    fixationComponents.push(memory_2);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function fixationRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_target* updates
    if (t >= 0.0 && fixation_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_target.tStart = t;  // (not accounting for frame time here)
      fixation_target.frameNStart = frameN;  // exact frame index
      
      fixation_target.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_target.setAutoDraw(false);
    }
    
    // *corrAns_reminder_text* updates
    if (t >= 0.0 && corrAns_reminder_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corrAns_reminder_text.tStart = t;  // (not accounting for frame time here)
      corrAns_reminder_text.frameNStart = frameN;  // exact frame index
      
      corrAns_reminder_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (corrAns_reminder_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      corrAns_reminder_text.setAutoDraw(false);
    }
    
    // *memory_2* updates
    if (t >= 0.0 && memory_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memory_2.tStart = t;  // (not accounting for frame time here)
      memory_2.frameNStart = frameN;  // exact frame index
      
      memory_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memory_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memory_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation'-------
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var shuffle;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    shuffle = function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    shuffle(x_pos);
    shuffle(y_pos);
    if ((TARGET_NAME !== "blank.png")) {
        opacVal[0] = 1;
    } else {
        opacVal[0] = 0;
    }
    if ((D1 !== "blank.png")) {
        opacVal[1] = 1;
    } else {
        opacVal[1] = 0;
    }
    if ((D2 !== "blank.png")) {
        opacVal[2] = 1;
    } else {
        opacVal[2] = 0;
    }
    if ((D3 !== "blank.png")) {
        opacVal[3] = 1;
    } else {
        opacVal[3] = 0;
    }
    if ((D4 !== "blank.png")) {
        opacVal[4] = 1;
    } else {
        opacVal[4] = 0;
    }
    if ((D5 !== "blank.png")) {
        opacVal[5] = 1;
    } else {
        opacVal[5] = 0;
    }
    if ((D6 !== "blank.png")) {
        opacVal[6] = 1;
    } else {
        opacVal[6] = 0;
    }
    if ((D7 !== "blank.png")) {
        opacVal[7] = 1;
    } else {
        opacVal[7] = 0;
    }
    if ((D8 !== "blank.png")) {
        opacVal[8] = 1;
    } else {
        opacVal[8] = 0;
    }
    
    target.setOpacity(opacVal[0]);
    target.setPos([x_pos[0], y_pos[0]]);
    target.setImage(TARGET_MEM);
    dist1.setOpacity(opacVal[1]);
    dist1.setPos([x_pos[1], y_pos[1]]);
    dist1.setImage(D1);
    dist2.setOpacity(opacVal[2]);
    dist2.setPos([x_pos[2], y_pos[2]]);
    dist2.setImage(D2);
    dist3.setOpacity(opacVal[3]);
    dist3.setPos([x_pos[3], y_pos[3]]);
    dist3.setImage(D3);
    dist4.setOpacity(opacVal[4]);
    dist4.setPos([x_pos[4], y_pos[4]]);
    dist4.setImage(D4);
    dist5.setOpacity(opacVal[5]);
    dist5.setPos([x_pos[5], y_pos[5]]);
    dist5.setImage(D5);
    dist6.setOpacity(opacVal[6]);
    dist6.setPos([x_pos[6], y_pos[6]]);
    dist6.setImage(D6);
    dist7.setOpacity(opacVal[7]);
    dist7.setPos([x_pos[7], y_pos[7]]);
    dist7.setImage(D7);
    dist8.setOpacity(opacVal[8]);
    dist8.setPos([x_pos[8], y_pos[8]]);
    dist8.setImage(D8);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(memory);
    trialComponents.push(target);
    trialComponents.push(dist1);
    trialComponents.push(dist2);
    trialComponents.push(dist3);
    trialComponents.push(dist4);
    trialComponents.push(dist5);
    trialComponents.push(dist6);
    trialComponents.push(dist7);
    trialComponents.push(dist8);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *memory* updates
    if (t >= 0.0 && memory.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memory.tStart = t;  // (not accounting for frame time here)
      memory.frameNStart = frameN;  // exact frame index
      
      memory.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memory.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memory.setAutoDraw(false);
    }
    
    // *target* updates
    if (t >= 0.0 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target.setAutoDraw(false);
    }
    
    // *dist1* updates
    if (t >= 0.0 && dist1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist1.tStart = t;  // (not accounting for frame time here)
      dist1.frameNStart = frameN;  // exact frame index
      
      dist1.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist1.setAutoDraw(false);
    }
    
    // *dist2* updates
    if (t >= 0.0 && dist2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist2.tStart = t;  // (not accounting for frame time here)
      dist2.frameNStart = frameN;  // exact frame index
      
      dist2.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist2.setAutoDraw(false);
    }
    
    // *dist3* updates
    if (t >= 0.0 && dist3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist3.tStart = t;  // (not accounting for frame time here)
      dist3.frameNStart = frameN;  // exact frame index
      
      dist3.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist3.setAutoDraw(false);
    }
    
    // *dist4* updates
    if (t >= 0.0 && dist4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist4.tStart = t;  // (not accounting for frame time here)
      dist4.frameNStart = frameN;  // exact frame index
      
      dist4.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist4.setAutoDraw(false);
    }
    
    // *dist5* updates
    if (t >= 0.0 && dist5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist5.tStart = t;  // (not accounting for frame time here)
      dist5.frameNStart = frameN;  // exact frame index
      
      dist5.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist5.setAutoDraw(false);
    }
    
    // *dist6* updates
    if (t >= 0.0 && dist6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist6.tStart = t;  // (not accounting for frame time here)
      dist6.frameNStart = frameN;  // exact frame index
      
      dist6.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist6.setAutoDraw(false);
    }
    
    // *dist7* updates
    if (t >= 0.0 && dist7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist7.tStart = t;  // (not accounting for frame time here)
      dist7.frameNStart = frameN;  // exact frame index
      
      dist7.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist7.setAutoDraw(false);
    }
    
    // *dist8* updates
    if (t >= 0.0 && dist8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dist8.tStart = t;  // (not accounting for frame time here)
      dist8.frameNStart = frameN;  // exact frame index
      
      dist8.setAutoDraw(true);
    }

    frameRemains = 0.0 + stDur_Mem - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dist8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dist8.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixation_searchComponents;
function fixation_searchRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation_search'-------
    t = 0;
    fixation_searchClock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation_searchComponents = [];
    fixation_searchComponents.push(fixation_target_2);
    fixation_searchComponents.push(corrAns_reminder_text_2);
    fixation_searchComponents.push(search_txt_2);
    
    for (const thisComponent of fixation_searchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function fixation_searchRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation_search'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation_searchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_target_2* updates
    if (t >= 0.0 && fixation_target_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_target_2.tStart = t;  // (not accounting for frame time here)
      fixation_target_2.frameNStart = frameN;  // exact frame index
      
      fixation_target_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_target_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_target_2.setAutoDraw(false);
    }
    
    // *corrAns_reminder_text_2* updates
    if (t >= 0.0 && corrAns_reminder_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      corrAns_reminder_text_2.tStart = t;  // (not accounting for frame time here)
      corrAns_reminder_text_2.frameNStart = frameN;  // exact frame index
      
      corrAns_reminder_text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (corrAns_reminder_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      corrAns_reminder_text_2.setAutoDraw(false);
    }
    
    // *search_txt_2* updates
    if (t >= 0.0 && search_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      search_txt_2.tStart = t;  // (not accounting for frame time here)
      search_txt_2.frameNStart = frameN;  // exact frame index
      
      search_txt_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (search_txt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      search_txt_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_searchComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_searchRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation_search'-------
    for (const thisComponent of fixation_searchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var searchComponents;
function searchRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'search'-------
    t = 0;
    searchClock.reset(); // clock
    frameN = -1;
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    search_img.setOpacity(1);
    search_img.setImage(FILE_SEARCH_IMAGE);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    searchComponents = [];
    searchComponents.push(search_txt);
    searchComponents.push(search_img);
    searchComponents.push(key_resp);
    
    for (const thisComponent of searchComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function searchRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'search'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = searchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *search_txt* updates
    if (t >= 0.0 && search_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      search_txt.tStart = t;  // (not accounting for frame time here)
      search_txt.frameNStart = frameN;  // exact frame index
      
      search_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (search_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      search_txt.setAutoDraw(false);
    }
    
    // *search_img* updates
    if (t >= 0.0 && search_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      search_img.tStart = t;  // (not accounting for frame time here)
      search_img.frameNStart = frameN;  // exact frame index
      
      search_img.setAutoDraw(true);
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (search_img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      search_img.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['m', 'v', 'p'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corrAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of searchComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function searchRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'search'-------
    for (const thisComponent of searchComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var break_duration;
var _key_resp_2_allKeys;
var break_2Components;
function break_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'break_2'-------
    t = 0;
    break_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((key_resp.keys === "p")) {
        break_duration = 60;
    } else {
        break_duration = 0;
    }
    
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(text_2);
    break_2Components.push(key_resp_2);
    
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function break_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'break_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + break_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + break_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'break_2'-------
    for (const thisComponent of break_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var nCorr;
var thanksComponents;
function thanksRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // Get all correct
    nCorr = 0;
    var eachResp;
    for (eachResp=0; eachResp<psychoJS.experiment._trialsData.length; eachResp++) 
    {
      nCorr += psychoJS.experiment._trialsData[eachResp]['key_resp.corr'];
    }
    Perfo = 100 * nCorr / psychoJS.experiment._trialsData.length;
     
    msg = "Thanks for participating. Your performance was" + Perfo + "  out of 100. Well done!";
    text.setText(msg);
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(text);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function thanksRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'thanks'-------
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
