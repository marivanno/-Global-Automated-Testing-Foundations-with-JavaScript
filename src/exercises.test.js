import {
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
  sortMaxToMin,
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
} from './exercises.js';

describe('firstPartATT', () => {
  beforeAll(() => {
    global.console.log = jest.fn();
  });

  afterEach(() => {
    console.log.mockReset();
  });

  it('string+boolean, string+number, number+boolean etc...', () => {
    const result = {
      stringPlusBoolean: 'Stringtrue',
      stringPlusNumber: 'String42',
      stringMultiplyBoolian: NaN,
      stringMultiplyNumber: NaN,
      numberMultiplyBoolian: 0,
      stringDividBoolian: NaN,
      stringDividNumber: NaN,
      numberDividBoolian: Infinity,
    };
    expect(executeConditionalStatementsAndDataTypes()).toEqual(result);
  });
  it('getCarObject', () => {
    const car = getCarObject();
    expect(car.color).toEqual('green');
    car.power();
    expect(console.log).toBeCalledWith('700kW');
  });
  it('getFrutsCount', () => {
    expect(getFrutsCount(5, 5)).toBe(10);
    expect(getFrutsCount(5, 10)).toBe(15);
    expect(getFrutsCount(5, '5')).toBe('impossible to count');
  });
  it('findOutName', () => {
    findOutName('Peter');
    expect(console.log).toBeCalledWith('There isn\'t Peter!!!');
    findOutName('Vlasislav');
    expect(console.log).toBeCalledWith('Hello Vlasislav!!!');
  });

  it('getTypeOfArgument', () => {
    expect(getTypeOfArgument(1)).toBe('number');
    expect(getTypeOfArgument('string')).toBe('string');
    expect(getTypeOfArgument(!!1)).toBe('boolean');
  });

  it('isPrime', () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(6)).toBe(false);
  });

  it('fromArrayToConsole', () => {
    fromArrayToConsole(['Harry Potter', 'Titanic', 'Matrix']);
    expect(console.log).toBeCalledWith('Harry Potter');
    expect(console.log).toBeCalledWith('Titanic');
    expect(console.log).toBeCalledWith('Matrix');
  });

  it('makeStringAndThenMakeArray', () => {
    expect(makeStringAndThenMakeArray(['ford', 'BMW'])).toEqual(['ford', 'BMW']);
  });

  it('addWordHello', () => {
    expect(addWordHello(['Peter', 'Siri'])).toEqual(['Hello Peter', 'Hello Siri']);
  });

  it('fromNumberToBoolian', () => {
    expect(fromNumberToBoolian([0, 1, 2])).toEqual([false, true, true]);
  });

  it('sortMinToMax', () => {
    expect(sortMaxToMin([10, 5, 9, 0])).toEqual([10, 9, 5, 0]);
  });

  it('filterValue3', () => {
    expect(filterValue3([1, 2, 3, 4, 5, 6, 7])).toEqual([4, 5, 6, 7]);
  });

  it('findOutIndex', () => {
    expect(findOutIndex([1, 5, 10], 5)).toBe(1);
  });

  it('consoleLogA', () => {
    consoleLogA(12);
    expect(console.log).toBeCalledWith(12);
    expect(console.log).toBeCalledWith(11);
    expect(console.log).toBeCalledWith(10);
  });

  it('consoleLogPrime', () => {
    consoleLogPrime(10);
    expect(console.log).toBeCalledWith(2);
    expect(console.log).toBeCalledWith(3);
    expect(console.log).toBeCalledWith(5);
    expect(console.log).toBeCalledWith(7);
  });

  it('consoleLogEven', () => {
    consoleLogEven(10);
    expect(console.log).toBeCalledWith(1);
    expect(console.log).toBeCalledWith(3);
    expect(console.log).toBeCalledWith(5);
    expect(console.log).toBeCalledWith(7);
    expect(console.log).toBeCalledWith(9);
  });

  it('CatES6 and AnimalES6', () => {
    const Animal = new AnimalES6(10);
    const Cat = new AnimalES6(10);
    expect(Animal).toEqual(Cat);
    expect(Animal.move).toBe(Cat.move);
  });

  it('CatES5 and AnimalES5', () => {
    const Animal = new AnimalES5(10);
    const Cat = new AnimalES5(10);
    expect(Animal).toEqual(Cat);
    expect(Animal.move).toBe(Cat.move);
  });

  it('findeMatches1', () => {
    expect(findeMatches1('ahb acb aeb aeeb adcb axeb')).toEqual(['ahb', 'acb', 'aeb']);
  });

  it('findeMatches2', () => {
    expect(findeMatches2('2+3 223 2223')).toEqual(['2+3']);
  });

  it('consoleLogCurrentDate', () => {
    const date = new Date();
    const arrDate = date.toLocaleDateString().split('.').map((item) => item);
    consoleLogCurrentDate();
    arrDate.forEach((item) => {
      expect(console.log).toBeCalledWith(item);
    });
  });

  it('showError1', () => {
    showError1()
    expect(console.log).toBeCalledWith('Cannot access \'a\' before initialization');
  });

  it('showError1', () => {
    showError2()
    expect(console.log).toBeCalledWith('You can\'t to divid by 0');
  });
});
