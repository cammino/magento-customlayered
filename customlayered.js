var $layered;

jQuery(document).ready(function($) {
	$layered = jQuery(".customlayered");
	
	jQuery(".customlayered .show-event").on('click', function(event) {
		event.preventDefault();
		showCustomLayered();
	});

	jQuery(".customlayered .close-event").on('click', function(event) {
		event.preventDefault();
		closeCustomLayered();
	});

	jQuery(".customlayered .show-close-event").on('click', function(event) {
		event.preventDefault();
		if($layered.hasClass('active')){
			closeCustomLayered();
		}else{
			showCustomLayered();
		}
	});
});

function showCustomLayered(){
	if(!$layered.hasClass('active')){
		$layered.addClass('active');
	}
}

function closeCustomLayered(){
	if($layered.hasClass('active')){
		$layered.removeClass('active');
	}
}