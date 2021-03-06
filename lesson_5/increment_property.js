function incrementProperty(obj, prop) {
  obj[prop] ? obj[prop] += 1 : obj[prop] = 1;
  return obj[prop];
}

let wins = {
  steve: 3,
  susie: 4,
};


console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
