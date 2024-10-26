// **** Types **** //

export type TFunc = (...args: any[]) => any;


// **** Variables **** //

const EMAIL_RGX = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
  COLOR_RGX = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  URL_RGX = new RegExp('^(?!.*//)(?!.*-/)(?!.*/-)(?!.*_/)(?!.*/_)[A-Za-z0-9/][-_A-Za-z0-9/]*$'),
  ALPHA_NUMERIC = new RegExp('^[a-zA-Z0-9]*$');


// **** Functions **** //

// Nullables
export const isUndef = ((arg: unknown): arg is undefined => arg === undefined);
export const isNull = ((arg: unknown): arg is undefined => arg === null);
export const isNoU = orNul(isUndef);

// Boolean
export const isBool = checkType<boolean>('boolean');
export const isOptBool = orOpt(isBool);
export const isNulBool = orNul(isBool);
export const isOptNulBool = orNul(isOptBool);
export const isBoolArr = isArr(isBool);
export const isOptBoolArr = orOpt(isBoolArr);
export const isNulBoolArr = orNul(isBoolArr);
export const isOptNulBoolArr = orNul(isOptBoolArr);

// Number
export const isNum = checkType<number>('number');
export const isOptNum = orOpt(isNum);
export const isNulNum = orNul(isNum);
export const isOptNulNum = orNul(isOptNum);
export const isNumArr = isArr(isNum);
export const isOptNumArr = orOpt(isNumArr);
export const isNulNumArr = orNul(isNumArr);
export const isOptNulNumArr = orNul(isOptNumArr);

// String
export const isStr = checkType<string>('string');
export const isOptStr = orOpt(isStr);
export const isNulStr = orNul(isStr);
export const isOptNulStr = orNul(isOptStr);
export const isStrArr = isArr(isStr);
export const isOptStrArr = orOpt(isStrArr);
export const isNulStrArr = orNul(isStrArr);
export const isOptNulStrArr = orNul(isOptStrArr);

// Date
export const isDate = (arg: unknown): arg is Date => arg instanceof Date;
export const isOptDate = orOpt(isDate);
export const isNulDate = orNul(isDate);
export const isOptNulDate = orNul(isOptDate);
export const isDateArr = isArr(isDate);
export const isOptDateArr = orOpt(isDateArr);
export const isNulDateArr = orNul(isDateArr);
export const isOptNulDateArr = orNul(isOptDateArr);

// Object
export const isObj = checkType<object>('object');
export const isOptObj = orOpt(isObj);
export const isNulObj = orNul(isObj);
export const isOptNulObj = orNul(isOptObj);
export const isObjArr = isArr(isObj);
export const isOptObjArr = orOpt(isObjArr);
export const isNulObjArr = orNul(isObjArr);
export const isOptNulObjArr = orNul(isOptObjArr);

// Function
export const isFn = checkType<TFunc>('function');
export const isOptFn = orOpt(isFn);
export const isNulFn = orNul(isFn);
export const isOptNulFn = orNul(isOptFn);
export const isFnArr = isArr(isFn);
export const isOptFnArr = orOpt(isFnArr);
export const isNulFnArr = orNul(isFnArr);
export const isOptNulFnArr = orNul(isOptFnArr);

// Color
export const isColor = isRgx(COLOR_RGX);
export const isOptColor = orOpt(isColor);
export const isNulColor = orNul(isColor);
export const isOptNulColor = orNul(isOptColor);

// Email
export const isEmail = isRgx(EMAIL_RGX);
export const isOptEmail = orOpt(isEmail);
export const isNulEmail = orNul(isEmail);
export const isOptNulEmail = orNul(isOptEmail);

// Is it a valid url (useful for chart-urls). Only forward-slash, letters, 
// numbers, underscores and dashes.
export const isUrl = isRgx(URL_RGX);
export const isOptUrl = orOpt(isUrl);
export const isNulUrl = orNul(isUrl);
export const isOptNulUrl = orNul(isOptUrl);

// Alpha-Numeric String
export const isAlphaNumStr = isRgx(ALPHA_NUMERIC);
export const isOptAlphaNumStr = orOpt(isAlphaNumStr);
export const isNulAlphaNumStr = orNul(isAlphaNumStr);
export const isOptNulAlphaNumStr = orNul(isOptAlphaNumStr);


// **** Array Content **** //

/**
 * Is an item in an array.
 */
export function isInArr<T extends readonly unknown[]>(
  arr: T,
): (arg: unknown) => arg is T[number] {
  return (arg: unknown): arg is T[number] => {
    for (const item of arr) {
      if (arg === item) {
        return true;
      }
    }
    return false;
  };
}

/**
 * Is an item in an array or undefined.
 */
export function isOptOrInArr<T extends readonly unknown[]>(
  arr: T,
): (arg: unknown) => arg is T[number] | undefined {
  const fn = isInArr<T>(arr);
  return (arg: unknown): arg is T[number] | undefined => {
    if (arg === undefined) {
      return true;
    }
    return fn(arg);
  };
}


// **** Enums **** //

/**
 * Check is value satisfies enum.
 */
export function isEnumVal<T>(arg: T): ((arg: unknown) => arg is T) {
  const vals = _getEnumVals(arg);
  return (arg: unknown): arg is T => {
    return vals.some(val => arg === val);
  }
}

/**
 * Get the values of an enum object.
 */
function _getEnumVals(arg: unknown) {
  if (isNonArrObj(arg)) {
    const keys = _getEnumKeys(arg);
    return keys.map(key => arg[key]);
  }
  throw Error('"getEnumVals" be an non-array object');
}

/**
 * Get the keys of an enum object.
 */
export function _getEnumKeys(arg: unknown): string[] {
  if (isNonArrObj(arg)) {
    return Object.keys(arg).reduce((arr: any[], key) => {
      if (!arr.includes(key)) {
        arr.push(arg[key]);
      }
      return arr;
    }, []);
  }
  throw Error('"getEnumKeys" be an non-array object');
}


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
 * Check if non object array.
 */
export function isNonArrObj(
  arg: unknown,
): arg is Record<string, unknown> {
  return typeof arg === 'object' && !Array.isArray(arg);
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
function isRgx(rgx: RegExp) {
  return (arg: unknown): arg is string => {
    return (isStr(arg) && (arg === '' || rgx.test(arg)));
  }
}

/**
 * Wrapper to check basic type.
 */
function checkType<T>(type: string) {
  return (arg: unknown): arg is T => {
    return typeof arg === type && (type === 'object' ? (arg !== null) : true);
  }
}
