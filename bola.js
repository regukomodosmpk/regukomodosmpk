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
    },
    {
        question: "Pulau terbesar di Indonesia adalah?",
        answers: ["Jawa", "Sumatra", "Kalimantan", "Sulawesi"],
        correct: 2
    },
    {
        question: "Siapakah yang disebut Bapak Pendidikan Indonesia?",
        answers: ["Ki Hajar Dewantara", "Sukarno", "Suharto", "R.A. Kartini"],
        correct: 0
    },
    {
        question: "Apa nama candi Buddha terbesar di Indonesia?",
        answers: ["Prambanan", "Borobudur", "Mendut", "Sewu"],
        correct: 1
    },
    {
        question: "Apa nama ibukota provinsi Jawa Barat?",
        answers: ["Jakarta", "Bandung", "Semarang", "Surabaya"],
        correct: 1
    },
    {
        question: "Siapakah penulis buku Laskar Pelangi?",
        answers: ["Andrea Hirata", "Pramoedya Ananta Toer", "Ahmad Tohari", "Chairil Anwar"],
        correct: 0
    },
    {
        question: "Tari Kecak berasal dari daerah mana?",
        answers: ["Bali", "Jawa", "Sumatra", "Sulawesi"],
        correct: 0
    },
    {
        question: "Pahlawan nasional yang dikenal dengan nama 'Raja Si Singamangaraja' berasal dari daerah mana?",
        answers: ["Aceh", "Sumatra Utara", "Sumatra Selatan", "Kalimantan"],
        correct: 1
    },
    {
        question: "Pada tahun berapakah Proklamasi Kemerdekaan Indonesia terjadi?",
        answers: ["1945", "1949", "1950", "1955"],
        correct: 0
    },
    {
        question: "Apa nama gunung tertinggi di pulau Jawa?",
        answers: ["Semeru", "Merbabu", "Merapi", "Slamet"],
        correct: 0
    },
    {
        question: "Hewan komodo dapat ditemukan di pulau?",
        answers: ["Sumatra", "Bali", "Komodo", "Jawa"],
        correct: 2
    },
    {
        question: "Siapakah yang dikenal sebagai penemu listrik?",
        answers: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Nikola Tesla"],
        correct: 3
    },
    {
        question: "Siapakah yang menulis novel 'Harry Potter'?",
        answers: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "Stephen King"],
        correct: 0
    },
    {
        question: "Berapa jumlah pulau di Indonesia?",
        answers: ["13.466", "17.508", "18.110", "19.465"],
        correct: 1
    },
    {
        question: "Siapakah presiden ketiga Indonesia?",
        answers: ["Sukarno", "Suharto", "Habibie", "Gus Dur"],
        correct: 2
    },
    {
        question: "Siapa yang dikenal sebagai Bapak Ekonomi Indonesia?",
        answers: ["Soeharto", "B.J. Habibie", "Sukarno", "Sumitro Djojohadikusumo"],
        correct: 3
    },
    {
        question: "Apa mata uang Indonesia?",
        answers: ["Rupiah", "Ringgit", "Dollar", "Yen"],
        correct: 0
    },
    {
        question: "Apa nama ibukota provinsi Sumatra Selatan?",
        answers: ["Medan", "Padang", "Palembang", "Bengkulu"],
        correct: 2
    },
    {
        question: "Siapakah penemu teori relativitas?",
        answers: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Nikola Tesla"],
        correct: 1
    },
    {
        question: "Apa nama gunung tertinggi di pulau Sumatra?",
        answers: ["Kerinci", "Leuser", "Sinabung", "Dempo"],
        correct: 0
    },
    {
        question: "Siapakah yang dikenal sebagai penemu telepon?",
        answers: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Albert Einstein"],
        correct: 0
    },
    {
        question: "Siapa yang menulis novel 'Laskar Pelangi'?",
        answers: ["Andrea Hirata", "Pramoedya Ananta Toer", "Ahmad Tohari", "Chairil Anwar"],
        correct: 0
    },
    {
        question: "Siapakah yang dikenal sebagai Bapak Pendidikan Indonesia?",
        answers: ["Ki Hajar Dewantara", "Sukarno", "Suharto", "R.A. Kartini"],
        correct: 0
    },
    {
        question: "Apa nama ibukota provinsi Kalimantan Barat?",
        answers: ["Pontianak", "Samarinda", "Balikpapan", "Banjarmasin"],
        correct: 0
    },
    {
        question: "Apa nama ibukota provinsi Papua?",
        answers: ["Jayapura", "Manokwari", "Sorong", "Timika"],
        correct: 0
    },
    {
        question: "Apa nama ibukota provinsi Sulawesi Selatan?",
        answers: ["Makassar", "Manado", "Palu", "Kendari"],
        correct: 0
    },
    {
        question: "Tari Saman berasal dari daerah mana?",
        answers: ["Aceh", "Sumatra Utara", "Sumatra Selatan", "Kalimantan"],
        correct: 0
    },
    {
        question: "Siapakah penulis novel 'Bumi Manusia'?",
        answers: ["Andrea Hirata", "Pramoedya Ananta Toer", "Ahmad Tohari", "Chairil Anwar"],
        correct: 1
    },
    {
        question: "Apa nama candi Hindu terbesar di Indonesia?",
        answers: ["Prambanan", "Borobudur", "Mendut", "Sewu"],
        correct: 0
    },
    {
        question: "Apa nama ibukota provinsi Jawa Tengah?",
        answers: ["Semarang", "Solo", "Yogyakarta", "Purwokerto"],
        correct: 0
    },
    {
        question: "Siapakah pahlawan nasional yang dikenal sebagai 'Pangeran Diponegoro'?",
        answers: ["Sukarno", "Diponegoro", "Suharto", "Habibie"],
        correct: 1
    },
    {
        question: "Pulau Lombok terletak di provinsi mana?",
        answers: ["Bali", "NTB", "NTT", "Sulawesi"],
        correct: 1
    },
    {
        question: "Apa nama ibukota provinsi Riau?",
        answers: ["Pekanbaru", "Padang", "Batam", "Medan"],
        correct: 0
    },
    {
        question: "Siapakah penemu bola lampu pijar?",
        answers: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Albert Einstein"],
        correct: 2
    },
    {
        question: "Apa nama gunung tertinggi di pulau Bali?",
        answers: ["Agung", "Batur", "Batukaru", "Rinjani"],
        correct: 0
    },
    {
        question: "Siapakah yang dikenal sebagai penemu teori gravitasi?",
        answers: ["Isaac Newton", "Albert Einstein", "Thomas Edison", "Nikola Tesla"],
        correct: 0
    },
    {
        question: "Apa nama ibukota provinsi Aceh?",
        answers: ["Medan", "Banda Aceh", "Lhokseumawe", "Sabang"],
        correct: 1
    },
    {
        question: "Siapakah yang menulis novel 'Sang Pemimpi'?",
        answers: ["Andrea Hirata", "Pramoedya Ananta Toer", "Ahmad Tohari", "Chairil Anwar"],
        correct: 0
    },
    {
        question: "Tari Pendet berasal dari daerah mana?",
        answers: ["Jawa", "Sumatra", "Bali", "Sulawesi"],
        correct: 2
    },
    {
        question: "Apa nama ibukota provinsi Sumatra Barat?",
        answers: ["Pekanbaru", "Padang", "Batam", "Medan"],
        correct: 1
    },
    {
        question: "Apa nama ibukota provinsi Kalimantan Timur?",
        answers: ["Pontianak", "Samarinda", "Balikpapan", "Banjarmasin"],
        correct: 1
    },
    {
        question: "Siapakah yang dikenal sebagai penemu mesin uap?",
        answers: ["James Watt", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
        correct: 0
    },
    {
        question: "Apa nama gunung tertinggi di pulau Lombok?",
        answers: ["Agung", "Batur", "Batukaru", "Rinjani"],
        correct: 3
    },
    {
        question: "Siapakah yang menulis novel 'Anak Semua Bangsa'?",
        answers: ["Andrea Hirata", "Pramoedya Ananta Toer", "Ahmad Tohari", "Chairil Anwar"],
        correct: 1
    },
    {
        question: "Apa nama ibukota provinsi Bengkulu?",
        answers: ["Pekanbaru", "Padang", "Bengkulu", "Medan"],
        correct: 2
    }
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

    if (index === currentQuestion.correct) {
        alert('Jawaban benar!');
    } else {
        alert('Jawaban salah!');
    }

    showNextQuestion();
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Selamat, Anda telah menyelesaikan semua pertanyaan!, Tunggu pertanyaan berikutnya Dalam 24 Jam🔥🔥');
        currentQuestionIndex = 0;
        showQuestion();
    }
}

showQuestion();
