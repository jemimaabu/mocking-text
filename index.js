var textInput = document.getElementById("text-input");
var mockingText = document.getElementById("mocking-text");
var buttonCopyText = document.getElementById("button-copy-text");
var tooltipCopyText = document.getElementById("tooltip-copy-text");

function mockingConverter(str) {
	const strArray = str.toLowerCase().split("");
	const mocked = strArray.map((x,i) => i % 2 === 0 ? x : x.toUpperCase());
	return mocked.join("");
}

textInput.onkeyup = function(e) {
    const input = e.target.value
    mockingText.innerText = mockingConverter(input)
};

function copyTextClick() {
    // Implementation copied from here: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    mockingText.select();
    mockingText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mockingText.value);
    tooltipCopyText.innerHTML = "Copied";
  }

function copyTextOut() {
    tooltipCopyText.innerHTML = "Copy mock text to clipboard";
}
