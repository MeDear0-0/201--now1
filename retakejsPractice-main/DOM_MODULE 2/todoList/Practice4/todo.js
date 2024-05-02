// todo.js

// 1. init() function
function init() {
    // สร้าง input field
    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter a new task");

    // สร้างปุ่ม "Add"
    const addButton = document.createElement("button");
    addButton.textContent = "Add";

    // เพิ่ม event listener เมื่อคลิกที่ปุ่ม "Add"
    addButton.addEventListener("click", addTask);

    // เลือก div แรกและเพิ่ม input field และปุ่ม "Add" เข้าไป
    const firstDiv = document.querySelector("div:nth-child(1)");
    firstDiv.appendChild(inputField);
    firstDiv.appendChild(addButton);

    // สร้าง <ul> เพื่อเก็บรายการ tasks
    const todoList = document.createElement("ul");
    todoList.setAttribute("id", "todoList");

    // เลือก div ที่สองและเพิ่ม <ul> เข้าไป
    const secondDiv = document.querySelector("div:nth-child(2)");
    secondDiv.appendChild(todoList);
}

// 2. addTask() function
function addTask() {
    const inputField = document.querySelector("input[type='text']"); // เลือก input field
    const taskText = inputField.value.trim(); // ดึงข้อความที่ผู้ใช้ป้อนและลบช่องว่างข้างต้นและท้ายออก

    // ตรวจสอบว่าข้อความไม่เป็นค่าว่าง
    if (taskText !== "") {
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
