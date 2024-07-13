document.getElementById('generateButton').addEventListener('click', () => {
  const mainNumbers = generateWeightedNumbers(
    [23, 19, 44, 21, 50, 42, 17, 26, 10, 37],
    [201, 197, 197, 196, 193, 192, 191, 189, 188, 187],
    5
  );
  const luckyStars = generateWeightedNumbers(
    [3, 2, 8, 9, 7],
    [357, 350, 336, 321, 317],
    2
  );

  const numbersDiv = document.getElementById('numbers');
  numbersDiv.innerHTML = `
    ${mainNumbers.map(num => `<div class="number">${num}</div>`).join('')}
    ${luckyStars.map(star => `<div class="star"><span>${star}</span></div>`).join('')}
  `;
  document.getElementById('extraContent').style.display = 'block';
  document.getElementById('donation').style.display = 'block'; // Show donation section
});

function generateWeightedNumbers(numbers, weights, count) {
  const result = [];
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

  while (result.length < count) {
    const randomNum = Math.random() * totalWeight;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += weights[i];
      if (randomNum <= sum) {
        if (!result.includes(numbers[i])) {
          result.push(numbers[i]);
        }
        break;
      }
    }
  }
  
  return result.sort((a, b) => a - b);
}

document.getElementById('copyMessage').addEventListener('click', () => {
  const numbers = Array.from(document.querySelectorAll('.number, .star span'))
    .map(el => el.innerText)
    .join(' ');
  navigator.clipboard.writeText(numbers).then(() => {
    alert('Numbers copied to clipboard');
  });
});

document.getElementById('shareButton').addEventListener('click', () => {
  const url = 'https://chrome.google.com/webstore/detail/euromillions-lucky-number-generator/<extension-id>';
  navigator.share({
    title: 'EuroMillions Lucky Number Generator',
    url: url
  }).catch(console.error);
});

document.getElementById('facebookButton').addEventListener('click', () => {
  const url = 'https://chrome.google.com/webstore/detail/euromillions-lucky-number-generator/<extension-id>';
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
});

document.getElementById('twitterButton').addEventListener('click', () => {
  const url = 'https://chrome.google.com/webstore/detail/euromillions-lucky-number-generator/<extension-id>';
  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Check out this EuroMillions Lucky Number Generator!`, '_blank');
});
