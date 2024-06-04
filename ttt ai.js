// Inisialisasi variabel
const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = "X"; // Mengubah pemain saat ini menjadi X
let gameState = ["", "", "", "", "", "", "", "", ""];

// Pesan kemenangan, seri, dan giliran pemain
const winningMessage = () => `Player ${currentPlayer} Menang!`;
const drawMessage = () => `Kamu dan Komputer Seri`;
const currentPlayerTurn = () => `Saatnya ${currentPlayer}`;

// Menampilkan giliran pemain saat ini
statusDisplay.innerHTML = currentPlayerTurn();

// Menangani klik pada sel oleh pemain
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));

// Menangani klik tombol restart
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

// Fungsi untuk menangani klik pada sel oleh pemain
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive || currentPlayer === "O") { // Mengubah agar hanya pemain X yang dapat bermain saat ini
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

// Fungsi untuk menangani pemutaran sel
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// Fungsi untuk memeriksa hasil permainan
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    setTimeout(() => {
        handlePlayerChange();

        // Setelah pemain bermain, biarkan AI bergerak
        if (gameActive && currentPlayer === "O") {
            aiMove();
            handleResultValidation();
        }
    }, 3000); // Jeda 3 detik sebelum giliran pemain berikutnya

    // Nonaktifkan event listener untuk sel selama jeda
    document.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', handleCellClick));
}

// Fungsi untuk mengganti giliran pemain
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

// Fungsi untuk mengambil langkah AI
function aiMove() {
    let emptyCells = gameState.reduce((acc, cell, index) => {
        if (cell === '') {
            acc.push(index);
        }
        return acc;
    }, []);

    // Pilih secara acak dari sel yang kosong
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const selectedCellIndex = emptyCells[randomIndex];

    // Lakukan langkah AI
    gameState[selectedCellIndex] = currentPlayer;
    const selectedCell = document.querySelector(`[data-cell-index='${selectedCellIndex}']`);
    selectedCell.innerHTML = currentPlayer;

    // Aktifkan kembali event listener setelah langkah AI selesai
    setTimeout(() => {
        document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
    }, 3000); // Aktifkan kembali event listener setelah 3 detik
}

// Fungsi untuk mengatur ulang permainan
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// Kondisi kemenangan
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
