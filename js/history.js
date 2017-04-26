$(function () {
	//LOAD NEW CONTENT INTO PAGE
	function loadContent(url) {
		$('#content').load(url + ' #container').hide().fadeIn('slow');
	}

	//CLICK FUNCTION TO HANDLE LINKS AND UPDATE HISTORY
	$('nav a').on('click', function(e) {
		e.preventDefault();
		var href = this.href;
		var $this = $(this);
		$('a').removeClass('current');
		$this.addClass('current');
		loadContent(href);
		history.pushState('', $this.text, href);
	});

	//FUNCTION TO HANDLE THE BROWSERS BACK AND FORWARD BUTTONS
	window.onpopstate = function() {
		var path = location.pathname;
		loadContent(path);
		var page = path.substring(location.pathname.lastIndexOf('/') + 1);
		$('a').removeClass('current');
		$('[href="' + page + '"]').addClass('current');
	};


});