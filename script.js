// Constants for first section
const counterInput1 = document.getElementById('counter1');
const incrementBtn1 = document.getElementById('increment-btn1');
const decrementBtn1 = document.getElementById('decrement-btn1');
const scorePrompt1 = document.getElementById('score-prompt1');
const scoreCounter1 = document.getElementById('score-counter1');
const scoreYesBtn1 = document.getElementById('score-yes1');
const scoreNoBtn1 = document.getElementById('score-no1');
const resetBtn1 = document.getElementById('reset-btn1');

// Constants for second section
const counterInput2 = document.getElementById('counter2');
const incrementBtn2 = document.getElementById('increment-btn2');
const decrementBtn2 = document.getElementById('decrement-btn2');
const scorePrompt2 = document.getElementById('score-prompt2');
const scoreCounter2 = document.getElementById('score-counter2');
const scoreYesBtn2 = document.getElementById('score-yes2');
const scoreNoBtn2 = document.getElementById('score-no2');
const resetBtn2 = document.getElementById('reset-btn2');

// Section 1 variables
let counterValue1 = localStorage.getItem('counterValue1') || 0;
let runsScored1 = localStorage.getItem('runsScored1') || 0;
let lastPromptWasYes1 = false;
let decrementBtnClicked1 = false;

// Section 2 variables
let counterValue2 = localStorage.getItem('counterValue2') || 0;
let runsScored2 = localStorage.getItem('runsScored2') || 0;
let lastPromptWasYes2 = false;
let decrementBtnClicked2 = false;

// Initialize section 1
updateCounterDisplay1();
updateScoreCounterDisplay1();

// Initialize section 2
updateCounterDisplay2();
updateScoreCounterDisplay2();

// Section 1 event listeners
incrementBtn1.addEventListener('click', () => { 
    counterValue1++;
    localStorage.setItem('counterValue1', counterValue1);
    updateCounterDisplay1();
    scorePrompt1.style.display = 'block';
    scoreYesBtn1.style.display = 'inline-block';
    scoreNoBtn1.style.display = 'inline-block';
    incrementBtn1.disabled = true;
    if (!decrementBtnClicked1) {
        decrementBtn1.disabled = true;
    } else {
        decrementBtnClicked1 = false;
    }
 });

decrementBtn1.addEventListener('click', () => {
    if (counterValue1 > 0 && !decrementBtnClicked1) {
        counterValue1--;
        if (lastPromptWasYes1) {
            decrementRunsCounter1();
            localStorage.setItem('runsScored1', runsScored1);;
        }
        localStorage.setItem('counterValue1', counterValue1);
        updateCounterDisplay1();
        decrementBtnClicked1 = true;
        decrementBtn1.disabled = true;
    }
});

scoreYesBtn1.addEventListener('click', () => { 
    incrementScoreCounter1();
    lastPromptWasYes1 = true;
    resetScorePrompt1();
    enableButtons1();
 });

scoreNoBtn1.addEventListener('click', () => { 
    resetScorePrompt1();
    lastPromptWasYes1 = false;
    enableButtons1();
 });

resetBtn1.addEventListener('click', () => {
    // Ask for confirmation
    if (confirm("Are you sure you want to reset the runner on third section?")) {
        // If user confirms, execute reset functionality
        counterValue1 = 0;
        runsScored1 = 0;
        localStorage.setItem('counterValue1', counterValue1);
        localStorage.setItem('runsScored1', runsScored1);
        updateCounterDisplay1();
        updateScoreCounterDisplay1();
        resetScorePrompt1();
        enableButtons1();
        decrementBtnClicked1 = false;
    } else {
        // If user cancels, do nothing
        return;
    }
});


// Section 2 event listeners
incrementBtn2.addEventListener('click', () => { 
    counterValue2++;
    localStorage.setItem('counterValue2', counterValue2);
    updateCounterDisplay2();
    scorePrompt2.style.display = 'block';
    scoreYesBtn2.style.display = 'inline-block';
    scoreNoBtn2.style.display = 'inline-block';
    incrementBtn2.disabled = true;
    if (!decrementBtnClicked2) {
        decrementBtn2.disabled = true;
    } else {
        decrementBtnClicked2 = false;
    }
 });

decrementBtn2.addEventListener('click', () => {
    if (counterValue2 > 0 && !decrementBtnClicked2) {
        counterValue2--;
        if (lastPromptWasYes2) {
            decrementRunsCounter2();
            localStorage.setItem('runsScored2', runsScored2);;
        }
        localStorage.setItem('counterValue2', counterValue2);
        updateCounterDisplay2();
        decrementBtnClicked2 = true;
        decrementBtn2.disabled = true;
    }
});

scoreYesBtn2.addEventListener('click', () => {
    incrementScoreCounter2();
    lastPromptWasYes2 = true;
    resetScorePrompt2();
    enableButtons2();
});

scoreNoBtn2.addEventListener('click', () => { 
    resetScorePrompt2();
    lastPromptWasYes2 = false;
    enableButtons2();
 });

resetBtn2.addEventListener('click', () => {
    // Ask for confirmation
    if (confirm("Are you sure you want to reset the runner on second section?")) {
        // If user confirms, execute reset functionality
        counterValue2 = 0;
        runsScored2 = 0;
        localStorage.setItem('counterValue2', counterValue2);
        localStorage.setItem('runsScored2', runsScored2);
        updateCounterDisplay2();
        updateScoreCounterDisplay2();
        resetScorePrompt2();
        enableButtons2();
        decrementBtnClicked2 = false;
    } else {
        // If user cancels, do nothing
        return;
    }
});


// Functions for section 1
function updateCounterDisplay1() { 
    counterInput1.value = counterValue1;
 }

function updateScoreCounterDisplay1() { 
    scoreCounter1.textContent = runsScored1;
 }

// Functions for section 2
function updateCounterDisplay2() { 
    counterInput2.value = counterValue2;
 }

function updateScoreCounterDisplay2() { 
    scoreCounter2.textContent = runsScored2;
 }

// Section 1
function incrementScoreCounter1() {
    runsScored1++;
    localStorage.setItem('runsScored1', runsScored1);
    updateScoreCounterDisplay1();
}

function decrementRunsCounter1() {
    if (runsScored1 > 0) {
        runsScored1--;
        localStorage.setItem('runsScored1', runsScored1);
        updateScoreCounterDisplay1();
    }
}

function resetScorePrompt1() {
    scorePrompt1.style.display = 'none';
    scoreYesBtn1.style.display = 'none';
    scoreNoBtn1.style.display = 'none';
}

function enableButtons1() {
    incrementBtn1.disabled = false;
    if (!decrementBtnClicked1) {
        decrementBtn1.disabled = false;
    }
}

// Section 2
function incrementScoreCounter2() {
    runsScored2++;
    localStorage.setItem('runsScored2', runsScored2);
    updateScoreCounterDisplay2();
}

function decrementRunsCounter2() {
    if (runsScored2 > 0) {
        runsScored2--;
        localStorage.setItem('runsScored2', runsScored2);
        updateScoreCounterDisplay2();
    }
}

function resetScorePrompt2() {
    scorePrompt2.style.display = 'none';
    scoreYesBtn2.style.display = 'none';
    scoreNoBtn2.style.display = 'none';
}

function enableButtons2() {
    incrementBtn2.disabled = false;
    if (!decrementBtnClicked2) {
        decrementBtn2.disabled = false;
    }
}
