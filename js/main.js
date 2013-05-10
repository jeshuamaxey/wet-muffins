$(document).ready(function() {
	//code here
	$('.vid-controls button').click(vidAction);
});

function vidAction() {
	console.log($(this));
	switch($(this).attr('action')) {
		case 'play':
			console.log('play');
			document.getElementById('promo-vid').play()
			break;
		case 'pause':
			console.log('pause');
			document.getElementById('promo-vid').pause()
			break;
		case 'restart':
			console.log('restart');
			document.getElementById('promo-vid').currentTime = 0;
			break;
	}
}