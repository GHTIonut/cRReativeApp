// import { useEffect, useState } from "react";



// export default function InputSection() {
//     function addToDo() {
//         const toDoInput = document.getElementById("toDoInput");
//         const toDoText = toDoInput.value;
//         const toDoList = document.getElementById("toDoList");
//         const listItem = document.createElement("li");

//         listItem.textContent = toDoText;
//         toDoList.appendChild(listItem);
//         toDoInput.value = "";


//     }


//     return (
//         <main id="inputContainer">
//             <section>
//                 <label htmlFor="toDoInput">Your to do:</label>
//                 <input type="text" placeholder='Example: "To buy bread." ' id="toDoInput" />
//                 <button id="addToDo" onClick={addToDo}>Add</button>
//                 <div id="toDoListContainer">
//                     <h3>Your to do list:</h3>
//                     <ul id="toDoList"></ul>
//                 </div>
//             </section>
//         </main>
//     )
// }

