// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  window.speechSynthesis.addEventListener("voiceschanged", populateVoiceList);

  const buttonElement = document.querySelector("button");
  buttonElement.addEventListener("click", readSentence);
}

function changeImg() {
  const imgElement = document.querySelector("img");
  imgElement.src = "assets/images/smiling.png";
}

function readSentence() {
  const sentenceToRead = document.getElementById("text-to-speak");
  const dropdown = document.getElementById("voice-select");
  const voices = window.speechSynthesis.getVoices();
  const imgElement = document.querySelector("img");

  const utterThis = new SpeechSynthesisUtterance(sentenceToRead.value);
  const selectedOption = dropdown.selectedOptions[0].getAttribute("name");
  console.log(selectedOption);
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  window.speechSynthesis.speak(utterThis);
  imgElement.src = "assets/images/smiling-open.png";
  utterThis.addEventListener("end", changeImg);
}

function populateVoiceList() {
  var voices = speechSynthesis.getVoices();
  var voiceSelect = document.getElementById("voice-select");

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("lang", voices[i].lang);
    option.setAttribute("name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}
