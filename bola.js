const questions = [
    {
        question: "Apa ibu kota Indonesia?",
        answers: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        correct: 0
    },
    {
        question: "Gunung tertinggi di Indonesia adalah?",
        answers: ["Semeru", "Rinjani", "Kerinci", "Puncak Jaya"],
        correct: 3
    },
    {
        question: "Siapakah presiden pertama Indonesia?",
        answers: ["Sukarno", "Suharto", "Habibie", "Gus Dur"],
        correct: 0
    },
    {
        question: "Siapakah nama bapak Awang?",
        answers: ["Ngatini", "Heru", "Sumarjani", "Yayan"],
        correct: 2
    }
    // Tambahkan lebih banyak pertanyaan di sini
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
        button.onclick = () => selectAnswer(index);
    });
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextButton = document.getElementById('next-button');

    if (index === currentQuestion.correct) {
        alert('Jawaban benar!');
    } else {
        alert('Jawaban salah!');
    }

    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        alert('Selamat, Anda telah menyelesaikan semua pertanyaan!, Tunggu pertanyaan berikutnya Dalam 24 Jam🔥🔥');
        currentQuestionIndex = 0;
        showQuestion();
    }
}

document.getElementById('next-button').onclick = showNextQuestion;

showQuestion();
