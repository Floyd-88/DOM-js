// // Создаем элемент div
// let div = document.createElement("div")

// // Создаем класс для элемента div
// div.classList = "wrapper"

// // Размещаем созданный элемент внутри элемента body
// let body = document.body;
// body.appendChild(div)

// //Создаем элемент h1
// let header = document.createElement("h1")
//     //Добавляем текст в созданный элемент
// header.textContent = "Hello world!!!!!"
//     //Вставляем элемент h1 перед элементом div
// div.before(header)

// //Cоздаем переменную с кодом HTML
// let ul = `
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
// `
//     //Добавляем код HTML в тег div
// div.innerHTML = ul

// //Cоздаем тег img
// let img = document.createElement("img")

// //вставляем в тег img атрибут src со ссылкой на картинку
// img.src = "https://masyamba.ru/%D0%B2%D0%B5%D1%82%D1%80%D1%8F%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/43-%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg"

// //Устанавливаем значение ширины для картинки
// img.width = 200

// //Устанавливаем класс для созданной картинки
// img.classList = "nature"

// //Устававливаем alt для созданной картинки 
// img.alt = "nature_house"

// //Вставляем картинку внутрь элемента с классом wrapper
// div.appendChild(img)

// //Создаем 2 параграфа внутри div с классом parag

// let parag = `
//     <div class="parag">
//         <p>Параграф 1</p>
//         <p>Параграф 2</p>
//     </div>
// `
//     //Размещает созданные параграфы в div с классом wrapper перед ul
// let newUl = div.querySelector("ul")
// newUl.insertAdjacentHTML("beforebegin", parag)

// //Добавить для второго параграфа класс newParag
// let twoDiv = document.querySelector(".parag")
// twoDiv.children[1].classList = "newParag"

// //Удаление первого параграфа
// twoDiv.firstElementChild.remove()

// //Создаем функцию GenerationCar()
// GenerationCar = (brand, color, year) => {
//     let date = new Date();
//     let realYear = date.getFullYear()
//     return `<div>
//               <div class = "autoCar" >
//                     <h2>${brand} ${year}</h2>
//                     <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${realYear - year} лет</p>
//                     <p>Цвет: ${color}</p>
//                     <button>Удалить</button>
//                 </div>
//             </div>`
// }

// //Создаем новый div с классом autors
// let autors = document.createElement("div")
// autors.classList.add("autors")

// //Создаем массив с карточками авто
// let cardList = [
//     { brand: "tesla", color: "red", year: 2020 },
//     { brand: "niva", color: "green", year: 2010 },
//     { brand: "bmw", color: "blue", year: 2015 }
// ]
// let Generation = cardList.map(i => {
//     return GenerationCar(i.brand, i.color, i.year)
// }).join("")

// //Поместить созданные карточки в div с классом autors
// autors.insertAdjacentHTML("afterbegin", Generation)

// //Поместить div с классом autors до div с классом wrapper
// div.before(autors)

// //Cоздаем переменную для все кнопок удалить
// let btn = document.querySelectorAll("button")

// //Функция по удадению карточки
// funcDelete = (e) => {
//     let currentBtn = e.currentTarget;
//     currentBtn.closest(".autoCar").remove()
// }

// //Вешаем событие на кнопку удалить
// btn.forEach(i => {
//     i.addEventListener("click", funcDelete)
// })


// // ------------------------------------------


// //Создаем 3 элементa div
// let num_0 = document.createElement("div");
// let num_1 = document.createElement("div");
// let num_2 = document.createElement("div");

// //Добавляем классы созданным элементам
// num_0.classList.add("counter_0")
// num_1.classList.add("counter_1_2")
// num_2.classList.add("counter_1_2")

// //Назначаем css свойства для созданных классов
// num_0.style.cssText = "display: flex; flex-direction: column; align-items: center; padding-top: 40px"
// num_1.style.cssText = "padding-bottom: 20px; font-size: 30px"
// num_2.style.cssText = "padding-bottom: 20px; font-size: 30px"

// //указываем значение для созданных элементов
// num_1.innerHTML = 460560
// num_2.innerHTML = 0

// //Вставляем num_0 после элемента с классом autors
// autors.after(num_0)

// //Вставляем данные элементы num_1 и num_2 в num_0 
// num_0.append(num_1);
// num_0.append(num_2);

// //Функция которая уменьшает num_1 и увеличивает num_2
// let funcNum = () => {
//     if (num_1.innerHTML >= 6000) {
//         num_1.innerHTML = num_1.innerHTML - 5000;
//         num_2.innerHTML = +num_2.innerHTML + 5000;
//     } else if (num_1.innerHTML <= 6000 && num_1.innerHTML >= 100) {
//         num_1.innerHTML = num_1.innerHTML - 10;
//         num_2.innerHTML = +num_2.innerHTML + 10;
//     } else {
//         num_1.innerHTML = num_1.innerHTML - 1;
//         num_2.innerHTML = +num_2.innerHTML + 1;
//     }
//     if (num_1.innerHTML <= 0) {
//         clearInterval(timer)
//         btnNumBack.disabled = false;

//     }
// }

// let interval = () => {
//     timer = setInterval(funcNum, 10)
//     btnNum.disabled = true;
//     btnNumBack.disabled = true;

// }

// //Создаем кнопку которая запускает funcNum
// let btnNum = document.createElement("button")
// btnNum.innerHTML = "Вперед!!!"
// num_0.append(btnNum)
// btnNum.addEventListener("click", interval)

// //Функция которая увеличивает num_1 и уменьшает num_2
// const numСonstant = num_1.textContent;
// console.log(numСonstant)

// let funcNumBack = () => {
//     if (num_1.innerHTML <= +numСonstant - 6000) {
//         num_1.innerHTML = +num_1.innerHTML + 5000;
//         num_2.innerHTML = +num_2.innerHTML - 5000;
//     } else if (num_1.innerHTML >= +numСonstant - 6000 && num_1.innerHTML <= +numСonstant - 100) {
//         num_1.innerHTML = +num_1.innerHTML + 10;
//         num_2.innerHTML = +num_2.innerHTML - 10;
//     } else {
//         num_1.innerHTML = +num_1.innerHTML + 1;
//         num_2.innerHTML = +num_2.innerHTML - 1;
//     }
//     if (num_1.innerHTML >= +numСonstant) {
//         clearInterval(timerBack)
//         btnNum.disabled = false;
//     }
// }

// let intervalBack = () => {
//     timerBack = setInterval(funcNumBack, 10)
//     btnNum.disabled = true;
//     btnNumBack.disabled = true;
// }

// //Создаем кнопку которая запускает funcNum в обратном направлении
// let btnNumBack = document.createElement("button")
// btnNumBack.disabled = true;
// btnNumBack.disabled = true;
// btnNumBack.innerHTML = "Назад!!!"
// num_0.append(btnNumBack)
// btnNumBack.addEventListener("click", intervalBack)


// // ------------------------------------

// let hello = document.createElement("p")
// hello.textContent = "HELLO!!!"
// hello.style.cssText = "display: ''; position: absolute; font-size: 30px; color: red; top: 10px; right:10px"
// document.body.append(hello)

// let timer = setTimeout(() => {
//     hello.style.display = "none"
// }, 1500)

// // ----------------------------------------

// //Расчитать высоту содержимого от низа блока до прокрутки
// let topHeight = document.querySelector(".topHeight")
// console.log(topHeight.scrollHeight - topHeight.scrollTop - topHeight.clientHeight)

// // --------------------------------------------

// //Поместить мяч при помощи js в центер поля


// ball.onload = function() {
//     let leftBall = field.clientWidth / 2
//     let topBall = field.clientHeight / 2
//     ballWidth = ball.clientWidth / 2
//     ball.style.left = leftBall - ballWidth + "px"
//     ball.style.top = topBall - ballWidth + "px"
// }

// // ----------------------------------------------------

// //Найти координаты краев поля
// document.onclick = function(e) { // показывает координаты точки клика
//     coords.innerHTML = e.clientX + ':' + e.clientY;
// };

// let res = field2.getBoundingClientRect();

// console.log(res.left + ":" + res.top)
// console.log(`${res.left + field2.clientLeft} : ${res.top + field2.clientTop}`)
// console.log(res.right + ":" + res.bottom)
// console.log(`${res.right - field2.clientLeft} : ${res.bottom - field2.clientTop}`)


// ---------------------------------------------------------

function getCoords(anchor) {
    let box = anchor.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function positionAt(anchor, position, elem) {

    let coords = getCoords(anchor);
    // let ttt = anchor.getBoundingClientRect();

    switch (position) {
        case "top-out":
            elem.style.top = coords.top - elem.offsetHeight + "px"
            elem.style.left = coords.left + "px"
            break;

        case "right-out":
            elem.style.top = coords.top + "px"
            elem.style.left = coords.left + anchor.clientWidth + "px"
            break;

        case "bottom-out":
            elem.style.top = coords.bottom + "px"
            elem.style.left = coords.left + "px"
            break;

        case "top-in":
            elem.style.top = coords.top + "px"
            elem.style.left = coords.left + "px"
            break;

        case "right-in":
            elem.style.top = coords.top + "px"
            elem.style.left = coords.left + anchor.clientWidth - elem.offsetWidth + "px"
            break;

        case "bottom-in":
            elem.style.top = coords.bottom - elem.offsetHeight + "px"
            elem.style.left = coords.left + "px"
            break;
    }

}

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note above");
showNote(blockquote, "right-in", "note at the right");
showNote(blockquote, "bottom-in", "note below");