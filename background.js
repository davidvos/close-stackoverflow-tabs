chrome.browserAction.onClicked.addListener(function(tab) { 
    chrome.tabs.query({},function(tabs){     
        tabs.forEach(function(tab){
            url = tab.url
            if (url.startsWith('https://stackoverflow.com')) {
                chrome.tabs.remove(tab.id);
            }
        });
    });
});