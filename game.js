let Game = {
  setStart: function (classType) {
    this.resetPlayer(classType);
    this.setFight();
    this.setGoBack();
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
     getCharacterSelection.innerHTML = '<b>' + classType.toUpperCase() + '</b>' + '<p>Health: ' + player.health + '</p>' + '<p>Stamina: ' + player.stamina + '</p>';
    console.log(classType, player.health, player.stamina);
  },
  setFight: function () {
    // let getHeader = document.getElementById("gameName");
    let getActions = document.getElementById("actions");
    getActions.innerHTML = '<button class="fightButton" onclick="Game.setFight()">Start Game!</button>';
  },
  setGoBack: function () {
    let goBack = document.getElementById("setGoBack");
    goBack.innerHTML = '<button class="buttonGoBack" onclick="Game.setGoBack()">Back to Character Selection</button>';
  }
}