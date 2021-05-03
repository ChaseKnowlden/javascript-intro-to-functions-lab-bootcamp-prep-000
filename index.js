function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  if (string === isUpperCase(string)) {
    return true;
  }
}

function isUpperCase(str) {
  return (/^[^a-z]*$/).test(str);
}