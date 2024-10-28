import { isNulBoolArr, isEnumVal } from './validators';


enum Scopes {
  Public = 'public',
  Private = 'private',
}

enum ScopesAlt {
  Public,
  Private,
}

// Run some test
console.log(isNulBoolArr([false, false, true]));
console.log(isEnumVal(Scopes)('public'))
console.log(isEnumVal(ScopesAlt)(1))
console.log(isEnumVal(ScopesAlt)('private'))