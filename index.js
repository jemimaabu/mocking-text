var textInput = document.getElementById("text-input");
var spongebobOutput = document.getElementById("spongebob-output")

function spongebobChicken(str) {
	const strArray = str.toLowerCase().split("");
	const spongebobed = strArray.map((x,i) => i % 2 === 0 ? x.toUpperCase() : x);
	return spongebobed.join("");
}

textInput.onkeyup = function(e) {
    const input = e.target.value
    spongebobOutput.innerText = spongebobChicken(input)
};

function copyText() {
    spongebobOutput.select();
    document.execCommand("copy");
    alert("Copied text");
  }