/* eslint-disable max-len */

// **** Variables **** //

const EMAIL_RGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  COLOR_RGX = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  ALPHA_NUMERIC = new RegExp('^[a-zA-Z0-9]*$'),
  URL_RGX = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;


// **** Types **** //

export type TEnum = Record<string, string | number>;
export type TEmail = `${string}@${string}`;
export type TColor = `#${string}`;
export type TURL = `${string}`;
export type TBasicObj = Record<string, unknown>;
type TValidateWithTransform<T> = (arg: unknown, cb?: (arg: T) => void) => arg is T;

// Add modifiers
type AddNull<T, N> = (N extends true ? T | null : T);
type AddNullables<T, O, N> = (O extends true ? AddNull<T, N> | undefined  : AddNull<T, N>);
export type AddMods<T, O, N, A> = A extends true ? AddNullables<T[], O, N> : AddNullables<T, O, N>;


// **** Functions **** //

// Nullables
export const isUndef = ((arg: unknown): arg is undefined => arg === undefined);
export const isNull = ((arg: unknown): arg is null => arg === null);
export const isNoU = _orNul(isUndef);

// Boolean
export const isBool = _checkType<boolean>('boolean');
export const isOptBool = _orOpt(isBool);
export const isNulBool = _orNul(isBool);
export const isNishBool = _orNul(isOptBool);
export const isBoolArr = _isArr(isBool);
export const isOptBoolArr = _orOpt(isBoolArr);
export const isNulBoolArr = _orNul(isBoolArr);
export const isNishBoolArr = _orNul(isOptBoolArr);

// Is valid boolean ("true"/"false", true/false, "1/0", "1"/"0", "yes"/"no")
export const isValidBool = _transform(_parseBool, isBool);
export const isOptValidBool = _orOpt(isValidBool);
export const isNulValidBool = _orNul(isValidBool);
export const isNishValidBool = _orNul(isOptValidBool);
export const isValidBoolArr = _isArr(isValidBool);
export const isOptValidBoolArr = _orOpt(isValidBoolArr);
export const isNulValidBoolArr = _orNul(isValidBoolArr);
export const isNishValidBoolArr = _orNul(isOptValidBoolArr);

// Number
export const isNum = _checkType<number>('number');
export const isOptNum = _orOpt(isNum);
export const isNulNum = _orNul(isNum);
export const isNishNum = _orNul(isOptNum);
export const isNumArr = _isArr(isNum);
export const isOptNumArr = _orOpt(isNumArr);
export const isNulNumArr = _orNul(isNumArr);
export const isNishNumArr = _orNul(isOptNumArr);

// BigInt
export const isBigInt = _checkType<bigint>('bigint');
export const isOptBigInt = _orOpt(isBigInt);
export const isNulBigInt = _orNul(isBigInt);
export const isNishBigInt = _orNul(isOptBigInt);
export const isBigIntArr = _isArr(isBigInt);
export const isOptBigIntArr = _orOpt(isBigIntArr);
export const isNulBigIntArr = _orNul(isBigIntArr);
export const isNishBigIntArr = _orNul(isOptBigIntArr);

// Valid number (is it still a number after doing "Number(arg)", could be a string)
export const isValidNum = _transform(Number, isNum);
export const isOptValidNum = _orOpt(isValidNum);
export const isNulValidNum = _orNul(isValidNum);
export const isNishValidNum = _orNul(isOptValidNum);
export const isValidNumArr = _isArr(isValidNum);
export const isOptValidNumArr = _orOpt(isValidNumArr);
export const isNulValidNumArr = _orNul(isValidNumArr);
export const isNishValidNumArr = _orNul(isOptValidNumArr);

// Range
export const isInRange = _isInRange<false, false, false>(false, false, false);
export const isOptInRange = _isInRange<true, false, false>(true, false, false);
export const isNulInRange = _isInRange<false, true, false>(false, true, false);
export const isNishInRange = _isInRange<true, true, false>(true, true, false);
export const isInRangeArr = _isInRange<false, false, true>(false, false, true);
export const isOptInRangeArr = _isInRange<true, false, true>(true, false, true);
export const isNulInRangeArr = _isInRange<false, true, true>(false, true, true);
export const isNishInRangeArr = _isInRange<true, true, true>(true, true, true);

// String
export const isStr = _checkType<string>('string');
export const isOptStr = _orOpt(isStr);
export const isNulStr = _orNul(isStr);
export const isNishStr = _orNul(isOptStr);
export const isStrArr = _isArr(isStr);
export const isOptStrArr = _orOpt(isStrArr);
export const isNulStrArr = _orNul(isStrArr);
export const isNishStrArr = _orNul(isOptStrArr);

// NeStr => "Non-Empty String"
export const isNeStr = (arg: unknown): arg is string => (isStr(arg) && arg.length > 0);
export const isOptNeStr = _orOpt(isNeStr);
export const isNulNeStr = _orNul(isNeStr);
export const isNishNeStr = _orNul(isOptNeStr);
export const isNeStrArr = _isArr(isNeStr);
export const isOptNeStrArr = _orOpt(isNeStrArr);
export const isNulNeStrArr = _orNul(isNeStrArr);
export const isNishNeStrArr = _orNul(isOptNeStrArr);

// Symbol
export const isSymbol = _checkType<symbol>('symbol');
export const isOptSymbol = _orOpt(isSymbol);
export const isNulSymbol = _orNul(isSymbol);
export const isNishSymbol = _orNul(isOptSymbol);
export const isSymbolArr = _isArr(isSymbol);
export const isOptSymbolArr = _orOpt(isSymbolArr);
export const isNulSymbolArr = _orNul(isSymbolArr);
export const isNishSymbolArr = _orNul(isOptSymbolArr);

// Date
export const isDate = (arg: unknown): arg is Date => arg instanceof Date;
export const isOptDate = _orOpt(isDate);
export const isNulDate = _orNul(isDate);
export const isNishDate = _orNul(isOptDate);
export const isDateArr = _isArr(isDate);
export const isOptDateArr = _orOpt(isDateArr);
export const isNulDateArr = _orNul(isDateArr);
export const isNishDateArr = _orNul(isOptDateArr);

// Valid date (is it a valid date after calling "new Date()", could be a string or number)
export const isValidDate = _transform((arg: unknown) => new Date(arg as Date), _isValidDate);
export const isOptValidDate = _orOpt(isValidDate);
export const isNulValidDate = _orNul(isValidDate);
export const isNishValidDate = _orNul(isOptValidDate);
export const isValidDateArr = _isArr(isValidDate);
export const isOptValidDateArr = _orOpt(isValidDateArr);
export const isNulValidDateArr = _orNul(isValidDateArr);
export const isNishValidDateArr = _orNul(isOptValidDateArr);

// Object
export const isObj = _checkType<object>('object');
export const isOptObj = _orOpt(isObj);
export const isNulObj = _orNul(isObj);
export const isNishObj = _orNul(isOptObj);
export const isObjArr = _isArr(isObj);
export const isOptObjArr = _orOpt(isObjArr);
export const isNulObjArr = _orNul(isObjArr);
export const isNishObjArr = _orNul(isOptObjArr);

// Function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunc = _checkType<(...args: any[]) => any>('function');
export const isOptFunc = _orOpt(isFunc);
export const isNulFunc = _orNul(isFunc);
export const isNishFunc = _orNul(isOptFunc);
export const isFuncArr = _isArr(isFunc);
export const isOptFuncArr = _orOpt(isFuncArr);
export const isNulFuncArr = _orNul(isFuncArr);
export const isNishFuncArr = _orNul(isOptFuncArr);

// Color
export const isColor = _isRgx<TColor>(COLOR_RGX);
export const isOptColor = _orOpt(isColor);
export const isNulColor = _orNul(isColor);
export const isNishColor = _orNul(isOptColor);

// Email
export const isEmail = _isRgx<TEmail>(EMAIL_RGX);
export const isOptEmail = _orOpt(isEmail);
export const isNulEmail = _orNul(isEmail);
export const isNishEmail = _orNul(isOptEmail);

// URL
export const isUrl = _isRgx<TURL>(URL_RGX);
export const isOptUrl = _orOpt(isUrl);
export const isNulUrl = _orNul(isUrl);
export const isNishUrl = _orNul(isOptUrl);

// Alpha-Numeric String
export const isAlphaNumStr = _isRgx<string>(ALPHA_NUMERIC);
export const isOptAlphaNumStr = _orOpt(isAlphaNumStr);
export const isNulAlphaNumStr = _orNul(isAlphaNumStr);
export const isNishAlphaNumStr = _orNul(isOptAlphaNumStr);

// Basic Objects
export const isBasicObj = _isBasicObj;
export const isOptBasicObj = _orOpt(isBasicObj);
export const isNulBasicObj = _orNul(isBasicObj);
export const isNishBasicObj = _orNul(isOptBasicObj);

// Is in array
export const isInArr = <T extends readonly unknown[]>(arg: T) => _isInArr<T, false, false>(arg, false, false);
export const isOptOrInArr = <T extends readonly unknown[]>(arg: T) => _isInArr<T, true, false>(arg, true, false);
export const isNulOrInArr = <T extends readonly unknown[]>(arg: T) => _isInArr<T, false, true>(arg, false, true);
export const isNishOrInArr = <T extends readonly unknown[]>(arg: T) => _isInArr<T, true, true>(arg, true, true);

// Enums (NOTE: this does not work for mixed enums see: eslint@typescript-eslint/no-mixed-enums)
export const isEnum = _isEnum;
export const isOptEnum = _orOpt(_isEnum);
export const isNulEnum = _orNul(_isEnum);
export const isNishEnum = _orNul(isOptEnum);

// Is Enum value
export const isEnumVal = <T>(arg: T) => _isEnumVal<T, false, false>(arg, false, false);
export const isOptEnumVal = <T>(arg: T) => _isEnumVal<T, true, false>(arg, true, false);
export const isNulEnumVal = <T>(arg: T) => _isEnumVal<T, false, true>(arg, false, true);
export const isNishEnumVal = <T>(arg: T) => _isEnumVal<T, true, true>(arg, true, true);

// Is Key of an Object
export const isKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOf<T, false, false, false>(arg, false, false, false);
export const isOptKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOf<T, true, false, false>(arg, true, false, false);
export const isNulKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOf<T, false, true, false>(arg, false, true, false);
export const isNishKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOf<T, true, true, false>(arg, true, true, false);
export const isKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOf<T, false, false, true>(arg, false, false, true);
export const isOptKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOf<T, true, false, true>(arg, true, false, true);
export const isNulKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOf<T, false, true, true>(arg, false, true, true);
export const isNishKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOf<T, true, true, true>(arg, true, true, true);

// Parse Object (check the properties against a schema)
export const parseObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _parseObj<U, false, false, false>(arg, false, false, false, onError);
export const parseOptObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _parseObj<U, true, false, false>(arg, true, false, false, onError);
export const parseNulObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _parseObj<U, false, true, false>(arg, false, true, false, onError);
export const parseNishObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _parseObj<U, true, true, false>(arg, true, true, false, onError);
export const parseObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _parseObj<U, false, false, true>(arg, false, false, true, onError);
export const parseOptObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _parseObj<U, true, false, true>(arg, true, false, true, onError);
export const parseNulObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _parseObj<U, false, true, true>(arg, false, true, true, onError);
export const parseNishObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _parseObj<U, true, true, true>(arg, true, true, true, onError);

// Test Object (like "parseObj" but returns a type predicate instead)
export const testObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _testObj<U, false, false, false>(arg, false, false, false, onError);
export const testOptObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _testObj<U, true, false, false>(arg, true, false, false, onError);
export const testNulObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _testObj<U, false, true, false>(arg, false, true, false, onError);
export const testNishObj = <U extends TSchema>(arg: U, onError?: TParseOnError<false>) => _testObj<U, true, true, false>(arg, true, true, false, onError);
export const testObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _testObj<U, false, false, true>(arg, false, false, true, onError);
export const testOptObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _testObj<U, true, false, true>(arg, true, false, true, onError);
export const testNulObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _testObj<U, false, true, true>(arg, false, true, true, onError);
export const testNishObjArr = <U extends TSchema>(arg: U, onError?: TParseOnError<true>) => _testObj<U, true, true, true>(arg, true, true, true, onError);

// Util
export const iterateObjEntries = _iterateObjEntries;
export const nonNullable = _nonNullable;
export const transform = _transform;
export const parseBool = _parseBool;
export const safeJsonParse = _safeJsonParse;


// **** Helpers **** //

/**
 * Extract null/undefined from a validator function.
 */
function _nonNullable<T>(cb: ((arg: unknown) => arg is T)) {
  return (arg: unknown): arg is NonNullable<T> => {
    if (isNoU(arg)) {
      return false;
    } else {
      return cb(arg);
    }
  };
}

/**
 * Do a validator callback function for each object entry.
 */
function _iterateObjEntries<T = NonNullable<object>>(
  cb: (key: string, val: unknown) => boolean,
): (arg: unknown) => arg is T {
  return (arg: unknown): arg is T => {
    if (isObj(arg)) {
      for (const entry of Object.entries(arg)) {
        if (!cb(entry[0], entry[1])) {
          return false;
        }
      }
    }
    return true;
  };
}

/**
 * Allow param to be undefined
 */
function _orOpt<T>(cb: ((arg: unknown) => arg is T)) {
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
function _orNul<T>(cb: ((arg: unknown) => arg is T)) {
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
function _isArr<T>(cb: ((arg: unknown) => arg is T)) {
  return (arg: unknown): arg is T[] => {
    return Array.isArray(arg) && !arg.some(item => !cb(item));
  };
}

/**
 * See if a string satisfies the regex. NOTE: this lets an empty string be a 
 * valid value.
 */
function _isRgx<T>(rgx: RegExp) {
  return (arg: unknown): arg is T => {
    return (isStr(arg) && arg.length < 254 && (arg === '' || rgx.test(arg)));
  };
}

/**
 * Wrapper to check basic type.
 */
function _checkType<T>(type: string) {
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
export function _isInArr<
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
 * Range will always determine if a number is >= the min and <= the max. If you want to 
 * leave off a range, just use null. 
 * 
 * Examples:
 * isRange(0, null) => "0 or any positive number"
 * isRange(100, null) => "greater than or equal to 100"
 * isRange(25, 75) => "between 25 and 75"
 */
function _isInRange<
  O extends boolean,
  N extends boolean,
  A extends boolean,
  Ret = AddMods<number, O, N, A>,
>(
  optional: boolean,
  nullable: boolean,
  isArr: boolean,
): (min: number | null, max: number | null) => ((arg: unknown) => arg is Ret) {
  return (min: number | null, max: number | null): ((arg: unknown) => arg is Ret) => {
    return (arg: unknown): arg is Ret => {
      if (arg === undefined) {
        return optional;
      }
      if (arg === null) {
        return nullable;
      }
      if (isArr) {
        return Array.isArray(arg) && !arg.some(item => !_isInRangeCore(item, min, max));
      }
      return _isInRangeCore(arg, min, max);
    };
  };
}

/**
 * Core logic for is array function.
 */
function _isInRangeCore(arg: unknown, min: number | null, max: number | null) {
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

/**
 * See if something is a key of an object.
 */
function _isKeyOf<
  T extends Record<string, unknown>,
  O extends boolean,
  N extends boolean,
  A extends boolean,
  Ret = AddMods<keyof T, O, N, A>,
>(
  obj: Record<string, unknown>,
  optional: boolean,
  nullable: boolean,
  isArr: boolean,
): ((arg: unknown) => arg is Ret) {
  if (!isBasicObj(obj)) {
    throw new Error('Item to check from must be a Record<string, unknown>');
  }
  const isInKeys = isInArr(Object.keys(obj));
  return (arg: unknown): arg is Ret => {
    if (arg === undefined) {
      return optional;
    }
    if (arg === null) {
      return nullable;
    }
    if (isArr) {
      return Array.isArray(arg) && !arg.some(item => !isInKeys(item));
    }
    return isInKeys(arg);
  };
}

/**
 * Transform a value before checking it.
 */
function _transform<T>(
  transFn: (arg: unknown) => T,
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

/**
 * Is valid date.
 */
function _isValidDate(arg: unknown): arg is Date {
  return arg instanceof Date && !isNaN(arg.getTime());
}

/**
 * Convert all string/number boolean types to a boolean. If not a valid boolean
 * return undefined.
 */
function _parseBool(arg: unknown): boolean | undefined {
  if (typeof arg === 'string') {
    arg = arg.toLowerCase();
    if (arg === 'true') {
      return true;
    } else if (arg === 'false') {
      return false;
    } else if (arg === 'yes') {
      return true;
    } else if (arg === 'no') {
      return false;
    } else if (arg === '1') {
      return true;
    } else if (arg === '0') {
      return false;
    }
  } else if (typeof arg === 'number') {
    if (arg === 1) {
      return true;
    } else if (arg === 0) {
      return false;
    }
  } else if (typeof arg === 'boolean') {
    return arg;
  }
  // Default
  return undefined;
}

/**
 * Safe JSON parse
 */
function _safeJsonParse<T>(arg: unknown): T {
  if (isStr(arg)) {
    return JSON.parse(arg) as T;
  } else {
    throw Error('JSON parse argument must be a string');
  }
}


// **** Enum Stuff **** //

const _isStrEnum = _iterateObjEntries((key, val) => (isStr(key) && isStr(val)));

/**
 * Check if unknown is a valid enum object.
 * NOTE: this does not work for mixed enums see: "eslint@typescript-eslint/no-mixed-enums"
 */
function _isEnum(arg: unknown): arg is TEnum {
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
    return _isStrEnum(arg);
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
 * Check is value satisfies enum.
 */
function _isEnumVal<T, 
  O extends boolean,
  N extends boolean
>(
  enumArg: T,
  optional: O,
  nullable: N,
): ((arg: unknown) => arg is AddNullables<T[keyof T], O, N>) {
  // Check is enum
  if (!_isEnum(enumArg)) {
    throw Error('Item to check from must be an enum.');
  }
  // Get keys
  let resp = Object.keys(enumArg).reduce((arr: unknown[], key) => {
    if (!arr.includes(key)) {
      arr.push(enumArg[key]);
    }
    return arr;
  }, []);
  // Check if string or number enum
  if (isNum(enumArg[resp[0] as string])) {
    resp = resp.map(item => enumArg[item as string]);
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
 * Is the object Record<string, unknown>.
 */
function _isBasicObj(arg: unknown): arg is TBasicObj {
  return (isObj(arg) && !Array.isArray(arg) && isStrArr(Object.keys(arg)));
}


// **** Parse/Test Object **** //

interface TSchema {
  [key: string]: TValidateWithTransform<unknown> | TSchema;
}

type TInferParseRes<U, O, N, A, Schema = TInferParseResHelper<U>> = (
  AddMods<Schema, O, N, A>
);

type TInferParseResHelper<U> = {
  [K in keyof U]: (
    U[K] extends TValidateWithTransform<infer X> 
    ? X 
    : U[K] extends TSchema
    ? TInferParseResHelper<U[K]>
    : never
  );
};

type TParseOnError<A> = (
  A extends true 
  ? ((property?: string, value?: unknown, index?: number, caughtErr?: unknown) => void) 
  : ((property?: string, value?: unknown, caughtErr?: unknown) => void)
);

/**
 * Validates an object schema, calls an error function is supplied one, returns 
 * "undefined" if the parse fails, and works recursively too. NOTE: this will 
 * purge all keys not part of the schema.
 */
function _parseObj<
  U extends TSchema,
  O extends boolean,
  N extends boolean,
  A extends boolean,
>(
  schema: U,
  optional: O,
  nullable: N,
  isArr: A,
  onError?: TParseOnError<A>,
) {
  return (arg: unknown) => _parseObjCore<A>(
    !!optional,
    !!nullable,
    isArr,
    schema,
    arg,
    onError,
  ) as TInferParseRes<U, O, N, A>;
}

/**
 * Validate the schema. 
 */
function _parseObjCore<A>(
  optional: boolean,
  nullable: boolean,
  isArr: A,
  schema: TSchema,
  arg: unknown,
  onError?: TParseOnError<A>,
) {
  // Check "undefined"
  if (arg === undefined) {
    if (!optional) {
      onError?.('object value was undefined but not optional', arg);
      return undefined;
    }
  }
  // Check "null"
  if (arg === null) {
    if (!nullable) {
      onError?.('object value was null but not nullable', arg);
      return undefined;
    }
    return null;
  }
  // Check "array"
  if (isArr) {
    if (!Array.isArray(arg)) {
      onError?.('object not an array', arg);
      return null;
    }
    // Iterate array
    const resp = [];
    for (let i = 0; i < arg.length; i++) {
      const item: unknown = arg[i];
      const parsedItem = _parseObjCoreHelper(schema, item, (prop, val, caughtErr) => {
        onError?.(prop, val, i, caughtErr);
      });
      if (parsedItem === undefined) {
        return undefined;
      } else {
        resp.push(parsedItem);
      }
    }
    return resp;
  // Default
  } else {
    return _parseObjCoreHelper(schema, arg, onError as TParseOnError<false>);
  }
}

/**
 * Iterate an object, apply a validator function to to each property in an 
 * object using the schema.
 */
function _parseObjCoreHelper(
  schema: TSchema,
  arg: unknown,
  onError?: TParseOnError<false>,
): unknown {
  if (!isObj(arg)) {
    return;
  }
  const retVal = (arg as TBasicObj);
  for (const key in schema) {
    const schemaProp = schema[key],
      val = retVal[key];
    // Nested object
    if (typeof schemaProp === 'object') {
      const childVal = _parseObjCoreHelper(schemaProp, val, onError);
      if (childVal === undefined) {
        return undefined;
      }
    // Run validator
    } else if (typeof schemaProp === 'function') {
      try {
        if (!schemaProp(val, (tval: unknown) => {
          retVal[key] = tval;
        })) {
          return onError?.(key, val);
        }
      } catch (err) {
        if (err instanceof Error) {
          return onError?.(key, val, err.message);
        } else {
          return onError?.(key, val, err);
        }
      }
    }
  }
  // Purse keys not in schema
  for (const key in retVal) {
    if (!(key in schema)) {
      Reflect.deleteProperty(arg, key);
    }
  }
  // Return
  return retVal;
}

/**
 * Like "parseObj" but returns a type-predicate instead of the object.
 */
function _testObj<
  U extends TSchema,
  O extends boolean,
  N extends boolean,
  A extends boolean,
>(
  schema: U,
  optional: O,
  nullable: N,
  isArr: A,
  onError?: TParseOnError<A>,
) {
  const parseFn = _parseObj(schema, optional, nullable, isArr, onError);
  return (arg: unknown): arg is typeof objRes => {
    const objRes = parseFn(arg);
    if (objRes === undefined) {
      return false;
    } else {
      return true;
    }
  };
}
