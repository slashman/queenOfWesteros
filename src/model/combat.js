/* jshint node: true */
"use strict";

const HOUSES = require('./houses');

const UNIT_TYPES = require('./unitTypes');

module.exports = {
	inject: function(model, rand, playerHouse){
		this.model = model;
		this.rand = rand;
		this.playerHouse = playerHouse;
	},
	attack: function(a, actions){
		const destination = this.model.getKnownLocationInfo().find((l)=>l.id === a.to);
		const attackers = a.units.map(u=>({q: u.q, type: UNIT_TYPES[u.type]}));
		let deadAttackers = 0;
		let deadDefenders = 0;
		// 5 rounds of attack
		let outcome = 'draw';
		for (let i = 0; i < 3; i++){
			//TODO: Aerial support
			// Attack
			let combinedAttack = attackers.reduce((s,u)=>s+(u.q*u.type.attack), 0);
			let combinedDefense = destination.units.reduce((s,u)=>s+(u.q*u.type.defense), 0);
			combinedDefense *= 2; // Defending bonus TODO: Use stronghold stat
			let attackRoll = this.rand.range(combinedAttack/2, combinedAttack);
			let defenseRoll = this.rand.range(combinedDefense/2, combinedDefense);
			let damage = attackRoll - defenseRoll;
			if (damage > 0){
				deadDefenders += this.damage(destination.units, damage);
				if (destination.units.reduce((s,u)=>s+u.q,0) < 100){
					outcome = 'win';
					break;
				}
			}
			//TODO: Residual damage to attackers
			//Defense
			combinedAttack = destination.units.reduce((s,u)=>s+(u.q*u.type.attack), 0);
			combinedAttack *= 1.5; // Defending bonus TODO: Use stronghold stat
			combinedDefense = attackers.reduce((s,u)=>s+(u.q*u.type.defense), 0);
			attackRoll = this.rand.range(combinedAttack/2, combinedAttack);
			defenseRoll = this.rand.range(combinedDefense/2, combinedDefense);
			damage = attackRoll - defenseRoll;
			if (damage > 0){
				deadAttackers += this.damage(attackers, damage);
				if (attackers.reduce((s,u)=>s+u.q,0) < 100){
					outcome = 'lose';
					break;
				}
			}
		}
		if (outcome === 'draw'){
			if (a.playerDomain === this.playerHouse.id){
				actions.push("The battle with the "+destination.house.name +" at "+destination.name+" wages on, we lost about "+deadAttackers+" soldiers, and killed "+deadDefenders+" defenders");
			} else if (destination.domain.id === this.playerHouse.id){
				actions.push("The "+HOUSES[a.playerDomain].name+" are laying siege to our garrison at "+destination.name+". We lost about "+deadDefenders+" defenders, and killed "+deadAttackers+" attackers.");
			} else {
				actions.push("The "+HOUSES[a.playerDomain].name+" are laying siege to the "+destination.house.name +" at "+destination.name);
			}
		} else if (outcome === 'win') {
			if (a.playerDomain === this.playerHouse.id){
				actions.push("We have conquered "+destination.name+" from the "+destination.house.name+", we lost about "+deadAttackers+" soldiers, and killed "+deadDefenders+" defenders");
			} else if (destination.domain.id === this.playerHouse.id){
				actions.push("The "+HOUSES[a.playerDomain].name+" defeated our garrison at "+destination.name+ " and occupied it. We lost about "+deadDefenders+" defenders, and killed "+deadAttackers+" attackers.");
			} else {
				actions.push("The "+HOUSES[a.playerDomain].name+" have conquered "+destination.name+ " from the "+destination.house.name);
			}
		} else if (outcome === 'lose') {
			if (a.playerDomain === this.playerHouse.id){
				actions.push("We have been defeated at "+destination.name+" by the "+destination.house.name+", we lost "+deadAttackers+" soldiers, and killed "+deadDefenders+" defenders");
			} else if (destination.domain.id === this.playerHouse.id){
				actions.push("The "+HOUSES[a.playerDomain].name+" attacked our garrison at "+destination.name+", but were soundly defeated. We lost about "+deadDefenders+" defenders, and killed "+deadAttackers+" attackers.");
			} else {
				actions.push("The "+HOUSES[a.playerDomain].name+" have been defeated by the "+destination.house.name +" at "+destination.name);
			}
		}
		return outcome;

	},
	damage: function(units, damage){
		debug("Units", units);
		debug("Damaging for", damage);
		const combinedDefense = units.reduce((s,u)=>s+(u.q*u.type.defense), 0);
		debug("combinedDefense", combinedDefense);
		const damagePercentage = damage / combinedDefense;
		debug("Damaging for", damagePercentage);
		let dead = 0;
		if (damagePercentage < 1){
			units.forEach(u=>{
				const deadUnits = Math.floor(u.q * damagePercentage);
				dead += deadUnits;
				u.q = u.q - deadUnits;
			});
		} else {
			dead = units.reduce((s,u)=>s+u.q,0);
			units.length = 0;
		}
		debug("Units", units);
		return dead;
	}
};

function debug(message, obj){
	return;
	console.log(message, obj);
}