

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var tabUrl = tabs[0].url;

    var iframe = document.createElement('iframe');
    iframe.src = 'http://www.linklove.us/chrome/streamify?url=' + encodeURIComponent(tabUrl);
    document.body.appendChild(iframe);
  });
});

