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

// function getCoords(anchor) {
//     let box = anchor.getBoundingClientRect();

//     return {
//         top: box.top + window.pageYOffset,
//         right: box.right + window.pageXOffset,
//         bottom: box.bottom + window.pageYOffset,
//         left: box.left + window.pageXOffset
//     };
// }

// function positionAt(anchor, position, elem) {

//     let coords = getCoords(anchor);
//     // let ttt = anchor.getBoundingClientRect();

//     switch (position) {
//         case "top-out":
//             elem.style.top = coords.top - elem.offsetHeight + "px"
//             elem.style.left = coords.left + "px"
//             break;

//         case "right-out":
//             elem.style.top = coords.top + "px"
//             elem.style.left = coords.left + anchor.clientWidth + "px"
//             break;

//         case "bottom-out":
//             elem.style.top = coords.bottom + "px"
//             elem.style.left = coords.left + "px"
//             break;

//         case "top-in":
//             elem.style.top = coords.top + "px"
//             elem.style.left = coords.left + "px"
//             break;

//         case "right-in":
//             elem.style.top = coords.top + "px"
//             elem.style.left = coords.left + anchor.clientWidth - elem.offsetWidth + "px"
//             break;

//         case "bottom-in":
//             elem.style.top = coords.bottom - elem.offsetHeight + "px"
//             elem.style.left = coords.left + "px"
//             break;
//     }

// }

// function showNote(anchor, position, html) {
//     let note = document.createElement('div');
//     note.className = "note";
//     note.innerHTML = html;
//     document.body.append(note);

//     positionAt(anchor, position, note);
// }

// // test it
// let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top-out", "note above");
// showNote(blockquote, "right-out", "note at the right");
// showNote(blockquote, "bottom-out", "note below");
// showNote(blockquote, "top-in", "note above");
// showNote(blockquote, "right-in", "note at the right");
// showNote(blockquote, "bottom-in", "note below");

// hel.onclick = function hello() {

//     alert(this)
// }




// ------------------------------------------------------

// Переместить мяч по клику на поле

// field.addEventListener("click", func)

// function func(event) {

//     let fieldCoords = this.getBoundingClientRect();

//     ball.style.top = event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 + "px";
//     ball.style.left = event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 + "px";

//     if (parseInt(ball.style.top) < 0) {
//         ball.style.top = 0 + "px"
//     }
//     if (parseInt(ball.style.left) < 0) {
//         ball.style.left = 0 + "px"
//     }
//     if (parseInt(ball.style.top) + ball.clientHeight > field.clientHeight) {
//         ball.style.top = field.clientHeight - ball.offsetHeight + "px"
//     }
//     if (parseInt(ball.style.left) + ball.clientWidth > field.clientWidth) {
//         ball.style.left = field.clientWidth - ball.offsetWidth + "px"
//     }
// }

//Создать закрывающийся и открывающийся при нажатии список
// let hony = document.querySelector(".hony");
// let name_list = document.querySelector(".name_list ");

// name_list.addEventListener("click", func_open);

// function func_open() {
//     hony.classList.toggle("open")
// }

// ---------------------------------------------------------------------
// Добавить кнопку закрытия в каждый тег р


// let remove_button = document.querySelector(".remove-button")
// let pane = document.querySelectorAll(".pane")

// for (elements of pane) {
//     elements.addEventListener("click", closesPane)
// }

// function closesPane() {
//     this.style.display = "none"
// }

// ------------------------------------------------------------------------

// Создайте карусель

// let i = 1;
// for (let li of document.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }

let slider = document.querySelector(".slider")
let carousel = document.querySelector("#carousel")
let li = document.querySelectorAll(".slider li")
let arrow_1 = document.querySelector(".arrow_1")
let arrow_2 = document.querySelector(".arrow_2")

arrow_2.addEventListener("click", goTo)
arrow_1.addEventListener("click", backTo)
let position = 0
let x = 130
let y = 3
console.log(li.length)

function goTo() {
    position -= x * y;
    position = Math.max(position, -x * (li.length - y))
    carousel.style.marginLeft = position + "px"
}

function backTo() {
    position += x * y;
    position = Math.min(position, 0)
    carousel.style.marginLeft = position + "px"
}

// ----------------------------------------------------------------------

// document.addEventListener('click', function(event) {
//     let id = event.target.dataset.toggleId;
//     if (!id) return;
//     debugger
//     let elem = document.getElementById(id);

//     elem.hidden = !elem.hidden;
// });

// --------------------------------------------------------------------------
// Делегирование событий при нажатии удалить блок

// let ggg = document.querySelector("#contain")

// ggg.addEventListener("click", function(event) {
//     if (event.target.className === "remove-button") {
//         event.target.offsetParent.style.display = "none"
//     }
// })


// --------------------------------------------------------------------------------

// Скрывать/открывать потомков


// let tree = document.querySelector(".tree")
// let ele = tree.querySelectorAll("li")
// tree.addEventListener("click", openCloses)

// for (li of ele) {
//     let span = document.createElement("span");
//     li.prepend(span)
//     span.append(span.nextSibling)
// }

// function openCloses(event) {
//     if (event.target.tagName != "SPAN") return

//     let xxx = event.target.parentNode.querySelector("ul")
//     if (!xxx) return
//     xxx.hidden = !xxx.hidden
// }

// -----------------------------------------------------------------------------------------
//Сортировка таблицы

grid.onclick = function(e) { //запускаем функцию по клику и передаем аргументом эвент
    if (e.target.tagName != 'TH') return; //если элемент по которому мы кликнули не является тегом TH пропускаем его

    let th = e.target;
    // если ячейка TH, тогда сортировать
    // cellIndex - это номер ячейки th:
    //   0 для первого столбца
    //   1 для второго и т.д.
    sortGrid(th.cellIndex, th.dataset.type); //вызываем функцию с аргументами - номер столбца и тип ячейки number или string
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody'); //обращаемся к телу таблицы

    let rowsArray = Array.from(tbody.rows); //создаем массив из строк tr

    // compare(a, b) сравнивает две строки, нужен для сортировки
    let compare;

    switch (type) { //создаем метод свич в котором выполняется одно из условий в зависимости от того что приходит в type, либо столбец с числами, либо со строками
        case 'number':
            compare = function(rowA, rowB) { //функция принимает 2 аргумента и сравнивает их между собой
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML; // значение из ячейки одной строки сравнивается с значением из другой строки в рамках одного столбца, меньшее значение откидывается в одну сторону, большее в другую и так сравниваются все значения со всеми

            };
            break;
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1; //метод сравнения для строк
            };
            break;
    }

    // сортировка
    rowsArray.sort(compare); //вызываем вышеуказанный метод сортировки

    tbody.append(...rowsArray); // вставляем перебранный массив строк обратно в таблицу
}

// ------------------------------------------------------------------------------------------------
//Добавить подсказку
let show //создаю переменную для помещения в нее выплывающей подсказки

document.body.addEventListener("mouseover", funcShow) // создаю события наведения мышкой и уход мышки с элемента
document.body.addEventListener("mouseout", funcNotShow)

function funcShow(event) {
    if (!event.target.dataset.tooltip) { // если элемент не имеет атрибут tooltip дальнейшие действия не выполняются
        return
    }
    show = document.createElement("div") // создаем элемент и размещеаем его на странице
    show.classList.add("tooltip")
    show.innerHTML = event.target.dataset.tooltip
    document.body.append(show)

    let pos = event.target.getBoundingClientRect() // позицианируем подсказку
    show.style.left = pos.left + (event.target.offsetWidth - show.offsetWidth) / 2 + "px"
    if (parseInt(show.style.left) < 0) {
        show.style.left = 0 + "px"
    }
    show.style.top = pos.top - show.offsetHeight - 5 + "px"
    if (parseInt(show.style.top) < 0) {
        show.style.top = pos.top + event.target.offsetHeight + 5 + "px"
    }
    document.body.removeEventListener("mouseover", funcShow) // отменяем событие наведения на элемент
}

function funcNotShow(event) { // создаем функцию ухода мышки с элемента
    if (event.target.dataset.tooltip) {
        show.hidden = true // если мышка покинула элемент он исчезает со страницы
        document.body.addEventListener("mouseover", funcShow) // снова создаем событие отсеживания мышки на элементе
    }
}