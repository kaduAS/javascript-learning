document.addEventListener('DOMContentLoaded', function () {
  const quizForm = document.getElementById('quizForm');
  const message = document.getElementById('message');

  quizForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const answers = {
      q1: 'Navi',
      q2: 'Ocarina',
      q3: 'Ganondorf',
      q4: 'Zelda',
      q5: 'Water Temple'
    };
    let score = 0;
    let total = Object.keys(answers).length;
    for (let key in answers) {
      const selected = quizForm.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    }
    let msg = '';
    switch (score) {
      case 5:
        msg = `🎉 Perfect! You got all ${total} questions right, Hero of Time! <br>May the Triforce be with you!`;
        break;
      case 4:
        msg = `🌟 Great job! You got 4 out of 5. You're almost a true Hylian legend!`;
        break;
      case 3:
        msg = `✨ Not bad! 3 out of 5. Navi says: "Hey! Listen! Study a bit more!"`;
        break;
      case 2:
        msg = `🧐 2 out of 5. You might need to visit the Great Deku Tree for some wisdom!`;
        break;
      case 1:
        msg = `😅 Only 1 out of 5. Maybe try playing the Song of Time and try again!`;
        break;
      default:
        msg = `No correct answers. Are you sure you've played Ocarina of Time? 😅`;
    }
    showMessage(msg);
  });

  function showMessage(text) {
    message.innerHTML = text;
    message.style.display = 'block';
    message.style.opacity = 0;
    setTimeout(() => {
      message.style.transition = 'opacity 0.5s';
      message.style.opacity = 1;
    }, 10);
  }
});
