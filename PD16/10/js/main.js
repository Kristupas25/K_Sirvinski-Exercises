function capitalizeWords(str) {
  return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });
}

function convert() {
  var inputText = document.getElementById("textInput").value;
  var convertedText = capitalizeWords(inputText);
  document.getElementById("convertedText").innerText = convertedText;
}