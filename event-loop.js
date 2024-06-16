const one = () => console.log("One");
const two = () => setTimeout(() => console.log("Two"));
const three = () => console.log("Three");

one();
two();
three();




/* JAVASCRIPT EVENT LOOP WORKING

The output of above program is  :
    One
    Three
    Two

Reason:
    Each line in the program first moves to the call stack. the one() function execute at the call stack
    the two() fuction moves to browser api and then to the task queue waiting asynchrously.the three() finction 
    also executes in the call stack. After execution of one() and three() the two() is finally moved to call stack and
    continue its execution

Note:
    javascript is a single threaded language
    event loop components - call stack , browser api,macro task queue, micro task queue
    micro task queue has more priority than macro
    same explanation for the working of asynchronous, non-blocking nature of js



    https://www.jsv9000.app/    - event loop working visualization



    !! 
    TASK  --  setTimeout,setInterval, setImmediate, IO operation, UI rendering , HTTP request
    MICRO TASK -- Promise handlers, then() , catch() , finally() , queue microtask ,mutation observer.
*/