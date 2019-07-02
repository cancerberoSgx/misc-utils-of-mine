[misc-utils-of-mine-generic](../README.md) > ["string/misc"](../modules/_string_misc_.md)

# External module: "string/misc"

## Index

### Functions

* [removeEmptyLines](_string_misc_.md#removeemptylines)
* [removeWhites](_string_misc_.md#removewhites)
* [shorter](_string_misc_.md#shorter)
* [stringToObject](_string_misc_.md#stringtoobject)
* [trimRightLines](_string_misc_.md#trimrightlines)

---

## Functions

<a id="removeemptylines"></a>

###  removeEmptyLines

▸ **removeEmptyLines**(c: *`string`*): `string`

*Defined in [string/misc.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/string/misc.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | `string` |

**Returns:** `string`

___
<a id="removewhites"></a>

###  removeWhites

▸ **removeWhites**(s: *`string`*, replaceWith?: *`string`*): `string`

*Defined in [string/misc.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/string/misc.ts#L5)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| s | `string` | - |
| `Default value` replaceWith | `string` | &quot; &quot; |

**Returns:** `string`

___
<a id="shorter"></a>

###  shorter

▸ **shorter**(text: *`string`*, much?: *`number`*): `string`

*Defined in [string/misc.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/string/misc.ts#L1)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| text | `string` | - |
| `Default value` much | `number` | 10 |

**Returns:** `string`

___
<a id="stringtoobject"></a>

###  stringToObject

▸ **stringToObject**(s?: *`string`*, propSep?: *`string`*, nameValueSep?: *`string`*): `any`

*Defined in [string/misc.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/string/misc.ts#L26)*

Transform a string like `foo: 2, bar: hello world` to an object like `{foo: '2', bar: 'hello world}`

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` s | `string` | &quot;&quot; |
| `Default value` propSep | `string` | &quot;,&quot; |
| `Default value` nameValueSep | `string` | &quot;:&quot; |

**Returns:** `any`

___
<a id="trimrightlines"></a>

###  trimRightLines

▸ **trimRightLines**(s: *`string`*): `string`

*Defined in [string/misc.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e57dba/misc-utils-of-mine-generic/src/string/misc.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `string`

___

