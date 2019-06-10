[misc-utils-of-mine-generic](../README.md) > ["compare"](../modules/_compare_.md)

# External module: "compare"

## Index

### Interfaces

* [BaseCompareOptions](../interfaces/_compare_.basecompareoptions.md)
* [CompareOptions](../interfaces/_compare_.compareoptions.md)
* [CompareTextOptions](../interfaces/_compare_.comparetextoptions.md)
* [CompareTextsOptions](../interfaces/_compare_.comparetextsoptions.md)
* [CompareWithMultiplicityOptionsConcrete](../interfaces/_compare_.comparewithmultiplicityoptionsconcrete.md)

### Type aliases

* [Multiplicity](_compare_.md#multiplicity)
* [TextCompareMode](_compare_.md#textcomparemode)

### Functions

* [buildText](_compare_.md#buildtext)
* [compareText](_compare_.md#comparetext)
* [compareTexts](_compare_.md#comparetexts)
* [compareWithMultiplicity](_compare_.md#comparewithmultiplicity)
* [negate](_compare_.md#negate)

---

## Type aliases

<a id="multiplicity"></a>

###  Multiplicity

**Ƭ Multiplicity**: *"anyOf" \| "allOf"*

*Defined in [compare.ts:4](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/compare.ts#L4)*

___
<a id="textcomparemode"></a>

###  TextCompareMode

**Ƭ TextCompareMode**: *"contains" \| "contained" \| "equals" \| "startsWith" \| "endsWith"*

*Defined in [compare.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/compare.ts#L3)*

___

## Functions

<a id="buildtext"></a>

###  buildText

▸ **buildText**(text: *`string`*, options: *[CompareTextOptions](../interfaces/_compare_.comparetextoptions.md)*): `string`

*Defined in [compare.ts:75](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/compare.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| options | [CompareTextOptions](../interfaces/_compare_.comparetextoptions.md) |

**Returns:** `string`

___
<a id="comparetext"></a>

###  compareText

▸ **compareText**(actual: *`string`*, expected: *`string`*, options: *[CompareTextOptions](../interfaces/_compare_.comparetextoptions.md)*): `boolean`

*Defined in [compare.ts:28](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/compare.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actual | `string` |
| expected | `string` |
| options | [CompareTextOptions](../interfaces/_compare_.comparetextoptions.md) |

**Returns:** `boolean`

___
<a id="comparetexts"></a>

###  compareTexts

▸ **compareTexts**(actual: *`string` \| `string`[]*, expected: *`string` \| `string`[]*, options: *[CompareTextsOptions](../interfaces/_compare_.comparetextsoptions.md)*): `boolean`

*Defined in [compare.ts:24](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/compare.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actual | `string` \| `string`[] |
| expected | `string` \| `string`[] |
| options | [CompareTextsOptions](../interfaces/_compare_.comparetextsoptions.md) |

**Returns:** `boolean`

___
<a id="comparewithmultiplicity"></a>

###  compareWithMultiplicity

▸ **compareWithMultiplicity**<`T`>(_actual: *`T` \| `T`[]*, _expected: *`T` \| `T`[]*, options: *[CompareOptions](../interfaces/_compare_.compareoptions.md)*, predicate: *`function`*): `boolean`

*Defined in [compare.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/compare.ts#L49)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| _actual | `T` \| `T`[] |
| _expected | `T` \| `T`[] |
| options | [CompareOptions](../interfaces/_compare_.compareoptions.md) |
| predicate | `function` |

**Returns:** `boolean`

___
<a id="negate"></a>

###  negate

▸ **negate**(b: *`boolean`*): `boolean`

*Defined in [compare.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/compare.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `boolean` |

**Returns:** `boolean`

___

