/***********************************/
/**********check functions**********/
/***********************************/
function check_slot_owner(e) //check the slot owner
{
	//TODO: check whether this slot belongs to the user
	var user_id = getCookie('CURRENT_USER'); //in game/game_logic_client/check_functions.js

	var pos_x = e.target.getAttribute('x');
	var pos_y = e.target.getAttribute('y');

	var slot = getSlotByXY(pos_x, pos_y); //in slot.js

	if(slot.owner && parseInt(slot.owner) == parseInt(user_id))
	{
		return true;
	}

	return false;
}

function check_army_type(e) //check the army type of this slot
{
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