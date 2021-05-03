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
  return string.replace("Grandma", "too") ? string.replace("HELLO", "YES INDEED!") : string.replace("hello", "I can't hear you");
}
