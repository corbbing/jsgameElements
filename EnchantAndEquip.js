//An Item that gives the player +4 stamina

function item(){
	this.address = "eStamina";
	this.value = 4;
	this.slot = "headSlot";
	this.name = "Hood"
}

function player(){
	this.stamina = 12;
	this.health = 100;
	this.damageLow = 1;
	this.damageHigh = 3;
	this.damageMult = 1;
	this.eHealth = 0;
	this.eStamina = 0;
	this.eDamageMult = 0;
	this.headSlot = null;
	this.chestSlot = null;
}

player.prototype.getEquipValues=function(){
	this.eHealth = 0;
	this.eStamina = 0;
	this.eDamageMult = 0;
	if (this.headSlot != null){
		this[this.headSlot.address] += this.headSlot.value;
	}
}

player.prototype.equip = function(i){
	this[i.slot] = i;
}

var p = new player();
