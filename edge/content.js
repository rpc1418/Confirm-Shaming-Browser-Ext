browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'pageLoaded') {
    const textContent = document.body.innerText;
    const text = textContent.split(/[\n/ .!?]+/);

    // Array to store each element along with its sentiment score
    const elementsWithSentiment = [];

    // Perform sentiment analysis for each element of the split text
    text.forEach(element => {
      performSentimentAnalysis(element, function(sentimentResult) {
        // Push each element with its sentiment score to the array
        elementsWithSentiment.push({
          text: element,
          sentiment_score: sentimentResult.score,
        });
        // Calculate average sentiment score and send it to the background script
        const averageSentimentScore = calculateAverageSentiment(elementsWithSentiment);
        browser.runtime.sendMessage({ action: 'sentimentAnalysisResult', result: {
          isConfirmShaming: sentimentResult.isConfirmShaming,
          text: elementsWithSentiment,
          averageSentimentScore: averageSentimentScore,
        }});
        if(sentimentResult.averageSentimentScore<0.5) alert("This page might have confirm shaming concern! Please refer our extension for further information.");
      });
    });
    
  }
  
  return true;
});

function performSentimentAnalysis(text, callback) {
  // Call the Flask API
  fetch('http://localhost:7007/analyze_sentiment', {
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

function calculateAverageSentiment(elements) {
  const nonZeroSentimentElements = elements.filter(element => element.sentiment_score !== 0);

  if (nonZeroSentimentElements.length === 0) {
    return 0;  // Avoid division by zero
  }

  const sumSentimentScores = nonZeroSentimentElements.reduce((sum, element) => sum + element.sentiment_score, 0);
  const averageSentimentScore = sumSentimentScores / nonZeroSentimentElements.length;

  return averageSentimentScore;
}
