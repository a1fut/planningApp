//POBRANIE ELEMENTOW
const toDoList = document.getElementById("toDoList");
const inProgressList = document.getElementById("inProgressList");
const doneList = document.getElementById("doneList");

const textInput = document.getElementById("toDoMessage")
const sendBtn = document.getElementById("sendButton")

function send(){   
    if(textInput.value.length > 0){
        let liElement = document.createElement("li");
        let nextBtn = document.createElement("button");
        let delBtn = document.createElement("button")

        nextBtn.innerText = "->";
        nextBtn.classList.add("next");

        delBtn.innerText = "X";
        delBtn.classList.add("del")

        console.log(nextBtn);
        console.log(delBtn);
        liElement.innerHTML = textInput.value;
        liElement.appendChild(nextBtn);
        liElement.appendChild(delBtn);
        toDoList.appendChild(liElement);
        textInput.value = "";
    }
}

sendBtn.addEventListener("click", send);
textInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        send()
    }  
});

