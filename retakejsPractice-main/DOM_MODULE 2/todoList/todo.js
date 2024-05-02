/* // todo1.js

// 1. init() function
function init() {
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addTask); // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "Add"
}

// 2. addTask() function
function addTask() {
    const inputField = document.getElementById("todoInput");
    const taskText = inputField.value; // ดึงข้อความที่ผู้ใช้ป้อนจาก input field
    if (taskText.trim() !== "") { // ตรวจสอบว่ามีข้อความที่ป้อนหรือไม่ (ไม่เป็นช่องว่างเท่านั้น)
        const todoList = document.getElementById("todoList");
        const listItem = document.createElement("li"); // สร้าง element <li>
        listItem.textContent = taskText; // กำหนดข้อความให้กับ element <li>
        todoList.appendChild(listItem); // เพิ่ม element <li> เข้าไปใน <ul> ที่มี id เป็น "todoList"
        inputField.value = ""; // เคลียร์ input field เพื่อเตรียมการป้อน Task ต่อไป
    } else {
        alert("Please enter a task!"); // แสดงข้อความแจ้งเตือนถ้าผู้ใช้ไม่ได้ป้อน Task
    }
}

// เรียกใช้ init() เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", init); */
/*-------------------------------------เมื่อเปลี่ยน html------------------------------------------------------------*/
/*เปลี่ยนโค้ด HTML และไม่สามารถเพิ่ม Task ได้ อาจเกิดจากโค้ด JavaScript ที่ไม่สามารถตรวจจับองค์ประกอบ HTML ใหม่ได้ 
โดยเฉพาะเมื่อคุณได้เปลี่ยนคลาสขององค์ประกอบ HTML เป็น .todoInput และ .addButton จากที่เดิมที่เป็น id todoInput และ addButton 
ในการเรียกใช้งานไฟล์ JavaScript todo.js ในไฟล์ HTML คุณจำเป็นต้องปรับเปลี่ยนการเรียกใช้งานองค์ประกอบด้วยคลาสใหม่ด้วยครับ.*/

/* // todo2.js
// 1. init() function
function init() {
    const addButton = document.querySelector(".addButton"); // เลือกองค์ประกอบที่มีคลาส addButton
    addButton.addEventListener("click", addTask); // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "Add"
}

// 2. addTask() function
function addTask() {
    const inputField = document.querySelector(".todoInput"); // เลือกองค์ประกอบที่มีคลาส todoInput
    const taskText = inputField.value; // ดึงข้อความที่ผู้ใช้ป้อนจาก input field
    if (taskText.trim() !== "") { // ตรวจสอบว่ามีข้อความที่ป้อนหรือไม่ (ไม่เป็นช่องว่างเท่านั้น)
        const todoList = document.getElementById("todoList");
        const listItem = document.createElement("li"); // สร้าง element <li>
        listItem.textContent = taskText; // กำหนดข้อความให้กับ element <li>
        todoList.appendChild(listItem); // เพิ่ม element <li> เข้าไปใน <ul> ที่มี id เป็น "todoList"
        inputField.value = ""; // เคลียร์ input field เพื่อเตรียมการป้อน Task ต่อไป
    } else {
        alert("Please enter a task!"); // แสดงข้อความแจ้งเตือนถ้าผู้ใช้ไม่ได้ป้อน Task
    }
}

// เรียกใช้ init() เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", init); */

/*-------------------------------------เมื่อเปลี่ยน html------------------------------------------------------------*/
/*การเปลี่ยนแปลงสำคัญคือในฟังก์ชัน init() และ addTask() ที่ใช้ document.querySelector() เพื่อเลือกองค์ประกอบที่ถูกต้อง ซึ่งเปลี่ยนจากการใช้ 
document.getElementById() ในการเลือกองค์ประกอบที่มี id ตามเดิมในโค้ด JavaScript ก่อนหน้านี้ครับ นอกจากนี้ เรายังปรับเปลี่ยนการใช้ querySelector 
ใน addTask() เพื่อให้เลือก input field อย่างถูกต้องครับ ดังนั้นโค้ดจะสามารถทำงานได้ถูกต้องกับโครงสร้าง HTML ใหม่ที่มีการเปลี่ยนแปลงไปครับ โดยใช้คลาส 
.todoInput และ .addButton แทน id ขององค์ประกอบครับ*/ 

// todo3.js
// 1. init() function
function init() {
    const addButton = document.querySelector("button"); // เลือกองค์ประกอบปุ่ม "Add"
    addButton.addEventListener("click", addTask); // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "Add"
}

// 2. addTask() function
function addTask() {
    const inputField = document.querySelector("input[type='text']"); // เลือกองค์ประกอบ input field
    const taskText = inputField.value; // ดึงข้อความที่ผู้ใช้ป้อนจาก input field
    if (taskText.trim() !== "") { // ตรวจสอบว่ามีข้อความที่ป้อนหรือไม่ (ไม่เป็นช่องว่างเท่านั้น)
        const todoList = document.getElementById("todoList");
        const listItem = document.createElement("li"); // สร้าง element <li>
        listItem.textContent = taskText; // กำหนดข้อความให้กับ element <li>
        todoList.appendChild(listItem); // เพิ่ม element <li> เข้าไปใน <ul> ที่มี id เป็น "todoList"
        inputField.value = ""; // เคลียร์ input field เพื่อเตรียมการป้อน Task ต่อไป
    } else {
        alert("Please enter a task!"); // แสดงข้อความแจ้งเตือนถ้าผู้ใช้ไม่ได้ป้อน Task
    }
}

// เรียกใช้ init() เมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", init);

