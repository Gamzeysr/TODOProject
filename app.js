

//?=========================================================
//************************SELECTOR************************ */
//?===========================================================


const addBtn = document.querySelector(".addBtn")
const input = document.querySelector("#myInput")
const myTodos = document.querySelector("#mytodos")

//?=========================================================
//************************ADD BUTTON************************ */
//?===========================================================

addBtn.addEventListener("click", () => {

  if (input.value == "") {

    alert("Please enter your task")
  }
  else {
    myTodos.innerHTML +=

      `<li class="task">
           <i class="fa-solid fa-check fa-lg"></i>
           <span class="content">${input.value}</span>
           <i class="fa-solid fa-trash"> </i>
        </li>`
    input.value = ""
    //! add butonu tıklandıktan sonra inputun içindeki değeri silinsin diye
    taskCompleted();
  }
})


//?=========================================================
//************************ENTER BUTTON************************ 
//?===========================================================

input.addEventListener("keydown", (event) => {

  if (event.key == "Enter") {
    addBtn.click();

  }
})

//TODO=========================================================
//************************CAPTURİNG************************ Bubbling
//TODO===========================================================

//! Click event tüm childlara sahip oldu
myTodos.addEventListener("click", (event) => {
  //console.log("Tıklandı")
  // console.log(event.target);
  // hedef neresi ise tıklandıgında orası gözüksün diye verdik 
  //* className tüm classları kontrol eder 👇 | classList birisi tanımlamak yeterli
  if (event.target.className == "fa-solid fa-check fa-lg")
  // DOM ÖĞESİNİN TETİKLEDİĞİNİ DÖNDÜRÜR *// 
  {
    event.target.nextElementSibling.classList.toggle("line-through")
    // tik e tıklandıgında gelecekteki elementin üstüne çizgi çek bir daha da geri al dedim
    event.target.parentElement.style.backgroundColor = "green"
    // çizgiyi çektikten sonra yeşil yap parentelemete
    event.target.parentElement.classList.toggle("done")

    event.target.style.color = "white"
    taskCompleted();
  }
  else if (event.target.classList.contains("fa-trash"))
  // eger çöp tenekesine tıklanırsa ozaman
  {


    if (event.target.previousElementSibling.classList.contains("line-through")) {
      event.target.parentElement.remove()
      taskCompleted();
    }
    else {
      alert("Task not completed...")
    }
  }
})


//?=========================================================
//************************TASK STATUS**********************
//?===========================================================

const taskCompleted = () => {

  let completedTask = 0;


  const todo_status = document.querySelector(".todo_status");

  const totalTasks = document.querySelectorAll(".task").length;
  console.log(totalTasks)

  const span = document.querySelectorAll(".task span").forEach((el) => {
    if (el.classList.contains("line-through")) {
      completedTask++
    }
  })
  todo_status.innerText = `${totalTasks} OUT OF ${completedTask} TASKS COMPLETED `


}


//?=========================================================
//************************DATE************************ */
//?===========================================================

const date = new Date()

const year = date.getFullYear();
const month = date.getMonth() + 1
const day = date.getDate()

const fullyear = `${year}/${month}/${day}`

console.log(fullyear);
document.querySelector(".date").innerText = `${fullyear}`