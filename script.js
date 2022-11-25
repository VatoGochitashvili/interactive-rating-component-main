'strict mode';

const numbers = document.querySelectorAll('.number');
const submitBtn = document.querySelector('button');
const card1 = document.querySelector('.card_1');
const card2 = document.querySelector('.card_2');
const selected = document.querySelector('.selected');

numbers.forEach(num => {
  num.addEventListener('click', function () {
    numbers.forEach(num => num.classList.remove('active'));
    num.classList.add('active');
    if (num.classList.contains('active')) {
      submitBtn.addEventListener('click', function () {
        card2.classList.remove('hidden');
        card1.classList.add('hidden');
        selected.textContent = document.querySelector('.active').textContent;
      });
    }
  });
});
