/*************************************** 
 * Vismem_Search_Builder_Pavlovia Test *
 ***************************************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'deg',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'vismem_search_builder_pavlovia';  // from the Builder filename that created this script
let expInfo = {'participant': '00000', 'session': '001'};

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
flowScheduler.add(InstructRoutineBegin);
flowScheduler.add(InstructRoutineEachFrame);
flowScheduler.add(InstructRoutineEnd);
flowScheduler.add(fixationRoutineBegin);
flowScheduler.add(fixationRoutineEachFrame);
flowScheduler.add(fixationRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin);
flowScheduler.add(thanksRoutineEachFrame);
flowScheduler.add(thanksRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var InstructClock;
var inst_text;
var proceed_key;
var fixationClock;
var fixation_target;
var corrAns_reminder_text;
var trialClock;
var target;
var dist1;
var dist2;
var dist3;
var dist4;
var dist5;
var dist6;
var dist7;
var dist8;
var searchClock;
var search_img;
var key_resp;
var break_2Clock;
var text_2;
var key_resp_2;
var thanksClock;
var text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instruct"
  InstructClock = new util.Clock();
  inst_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'inst_text',
    text: "The next screen shown will require you to memorize the targets.\n\nIn the following trial use the keys below to indicate if a target is present or absent.\n\n'M' ->present\n'V'  <-absent \n\nReady? Press Space Bar \nto start \n\n",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  proceed_key = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_target = new visual.Rect ({
    win: psychoJS.window, name: 'fixation_target', units : 'pix', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  corrAns_reminder_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'corrAns_reminder_text',
    text: 'Present: m\n\nAbsent: v',
    font: 'Arial',
    units : undefined, 
    pos: [0, 4], height: 1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -1.0 
  });
  dist1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -2.0 
  });
  dist2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -3.0 
  });
  dist3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist3', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -4.0 
  });
  dist4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist4', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -5.0 
  });
  dist5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist5', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -6.0 
  });
  dist6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist6', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -7.0 
  });
  dist7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist7', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -8.0 
  });
  dist8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dist8', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : -9.0 
  });
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fixation_target = new visual.Rect ({
    win: psychoJS.window, name: 'fixation_target', units : 'pix', 
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  corrAns_reminder_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'corrAns_reminder_text',
    text: 'Present: m\n\nAbsent: v',
    font: 'Arial',
    units : undefined, 
    pos: [0, 4], height: 1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "search"
  searchClock = new util.Clock();
  search_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'search_img', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1280, 1024],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : false, depth : 0.0 
  });
  key_resp = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "Press 'Space Bar' to continue",
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units : 'height', 
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
var InstructComponents;
function InstructRoutineBegin() {
  //------Prepare to start Routine 'Instruct'-------
  t = 0;
  InstructClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  proceed_key.keys = undefined;
  proceed_key.rt = undefined;
  // keep track of which components have finished
  InstructComponents = [];
  InstructComponents.push(inst_text);
  InstructComponents.push(proceed_key);
  
  InstructComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructRoutineEachFrame() {
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
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  InstructComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructRoutineEnd() {
  //------Ending Routine 'Instruct'-------
  InstructComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Instruct" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var fixationComponents;
function fixationRoutineBegin() {
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
  
  fixationComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function fixationRoutineEachFrame() {
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
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  fixationComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function fixationRoutineEnd() {
  //------Ending Routine 'fixation'-------
  fixationComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var trials;
var currentLoop;
var trialIterator;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Psychopy_Exp_Params.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisTrial = result.value;
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(fixationRoutineBegin);
    thisScheduler.add(fixationRoutineEachFrame);
    thisScheduler.add(fixationRoutineEnd);
    thisScheduler.add(searchRoutineBegin);
    thisScheduler.add(searchRoutineEachFrame);
    thisScheduler.add(searchRoutineEnd);
    thisScheduler.add(break_2RoutineBegin);
    thisScheduler.add(break_2RoutineEachFrame);
    thisScheduler.add(break_2RoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  target.setOpacity(opacVal[0]);
  target.setPos([x_pos[0], y_pos[0]]);
  target.setImage(TARGET_NAME);
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
  trialComponents.push(target);
  trialComponents.push(dist1);
  trialComponents.push(dist2);
  trialComponents.push(dist3);
  trialComponents.push(dist4);
  trialComponents.push(dist5);
  trialComponents.push(dist6);
  trialComponents.push(dist7);
  trialComponents.push(dist8);
  
  trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
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
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  trialComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  trialComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var searchComponents;
function searchRoutineBegin() {
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
  // keep track of which components have finished
  searchComponents = [];
  searchComponents.push(search_img);
  searchComponents.push(key_resp);
  
  searchComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function searchRoutineEachFrame() {
  //------Loop for each frame of Routine 'search'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = searchClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
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
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp.keys = theseKeys[0].name;  // just the last key pressed
      key_resp.rt = theseKeys[0].rt;
      // was this 'correct'?
      if (key_resp.keys === corrAns) {
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
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  searchComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function searchRoutineEnd() {
  //------Ending Routine 'search'-------
  searchComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // was no response the correct answer?!
  if (key_resp.keys === undefined) {
    if (['None','none',undefined].includes(corrAns)) {
       key_resp.corr = 1  // correct non-response
    } else {
       key_resp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
  if (typeof key_resp.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
      }
  
  key_resp.stop();
  return Scheduler.Event.NEXT;
}

var break_2Components;
function break_2RoutineBegin() {
  //------Prepare to start Routine 'break_2'-------
  t = 0;
  break_2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2.keys = undefined;
  key_resp_2.rt = undefined;
  // keep track of which components have finished
  break_2Components = [];
  break_2Components.push(text_2);
  break_2Components.push(key_resp_2);
  
  break_2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function break_2RoutineEachFrame() {
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
    
    // check for quit:
    if (theseKeys.length > 0 && theseKeys[0].name === 'escape') {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[0].name;  // just the last key pressed
      key_resp_2.rt = theseKeys[0].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  break_2Components.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function break_2RoutineEnd() {
  //------Ending Routine 'break_2'-------
  break_2Components.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  key_resp_2.stop();
  // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var thanksComponents;
function thanksRoutineBegin() {
  //------Prepare to start Routine 'thanks'-------
  t = 0;
  thanksClock.reset(); // clock
  frameN = -1;
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  text.setText(msg);
  // keep track of which components have finished
  thanksComponents = [];
  thanksComponents.push(text);
  
  thanksComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function thanksRoutineEachFrame() {
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
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  thanksComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEnd() {
  //------Ending Routine 'thanks'-------
  thanksComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
