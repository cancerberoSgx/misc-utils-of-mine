[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/evaluate"](_string_evaluate_.md)

# External module: "string/evaluate"

## Index

### Functions

* [evaluate](_string_evaluate_.md#evaluate)
* [stringToObject](_string_evaluate_.md#stringtoobject)

## Functions

###  evaluate

▸ **evaluate**<**T**>(`s`: string, `defaultValue`: undefined): *T | undefined*

*Defined in [string/evaluate.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c59015f/misc-utils-of-mine-generic/src/string/evaluate.ts#L1)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`defaultValue` | undefined |  undefined |

**Returns:** *T | undefined*

___

###  stringToObject

▸ **stringToObject**(`s`: string, `propSep`: string, `nameValueSep`: string): *any*

*Defined in [string/evaluate.ts:12](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c59015f/misc-utils-of-mine-generic/src/string/evaluate.ts#L12)*

Transform a string like `foo: 2, bar: hello world` to an object like `{foo: '2', bar: 'hello world'}`

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | "" |
`propSep` | string | "," |
`nameValueSep` | string | ":" |

**Returns:** *any*
