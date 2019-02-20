[misc-utils-of-mine-typescript](../README.md) > ["conditional"](../modules/_conditional_.md)

# External module: "conditional"

## Index

### Type aliases

* [And](_conditional_.md#and)
* [Equal](_conditional_.md#equal)
* [If](_conditional_.md#if)
* [IsNever](_conditional_.md#isnever)
* [Not](_conditional_.md#not)
* [Or](_conditional_.md#or)
* [ToBoolean](_conditional_.md#toboolean)

---

## Type aliases

<a id="and"></a>

###  And

**Ƭ And**: *[If](_conditional_.md#if)<`A`, [ToBoolean](_conditional_.md#toboolean)<`B`>, `false`>*

*Defined in [conditional.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/conditional.ts#L10)*

___
<a id="equal"></a>

###  Equal

**Ƭ Equal**: *`Equal<A, B>`*

*Defined in [conditional.ts:4](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/conditional.ts#L4)*

___
<a id="if"></a>

###  If

**Ƭ If**: *`If<Conditional, A, B>`*

*Defined in [conditional.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/conditional.ts#L6)*

___
<a id="isnever"></a>

###  IsNever

**Ƭ IsNever**: *[Equal](_conditional_.md#equal)<`T`, `never`>*

*Defined in [conditional.ts:15](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/conditional.ts#L15)*

___
<a id="not"></a>

###  Not

**Ƭ Not**: *[If](_conditional_.md#if)<[Extends](_inheritance_.md#extends)<[Falsy](_misc_.md#falsy), `A`>, [NotFalsy](_misc_.md#notfalsy)<`A`>, [Falsy](_misc_.md#falsy)>*

*Defined in [conditional.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/conditional.ts#L11)*

___
<a id="or"></a>

###  Or

**Ƭ Or**: *[If](_conditional_.md#if)<`A`, `true`, [ToBoolean](_conditional_.md#toboolean)<`B`>>*

*Defined in [conditional.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/conditional.ts#L13)*

___
<a id="toboolean"></a>

###  ToBoolean

**Ƭ ToBoolean**: *[If](_conditional_.md#if)<`A`, `true`, `false`>*

*Defined in [conditional.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/conditional.ts#L8)*

___

