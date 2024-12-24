function selectRandomName() {
    const names = document.getElementById("names").value.split(',');
    const cleanedNames = names.map(name => name.trim()).filter(name => name);
    if (cleanedNames.length > 0) {
        const chosenName = cleanedNames[Math.floor(Math.random() * cleanedNames.length)];
        document.getElementById("result").innerText = `The chosen person is: ${chosenName}`;
    } else {
        document.getElementById("result").innerText = "Please enter at least one valid name.";
    }
}