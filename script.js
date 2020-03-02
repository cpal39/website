$(document).ready(function(){
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
	$("div[id^='anchor']").each(function(){
		$(this).click(function(){
			// let id=$(this).attr('href');
			let id="#card"+$(this).attr("id").charAt(6);
			$("#rightCol").animate({
				scrollTop: $('#rightCol').scrollTop() + $(id).offset().top-30
			}, 'fast');
			// $('#rightCol').scrollTop($('#rightCol').scrollTop() + $(id).offset().top-30);
			// $(id)[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
		});
	});
	$("a[href^='#card']").each(function(){
		$(this).click(function(e){
			e.preventDefault();
			let id=$(this).attr('href');
			$("#rightCol").animate({
				scrollTop: $('#rightCol').scrollTop() + $(id).offset().top-30
			}, 'fast');
		});
	});
});
