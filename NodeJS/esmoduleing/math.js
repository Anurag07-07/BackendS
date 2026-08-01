// esmoduleing/math.js
// Common math utilities exported as named functions.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

export function power(base, exponent) {
  return base ** exponent;
}

export function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Factorial requires a non-negative integer.');
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
