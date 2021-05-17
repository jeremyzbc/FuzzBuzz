import { print, isMultiples, getFizzBuzz } from ".";

console.log = jest.fn();

describe("print", () => {
  it("should console log the string", () => {
    print("str");
    expect(console.log).toBeCalledWith("str");
  });
});

describe("isMultiples", () => {
  it("should return true when remainder is 0", () => {
    expect(isMultiples(3, 300)).toEqual(true);
    expect(isMultiples(5, 100)).toEqual(true);
  });
  it("should return false when remainder is not 0", () => {
    expect(isMultiples(8, 300)).toEqual(false);
    expect(isMultiples(0, 100)).toEqual(false);
  });
});

describe("getFizzBuzz", () => {
  let subStrs = "";
  beforeAll(() => {
    const str = getFizzBuzz();
    subStrs = str.split(",");
  });
  it("should have 100 sub strings", () => {
    expect(subStrs.length).toEqual(100);
  });
  it("sub strings should be correct for random number between 1 and 100", () => {
    const times = 1000;
    for (let time = 1; time <= times; time++) {
      const number = Math.ceil(Math.random() * 100);
      if (isMultiples(3, number) && isMultiples(5, number)) {
        expect(subStrs[number - 1]).toEqual("FizzBuzz");
      } else if (isMultiples(3, number)) {
        expect(subStrs[number - 1]).toEqual("Fizz");
      } else if (isMultiples(5, number)) {
        expect(subStrs[number - 1]).toEqual("Buzz");
      } else {
        expect(subStrs[number - 1]).toEqual(`${number}`);
      }
    }
  });
});
