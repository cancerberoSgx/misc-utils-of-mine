[misc-utils-of-mine-generic](../README.md) > ["compareText"](../modules/_comparetext_.md)

# External module: "compareText"

## Index

### Interfaces

* [BaseCompareOptions](../interfaces/_comparetext_.basecompareoptions.md)
* [CompareOptions](../interfaces/_comparetext_.compareoptions.md)
* [CompareTextOptions](../interfaces/_comparetext_.comparetextoptions.md)
* [CompareTextsOptions](../interfaces/_comparetext_.comparetextsoptions.md)
* [CompareWithMultiplicityOptionsConcrete](../interfaces/_comparetext_.comparewithmultiplicityoptionsconcrete.md)

### Type aliases

* [Multiplicity](_comparetext_.md#multiplicity)
* [TextCompareMode](_comparetext_.md#textcomparemode)

### Functions

* [buildText](_comparetext_.md#buildtext)
* [compareText](_comparetext_.md#comparetext)
* [compareTexts](_comparetext_.md#comparetexts)
* [compareWithMultiplicity](_comparetext_.md#comparewithmultiplicity)
* [negate](_comparetext_.md#negate)

---

## Type aliases

<a id="multiplicity"></a>

###  Multiplicity

**Ƭ Multiplicity**: *"anyOf" \| "allOf"*

*Defined in [compareText.ts:4](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/999a52b/misc-utils-of-mine-generic/src/compareText.ts#L4)*

___
<a id="textcomparemode"></a>

###  TextCompareMode

**Ƭ TextCompareMode**: *"contains" \| "contained" \| "equals" \| "startsWith" \| "endsWith"*

*Defined in [compareText.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/999a52b/misc-utils-of-mine-generic/src/compareText.ts#L3)*

___

## Functions

<a id="buildtext"></a>

###  buildText

▸ **buildText**(text: *`string`*, options: *[CompareTextOptions](../interfaces/_comparetext_.comparetextoptions.md)*): `string`

*Defined in [compareText.ts:75](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/999a52b/misc-utils-of-mine-generic/src/compareText.ts#L75)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| options | [CompareTextOptions](../interfaces/_comparetext_.comparetextoptions.md) |

**Returns:** `string`

___
<a id="comparetext"></a>

###  compareText

▸ **compareText**(actual: *`string`*, expected: *`string`*, options: *[CompareTextOptions](../interfaces/_comparetext_.comparetextoptions.md)*): `boolean`

*Defined in [compareText.ts:28](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/999a52b/misc-utils-of-mine-generic/src/compareText.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actual | `string` |
| expected | `string` |
| options | [CompareTextOptions](../interfaces/_comparetext_.comparetextoptions.md) |

**Returns:** `boolean`

___
<a id="comparetexts"></a>

###  compareTexts

▸ **compareTexts**(actual: *`string` \| `string`[]*, expected: *`string` \| `string`[]*, options: *[CompareTextsOptions](../interfaces/_comparetext_.comparetextsoptions.md)*): `boolean`

*Defined in [compareText.ts:24](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/999a52b/misc-utils-of-mine-generic/src/compareText.ts#L24)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actual | `string` \| `string`[] |
| expected | `string` \| `string`[] |
| options | [CompareTextsOptions](../interfaces/_comparetext_.comparetextsoptions.md) |

**Returns:** `boolean`

___
<a id="comparewithmultiplicity"></a>

###  compareWithMultiplicity

▸ **compareWithMultiplicity**<`T`>(_actual: *`T` \| `T`[]*, _expected: *`T` \| `T`[]*, options: *[CompareOptions](../interfaces/_comparetext_.compareoptions.md)*, predicate: *`function`*): `boolean`

*Defined in [compareText.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/999a52b/misc-utils-of-mine-generic/src/compareText.ts#L49)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| _actual | `T` \| `T`[] |
| _expected | `T` \| `T`[] |
| options | [CompareOptions](../interfaces/_comparetext_.compareoptions.md) |
| predicate | `function` |

**Returns:** `boolean`

___
<a id="negate"></a>

###  negate

▸ **negate**(b: *`boolean`*): `boolean`

*Defined in [compareText.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/999a52b/misc-utils-of-mine-generic/src/compareText.ts#L71)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | `boolean` |

**Returns:** `boolean`

___
