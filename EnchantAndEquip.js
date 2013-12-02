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
	this.eHealth = 0; //added to health
	this.eStamina = 0; //added to stamina
	this.eDamageMult = 0; //this is added to the regular damageMult
	this.headSlot = null;
	this.chestSlot = null;
	this.weapon = null;
}

player.prototype.getEquipValues=function(){
	this.eHealth = 0;
	this.eStamina = 0;
	this.eDamageMult = 0;
	if (this.headSlot != null){
		this[this.headSlot.address] += this.headSlot.value;
	}
	if (this.chestSlot != null){
		this[this.chestSlot.address] += this.headSlot.value;
	}
	//etc...
}

player.prototype.equip = function(i){
	this[i.slot] = i;
}

var p = new player();

var hood = new Item();

function equipHood(){
	p.equip(hood);
	p.getEquipValues();
}
