console.log("background.js loaded");
chrome.runtime.onMessage.addListener(function (
  emailContent,
  sender,
  sendResponse
) {
  // console.log("background.js received message");
  console.log(emailContent);
  (async function () {
    const tabs = await chrome.tabs.query({url:'https://chat.openai.com/*'});
    const tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, emailContent);
  })();
  // sendResponse({ message: "background.js received message" });
});
