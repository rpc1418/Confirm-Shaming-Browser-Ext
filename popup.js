document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'getSentenceCount' }, function (response) {
      document.getElementById('sentenceCount').innerText = `Number of sentences: ${response.sentenceCount}`;
    });
  });
});
