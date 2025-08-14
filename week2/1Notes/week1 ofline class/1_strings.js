// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
  console.log("After slice:", str.slice(start*-1));
}
getSlice("Hello World", 2, 7);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log(`After substring(${start},${end}):`, str.substring(start, end));
  console.log(`After substring(${start}):`, str.substring(start));
}
getSubstring("Hello World", 2, 7);

// substr
function getSubstr(str, start, end) {
  console.log("Original String:", str);
  console.log(`After substr(${start},${end}):`, str.substring(start, end));
  console.log(`After substr(${start}):`, str.substring(start));
}
getSubstr("Hello World", 2, 7);

// difference b/w slice and substring
// 1. slica allows the use of negative indexes and substrig does not.
// 2. substring allows both (start, end) and (end,start) slice does not.

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");