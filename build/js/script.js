$(document).ready(function() {
 
	$("#message_slide").owlCarousel({

	    navigation : false, // Show next and prev buttons
	    slideSpeed : 300,
	    pagination : false,
	    paginationSpeed : 400,
	    singleItem:true,
	    autoPlay : 5000

	});
	$(".message_next").click(function(){
	    $("#message_slide").trigger('owl.next');
	});
	$(".message_prev").click(function(){
	    $("#message_slide").trigger('owl.prev');
	});
	$(".jsMessageView").click(function(){
		$("#messageViewBox .x_panel").show();
	});
	$(".jsMessageDetail").click(function(){
		$("#messageDetailBox .x_panel").show();
	});
	$(".crDreamView").click(function(){
		$("#crBox .x_panel").show();
	});
	$(".clDreamView").click(function(){
		$("#clBox .x_panel").show();
	});

});