const list = document.querySelector("ul")
const buttonShowingAll = document.querySelector(".showing-all")
const buttonShowingServices = document.querySelector(".showing-services")
const formulario = document.querySelector(".fale-conosco")


function cliqueiNoBotao() {
    formulario.style.left = "10%";
    formulario.style.transform = "translateX(35%)";
   
}

function sumirFormulario() {
    formulario.style.left = "-420px"
  
}

function formattingValues(value) {
    const newsValues = value.toLocaleString('pt-br', {
         style: 'currency',
         currency: 'BRL',
     })
 
     return newsValues
 }

function showingAll(arrayProduct) {
    let myLi = ''

    arrayProduct.forEach((product) => {
        myLi = myLi + `
    <li>
    <img id="i" src=${product.src}>
    <h3 id="p">${product.name}</h3>
    <p id="p">${product.information}</p>
    </li>
    `
    })

    list.innerHTML = myLi
}

function showingServices(arrayProduct) {
    let myLi = ''

    arrayProduct.forEach((product) => {
        myLi = myLi + `
    <li>
    <img id="i" src=${product.src}>
    <h3 id="p">${product.name}</h3>
    <p> ${formattingValues(product.price)}</p>
    <p id="p">${product.information}</p>
    </li>
    `
    })

    list.innerHTML = myLi
}

buttonShowingAll.addEventListener('click', () => showingAll(menuCurses))
buttonShowingServices.addEventListener('click', () => showingServices(menuServices))


