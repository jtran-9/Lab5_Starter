// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var dropdown = document.getElementById("horn-select");

  document.addEventListener("change", changeImgAndAudio)
}


// changes image and audio file based on dropdown value
function changeImgAndAudio() {
  // grabs the value of the dropdown element
  var dropdown = document.getElementById("horn-select");
  var horn_type = dropdown.value;

  // grabs img element
  var img = document.querySelector("img");

  // grabs audio element
  var audioElement = document.getElementsByClassName("hidden")[0];

  // sets the corresponding image and audio
  if (horn_type == "air-horn") {
    img.src = "assets/images/air-horn.svg";
    audioElement.src = "assets/audio/air-horn.mp3";
  } else if (horn_type == "car-horn") {
    img.src = "assets/images/car-horn.svg";
    audioElement.src = "assets/audio/car-horn.mp3";
  } else if (horn_type == "party-horn") {
    img.src = "assets/images/party-horn.svg";
    audioElement.src = "assets/audio/party-horn.mp3";
  } else {
    img.src = "assets/images/no-image.png";
    audioElement.src = "";
  }
}