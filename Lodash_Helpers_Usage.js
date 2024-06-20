const loadashHelpers = require('./loadashHelpers');

// Example usage:
let employees = [
  { id: 1, name: 'Alice', department: 'HR' },
  { id: 2, name: 'Bob', department: 'IT' },
  { id: 3, name: 'Charlie', department: 'Finance' }
];

// Add a new property 'fullName' based on 'name'
const employeesWithFullName = transformObjects(employees, (employee) => {
  return { ...employee, fullName: `Mr/Ms ${employee.name}` };
});
console.log("Employees with full names:", employeesWithFullName);


// Example usage:
let colors = ['red', 'blue', 'red', 'green', 'blue', 'blue'];

// Count occurrences of each color
const colorOccurrences = countOccurrences(colors);
console.log("Color occurrences:", colorOccurrences);

// Example usage:
let books = [
  { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', pages: 176 },
  { title: 'Clean Code', author: 'Robert C. Martin', pages: 464 },
  { title: 'Design Patterns', author: 'Erich Gamma', pages: 395 }
];

// Sort books by 'pages'
const sortedBooks = sortByProperty(books, 'pages');
console.log("Sorted books:", sortedBooks);

// Example usage:
let cars = [
  { make: 'Toyota', model: 'Camry', year: 2020 },
  { make: 'Honda', year: 2018 }
];

// Check if cars have 'model' property
const hasModelProperty = hasProperty(cars, 'model');
console.log("Cars have 'model' property:", hasModelProperty); // Output: true

// Example usage:
let products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Tablet', price: 500 },
  { id: 4, name: 'Monitor', price: 300 }
];

// Remove products with price less than or equal to 500
const expensiveProducts = removeByCondition(products, (product) => product.price <= 500);
console.log("Expensive products:", expensiveProducts);


// Example usage:
let users_from_Here = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Pluck names from users array
const names = pluckWithMap(users_from_Here, 'name');
console.log("Names:", names); // Output: ["Alice", "Bob", "Charlie"]
  
// Example usage:
let array1 = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 }
];

let array2 = [
  { id: 1, department: 'HR' },
  { id: 2, department: 'IT' },
  { id: 3, department: 'Finance' }
];

// Merge arrays based on 'id'
const mergedArray = mergeArraysByProperty(array1, array2, 'id');
console.log("Merged array:", mergedArray);


// Example usage:
let students = [
  { id: 1, name: 'Alice', grade: 'A' },
  { id: 2, name: 'Bob', grade: 'B' },
  { id: 3, name: 'Charlie', grade: 'A' },
  { id: 4, name: 'David', grade: 'C' },
  { id: 5, name: 'Eve', grade: 'B' }
];

// Group students by grade
const groupedByGrade = groupByProperty(students, 'grade');
console.log("Students grouped by grade:", groupedByGrade);


//Example usage:
let playlists = [
  { id: 1, name: 'Chill Mix', songs: ['Song1', 'Song2'] },
  { id: 2, name: 'Workout Playlist', songs: ['Song3', 'Song4'] },
  { id: 3, name: 'Party Hits', songs: ['Song5'] }
];

// Append 'Song6' to songs array of Party Hits playlist
playlists = appendToArrayProperty(playlists, 'songs', 'Song6');
console.log("Updated playlists:", playlists);



//Example usage:
let inventory = [
  { id: 1, name: 'Widget', quantity: 10 },
  { id: 2, name: 'Gadget', quantity: 5 },
  { id: 3, name: 'Tool', quantity: 15 }
];

// Increment quantity of Widget by 5
inventory = incrementNumericProperty(inventory, 'quantity', 5);
console.log("Updated inventory:", inventory);


//Example usage:
let users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];

//Update age of user with id 2
users = updatePropertyByCondition(users, (user) => user.id === 2, 'age', 26);
console.log("Updated users:", users);

let array = [1, 2, 3, 4, 5, 6];
let chunked = _.chunk(array, 2);
console.log(chunked); // [[1, 2], [3, 4], [5, 6]]


let obj = { a: 1, b: { c: 2 } };
let clonedObj = _.cloneDeep(obj);
clonedObj.b.c = 3;
console.log(obj.b.c); // 2 (original object remains unchanged)



function logMessage() {
    console.log('Hello');
}

let debouncedLogMessage = _.debounce(logMessage, 2000);

// The logMessage function will be called after 2 seconds of no calls to debouncedLogMessage.
debouncedLogMessage();
debouncedLogMessage();
debouncedLogMessage(); // Only this call will trigger logMessage after 2 seconds.


let obj1 = { a: 1, b: { x: 2 } };
let obj2 = { b: { y: 3 }, c: 4 };

let mergedObj = _.merge(obj1, obj2);
console.log(mergedObj); // { a: 1, b: { x: 2, y: 3 }, c: 4 }



let object = { a: [{ b: { c: 3 } }] };

let value = _.get(object, 'a[0].b.c');
console.log(value); // 3

value = _.get(object, 'a[0].b.d', 'default');
console.log(value); // 'default' (default value returned since path doesn't exist)


 object = { a: [{ b: { c: 3 } }] };

_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // 4

_.set(object, 'a[0].b.d', 5);
console.log(object.a[0].b.d); // 5




array = [2, 1, 2, 3, 4, 1];

let uniqueArray = _.uniq(array);
console.log(uniqueArray); // [2, 1, 3, 4]



array = [1, [2, [3, [4]], 5]];
let flattenedArray = _.flatten(array);
console.log(flattenedArray); // [1, 2, [3, [4]], 5]


const _ = require('lodash');

users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 },
    { user: 'barney', age: 34 }
];

let sortedUsers = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
console.log(sortedUsers);
/*
[
  { user: 'barney', age: 36 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 48 },
  { user: 'fred', age: 40 }
]
*/




users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false }
];

let user = _.find(users, { age: 36, active: true });
console.log(user); // { user: 'barney', age: 36, active: true }



// Example usage:
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Original Array:", numbers);
console.log("Sum:", sumArray(numbers));
console.log("Average:", averageArray(numbers));
console.log("Array without duplicates:", removeDuplicates(numbers));
console.log("Sorted in ascending order:", sortAscending(numbers));
console.log("Sorted in descending order:", sortDescending(numbers));
