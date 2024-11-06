/* eslint-disable max-len */


// **** Types **** //

export type TEnum = Record<string, string | number>;
export type TEmail = `${string}@${string}`;
export type TColor = `#${string}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TFunc = (...args: any[]) => any;
export type TBasicObj = Record<string, unknown>;
type TValidateWithTransform<T> = (arg: unknown, cb?: (arg: T) => void) => arg is T;

// Add modifiers
type AddNull<T, N> = (N extends true ? T | null : T);
type AddNullables<T, O, N> = (O extends true ? AddNull<T, N> | undefined  : AddNull<T, N>);
export type AddMods<T, O, N, A> = A extends true ? AddNullables<T[], O, N> : AddNullables<T, O, N>;


// **** Variables **** //

const EMAIL_RGX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  COLOR_RGX = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  ALPHA_NUMERIC = new RegExp('^[a-zA-Z0-9]*$');


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

// Number
export const isNum = _checkType<number>('number');
export const isOptNum = _orOpt(isNum);
export const isNulNum = _orNul(isNum);
export const isNishNum = _orNul(isOptNum);
export const isNumArr = _isArr(isNum);
export const isOptNumArr = _orOpt(isNumArr);
export const isNulNumArr = _orNul(isNumArr);
export const isNishNumArr = _orNul(isOptNumArr);

// Range
export const isRange = _isRangeBase<false, false, false>(false, false, false);
export const isOptRange = _isRangeBase<true, false, false>(true, false, false);
export const isNulRange = _isRangeBase<false, true, false>(false, true, false);
export const isNishRange = _isRangeBase<true, true, false>(true, true, false);
export const isRangeArr = _isRangeBase<false, false, true>(false, false, true);
export const isOptRangeArr = _isRangeBase<true, false, true>(true, false, true);
export const isNulRangeArr = _isRangeBase<false, true, true>(false, true, true);
export const isNishRangeArr = _isRangeBase<true, true, true>(true, true, true);

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

// Date
export const isDate = (arg: unknown): arg is Date => arg instanceof Date;
export const isOptDate = _orOpt(isDate);
export const isNulDate = _orNul(isDate);
export const isNishDate = _orNul(isOptDate);
export const isDateArr = _isArr(isDate);
export const isOptDateArr = _orOpt(isDateArr);
export const isNulDateArr = _orNul(isDateArr);
export const isNishDateArr = _orNul(isOptDateArr);

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
export const isFn = _checkType<TFunc>('function');
export const isOptFn = _orOpt(isFn);
export const isNulFn = _orNul(isFn);
export const isNishFn = _orNul(isOptFn);
export const isFnArr = _isArr(isFn);
export const isOptFnArr = _orOpt(isFnArr);
export const isNulFnArr = _orNul(isFnArr);
export const isNishFnArr = _orNul(isOptFnArr);

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

// Alpha-Numeric String
export const isAlphaNumStr = _isRgx<string>(ALPHA_NUMERIC);
export const isOptAlphaNumStr = _orOpt(isAlphaNumStr);
export const isNulAlphaNumStr = _orNul(isAlphaNumStr);
export const isNishAlphaNumStr = _orNul(isOptAlphaNumStr);

// Basic Objects
export const isBasicObj = (arg: unknown): arg is TBasicObj => (isObj(arg) && !Array.isArray(arg) && isStrArr(Object.keys(arg)));
export const isOptBasicObj = _orOpt(isBasicObj);
export const isNishBasicObj = _orNul(isOptBasicObj);

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

// Is Key of an Object
export const isKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, false, false, false>(arg, false, false, false);
export const isOptKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, true, false, false>(arg, true, false, false);
export const isNulKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, false, true, false>(arg, false, true, false);
export const isNishKeyOf = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, true, true, false>(arg, true, true, false);
export const isKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, false, false, true>(arg, false, false, true);
export const isOptKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, true, false, true>(arg, true, false, true);
export const isNulKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, false, true, true>(arg, false, true, true);
export const isNishKeyOfArr = <T extends TBasicObj>(arg: T) => _isKeyOfBase<T, true, true, true>(arg, true, true, true);


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


// **** Wrapper Functions **** //

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
  enumArg: T,
  optional: O,
  nullable: N,
): ((arg: unknown) => arg is AddNullables<T[keyof T], O, N>) {
  // Check is enum
  if (!isEnum(enumArg)) {
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
 * Determines if number is between two ranges. If you want to leave off a range, 
 * just use null. (0, null) => "0 or any positive number"
 */
function _isRangeBase<
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

/**
 * See if something is a key of an object.
 */
function _isKeyOfBase<
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


// **** Parse **** //

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

/**
 * validates an object schema, calls an error function is supplied one, returns 
 * "undefined" if the parse fails, and works recursively too.
 */
export function parse<
  U extends TSchema,
  O extends boolean = false,
  N extends boolean = false,
  A extends boolean = false,
>(
  schema: U,
  optional?: O,
  nullable?: N,
  isArr?: A,
  onError?: (
    A extends true 
    ? ((property?: string, value?: unknown, index?: number) => void) 
    : ((property?: string, value?: unknown) => void)
  ),
) {
  return (arg: unknown) => _parseCore(
    !!optional,
    !!nullable,
    !!isArr,
    schema,
    arg,
    onError,
  ) as TInferParseRes<U, O, N, A>;
}

/**
 * Validate the schema. 
 */
function _parseCore(
  optional: boolean,
  nullable: boolean,
  isArr: boolean,
  schema: TSchema,
  arg: unknown,
  onError?: TFunc,
) {
  // check 'undefined'
  if (arg === undefined) {
    if (!optional) {
      onError?.('object value was undefined but not optional', arg);
      return undefined;
    }
  }
  // check null
  if (arg === null) {
    if (!nullable) {
      onError?.('object value was null but not nullable', arg);
      return undefined;
    }
    return null;
  }
  // check array
  if (isArr) {
    if (!Array.isArray(arg)) {
      onError?.('object not an array', arg);
      return null;
    }
    // Iterate array
    const resp = [];
    for (let i = 0; i < arg.length; i++) {
      const item: unknown = arg[i];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      const parsedItem = _parseCoreHelper(schema, item, (prop, val) => onError?.(prop, val, i));
      if (parsedItem === undefined) {
        return undefined;
      } else {
        resp.push(parsedItem);
      }
    }
    return resp;
  }
  // Return
  return _parseCoreHelper(schema, arg, onError);
}

/**
 * Iterate an object, apply a validator function to to each property in an 
 * object using the schema.
 */
function _parseCoreHelper(
  schema: TSchema,
  arg: unknown,
  onError?: (property?: string, value?: unknown) => void,
) {
  if (!isObj(arg)) {
    return;
  }
  const retVal: TBasicObj = {};
  for (const key in schema) {
    const schemaProp = schema[key];
    let val = (arg as TBasicObj)[key];
    if (typeof schemaProp === 'object') {
      const childVal = _parseCoreHelper(schemaProp, val, onError);
      if (childVal !== undefined) {
        val = childVal;
      } else {
        return undefined;
      }
    } else if (typeof schemaProp === 'function') {
      if (!schemaProp(val, (tval: unknown) => val = tval)) {
        return onError?.(key, val);
      };
    }
    retVal[key] = val;
  }
  return retVal;
}
