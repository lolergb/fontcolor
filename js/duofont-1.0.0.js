var colorFont = {
    VERSION     : '0.4',
    COPYRIGHT   : 'Copyright © 2012 José Román.',
    DEVELOPERS  : 'Jósé María Román Gálvez <lole@bynewroman.com>',
    LICENSE     : 'Released under the terms of the GNU General Public License v2.',
    WEB         : 'www.bynewroman.com'
};

var collectorText = function() {
	$('.duofont').each(function() {
			$('.duofont').attr('title', $(this).text());
	});
}

$(document).ready(function() {
	collectorText();
});