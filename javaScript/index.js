// varibales for each from html //

var poke_name = document.getElementById('name')
var poke_img = document.getElementById('img')
var stat_hp = document.getElementById('hp')
var stat_att = document.getElementById('at')
var stat_def = document.getElementById('def')
var next = document.getElementById('next')
var back = document.getElementById('back')
var abilities = document.getElementById('abilities')
var moves = document.getElementById('moves')

var trainer = []
var count = 0


// pokemeon class sets up the frame for each pokemeon //
class Pokemon {
  constructor(pokenumber) {
    this.hp;
    this.att;
    this.def;
    this.abil = [];
    this.moves = [];
    this.specialDefense;
    this.specialAttack;
    this.speed;
    this.getPokemon(pokenumber)
  }

  // get the pokemon using the id number //
  getPokemon(pokenumber) {
    var that = this;
    $.ajax({url:"https://fizal.me/pokeapi/api/"+ pokenumber +".json",
    success: function(pokemonInfo) {
      console.log(pokemonInfo);
      that.name = pokemonInfo.name
      that.specialDefense = pokemonInfo.stats[1].base_stat
      that.specialAttack = pokemonInfo.stats[2].base_stat
      that.speed= pokemonInfo.stats[0].base_stat
      that.hp = pokemonInfo.stats[5].base_stat
      that.att = pokemonInfo.stats[4].base_stat
      that.def = pokemonInfo.stats[3].base_stat
      that.img = pokemonInfo.sprites.front_default
      
      // loop through abilities array and then moves array and give name
      for(let i = 0;i<pokemonInfo.abilities.length;i++){
        that.abil.push(pokemonInfo.abilities[i].ability.name)
      }
      for(let i = 0;i<5;i++){
        that.moves.push(pokemonInfo.moves[i].move.name)
      }

      poke_name.innerHTML = that.name;
      poke_img.style.backgroundImage = "url(" + that.img + ")"
      poke_img.style.backgroundSize = '100% 100%'
      stat_hp.innerHTML ="hp: " + that.hp
      stat_att.innerHTML ="attack: " + that.att
      stat_def.innerHTML ="defense: " + that.def



      console.log(that.abil);
      var ableString = "";
      for (var i = 0; i < that.abil.length; i++) {
        if (i==that.abil.length-1) {
            ableString += that.abil[i]+"!"
        }else{
          ableString += that.abil[i]+", "
        }
      }
      abilities.innerHTML = "abilities: "+ ableString;

    }
  })
 }
}

// make new pokemon //
var mew2 = new Pokemon(150)
var machamp = new Pokemon(68)
var mightyena = new Pokemon(262)


// add to trainer array
trainer.push(mew2, machamp, mightyena)
console.log(trainer);



// go to next pokemon
next.addEventListener('click',function() {
  if (count == trainer.length - 1 ) {
    count = 0
  }else{
    count++
  }
  poke_name.innerHTML = trainer[count].name;
  poke_img.style.backgroundImage = "url(" + trainer[count].img + ")"
  stat_hp.innerHTML = "hp: " + trainer[count].hp
  stat_att.innerHTML = "attack: " + trainer[count].att
  stat_def.innerHTML = "defense: " + trainer[count].def
  // console.log(that.abil);
  var ableString = "";
  for (var i = 0; i < trainer[count].abil.length; i++) {
    if (i==trainer[count].abil.length-1) {
        ableString += trainer[count].abil[i]+"!"
    }else{
      ableString += trainer[count].abil[i]+", "
    }
  }
  abilities.innerHTML ="abilities: " + ableString;
})


// go the previous pokemon //
back.addEventListener('click', function() {
  if (count == 0 ) {
    count = trainer.length - 1
  }else{
    count--
  }
  stat_hp.innerHTML= trainer[count].hp;
  poke_name.innerHTML = trainer[count].name;
  poke_img.style.backgroundImage = "url(" + trainer[count].img + ")"
  stat_hp.innerHTML = "hp: " + trainer[count].hp
  stat_att.innerHTML = "attack: " + trainer[count].att
  stat_def.innerHTML = "defense: " + trainer[count].def

  var ableString = "";
  for (var i = 0; i < trainer[count].abil.length; i++) {
    if (i==trainer[count].abil.length-1) {
        ableString += trainer[count].abil[i]+"!"
    }else{
      ableString += trainer[count].abil[i]+", "
    }
  }
  abilities.innerHTML ="abilities: " + ableString;})
