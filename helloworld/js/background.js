
//与content-script通信
function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}
//右键菜单
chrome.contextMenus.create({
    title: "一键转发",
    onclick: function(){
		//点击时联系content-script，发生点击事件了
		sendMessageToContentScript({cmd:'test', value:'你好，我是background！'}, function(response)
		{
			console.log('来自content的回复：'+response);
		});
	}
});