function shuffleCards() {
  const input = document.getElementById("names").value;
  const names = input.split(",").map(n => n.trim()).filter(n => n);
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  if (names.length === 0) {
    alert("⚠️ Please enter at least one valid name.");
    return;
  }

  // Create cards
  const cards = names.map(name => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = name;
    container.appendChild(card);
    return card;
  });

  // Animate shuffle
  let counter = 0;
  const shuffleTimes = 20;
  const shuffleInterval = setInterval(() => {
    cards.forEach(card => {
      card.style.transform = `translateX(${Math.random()*120-60}px) rotate(${Math.random()*40-20}deg)`;
      card.classList.add("show");
    });
    counter++;
    if (counter >= shuffleTimes) {
      clearInterval(shuffleInterval);
      const chosenIndex = Math.floor(Math.random() * cards.length);
      cards.forEach((card, i) => {
        if (i === chosenIndex) {
          card.classList.add("chosen");
          card.style.transform = `translateX(-50%) scale(1.2)`;
        } else {
          card.style.opacity = 0;
        }
      });
    }
  }, 100);
}

