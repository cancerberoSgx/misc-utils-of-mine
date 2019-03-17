Check TypeScript Type errors at runtime. Write type tests and run them instead of just compile them.

## Motivation

To test TypeScript Type libraries (like DefinitelyTyped, [SimplyTyped](https://github.com/andnp/SimplyTyped)), tools like tsd-check are used which perform verifications at compile time. Since the project cannot have compile errors, is not possible to check for failures. 

In other words you cannot assert using the negative, like in `expect(foo).not.toHaveType(Bar)`

This tool allows to compile TypeScript code at runtime, using the context of the current project and the caller file, and support a easy to use API for type assertion.

## Usage

```
npm install -D tsd-check-fail
```


