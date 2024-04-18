//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500111      Name:Pimpajee Seththirungplop
let items = [];
 
function init() {
    const inputEle = document.createElement('input')
    inputEle.setAttribute('id','itemInput')
    inputEle.setAttribute('placeholder','Enter item')
    document.body.appendChild(inputEle)

    const buttonEle1 = document.createElement('button')
    buttonEle1.setAttribute('id','addButton')
    buttonEle1.setAttribute('label','Add')
    document.body.appendChild(buttonEle1)
    buttonEle1.textContent = 'Add'
    buttonEle1.addEventListener('click', addItem)

    const buttonEle2 = document.createElement('button')
    buttonEle2.setAttribute('id','clearAllButton')
    buttonEle2.setAttribute('label','Clear All')
    buttonEle2.textContent = 'Clear All'
    document.body.appendChild(buttonEle2)
    buttonEle2.addEventListener('click', clearAll)

    const ulEle = document.createElement('ul')
    ulEle.setAttribute('id','itemList')
    document.body.appendChild(ulEle)

}
 
function addItem() {
    const item = document.getElementById('itemInput')

    
    if(item.value.trim().length !== ''){
        item.textContent = items.value
        displayItems()
        item.value = ''
    }
    
    
}

function clearAll() {
    const clear = document.getElementById('clearAllButton')
    clear.clear(liEle)
    displayItems()
}
 
function displayItems() {
    
    const clearItemList = document.getElementById('itemList')

    const liEle = document.createElement('li')
    clearItemList.appendChild(liEle)

    
    
}
 
init();
