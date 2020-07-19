const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, cb) {
      for (const x in col) {
        cb(col[x], x, col)
      }
      return col
    },

    map: function(col, cb) {
      let ncol = []
      let i=0;
      for (const x in col) {
        ncol[i] = cb(col[x], x, col)
        i++
      }
      return ncol
    },

    reduce: function(col, cb, mem) {
      let st, car
      car = Object.values(col)
      if (mem) {
        st = 0
      }
      else {
        st = 1
        mem = car[0]
      }
      for (let x = st; x<car.length; x++) {
        mem = cb(mem, car[x], col)
      }
      return mem
    },

    find: function(col, pred) {
      for (const x in col) {
        if (pred(col[x])) {return col[x]}
      }
      return undefined
    },

    filter: function(col, pred) {
      let nar = []
      for (const x in col) {
        if (pred(col[x])) {nar.push(col[x])}
      }
      return nar
    },
    
    size: function(col) {
      let i=0
      for (const x in col) {
       ++i 
      }
      return i
    },

    first: function(col, hm=1) {
      if (hm===1) { return col[0] }
      else {
        let nar = []
        for (let x=0; x<hm; x++) {
          nar.push(col[x])
        }
      return nar
      }
    },

    last: function(col, hm=1) {
      if (hm===1) {return col[col.length-1]}
      else {
        let nar = []
        for (let x=col.length-(hm); x<col.length; x++) {
          nar.push(col[x])
        }
        return nar
      }
    },

    compact: function(col) {
      let nar = []
      for (let x=0; x<col.length; x++) {
        if (col[x]) {nar.push(col[x])}
      }
      return nar
    },

    sortBy: function(col, cb) {
      let nar = Object.assign([], col)
      return nar.sort((a, b) => cb(a)-cb(b))
    },

    flatten: function(col, b = false) {
      let nar = []
      for (let x=0; x<col.length; x++) {
        if (Array.isArray(col[x])) {
          nar = b ? [...nar, ...col[x]] : [...nar, ...this.flatten(col[x])]
        }
        else nar.push(col[x])
      }
      return nar
    },

    uniq: function(col, b=false, fn = e => e) {
      let nar = []
      col = b ? col : this.sortBy(col, fn)
      for (let x=0; x<col.length; x++) {
          if (fn(col[x])!==fn(col[x+1])) { nar.push(col[x]) }
      }
      return nar
    },

    values: function(obj) {
      let nar = []
      for (const x in obj) {
        nar.push(obj[x])
      }
      return nar
    },

    keys: function(obj) {
      let nar = []
      for (const x in obj) {
        nar.push(x)
      }
      return nar
    },

    functions: function(obj) {
      debugger
      let nar = []
      for (const x in obj) {
        if (typeof(obj[x]) === "function") {nar.push(x)}
      }
      nar.sort()
      return nar
    }


  }
})()

fi.libraryMethod()
