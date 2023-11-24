import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = event.target.elements;
  const amount = parseInt(values.amount.value);
  const delay = parseInt(values.delay.value);
  const step = parseInt(values.step.value);

  for (let i = 0; i < amount; i++) {
    const promiseDelay = delay + i * step;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
})

function createPromise(position, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
}
