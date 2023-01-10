//button
const btn1 = document.querySelector('.cell-1');
const btn2 = document.querySelector('.cell-2');
const btn3 = document.querySelector('.cell-3');
const btn4 = document.querySelector('.cell-4');
const btn5 = document.querySelector('.cell-5');
const btn6 = document.querySelector('.cell-6');
//
const wrong1 = document.querySelector('.wrong-1');
const wrong2 = document.querySelector('.wrong-2');
//clacfunction
const calcBill = function (percent) {
  const bill = Number(document.getElementById('bill').value);
  const people = Number(document.getElementById('people').value);

  if (!bill || !people) {
    if (!bill) {
      wrong1.classList.remove('wrong-1');
      wrong1.style.color = 'red';
    }
    if (!people) {
      wrong2.classList.remove('wrong-2');
      wrong2.style.color = 'red';
    }
  } else if (bill && people) {
    wrong1.classList.add('wrong-1');
    wrong2.classList.add('wrong-2');

    document.querySelector('.tip-amount').textContent = (
      (bill * percent) /
      people
    ).toFixed(2);
    document.querySelector('.total-amount').textContent = (
      (bill + bill * percent) /
      people
    ).toFixed(2);
  }
};

btn1.addEventListener('click', function () {
  calcBill(0.05);
  console.log('btn1');
});
btn2.addEventListener('click', function () {
  calcBill(0.1);
  console.log('btn2');
});
btn3.addEventListener('click', function () {
  calcBill(0.15);
  console.log('btn3');
});
btn4.addEventListener('click', function () {
  calcBill(0.25);
  console.log('btn4');
});
btn5.addEventListener('click', function () {
  calcBill(0.5);
  console.log('btn5');
});

//custome
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const custom = Number(document.getElementById('custom').value);
    calcBill(custom / 100);
  }
});

//reset
const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', function () {
  wrong1.classList.add('wrong-1');
  wrong2.classList.add('wrong-2');

  document.getElementById('custom').value = '';
  document.getElementById('bill').value = '';
  document.getElementById('people').value = '';
  document.querySelector('.total-amount').textContent = '$0.00';
  document.querySelector('.tip-amount').textContent = '$0.00';
  console.log('resetBtn');
});
