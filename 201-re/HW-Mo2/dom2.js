function init() {
    //your code here
    //head
    const titleEle = document.createElement('title')
    titleEle.textContent = 'Registration Form' 
    document.head.appendChild(titleEle)

    //body
    const hEle = document.createElement('h2')
    hEle.textContent = 'Register'
    document.body.appendChild(hEle)

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    document.body.appendChild(div1)
    document.body.appendChild(div2)
    document.body.appendChild(div3)
    document.body.appendChild(div4)

    const labelEle1 = document.createElement('label')
    labelEle1.setAttribute('for','name')
    labelEle1.textContent = 'Full Name:'
    const inputEle1 = document.createElement('input')
    inputEle1.setAttribute('type','text')
    inputEle1.setAttribute('id','name')
    inputEle1.setAttribute('name','name')
    inputEle1.setAttribute("required", "true")
    div1.appendChild(labelEle1)
    div1.appendChild(inputEle1)

    const labelEle2 = document.createElement('label')
    labelEle2.setAttribute('for','email')
    labelEle2.textContent = 'Email Address:'
    const inputEle2 = document.createElement('input')
    inputEle2.setAttribute('type','email')
    inputEle2.setAttribute('id','email')
    inputEle2.setAttribute('name','email')
    inputEle2.setAttribute("required", "true")
    div2.appendChild(labelEle2)
    div2.appendChild(inputEle2)

    const buttonEle = document.createElement('button')
    buttonEle.setAttribute('type','submit')
    buttonEle.textContent = 'Register'
    div3.appendChild(buttonEle)

    const buttonClick = document.querySelector('button')
    buttonClick.addEventListener('click', showUserRegister)
}

function showUserRegister(){
    //your code here
    const textInName = document.getElementById('name').value
    const textInEmail = document.getElementById('email').value
    
    const pEle = document.createElement('p')
    pEle.textContent = `Name: ${textInName}, Email: ${textInEmail}`
    
    const divs = document.querySelectorAll('div');
    const lastDiv = divs[divs.length - 1]
    lastDiv.appendChild(pEle)
    

}

init()