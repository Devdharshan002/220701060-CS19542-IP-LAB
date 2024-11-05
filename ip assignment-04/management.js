$(document).ready(function () {
    let settings = {
      difficulty: 'easy',
      gameSpeed: 5
    };
  
    function updateGameSettings() {
      settings.difficulty = $('#difficulty').val();
      settings.gameSpeed = $('#game-speed').val();
      alert(`Settings updated! Difficulty: ${settings.difficulty}, Game Speed: ${settings.gameSpeed}`);
    }
  
    $('#update-settings').click(updateGameSettings);
  });
  