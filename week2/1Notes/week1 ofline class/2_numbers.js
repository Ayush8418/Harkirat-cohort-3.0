// Example Usage for parseInt
// 
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

explainParseInt("42");
explainParseInt("42px");
explainParseInt("23.14");
explainParseInt("42.99");      // 42  (ignores decimal part)
explainParseInt("101", 2);     // 5   (binary to decimal)
explainParseInt("0xF", 16);    // 15  (hex to decimal)
explainParseInt("abc123");     // NaN (starts with non-numeric character)

// Example Usage for parseFloat
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42.9px");
parseFloat("abc3.14");    // NaN