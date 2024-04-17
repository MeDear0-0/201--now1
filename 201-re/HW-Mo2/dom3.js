//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500111       Name: Pimpajee Seththirungplop
 
function init() {
    //insert your code here
    const buttonShow = document.createElement("button")
    buttonShow.addEventListener("click",showForm)
   
   const addButton = document.querySelector("body")
   addButton.appendChild(buttonShow)
   
   }
   
   function showForm() {
   //insert your code here
   const removeShow = document.querySelector("button")
   removeShow.remove()
   
   const createInput = document.createElement("input")
   createInput.setAttribute("type","text")
   createInput.setAttribute("id","textInput")
   createInput.setAttribute("placeholder","Enter text")
   
   const createDivIn = document.createElement("div")
   createDivIn.setAttribute('id','divInput')
   createDivIn.appendChild(createInput)
   
   //-----------------------------------
   
   const createTextArea = document.createElement("textarea")
   createTextArea.setAttribute('id','textArea')
   createTextArea.setAttribute('placeholder','Enter more text')
   
   const createDivText = document.createElement('div')
   createDivText.setAttribute('id','divTextArea')
   createDivText.appendChild(createTextArea)
   
   //-----------------------------------
   
   const buttonDisplay = document.createElement("button")
   buttonDisplay.setAttribute('id','displayButton')
   buttonDisplay.textContent = 'Display'
   buttonDisplay.addEventListener('click',display)
   
   //-----------------------------------
   
   const buttonClear = document.createElement('button')
   buttonClear.setAttribute('id','clearButton')
   buttonClear.textContent = 'Clear'
   buttonClear.addEventListener('click', clear)
   
   //-----------------------------------
   
   const disArea = document.createElement('div')
   disArea.setAttribute('id','displayArea')
   
   
   //-----------------------------------
   const addButton2 = document.querySelector("body")
   addButton2.appendChild(createDivIn)
   addButton2.appendChild(createDivText)
   addButton2.appendChild(buttonDisplay)
   addButton2.appendChild(buttonClear)
   addButton2.appendChild(disArea)
   }
   
   function display() {
   //insert your code here
   const inputText = document.getElementById('textInput')
   // const text = inputText.textContent
   
   const inputTextArea = document.getElementById('textArea')
   // const textArea = inputTextArea.textContent
   
   if(inputText.value.trim().length !== 0 && inputTextArea.value.trim().length !== 0){
       
       const showDisplay = document.getElementById('displayArea')
       const show = inputTextArea.value   
       showDisplay.textContent = ''
       const outShow = show 
       // + `${<h1>${textInput}</h1>}` + `${<p>${textArea}</p>}`
       showDisplay.textContent = outShow
       
   }else{
    //    const p = document.createElement('p')
    //    p.style = 'style="color: red;'
    //    p.textContent = "Error: Both input and textarea must contain text."
       
   }
   
   }
   
   function clear() {
   // insert your code here
//    const clearText = document.getElementById('clearButton')
//    const clearDisArea = document.getElementById('displayArea')
   
//    clearText.addEventListener('click', () =>{
//        const clearContent = clearDisArea.textContent
//        clearContent = ''
//    })
   
   }
   
   init();
   