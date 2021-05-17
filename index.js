/**
 * print string
 * @param {String} str - string to print.
 * @returns undefined
 */
export function print(str) {
    console.log(str);
  }
  
  /**
   * Check if divident can be divided without remainder
   * @param {Number} divisor - divisor.
   * @param {Number} divident - divident.
   * @returns {Boolean}
   */
  export function isMultiples(divisor, divident) {
    return divident % divisor === 0;
  }
  
  /**
   * get the fizzBuzz string
   * @returns {String}
   */
  export function getFizzBuzz() {
    const fizzBuzz = [];
    for (let num = 1; num <= 100; num++) {
      let item = "";
      item += isMultiples(3, num) ? "Fizz" : "";
      item += isMultiples(5, num) ? "Buzz" : "";
      item = item || num;
      fizzBuzz.push(item);
    }
    return fizzBuzz.join(",");
  }
  
  print(getFizzBuzz());
  