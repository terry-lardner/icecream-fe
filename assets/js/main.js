'use strict';
(function() {
	var $carousel = $('#carousel');
	var $carousel1 = $carousel.find('#carousel-item-1');
	var $carousel2 = $carousel.find('#carousel-item-2');

	var $previewContainer = $('#preview-container');
	var $previewContent = $previewContainer.find('.preview-content');
	var $overlay1 = $previewContent.find('.preview-overlay-1');
	var $overlay2 = $previewContent.find('.preview-overlay-2');
	var $overlay3 = $previewContent.find('.preview-overlay-3');
	var $overlay4 = $previewContent.find('.preview-overlay-4');

	setInterval(function(){
		$carousel1.toggleClass('transparent');
	}, 5000);


	//Event listeners
	$previewContent.on('mouseenter', function() {
		$(this).find('.overlay').toggleClass('transparent');
	});

	$previewContent.on('mouseleave', function() {
		$(this).find('.overlay').toggleClass('transparent');
	});
}());