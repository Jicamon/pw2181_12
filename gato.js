var i =0;

function cuenta(){
	i = i + 1;
	postMessage(i);
	setTimeout("cuenta()",1000);
}

cuenta();