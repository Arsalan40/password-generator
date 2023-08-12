const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function generateRandomPassword(length, characterArray) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterArray.length);
    password += characterArray[randomIndex];
  }
  return password;
}

function generate() {
  const passwordField = document.getElementById("input");
  const passwordLength = parseInt(document.getElementById("length").value);
  const includeNumbers = document.querySelector(
    'input[name="options"][value="numbers"]'
  ).checked;
  const includeSymbols = document.querySelector(
    'input[name="options"][value="symbols"]'
  ).checked;

  const charactersArray = characters.concat(
    includeNumbers ? ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] : []
  );
  const symbolsArray = includeSymbols
    ? [
        "~",
        "`",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "{",
        "[",
        "}",
        "]",
        ",",
        "|",
        ":",
        ";",
        "<",
        ">",
        ".",
        "?",
        "/",
      ]
    : [];
  const combinedCharacters = charactersArray.concat(symbolsArray);

  const generatedPassword = generateRandomPassword(
    passwordLength,
    combinedCharacters
  );
  passwordField.value = generatedPassword;
}

function copyPassword() {
  const passwordField = document.getElementById("input");
  passwordField.select();
  document.execCommand("copy");
}
