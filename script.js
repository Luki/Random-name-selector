function selectRandomName() {
  const names = document.getElementById("names").value.split(",");
  const cleanedNames = names.map(name => name.trim()).filter(name => name);

  const resultElement = document.getElementById("result");

  if (cleanedNames.length > 0) {
    let counter = 0;
    const shuffleInterval = setInterval(() => {
      const randomName = cleanedNames[Math.floor(Math.random() * cleanedNames.length)];
      resultElement.innerText = `🎲 Shuffling... ${randomName}`;
      counter++;
      if (counter > 15) { // stop after ~1.5s
        clearInterval(shuffleInterval);
        const chosenName = cleanedNames[Math.floor(Math.random() * cleanedNames.length)];
        resultElement.innerText = `✅ The chosen person is: ${chosenName}`;
      }
    }, 100);
  } else {
    resultElement.innerText = "⚠️ Please enter at least one valid name.";
  }
}
