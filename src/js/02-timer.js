import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const startBtn = document.querySelector('[data-start]');
const dateDays = document.querySelector('[data-days]');
const dateHours = document.querySelector('[data-hours]');
const dateMinutes = document.querySelector('[data-minutes');
const dateSeconds = document.querySelector('[data-seconds]');

const selector = '#datetime-picker';

let timerId = null;
let timerDate;
 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: (selectedDates) => {
        handleDateChange(selectedDates[0]);
    },
};

flatpickr(selector, options)

function handleDateChange(date) {
    console.log(date)

    if (date <= new Date()) {
        startBtn.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");
        // window.alert("Please choose a date in the future")
        return
    }

    startBtn.disabled = false;
    timerDate = date;
}

startBtn.addEventListener('click', onStartTimer)


function onStartTimer() {
    timerId = setInterval(() => {
        const timeDifference = timerDate - new Date();

        console.log(timeDifference)

        if (timeDifference < 0) {
            return clearInterval(timerId);
        }

        const convertMsResult = convertMs(timeDifference);
        // console.log(convertMsResult);
        dateSeconds.innerHTML = addLeadingZero(convertMsResult.seconds);
        dateMinutes.innerHTML = addLeadingZero(convertMsResult.minutes);
        dateHours.innerHTML = addLeadingZero(convertMsResult.hours);
        dateDays.innerHTML = addLeadingZero(convertMsResult.days);
    }, 1000)
    Notiflix.Notify.success("Timer started");
}

function addLeadingZero(value) {
    if (value < 10) {
        return '0' + value;
    }

    return value
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
