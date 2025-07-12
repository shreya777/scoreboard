let timerInterval;
    let timeLeft = 600; 
    let running = false;

    function updateTimerDisplay() {
      const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const sec = String(timeLeft % 60).padStart(2, '0');
      document.getElementById('timer').textContent = `${min}:${sec}`;
    }

    function startGame() {
      if (running) return;
      running = true;
      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          running = false;
          alert('Time is up!');
        }
      }, 1000);
    }

    function resetGame() {
      clearInterval(timerInterval);
      running = false;
      timeLeft = 600;
      updateTimerDisplay();
      document.getElementById('score1').textContent = 0;
      document.getElementById('score2').textContent = 0;
      document.getElementById('foul1').textContent = 0;
      document.getElementById('foul2').textContent = 0;
    }

    function timeout() {
      clearInterval(timerInterval);
      running = false;
      alert('Timeout!');
    }

    function changeScore(team, delta) {
      const scoreId = `score${team}`;
      let score = parseInt(document.getElementById(scoreId).textContent, 10);
      score = Math.max(0, score + delta);
      document.getElementById(scoreId).textContent = score;
    }

    function changeFoul(team, delta) {
      const foulId = `foul${team}`;
      let foul = parseInt(document.getElementById(foulId).textContent, 10);
      foul = Math.max(0, foul + delta);
      document.getElementById(foulId).textContent = foul;
    }

    updateTimerDisplay();