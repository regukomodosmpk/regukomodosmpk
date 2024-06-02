const questions = [
    {
        question: "Jika 5 + 3 = 28, 9 + 1 = 810, maka 8 + 6 = ?",
        answers: ["211", "212", "219", "214"],
        correct: 3,
        explanation: "Ini adalah teka-teki logika, bukan penjumlahan biasa. Setiap pasangan angka menghasilkan angka baru dengan pola tertentu."
    },
    {
        question: "Kata apakah yang memiliki empat vokal berturut-turut?",
        answers: ["Aturan", "Apakah", "Tulisan", "Mobil"],
        correct: 1,
        explanation: "Kata 'Apakah' memiliki empat vokal berturut-turut: A, A, A, dan A."
    },
    {
        question: "Jika di depan rumahmu ada sungai yang dalam dan lebar, bagaimana kamu menyeberanginya?",
        answers: ["Berjalan di atas air", "Menyeberangi jembatan", "Renang", "Menyeberanginya dengan perahu"],
        correct: 3,
        explanation: "Menyeberanginya dengan perahu adalah cara yang logis dan aman."
    },
    {
        question: "Di sebuah pulau, semua penduduk selalu berkata bohong, kecuali pada hari Rabu. Pada hari apa seorang penjaga pantai mengatakan 'Hari ini adalah hari Rabu'?",
        answers: [ "Hari Kamis", "Hari Jumat", "Hari ini", "Bukan Hari"],
        correct: 0,
        explanation: "Pada hari Kamis, penjaga pantai akan berbohong dan mengatakan bahwa hari ini adalah Rabu."
    },
    {
        question: "Seorang pria memiliki 12 koin, 7 di antaranya menghadap atas dan 5 menghadap bawah. Dia melemparkan semua koin ke udara. Berapa banyak koin yang akan menghadap atas setelah mendarat?",
        answers: ["10 koin", "semua koin", "Tetap 7 koin", "3 koin", "tetap 12 koin"],
        correct: 2,
        explanation: "Tidak ada yang berubah jika koin dilemparkan, kemungkinan hasil tetap sama."
    },
    {
        question: "Dalam sebuah kompetisi matematika, setiap peserta mendapatkan 5 soal. Peserta yang menjawab semua soal dengan benar mendapatkan nilai 100, dan peserta yang menjawab 4 soal dengan benar mendapatkan nilai 80. Seorang peserta mendapatkan nilai 90. Berapa banyak soal yang dia jawab dengan benar?",
        answers: ["3", "4", "5", "maaf ga tau"],
        correct: 1,
        explanation: "Jika peserta menjawab 5 soal dengan benar, dia akan mendapatkan nilai 100. Jika dia menjawab 4 soal dengan benar, dia akan mendapatkan nilai 80. Karena dia mendapatkan nilai 90, berarti dia menjawab lebih dari 4 soal tetapi kurang dari 5 soal dengan benar. Satu-satunya kemungkinan adalah dia menjawab 4 soal dengan benar."
    },
    {
        question: "Dalam sebuah lomba lari, jika kamu menyalip orang di posisi kedua, kamu berada di posisi berapa?",
        answers: ["Pertama", "Kedua", "Ketiga", "Keempat"],
        correct: 1,
        explanation: "Jika kamu menyalip orang di posisi kedua, maka kamu mengambil alih posisi kedua. Orang yang tadinya di posisi kedua menjadi posisi ketiga."
    },
    {
        question: "Ayah Mary memiliki lima anak. Nama anak pertama adalah Nana, anak kedua adalah Nene, anak ketiga adalah Nini, anak keempat adalah Nono. Siapa nama anak kelima?",
        answers: ["Nunu", "Nana", "Nene", "Mary"],
        correct: 3,
        explanation: "Nama anak kelima adalah Mary. Pertanyaan tersebut dimulai dengan 'Ayah Mary memiliki lima anak...'."
    },
    {
        question: "Ada sebuah kolam yang ditumbuhi oleh tanaman air. Setiap hari, ukuran tanaman air tersebut akan berlipat ganda. Jika tanaman air tersebut memenuhi seluruh kolam dalam waktu 48 hari, berapa hari yang dibutuhkan untuk memenuhi setengah kolam?",
        answers: ["24 hari", "47 hari", "12 hari", "36 hari"],
        correct: 1,
        explanation: "Jika tanaman air tersebut memenuhi seluruh kolam dalam waktu 48 hari, maka pada hari ke-47, tanaman air tersebut akan memenuhi setengah kolam, karena setiap hari ukurannya berlipat ganda."
    },
    {
        question: "Jika kamu memiliki enam apel dan kamu mengambil empat, berapa banyak apel yang kamu miliki?",
        answers: ["Dua", "Empat", "Enam", "Sepuluh"],
        correct: 1,
        explanation: "Jika kamu mengambil empat apel dari enam apel, maka kamu memiliki empat apel."
    },
    {
        question: "Apa yang naik tetapi tidak pernah turun?",
        answers: ["Usia", "Suara", "Panas", "Langit"],
        correct: 0,
        explanation: "Usia selalu naik dan tidak pernah turun."
    },
    {
        question: "Apa yang datang sekali dalam satu menit, dua kali dalam satu momen, tetapi tidak pernah dalam seribu tahun?",
        answers: ["Huruf M", "Huruf N", "Huruf T", "Huruf Y"],
        correct: 0,
        explanation: "Huruf 'M' muncul sekali dalam 'menit', dua kali dalam 'momen', tetapi tidak pernah muncul dalam 'seribu tahun'."
    },
    {
        question: "Apa yang memiliki kunci tetapi tidak dapat membuka pintu?",
        answers: ["Peta", "Komputer", "Piano", "Lemari"],
        correct: 2,
        explanation: "Piano memiliki kunci (tuts), tetapi tidak dapat membuka pintu."
    },
    {
        question: "Apa yang harus dipecahkan sebelum bisa digunakan?",
        answers: ["Telur", "Kaca", "Kacang", "Kunci"],
        correct: 0,
        explanation: "Telur harus dipecahkan sebelum bisa digunakan."
    },
    {
        question: "Saya memiliki kota tetapi tidak memiliki rumah. Saya memiliki gunung tetapi tidak memiliki pohon. Saya memiliki air tetapi tidak ada ikan. Siapakah saya?",
        answers: ["Peta", "Buku", "Atlas", "Globe"],
        correct: 0,
        explanation: "Peta memiliki kota, gunung, dan air, tetapi tidak memiliki rumah, pohon, atau ikan."
    },
    {
        question: "Apa yang memiliki empat kaki di pagi hari, dua kaki di siang hari, dan tiga kaki di malam hari?",
        answers: ["Anjing", "Kucing", "Manusia", "Burung"],
        correct: 2,
        explanation: "Ini adalah teka-teki Sphinx. Manusia merangkak dengan empat kaki saat bayi (pagi), berjalan dengan dua kaki saat dewasa (siang), dan menggunakan tongkat di usia tua (malam)."
    },
    {
        question: "Apa yang selalu bergerak tetapi tidak pernah meninggalkan tempatnya?",
        answers: ["Jam", "Roda", "Sungai", "Jalan"],
        correct: 3,
        explanation: "Jalan selalu ada di tempat yang sama tetapi digunakan oleh kendaraan yang bergerak."
    },
    {
        question: "Apa yang lebih besar dari Tuhan, lebih jahat dari iblis, orang miskin memilikinya, orang kaya membutuhkannya, dan jika kamu memakannya kamu akan mati?",
        answers: ["Tidak ada", "Segalanya", "Cinta", "Benci"],
        correct: 0,
        explanation: "Tidak ada yang lebih besar dari Tuhan, lebih jahat dari iblis, orang miskin memilikinya, orang kaya membutuhkannya, dan jika kamu memakannya kamu akan mati."
    },
    {
        question: "Apa yang memiliki kepala, ekor, tetapi tidak memiliki tubuh?",
        answers: ["Kucing", "Koin", "Ikan", "Ular"],
        correct: 1,
        explanation: "Koin memiliki kepala dan ekor tetapi tidak memiliki tubuh."
    },
    {
        question: "Apa yang memiliki jari-jari tetapi tidak memiliki tulang?",
        answers: ["Sarung tangan", "Manusia", "Ikan", "Kayu"],
        correct: 0,
        explanation: "Sarung tangan memiliki jari-jari tetapi tidak memiliki tulang."
    },
    {
        question: "Apa yang memiliki daun tetapi tidak memiliki pohon?",
        answers: ["Buku", "Meja", "Kertas", "Kantong"],
        correct: 0,
        explanation: "Buku memiliki halaman yang disebut 'daun' tetapi tidak berasal dari pohon."
    },
    {
        question: "Apa yang memiliki kunci tetapi tidak ada pintu?",
        answers: ["Gitar", "Piano", "Biola", "Drum"],
        correct: 1,
        explanation: "Piano memiliki kunci (tuts) tetapi tidak memiliki pintu."
    },
    {
        question: "Apa yang berjalan tanpa kaki?",
        answers: ["Jam", "Air", "Angin", "Bayangan"],
        correct: 1,
        explanation: "Air bisa mengalir dan bergerak tanpa menggunakan kaki."
    },
    {
        question: "Apa yang tidak bisa dipegang meskipun sangat ringan?",
        answers: ["Kertas", "Udara", "Cahaya", "Suara"],
        correct: 1,
        explanation: "Udara tidak bisa dipegang meskipun sangat ringan."
    },
    {
        question: "Apa yang memiliki banyak lubang tetapi tetap bisa menahan air?",
        answers: ["Jaring", "Kain", "Batu", "Spons"],
        correct: 3,
        explanation: "Spons memiliki banyak lubang tetapi bisa menahan air."
    },
    {
        question: "Apa yang mengelilingi dunia tetapi tetap di satu tempat?",
        answers: ["Peta", "Jam", "Perangko", "Kompas"],
        correct: 2,
        explanation: "Perangko bisa mengelilingi dunia melalui surat, tetapi tetap di satu tempat pada surat tersebut."
    },
    {
        question: "Apa yang bisa kamu tangkap tetapi tidak bisa kamu lempar?",
        answers: ["Bola", "Dingin", "Batuk", "Kupu-kupu"],
        correct: 2,
        explanation: "Kamu bisa 'menangkap' batuk tetapi tidak bisa 'melemparnya'."
    },
    {
        question: "Apa yang akan pecah jika kamu mengatakannya?",
        answers: ["Kaca", "Telur", "Diam", "Balon"],
        correct: 2,
        explanation: "Diam akan pecah jika kamu mengatakannya."
    },
    {
        question: "Apa yang memiliki ekor dan bisa mengangguk, tetapi tidak memiliki kepala?",
        answers: ["Ular", "Kucing", "Kuda", "Perahu"],
        correct: 3,
        explanation: "Perahu memiliki ekor dan bisa mengangguk di air, tetapi tidak memiliki kepala."
    },
    {
        question: "Apa yang memiliki jari-jari tetapi tidak memiliki tangan?",
        answers: ["Sarung tangan", "Jam", "Cincin", "Manusia"],
        correct: 1,
        explanation: "Jam memiliki jarum yang disebut 'jari-jari' tetapi tidak memiliki tangan."
    },
    {
        question: "Apa yang memiliki mulut tetapi tidak bisa berbicara?",
        answers: ["Manusia", "Sungai", "Kucing", "Buku"],
        correct: 1,
        explanation: "Sungai memiliki 'mulut' tetapi tidak bisa berbicara."
    }
];

let currentQuestionIndex = 0;
let zoomLevel = 1;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const explanationElement = document.getElementById('explanation');
    const nextButton = document.getElementById('next-button');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Menghapus jawaban dan penjelasan sebelumnya
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    explanationElement.style.display = 'none';
    explanationElement.innerText = '';
    nextButton.style.display = 'none';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(index, currentQuestion.correct));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    const explanationElement = document.getElementById('explanation');
    const nextButton = document.getElementById('next-button');

    if (selectedIndex === correctIndex) {
        alert('Jawaban benar!');
    } else {
        alert('Jawaban salah!');
    }

    // Tampilkan penjelasan
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.explanation) {
        explanationElement.innerText = currentQuestion.explanation;
        explanationElement.style.display = 'block';
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Anda telah menyelesaikan tes logika, tunggu 96 jam untuk pertanyaan terupdate!');
        currentQuestionIndex = 0;
        showQuestion();
    }
}

function zoomIn() {
    zoomLevel += 0.1;
    document.getElementById('question-container').style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
    zoomLevel = Math.max(0.1, zoomLevel - 0.1);
    document.getElementById('question-container').style.transform = `scale(${zoomLevel})`;
}

showQuestion();
