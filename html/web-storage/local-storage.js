/*
  Local Storage

    Stores data with no expiration date.

    Data must be stored as string (objects can be stored with JSON.stringify and retrieved with JSON.parse)
    
    Storage is per origin (domain and protocol). All pages within same origin can read and write to the same store.

    Able to store at least 5MB of data.
*/

if (typeof Storage === "undefined") {
  // check to see if local/session storage is supported by browser
} else {
  // store a string and remove it
  localStorage.setItem("name", "Charlie");
  let name = localStorage.getItem("name");
  console.log(name);
  localStorage.removeItem("name");

  // store an object
  localStorage.setItem("nameObject", JSON.stringify({ name: "Charlie" }));
  let nameObject = JSON.parse(localStorage.getItem("nameObject"));
  console.log(nameObject);
  localStorage.removeItem("nameObject");
}
