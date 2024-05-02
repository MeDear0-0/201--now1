// Function สำหรับแสดงรายละเอียดการลงทะเบียนของผู้ใช้
function showUserRegister() {
    const nameInput = document.getElementById("name").value; // ดึงค่าที่ผู้ใช้ใส่เข้ามาในช่องกรอกชื่อ
    const emailInput = document.getElementById("email").value; // ดึงค่าที่ผู้ใช้ใส่เข้ามาในช่องกรอกอีเมล

    const userRegisterDiv = document.querySelector("div:last-child"); // เลือก div ล่าสุดในเอกสาร

    const userDiv = document.createElement("div"); // สร้าง div ใหม่สำหรับข้อมูลของผู้ใช้
    userDiv.classList.add("registeredUser"); // เพิ่มคลาส CSS เพื่อสไตล์ตกแต่ง
    const paragraph = document.createElement("p"); // สร้าง <p> เพื่อแสดงข้อความ
    paragraph.textContent = "Name: " + nameInput + ", Email: " + emailInput; // กำหนดข้อความให้กับ <p> ด้วยข้อมูลที่ผู้ใช้กรอกเข้ามา
    userDiv.appendChild(paragraph); // เพิ่ม <p> เข้าไปใน div

    // สร้างปุ่ม "Delete" สำหรับผู้ใช้แต่ละคน
    const deleteButton = createDeleteButton(userDiv);
    userDiv.appendChild(deleteButton);

    userRegisterDiv.appendChild(userDiv); // เพิ่ม div ที่มีข้อมูลของผู้ใช้เข้าไปใน div สำหรับการลงทะเบียนผู้ใช้
}

// Function สำหรับสร้างปุ่ม Delete
function createDeleteButton(parentDiv) {
    const deleteButton = document.createElement("button"); // สร้าง element ปุ่ม
    deleteButton.textContent = "Delete"; // กำหนดข้อความให้กับปุ่ม
    deleteButton.classList.add("deleteButton"); // เพิ่มคลาส CSS เพื่อสไตล์ตกแต่ง
    deleteButton.addEventListener("click", deleteDiv); // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "Delete"
    return deleteButton; // คืนค่าปุ่มที่สร้างขึ้น
}

// Function สำหรับการลบข้อมูลของผู้ใช้แต่ละคน
function deleteDiv(event) {
    const divToDelete = event.target.parentNode; // ดึง div ที่มีข้อมูลของผู้ใช้
    divToDelete.remove(); // ลบ div ที่มีข้อมูลของผู้ใช้
}

// Function สำหรับการลบข้อมูลของผู้ใช้ทั้งหมด
function deleteAllUsers() {
    const userRegisterDiv = document.querySelector("div:last-child"); // เลือก div ล่าสุดในเอกสาร
    userRegisterDiv.innerHTML = ""; // ลบเนื้อหาภายใน div ทั้งหมด
}

// init() function
function init() {
    // สร้าง Elements ทั้งหมดภายใต้ <head> และ <body>
    document.title = "Registration Form"; // ตั้งชื่อหน้าเว็บ

    const body = document.body;

    // สร้าง <h2> สำหรับเรื่อง "Register"
    const heading = document.createElement("h2");
    heading.textContent = "Register";
    body.appendChild(heading);

    // สร้าง input field สำหรับชื่อเต็ม
    const nameDiv = createFormField("Full Name:", "text", "name");

    // สร้าง input field สำหรับอีเมล
    const emailDiv = createFormField("Email Address:", "email", "email");

    // สร้างปุ่ม "Register"
    const registerButton = document.createElement("button");
    registerButton.setAttribute("type", "submit");
    registerButton.textContent = "Register";
    registerButton.addEventListener("click", showUserRegister); // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "Register"
    body.appendChild(registerButton);

    // สร้างปุ่ม "Delete All"
    const deleteAllButton = document.createElement("button");
    deleteAllButton.textContent = "Delete All";
    deleteAllButton.classList.add("deleteButton"); // เพิ่มคลาส CSS เพื่อสไตล์ตกแต่ง
    deleteAllButton.addEventListener("click", deleteAllUsers); // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "Delete All"
    body.appendChild(deleteAllButton);
    

    // สร้าง <div> สำหรับแสดงผลข้อมูลที่ลงทะเบียน
    const userRegisterDiv = document.createElement("div");
    body.appendChild(userRegisterDiv);
}

// Function สำหรับสร้าง input field และ label
function createFormField(labelText, inputType, inputName) {
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.setAttribute("for", inputName);
    label.textContent = labelText;

    const input = document.createElement("input");
    input.setAttribute("type", inputType);
    input.setAttribute("id", inputName);
    input.setAttribute("name", inputName);
    input.setAttribute("required", "true");

    div.appendChild(label);
    div.appendChild(input);

    document.body.appendChild(div);

    return div;
}

// เรียกใช้ init() เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", init);
