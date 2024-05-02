document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const registeredUsersDiv = document.getElementById('registeredUsers');
    const registerButton = document.getElementById('registerButton');

    // เมื่อมีการส่งฟอร์มลงทะเบียน
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อกดปุ่ม Submit

        // รับข้อมูลจากฟอร์ม
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // สร้างอินสแตนซ์ของผู้ใช้
        const user = {
            username: username,
            email: email,
            password: password
        };

        // เรียกฟังก์ชันสำหรับแสดงผู้ใช้ที่ลงทะเบียน
        displayRegisteredUser(user);

        // ล้างฟอร์มหลังจากลงทะเบียนแล้ว
        registrationForm.reset();
    });

    // ฟังก์ชันสำหรับแสดงผู้ใช้ที่ลงทะเบียน
    function displayRegisteredUser(user) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <strong>Username:</strong> ${user.username}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Password:</strong> ${user.password}<br><br>
      `;
        registeredUsersDiv.appendChild(userDiv);
    }
});
