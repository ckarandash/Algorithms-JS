function fact(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

function fib(n) {
  if (n == 1 || n == 0) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function simpleSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

function binarySearch(arr, item) {
  let bottom = 0, mid, top = arr.length - 1;

  while (bottom <= top) {
    mid = Math.floor((top + bottom) / 2);

    if (arr[mid] === item) {
      return mid;
    }

    if (arr[mid] < item) {
      bottom = mid + 1;
    } else {
      top = mid - 1;
    }
  }

  return -1;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        let swap = arr[i];
        arr[i] = min;
        arr[j] = swap;
      }
    }
  }

  return arr;
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [], right = [];

  for (let item of arr) {
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function breadthInSearch() {
  let graph = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "jonny": []
  }, 
    
    queue = graph["you"],
    searched = [];

    while (queue.length) {
      let person = queue.shift();

      if (!searched.includes(person)) {
        if (someCheckFunction(person)) {
          console.log(`We found ${person}`);
          return true;
        } else {
          queue = queue.concat(graph[person]);
          searched.push(person);
        }
      }
    }

    return false;
}

function dijkstraAlgorithm() {

  let graph = {
    "start": {
      "a": 6,
      "b": 2,
    },

    "a": {
      "fin": 1,
    },

    "b": {
      "a": 3,
      "fin": 5,
    },

    "fin": {},
  },

  costs = {
    "a": 6,
    "b": 2,
    fin: Infinity,
  },

  parents = {
    "a": "start",
    "b": "start",
    "fin": undefined,
  },

  processed = [],

  findClosestNode = function() {
    let closestNode = undefined,
    lowestCost = Infinity;

    for (let node in costs) {
      let cost = costs[node];

      if (cost < lowestCost && !processed.includes(node)) {
        lowestCost = cost; 
        closestNode = node;
      }
    }

    console.log(closestNode);
    return closestNode;
  }

  let node = findClosestNode();

  while (node) {
    let cost = costs[node],
        neighbors = graph[node];
        
    for (let n of Object.keys(neighbors)) {
      let newCost = cost + neighbors[n];

      if (newCost < costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    processed.push(node);
    node = findClosestNode();
  }

  console.log(graph);
  console.log(costs);
  console.log(parents);
}