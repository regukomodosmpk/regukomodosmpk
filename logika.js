const questions = [
    {
        question: "Jika 5 + 3 = 28, 9 + 1 = 810, maka 8 + 6 = ?",
        answers: ["214", "214", "214", "214"],
        correct: 3
    },
    {
        question: "Kata apakah yang memiliki empat vokal berturut-turut?",
        answers: ["Aturan", "Apakah", "Tulisan", "Mobil"],
        correct: 1
    },
    {
        question: "Jika di depan rumahmu ada sungai yang dalam dan lebar, bagaimana kamu menyeberanginya?",
        answers: ["Berjalan di atas air", "Menyeberangi jembatan", "Renang", "Menyeberanginya dengan perahu"],
        correct: 3
    }
    // Tambahkan lebih banyak pertanyaan di sini
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Menghapus jawaban sebelumnya
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(index, currentQuestion.correct));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert('Jawaban benar!');
    } else {
        alert('Jawaban salah!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Anda telah menyelesaikan tes logika!');
        currentQuestionIndex = 0;
        showQuestion();
    }
}

showQuestion();
