// popup.js

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.local.get(['sentimentResult'], function (result) {
      const sentimentResult = result.sentimentResult;

      // Display the result in the pop-up
      const popupText = sentimentResult.isConfirmShaming
        ? 'Potential confirm shaming detected. Display warning to the user.'
        : 'Confirmation dialogue seems fine.';

      document.getElementById('popupText').innerText = popupText;
    });
  });
});
