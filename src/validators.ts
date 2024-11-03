/* eslint-disable max-len */
// **** Types **** //

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TFunc = (...args: any[]) => any;
export type TEnum = Record<string, string | number>;
export type TEmail = `${string}@${string}`;
export type TColor = `#${string}`;
export type TBasicObj = Record<string, unknown>;
export type TValidateWithTransform<T> = (arg: unknown, cb?: (arg: T) => void) => arg is T;

// Add nullables
type AddNull<T, N> = (N extends true ? T | null : T);
type AddNullables<T, O, N> = (O extends true ? AddNull<T, N> | undefined  : AddNull<T, N>);
type AddMods<T, O, N, A> = A extends true ? AddNullables<T[], O, N> : AddNullables<T, O, N>;



// **** Variables **** //

const EMAIL_RGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  COLOR_RGX = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  ALPHA_NUMERIC = new RegExp('^[a-zA-Z0-9]*$');


// **** Functions **** //

// Nullables
export const isUndef = ((arg: unknown): arg is undefined => arg === undefined);
export const isNull = ((arg: unknown): arg is null => arg === null);
export const isNoU = orNul(isUndef);

// Boolean
export const isBool = checkType<boolean>('boolean');
export const isOptBool = orOpt(isBool);
export const isNulBool = orNul(isBool);
export const isNishBool = orNul(isOptBool);
export const isBoolArr = isArr(isBool);
export const isOptBoolArr = orOpt(isBoolArr);
export const isNulBoolArr = orNul(isBoolArr);
export const isNishBoolArr = orNul(isOptBoolArr);

// Number
export const isNum = checkType<number>('number');
export const isOptNum = orOpt(isNum);
export const isNulNum = orNul(isNum);
export const isNishNum = orNul(isOptNum);
export const isNumArr = isArr(isNum);
export const isOptNumArr = orOpt(isNumArr);
export const isNulNumArr = orNul(isNumArr);
export const isNishNumArr = orNul(isOptNumArr);

// Is a number between two ranges
export const isRange = _isRangeBase<false, false, false>(false, false, false);
export const isOptRange = _isRangeBase<true, false, false>(true, false, false);
export const isNulRange = _isRangeBase<false, true, false>(false, true, false);
export const isNishRange = _isRangeBase<true, true, false>(true, true, false);
export const isRangeArr = _isRangeBase<false, false, true>(false, false, true);
export const isOptRangeArr = _isRangeBase<true, false, true>(true, false, true);
export const isNulRangeArr = _isRangeBase<false, true, true>(false, true, true);
export const isNishRangeArr = _isRangeBase<true, true, true>(true, true, true);

// String
export const isStr = checkType<string>('string');
export const isOptStr = orOpt(isStr);
export const isNulStr = orNul(isStr);
export const isNishStr = orNul(isOptStr);
export const isStrArr = isArr(isStr);
export const isOptStrArr = orOpt(isStrArr);
export const isNulStrArr = orNul(isStrArr);
export const isNishStrArr = orNul(isOptStrArr);

// NeStr => "Non-Empty String"
export const isNeStr = (arg: unknown): arg is string => (isStr(arg) && arg.length > 0);
export const isOptNeStr = orOpt(isNeStr);
export const isNulNeStr = orNul(isNeStr);
export const isNishNeStr = orNul(isOptNeStr);
export const isNeStrArr = isArr(isNeStr);
export const isOptNeStrArr = orOpt(isNeStrArr);
export const isNulNeStrArr = orNul(isNeStrArr);
export const isNishNeStrArr = orNul(isOptNeStrArr);

// Date
export const isDate = (arg: unknown): arg is Date => arg instanceof Date;
export const isOptDate = orOpt(isDate);
export const isNulDate = orNul(isDate);
export const isNishDate = orNul(isOptDate);
export const isDateArr = isArr(isDate);
export const isOptDateArr = orOpt(isDateArr);
export const isNulDateArr = orNul(isDateArr);
export const isNishDateArr = orNul(isOptDateArr);

// Object
export const isObj = checkType<object>('object');
export const isOptObj = orOpt(isObj);
export const isNulObj = orNul(isObj);
export const isNishObj = orNul(isOptObj);
export const isObjArr = isArr(isObj);
export const isOptObjArr = orOpt(isObjArr);
export const isNulObjArr = orNul(isObjArr);
export const isNishObjArr = orNul(isOptObjArr);

// Function
export const isFn = checkType<TFunc>('function');
export const isOptFn = orOpt(isFn);
export const isNulFn = orNul(isFn);
export const isNishFn = orNul(isOptFn);
export const isFnArr = isArr(isFn);
export const isOptFnArr = orOpt(isFnArr);
export const isNulFnArr = orNul(isFnArr);
export const isNishFnArr = orNul(isOptFnArr);

// Color
export const isColor = isRgx<TColor>(COLOR_RGX);
export const isOptColor = orOpt(isColor);
export const isNulColor = orNul(isColor);
export const isNishColor = orNul(isOptColor);

// Email
export const isEmail = isRgx<TEmail>(EMAIL_RGX);
export const isOptEmail = orOpt(isEmail);
export const isNulEmail = orNul(isEmail);
export const isNishEmail = orNul(isOptEmail);

// Alpha-Numeric String
export const isAlphaNumStr = isRgx<string>(ALPHA_NUMERIC);
export const isOptAlphaNumStr = orOpt(isAlphaNumStr);
export const isNulAlphaNumStr = orNul(isAlphaNumStr);
export const isNishAlphaNumStr = orNul(isOptAlphaNumStr);

// Basic Objects
export const isBasicObj = (arg: unknown): arg is TBasicObj => (isObj(arg) && 
  !Array.isArray(arg) && isStrArr(Object.keys(arg)));
export const isOptBasicObj = orOpt(isBasicObj);
export const isNishBasicObj = orNul(isOptBasicObj);

// Is in array
export const isInArr = <T extends readonly unknown[]>(arg: T) => _isInArrBase<T, false, false>(arg, false, false);
export const isOptOrInArr = <T extends readonly unknown[]>(arg: T) => _isInArrBase<T, true, false>(arg, true, false);
export const isNulOrInArr = <T extends readonly unknown[]>(arg: T) => _isInArrBase<T, false, true>(arg, false, true);
export const isNishOrInArr = <T extends readonly unknown[]>(arg: T) => _isInArrBase<T, true, true>(arg, true, true);

// Enums
export const isEnumVal = <T>(arg: T) => _isEnumValBase<T, false, false>(arg, false, false);
export const isOptEnumVal = <T>(arg: T) => _isEnumValBase<T, true, false>(arg, true, false);
export const isNulEnumVal = <T>(arg: T) => _isEnumValBase<T, false, true>(arg, false, true);
export const isNishEnumVal = <T>(arg: T) => _isEnumValBase<T, true, true>(arg, true, true);


// **** Misc **** //

/**
 * Extract null/undefined from a validator function.
 */
export function nonNullable<T>(cb: ((arg: unknown) => arg is T)) {
  return (arg: unknown): arg is NonNullable<T> => {
    if (isNoU(arg)) {
      return false;
    } else {
      return cb(arg);
    }
  };
}

/**
 * Do a validator callback function for each object key/value pair.
 */
export function checkObjEntries(
  val: unknown,
  cb: (key: string, val: unknown) => boolean,
): val is NonNullable<object> {
  if (isObj(val)) {
    for (const entry of Object.entries(val)) {
      if (!cb(entry[0], entry[1])) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Check if unknown is a valid enum object.
 */
export function isEnum(arg: unknown): arg is TEnum {
  // Check is non-array object
  if (!(isObj(arg) && !Array.isArray(arg))) {
    return false;
  }
  // Check if string or number enum
  const param = (arg as TBasicObj),
    keys = Object.keys(param),
    middle = Math.floor(keys.length / 2);
  // ** String Enum ** //
  if (!isNum(param[keys[middle]])) {
    return checkObjEntries(arg, (key, val) => {
      return isStr(key) && isStr(val);
    });
  }
  // ** Number Enum ** //
  // Enum key length will always be even
  if (keys.length % 2 !== 0) {
    return false;
  }
  // Check key/values
  for (let i = 0; i < middle; i++) {
    const thisKey = keys[i],
      thisVal = param[thisKey],
      thatKey = keys[i + middle],
      thatVal = param[thatKey];
    if (!(thisVal === thatKey && thisKey === String(thatVal))) {
      return false;
    }
  }
  // Return
  return true;
}

/**
 * Transform a value before checking it.
 */
export function transform<T>(
  transFn: TFunc,
  vldt: ((arg: unknown) => arg is T),
): TValidateWithTransform<T> {
  return (arg: unknown, cb?: (arg: T) => void): arg is T => {
    if (arg !== undefined) {
      arg = transFn(arg);
    }
    cb?.(arg as T);
    return vldt(arg);
  };
}


// **** Wrapper Functions **** //

/**
 * Allow param to be undefined
 */
function orOpt<T>(cb: ((arg: unknown) => arg is T)) {
  return (arg: unknown): arg is (T | undefined) => {
    if (isUndef(arg)) {
      return true;
    } else {
      return cb(arg);
    }
  };
}

/**
 * Allow param to be undefined
 */
function orNul<T>(cb: ((arg: unknown) => arg is T)) {
  return (arg: unknown): arg is (T | null) => {
    if (arg === null) {
      return true;
    } else {
      return cb(arg);
    }
  };
}

/**
 * Check array counterpart for validator item.
 */
function isArr<T>(cb: ((arg: unknown) => arg is T)) {
  return (arg: unknown): arg is T[] => {
    return Array.isArray(arg) && !arg.some(item => !cb(item));
  };
}

/**
 * See if a string satisfies the regex. NOTE: this lets an empty string be a 
 * valid value.
 */
function isRgx<T>(rgx: RegExp) {
  return (arg: unknown): arg is T => {
    return (isStr(arg) && arg.length < 254 && (arg === '' || rgx.test(arg)));
  };
}

/**
 * Wrapper to check basic type.
 */
function checkType<T>(type: string) {
  return (arg: unknown): arg is T => {
    return (
      typeof arg === type &&
      (type === 'object' ? (arg !== null) : true) &&
      (type === 'number' ? !isNaN(arg as number) : true)
    );
  };
}

/**
 * Is an item in an array.
 */
export function _isInArrBase<
  T extends readonly unknown[],
  O extends boolean,
  N extends boolean 
>(
  arr: T,
  optional: O,
  nullable: N,
): (arg: unknown) => arg is AddNullables<T[number], O, N> {
  return (arg: unknown): arg is AddNullables<T[number], O, N> => {
    if (isUndef(arg)) {
      return !!optional;
    }
    if (isNull(arg)) {
      return !!nullable;
    }
    for (const item of arr) {
      if (arg === item) {
        return true;
      }
    }
    return false;
  };
}

/**
 * Check is value satisfies enum.
 */
function _isEnumValBase<T, 
  O extends boolean,
  N extends boolean
>(
  arg: T,
  optional: O,
  nullable: N,
): ((arg: unknown) => arg is AddNullables<T[keyof T], O, N>) {
  // Check object
  if (!isBasicObj(arg)) {
    throw Error('parameter be an non-array object');
  }
  // Get keys
  let resp = Object.keys(arg).reduce((arr: unknown[], key) => {
    if (!arr.includes(key)) {
      arr.push(arg[key]);
    }
    return arr;
  }, []);
  // Check if string or number enum
  if (isNum(arg[resp[0] as string])) {
    resp = resp.map(item => arg[item as string]);
  }
  // Return validator function
  return (arg: unknown): arg is AddNullables<T[keyof T], O, N> => {
    if (isUndef(arg)) {
      return !!optional;
    }
    if (isNull(arg)) {
      return !!nullable;
    }
    return resp.some(val => arg === val);
  };
}

/**
 * Determines if number is between two ranges. If you want to leave off a range, 
 * just use null. (0, null) => "0 or any positive number"
 */
function _isRangeBase<
  O extends boolean,
  N extends boolean,
  A extends boolean,
  >(
  optional: boolean,
  nullable: boolean,
  isArr: boolean,
): (min: number | null, max: number | null) => ((arg: unknown) => arg is AddMods<number, O, N, A>) {
  return (min: number | null, max: number | null): ((arg: unknown) => arg is AddMods<number, O, N, A>) => {
    return (arg: unknown): arg is AddMods<number, O, N, A> => {
      if (arg === undefined) {
        return optional;
      }
      if (arg === null) {
        return nullable;
      }
      if (isArr) {
        return Array.isArray(arg) && !arg.some(item => !_isRangeCore(item, min, max));
      }
      return _isRangeCore(arg, min, max);
    };
  };
}

/**
 * Core logic for is array function.
 */
function _isRangeCore(arg: unknown, min: number | null, max: number | null) {
  if (!isNum(arg)) {
    return false;
  }
  if (min !== null && arg < min) {
    return false;
  }
  if (max !== null && arg > max) {
    return false;
  }
  return true;
}
