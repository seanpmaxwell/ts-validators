import { expect, test } from 'vitest';

import {
  isNulBoolArr,
  isEnumVal,
  isUndef,
  isNull,
  isNoU,
  isBool,
  isOptBool,
  isNulBool,
  isNishBool,
  isBoolArr,
  isOptBoolArr,
  isNishBoolArr,
  isNum,
  isOptNum,
  isNulNum,
  isNishNum,
  isNumArr,
  isOptNumArr,
  isNulNumArr,
  isNishNumArr,
  isStr,
  isOptStr,
  isNulStr,
  isNishStr,
  isStrArr,
  isOptStrArr,
  isNulStrArr,
  isNishStrArr,
  isDate,
  isOptDate,
  isNulDate,
  isNishDate,
  isDateArr,
  isOptDateArr,
  isNulDateArr,
  isNishDateArr,
  isObj,
  isOptObj,
  isNulObj,
  isNishObj,
  isObjArr,
  isOptObjArr,
  isNulObjArr,
  isNishObjArr,
  isFnArr,
  isOptFnArr,
  isNishFnArr,
  isNulFnArr,
  isNishFn,
  isNulFn,
  isOptFn,
  isFn,
  isColor,
  isOptColor,
  isNulColor,
  isNishColor,
  isEmail,
  isOptEmail,
  isNishEmail,
  isNulEmail,
  isAlphaNumStr,
  isOptAlphaNumStr,
  isNulAlphaNumStr,
  isNishAlphaNumStr,
  isInArr,
  isOptOrInArr,
  nonNullable,
  isBasicObj,
  checkObjEntries,
  isEnum,
  isNishEnumVal,
  isOptEnumVal,
  isNulEnumVal,
  isNishOrInArr,
  isNeStr,
  isOptNeStr,
  isNulNeStr,
  isNishNeStr,
  isRange,
  isNishRange,
  isOptRange,
  isNulRangeArr,
  isKeyOf,
  isNulKeyOfArr,
  transform,
  parse,
  parseArr,
  optParse,
  nishParseArr,
  isValidNum,
  isValidDate,
  isValidBool,
} from '../src/validators';


test('test User all default values', () => {

  enum Scopes {
    Public = 'public',
    Private = 'private',
  }

  enum ScopesAlt {
    Public,
    Private,
  }
  
  // Nullables
  expect(isUndef(undefined)).toStrictEqual(true);
  expect(isNull(null)).toStrictEqual(true);
  expect(isNoU(null)).toStrictEqual(true);
  expect(isNoU(undefined)).toStrictEqual(true);

  // Booleans
  expect(isBool(false)).toStrictEqual(true);
  expect(isBool('asdf')).toStrictEqual(false);
  expect(isOptBool(false)).toStrictEqual(true);
  expect(isOptBool(undefined)).toStrictEqual(true);
  expect(isNulBool(false)).toStrictEqual(true);
  expect(isNulBool(null)).toStrictEqual(true);
  expect(isNishBool(false)).toStrictEqual(true);
  expect(isNishBool(null)).toStrictEqual(true);
  expect(isNishBool(undefined)).toStrictEqual(true);

  // Is valid boolean
  expect(isValidBool(false)).toStrictEqual(true);
  expect(isValidBool(true)).toStrictEqual(true);
  expect(isValidBool('Yes')).toStrictEqual(true);
  expect(isValidBool('no')).toStrictEqual(true);
  expect(isValidBool('1')).toStrictEqual(true);
  expect(isValidBool('0')).toStrictEqual(true);
  expect(isValidBool(1)).toStrictEqual(true);
  expect(isValidBool(0)).toStrictEqual(true);
  expect(isValidBool('False')).toStrictEqual(true);
  expect(isValidBool('tRuE')).toStrictEqual(true);
  expect(isValidBool(1234)).toStrictEqual(false);
  expect(isValidBool(undefined)).toStrictEqual(false);

  // Boolean Arrays
  expect(isBoolArr([false, true, false])).toStrictEqual(true);
  expect(isBoolArr([false, true, 'asdf'])).toStrictEqual(false);
  expect(isBoolArr(true)).toStrictEqual(false);
  expect(isOptBoolArr([false, true, false])).toStrictEqual(true);
  expect(isOptBoolArr(undefined)).toStrictEqual(true);
  expect(isNulBoolArr([false, true, false])).toStrictEqual(true);
  expect(isNulBoolArr(null)).toStrictEqual(true);
  expect(isNishBoolArr([false, true, false])).toStrictEqual(true);
  expect(isNishBoolArr(null)).toStrictEqual(true);
  expect(isNishBoolArr(undefined)).toStrictEqual(true);

  // Numbers
  expect(isNum(123)).toStrictEqual(true);
  expect(isNum(false)).toStrictEqual(false);
  expect(isOptNum(123)).toStrictEqual(true);
  expect(isOptNum(undefined)).toStrictEqual(true);
  expect(isNulNum(123)).toStrictEqual(true);
  expect(isNulNum(null)).toStrictEqual(true);
  expect(isNishNum(123)).toStrictEqual(true);
  expect(isNishNum(null)).toStrictEqual(true);
  expect(isNishNum(undefined)).toStrictEqual(true);

  // Valid numbers
  expect(isValidNum('123')).toStrictEqual(true);

  // Number Arrays
  expect(isNumArr([1, 2, 3])).toStrictEqual(true);
  expect(isNumArr([false, true, '123'])).toStrictEqual(false);
  expect(isNumArr(123)).toStrictEqual(false);
  expect(isOptNumArr([1, 2 ,3])).toStrictEqual(true);
  expect(isOptNumArr(undefined)).toStrictEqual(true);
  expect(isNulNumArr([1, 2, 3])).toStrictEqual(true);
  expect(isNulNumArr(null)).toStrictEqual(true);
  expect(isNishNumArr([1, 2, 3])).toStrictEqual(true);
  expect(isNishNumArr(null)).toStrictEqual(true);
  expect(isNishNumArr(undefined)).toStrictEqual(true);

  // Ranges
  const isValidAge = isRange(18, 130);
  expect(isValidAge(123)).toStrictEqual(true);
  expect(isValidAge(5)).toStrictEqual(false);
  expect(isValidAge(150)).toStrictEqual(false);
  const isPos = isNishRange(0, null);
  expect(isPos(1_000_000)).toStrictEqual(true);
  expect(isPos(-1)).toStrictEqual(false);
  expect(isPos(undefined)).toStrictEqual(true);
  expect(isPos(null)).toStrictEqual(true);
  const isNeg = isOptRange(null, -.000001);
  expect(isNeg(-1_000_000)).toStrictEqual(true);
  expect(isNeg(.01)).toStrictEqual(false);
  expect(isNeg(undefined)).toStrictEqual(true);
  expect(isNeg(null)).toStrictEqual(false);
  const isValidNums = isNulRangeArr(-1, 10);
  expect(isValidNums([-1, 2, 3])).toStrictEqual(true);
  expect(isValidNums([-1, 11, 3])).toStrictEqual(false);
  expect(isValidNums([-1, null, 3])).toStrictEqual(false);
  expect(isValidNums(2)).toStrictEqual(false);
  expect(isValidNums(null)).toStrictEqual(true);

  // Strings
  expect(isStr('123')).toStrictEqual(true);
  expect(isStr(false)).toStrictEqual(false);
  expect(isOptStr('123')).toStrictEqual(true);
  expect(isOptStr(undefined)).toStrictEqual(true);
  expect(isNulStr('123')).toStrictEqual(true);
  expect(isNulStr(null)).toStrictEqual(true);
  expect(isNishStr('123')).toStrictEqual(true);
  expect(isNishStr(null)).toStrictEqual(true);
  expect(isNishStr(undefined)).toStrictEqual(true);

  // Non-Empty Strings
  expect(isNeStr('123')).toStrictEqual(true);
  expect(isNeStr('')).toStrictEqual(false);
  expect(isOptNeStr('123')).toStrictEqual(true);
  expect(isOptNeStr(undefined)).toStrictEqual(true);
  expect(isNulNeStr('123')).toStrictEqual(true);
  expect(isNulNeStr(null)).toStrictEqual(true);
  expect(isNishNeStr('123')).toStrictEqual(true);
  expect(isNishNeStr('')).toStrictEqual(false);
  expect(isNishNeStr(null)).toStrictEqual(true);
  expect(isNishNeStr(undefined)).toStrictEqual(true);

  // String Arrays
  expect(isStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isStrArr(['false', '123', true])).toStrictEqual(false);
  expect(isStrArr('123')).toStrictEqual(false);
  expect(isOptStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isOptStrArr(undefined)).toStrictEqual(true);
  expect(isNulStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isNulStrArr(null)).toStrictEqual(true);
  expect(isNishStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isNishStrArr(null)).toStrictEqual(true);
  expect(isNishStrArr(undefined)).toStrictEqual(true);

  // Date
  const D1 = new Date();
  expect(isDate(D1)).toStrictEqual(true);
  expect(isDate(false)).toStrictEqual(false);
  expect(isOptDate(D1)).toStrictEqual(true);
  expect(isOptDate(undefined)).toStrictEqual(true);
  expect(isNulDate(D1)).toStrictEqual(true);
  expect(isNulDate(null)).toStrictEqual(true);
  expect(isNishDate(D1)).toStrictEqual(true);
  expect(isNishDate(null)).toStrictEqual(true);
  expect(isNishDate(undefined)).toStrictEqual(true);

  // Valid Dates
  expect(isValidDate(1731195800809)).toStrictEqual(true);
  expect(isValidDate('2024-11-09T23:43:58.788Z')).toStrictEqual(true);
  expect(isValidDate('2024-111-09T23:43:58.788Z')).toStrictEqual(false);
  expect(isValidDate(12341234123412342)).toStrictEqual(false);

  // Date Arrays
  const D2 = new Date(), D3 = new Date();
  expect(isDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isDateArr([D1, D2, '2024-10-30T20:08:36.838Z'])).toStrictEqual(false);
  expect(isDateArr(D1)).toStrictEqual(false);
  expect(isOptDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isOptDateArr(undefined)).toStrictEqual(true);
  expect(isNulDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isNulDateArr(null)).toStrictEqual(true);
  expect(isNishDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isNishDateArr(null)).toStrictEqual(true);
  expect(isNishDateArr(undefined)).toStrictEqual(true);

  // Obj
  const O1 = { val: 1 };
  expect(isObj(O1)).toStrictEqual(true);
  expect(isObj(false)).toStrictEqual(false);
  expect(isOptObj(O1)).toStrictEqual(true);
  expect(isOptObj(undefined)).toStrictEqual(true);
  expect(isNulObj(O1)).toStrictEqual(true);
  expect(isNulObj(null)).toStrictEqual(true);
  expect(isNishObj(O1)).toStrictEqual(true);
  expect(isNishObj(null)).toStrictEqual(true);
  expect(isNishObj(undefined)).toStrictEqual(true);

  // Obj Arrays
  const O2 = { val: 2 }, O3 = { val: 3 };
  expect(isObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isObjArr([O1, O2, '2024-10-30T20:08:36.838Z'])).toStrictEqual(false);
  expect(isObjArr(O1)).toStrictEqual(false);
  expect(isOptObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isOptObjArr(undefined)).toStrictEqual(true);
  expect(isNulObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isNulObjArr(null)).toStrictEqual(true);
  expect(isNishObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isNishObjArr(null)).toStrictEqual(true);
  expect(isNishObjArr(undefined)).toStrictEqual(true);

  // Functions
  const F1 = () => 1;
  expect(isFn(F1)).toStrictEqual(true);
  expect(isFn(false)).toStrictEqual(false);
  expect(isOptFn(F1)).toStrictEqual(true);
  expect(isOptFn(undefined)).toStrictEqual(true);
  expect(isNulFn(F1)).toStrictEqual(true);
  expect(isNulFn(null)).toStrictEqual(true);
  expect(isNishFn(F1)).toStrictEqual(true);
  expect(isNishFn(null)).toStrictEqual(true);
  expect(isNishFn(undefined)).toStrictEqual(true);

  // Function Arrays
  const F2 = () => 2, F3 = () => 3;
  expect(isFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isFnArr([F1, F2, '2024-10-30T20:08:36.838Z'])).toStrictEqual(false);
  expect(isFnArr(F1)).toStrictEqual(false);
  expect(isOptFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isOptFnArr(undefined)).toStrictEqual(true);
  expect(isNulFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isNulFnArr(null)).toStrictEqual(true);
  expect(isNishFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isNishFnArr(null)).toStrictEqual(true);
  expect(isNishFnArr(undefined)).toStrictEqual(true);

  // Color
  expect(isColor('#ffffff')).toStrictEqual(true);
  expect(isColor('asdf')).toStrictEqual(false);
  expect(isOptColor('#ffffff')).toStrictEqual(true);
  expect(isOptColor(undefined)).toStrictEqual(true);
  expect(isNulColor('#ffffff')).toStrictEqual(true);
  expect(isNulColor(null)).toStrictEqual(true);
  expect(isOptColor('#ffffff')).toStrictEqual(true);
  expect(isNishColor(undefined)).toStrictEqual(true);
  expect(isNishColor(null)).toStrictEqual(true);
  expect(isNishColor(undefined)).toStrictEqual(true);

  // Email
  expect(isEmail('a@a.com')).toStrictEqual(true);
  expect(isEmail('asdf')).toStrictEqual(false);
  expect(isOptEmail('a@a.com')).toStrictEqual(true);
  expect(isOptEmail(undefined)).toStrictEqual(true);
  expect(isNulEmail('a@a.com')).toStrictEqual(true);
  expect(isNulEmail(null)).toStrictEqual(true);
  expect(isOptEmail('a@a.com')).toStrictEqual(true);
  expect(isNishEmail(undefined)).toStrictEqual(true);
  expect(isNishEmail(null)).toStrictEqual(true);
  expect(isNishEmail(undefined)).toStrictEqual(true);

  // Is Alpha-Numeric String
  expect(isAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isAlphaNumStr('#ffffff')).toStrictEqual(false);
  expect(isOptAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isOptAlphaNumStr(undefined)).toStrictEqual(true);
  expect(isNulAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isNulAlphaNumStr(null)).toStrictEqual(true);
  expect(isOptAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isNishAlphaNumStr(undefined)).toStrictEqual(true);
  expect(isNishAlphaNumStr(null)).toStrictEqual(true);
  expect(isNishAlphaNumStr(undefined)).toStrictEqual(true);

  // This will make the type '1' | '2' | '3' instead of just string[]
  const arr = ['1', '2', '3'] as const;
  // const check = isOptOrInArr(arr)

  // Is in Array
  expect(isInArr(arr)('1')).toStrictEqual(true);
  expect(isInArr(arr)(1)).toStrictEqual(false);
  expect(isOptOrInArr(arr)('1')).toStrictEqual(true);
  expect(isOptOrInArr(arr)(undefined)).toStrictEqual(true);
  expect(isNishOrInArr(arr)(undefined)).toStrictEqual(true);
  
  // Enums
  expect(isEnumVal(Scopes)('public')).toStrictEqual(true);
  expect(isEnumVal(ScopesAlt)(1)).toStrictEqual(true);
  expect(isEnumVal(ScopesAlt)('private')).toStrictEqual(false);
  expect(isEnum(Scopes)).toStrictEqual(true);
  expect(isEnum(ScopesAlt)).toStrictEqual(true);
  expect(isOptEnumVal(ScopesAlt)(undefined)).toStrictEqual(true);
  expect(isNulEnumVal(ScopesAlt)(null)).toStrictEqual(true);
  expect(isNishEnumVal(ScopesAlt)(null)).toStrictEqual(true);
  expect(isNishEnumVal(ScopesAlt)(1)).toStrictEqual(true);

  // Non-Nullable
  expect(nonNullable(isNulStr)('asdf')).toStrictEqual(true);
  expect(nonNullable(isNulStr)(null)).toStrictEqual(false);
  expect(nonNullable(isNulStr)(undefined)).toStrictEqual(false);

  // Is Basic Object
  expect(isBasicObj({ a: 1, b: 2, c: 3 })).toStrictEqual(true);
  expect(isBasicObj([1, 2, 3])).toStrictEqual(false);

  // Check Object entries GOOD
  expect(checkObjEntries({ a: 1, b: 2, c: 3 }, (key, val) => {
    return isStr(key) && isNum(val);
  })).toStrictEqual(true);

  // Check Object entries BAD
  expect(checkObjEntries({ a: 1, b: 2, c: 'asdf' }, (key, val) => {
    return isStr(key) && isNum(val);
  })).toStrictEqual(false);

  // Check transform function
  const isNumArrWithParse = transform(JSON.parse, isNumArr);
  expect(isNumArrWithParse('[1,2,3]', val => {
    expect(isNumArr(val)).toStrictEqual(true);
  })).toStrictEqual(true);

  // Check is key of Object
  const someObject = {
    foo: 'bar',
    bada: 'bing',
  } as const;

  const isKeyofSomeObject = isKeyOf(someObject);
  expect(isKeyofSomeObject('foo')).toStrictEqual(true);
  expect(isKeyofSomeObject('bada')).toStrictEqual(true);
  expect(isKeyofSomeObject('bing')).toStrictEqual(false);
  const isKeyofSomeObjectArr = isNulKeyOfArr(someObject);
  expect(isKeyofSomeObjectArr(['bada', 'foo'])).toStrictEqual(true);
  expect(isKeyofSomeObjectArr(null)).toStrictEqual(true);
  expect(isKeyofSomeObjectArr(['bar', 'foo', 'bing'])).toStrictEqual(false);
});


test('test "parse" function', () => {

  // Basic Test
  const parseUser = parse({
    id: transform(Number, isNum),
    name: isStr,
  }); 
  const user = parseUser({
    id: '5',
    name: 'john',
    email: '--',
  });
  const userBad = parseUser({
    idd: '5',
    name: 'john',
    email: '--',
  });
  expect(user).toStrictEqual({ id: 5, name: 'john' });
  expect(userBad).toStrictEqual(undefined);

  // Parse optional arg
  const parseOptUser = optParse({
    id: isNum,
    name: isStr,
  });
  const optUser = parseOptUser({
    id: 15,
    name: 'joe',
    email: '--',
  });
  const optUser2 = parseOptUser(undefined);
  expect(optUser).toStrictEqual({ id: 15, name: 'joe' });
  expect(optUser2).toStrictEqual(undefined);

  // Array Test
  const userArr = [user, { id: 1, name: 'a' }, { id: 2, name: 'b' }],
    userArrBad = [user, { id: 1, name: 'a' }, { idd: 2, name: 'b' }];
  // Normal array test
  const parseUserArr = parseArr({
    id: isNum,
    name: isStr,
  });
  const parsedUserArr = parseUserArr(userArr),
    parsedUserArrBad = parseOptUser(userArrBad);
  expect(userArr).toStrictEqual(parsedUserArr);
  expect(parsedUserArrBad).toStrictEqual(undefined);
  // Nullish or array
  const parseNishUserArr = nishParseArr({
    id: isNum,
    name: isStr,
  });
  const parsedNishUserArr = parseNishUserArr(null);
  expect(parsedNishUserArr).toStrictEqual(null);
  const parsedNishUserArr2 = parseNishUserArr(userArr);
  expect(parsedNishUserArr2).toStrictEqual(userArr);

  // Nested Object Test (Good)
  const parseUserWithAddr = parse({
    id: isNum,
    name: isStr,
    address: {
      city: isStr,
      zip: isNum,
    },
  });
  const userWithAddr = parseUserWithAddr({
    id: 5,
    name: 'john',
    address: {
      city: 'seattle',
      zip: 98111,
    },
  });
  expect(userWithAddr).toStrictEqual({
    id: 5,
    name: 'john',
    address: {
      city: 'seattle',
      zip: 98111,
    },
  });
  expect(userWithAddr.address.zip).toBe(98111);

  // Nested Object Test (Bad)
  const userWithAddrBad = parseUserWithAddr({
    id: 5,
    name: 'john',
    address: {
      city: 'seattle',
      zip: '98111',
    },
  });
  expect(userWithAddrBad).toBe(undefined);

  // Test parse "onError" function
  const parseUserWithError = parse({
    id: isNum,
    name: isStr,
  },  (prop, value) => {
    expect(prop).toStrictEqual('id');
    expect(value).toStrictEqual('5');
  });
  parseUserWithError({
    id: '5',
    name: 'john',
  });

  // Test parse "onError" function for array argument
  const parseUserArrWithError = parseArr({
    id: isNum,
    name: isStr,
  }, (prop, value, index) => {
    expect(prop).toStrictEqual('id');
    expect(value).toStrictEqual('3');
    expect(index).toStrictEqual(2);
  });
  parseUserArrWithError([
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: '3', name: '3' },
    { id: 3, name: '3' },
  ]);
});
