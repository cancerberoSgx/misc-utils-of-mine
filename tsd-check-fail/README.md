Check TypeScript Type errors at runtime. Write type tests and run them instead of just compile them.

## Motivation

To test TypeScript Type libraries (like DefinitelyTyped, [SimplyTyped](https://github.com/andnp/SimplyTyped)), tools like tsd-check are used which perform verifications at compile time. Since the project cannot have compile errors, is not possible to check for failures. 

In other words you cannot assert using the negative, like in `expect(foo).not.toHaveType(Bar)`

This tool allows to compile TypeScript code at runtime, using the context of the current project and the caller file, and support a easy to use API for type assertion.

## Usage

**IMPORTANT** you need to run the tests using ts-node, ts-jest or similar tool. Probably it won't work if you run your project's emitted JavaScript files since the types are lost there.

```sh
npm install -D tsd-check-fail
```

### expectType()

A simplified API

```ts

```

### checkType()

The low level API
```ts
```

### Jest custom matcher

```ts
import 'tsd-check-fail'
test('jest matcher should work', () => {
  expect(1).toMatchType('number')
  expect(1).not.toMatchType('string')
})
```

## How it works

 * Loads the current TypeScript project (defaults to `./tsconfig.json`) with all its files, libraries and configuration. It uses (https://github.com/dsherret/ts-simple-ast)[ts-simple-ast] for this.
 * Resolves the file that called the `expectType` or `checkType` function
 * create a new file just next to it and preppends a test code that will fail if the types doesn't match (see `result.code`)
 * try to compile the source file and if it fails we known there's an error. (previously it verifies that the original file compiles OK)
 * the value is escaped in the test code. Any object should be supported since it uses (https://github.com/blakeembrey/javascript-stringify)[javascript-stringify].

## Limitations

 * **reference types in the global scope only**. If you reference a type that is declared in the local closure (i.e inside the `it()` it will fail)
 * Don't pass types to the function type representation since they will be lost, for example, the following will fail:
 ```ts
expectType(value => `const v: typeof describe = ${value}`, describe)
  ```
  because it generated a test code like this:
  ```ts
const v: typeof describe = function describe(description, specDefinitions) {return env.describe(description, specDefinitions);} 
  ```
  **Always remember that values are serialized so all type information is lost, only their values are maintained**