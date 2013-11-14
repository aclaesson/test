function removeTag(){
	alert("inside removeTag method");
	$('#wrapper').remove();
	addTag();
	return false;
}

function addTag(){
	alert("inside addImage method");
	$("<p>hello</p>").appendTo("#outsideWrapper");
	$("<img src='image/spritos2.jpg' >").appendTo("#outsideWrapper");
	return false;
	
}