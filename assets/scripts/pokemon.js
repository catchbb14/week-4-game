$(document).ready( function() {
    console.log("Something")
    
    var enemiesToFight = [];
    var enemiesFought = [];
    var characterSelected;

    class Pokemon {
        constructor(name, title, imagePath, hp, base, attackMult, counter) {
            this.name = name;
            this.imagePath = imagePath;
            this.hp = hp;
            this.base = base;
            this.attackMult = attackMult;
            this.counter = counter;
        }

    }
          

    var pikachu = new Pokemon("Pikachu", "assets/images/pikachu-name.png", "assets/images/pikachu.png", 120, 8, 8, 15);
    var charmander = new Pokemon("Charmander", "assets/images/charmander-name.png", "assets/images/charmander.png", 100, 15, 10, 5);
    var bulbasaur = new Pokemon("Bulbasaur", "assets/images/bulbasaur-name.png", "assets/images/bulbasaur.png", 150, 9, 9, 20);
    var squirtle = new Pokemon("Squirtle", "assets/images/squirtle-name.png", "assets/images/squirtle.png", 180, 6, 6, 25);

    var characterList = [pikachu, charmander, bulbasaur, squirtle];

    $("#clickToSelect").click( function() {
        characterList.forEach( function(item, index) {
            
        });
    });

});
    

