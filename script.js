$("#nav").click(function(){
	if($('#anchor1').is(':visible')){
		$("#nav").html("Navigation &#9651;");
		$('#anchor1').hide();
		$('#anchor2').hide();
		$('#anchor3').hide();
		$('#anchor4').hide();
		$('#anchor5').hide();
	}
	else{
		$("#nav").html("Navigation &#9661;");
		$('#anchor1').show();
		$('#anchor2').show();
		$('#anchor3').show();
		$('#anchor4').show();
		$('#anchor5').show();
	}
});
