

//clock

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //   console.log(seconds)

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  // console.log(mins)

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);


//dice

const num = document.getElementById("num");
const btn = document.querySelector("button");
const die1 = document.querySelector(".die1");
const die2 = document.querySelector(".die2");

btn.addEventListener("click", function () {
  roll();
  num.classList.add("bounce-animation");
  die2.classList.add("spin-animation");
  die1.classList.add("counter-spin-animation");
  setTimeout(function () {
    num.classList.remove("bounce-animation");
    die2.classList.remove("spin-animation");
    die1.classList.remove("counter-spin-animation");
  }, 500);
});

function roll() {
  let result = Math.floor(Math.random() * 12 + 1);
  num.innerHTML = `${result}`;
}

//timer

class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
      this.durationInput = durationInput;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      if (callbacks) {
        this.onStart = callbacks.onStart;
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;
      }
  
      this.startButton.addEventListener("click", this.start);
      this.pauseButton.addEventListener("click", this.pause);
    }
  
    start = () => {
      if (this.onStart) {
        this.onStart(this.timeRmaining);
        durationInput.style.color = "black";
      }
      this.tick();
      this.interval = setInterval(this.tick, 50);
    };
  
    pause = () => {
      clearInterval(this.interval);
    };
  
    tick = () => {
      if (this.timeRmaining <= 0) {
        this.pause();
        if (this.onComplete) {
          this.onComplete();
        }
      } else {
        const timeRmaining = this.timeRmaining;
        this.timeRmaining = timeRmaining - 0.05;
        if (this.onTick) {
          this.onTick(this.timeRmaining);
        }
      }
  
      if (this.timeRmaining <= 5) {
        durationInput.style.color = "red";
      }

      if (this.timeRmaining <= 0){
        durationInput.style.color = "black";
      }
    };
  
    get timeRmaining() {
      return parseFloat(this.durationInput.value);
    }
  
    set timeRmaining(time) {
      return (this.durationInput.value = time.toFixed(2));
    }
  
    onComplete = () => {
      if (this.onComplete) {
        this.onComplete();
      }
    };
  }
  
  const durationInput = document.querySelector("#duration");
  const startButton = document.querySelector("#start");
  const pauseButton = document.querySelector("#pause");
  const circle = document.querySelector("circle");
  
  const perimeter = circle.getAttribute("r") * 2 * Math.PI;
  circle.setAttribute("stroke-dasharray", perimeter);
  
  let duration;
  
  const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
      duration = totalDuration;
    },
  
    onTick(timeRemaining) {
      circle.setAttribute(
        "stroke-dashoffset",
        (perimeter * timeRemaining) / duration - perimeter
      );
      console.log("this is on tick");
    },
  
    onComplete() {
      console.log("Timer done");
      circle.setAttribute("fill", "thistle");
      durationInput.style.backgroundColor = "transparent";
    }
  });
  