//your JS code here. If required.
let time=document.getElementById('timer');
let currdate=new Date();

setInterval(
	function(){
		currdate=new Date();
		time.innerHTML=currdate.toLocaleString();
	},1000
)
