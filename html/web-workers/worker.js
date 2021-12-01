// 1. send postMessage(JSON) to index.html
let i = 0;
const timedCount = () => {
  i = i + 1;
  
  /*
    - postMessage() method is used to computed results back to index.html
    - messages must be JSON serializable to reach index.html,
      meaning no functions, object references, etc.
  */
  postMessage(i);

  setTimeout("timedCount()", 500);
};
timedCount();



// 2. listen from postMessage message from index.html
const handleMessage = (event) => {
  postMessage({ ...event.data, received: Date.now() });
}
addEventListener("message", handleMessage);