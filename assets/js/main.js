'use strict';
(function() {
	const $carousel = $('#carousel');
	const $carousel1 = $carousel.find('#carousel-item-1');
	const $carousel2 = $carousel.find('#carousel-item-2');

	const $previewContainer = $('#preview-container');
	const $previewContent = $previewContainer.find('.preview-content');
	const $overlay1 = $previewContent.find('.preview-overlay-1');
	const $overlay2 = $previewContent.find('.preview-overlay-2');
	const $overlay3 = $previewContent.find('.preview-overlay-3');
	const $overlay4 = $previewContent.find('.preview-overlay-4');

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