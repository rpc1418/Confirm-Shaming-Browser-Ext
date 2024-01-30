browser.runtime.onInstalled.addListener(function () {
  console.log('Extension Installed');
});

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    browser.tabs.sendMessage(tabId, { action: 'pageLoaded' });
  }
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'sentimentAnalysisResult') {
    const sentimentResult = request.result;

    // Display the result in the pop-up
    browser.storage.local.set({ sentimentResult: sentimentResult });
  }

  return true;
});
