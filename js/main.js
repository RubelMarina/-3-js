
var counter = (function () {
  var count = 0;
  return function (num) {
    count = num !== undefined ? num : count;
    return count++;
  }
}());
  console.log(counter());
  console.log(counter());
  console.log(counter(100));
  console.log(counter());
  console.log(counter(500));
  console.log(counter());
  console.log(counter(0));
  console.log(counter());
  console.log('----------');
  var counting = (function () {
    var counti = 0;
    return {
    value (num) {
     counti = num !== undefined ? num : counti;
    return counti;
      },
    increment () {
    return counti++;
    },
    decrement () {
    return counti--;
    }
}
  }());
console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value());
console.log('----------');


function myPrint(a, b, res){
 return a + '^' + b + '=' + res; 
};


function myPow (a, b, callback) {
  function Pow (x, n) {
  if (n == 1) {
  return x;
} else {
return x * Pow (x, n-1);
}
};
return callback(a, b, Pow(a, b)); 
};
 
console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint));
console.log('----------');
var car = {
  engine : 2000,
  model : 'Lacetti',
  name : 'Chevrolet',
  year : 2010,
  yearNow : 2021,
  info : fullRes,
  get used()  {
    return this.year === this.yearNow ? 'new' : 'used';
  },
  set used(value) {
    if (value === 'new' && this.year < this.yearNow) this.year = this.yearNow;
  },
};
var anathercar = {
  engine : 5000,
  model : 'FX50',
  name : 'Infinite',
  year : 2019,
  yearNow : 2021,
  info : fullRes,
  get used()  {
    return this.year === this.yearNow ? 'new' : 'used';
  },
  set used(value) {
    if (value === 'new' && this.year < this.yearNow) this.year = this.yearNow;
  },
};
function fullRes() {
  return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year ' + this.year + ', ' + this.used;
}
console.info(car.info());
car.used = 'new';
console.info(car.info());
car.used = 'used';
console.info(car.info());
console.info(anathercar.info());
car.used = 'used';
console.info(anathercar.info());
console.log('----------');
var list = [1, 8, 15, 27, 32, 150];
function myMax(arr) {
  return Math.max.apply(Math, arr);
};
console.log(myMax(list));
console.log('----------');
function myMul(a, b) {
  return a * b;
};
console.log(myMul(2, 3));
console.log('----------');
var myDouble = myMul.bind(null, 2);
console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));
console.log('----------');
var myTriple = myMul.bind(null, 3);
console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));
console.log('----------');
let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
function myUniq (arr) {
  var set = new Set();
  arr.forEach((val) => {
    set.add(val);
  });
  return set;
};
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));