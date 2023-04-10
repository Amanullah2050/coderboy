//Q1

// function addNum(num) {
//     return function(x) {
//       return x + num;
//     };
//   }
  
//   const addFive = addNum(5);
//   console.log(addFive(10)); // Output: 15
//   console.log(addFive(20)); // Output: 25



  //Q2
//   function searchArray(arr, val) {
//     // Base case: if the array is empty, return false
//     if (arr.length === 0) {
//       return false;
//     }
    
//     // Recursive case: if the first element of the array is the value we're looking for, return true
//     if (arr[0] === val) {
//       return true;
//     }
    
//     // Recursive case: otherwise, search the rest of the array (excluding the first element)
//     return searchArray(arr.slice(1), val);
//   }
  
//   const myArray = [1, 2, 3, 4, 5];
//   console.log(searchArray(myArray, 3)); // Output: true
//   console.log(searchArray(myArray, 6)); // Output: false



//Q3

// let myPara = document.getElementById("my-para")

// myPara.innerText = "Hello"

  
  

//Q4
     //function addListItem(text) {
     //let list = document.querySelector('ul'); // Get the unordered list element
     //let listItem = document.createElement('li'); // Create a new list item element
     //let itemText = document.createTextNode(text); // Create a text node with the string argument
     //listItem.appendChild(itemText); // Add the text node to the list item
     //list.appendChild(listItem); // Add the list item to the unordered list
   //}


//Q5
// let myPara = document.querySelector("p");
// myPara.innerHTML = "<b>CODING IS LIFE</b>"
// console.log(myPara);
// myPara.style.backgroundColor = "#DE3163";
// myPara.style.color = "#FFFFFF";



//Q6
  //   function saveObjectToLocalStorage(key, obj) {
  //   const json = JSON.stringify(obj);
  //   localStorage.setItem(key, json);
  // }
  //   const myObject = { name: 'Sameer', age: 21 };
  //   saveObjectToLocalStorage('my-object', myObject);
    

//Q7
// function getObjectFromLocalStorage(key) {
//     const json = localStorage.getItem(key);
//     return JSON.parse(json);
//   }
//   const myObject = getObjectFromLocalStorage('my-object');
//   console.log(myObject);
    



//Q8

// function saveObjectPropertiesToLocalStorage(obj) {
//     // Save each property to localStorage
//     for (let prop in obj) {
//       localStorage.setItem(prop, JSON.stringify(obj[prop]));
//     }
  
//     // Retrieve each property from localStorage and construct a new object
//     const newObj = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       newObj[key] = JSON.parse(localStorage.getItem(key));
//     }
  
//     return newObj;
//   }
//   const myObject = { name: 'Sameer', age: 21 };
//   const savedObject = saveObjectPropertiesToLocalStorage(myObject);
//   console.log(savedObject);



    
  
  
  








