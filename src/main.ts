import { toDoList } from "./models/toDoList";
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
localStorage.setItem("Tasks", JSON.stringify(myTasks));

const createHtml = (myTasks: toDoList[]) => {
    const listContainer = document.getElementById ("listContainer");
    
    if (listContainer) {
        listContainer.innerHTML = "";
    }

    for (let i = 0; i < myTasks.length; i++) {

        const listItem = document.createElement ("li");
        const task = document.createElement ("p");
        const checkedBtn = document.createElement ("button")

        task.innerHTML = myTasks[i].task;

        listItem.appendChild (task);
        listItem.appendChild (checkedBtn);

        if (listContainer) {
            listContainer.appendChild (listItem);
        }

        checkedBtn.addEventListener ("click", () => {
            if (listItem) {
                myTasks[i].completed = true; 
                console.log (myTasks[i]);
            }
            myTasks.splice (i, 1);
            localStorage.setItem("Tasks", JSON.stringify(myTasks));
            createHtml(myTasks);
        });
    }
};

createHtml (myTasks);


