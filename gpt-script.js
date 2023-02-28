console.log("gpt-script.js loaded");

chrome.runtime.onMessage.addListener(function (
    emailContent,
    sender,
    sendResponse
    ) {
    console.log("gpt-script.js received message");
    console.log(emailContent);
    
    });