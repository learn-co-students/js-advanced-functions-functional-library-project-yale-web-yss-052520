//Immediately Invoked Function Expression
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      //to avoid side effects, we will copy the collection & convert object to array of values 
      const toBeIterated = Array.isArray(collection) ? [...collection] : Object.values(collection)
      for (let i = 0; i < toBeIterated.length; i++) {
        callback(toBeIterated[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection)
      let newArr = []
      for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]))
      }
      return newArr 
    },

    reduce: function(c, callback, acc) {
      let collection = c.slice(0)
      let slice = 0; 

      //case when initial value is not passed 
      if (!acc) {
        acc = collection[0]
        slice = 1 
      }
      
      for (let i = slice; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc 
    },

    find: function(collection, predicate) {
      collection = (Array.isArray(collection)) ? collection : Object.values(collection)
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }
      return undefined
    }, 

    filter: function(collection, predicate) {
      let newArr = [] 
      collection = (Array.isArray(collection)) ? collection : Object.values(collection)
      for (let i = 0;  i < collection.length; i++) {
        if (predicate(collection[i])) newArr.push(collection[i])
      }
      return newArr 
    },

    size: function(collection) {
      let size = Array.isArray(collection) ? collection.length : Object.values(collection).length
      return size 
    }, 

    first: function(arr, n = 0) {
      if (n === 0) return arr[0]
      return arr.slice(0, n)
    }, 

    last: function(arr, n = 0) {
      if (n === 0) return arr[arr.length - 1]
      return arr.slice(-n)
    }, 

    compact: function(arr) {
      let newArr = [] 
      
      for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]) newArr.push(arr[i])
      }
      return newArr 
    }, 
    
    //sort by value of callback function
    sortBy: function(arr, callback) {
      let copy = [...arr]
      return copy.sort(function(a, b) {return callback(a) - callback(b)})
    }, 

    flatten: function(arr, shallow = false, newArr = []) {
      if (shallow) {
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            for (let item of arr[i]) {
              newArr.push(item)
            }
          }
          else {
            newArr.push(arr[i])
          }
        }
      }

      //completely flattens the entire array - combination of recursion & iteration 
      //base case: not an array --> append onto the final flattened array
      else {
        if (!Array.isArray(arr)) newArr.push(arr) 
        else {
          for (let item of arr) {
            this.flatten(item, false, newArr)
          }
        }
      }
      return newArr
    },


    uniqSorted: function(arr) {
      //create a new array that is considered both sorted and unique 
      let sortedAndUnique = arr[0]
      for (let i = 1; i < arr.length; i++) {
        //just has to check the entry right before it since already sorted 
        if (sortedAndUnique[i - 1] !== arr[i]) {
          sortedAndUnique.push(arr[i])
        }
      return sortedAndUnique
      }
    },

    //the Set in Javascript: Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
    // convert Set object to an Array object, with Array.from. can also use spread operator
    uniq: function(arr, isSorted = false, callback=false) {
      if (isSorted) {
        return fi.uniqSorted(arr)
      }
      else if (!callback) {
        //using the Set data structure which only contains unique elements 
        return [...new Set(arr)]
      }
      else {
        let returnArray = []
        for (let item of arr) {
          console.log(callback(item))
          if (!returnArray.map(item => callback(item)).includes(callback(item))) returnArray.push(item) 
        }
        return returnArray
      }
    }, 
    keys: function(obj) {
      let keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys 
    }, 

    values: function(obj) {
      let values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values 
    }, 

    functions: function(obj) {
      let functions = [] 
      for (let key in obj) {
        if (typeof obj[key] === 'function') functions.push(key)
      }
      return functions
    }
  }
})()

fi.libraryMethod()
