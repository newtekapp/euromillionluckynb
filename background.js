chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fillGrid
    });
  });
  
  function fillGrid() {
    // Numéros principaux
    const mainNumbers = [19, 21, 23, 44, 50];
    // Étoiles chanceuses
    const luckyStars = [2, 3];
  
    // Remplir les champs des numéros principaux
    mainNumbers.forEach((num, index) => {
      const input = document.querySelector(`input[name="main-number-${index + 1}"]`);
      if (input) {
        input.value = num;
      }
    });
  
    // Remplir les champs des étoiles chanceuses
    luckyStars.forEach((num, index) => {
      const input = document.querySelector(`input[name="lucky-star-${index + 1}"]`);
      if (input) {
        input.value = num;
      }
    });
  }
  