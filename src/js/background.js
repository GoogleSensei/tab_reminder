
window.onload = function() {
	chrome.tabs.query( {currentWindow: true}, function (tabs) {
        // var tab = tabs[0];

        // アクティブなウィンドウのタブのURLを全て取得
        for (i = 0; i <= tabs.length ; i++) {
            var tab = tabs[i];
            console.log(tab.url);
        }
        
        // 開いているタブと、今開いたタブのURLをみて、同じだったらポップアップを出す
	});
}