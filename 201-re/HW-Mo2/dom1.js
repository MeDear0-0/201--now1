function init() {
    //your code here
    const add = document.getElementById("addButton")
    add.addEventListener('click',addTask)


}

function addTask() {
    //your code here
    const inputText = document.getElementById("todoInput")
    const input = inputText.value

    if (input !== '') {
        const list = document.createElement('li')
    list.textContent = input

    const ulEle = document.getElementById("todoList")
    ulEle.appendChild(list)
    inputText.value = ''
    }

}
    
init()