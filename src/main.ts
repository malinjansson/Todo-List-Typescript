import { toDoList } from "./models/toDoList";
import "./style.css";

const taskOne = new toDoList ("Handla mat");
const taskTwo = new toDoList ("Storstäda");
const taskThree = new toDoList ("Laga matlådor");
const taskFour = new toDoList ("Styrketräna");
const taskFive = new toDoList ("Tvätta kläder");
const taskSix = new toDoList ("Ta en promenad");
const taskSeven = new toDoList ("Middag med vänner");
const taskEight = new toDoList ("Koda en hemsida"); 

const myList: toDoList[] = [taskOne, taskTwo, taskThree, taskFour,taskFive, taskSix, taskSeven, taskEight];

const listContainer = document.getElementById ("listContainer")

for (let i = 0; i < myList.length; i++) {
    const theList = myList[i];

    const listItem = document.createElement ("li");
    const task = document.createElement ("p");
    
    task.innerHTML = theList.task;

    listItem.appendChild (task);

    if (listContainer) {
        listContainer.appendChild (listItem);
    }
}