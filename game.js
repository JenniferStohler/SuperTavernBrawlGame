let Game = {
  setStart: function (classType) {
    this.resetPlayer(classType);
    this.resetGender();
    this.setFight();
    this.setStartFight();
    this.setGoBack();
  },
  resetGender: function (genderChoice) {
    switch (genderChoice) {
      case "Male":
        gender = new Gender(genderChoice);
        break;
        case "Female":
          gender = new Gender(genderChoice);
          break;
    }
    let getGenderSelection = document.getElementById("genderSelect");
    getGenderSelection.innerHTML = '<h3>Which Gender Do You Want to Be?</h3>' + '<button class="Male" onclick=Game.resetGender("Male")>Male</button>' + '<button class="Female" onclick=Game.resetGender("Female")>Female</button>' + '<p>Gender: ' + genderChoice + '</p>';
    console.log(genderChoice);
      },
      resetPlayer: function (classType) {
        switch (classType) {
          case "Barbarian":
            player = new Player(classType, 200, 100);
            break;
          case "Rogue":
            player = new Player(classType, 150, 200);
            break;
          case "Mage":
            player = new Player(classType, 150, 300);
            break;
        }
        let getCharacterSelection = document.getElementById("characterSelection");
        getCharacterSelection.innerHTML = '<b>' + classType.toUpperCase() + '</b>' + '<p>Health: ' + player.health + '</p>' + '<p>Mana: ' + player.mana + '</p>';

        console.log(classType, player.health, player.mana);
      },
  setFight: function () {
    // let getHeader = document.getElementById("gameName");
    let getActions = document.getElementById("actions");
    getActions.innerHTML = '<button class="fightButton" onclick="Game.setFight()">Start Game!</button>';
  },
  setGoBack: function () {
    let goBack = document.getElementById("setGoBack");
    goBack.innerHTML = '<button class="buttonGoBack" onclick="javascript:location.reload(true)">Go Back</button>';
  },

  setStartFight: function () {

  }
}