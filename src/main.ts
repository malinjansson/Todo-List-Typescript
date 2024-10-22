import { toDoList, toDoList } from "./models/toDoList";
import "./style.scss";

const taskOne = new toDoList ("Handla mat");
const taskTwo = new toDoList ("Storstäda");
const taskThree = new toDoList ("Laga matlådor");
const taskFour = new toDoList ("Styrketräna");
const taskFive = new toDoList ("Tvätta kläder");
const taskSix = new toDoList ("Ta en promenad");
const taskSeven = new toDoList ("Middag med vänner");
const taskEight = new toDoList ("Koda en hemsida"); 

const myTasks: toDoList[] = [taskOne, taskTwo, taskThree, taskFour,taskFive, taskSix, taskSeven, taskEight];

const createTheList = (myTasks: toDoList[]) => {
    const listContainer = document.getElementById ("listContainer");

    for (let i = 0; i < myTasks.length; i++) {
        
        const listItem = document.createElement ("li");
        const task = document.createElement ("p");
        const checkedBtn = document.createElement ("button")
        checkedBtn.textContent = "X";

        task.innerHTML = myTasks[i].task;

        listItem.appendChild (task);
        listItem.appendChild (checkedBtn);

        if (listContainer) {
            listContainer.appendChild (listItem);
        }

        checkedBtn.addEventListener ("click", () => {
            if (listItem) {
                listItem.remove ();
            }
        });
    }
};

createTheList (myTasks);

