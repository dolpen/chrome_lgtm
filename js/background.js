$(function () {
    chrome.browserAction.onClicked.addListener(function (tab) {
        $.getJSON("http://www.lgtm.in/g", function (e) {
            var r = "[![LGTM](" + e.trackableImageUrl + ")](" + e.dataUrl + ")";
            chrome.tabs.sendMessage(tab.id, {
                    command: "lgtm_markdown",
                    body: r
                },
                function (msg) {
                    console.log(msg);
                });
        })();
    });
});



