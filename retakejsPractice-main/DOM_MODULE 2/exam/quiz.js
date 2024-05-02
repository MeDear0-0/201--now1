//Write your student id, firstname, and lastname in a single line comment before startingyour program
//students who do not put this comment will get 50% taken off their score.
//ID: Name:

import { getRandomQuiz } from './quizQuestions.js';

// ฟังก์ชันสำหรับเริ่มต้นค่าในการทำคำถาม
function init() {
    // ดึงอิลิเมนต์เมนู
    const menu = document.getElementById('menu');
    
    // สร้างปุ่ม "New Quiz"
    const newQuizButton = document.createElement('button');
    newQuizButton.textContent = 'New Quiz';
    newQuizButton.addEventListener('click', generateQuiz);
    
    // สร้างปุ่ม "Clear Quiz"
    const clearQuizButton = document.createElement('button');
    clearQuizButton.textContent = 'Clear Quiz';
    clearQuizButton.addEventListener('click', clearQuiz);
    
    // เพิ่มปุ่มทั้งสองลงในเมนู
    menu.appendChild(newQuizButton);
    menu.appendChild(clearQuizButton);
}

// ฟังก์ชันสำหรับสร้างคำถาม
function generateQuiz() {
    // ล้างคำถามและคำตอบที่มีอยู่
    clearQuiz();
    
    // สุ่มคำถาม
    const randomQuiz = getRandomQuiz();
    
    // ดึงคอนเทนเนอร์ของคำถาม
    const quizContainer = document.getElementById('quizContainer');
    
    // สร้างอิลิเมนต์คำถาม
    const questionDiv = document.createElement('div');
    questionDiv.id = 'question';
    
    // กำหนดข้อความคำถาม
    const questionText = document.createElement('p');
    questionText.textContent = randomQuiz.question;
    questionDiv.appendChild(questionText);
    
    // เพิ่มตัวเลือก
    randomQuiz.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.style.margin = '5px';
        optionButton.addEventListener('click', () => checkAnswer(option, randomQuiz));
        questionDiv.appendChild(optionButton);
    });
    
    // ผนวกอิลิเมนต์คำถามลงในคอนเทนเนอร์คำถาม
    quizContainer.appendChild(questionDiv);
}

// ฟังก์ชันสำหรับล้างคำถาม
function clearQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    const answerDiv = document.querySelector('.answer');
    if (answerDiv) {
        answerDiv.innerHTML = '';
    }
}

// ฟังก์ชันสำหรับตรวจสอบคำตอบ
function checkAnswer(option, randomQuiz) {
    const answerDiv = document.querySelector('.answer');
    // ลบข้อความเก่าทั้งหมดออก
    answerDiv.innerHTML = '';
    const answerMessage = document.createElement('p');
    if (option === randomQuiz.answer) {
        answerMessage.textContent = 'ถูกต้อง';
    } else {
        answerMessage.textContent = 'ผิด';
    }
    answerDiv.appendChild(answerMessage);
}

// เรียกใช้ฟังก์ชัน init เมื่อหน้าเว็บโหลดเสร็จ
window.onload = init;

