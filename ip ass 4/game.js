$(document).ready(function () {
    let score = 0;
    let gameActive = false;
  
    function spawnObject() {
      if (!gameActive) return;
      let randomX = Math.floor(Math.random() * $(window).width() - 50);
      let randomY = Math.floor(Math.random() * $(window).height() - 50);
      $('#game-object').css({ top: randomY, left: randomX }).fadeIn(200).delay(500).fadeOut(200, spawnObject);
    }
  
    $('#start-game').click(function () {
      gameActive = true;
      score = 0;
      $('#score-value').text(score);
      spawnObject();
    });
  
    $('#reset-game').click(function () {
      gameActive = false;
      score = 0;
      $('#score-value').text(score);
      $('#game-object').stop().fadeOut();
    });
  
    $('#game-object').click(function () {
      score++;
      $('#score-value').text(score);
    });
  });
  