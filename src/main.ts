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