// content.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'pageLoaded') {
    const textContent = document.body.innerText;
    const text=textContent.split(/[\n/ !?]+/);
    console.log(text);
    // Perform sentiment analysis using the Flask API
    performSentimentAnalysis(textContent, function(sentimentResult) {
      // Send the result to the background script
      chrome.runtime.sendMessage({ action: 'sentimentAnalysisResult', result: sentimentResult });
    });
  }
  return true;
});

function performSentimentAnalysis(text, callback) {
  // Call the Flask API
  fetch('http://localhost:5000/analyze_sentiment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: text }),
  })
    .then(response => response.json())
    .then(data => {
      const sentimentResult = {
        score: data.sentiment_score,
        isConfirmShaming: data.is_confirm_shaming
      };

      // Execute the callback with the sentiment result
      callback(sentimentResult);
    })
    .catch(error => console.error('Error:', error));
}
