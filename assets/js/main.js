'use strict';
(function() {
	const $carousel = $('#carousel'),
	$previewContainer = $('#preview-container'),
	$carousel1 = $carousel.find('#carousel-item-1'),
	$carousel2 = $carousel.find('#carousel-item-2'),
	$previewContent = $previewContainer.find('.preview-content'),
	$overlay1 = $previewContent.find('.preview-overlay-1'),
	$overlay2 = $previewContent.find('.preview-overlay-2'),
	$overlay3 = $previewContent.find('.preview-overlay-3'),
	$overlay4 = $previewContent.find('.preview-overlay-4');

	setInterval(function(){
		$carousel1.toggleClass('transparent');
	}, 6000);


	//Event listeners
	$previewContent.on('mouseenter', function() {
		$(this).find('.overlay').toggleClass('transparent');
	});

	$previewContent.on('mouseleave', function() {
		$(this).find('.overlay').toggleClass('transparent');
	});
}());