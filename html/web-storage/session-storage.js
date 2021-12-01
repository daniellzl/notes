/*
  Session Storage

    Stores data for one session (data lost when browser tab closed)

    Data must be stored as string (objects can be stored with JSON.stringify and retrieved with JSON.parse)
    
    Storage is per origin (domain and protocol). All pages within same origin can read and write to the same store.

    Able to store at least 5MB of data.
*/

if (typeof Storage === "undefined") {
  // check to see if local/session storage is supported by browser
} else {
  // store a string and remove it
  sessionStorage.setItem("name", "Charlie");
  let name = sessionStorage.getItem("name");
  console.log(name);
  sessionStorage.removeItem("name");

  // store an object
  sessionStorage.setItem("nameObject", JSON.stringify({ name: "Charlie" }));
  let nameObject = JSON.parse(sessionStorage.getItem("nameObject"));
  console.log(nameObject);
  sessionStorage.removeItem("nameObject");
}