var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  kittens.shift(name);
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  kittens.unshift();
}

appendKitten(name)
{
  return kittens.slice(0, kittens.length, name);
}

function prependKitten(name)
{
  return [name ,... kittens]
}
