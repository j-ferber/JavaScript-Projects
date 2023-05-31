// to change color of background icon container add event listener to check mark for hover and add class to icon continer

let tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
let completedArray = JSON.parse(localStorage.getItem('completed')) || [];

const check = document.querySelector('.js-check');
const iconBackground = document.querySelector('.js-icon-container');
const input = document.querySelector('.js-task-name');
const taskList = document.querySelector('.js-task-list');
const completedTaskList = document.querySelector('.js-completed-tasks');
const trashIconContainer = document.querySelector('.js-trash-icon-container');
const trashIcon = document.querySelector('.js-trash');

check.addEventListener('mouseover', (event) => {
  iconBackground.classList.add('background-brown');
});
check.addEventListener('mouseout', (event) => {
  iconBackground.classList.remove('background-brown');
});
check.addEventListener('click', (event) => {
  if (input.value.trim()) {
    addToElementToArray();
    createList();
  };
});

const addToElementToArray = () => {
  tasksArray.push(input.value);
  input.value = '';
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

const createList = () => {
  taskList.innerHTML = '';
  tasksArray.forEach((index, indexa) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('add-task-row-2');
    newDiv.innerHTML = `<div class="wrap-text">${index}</div><div class="task-icon-container"><div class="icon-container margin-right js-icon-container-complete-${indexa}"><i class="fa-circle-check fa-regular js-complete"></i></div><div class="icon-container js-icon-container-xmark-${indexa}"><i class="fa-xmark fa-solid js-remove"></i></div></div>`;
    taskList.append(newDiv);
  });
  const removeButtons = document.querySelectorAll('.js-remove');
  removeButtons.forEach((removeMark, index) => {
    removeMark.addEventListener('click', (event) => {
      tasksArray.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      createList();
    });
    removeMark.addEventListener('mouseover', () => {
      const removeIconContainer = document.querySelector(`.js-icon-container-xmark-${index}`);
      removeIconContainer.classList.add('background-brown');
    });
    removeMark.addEventListener('mouseout', () => {
      const removeIconContainer = document.querySelector(`.js-icon-container-xmark-${index}`);
      removeIconContainer.classList.remove('background-brown');
    });
  });
  const completeButtons = document.querySelectorAll('.js-complete');
  completeButtons.forEach((completeIcon, index) => {
    completeIcon.addEventListener('click', () => {
      completedArray.push(tasksArray[index]);
      localStorage.setItem('completed', JSON.stringify(completedArray));
      tasksArray.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      createList();
      createCompletedList();
    });
    completeIcon.addEventListener('mouseover', () => {
      const completeIconContainer = document.querySelector(`.js-icon-container-complete-${index}`);
      completeIconContainer.classList.add('background-brown');
    });
    completeIcon.addEventListener('mouseout', () => {
      const completeIconContainer = document.querySelector(`.js-icon-container-complete-${index}`);
      completeIconContainer.classList.remove('background-brown');
    });
  });
};

const createCompletedList = () => {
  completedTaskList.innerHTML = '';
  completedArray.forEach(task => {
    let newCompDiv = document.createElement('div');
    newCompDiv.classList.add('completed-task-list');
    newCompDiv.innerText = task;
    completedTaskList.append(newCompDiv);
  });
  trashIconContainer.style.display = 'flex';
};

if (tasksArray.length > 0) {
  createList();
};
if (completedArray.length > 0) {
  trashIconContainer.style.display = 'flex';
  createCompletedList();
};

trashIcon.addEventListener('mouseover', () => {
  trashIconContainer.classList.add('background-brown');
});
trashIcon.addEventListener('mouseout', () => {
  trashIconContainer.classList.remove('background-brown');
});
trashIcon.addEventListener('click', () => {
  completedArray = [];
  localStorage.removeItem('completed');
  completedTaskList.innerHTML = '';
  trashIconContainer.style.display = 'none';
});