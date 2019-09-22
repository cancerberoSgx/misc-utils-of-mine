**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["time/anim"](_time_anim_.md) › [easing](_time_anim_.easing.md)

# Module: easing

## Index

### Variables

* [b](_time_anim_.easing.md#let-b)
* [c](_time_anim_.easing.md#let-c)

### Functions

* [back](_time_anim_.easing.md#const-back)
* [bounceEaseInOut](_time_anim_.easing.md#const-bounceeaseinout)
* [bounceEasyOut](_time_anim_.easing.md#const-bounceeasyout)
* [bounceFn](_time_anim_.easing.md#bouncefn)
* [easeInBounce](_time_anim_.easing.md#const-easeinbounce)
* [easeInCubic](_time_anim_.easing.md#const-easeincubic)
* [easeInElastic](_time_anim_.easing.md#const-easeinelastic)
* [easeInExpo](_time_anim_.easing.md#const-easeinexpo)
* [easeInOutBack](_time_anim_.easing.md#const-easeinoutback)
* [easeInOutBounce](_time_anim_.easing.md#const-easeinoutbounce)
* [easeInOutCubic](_time_anim_.easing.md#const-easeinoutcubic)
* [easeInOutElastic](_time_anim_.easing.md#const-easeinoutelastic)
* [easeInOutExpo](_time_anim_.easing.md#const-easeinoutexpo)
* [easeInOutQuad](_time_anim_.easing.md#const-easeinoutquad)
* [easeInOutQuart](_time_anim_.easing.md#const-easeinoutquart)
* [easeInOutQuint](_time_anim_.easing.md#const-easeinoutquint)
* [easeInQuad](_time_anim_.easing.md#const-easeinquad)
* [easeInQuart](_time_anim_.easing.md#const-easeinquart)
* [easeInQuint](_time_anim_.easing.md#const-easeinquint)
* [easeInSine](_time_anim_.easing.md#const-easeinsine)
* [easeOutBack](_time_anim_.easing.md#const-easeoutback)
* [easeOutBounce](_time_anim_.easing.md#const-easeoutbounce)
* [easeOutCubic](_time_anim_.easing.md#const-easeoutcubic)
* [easeOutElastic](_time_anim_.easing.md#const-easeoutelastic)
* [easeOutQuad](_time_anim_.easing.md#const-easeoutquad)
* [easeOutQuint](_time_anim_.easing.md#const-easeoutquint)
* [elastic](_time_anim_.easing.md#const-elastic)
* [makeEaseInOut](_time_anim_.easing.md#makeeaseinout)
* [makeEaseOut](_time_anim_.easing.md#makeeaseout)
* [quad](_time_anim_.easing.md#quad)

## Variables

### `Let` b

• **b**: *number* = 0

*Defined in [time/anim.ts:92](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L92)*

___

### `Let` c

• **c**: *number* = 1

*Defined in [time/anim.ts:91](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L91)*

## Functions

### `Const` back

▸ **back**(`x`: number): *(Anonymous function)*

*Defined in [time/anim.ts:75](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L75)*

“bow shooting”. First we “pull the bowstring”, and then “shoot”.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “elasticity coefficient”. The distance of “bowstring pulling” is defined by it. Default value 1.5.  |

**Returns:** *(Anonymous function)*

___

### `Const` bounceEaseInOut

▸ **bounceEaseInOut**(): *(Anonymous function)*

*Defined in [time/anim.ts:89](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L89)*

**Returns:** *(Anonymous function)*

___

### `Const` bounceEasyOut

▸ **bounceEasyOut**(): *(Anonymous function)*

*Defined in [time/anim.ts:62](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L62)*

Imagine we are dropping a ball. It falls down, then bounces back a few times and stops. The bounce function does the same, but in the reverse order: “bouncing” starts immediately.

**Returns:** *(Anonymous function)*

___

###  bounceFn

▸ **bounceFn**(`timeFraction`: number): *undefined | number*

*Defined in [time/anim.ts:51](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *undefined | number*

___

### `Const` easeInBounce

▸ **easeInBounce**(): *any*

*Defined in [time/anim.ts:273](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L273)*

**Returns:** *any*

___

### `Const` easeInCubic

▸ **easeInCubic**(): *any*

*Defined in [time/anim.ts:138](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L138)*

**Returns:** *any*

___

### `Const` easeInElastic

▸ **easeInElastic**(): *any*

*Defined in [time/anim.ts:106](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L106)*

**Returns:** *any*

___

### `Const` easeInExpo

▸ **easeInExpo**(): *any*

*Defined in [time/anim.ts:189](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L189)*

**Returns:** *any*

___

### `Const` easeInOutBack

▸ **easeInOutBack**(): *any*

*Defined in [time/anim.ts:256](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L256)*

**Returns:** *any*

___

### `Const` easeInOutBounce

▸ **easeInOutBounce**(): *any*

*Defined in [time/anim.ts:280](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L280)*

**Returns:** *any*

___

### `Const` easeInOutCubic

▸ **easeInOutCubic**(): *any*

*Defined in [time/anim.ts:152](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L152)*

**Returns:** *any*

___

### `Const` easeInOutElastic

▸ **easeInOutElastic**(): *any*

*Defined in [time/anim.ts:211](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L211)*

**Returns:** *any*

___

### `Const` easeInOutExpo

▸ **easeInOutExpo**(): *any*

*Defined in [time/anim.ts:246](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L246)*

**Returns:** *any*

___

### `Const` easeInOutQuad

▸ **easeInOutQuad**(): *any*

*Defined in [time/anim.ts:98](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L98)*

**Returns:** *any*

___

### `Const` easeInOutQuart

▸ **easeInOutQuart**(): *any*

*Defined in [time/anim.ts:167](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L167)*

**Returns:** *any*

___

### `Const` easeInOutQuint

▸ **easeInOutQuint**(): *any*

*Defined in [time/anim.ts:196](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L196)*

**Returns:** *any*

___

### `Const` easeInQuad

▸ **easeInQuad**(): *any*

*Defined in [time/anim.ts:94](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L94)*

**Returns:** *any*

___

### `Const` easeInQuart

▸ **easeInQuart**(): *any*

*Defined in [time/anim.ts:160](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L160)*

**Returns:** *any*

___

### `Const` easeInQuint

▸ **easeInQuint**(): *any*

*Defined in [time/anim.ts:175](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L175)*

**Returns:** *any*

___

### `Const` easeInSine

▸ **easeInSine**(): *any*

*Defined in [time/anim.ts:204](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L204)*

**Returns:** *any*

___

### `Const` easeOutBack

▸ **easeOutBack**(): *any*

*Defined in [time/anim.ts:265](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L265)*

**Returns:** *any*

___

### `Const` easeOutBounce

▸ **easeOutBounce**(): *any*

*Defined in [time/anim.ts:123](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L123)*

**Returns:** *any*

___

### `Const` easeOutCubic

▸ **easeOutCubic**(): *any*

*Defined in [time/anim.ts:145](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L145)*

**Returns:** *any*

___

### `Const` easeOutElastic

▸ **easeOutElastic**(): *any*

*Defined in [time/anim.ts:229](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L229)*

**Returns:** *any*

___

### `Const` easeOutQuad

▸ **easeOutQuad**(): *any*

*Defined in [time/anim.ts:96](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L96)*

**Returns:** *any*

___

### `Const` easeOutQuint

▸ **easeOutQuint**(): *any*

*Defined in [time/anim.ts:182](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L182)*

**Returns:** *any*

___

### `Const` elastic

▸ **elastic**(`x`: number): *(Anonymous function)*

*Defined in [time/anim.ts:79](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L79)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “initial range”  |

**Returns:** *(Anonymous function)*

___

###  makeEaseInOut

▸ **makeEaseInOut**(`timing`: [Timing](_time_anim_.md#timing)): *(Anonymous function)*

*Defined in [time/anim.ts:82](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_time_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  makeEaseOut

▸ **makeEaseOut**(`timing`: [Timing](_time_anim_.md#timing)): *(Anonymous function)*

*Defined in [time/anim.ts:45](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_time_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  quad

▸ **quad**(`timeFraction`: number): *number*

*Defined in [time/anim.ts:67](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/time/anim.ts#L67)*

parabolic curve

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *number*