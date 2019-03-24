
(function(){
	var $$ = {};
	
	$$.data = {
		ls_key:"debug"
	};
	
	// init-run
	$$.__construct = function(){

        // urlを取得する。
		chrome.tabs.getSelected(null, function(tab){
			var list = document.getElementById("list");
			if(list != null){
				list.value = tab.url;
            }
		});
        var current = location.href;
	};
	
	$$.save = function(){
		var list = document.getElementById("list");
		if(list != null){
			localStorage.setItem($$.data.ls_key , escape(list.value) );
		};
	};
	
	$$.view = function(){
		var list = document.getElementById("list");
		if(list === null){return}
		var lists = list.value.split("\n");
		document.URL = lists[0];
	};
	
	// run
	window.addEventListener("load",$$.__construct);
})();
// var url = location.href ; 現在のブラウザのURLを取得する
// window.onload = function() 読み込まれた時