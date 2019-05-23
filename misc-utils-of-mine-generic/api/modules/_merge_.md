[misc-utils-of-mine-generic](../README.md) > ["merge"](../modules/_merge_.md)

# External module: "merge"

## Index

### Functions

* [clone](_merge_.md#clone)
* [merge](_merge_.md#merge)
* [mergeRecursive](_merge_.md#mergerecursive)
* [recursive](_merge_.md#recursive)

---

## Functions

<a id="clone"></a>

###  clone

▸ **clone**(input: *`any`*): `any`

*Defined in [merge.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e293445/misc-utils-of-mine-generic/src/merge.ts#L22)*

Clone the input removing any reference

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `any` |

**Returns:** `any`

___
<a id="merge"></a>

###  merge

▸ **merge**(clone_: *`boolean`*, recursive: *`boolean`*, ...argv: *`any`[]*): `any`

*Defined in [merge.ts:56](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e293445/misc-utils-of-mine-generic/src/merge.ts#L56)*

Merge two or more objects

**Parameters:**

| Name | Type |
| ------ | ------ |
| clone_ | `boolean` |
| recursive | `boolean` |
| `Rest` argv | `any`[] |

**Returns:** `any`

___
<a id="mergerecursive"></a>

###  mergeRecursive

▸ **mergeRecursive**(base: *`any`*, extend: *`any`*): `any`

*Defined in [merge.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e293445/misc-utils-of-mine-generic/src/merge.ts#L41)*

Merge two objects recursively

**Parameters:**

| Name | Type |
| ------ | ------ |
| base | `any` |
| extend | `any` |

**Returns:** `any`

___
<a id="recursive"></a>

###  recursive

▸ **recursive**(clone?: *`undefined` \| `false` \| `true`*): `any`

*Defined in [merge.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e293445/misc-utils-of-mine-generic/src/merge.ts#L14)*

Merge two or more objects recursively

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` clone | `undefined` \| `false` \| `true` |

**Returns:** `any`

___

