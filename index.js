// HTML elementlarni JavaScriptga chaqirib olish
const screen = document.querySelector('.calculyator-screen p');
const buttons = document.querySelectorAll('.btn');

// Kalkulyator ekranidagi qiymatni saqlash uchun o'zgaruvchi
let result = '0';

// Kalkulyator tugmalariga hodisalar qo'shish
buttons.forEach((button) => {
  button.addEventListener('click', calculate);
});

// Hisoblash funktsiyasi
function calculate(event) {
  const clickedButtonValue = event.target.textContent;

  if (clickedButtonValue === 'ac') {
    // AC tugmasi bosilganda ekranni tozalash
    result = '0';
  } else if (clickedButtonValue === '+/-') {
    // +/- tugmasi bosilganda ekrandagi qiymatni o'zgartirish
    result = -result;
  } else if (clickedButtonValue === '%') {
    // % tugmasi bosilganda ekrandagi qiymatni foizga o'zgartirish
    result = result / 100;
  } else if (clickedButtonValue === '=') {
    // = tugmasi bosilganda hisoblash
    result = eval(result);
  } else {
    // Boshqa raqamlar va amallar tugmasi bosilganda ekranga qo'shish
    if (result === '0') {
      result = clickedButtonValue;
    } else {
      result += clickedButtonValue;
    }
  }

  // Yangi qiymatni ekranga chiqarish
  screen.textContent = result;
}