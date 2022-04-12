/* eslint-disable prefer-template */
/* eslint-disable max-classes-per-file */
const executeConditionalStatementsAndDataTypes = () => {
  const stringPlusBoolean = 'String' + true;
  const stringPlusNumber = 'String' + 42;
  const divid = {
    stringDividBoolian: 'String' / false,
    stringDividNumber: 'String' / 42,
    numberDividBoolian: 42 / false,
  };
  const multiply = {
    stringMultiplyBoolian: 'String' * false,
    stringMultiplyNumber: 'String' * 42,
    numberMultiplyBoolian: 42 * false,
  };

  return {
    stringPlusBoolean, stringPlusNumber, ...multiply, ...divid,
  };
};

const getCarObject = () => {
  const car = { color: 'black' };
  car.color = 'green';
  car.power = () => console.log('700kW');
  return car;
};

const getFrutsCount = (apples, pears) => (typeof apples === 'number' && typeof pears === 'number' ? apples + pears : 'impossible to count');

const findOutName = (name) => {
  const savedName = 'Vlasislav';
  return name === savedName ? console.log(`Hello ${savedName}!!!`) : console.log(`There isn't ${name}!!!`);
};

const getTypeOfArgument = (arg) => typeof arg;

const isPrime = (num) => {
  if (num === 1) {
    return true;
  }
  let end = 2;
  while (num % end !== 0) {
    end += 1;
  }
  return end === num;
};

const fromArrayToConsole = (arr) => arr.forEach((film) => console.log(film));
const makeStringAndThenMakeArray = (cars) => cars.join(',').split(',');
const addWordHello = (acquaintances) => acquaintances.map((acquaintance) => `Hello ${acquaintance}`);
const fromNumberToBoolian = (arr) => arr.map((num) => !!num);
const sortMinToMax = (arr) => arr.sort((numFirst, numSecond) => numSecond - numFirst);
const filterValue3 = (arr) => arr.filter((num) => num > 3);
const findOutIndex = (arr, num) => arr.indexOf(num);
const consoleLogA = (a) => {
  let tmp = a;
  while (tmp >= 10) {
    console.log(tmp);
    tmp -= 1;
  }
};

const consoleLogPrime = (number) => {
  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

const consoleLogEven = (number) => {
  for (let i = 1; i <= number; i += 1) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

// ES6

class AnimalES6 {
  constructor(move) {
    this.move = move;
  }
}

class CatES6 extends AnimalES6 {
  constructor(move) {
    super(move);
  }

  getMove() {
    return this.move;
  }
}

function AnimalES5(move) {
  this.move = move;
}

function CatES5(move) {
  AnimalES5.apply(this, move);
  this.getMove = function () {
    return this.move;
  };
}

const findeMatches1 = (str) => str.match(/\a[\w\W]b/g);
const findeMatches2 = (str) => str.match(/2\+3/);

const consoleLogCurrentDate = () => {
  const date = new Date();
  date.toLocaleDateString().split('.').forEach((item) => console.log(item))
};

const showError1 = () => {
  try {
    console.log(a);
    let a = 3;
  } catch (error) {
    console.log(error)
  }
}

const showError2 = () => {
  try {
    const a = 1 / 0;
    throw new Error('You can\'t to divid by 0')
  } catch (error) {
    console.log(error);
  }
};

export {
  executeConditionalStatementsAndDataTypes,
  getCarObject,
  getFrutsCount,
  findOutName,
  getTypeOfArgument,
  fromArrayToConsole,
  isPrime,
  makeStringAndThenMakeArray,
  addWordHello,
  fromNumberToBoolian,
  sortMinToMax,
  filterValue3,
  findOutIndex,
  consoleLogA,
  consoleLogPrime,
  consoleLogEven,
  AnimalES6,
  AnimalES5,
  CatES5,
  CatES6,
  consoleLogCurrentDate,
  findeMatches1,
  findeMatches2,
  showError1,
  showError2,
}
