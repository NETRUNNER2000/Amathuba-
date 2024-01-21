
// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//       // You can perform checks or modifications here
//       console.log("Intercepted request:", details.url);
//       return {cancel: false}; // Return {cancel: true} to block the request
//     },
//     {urls: ["<all_urls>"]},
//     ["blocking"]
//   );
  
// background.js


console.log("Background is running")