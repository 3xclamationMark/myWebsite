//Getting the time
setInterval(function () {
	var time = new Date();
	var minutes = time.getMinutes();
	var hours = time.getHours();
	var seconds = time.getSeconds();
	if (seconds<10 && minutes<10){
		document.getElementById('digital').innerHTML=hours + ':' + '0' + minutes + ':' + '0' + seconds;
	}
	else if(seconds<10){
		document.getElementById('digital').innerHTML=hours + ':' + minutes+ ':' + '0' + seconds;
	} else if (minutes<10){
		document.getElementById('digital').innerHTML=hours + ':' + '0' + minutes + ':' + seconds;
	} else{
		document.getElementById('digital').innerHTML=hours + ':' + minutes+ ':' + seconds;
	}

}, 1000);
