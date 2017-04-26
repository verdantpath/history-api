$(function () {
	//LOAD NEW CONTENT INTO PAGE
	function loadContent(url) {
		$('#content').load(url + ' #container').hide().fadeIn('slow');
	}

	


});