const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (const [key, value] of Object.entries(collection)) {
          callback(value, key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection))
        }
      } else {
        for (const [key, value] of Object.entries(collection)) {
          newCollection.push(callback(value, key, collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let newAcc
      let newCollection
      if (Array.isArray(collection)) {
        if (acc) {
          newAcc = acc
          newCollection = [...collection]
        }
        else {
          newAcc = collection[0]
          newCollection = [...collection].slice(1)
        }

        for (let i = 0; i < newCollection.length; i++) {
          newAcc = callback(newAcc, newCollection[i], collection)
        }
      } else {
        let entries = Object.entries(collection)
        if (acc) {
          newAcc = acc
          newCollection = entries
        }
        else {
          newAcc = entries[0][1]
          newCollection = entries.slice(1)
        }

        for (const [key, value] of newCollection) {
          newAcc = callback(newAcc, value, collection)
        }
      }
      return newAcc
    },

    find: function(collection, predicate) {
      let foundValue
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            foundValue = collection[i]
            break
          }
        }
      } else {
        for (const [key, value] in Object.entries(collection)) {
          if (predicate(value)) {
            foundValue = value
            break
          }
        }
      }
      
      return foundValue
    },

    filter: function(collection, predicate) {
      let passedValues = []
      for (let e of collection) {
        if (predicate(e)) {
          passedValues.push(e)
        }
      }
      return passedValues
    },

    size: function(collection) {
      let size
      if (Array.isArray(collection)) {
        size = this.reduce(collection, (a, v, c) => a + 1, new Number(0))
      } else {
        size = this.reduce(Object.keys(collection), (a, v, c) => a + 1, new Number(0))
      }
      return size
    },

    first: function(collection, n) {
      let response
      if (n) {
        response = collection.slice(0, n)
      } else {
        response = collection[0]
      }
      return response
    },

    last: function(collection, n) {
      let response
      if (n) {
        response = collection.slice(-n)
      } else {
        response = collection.slice(-1)[0]
      }
      return response
    },

    compact: function(array) {
      return this.filter(array, e => !!e)
    },

    sortBy: function(array, callback) {
      return [...array].sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, bool) {
      let ans = []
      if (bool) {
        array.forEach(e => {
          if (Array.isArray(e)) {
            ans = ans.concat(e)
          } else {
            ans.push(e)
          }
        })
      } else {
        array.forEach(e => {
          if (Array.isArray(e)) {
            ans = ans.concat(this.flatten(e))
          } else {
            ans.push(e)
          }
        })
      }
      return ans
    },

    uniq: function(array, isSorted=false, callback) {
      callback = callback || function(e) { return e }
      let newArray = []
      function match(a, b) {
        return callback(a) == callback(b)
      }
      function matchIn(e1, arr) {
        return !!arr.reduce((m, e2) => m || match(e1, e2), false)
      }

      if (isSorted) {
        array.forEach(e => {
          if (!match(e, this.last(newArray))) {
            newArray.push(e)
          }
        })
      } else {
        array.forEach(e => {
          if (!matchIn(e, newArray)) {
            newArray.push(e)
          }
        })
      }

      return newArray
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      const newArr = []
      fi.each(object, (value, key, collection) => {
        typeof value === "function" ? newArr.push(key) : 0
      })
      return newArr
    }
  }
})()

fi.libraryMethod()
