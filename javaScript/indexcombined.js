
// const monNumbers = [52,79,25,23,58,12,55,3,5,9,37,59,81,87,98,97,96,95,94,101,102,103,109,155]; //numbers of the pokemons I'll be using
 // var monNumbers = [];
 // for(let i = 0;i<801;i++){ monNumbers.push(i);}

var pokePic = document.getElementById("img"); //picture of Pokemon
const pokeName = document.getElementById("pokename"); //name of Pokemom

const back = document.getElementById("previousButton");
const next = document.getElementById("nextButton");




class Pokemon{  

	constructor(apiPoke){ //passes in the the pokemon info object from the API
		console.log(apiPoke);
		this.name = apiPoke.name; //name
		this.img = apiPoke.sprites.front_default;  //url for image of pokeman
		this.hp = apiPoke.stats[5].base_stat;  //hit power, whtever that is
		this.poketype = apiPoke.types[0].type.name //brings in the poketype
		this.attack = apiPoke.stats[4].base_stat;  //etc... with all the other attributes
		this.pokeid= apiPoke.id; 
		this.defense = apiPoke.stats[3].base_stat;
		this.specialAttack = apiPoke.stats[2].base_stat;
		this.specialDefense = apiPoke.stats[1].base_stat;
		this.speed = apiPoke.stats[0].base_stat;
		this.moves = [];
		for(let i = 0;i<5;i++){
			this.moves.push(apiPoke.moves[i].move.name)
		}
		for(let i = 0;i<5;i++){console.log(this.moves[i]);}
		this.rawAbilities= apiPoke.abilities; //stores abilities taken directly from API, has a bunch of unneeded data
		this.abilities = this.cleanAbilites(this.rawAbilities); //abilities in clean form
	}


	cleanAbilites(){
		var cleanedArray = []; //will hold the ability variable without all the extra junk data
		for(let i=0;i<this.rawAbilities.length;i++){ //loops through the abilities, they can have 2 or 3
			cleanedArray.push(this.rawAbilities[i].ability.name); //populates array with only the name of the ability
		}
		return cleanedArray; //returns only the ability names in an array
	}
}

class Trainer{ 
	constructor(pokes) {      //called upon loading the window. 
		this.pokes = pokes;     //the array of pokemons created in the window load event listener
		this.current = 0; //sets initial member of pokemon array to the zero element once load is called
	}
	all(){
		return this.pokes;  //returns an array of all pokemen in an instance of the Trainer object
	}
	name(nameMatch){ 
		for(let i=0;i<this.pokes.length;i++){   //we're not gonna use this method anyway but the homework told us to create it for some reason!?
			if(this.pokes[i].name==nameMatch){
				return this.pokes[i];
			}
		}
		console.log("specified pokemon does not belong to this trainer.")
	}
	loadPoke(){  //very important method! used every time a new pokemon is laoded to the screen
		pokeName.innerHTML = "NAME: "+this.pokes[this.current].name;  //sets the name in the html
		$("#poketype").html("TYPE: "+this.pokes[this.current].poketype);
		pokePic.style.backgroundImage = "url("+this.pokes[this.current].img+")";  //sets the new image in the html
		// pokePic.style.backgroundSize = "100% 100%"; //should be in CSS for greater effeciency, but will change later for time
		// pokePic.alt="Image of "+this.pokes.name;
		// console.log(this.pokes[this.current].img); 
		$("#pokeid").html("ID: "+this.pokes[this.current].pokeid);
		$("#hp").html("HP: "+this.pokes[this.current].hp);
		$("#attack").html("ATTACK: "+this.pokes[this.current].attack);
		$("#defense").html("DEFENSE: "+this.pokes[this.current].defense);
		this.createAbilities();

//Load the collapsable menu below me

		for(var i = 1; i<=5;i++){
			$("#move"+i).html(this.pokes[this.current].moves[i]);
		}

		$("#stat1").html("Speed: "+this.pokes[this.current].speed);
		$("#stat2").html("Special Defense: "+this.pokes[this.current].specialDefense);
		$("#stat3").html("Special Attack: "+this.pokes[this.current].specialAttack);
		$("#stat4").html("Defense: "+this.pokes[this.current].defense);
		$("#stat5").html("Attack: "+this.pokes[this.current].attack);
		$("#stat6").html("(H)ewlett (P)ackard: "+this.pokes[this.current].hp);
	}
	createAbilities(){
		$("#abilities").html("");
		$("#abilities").append("<div>ABILITIES:</div>");
		for (let i=0;i<this.pokes[this.current].abilities.length;i++){
			$("#abilities").append("<div>"+this.pokes[this.current].abilities[i]+"</div>");
		}
	}

	nextPoke(){
		if(this.current==this.pokes.length-1){ //checks to see if its at the last pokemon in the array
			this.current=0; //if it is, it cycles back to zero
		}
		else{
			this.current++; //otherwise goes to the next one
		}
		this.loadPoke();
	}
	prevPoke(){
		if(this.current==0){ //checks to see its at the first pokemon, and cycles to the last member of the array if it is of the previous if it isn't
			this.current = this.pokes.length-1;
		}
		else{
			this.current--;
		}
		this.loadPoke();
	}
}

function initialLoad(monNumbers){
	var listOfPokemons = [];
	for(let i = 0;i<monNumbers.length;i++){ //loops through all pokemon numbers in the array
		$.ajax({url:"https://fizal.me/pokeapi/api/"+monNumbers[i]+".json", //calls the API
			success: function(response){ //callback for API object data
				let pokeObj = new Pokemon(response); //creates an instance of the Pokemon object
				listOfPokemons.push(pokeObj); //pushes the new instance to the array of Pokemon
			}
		})
	}
	return listOfPokemons;
}


function apiLaodCheck(trainerObj, monObj){
	if (trainerObj.pokes[0]==undefined){
		console.log("API still loading");
		window.setTimeout(function(){ //had to set a timeout as a safegaurd because the load function was executing before the listOfPoke array could be populated (maybe with a slower processor and faster internet connection that wouldn't be the case?) 
			trainerObj = new Trainer(monObj);
			console.log("i'm in the IF")
			trainerObj.loadPoke();
		}, 500);
	}
	else{
		trainerObj.loadPoke();
			console.log("i'm in the ELSE")

	}
	return trainerObj;
}
const sethNumbers = [25,79,52]; //the number of the indivual pokemon
const drewNumbers = [11,110,114];
const rossNumbers = [150, 68, 262];

var sethList = initialLoad(sethNumbers);
var nurseSeths = new Trainer(sethList);
nurseSeths = apiLaodCheck(nurseSeths, sethList);

var drewList = initialLoad(drewNumbers);
var doctorDrew = new Trainer(drewList);
doctorDrew = apiLaodCheck(doctorDrew, drewList);

var rossList = initialLoad(rossNumbers);
var trainerRoss = new Trainer(rossList);
trainerRoss = apiLaodCheck(trainerRoss, rossList);

trainerArray = [nurseSeths,doctorDrew,trainerRoss];
trainerCount = 2;
whoIsSelected();

$("#sethPoke").click(function(){
	trainerCount=0;
	trainerArray[trainerCount].loadPoke();
	whoIsSelected();
})

$("#drewPoke").click(function(){
	trainerCount=1;
	trainerArray[trainerCount].loadPoke();
	whoIsSelected();
})

$("#rossPoke").click(function(){
	trainerCount=2;
	trainerArray[trainerCount].loadPoke();
	whoIsSelected();
})

function whoIsSelected(){
	if(trainerCount==0){
		console.log("Change the gosh dang border")
		$("#sethPoke").css({"border": "4px solid #ffcb05", "box-shadow": "2px 2px 1px #395fa9"});
		$("#drewPoke").css({"border":"2px solid white","box-shadow":""});
		$("#rossPoke").css({"border":"2px solid black","box-shadow":""});
	} 
	else if(trainerCount==1){
		console.log("Turn the border off")
		$("#drewPoke").css({"border": "4px solid #ffcb05", "box-shadow": "2px 2px 1px #395fa9"});
		$("#sethPoke").css({"border":"2px solid white","box-shadow":""});
		$("#rossPoke").css({"border":"2px solid black","box-shadow":""});
	}
	else {
		$("#rossPoke").css({"border": "4px solid #ffcb05", "box-shadow": "2px 2px 1px #395fa9"});
		$("#sethPoke").css({"border":"2px solid white","box-shadow":""});
		$("#drewPoke").css({"border":"2px solid white","box-shadow":""});		
	}
}



next.addEventListener("click",function(){  //calls Trainer object's method to find the next pokemon
trainerArray[trainerCount].nextPoke();
});


back.addEventListener("click",function(){  //calls Trainer object's method to find the previous pokemon
trainerArray[trainerCount].prevPoke();
});

//Drew's collapsable jawn

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
