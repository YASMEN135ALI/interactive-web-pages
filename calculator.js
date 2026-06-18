const display = document.getElementById('calcDisplay');
const buttonsCalc = document.querySelectorAll('.calc-btn');
const clearBtn = document.getElementById('clearBtn');
const equalsBtn = document.getElementById('equalsBtn');

buttonsCalc.forEach(btn => {
  btn.addEventListener('click', () => {
    display.value += btn.textContent;
  });
});

clearBtn.addEventListener('click', () => {
  display.value = '';
});

equalsBtn.addEventListener('click', () => {
  try {
    display.value = eval(display.value) || '';
  } catch (e) {
    alert('معادلة غير صحيحة');
  }
});
