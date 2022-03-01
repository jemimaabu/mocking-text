var textInput = document.getElementById("text-input");
var mockingText = document.getElementById("mocking-text")

function mockingConverter(str) {
	const strArray = str.toLowerCase().split("");
	const mocked = strArray.map((x,i) => i % 2 === 0 ? x : x.toUpperCase());
	return mocked.join("");
}

textInput.onkeyup = function(e) {
    const input = e.target.value
    mockingText.innerText = mockingConverter(input)
};

function copyText() {
    // Implementation copied from here: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    mockingText.select();
    mockingText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mockingText.value);

    // for some reason, calling alert immediately results in the text not being copied
    setTimeout(function () {
        alert("Copied text");
    }, 100);
  }
