const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")
const greetingElement = document.getElementById("greeting")

function updateClock() {

  const now = new Date()

  // TIME
  const time = now.toLocaleTimeString()
  timeElement.textContent = time

  // DATE
  const date = now.toDateString()
  dateElement.textContent = date

  // GREETING
  const hour = now.getHours()
let greeting = ""

if (hour >= 5 && hour < 12) {
    greeting = "Good Morning"
} else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon"
} else {
    greeting = "Good Evening"
}

greetingElement.textContent = greeting
  
}

setInterval(updateClock,1000)

updateClock()
let timer
let timeLeft = 1500

const timerElement = document.getElementById("timer")

function updateTimerDisplay(){

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  timerElement.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

document.getElementById("startBtn").onclick = () => {

  timer = setInterval(() => {

    if(timeLeft > 0){
      timeLeft--
      updateTimerDisplay()
    }

  },1000)
}

document.getElementById("stopBtn").onclick = () => {
  clearInterval(timer)
}

document.getElementById("resetBtn").onclick = () => {

  clearInterval(timer)

  timeLeft = 1500

  updateTimerDisplay()
}

updateTimerDisplay()
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks(){

  taskList.innerHTML = ""

  tasks.forEach((task,index) => {

    const li = document.createElement("li")

    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">Delete</button>
    `

    taskList.appendChild(li)
  })
}

function deleteTask(index){

  tasks.splice(index,1)

  saveTasks()

  renderTasks()
}

addTaskBtn.onclick = () => {

  const task = taskInput.value

  if(task === "") return

  // cek task duplicate
  if(tasks.includes(task)){
    alert("Task already exists!")
    return
  }

  tasks.push(task)

  saveTasks()

  renderTasks()

  taskInput.value = ""
}


renderTasks()   
const themeBtn = document.getElementById("themeBtn")

themeBtn.onclick = () => {
  document.body.classList.toggle("dark")
}
const nameInput = document.getElementById("nameInput")
const saveNameBtn = document.getElementById("saveNameBtn")

saveNameBtn.onclick = () => {

  localStorage.setItem("username", nameInput.value)

  updateClock()
}
