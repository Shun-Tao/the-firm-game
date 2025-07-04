var players = [
    { name: "Player 1", money: "50000", change: "0", bank: "0" },
    { name: "Player 2", money: "50000", change: "0", bank: "0" },
    { name: "Player 3", money: "50000", change: "0", bank: "0" },
    { name: "Player 4", money: "50000", change: "0", bank: "0" }
];

let currentPlayerIndex = 0;

function playersTable(list) {
    const pbody = document.querySelector("#task-table tbody");
    pbody.innerHTML = "";
    list.forEach(player => {
        const row = document.createElement("tr");
        const changeDisplay = Number(player.change) > 0 ? `+${player.change}` : player.change;
        row.innerHTML = `<td data-label="Player">${player.name}</td>
                         <td data-label="Money">${player.money}</td>
                         <td data-label="Change">${changeDisplay}</td>
                         <td data-label="Bank Balance">${player.bank || 0}</td>`;
        pbody.appendChild(row);
    });

    // Update turn indicator
    const turnDiv = document.getElementById("turn-indicator");
    if (turnDiv && typeof currentPlayerIndex !== "undefined" && list[currentPlayerIndex]) {
        turnDiv.textContent = `${list[currentPlayerIndex].name}'s turn!`;
    }
} // <-- This closing brace was missing