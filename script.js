// подготовим пустой массив для сбора заданий
let arrayOfTask = [];

// создаем блок для хранения задания
// для сортировки
const createTaskListSort = (item) => {
    return (`
        <div class="add-task-list">
            <input class="add-task" value = ${item}>
            <button class="button-remove"></button>
        </div>
   `);
};
// для пустых input
const createTaskList = () => {
    return (`
        <div class="add-task-list">
            <input class="add-task" value = "">
            <button class="button-remove"></button>
        </div>
   `);
};

function createArrayOfTask() {
    let elemarrayOfTask = document.querySelectorAll('.add-task');
    arrayOfTask = [];
    elemarrayOfTask.forEach((item) => {
        arrayOfTask.push(item.value);
    });
    // console.log(arrayOfTask);
}

// добавляем пустую задачу
let buttonAddTask = document.querySelector('.button-add-task');
let cardDoList = document.querySelector('.card-do-list');

buttonAddTask.addEventListener("click", (event) => {

    event.preventDefault();
    cardDoList.insertAdjacentHTML("beforeend", createTaskList());

    if (arrayOfTask.length > 0) {
       
        createArrayOfTask();
        // displayTasksList();
    }
    // console.log(arrayOfTask);
    // console.log(arrayOfTask.length);
});

// удаляем задание 
document.addEventListener("click", event => {
    const removeButton = event.target.closest('.button-remove');
    if (removeButton) {
        removeButton.parentElement.remove();
        let deletedTask = removeButton.previousElementSibling.value;
        arrayOfTask = arrayOfTask.filter(item => item !== deletedTask);
    }
});

// функция для визуализации списка заданий
const displayTasksList = () => {
    cardDoList.innerHTML = '';
    if (arrayOfTask.length > 0) {
        arrayOfTask.forEach((item) => {
            cardDoList.insertAdjacentHTML("beforeend", createTaskListSort(item));
        });
    };
};

// сортировка To-Do List
const buttonSort = document.querySelector('.button-sort');
let flagSortUp = true;
// let firstClick = true;

// сортировка по алфавиту
function sortTaskAbc() {
    createArrayOfTask();
    arrayOfTask.sort();
    displayTasksList();
    buttonSort.style.backgroundImage = 'url(image/sort_up.svg)';
    buttonSort.addEventListener('mouseout', () => {
        buttonSort.style.backgroundImage = 'url(image/sort_up_light.svg)';
    });
    buttonSort.addEventListener('mouseover', () => {
        buttonSort.style.backgroundImage = 'url(image/sort_up.svg)';
    });
    flagSortUp = false;
    console.log(arrayOfTask);
};

// сортировка по убыванию
function sortTaskCba() {
    createArrayOfTask();
    arrayOfTask.reverse();
    displayTasksList();
    buttonSort.style.backgroundImage = 'url(image/sort_down.svg)';
    buttonSort.addEventListener('mouseout', () => {
        buttonSort.style.backgroundImage = 'url(image/sort_down_light.svg)';
    });
    buttonSort.addEventListener('mouseover', () => {
        buttonSort.style.backgroundImage = 'url(image/sort_down.svg)';
    });
    flagSortUp = true;
    console.log(arrayOfTask);
};

// работа кнопки сортировки
buttonSort.addEventListener('click', (event) => {
    if (flagSortUp) {
        event.preventDefault();
        sortTaskAbc();
        console.log(flagSortUp);
    } else {
        event.preventDefault();
        sortTaskCba();
        console.log(flagSortUp);
    }
});
