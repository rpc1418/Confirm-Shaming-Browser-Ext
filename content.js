chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'pageLoaded') {
    const textContent = document.body.innerText;

    const sentenceCount = textContent.length;
    
    chrome.storage.local.set({ sentenceCount: sentenceCount });
  }


  if (request.action === 'getSentenceCount') {
    chrome.storage.local.get(['sentenceCount'], function (result) {
      sendResponse({ sentenceCount: result.sentenceCount || 0 });
    });
  }

  return true;
});

function countSentences(text) {
  // Simple sentence counting logic (you may want to improve this)
  const sentences = text.split(/[.!?]+/);
  console.log(sentences);
  return text.length ; // Exclude empty strings after splitting
}
