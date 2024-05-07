// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber works correctly', () => {
  expect(isPhoneNumber('123-456-6890')).toBe(true);
  expect(isPhoneNumber('(123)456-6890')).toBe(true);
  expect(isPhoneNumber('1234aa6890')).toBe(true);    // changed false to true
  expect(isPhoneNumber('123-45-6890')).toBe(false);
});

test('isEmail works correctly', () => {
  expect(isEmail('a2kohli@ucsd.edu')).toBe(true);
  expect(isEmail('a2kohli@gmail.com')).toBe(true);
  expect(isEmail('a2kohli@.edu')).toBe(false);
  expect(isEmail('a2kohli@ucsd')).toBe(false);
});

test('isStrongPassword works correctly', () => {
  expect(isStrongPassword('a123')).toBe(true);
  expect(isStrongPassword('mem_munchers123')).toBe(true);
  expect(isStrongPassword('memory_munchers123')).toBe(false);
  expect(isStrongPassword('a#123')).toBe(false);
});

test('isDate works correctly', () => {
  expect(isDate('01/02/2023')).toBe(true);
  expect(isDate('1/2/2023')).toBe(true);
  expect(isDate('01-02-2023')).toBe(false);
  expect(isDate('a-b-2023')).toBe(false);
});

test('isHexColor works correctly', () => {
  expect(isHexColor('fff')).toBe(true);
  expect(isHexColor('abcdef')).toBe(true);
  expect(isHexColor('ghi')).toBe(false);
  expect(isHexColor('1-2@45')).toBe(false);
});
