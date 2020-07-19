import React from "react";

export default function Timer() {
  return (
    <div className="Timer">
      <header>
        <h3>Countdown: </h3>
        <input type="number" className="timer-input" placeholder="(min)" />
      </header>
      <section>
        <p>More than halfway there!</p>
        <div className="timer-container">
          <h1>15:31</h1>
          <i class="far fa-pause-circle fa-2x"></i>
        </div>
        <button>1X</button>
        <button>1.5X</button>
        <button>2.0X</button>
      </section>
    </div>
  );
}
