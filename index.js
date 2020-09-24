const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      const eachCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      for(let i = 0; i < eachCollection.length; i++) {
        callback(eachCollection[i])
      }

      return eachCollection

    },

    map: function() {

      const mapCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      let mapCollect = []

      for(let i = 0; i < mapCollection.length; i++) {
        mapCollect.push(callback(mapCollection[i]))
      }

      return mapCollect

    },

    reduce: function(c = [], callback = () => {}, acc) {
     let collection = c.slice(0)

     if (!acc) {
       acc = collection[0]
       collection = collection.slice(1)
     }
      for(let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
        if (predicate[i]) {
          return i
        }
      }
    },

    filter: function(collection, predicate) {
      let filtered = []
      for(let i = 0; i < collection.length; i++) {
        if (predicate[i]) {
          filtered.push(i)
        }
      }
      return filtered
    },

    size: function(collection) {
      return length = (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n){
      if (!n) {
        return array[0]
      } else {
        let finishedArray = []
        for(let i = 0; i < n; i++) {
          finishedArray.push(collection[i])
        }
      }
    },

    last: function(array, n) {
      if (!n) {
        return array[-1]
      } else {
        let finishedArray = []
        n = n + 1
        for(let i = 1; i < n; i++) {
          finishedArray.push(collection[-i])
        }
      }
    },

    compact: function(array) {
      let compacted = []
      for(let i = 0; i < array.length; i++) {
        // if(array[i] == false || array[i] == null || array[i] == 0 || array[i] == "" || array[i] == undefined || array[i] == NaN) {
        //   \
        // }
        if (!!array[i]) {
          compacted.push(array[i])
        }
      }
      return compacted 
    },

    sortBy: function(array, callback){
      array.sort(function(a, b){ return callback(a) - callback(b)})
    }, 

    // flatten: function (array, [shallow]) {
      
    // //   while ()
      
    // //   for(let i = 0; i < array.length; i++) {

    // //   }
    // // }

    // }

    uniq: function(array, isSorted=false, callback=false) {
      let checker;
      let finalArray = []
      for(let i = 0; i < array.length; i++) {
        checker = array[i]
        finalArray.push(checker)
        for (let j = 0; j < array.length; j++) {
          if (array[i] === checker) {
            array.splice(i, i)
          }
        }
      }
      return finalArray
    },
    
    keys: function(object) {
      const keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values
    },

    functions: function(object) {
      let functionArray = []
      for(let key in obj) {
        if (typeof obj[key] == "function") {
          functionArray.push(key)
        }
      }
      return functionArray.sort()
    }


  }
})()

fi.libraryMethod()
