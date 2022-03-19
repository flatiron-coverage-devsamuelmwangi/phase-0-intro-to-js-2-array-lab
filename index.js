// Assigned an initial value of ["Milo", "Otis", "Garfield"]
let cats = ["Milo", "Otis", "Garfield"];

// Appends a cat to the end of the cats array
let destructivelyAppendCat = name => cats.push(name);

// Prepends a cat to the beginning of the cats array
let destructivelyPrependCat = name => cats.unshift(name);

// Removes the last cat from the cats array
let destructivelyRemoveLastCat = () => cats.pop();

// Removes the first cat from the cats array
let destructivelyRemoveFirstCat = () => cats.shift();

// Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
let appendCat = name => [...cats, name]

// Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
let prependCat = name => [name, ...cats]

// Removes the last cat in the cats array and returns a new array, leaving the cats array unchange
let removeLastCat = () => cats.slice(0, cats.length - 1)

// Removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
let removeFirstCat = () => cats.slice(1)
