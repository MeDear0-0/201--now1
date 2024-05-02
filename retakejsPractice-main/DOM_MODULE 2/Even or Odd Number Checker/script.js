document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const checkButton = document.getElementById('checkButton');
    const resultDiv = document.getElementById('result');

    // ฟังก์ชันสำหรับตรวจสอบเลขคู่หรือเลขคี่
    function checkNumber() {
        const number = parseInt(numberInput.value);

        if (isNaN(number)) {
            resultDiv.textContent = 'โปรดป้อนเลขที่ต้องการตรวจสอบ';
        } else {
            if (number % 2 === 0) {
                resultDiv.textContent = `${number} เป็นเลขคู่`;
            } else {
                resultDiv.textContent = `${number} เป็นเลขคี่`;
            }
        }
    }

    // เมื่อผู้ใช้คลิกปุ่ม "Check" ให้ทำการตรวจสอบเลข
    checkButton.addEventListener('click', checkNumber);
});
