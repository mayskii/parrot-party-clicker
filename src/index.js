// Add javascript code to Party Parrot Clicker such that:

const state = {
  addClickButton: null,
  resetButton: null,
  clickCount: 0,
  boxOne: null,
  boxTwo: null,
  boxThree: null,
  boxFour: null,
  parrotImg: null,
};

const loadControls = () => {
  state.addClickButton = document.getElementById('addClickButton');
  state.resetButton = document.getElementById('resetButton');
  state.heading = document.querySelector('h1');

  state.boxOne = document.getElementById('box-one');
  state.boxTwo = document.getElementById('box-two');
  state.boxThree = document.getElementById('box-three');
  state.boxFour = document.getElementById('box-four');

  state.parrotImg = document.getElementById('parrotImg');
};

const updateHeading = () => {
  state.heading.textContent = `Clicks: ${state.clickCount}`;
};

const handleAddButtonClicked = () => {
  state.clickCount++;
  updateHeading();

  if (state.clickCount === 5) {
    state.parrotImg.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.MX_9URJo6UDqv3zVsuguRgHaE7%3Fpid%3DApi&f=1&ipt=3b7107c1e88227fe7719db0f7a1046dcaf46d13fd05079bb1d511aaade0a9673&ipo=images';
  }
};

const handleResetButtonClicked = () => {
  state.clickCount = 0;
  updateHeading();
};


const registerEvents = () => {
  state.addClickButton.addEventListener('click', handleAddButtonClicked);
  state.resetButton.addEventListener('click', handleResetButtonClicked);
  state.boxOne.addEventListener('mouseenter', () => {
    state.boxOne.style.backgroundColor = 'pink';
  });
  state.boxOne.addEventListener('mouseleave', () => {
    state.boxOne.style.backgroundColor = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      state.boxTwo.classList.add('pressed');
      state.boxTwo.innerHTML = '<p>🍮</p>';
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
      state.boxTwo.innerHTML = '<p>🍰</p>';
    }
  });

  state.boxThree.addEventListener('click', () => {
    state.parrotImg.style.display =
      state.parrotImg.style.display === 'none' ? 'block' : 'none';
  });

  state.boxFour.addEventListener('dblclick', () => {
    alert('Box 4 double clicked!');
  });
};

const onLoaded = () => {
  loadControls();
  registerEvents();
};

onLoaded();

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
