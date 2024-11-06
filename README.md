# ts-validators


This is not a library, this is just a collection of validator functions I frequently use and I'm putting here for sharing purposes. If you're using the `jet-schema` library you might find this collection of functions pretty useful.
<br/>


All the validator functions are in the `./src/validators.ts` file.
<br/>


Abbreviations used in naming functions:
- `Opt` optional, (`value | undefined`)
- `Nul` nullable, (`value | null`)
- `Nish` nullish, (`value | null | undefined`)


2 special functions I want to mention:
  - `.transform`: a utility function to modify a value before validating, a callback returns the modified value.
  - `.parse`: validates an object schema, calls an error function is supplied one, returns `undefined` if the parse fails, and works recursively too.
  

> I use `.parse` when validating express request objects. If you want to see an example of `.parse` in action you can checkout this repo () // pick up here

