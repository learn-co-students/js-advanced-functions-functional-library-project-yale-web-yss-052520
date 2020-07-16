const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: (collection, callback) => {
      let new_collection = getArray(collection);
      for (let val of new_collection){
        callback(val);
      }
      return collection;
    },

    map: (collection, callback) => {
      let new_collection = getArray(collection);
      let new_arr = []
      for (let val of new_collection){
        new_arr.push(callback(val));
      }
      return new_arr
    },

    reduce: (collection, callback, acc) => {
      let base = (!acc) ? collection[0] : acc;
      collection = (!acc) ? getArray(collection.slice(1)) : getArray(collection);      
      for (let val of collection){
        base = callback(base, val, collection)
      }
      return base;
    },
    find: (collection, predicate) => {
      collection = getArray(collection);
      for (let val of collection){
        if (predicate(val)){
          return val;
        }
      }
    },

    filter: (collection, predicate) => {
      collection = getArray(collection);
      let new_arr = [];
      for (let val of collection){
        if (predicate(val)){
          new_arr.push(val)
        }
      }
      return new_arr;
    },

    size: (collection) => {
      return getArray(collection).length;
    },

    first: (arr, n = 1) => {
      let slice = arr.slice(0, n)
      return (slice.length == 1) ? slice[0] : slice;
    },

    last: (arr, n = 1) => {
      let slice = arr.slice(-1 * n)
      return (slice.length == 1) ? slice[0] : slice;
    },

    compact: (arr) => {
      let filtered = [];
      for (let val of arr){
        if (val){
          filtered.push(val)
        }
      }
      return filtered;
    },

    sortBy: (arr, callback) => {
      return getArray(arr).sort((a, b) => {
        return callback(a) - callback(b);
      });
    },

    flatten: (arr, is_shallow = false, new_arr = []) => {
      if (!Array.isArray(arr))  {
        new_arr.push(arr);
      } else if (is_shallow){
        for (let val of arr){
          Array.isArray(val) ? subLoop(val, new_arr) : new_arr.push(val);
        }
      } else {
        for (let val of arr){
          fi.flatten(val, is_shallow, new_arr)
        }
      }
      return new_arr;
    },

    uniq: (arr, isSorted = false, callback) => {
      let ret_arr = [];
      let copy = (callback) ? fi.map(arr, callback) : arr;
      let set = new Set(copy);
      for (let val of set.values()){
        ret_arr.push(arr[copy.indexOf(val)]);
      }

      return ret_arr;
      
    },

    keys: (object) =>  {
      return Object.keys(object)
    },

    values: (object) =>  {
      return Object.values(object)
    },

    functions: (object) =>  {
      let names = [];
      for (let key in object){
        if (typeof(object[key]) === "function"){
          names.push(key)
        }
      }
      return names.sort()
    },

    

  }
})()

fi.libraryMethod()

function getArray(collection){
  return (typeof(collection) == "object") ? Object.values(collection) : [...collection];
}

function subLoop(arr, new_arr){
  for (let val of arr){
    new_arr.push(val);
  }
}

