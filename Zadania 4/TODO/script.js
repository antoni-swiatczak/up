const txtInput = document.getElementById("txt");
const addBtn = document.getElementById("btn");
const mainTag = document.getElementsByTagName("main")[0];
let tasks = new Array();

const colorTasks = () => {
  const todos = document.getElementsByClassName("todo");
  for (let i = 0; i < todos.length; i++) {
    if (tasks[i].state) {
      todos[i].children[0].classList.add("done");
      todos[i].children[1].classList.add("done");
    } else {
      todos[i].children[0].classList.remove("done");
      todos[i].children[1].classList.remove("done");
    }
  }
};

addBtn.addEventListener("click", () => {
  if (txtInput.value.length != 0) {
    if (tasks.length == 0) {
      tasks.push({txt: txtInput.value, state: false });
      mainTag.innerHTML += `
        <div class="todo">
          <div class="todo-txt" onclick="markIt(this)">${txtInput.value}</div>
          <div class="todo-btn" onclick="delIt(this)"><i class="fa-solid fa-x"></i></div>
        </div>
      `;
    } else {
      let tmp = true;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].txt == txtInput.value) {
          tmp = false;
          break;
        }
      }
      if (tmp) {
        tasks.push({txt: txtInput.value, state: false });
        mainTag.innerHTML += `
          <div class="todo">
            <div class="todo-txt" onclick="markIt(this)">${txtInput.value}</div>
            <div class="todo-btn" onclick="delIt(this)"><i class="fa-solid fa-x"></i></div>
          </div>
        `;
        colorTasks();
      }
    }
    txtInput.value = "";
  }
});

const delIt = (tmp) => {
  if (tasks.length != 0) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].txt == tmp.parentElement.children[0].innerText) {
        tasks.splice(i,1);
        break;
      }
    }
    tmp.parentNode.remove();
  }
};

const markIt = (tmp) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].txt == tmp.innerText) {
      if (tasks[i].state != true) {
        tasks[i].state = true;
      } else {
        tasks[i].state = false;
      }
      break;
    }
  }
  colorTasks();
};