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
  isOptNulBool,
  isBoolArr,
  isOptBoolArr,
  isOptNulBoolArr,
  isNum,
  isOptNum,
  isNulNum,
  isOptNulNum,
  isNumArr,
  isOptNumArr,
  isNulNumArr,
  isOptNulNumArr,
  isStr,
  isOptStr,
  isNulStr,
  isOptNulStr,
  isStrArr,
  isOptStrArr,
  isNulStrArr,
  isOptNulStrArr,
  isDate,
  isOptDate,
  isNulDate,
  isOptNulDate,
  isDateArr,
  isOptDateArr,
  isNulDateArr,
  isOptNulDateArr,
  isObj,
  isOptObj,
  isNulObj,
  isOptNulObj,
  isObjArr,
  isOptObjArr,
  isNulObjArr,
  isOptNulObjArr,
  isFnArr,
  isOptFnArr,
  isOptNulFnArr,
  isNulFnArr,
  isOptNulFn,
  isNulFn,
  isOptFn,
  isFn,
  isColor,
  isOptColor,
  isNulColor,
  isOptNulColor,
  isEmail,
  isOptEmail,
  isOptNulEmail,
  isNulEmail,
  isAlphaNumStr,
  isOptAlphaNumStr,
  isNulAlphaNumStr,
  isOptNulAlphaNumStr,
  isInArr,
  isOptOrInArr,
  nonNullable,
  isBasicObj,
  checkObjEntries,
  isEnum,
  isOptNulEnumVal,
  isOptEnumVal,
  isNulEnumVal,
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
  expect(isOptNulBool(false)).toStrictEqual(true);
  expect(isOptNulBool(null)).toStrictEqual(true);
  expect(isOptNulBool(undefined)).toStrictEqual(true);

  // Boolean Arrays
  expect(isBoolArr([false, true, false])).toStrictEqual(true);
  expect(isBoolArr([false, true, 'asdf'])).toStrictEqual(false);
  expect(isBoolArr(true)).toStrictEqual(false);
  expect(isOptBoolArr([false, true, false])).toStrictEqual(true);
  expect(isOptBoolArr(undefined)).toStrictEqual(true);
  expect(isNulBoolArr([false, true, false])).toStrictEqual(true);
  expect(isNulBoolArr(null)).toStrictEqual(true);
  expect(isOptNulBoolArr([false, true, false])).toStrictEqual(true);
  expect(isOptNulBoolArr(null)).toStrictEqual(true);
  expect(isOptNulBoolArr(undefined)).toStrictEqual(true);

  // Numbers
  expect(isNum(123)).toStrictEqual(true);
  expect(isNum(false)).toStrictEqual(false);
  expect(isOptNum(123)).toStrictEqual(true);
  expect(isOptNum(undefined)).toStrictEqual(true);
  expect(isNulNum(123)).toStrictEqual(true);
  expect(isNulNum(null)).toStrictEqual(true);
  expect(isOptNulNum(123)).toStrictEqual(true);
  expect(isOptNulNum(null)).toStrictEqual(true);
  expect(isOptNulNum(undefined)).toStrictEqual(true);

  // Number Arrays
  expect(isNumArr([1, 2, 3])).toStrictEqual(true);
  expect(isNumArr([false, true, '123'])).toStrictEqual(false);
  expect(isNumArr(123)).toStrictEqual(false);
  expect(isOptNumArr([1, 2 ,3])).toStrictEqual(true);
  expect(isOptNumArr(undefined)).toStrictEqual(true);
  expect(isNulNumArr([1, 2, 3])).toStrictEqual(true);
  expect(isNulNumArr(null)).toStrictEqual(true);
  expect(isOptNulNumArr([1, 2, 3])).toStrictEqual(true);
  expect(isOptNulNumArr(null)).toStrictEqual(true);
  expect(isOptNulNumArr(undefined)).toStrictEqual(true);

  // Strings
  expect(isStr('123')).toStrictEqual(true);
  expect(isStr(false)).toStrictEqual(false);
  expect(isOptStr('123')).toStrictEqual(true);
  expect(isOptStr(undefined)).toStrictEqual(true);
  expect(isNulStr('123')).toStrictEqual(true);
  expect(isNulStr(null)).toStrictEqual(true);
  expect(isOptNulStr('123')).toStrictEqual(true);
  expect(isOptNulStr(null)).toStrictEqual(true);
  expect(isOptNulStr(undefined)).toStrictEqual(true);

  // String Arrays
  expect(isStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isStrArr(['false', '123', true])).toStrictEqual(false);
  expect(isStrArr('123')).toStrictEqual(false);
  expect(isOptStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isOptStrArr(undefined)).toStrictEqual(true);
  expect(isNulStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isNulStrArr(null)).toStrictEqual(true);
  expect(isOptNulStrArr(['1', '2', '3'])).toStrictEqual(true);
  expect(isOptNulStrArr(null)).toStrictEqual(true);
  expect(isOptNulStrArr(undefined)).toStrictEqual(true);

  // Date
  const D1 = new Date();
  expect(isDate(D1)).toStrictEqual(true);
  expect(isDate(false)).toStrictEqual(false);
  expect(isOptDate(D1)).toStrictEqual(true);
  expect(isOptDate(undefined)).toStrictEqual(true);
  expect(isNulDate(D1)).toStrictEqual(true);
  expect(isNulDate(null)).toStrictEqual(true);
  expect(isOptNulDate(D1)).toStrictEqual(true);
  expect(isOptNulDate(null)).toStrictEqual(true);
  expect(isOptNulDate(undefined)).toStrictEqual(true);

  // Date Arrays
  const D2 = new Date(), D3 = new Date();
  expect(isDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isDateArr([D1, D2, '2024-10-30T20:08:36.838Z'])).toStrictEqual(false);
  expect(isDateArr(D1)).toStrictEqual(false);
  expect(isOptDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isOptDateArr(undefined)).toStrictEqual(true);
  expect(isNulDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isNulDateArr(null)).toStrictEqual(true);
  expect(isOptNulDateArr([D1, D2, D3])).toStrictEqual(true);
  expect(isOptNulDateArr(null)).toStrictEqual(true);
  expect(isOptNulDateArr(undefined)).toStrictEqual(true);

  // Obj
  const O1 = { val: 1 };
  expect(isObj(O1)).toStrictEqual(true);
  expect(isObj(false)).toStrictEqual(false);
  expect(isOptObj(O1)).toStrictEqual(true);
  expect(isOptObj(undefined)).toStrictEqual(true);
  expect(isNulObj(O1)).toStrictEqual(true);
  expect(isNulObj(null)).toStrictEqual(true);
  expect(isOptNulObj(O1)).toStrictEqual(true);
  expect(isOptNulObj(null)).toStrictEqual(true);
  expect(isOptNulObj(undefined)).toStrictEqual(true);

  // Obj Arrays
  const O2 = { val: 2 }, O3 = { val: 3 };
  expect(isObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isObjArr([O1, O2, '2024-10-30T20:08:36.838Z'])).toStrictEqual(false);
  expect(isObjArr(O1)).toStrictEqual(false);
  expect(isOptObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isOptObjArr(undefined)).toStrictEqual(true);
  expect(isNulObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isNulObjArr(null)).toStrictEqual(true);
  expect(isOptNulObjArr([O1, O2, O3])).toStrictEqual(true);
  expect(isOptNulObjArr(null)).toStrictEqual(true);
  expect(isOptNulObjArr(undefined)).toStrictEqual(true);

  // Functions
  const F1 = () => 1;
  expect(isFn(F1)).toStrictEqual(true);
  expect(isFn(false)).toStrictEqual(false);
  expect(isOptFn(F1)).toStrictEqual(true);
  expect(isOptFn(undefined)).toStrictEqual(true);
  expect(isNulFn(F1)).toStrictEqual(true);
  expect(isNulFn(null)).toStrictEqual(true);
  expect(isOptNulFn(F1)).toStrictEqual(true);
  expect(isOptNulFn(null)).toStrictEqual(true);
  expect(isOptNulFn(undefined)).toStrictEqual(true);

  // Function Arrays
  const F2 = () => 2, F3 = () => 3;
  expect(isFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isFnArr([F1, F2, '2024-10-30T20:08:36.838Z'])).toStrictEqual(false);
  expect(isFnArr(F1)).toStrictEqual(false);
  expect(isOptFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isOptFnArr(undefined)).toStrictEqual(true);
  expect(isNulFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isNulFnArr(null)).toStrictEqual(true);
  expect(isOptNulFnArr([F1, F2, F3])).toStrictEqual(true);
  expect(isOptNulFnArr(null)).toStrictEqual(true);
  expect(isOptNulFnArr(undefined)).toStrictEqual(true);

  // Color
  expect(isColor('#ffffff')).toStrictEqual(true);
  expect(isColor('asdf')).toStrictEqual(false);
  expect(isOptColor('#ffffff')).toStrictEqual(true);
  expect(isOptColor(undefined)).toStrictEqual(true);
  expect(isNulColor('#ffffff')).toStrictEqual(true);
  expect(isNulColor(null)).toStrictEqual(true);
  expect(isOptColor('#ffffff')).toStrictEqual(true);
  expect(isOptNulColor(undefined)).toStrictEqual(true);
  expect(isOptNulColor(null)).toStrictEqual(true);
  expect(isOptNulColor(undefined)).toStrictEqual(true);

  // Email
  expect(isEmail('a@a.com')).toStrictEqual(true);
  expect(isEmail('asdf')).toStrictEqual(false);
  expect(isOptEmail('a@a.com')).toStrictEqual(true);
  expect(isOptEmail(undefined)).toStrictEqual(true);
  expect(isNulEmail('a@a.com')).toStrictEqual(true);
  expect(isNulEmail(null)).toStrictEqual(true);
  expect(isOptEmail('a@a.com')).toStrictEqual(true);
  expect(isOptNulEmail(undefined)).toStrictEqual(true);
  expect(isOptNulEmail(null)).toStrictEqual(true);
  expect(isOptNulEmail(undefined)).toStrictEqual(true);

  // Is Alpha-Numeric String
  expect(isAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isAlphaNumStr('#ffffff')).toStrictEqual(false);
  expect(isOptAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isOptAlphaNumStr(undefined)).toStrictEqual(true);
  expect(isNulAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isNulAlphaNumStr(null)).toStrictEqual(true);
  expect(isOptAlphaNumStr('asdf1234')).toStrictEqual(true);
  expect(isOptNulAlphaNumStr(undefined)).toStrictEqual(true);
  expect(isOptNulAlphaNumStr(null)).toStrictEqual(true);
  expect(isOptNulAlphaNumStr(undefined)).toStrictEqual(true);

  // Is in Array
  expect(isInArr(['1', '2', '3'])('1')).toStrictEqual(true);
  expect(isInArr(['1', '2', '3'])(1)).toStrictEqual(false);
  expect(isOptOrInArr(['1', '2', '3'])('1')).toStrictEqual(true);
  expect(isOptOrInArr(['1', '2', '3'])(undefined)).toStrictEqual(true);
  
  // Enums
  expect(isEnumVal(Scopes)('public')).toStrictEqual(true);
  expect(isEnumVal(ScopesAlt)(1)).toStrictEqual(true);
  expect(isEnumVal(ScopesAlt)('private')).toStrictEqual(false);
  expect(isEnum(Scopes)).toStrictEqual(true);
  expect(isEnum(ScopesAlt)).toStrictEqual(true);
  expect(isOptEnumVal(ScopesAlt)(undefined)).toStrictEqual(true);
  expect(isNulEnumVal(ScopesAlt)(null)).toStrictEqual(true);
  expect(isOptNulEnumVal(ScopesAlt)(null)).toStrictEqual(true);
  expect(isOptNulEnumVal(ScopesAlt)('private')).toStrictEqual(true);

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
});
