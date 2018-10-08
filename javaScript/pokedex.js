var img = document.getElementById('img')
var hp = document.getElementById('hp')
var id = document.getElementById('id')
var attack = document.getElementById('attack')
var defense = document.getElementById('defense')
var abilities = document.getElementById('abilities')
var pokename = document.getElementById('pokename')
var metapodButton = document.getElementById('metapodButton')
var weezingButton = document.getElementById('weezingButton')
var tangelaButton = document.getElementById('tangelaButton')
var move1 = document.getElementById('move1')
var move2 = document.getElementById('move2')
var move3 = document.getElementById('move3')
var move4 = document.getElementById('move4')
var move5 = document.getElementById('move5')
var stat1 = document.getElementById('stat1')
var stat2 = document.getElementById('stat2')
var stat3 = document.getElementById('stat3')
var stat4 = document.getElementById('stat4')
var stat5 = document.getElementById('stat5')
var stat6 = document.getElementById('stat6')
var type = document.getElementById('type')


///////////Pokemon 1///////

function initMetapod(){
		$.ajax({url:"http://fizal.me/pokeapi/api/v2/id/11.json",
	success: function(response){
		metapod(response)
		console.log(response)
	}
	})
	

}

function metapod(x){
	img.style.backgroundImage = "url("+ x.sprites.front_default + ")"
	img.style.backgroundSize = "100% 100%"
	pokename.innerHTML = "NAME:" + " " + x.name
	type.innerHTML = "TYPE:" + " " + x.types[0].type.name
	hp.innerHTML = "HP:" + " " + x.stats[5].base_stat
	defense.innerHTML = "DEFENSE:" + " " + x.stats[3].base_stat
	attack.innerHTML = "ATTACK:" + " " + x.stats[4].base_stat
	id.innerHTML = "ID:" + " " + x.id
	abilities.innerHTML = "ABILITIES:" + " " + x.abilities[0].ability.name
	move1.innerHTML = x.moves[0].move.name
	move2.innerHTML = x.moves[1].move.name
	move3.innerHTML = x.moves[2].move.name
	move4.innerHTML = x.moves[3].move.name
	move5.innerHTML = x.moves[4].move.name
	stat1.innerHTML = x.stats[0].stat.name + ":" + " " + x.stats[0].base_stat
	stat2.innerHTML = x.stats[1].stat.name + ":" + " " + x.stats[1].base_stat
	stat3.innerHTML = x.stats[2].stat.name + ":" + " " + x.stats[2].base_stat
	stat4.innerHTML = x.stats[3].stat.name + ":" + " " + x.stats[3].base_stat
	stat5.innerHTML = x.stats[4].stat.name + ":" + " " + x.stats[4].base_stat
	stat6.innerHTML = x.stats[5].stat.name + ":" + " " + x.stats[5].base_stat

}

initMetapod();
metapodButton.addEventListener("click", function(){initMetapod()}, false);


///////////Pokemon 2///////



function initWeezing(){
		$.ajax({url:"http://fizal.me/pokeapi/api/v2/id/110.json",
	success: function(response){
		weezing(response)
		console.log(response)
	}
	})
	

}

function weezing(x){
	img.style.backgroundImage = "url("+ x.sprites.front_default + ")"
	img.style.backgroundSize = "100% 100%"
	pokename.innerHTML = "NAME:" + " " + x.name
	type.innerHTML = "TYPE:" + " " + x.types[0].type.name
	hp.innerHTML = "HP:" + " " +x.stats[5].base_stat
	defense.innerHTML = "DEFENCE:" + " " + x.stats[3].base_stat
	attack.innerHTML = "ATTACK:" + " " + x.stats[4].base_stat
	id.innerHTML = "ID:" + " " + x.id
	abilities.innerHTML = "ABILITIES:" + " " + x.abilities[0].ability.name
	move1.innerHTML = x.moves[0].move.name
	move2.innerHTML = x.moves[1].move.name
	move3.innerHTML = x.moves[2].move.name
	move4.innerHTML = x.moves[3].move.name
	move5.innerHTML = x.moves[4].move.name
	stat1.innerHTML = x.stats[0].stat.name + ":" + " " + x.stats[0].base_stat
	stat2.innerHTML = x.stats[1].stat.name + ":" + " " + x.stats[1].base_stat
	stat3.innerHTML = x.stats[2].stat.name + ":" + " " + x.stats[2].base_stat
	stat4.innerHTML = x.stats[3].stat.name + ":" + " " + x.stats[3].base_stat
	stat5.innerHTML = x.stats[4].stat.name + ":" + " " + x.stats[4].base_stat
	stat6.innerHTML = x.stats[5].stat.name + ":" + " " + x.stats[5].base_stat
}
weezingButton.addEventListener("click", function(){initWeezing()}, false);



///////////Pokemon 3///////

function initTangela(){
		$.ajax({url:"http://fizal.me/pokeapi/api/v2/id/114.json",
	success: function(response){
		tangela(response)
		console.log(response)
	}
	})
	

}

function tangela(x){
	img.style.backgroundImage = "url("+ x.sprites.front_default + ")"
	img.style.backgroundSize = "100% 100%"
	pokename.innerHTML = "NAME:" + " " + x.name
	type.innerHTML = "TYPE:" + " " + x.types[0].type.name
	hp.innerHTML = "HP:" + " " + x.stats[5].base_stat
	defense.innerHTML = "DEFENCE:" + " " + x.stats[3].base_stat
	attack.innerHTML = "ATTACK:" + " " + x.stats[4].base_stat
	id.innerHTML = "ID:" + " " + x.id
	abilities.innerHTML = "ABILITIES:" + " " + x.abilities[0].ability.name
	move1.innerHTML = x.moves[0].move.name
	move2.innerHTML = x.moves[1].move.name
	move3.innerHTML = x.moves[2].move.name
	move4.innerHTML = x.moves[3].move.name
	move5.innerHTML = x.moves[4].move.name
	stat1.innerHTML = x.stats[0].stat.name + ":" + " " + x.stats[0].base_stat
	stat2.innerHTML = x.stats[1].stat.name + ":" + " " + x.stats[1].base_stat
	stat3.innerHTML = x.stats[2].stat.name + ":" + " " + x.stats[2].base_stat
	stat4.innerHTML = x.stats[3].stat.name + ":" + " " + x.stats[3].base_stat
	stat5.innerHTML = x.stats[4].stat.name + ":" + " " + x.stats[4].base_stat
	stat6.innerHTML = x.stats[5].stat.name + ":" + " " + x.stats[5].base_stat
}
tangelaButton.addEventListener("click", function(){initTangela()}, false);




/////collapsible menu

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
