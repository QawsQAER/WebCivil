/***********************************/
/**********check functions**********/
/***********************************/
function check_slot_owner(e) //check the slot owner
{
	//TODO: check whether this slot belongs to the user
	return true;
}

function getCookie(cname) //get a specific cooike variable
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) 
  	{
  		var c = ca[i].trim();
  		if (c.indexOf(name)==0) return c.substring(name.length, c.length);
  	}
	return "";
}
/***********************************/