import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  formBtn: document.querySelector('[type="submit"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  refs.formBtn.disabled = true;
  let delay = Number(refs.delay.value);
  for (let i = 1; i <= Number(refs.amount.value); i += 1) {
    createPromise(i, delay).then(onSuccess).catch(onError);
    delay += Number(refs.step.value);
  }
  refs.delay.value = '';
  refs.step.value = '';
  refs.amount.value = '';
  setTimeout(() => {
    refs.formBtn.disabled = false;
  }, delay + 500);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onSuccess(s) {
  Notiflix.Notify.success(s);
}

function onError(e) {
  Notiflix.Notify.failure(e);
}
