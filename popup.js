// popup.js

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.local.get(['sentimentResult'], function (result) {
      const sentimentResult = result.sentimentResult;
      // Display the overall sentiment result in the pop-up
      const popupText = sentimentResult.averageSentimentScore >= 0.5
        ? 'Confirmation dialogue seems fine. '+sentimentResult.averageSentimentScore
        : 'Potential confirm shaming detected. Display warning to the user. '+sentimentResult.averageSentimentScore;

      document.getElementById('popupText').innerText = popupText;

      // Display elements with sentiment score less than 0.5 in a list
      const wordsContainer = document.getElementById('words');
      displayNegativeSentimentElements(wordsContainer, sentimentResult.text);
    });
  });
});

function displayNegativeSentimentElements(container, text) {
  container.innerHTML = '';  // Clear previous content

  text.forEach(element => {
    // Check if the sentiment score is less than 0.5
    if (element.sentiment_score != 0) {
      // Create a list item and append it to the container
      const listItem = document.createElement('li');
      listItem.textContent = element.text+": "+element.sentiment_score;
      container.appendChild(listItem);
    }
  });
}
