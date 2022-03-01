var textInput = document.getElementById("text-input");
var mockingText = document.getElementById("mocking-text")

const ALWAYS_UPPERCASE = [
    "L", // lowercase `l` can be confused with one (`1`) or uppercase i (`I`)
];

const ALWAYS_LOWERCASE = [
    "i", // uppercase `i` (`I`) can be confused with lowercase `L` (`l`)
    "í", // accented i
    "ì", // accented i
    "î", // accented i
    "ï", // accented i
    "o", // uppercase `o` (`O`) can be confused with zero (`0`)
];

const END_OF_SENTENCE = [
    ".",
    "!",
    "?",
];

Object.defineProperty(String.prototype, 'isLowerCase', {
    value() {
        return this.toLowerCase() == this;
    }
});

Object.defineProperty(String.prototype, 'isUpperCase', {
    value() {
        return this.toUpperCase() == this;
    }
});

function mockFunction(char, position, prev=false) {
    if (ALWAYS_UPPERCASE.includes(char.toUpperCase())) {
        // certain characters are always upper case
        return char.toUpperCase();
    }
    if (ALWAYS_LOWERCASE.includes(char.toLowerCase())) {
        // certain characters are always lower case
        return char.toLowerCase();
    }

    if (position == 0 || prev == false || END_OF_SENTENCE.includes(prev)) {
        // first character of a sentence is always lowercase
        return char.toLowerCase();
    }

    if (prev.isLowerCase()) {
        // return uppercase if previous non-space characters is lowercase
        return char.toUpperCase();
    }

    if (prev.isUpperCase()) {
        // return lowercase if previous non-space characters is uppercase
        return char.toLowerCase();
    }

    return char;
}

function mockingConverter(str) {
	const strArray = str.split("");
    const mocked = [];
    var prev = false;
    strArray.forEach((char, index) => {
        var mc = mockFunction(char, index, prev);
        mocked.push(mc);
        if (mc != " ") {
            prev = mc;
        }
    });
	return mocked.join("");
}

textInput.onkeyup = function(e) {
    const input = e.target.value
    mockingText.innerText = mockingConverter(input)
};

function copyText() {
    mockingText.select();
    document.execCommand("copy");
    alert("Copied text");
  }