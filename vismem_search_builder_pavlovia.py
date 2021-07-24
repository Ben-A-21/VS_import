#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.2),
    on Fri Jul 17 10:55:50 2020
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.2'
expName = 'vismem_search_builder_code'  # from the Builder filename that created this script
expInfo = {'participant': '00000', 'session': '001', 'age': '99', 'gender': '', 'experimenter': 'MI'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/mji3/Dropbox/projects/hybrid_search_pavlovia/hybrid_search_july2020/vismem_search_builder_pavlovia.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1200], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "consent1"
consent1Clock = core.Clock()
consent_1 = visual.ImageStim(
    win=win,
    name='consent_1', units='height', 
    image='Slide1.jpg', mask=None,
    ori=0, pos=(0, 0), size=0.8533,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
key_resp_3 = keyboard.Keyboard()
text_3 = visual.TextStim(win=win, name='text_3',
    text='After reading, press Space to continue\n\n',
    font='Arial',
    units='height', pos=(0, -0.49), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "consent1_2"
consent1_2Clock = core.Clock()
consent = visual.ImageStim(
    win=win,
    name='consent', units='height', 
    image='Slide2.jpg', mask=None,
    ori=0, pos=(0, 0), size=0.8533,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
key_resp_4 = keyboard.Keyboard()
text_4 = visual.TextStim(win=win, name='text_4',
    text='After reading, press Space to continue\n\n',
    font='Arial',
    units='height', pos=(0, -0.49), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "consent1_3"
consent1_3Clock = core.Clock()
consent_2 = visual.ImageStim(
    win=win,
    name='consent_2', units='height', 
    image='Slide3.jpg', mask=None,
    ori=0, pos=(0, 0), size=0.8533,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
key_resp_6 = keyboard.Keyboard()
text_5 = visual.TextStim(win=win, name='text_5',
    text='I consent (Y) I do not consent (Esc)\n',
    font='Arial',
    units='height', pos=(0, -0.49), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "Instruct"
InstructClock = core.Clock()
inst_text = visual.TextStim(win=win, name='inst_text',
    text="The next screen shown will require you to memorize the targets.\n\nThis will be followed by a 'Search' screen, \nin which you will use the keys below to indicate if a target is present or absent. \nAt most one of the targets will be present in the search screen.\n\n'M' ->present\n'V'  <-absent \n\nReady? Press Space Bar \nto start \n\n",
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
proceed_key = keyboard.Keyboard()

# Initialize components for Routine "fixation"
fixationClock = core.Clock()
fixation_target = visual.ShapeStim(
    win=win, name='fixation_target', vertices='cross',units='pix', 
    size=(20, 20),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[1,0,0], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
corrAns_reminder_text = visual.TextStim(win=win, name='corrAns_reminder_text',
    text='Present: m\n\nAbsent: v',
    font='Arial',
    pos=(0, 4), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
memory_2 = visual.TextStim(win=win, name='memory_2',
    text='Memorise...\n\n',
    font='Arial',
    pos=(0, 0.44), height=0.03, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
# define possible coordinates for memorization screen
x_pos = [-400, -300, -200, -100, 0, 100, 200, 300, 400]
y_pos = [-200, -150, -100, -50, 0, 50, 100, 150, 200, 250]
#opacVal = 0
opacVal = [1, 1, 1, 1, 1, 1, 1, 1, 1]

#generate random ID in Python
random_ID = randint(0, 10000)
#add generated ID to the data 
thisExp.addData('random_ID', random_ID)

memory = visual.TextStim(win=win, name='memory',
    text='Memorise...\n\n',
    font='Arial',
    pos=(0, 0.44), height=0.03, wrapWidth=None, ori=0, 
    color='red', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
target = visual.ImageStim(
    win=win,
    name='target', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-2.0)
dist1 = visual.ImageStim(
    win=win,
    name='dist1', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-3.0)
dist2 = visual.ImageStim(
    win=win,
    name='dist2', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-4.0)
dist3 = visual.ImageStim(
    win=win,
    name='dist3', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-5.0)
dist4 = visual.ImageStim(
    win=win,
    name='dist4', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-6.0)
dist5 = visual.ImageStim(
    win=win,
    name='dist5', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-7.0)
dist6 = visual.ImageStim(
    win=win,
    name='dist6', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-8.0)
dist7 = visual.ImageStim(
    win=win,
    name='dist7', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-9.0)
dist8 = visual.ImageStim(
    win=win,
    name='dist8', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=None,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-10.0)

# Initialize components for Routine "fixation_search"
fixation_searchClock = core.Clock()
fixation_target_2 = visual.ShapeStim(
    win=win, name='fixation_target_2',units='pix', 
    vertices=[[-(20, 20)[0]/2.0,-(20, 20)[1]/2.0], [+(20, 20)[0]/2.0,-(20, 20)[1]/2.0], [0,(20, 20)[1]/2.0]],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[-1,-1,-1], lineColorSpace='rgb',
    fillColor=[0,1,0], fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
corrAns_reminder_text_2 = visual.TextStim(win=win, name='corrAns_reminder_text_2',
    text='Present: m\n\nAbsent: v',
    font='Arial',
    pos=(0, 4), height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
search_txt_2 = visual.TextStim(win=win, name='search_txt_2',
    text='Search...\n\n',
    font='Arial',
    pos=(0, 0.44), height=0.03, wrapWidth=None, ori=0, 
    color='green', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "search"
searchClock = core.Clock()
search_txt = visual.TextStim(win=win, name='search_txt',
    text='Search...\n\n',
    font='Arial',
    pos=(0, 0.44), height=0.03, wrapWidth=None, ori=0, 
    color='green', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
search_img = visual.ImageStim(
    win=win,
    name='search_img', units='height', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=0.8533,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=False, depth=-1.0)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "break_2"
break_2Clock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text="Press 'Space Bar' to continue",
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "thanks"
thanksClock = core.Clock()
Perfo = 0
msg='doh!'#if this comes up we forgot to update the msg!

text = visual.TextStim(win=win, name='text',
    text='default text',
    font='Arial',
    units='height', pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "consent1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
consent1Components = [consent_1, key_resp_3, text_3]
for thisComponent in consent1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent1"-------
while continueRoutine:
    # get current time
    t = consent1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consent_1* updates
    if consent_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_1.frameNStart = frameN  # exact frame index
        consent_1.tStart = t  # local t and not account for scr refresh
        consent_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_1, 'tStartRefresh')  # time at next scr refresh
        consent_1.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent1"-------
for thisComponent in consent1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('consent_1.started', consent_1.tStartRefresh)
thisExp.addData('consent_1.stopped', consent_1.tStopRefresh)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# the Routine "consent1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent1_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
consent1_2Components = [consent, key_resp_4, text_4]
for thisComponent in consent1_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent1_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent1_2"-------
while continueRoutine:
    # get current time
    t = consent1_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent1_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consent* updates
    if consent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent.frameNStart = frameN  # exact frame index
        consent.tStart = t  # local t and not account for scr refresh
        consent.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent, 'tStartRefresh')  # time at next scr refresh
        consent.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent1_2"-------
for thisComponent in consent1_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('consent.started', consent.tStartRefresh)
thisExp.addData('consent.stopped', consent.tStopRefresh)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
# the Routine "consent1_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent1_3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
consent1_3Components = [consent_2, key_resp_6, text_5]
for thisComponent in consent1_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent1_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent1_3"-------
while continueRoutine:
    # get current time
    t = consent1_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent1_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consent_2* updates
    if consent_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_2.frameNStart = frameN  # exact frame index
        consent_2.tStart = t  # local t and not account for scr refresh
        consent_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_2, 'tStartRefresh')  # time at next scr refresh
        consent_2.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['y'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent1_3"-------
for thisComponent in consent1_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('consent_2.started', consent_2.tStartRefresh)
thisExp.addData('consent_2.stopped', consent_2.tStopRefresh)
# check responses
if key_resp_6.keys in ['', [], None]:  # No response was made
    key_resp_6.keys = None
thisExp.addData('key_resp_6.keys',key_resp_6.keys)
if key_resp_6.keys != None:  # we had a response
    thisExp.addData('key_resp_6.rt', key_resp_6.rt)
thisExp.addData('key_resp_6.started', key_resp_6.tStartRefresh)
thisExp.addData('key_resp_6.stopped', key_resp_6.tStopRefresh)
thisExp.nextEntry()
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# the Routine "consent1_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instruct"-------
continueRoutine = True
# update component parameters for each repeat
proceed_key.keys = []
proceed_key.rt = []
_proceed_key_allKeys = []
# keep track of which components have finished
InstructComponents = [inst_text, proceed_key]
for thisComponent in InstructComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InstructClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instruct"-------
while continueRoutine:
    # get current time
    t = InstructClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InstructClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *inst_text* updates
    if inst_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        inst_text.frameNStart = frameN  # exact frame index
        inst_text.tStart = t  # local t and not account for scr refresh
        inst_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(inst_text, 'tStartRefresh')  # time at next scr refresh
        inst_text.setAutoDraw(True)
    
    # *proceed_key* updates
    waitOnFlip = False
    if proceed_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        proceed_key.frameNStart = frameN  # exact frame index
        proceed_key.tStart = t  # local t and not account for scr refresh
        proceed_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(proceed_key, 'tStartRefresh')  # time at next scr refresh
        proceed_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(proceed_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(proceed_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if proceed_key.status == STARTED and not waitOnFlip:
        theseKeys = proceed_key.getKeys(keyList=['space'], waitRelease=False)
        _proceed_key_allKeys.extend(theseKeys)
        if len(_proceed_key_allKeys):
            proceed_key.keys = _proceed_key_allKeys[-1].name  # just the last key pressed
            proceed_key.rt = _proceed_key_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instruct"-------
for thisComponent in InstructComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('inst_text.started', inst_text.tStartRefresh)
thisExp.addData('inst_text.stopped', inst_text.tStopRefresh)
# the Routine "Instruct" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('Psychopy_Exp_Params_pilot.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "fixation"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixationComponents = [fixation_target, corrAns_reminder_text, memory_2]
    for thisComponent in fixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_target* updates
        if fixation_target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_target.frameNStart = frameN  # exact frame index
            fixation_target.tStart = t  # local t and not account for scr refresh
            fixation_target.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_target, 'tStartRefresh')  # time at next scr refresh
            fixation_target.setAutoDraw(True)
        if fixation_target.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_target.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_target.tStop = t  # not accounting for scr refresh
                fixation_target.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_target, 'tStopRefresh')  # time at next scr refresh
                fixation_target.setAutoDraw(False)
        
        # *corrAns_reminder_text* updates
        if corrAns_reminder_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            corrAns_reminder_text.frameNStart = frameN  # exact frame index
            corrAns_reminder_text.tStart = t  # local t and not account for scr refresh
            corrAns_reminder_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(corrAns_reminder_text, 'tStartRefresh')  # time at next scr refresh
            corrAns_reminder_text.setAutoDraw(True)
        if corrAns_reminder_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > corrAns_reminder_text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                corrAns_reminder_text.tStop = t  # not accounting for scr refresh
                corrAns_reminder_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(corrAns_reminder_text, 'tStopRefresh')  # time at next scr refresh
                corrAns_reminder_text.setAutoDraw(False)
        
        # *memory_2* updates
        if memory_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            memory_2.frameNStart = frameN  # exact frame index
            memory_2.tStart = t  # local t and not account for scr refresh
            memory_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(memory_2, 'tStartRefresh')  # time at next scr refresh
            memory_2.setAutoDraw(True)
        if memory_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > memory_2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                memory_2.tStop = t  # not accounting for scr refresh
                memory_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(memory_2, 'tStopRefresh')  # time at next scr refresh
                memory_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation"-------
    for thisComponent in fixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation_target.started', fixation_target.tStartRefresh)
    trials.addData('fixation_target.stopped', fixation_target.tStopRefresh)
    trials.addData('corrAns_reminder_text.started', corrAns_reminder_text.tStartRefresh)
    trials.addData('corrAns_reminder_text.stopped', corrAns_reminder_text.tStopRefresh)
    trials.addData('memory_2.started', memory_2.tStartRefresh)
    trials.addData('memory_2.stopped', memory_2.tStopRefresh)
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    # randomize stimulus positions at the start of each trial
    shuffle(x_pos)
    shuffle(y_pos)
    
    # When target is absent, set opacity to 0
    #if Tpres != None and Tpres == 0.0 :
    #    opacVal[4] = 0
    #elif  Tpres == 1.0 :
    #    opacVal[4] = 1
    
    # When distractor is absent, set opacity to 1
    if TARGET_NAME != 'blank.png':
        opacVal[0] = 1
    else:
        opacVal[0] = 0
    if D1 != 'blank.png':
        opacVal[1] = 1
    else:
        opacVal[1] = 0
    if D2 != 'blank.png':
        opacVal[2] = 1
    else:
        opacVal[2] = 0
    if D3 != 'blank.png':
        opacVal[3] = 1
    else:
        opacVal[3] = 0
    if D4 != 'blank.png':
        opacVal[4] = 1
    else:
        opacVal[4] = 0
    if D5 != 'blank.png':
        opacVal[5] = 1
    else:
        opacVal[5] = 0
    if D6 != 'blank.png':
        opacVal[6] = 1
    else:
        opacVal[6] = 0
    if D7 != 'blank.png':
        opacVal[7] = 1
    else:
        opacVal[7] = 0
    if D8 != 'blank.png':
        opacVal[8] = 1
    else:
        opacVal[8] = 0
    
    # target.setOpacity(Tpres, log=False)
    # print(frameDur)
    target.setOpacity(opacVal[0])
    target.setPos((x_pos[0], y_pos[0]))
    target.setImage(TARGET_MEM)
    dist1.setOpacity(opacVal[1])
    dist1.setPos((x_pos[1], y_pos[1]))
    dist1.setImage(D1)
    dist2.setOpacity(opacVal[2])
    dist2.setPos((x_pos[2], y_pos[2]))
    dist2.setImage(D2)
    dist3.setOpacity(opacVal[3])
    dist3.setPos((x_pos[3], y_pos[3]))
    dist3.setImage(D3)
    dist4.setOpacity(opacVal[4])
    dist4.setPos((x_pos[4], y_pos[4]))
    dist4.setImage(D4)
    dist5.setOpacity(opacVal[5])
    dist5.setPos((x_pos[5], y_pos[5]))
    dist5.setImage(D5)
    dist6.setOpacity(opacVal[6])
    dist6.setPos((x_pos[6], y_pos[6]))
    dist6.setImage(D6)
    dist7.setOpacity(opacVal[7])
    dist7.setPos((x_pos[7], y_pos[7]))
    dist7.setImage(D7)
    dist8.setOpacity(opacVal[8])
    dist8.setPos((x_pos[8], y_pos[8]))
    dist8.setImage(D8)
    # keep track of which components have finished
    trialComponents = [memory, target, dist1, dist2, dist3, dist4, dist5, dist6, dist7, dist8]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *memory* updates
        if memory.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            memory.frameNStart = frameN  # exact frame index
            memory.tStart = t  # local t and not account for scr refresh
            memory.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(memory, 'tStartRefresh')  # time at next scr refresh
            memory.setAutoDraw(True)
        if memory.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > memory.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                memory.tStop = t  # not accounting for scr refresh
                memory.frameNStop = frameN  # exact frame index
                win.timeOnFlip(memory, 'tStopRefresh')  # time at next scr refresh
                memory.setAutoDraw(False)
        
        # *target* updates
        if target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            target.frameNStart = frameN  # exact frame index
            target.tStart = t  # local t and not account for scr refresh
            target.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(target, 'tStartRefresh')  # time at next scr refresh
            target.setAutoDraw(True)
        if target.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > target.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                target.tStop = t  # not accounting for scr refresh
                target.frameNStop = frameN  # exact frame index
                win.timeOnFlip(target, 'tStopRefresh')  # time at next scr refresh
                target.setAutoDraw(False)
        
        # *dist1* updates
        if dist1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist1.frameNStart = frameN  # exact frame index
            dist1.tStart = t  # local t and not account for scr refresh
            dist1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist1, 'tStartRefresh')  # time at next scr refresh
            dist1.setAutoDraw(True)
        if dist1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist1.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist1.tStop = t  # not accounting for scr refresh
                dist1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist1, 'tStopRefresh')  # time at next scr refresh
                dist1.setAutoDraw(False)
        
        # *dist2* updates
        if dist2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist2.frameNStart = frameN  # exact frame index
            dist2.tStart = t  # local t and not account for scr refresh
            dist2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist2, 'tStartRefresh')  # time at next scr refresh
            dist2.setAutoDraw(True)
        if dist2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist2.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist2.tStop = t  # not accounting for scr refresh
                dist2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist2, 'tStopRefresh')  # time at next scr refresh
                dist2.setAutoDraw(False)
        
        # *dist3* updates
        if dist3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist3.frameNStart = frameN  # exact frame index
            dist3.tStart = t  # local t and not account for scr refresh
            dist3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist3, 'tStartRefresh')  # time at next scr refresh
            dist3.setAutoDraw(True)
        if dist3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist3.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist3.tStop = t  # not accounting for scr refresh
                dist3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist3, 'tStopRefresh')  # time at next scr refresh
                dist3.setAutoDraw(False)
        
        # *dist4* updates
        if dist4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist4.frameNStart = frameN  # exact frame index
            dist4.tStart = t  # local t and not account for scr refresh
            dist4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist4, 'tStartRefresh')  # time at next scr refresh
            dist4.setAutoDraw(True)
        if dist4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist4.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist4.tStop = t  # not accounting for scr refresh
                dist4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist4, 'tStopRefresh')  # time at next scr refresh
                dist4.setAutoDraw(False)
        
        # *dist5* updates
        if dist5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist5.frameNStart = frameN  # exact frame index
            dist5.tStart = t  # local t and not account for scr refresh
            dist5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist5, 'tStartRefresh')  # time at next scr refresh
            dist5.setAutoDraw(True)
        if dist5.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist5.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist5.tStop = t  # not accounting for scr refresh
                dist5.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist5, 'tStopRefresh')  # time at next scr refresh
                dist5.setAutoDraw(False)
        
        # *dist6* updates
        if dist6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist6.frameNStart = frameN  # exact frame index
            dist6.tStart = t  # local t and not account for scr refresh
            dist6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist6, 'tStartRefresh')  # time at next scr refresh
            dist6.setAutoDraw(True)
        if dist6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist6.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist6.tStop = t  # not accounting for scr refresh
                dist6.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist6, 'tStopRefresh')  # time at next scr refresh
                dist6.setAutoDraw(False)
        
        # *dist7* updates
        if dist7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist7.frameNStart = frameN  # exact frame index
            dist7.tStart = t  # local t and not account for scr refresh
            dist7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist7, 'tStartRefresh')  # time at next scr refresh
            dist7.setAutoDraw(True)
        if dist7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist7.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist7.tStop = t  # not accounting for scr refresh
                dist7.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist7, 'tStopRefresh')  # time at next scr refresh
                dist7.setAutoDraw(False)
        
        # *dist8* updates
        if dist8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dist8.frameNStart = frameN  # exact frame index
            dist8.tStart = t  # local t and not account for scr refresh
            dist8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dist8, 'tStartRefresh')  # time at next scr refresh
            dist8.setAutoDraw(True)
        if dist8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dist8.tStartRefresh + stDur_Mem-frameTolerance:
                # keep track of stop time/frame for later
                dist8.tStop = t  # not accounting for scr refresh
                dist8.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dist8, 'tStopRefresh')  # time at next scr refresh
                dist8.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('memory.started', memory.tStartRefresh)
    trials.addData('memory.stopped', memory.tStopRefresh)
    trials.addData('target.started', target.tStartRefresh)
    trials.addData('target.stopped', target.tStopRefresh)
    trials.addData('dist1.started', dist1.tStartRefresh)
    trials.addData('dist1.stopped', dist1.tStopRefresh)
    trials.addData('dist2.started', dist2.tStartRefresh)
    trials.addData('dist2.stopped', dist2.tStopRefresh)
    trials.addData('dist3.started', dist3.tStartRefresh)
    trials.addData('dist3.stopped', dist3.tStopRefresh)
    trials.addData('dist4.started', dist4.tStartRefresh)
    trials.addData('dist4.stopped', dist4.tStopRefresh)
    trials.addData('dist5.started', dist5.tStartRefresh)
    trials.addData('dist5.stopped', dist5.tStopRefresh)
    trials.addData('dist6.started', dist6.tStartRefresh)
    trials.addData('dist6.stopped', dist6.tStopRefresh)
    trials.addData('dist7.started', dist7.tStartRefresh)
    trials.addData('dist7.stopped', dist7.tStopRefresh)
    trials.addData('dist8.started', dist8.tStartRefresh)
    trials.addData('dist8.stopped', dist8.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "fixation_search"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    fixation_searchComponents = [fixation_target_2, corrAns_reminder_text_2, search_txt_2]
    for thisComponent in fixation_searchComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    fixation_searchClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "fixation_search"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = fixation_searchClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=fixation_searchClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_target_2* updates
        if fixation_target_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fixation_target_2.frameNStart = frameN  # exact frame index
            fixation_target_2.tStart = t  # local t and not account for scr refresh
            fixation_target_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_target_2, 'tStartRefresh')  # time at next scr refresh
            fixation_target_2.setAutoDraw(True)
        if fixation_target_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_target_2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_target_2.tStop = t  # not accounting for scr refresh
                fixation_target_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_target_2, 'tStopRefresh')  # time at next scr refresh
                fixation_target_2.setAutoDraw(False)
        
        # *corrAns_reminder_text_2* updates
        if corrAns_reminder_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            corrAns_reminder_text_2.frameNStart = frameN  # exact frame index
            corrAns_reminder_text_2.tStart = t  # local t and not account for scr refresh
            corrAns_reminder_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(corrAns_reminder_text_2, 'tStartRefresh')  # time at next scr refresh
            corrAns_reminder_text_2.setAutoDraw(True)
        if corrAns_reminder_text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > corrAns_reminder_text_2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                corrAns_reminder_text_2.tStop = t  # not accounting for scr refresh
                corrAns_reminder_text_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(corrAns_reminder_text_2, 'tStopRefresh')  # time at next scr refresh
                corrAns_reminder_text_2.setAutoDraw(False)
        
        # *search_txt_2* updates
        if search_txt_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            search_txt_2.frameNStart = frameN  # exact frame index
            search_txt_2.tStart = t  # local t and not account for scr refresh
            search_txt_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(search_txt_2, 'tStartRefresh')  # time at next scr refresh
            search_txt_2.setAutoDraw(True)
        if search_txt_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > search_txt_2.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                search_txt_2.tStop = t  # not accounting for scr refresh
                search_txt_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(search_txt_2, 'tStopRefresh')  # time at next scr refresh
                search_txt_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in fixation_searchComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "fixation_search"-------
    for thisComponent in fixation_searchComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fixation_target_2.started', fixation_target_2.tStartRefresh)
    trials.addData('fixation_target_2.stopped', fixation_target_2.tStopRefresh)
    trials.addData('corrAns_reminder_text_2.started', corrAns_reminder_text_2.tStartRefresh)
    trials.addData('corrAns_reminder_text_2.stopped', corrAns_reminder_text_2.tStopRefresh)
    trials.addData('search_txt_2.started', search_txt_2.tStartRefresh)
    trials.addData('search_txt_2.stopped', search_txt_2.tStopRefresh)
    
    # ------Prepare to start Routine "search"-------
    continueRoutine = True
    routineTimer.add(8.000000)
    # update component parameters for each repeat
    search_img.setOpacity(1)
    search_img.setImage(FILE_SEARCH_IMAGE)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    searchComponents = [search_txt, search_img, key_resp]
    for thisComponent in searchComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    searchClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "search"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = searchClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=searchClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *search_txt* updates
        if search_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            search_txt.frameNStart = frameN  # exact frame index
            search_txt.tStart = t  # local t and not account for scr refresh
            search_txt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(search_txt, 'tStartRefresh')  # time at next scr refresh
            search_txt.setAutoDraw(True)
        if search_txt.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > search_txt.tStartRefresh + 8-frameTolerance:
                # keep track of stop time/frame for later
                search_txt.tStop = t  # not accounting for scr refresh
                search_txt.frameNStop = frameN  # exact frame index
                win.timeOnFlip(search_txt, 'tStopRefresh')  # time at next scr refresh
                search_txt.setAutoDraw(False)
        
        # *search_img* updates
        if search_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            search_img.frameNStart = frameN  # exact frame index
            search_img.tStart = t  # local t and not account for scr refresh
            search_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(search_img, 'tStartRefresh')  # time at next scr refresh
            search_img.setAutoDraw(True)
        if search_img.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > search_img.tStartRefresh + 8-frameTolerance:
                # keep track of stop time/frame for later
                search_img.tStop = t  # not accounting for scr refresh
                search_img.frameNStop = frameN  # exact frame index
                win.timeOnFlip(search_img, 'tStopRefresh')  # time at next scr refresh
                search_img.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp.tStartRefresh + 8-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['m', 'v', 'p'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # was this correct?
                if (key_resp.keys == str(corrAns)) or (key_resp.keys == corrAns):
                    key_resp.corr = 1
                else:
                    key_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in searchComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "search"-------
    for thisComponent in searchComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('search_txt.started', search_txt.tStartRefresh)
    trials.addData('search_txt.stopped', search_txt.tStopRefresh)
    trials.addData('search_img.started', search_img.tStartRefresh)
    trials.addData('search_img.stopped', search_img.tStopRefresh)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
        # was no response the correct answer?!
        if str(corrAns).lower() == 'none':
           key_resp.corr = 1;  # correct non-response
        else:
           key_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('key_resp.keys',key_resp.keys)
    trials.addData('key_resp.corr', key_resp.corr)
    if key_resp.keys != None:  # we had a response
        trials.addData('key_resp.rt', key_resp.rt)
    trials.addData('key_resp.started', key_resp.tStartRefresh)
    trials.addData('key_resp.stopped', key_resp.tStopRefresh)
    
    # ------Prepare to start Routine "break_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    if key_resp.keys == 'p':
        break_duration = 60
    else:
        break_duration = 0
        
    
    
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    break_2Components = [text_2, key_resp_2]
    for thisComponent in break_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    break_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "break_2"-------
    while continueRoutine:
        # get current time
        t = break_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=break_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            text_2.setAutoDraw(True)
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + break_duration-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_2, 'tStopRefresh')  # time at next scr refresh
                text_2.setAutoDraw(False)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_2.tStartRefresh + break_duration-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_2.tStop = t  # not accounting for scr refresh
                key_resp_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_2, 'tStopRefresh')  # time at next scr refresh
                key_resp_2.status = FINISHED
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "break_2"-------
    for thisComponent in break_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text_2.started', text_2.tStartRefresh)
    trials.addData('text_2.stopped', text_2.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials.addData('key_resp_2.rt', key_resp_2.rt)
    trials.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    # the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "thanks"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
nCorr = trials.data['key_resp.corr'].sum() #.std(), .mean() also available
Perfo = 100*trials.data['key_resp.corr'].mean()
#meanRt = trials.data['key_resp.rt'].mean()
#msg = "Thanks for participating. Your performance was %.2f out of 100. Well done!!" %(Perfo)
msg = 'Thanks for participating. Your performance was %.2f out of 100. \
Well done!! \
PLEASE WRITE DOWN YOUR UNIQUE PARTICIPANT ID %.d \
You will need it to run the second part of the experiment' %(Perfo)  %(random_ID)

text.setText(msg)
# keep track of which components have finished
thanksComponents = [text]
for thisComponent in thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
thanksClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "thanks"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = thanksClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=thanksClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    if text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text.tStartRefresh + 5.0-frameTolerance:
            # keep track of stop time/frame for later
            text.tStop = t  # not accounting for scr refresh
            text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text, 'tStopRefresh')  # time at next scr refresh
            text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "thanks"-------
for thisComponent in thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
