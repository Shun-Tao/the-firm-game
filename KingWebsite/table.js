var players = [
    { name: "Player 1", money: "0", change: "0" },
    { name: "Player 2", money: "0", change: "0" },
    { name: "Player 3", money: "0", change: "0" },
    { name: "Player 4", money: "0", change: "0" }
];



let currentPlayerIndex = 0;

function playersTable(list) {
    const pbody = document.querySelector("#task-table tbody");
    pbody.innerHTML = "";
    list.forEach(player => {
        const row = document.createElement("tr");
        const changeDisplay = player.change > 0 ? `+${player.change}` : player.change;
        row.innerHTML = `<td data-label="Player">${player.name}</td><td data-label="Money">${player.money}</td><td data-label="Change">${changeDisplay}</td>`;
        pbody.appendChild(row);
    });

    // Update turn indicator
    const turnDiv = document.getElementById("turn-indicator");
    if (turnDiv && typeof currentPlayerIndex !== "undefined" && list[currentPlayerIndex]) {
        turnDiv.textContent = `It's ${list[currentPlayerIndex].name}'s turn!`;
    }
}

function dice() {
    const randomNum = Math.floor(Math.random() * 11) - 5;
    players[currentPlayerIndex].change = randomNum.toString();
    players[currentPlayerIndex].money = (
        parseInt(players[currentPlayerIndex].money, 10) + randomNum
    ).toString();
    playersTable(players);

    // Display result in the dice-result div
    const resultDiv = document.getElementById("dice-result");
    if (randomNum > 0) {
        resultDiv.textContent = `You rolled +${randomNum} (positive)`;
        resultDiv.style.color = "green";
    } else if (randomNum < 0) {
        resultDiv.textContent = `You rolled ${randomNum} (negative)`;
        resultDiv.style.color = "red";
    } else {
        resultDiv.textContent = `You rolled 0 (neutral)`;
        resultDiv.style.color = "black";
    }

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}
document.addEventListener("DOMContentLoaded", () => {
    playersTable(players);

    const search = document.getElementById("search");
    search.addEventListener("input", () => {
        const term = search.value.toLowerCase();
        const filtered = players.filter(player =>
            player.name.toLowerCase().includes(term) ||
            player.money.toLowerCase().includes(term) ||
            player.change.toLowerCase().includes(term)
        );
        playersTable(filtered);
    });
    window.dice = dice;
});