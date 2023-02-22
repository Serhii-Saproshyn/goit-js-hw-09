import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateTime: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer.targetTime = selectedDates[0].getTime();
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = false;
  },
};

refs.startBtn.addEventListener('click', () => timer.start());
refs.stopBtn.addEventListener('click', () => timer.stop());

flatpickr(refs.dateTime, options);
refs.startBtn.disabled = true;
refs.stopBtn.disabled = true;

const timer = {
  intervalId: null,
  targetTime: null,
  start() {
    this.intervalId = setInterval(() => {
      if (this.targetTime <= Date.now()) {
        return;
      }
      refs.startBtn.disabled = true;
      refs.stopBtn.disabled = false;
      const currentTime = Date.now();
      const deltaTime = this.targetTime - currentTime;
      const time = convertMs(deltaTime);
      updateTime(time);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
  },
};

function updateTime({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
