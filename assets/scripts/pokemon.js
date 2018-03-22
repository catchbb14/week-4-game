$(document).ready( function() {
    
    var enemiesToFight = [];
    var enemiesFought = [];
    var characterSelected;
    var enemySelected;
    var characterChosen = false;
    var charNum;
    var enemNum;

    class Pokemon {
        constructor(name, title, imagePath, hp, attack, counter) {
            this.name = name;
            this.title = title;
            this.imagePath = imagePath;
            this.hp = hp;
            this.attack = attack;
            this.counter = counter;
            this.chosen = false;
        }

        attack(enemy) {
            displayAttack(this.attack);
        }

    }

          

    var pikachu = new Pokemon("Pikachu", "assets/images/pikachu-name.png", "assets/images/pikachu.png", 120, 8, 15);
    var charmander = new Pokemon("Charmander", "assets/images/charmander-name.png", "assets/images/charmander.png", 100, 15, 5);
    var bulbasaur = new Pokemon("Bulbasaur", "assets/images/bulbasaur-name.png", "assets/images/bulbasaur.png", 150, 9, 20);
    var squirtle = new Pokemon("Squirtle", "assets/images/squirtle-name.png", "assets/images/squirtle.png", 180, 6, 25);

    var characterList = [pikachu, charmander, bulbasaur, squirtle];
    var modalList = characterList.slice(0);

    modalList.forEach( function(item, index) {
        var row = "#row-" + Math.floor(index/2);
        var openTag = '<div class="col-6 ml-auto" id="char-' + index + '">';
        var image = '<img src="' + item.imagePath + '" class="img-responsive characters" id="charImg-' + index + '" />';
        $(row).append(openTag + image + "<div>");
        $("#modal-title").text("Choose Your Pokemon!");
    });

    function removeCharacter() {
        modalList = modalList.filter( function(char) {
            return !(char.chosen);
        });
        updateModal();
    }

    function updateModal() {
        $("#modal-title").text("Choose Your Enemy!");
        $("#modal-list-container").empty();
        
        $("#modal-list-container").html("<div class='row' id='enemies'></div>");
        $("#modal-footer").empty();
        $("#modal-footer").html('<button type="button" id="enemy-button" class="btn btn-danger" style="visibility: hidden;" data-dismiss="modal">Fight!</button>');
        modalList.forEach( function(item, index) {
            var openTag = '<div class="col-4 ml-auto" id="enemy-' + index + '">';
            var image = '<img src="' + item.imagePath + '" class="img-responsive enemies" id="enemyImg-' + index + '" />';
            $("#enemies").append(openTag + image + "<div>");
        });
        
    }

    $("#characterSelect").on('click', '#char-0',  function() {
        charNum = 0;
        $(".characters").css("border-style", "none");
        $("#charImg-0").css("border", "2px solid #4caf50 ");
        $("#modal-submit").css("visibility", "visible");
    });
    $("#characterSelect").on('click', '#char-1',  function() {
        charNum = 1;
        $(".characters").css("border-style", "none");
        $("#charImg-1").css("border", "2px solid #4caf50 ");
        $("#modal-submit").css("visibility", "visible");
    });
    $("#characterSelect").on('click', '#char-2',  function() {
        charNum = 2;
        $(".characters").css("border-style", "none");
        $("#charImg-2").css("border", "2px solid #4caf50 ");
        $("#modal-submit").css("visibility", "visible");
    });
    $("#characterSelect").on('click', '#char-3',  function() {
        charNum = 3;
        $(".characters").css("border-style", "none");
        $("#charImg-3").css("border", "2px solid #4caf50 ");
        $("#modal-submit").css("visibility", "visible");
    });
    $("#characterSelect").on('click', '#modal-submit',  function() {
        characterSelected = characterList[charNum];
        characterSelected.chosen = true;
        $("#selectCharacter").empty();
        $("#character-image").attr("src", characterSelected.imagePath);
        $("#selectCharacter").html("<img src='" + characterSelected.title + "'>");
        $("#enemy-button").css("visibility", "visible");
        $("#sec-heading").text("Now Choose Who You Will Battle!");
        $("#sec-heading").css("color", "#ff0000");
        removeCharacter();
    });

    $("#characterSelect").on('click', '#enemy-0',  function() {
        enemNum = 0;
        $(".enemies").css("border-style", "none");
        $("#enemyImg-0").css("border", "2px solid #ff0000 ");
        $("#enemy-button").css("visibility", "visible");
    });
    $("#characterSelect").on('click', '#enemy-1',  function() {
        enemNum = 1;
        $(".enemies").css("border-style", "none");
        $("#enemyImg-1").css("border", "2px solid #ff0000 ");
        $("#enemy-button").css("visibility", "visible");
    });
    $("#characterSelect").on('click', '#enemy-2',  function() {
        console.log("here")
        enemNum = 2;
        $(".enemies").css("border-style", "none");
        $("#enemyImg-2").css("border", "2px solid #ff0000 ");
        $("#enemy-button").css("visibility", "visible");
    });
    
    $("#characterSelect").on('click', '#enemy-button',  function() {
        enemySelected = modalList[enemNum];
        enemySelected.chosen = true;
        $("#selectEnemy").empty();
        $("#enemy-image").attr("src", enemySelected.imagePath);
        $("#selectEnemy").html("<img src='" + enemySelected.title + "'>");
        $("#enemy-button").css("visibility", "visible");
        $("#sec-heading").text("");
        $("#attack-button").css("visibility", "visible");
        removeCharacter();
       
    });

    $(document).on('click', '#attack-button', function() {
        characterSelected.attack(enemySelected);
    })
});
    

