document.addEventListener('DOMContentLoaded', function () {
    const alphabetDisplay = document.getElementById('alphabetDisplay');
    const generateButton = document.getElementById('generateButton');
    const resetButton = document.getElementById('resetButton');

    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // ฟังก์ชันสำหรับสร้างคำอักษรแบบสุ่ม
    function generateRandomAlphabet() {
        const randomIndex = Math.floor(Math.random() * alphabets.length);
        return alphabets[randomIndex];
    }

    // ฟังก์ชันสำหรับแสดงคำอักษรแบบสุ่มบนหน้าเว็บ
    function displayRandomAlphabet() {
        const randomAlphabet = generateRandomAlphabet();
        alphabetDisplay.textContent = randomAlphabet;
    }

    // เมื่อผู้ใช้คลิกปุ่ม "Generate Alphabet" ให้แสดงคำอักษรแบบสุ่ม
    generateButton.addEventListener('click', displayRandomAlphabet);

    // เมื่อผู้ใช้คลิกปุ่ม "Reset" ให้ล้างคำอักษรที่แสดง
    resetButton.addEventListener('click', function () {
        alphabetDisplay.textContent = '';
    });
});
