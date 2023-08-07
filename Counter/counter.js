let firstDiv = document.createElement("div");
firstDiv.classList.add("first","d-flex" ,"flex-column", "justify-content-center");
document.body.appendChild(firstDiv);

let sampleCard = document.createElement("div");
sampleCard.classList.add("card-style","text-center","mt-200");
firstDiv.appendChild(sampleCard);

let headingElement = document.createElement("h1");
headingElement.classList.add("heading-style","mt-4");
headingElement.textContent = "Counter";
sampleCard.appendChild(headingElement);

let counterValue  = document.createElement("h1");
counterValue.textContent = 0;
sampleCard.appendChild(counterValue);

let second = document.createElement("div");
second.classList.add("second","text-center","mb-4");
sampleCard.appendChild(second);

let button1 = document.createElement("button");
button1.textContent = "Decrease";
button1.classList.add("btn","btn-primary","mr-3");
second.appendChild(button1);

let counter = 0;

function Decrease() {
    counter-=1;
    counterValue.textContent = counter;
}

button1.addEventListener("click",Decrease)

let button2 = document.createElement("button2");
button2.textContent = "Reset";
button2.classList.add("btn","btn-secondary","mr-3");
second.appendChild(button2);

function Reset() {
    counter= 0;
    counterValue.textContent = counter;
}

button2.addEventListener("click",Reset);

let button3 = document.createElement("button3");
button3.classList.add("btn","btn-danger");
button3.textContent = "Increase";
second.appendChild(button3);


function Increase() {
   counter+=1;
   counterValue.textContent = counter;
}
button3.addEventListener("click", Increase);