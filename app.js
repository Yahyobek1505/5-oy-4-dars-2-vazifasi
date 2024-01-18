const inputText = document.getElementById("inputText");
const button = document.getElementById("button");
const tasks = document.getElementById("tasks");
function validate() {
  if (inputText.value.length == 0) {
    alert("Please enter your tasks!");
    return false;
  }
  return true;
}

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (validate()) {
      tasks.innerHTML += `<h4 class="result">${inputText.value}
    </h4>
    <button class="btn btn-danger id="delete">delete</button>
    </div>`;
    }
    let deleteButtons = document.querySelector("#delete");
    for (let  i= 0;  i< deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', function () {
        console.log("hello");
      })
      
    }
  });
