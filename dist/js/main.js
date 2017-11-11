jQuery(document).ready(function($) {
	slideRight();

	function slideRight(){
		$('.header_topline-button').click(function() {
			$('.right-sidebar').animate({
				width: "240px"},
				100, function() {});
		    $('.content-wrap').show();
		});
		$('.right_sidebar-button').click(function() {
			$('.right-sidebar').animate({
				width: "0px"},
				100, function() {});
			$('.content-wrap').hide();
		});
		$('.content-wrap').click(function() {
			$('.right-sidebar').animate({
				width: "0px"},
				100, function() {});
			$('.content-wrap').hide();
		});
	}
});