
(window.onload = function() {

    var currentTab;

    chrome.tabs.query( {active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        console.log(currentTab.url);
    });

	chrome.tabs.query( {currentWindow: true}, function (tabs) {
        console.log(tabs);
        Array.prototype.getLastVal = function (){ return this[this.length -1];}
        var currentTab = tabs.getLastVal();
        console.log(currentTab.url);

        // アクティブなウィンドウのタブのURLを全て取得
        for (i = 0; i < tabs.length -1 ; i++) {
            var openedTab = tabs[i];
            console.log(openedTab.url);

            // 開いているタブと、今開いたタブのURLをみて、同じだったらポップアップを出す
            if ( currentTab.url === openedTab.url) {
                chrome.tabs.remove(currentTab.id);
            }
        }
        
	});
})();