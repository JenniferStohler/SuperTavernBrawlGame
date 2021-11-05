let Game = {
  setStart: function (classType) {
    this.resetPlayer(classType);
    this.setFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "Barbarian":
        player = new Player(classType, 250, 100);
        break;
      case "Rogue":
        player = new Player(classType, 150, 200);
        break;
      case "Mage":
        player = new Player(classType, 100, 50);
        break;
    }
    let getCharacterSelection = document.getElementById("characterSelection");
     getCharacterSelection.innerHTML = '<p>Health: ' + player.health + '</p>' + '<p>Stamina: ' + player.stamina + '</p>';
    console.log(classType, player.health, player.stamina);
  },
  setFight: function () {
    
  }
}