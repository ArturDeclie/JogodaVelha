var player = "rick";
var plays = 0;
var playing = true;


function checkgame(id) {
  var slot = document.getElementById(id);
  var pc = document.getElementById("cpus").checked;


  if (slot.style.backgroundImage == "" && playing == true) {
    slot.style.backgroundImage = `url(img/${player}.png)`;

    plays++;

    if (winner() == true) {
    }

    player = (player == "rick" ? "morty" : "rick");

  }


  if (pc && player == 'morty') {
    checkgame(game());
  }

  function game() {
    return 'c' + Math.floor((Math.random() * 9) + 1);
  }


}



function winner() {
  var arry = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let id of arry) {
    let um = document.getElementById("c" + id[0]).style.backgroundImage;
    let dois = document.getElementById("c" + id[1]).style.backgroundImage;
    let tres = document.getElementById("c" + id[2]).style.backgroundImage;

    if (um == dois && um == tres && um != "") {
      document.getElementById("texto").innerHTML = `${player} venceu!!!!!!`;


      um = document.getElementById("c" + id[0]).style.border = "3px solid #FF1493";
      dois = document.getElementById("c" + id[1]).style.border = "3px solid #FF1493";
      tres = document.getElementById("c" + id[2]).style.border = "3px solid #FF1493";


      playing = false;
      return true;
    }
  }

  if (plays == 9) {
    document.getElementById("texto").innerHTML = "Deu velha!!!!!!";
  }
}




function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById("c" + i).style.backgroundImage = "";

    plays = 0;
    playing = true;
    player = "rick";

    document.getElementById("c" + i).style.border = "";

    document.getElementById("texto").innerHTML = "";
  }
}
