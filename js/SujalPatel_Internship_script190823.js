document.getElementById("executeButton").addEventListener("click", function () {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  function displayResult(functionName, result) {
    const outputBox = document.createElement("div");
    outputBox.className = "output-box";
    outputBox.innerHTML = `<strong>${functionName}:</strong> ${result}`;
    resultContainer.appendChild(outputBox);
  }

  const text = "Hello, this is a string function demonstration by Sujal";
  
  displayResult("Default text used is ", text)
  displayResult("String Length", text.length);
  displayResult("Slice", text.slice(7, 16));
  displayResult("Substring", text.substring(7, 16));
  displayResult("Replace", text.replace("string", "array"));
  displayResult("Replace All", text.replaceAll("is", "was"));
  displayResult("Case Insensitive Search", JSON.stringify(text.match(/Sujal/gi)));
  displayResult("Global Match Search", JSON.stringify(text.match(/is/g)));
  displayResult("To Uppercase", text.toUpperCase());
  displayResult("To Lowercase", text.toLowerCase());
  displayResult("Concatenation", text.concat(" Additional Text"));
  displayResult("Trim", "    Some whitespace    ".trim());
  displayResult("Trim Start", "    Leading whitespace".trimStart());
  displayResult("Trim End", "Trailing whitespace    ".trimEnd());
  displayResult("Pad Start", text.padStart(50, "-"));
  displayResult("Pad End", text.padEnd(50, "-"));
  displayResult("Char At Index", text.charAt(13));
  displayResult("Split", JSON.stringify(text.split(" ")));
  displayResult("Index Of 'is'", text.indexOf("is"));
  displayResult("Last Index Of 'is'", text.lastIndexOf("is"));
  displayResult("Search 'Sujal'", text.search("Sujal"));
  displayResult("Starts With 'Hello'", text.startsWith("Hello"));
  displayResult("Ends With 'demonstration.'", text.endsWith("demonstration."));
});
