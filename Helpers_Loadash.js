// Import lodash library
const _ = require('lodash');

// Function to calculate the sum of an array of numbers
//Implementation Of Named Function VanillaJS
function sumArray_Vanila(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
};

// Function to find the average of an array of numbers
//Implmentation Of Named Function VanillaJS
function averageArray(arr){
  if (arr.length === 0) return 0;
  return sumArray(arr) / arr.length;
};

// Function to remove duplicates from an array
//Implmentation Of Named Function VanillaJS
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Function to find the sum of an array of numbers
const sumArray = (arr) => {
  return _.sum(arr);
};

// Function to find the average of an array of numbers
const averageArray = (arr) => {
  if (_.isEmpty(arr)) return 0; // Return 0 if array is empty to avoid division by zero
  return _.sum(arr) / arr.length;
};

// Function to remove duplicates from an array
const removeDuplicates = (arr) => {
  return _.uniq(arr);
};

// Function to sort an array of numbers in ascending order
const sortAscending = (arr) => {
  return _.sortBy(arr);
};

// Function to sort an array of numbers in descending order
const sortDescending = (arr) => {
  return _.sortBy(arr).reverse();
};

// Function to update a property in objects within an array based on a condition
const updatePropertyByCondition = (arr, condition, propName, newValue) => {
  return _.map(arr, (obj) => {
    if (condition(obj)) {
      return _.set(obj, propName, newValue);
    }
    return obj;
  });
};


// Function to increment a numeric property in objects within an array
const incrementNumericProperty = (arr, propName, incrementBy = 1) => {
  return _.map(arr, (obj) => {
    if (_.isNumber(obj[propName])) {
      return _.set(obj, propName, obj[propName] + incrementBy);
    }
    return obj;
  });
};

// Function to append an item to an array property in objects within an array
const appendToArrayProperty = (arr, propName, newValue) => {
  return _.map(arr, (obj) => {
    if (_.isArray(obj[propName])) {
      return _.set(obj, propName, [...obj[propName], newValue]);
    }
    return obj;
  });
};

// Function to pluck values from objects within an array using lodash (_.map)
// Loadash After 4.0., _.Pluck is Deprecated. below is Alternative.
const pluckWithMap = (arr, propName) => {
  return _.map(arr, propName);
};

// Function to group objects in an array by a specified property
const groupByProperty = (arr, propName) => {
  return _.groupBy(arr, propName);
};

// Function to transform objects in an array
const transformObjects = (arr, transformer) => {
  return _.map(arr, transformer);
};

// Function to count occurrences of values in an array
const countOccurrences = (arr) => {
  return _.countBy(arr);
};


// Function to merge arrays of objects based on a common property
const mergeArraysByProperty = (arr1, arr2, propName) => {
  return _.mergeWith(_.keyBy(arr1, propName), _.keyBy(arr2, propName), (obj1, obj2) => ({
    ...obj1,
    ...obj2
  }));
};

// Function to sort objects in an array based on a property
const sortByProperty = (arr, propName) => {
  return _.sortBy(arr, [propName]);
};

// Function to check if at least one object in an array has a specified property
const hasProperty = (arr, propName) => {
  return _.some(arr, (obj) => _.has(obj, propName));
};

// Function to remove objects from an array based on a condition
const removeByCondition = (arr, condition) => {
  return _.reject(arr, condition);
};

const chunkArray= (array, size) => _.chunk(array, size);

const cloneDeepObject = (obj) => _.cloneDeep(obj);

const debounceFunction = (func, wait) => _.debounce(func, wait);

const mergeObjects = (obj1, obj2) => _.merge(obj1, obj2);

const getValueAtPath =(object, path, defaultValue) => _.get(object, path, defaultValue);

const setValueAtPath = (object, path, value) => _.set(object, path, value);

const getUniqueValues = (array) => _.uniq(array);

const flattenArray = (array) => _.flattenArray(array);

const orderByProperties = (collection, iteratees, orders)=>
  _.orderBy(collection, iteratees, orders);

const findElement= (collection, predicate) => _.find(collection, predicate);
  
// Exporting functions to be used in other files
 module.exports = {
  sumArray,
  averageArray,
  removeDuplicates,
  sortAscending,
  sortDescending,
  updatePropertyByCondition,
  incrementNumericProperty,
  appendToArrayProperty,
  pluckWithMap,
  groupByProperty,
  transformObjects,
  countOccurrences,
  mergeArraysByProperty,
  sortByProperty,
  hasProperty,
  removeByCondition,
  chunkArray,
  cloneDeepObject,
  debounceFunction,
  mergeObjects,
  getValueAtPath,
  setValueAtPath,
  getUniqueValues,
  flattenArray,
  orderByProperties,
  findElement
};
