// background.js

chrome.runtime.onInstalled.addListener(function () {
  console.log('Extension Installed');
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { action: 'pageLoaded' });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'sentimentAnalysisResult') {
    const sentimentResult = request.result;

    // Display the result in the pop-up
    chrome.storage.local.set({ sentimentResult: sentimentResult });
  }

  return true;
});
