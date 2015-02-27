$(function () {
    chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
        if (!msg.command) return;
        if (msg.command == 'lgtm_markdown') {
            var $t = $("textarea[name='comment[body]'],textarea[name='content']");
            var n = $t.val();
            $t.val(
                    (n + "\n\n" + msg.body).trim() + "\n"
            );
        }
    });
});

