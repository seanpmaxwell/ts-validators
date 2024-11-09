# ts-validators


This is not a library, this is just a collection of validator functions I frequently use and I'm putting here for sharing purposes. If you're using the `jet-schema` library you might find this collection of functions pretty useful.
<br/>


All the validator functions are in the `./src/validators.ts` file.
<br/>


Abbreviations used in naming functions:
- `Opt` optional, (`value | undefined`)
- `Nul` nullable, (`value | null`)
- `Nish` nullish, (`value | null | undefined`)


### `parse`: A really special function
- `parse` iterates an object using a provided schema and validator-functions to validate each property. Then it calls an error-callback if supplied one, and returns `undefined` if the parse fails or the argument value (properties in the schema not included) if it passes.
- Works recursively.
- Return value generated from schema properties + validator-function type-predicates
- I use `parse` when validating express request objects. If you want to see an example of `parse` in action you can checkout this repo: https://github.com/seanpmaxwell/express5-typescript-template/blob/master/src/routes/common/index.ts

