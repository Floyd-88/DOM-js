// Создаем элемент div
let div = document.createElement("div")

// Создаем класс для элемента div
div.classList = "wrapper"

// Размещаем созданный элемент внутри элемента body
let body = document.body;
body.appendChild(div)

//Создаем элемент h1
let header = document.createElement("h1")
    //Добавляем текст в созданный элемент
header.textContent = "Hello world!!!!!"
    //Вставляем элемент h1 перед элементом div
div.before(header)

//Cоздаем переменную с кодом HTML
let ul = `
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
`
    //Добавляем код HTML в тег div
div.innerHTML = ul

//Cоздаем тег img
let img = document.createElement("img")

//вставляем в тег img атрибут src со ссылкой на картинку
img.src = "https://masyamba.ru/%D0%B2%D0%B5%D1%82%D1%80%D1%8F%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/43-%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg"

//Устанавливаем значение ширины для картинки
img.width = 200

//Устанавливаем класс для созданной картинки
img.classList = "nature"

//Устававливаем alt для созданной картинки 
img.alt = "nature_house"

//Вставляем картинку внутрь элемента с классом wrapper
div.appendChild(img)

//Создаем 2 параграфа внутри div с классом parag

let parag = `
    <div class="parag">
        <p>Параграф 1</p>
        <p>Параграф 2</p>
    </div>
`
    //Размещает созданные параграфы в div с классом wrapper перед ul
let newUl = div.querySelector("ul")
newUl.insertAdjacentHTML("beforebegin", parag)

//Добавить для второго параграфа класс newParag
let twoDiv = document.querySelector(".parag")
twoDiv.children[1].classList = "newParag"

//Удаление первого параграфа
twoDiv.firstElementChild.remove()

//Создаем функцию GenerationCar()
GenerationCar = (brand, color, year) => {
    let date = new Date();
    let realYear = date.getFullYear()
    return `<div>
              <div class = "autoCar" >
                    <h2>${brand} ${year}</h2>
                    <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${realYear - year} лет</p>
                    <p>Цвет: ${color}</p>
                    <button>Удалить</button>
                </div>
            </div>`
}

//Создаем новый div с классом autors
let autors = document.createElement("div")
autors.classList.add("autors")

//Создаем массив с карточками авто
let cardList = [
    { brand: "tesla", color: "red", year: 2020 },
    { brand: "niva", color: "green", year: 2010 },
    { brand: "bmw", color: "blue", year: 2015 }
]
let Generation = cardList.map(i => {
    return GenerationCar(i.brand, i.color, i.year)
}).join("")

//Поместить созданные карточки в div с классом autors
autors.insertAdjacentHTML("afterbegin", Generation)

//Поместить div с классом autors до div с классом wrapper
div.before(autors)

//Cоздаем переменную для все кнопок удалить
let btn = document.querySelectorAll("button")

//Функция по удадению карточки
funcDelete = (e) => {
    let currentBtn = e.currentTarget;
    currentBtn.closest(".autoCar").remove()
}

//Вешаем событие на кнопку удалить
btn.forEach(i => {
    i.addEventListener("click", funcDelete)
})



console.log(Generation)