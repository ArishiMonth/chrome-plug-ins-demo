function draft(){
	 console.log(window);
	 injectCustomJs();
	  //window.$("a[action=draft_move]").trigger('click');
	/* window.$("a[action=draft_move]").click();
	 alert("sss");
		setTimeout(function(){
			
		window.$.each(window.$(".l-dialog-btn"), function(i, val) {  
       console.log(12)
		   if(val.textContent=="否"){
			   setTimeout(function(){
				 console.log(val.textContent);$(val).trigger('click');
			   },1000);

			   }
		}); 
	   },1000);*/
}
//注入inject.js，因为content-script无法调用到原始页面js变量，即原始页面注册的jquery事件及相关方法都调用不到，只能通过注入inject.js来实现
function injectCustomJs(jsPath)
{
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function()
    {
		console.log(this);
		
		
        // 放在页面不好看，执行完后移除掉
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
}
//接收到background的信息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
    if(request.cmd == 'test') {
		//执行一键转发
		draft();
	}
    sendResponse('我收到了你的消息！');
});