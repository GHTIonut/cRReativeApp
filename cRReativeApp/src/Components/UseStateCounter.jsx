// import { useEffect, useState } from 'react'



// export default function Counter() {
//     const [count, setCount] = useState(() => {
//         const saved = localStorage.getItem("count");
//         if (saved) {
//             return (
//                 parseInt(saved, 10)
//         )} else {
//             return (0)
//         }
//     });
    

//     // Elementele functiei useEffect():
//     // 1. callback function;
//     // 2. dependencies.

//     // Elementele functiei setItem():
//     // 1. key - un string (numele sub care salvezi valoarea);
//     // 2. value - un string (ce salvez - se convertete in string).

//     useEffect(() => {
//         localStorage.setItem("count", count),
//         [count];
//     })

//     function increment() {setCount(count + 1)}

//     function decrement() {setCount(count - 1)}

//     function reset() {setCount(0)}

//     return (
//         <div>
//             <button onClick={decrement}>-</button>
//             <span id='counter'>{count}</span>
//             <button onClick={increment}>+</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

// }