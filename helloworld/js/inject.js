/**
该js可以访问到原始页面DOM与js变量
*/

function action(){
	console.log(window);
$("a[action=draft_move]").click();
setTimeout(function(){
			
		$.each(window.$(".l-dialog-btn"), function(i, val) {  
		   if(val.textContent=="否"){
			   setTimeout(function(){
				 console.log(val.textContent);$(val).trigger('click');
			   },1000);

			   }
		}); 
	   },1000);
}
action();