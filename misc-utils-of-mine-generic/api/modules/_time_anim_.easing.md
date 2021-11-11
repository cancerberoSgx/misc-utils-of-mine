[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["time/anim"](_time_anim_.md) › [easing](_time_anim_.easing.md)

# Namespace: easing

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

Defined in src/time/anim.ts:92

___

### `Let` c

• **c**: *number* = 1

Defined in src/time/anim.ts:91

## Functions

### `Const` back

▸ **back**(`x`: number): *(Anonymous function)*

Defined in src/time/anim.ts:75

“bow shooting”. First we “pull the bowstring”, and then “shoot”.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “elasticity coefficient”. The distance of “bowstring pulling” is defined by it. Default value 1.5.  |

**Returns:** *(Anonymous function)*

___

### `Const` bounceEaseInOut

▸ **bounceEaseInOut**(): *(Anonymous function)*

Defined in src/time/anim.ts:89

**Returns:** *(Anonymous function)*

___

### `Const` bounceEasyOut

▸ **bounceEasyOut**(): *(Anonymous function)*

Defined in src/time/anim.ts:62

Imagine we are dropping a ball. It falls down, then bounces back a few times and stops. The bounce function does the same, but in the reverse order: “bouncing” starts immediately.

**Returns:** *(Anonymous function)*

___

###  bounceFn

▸ **bounceFn**(`timeFraction`: number): *undefined | number*

Defined in src/time/anim.ts:51

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *undefined | number*

___

### `Const` easeInBounce

▸ **easeInBounce**(): *any*

Defined in src/time/anim.ts:273

**Returns:** *any*

___

### `Const` easeInCubic

▸ **easeInCubic**(): *any*

Defined in src/time/anim.ts:138

**Returns:** *any*

___

### `Const` easeInElastic

▸ **easeInElastic**(): *any*

Defined in src/time/anim.ts:106

**Returns:** *any*

___

### `Const` easeInExpo

▸ **easeInExpo**(): *any*

Defined in src/time/anim.ts:189

**Returns:** *any*

___

### `Const` easeInOutBack

▸ **easeInOutBack**(): *any*

Defined in src/time/anim.ts:256

**Returns:** *any*

___

### `Const` easeInOutBounce

▸ **easeInOutBounce**(): *any*

Defined in src/time/anim.ts:280

**Returns:** *any*

___

### `Const` easeInOutCubic

▸ **easeInOutCubic**(): *any*

Defined in src/time/anim.ts:152

**Returns:** *any*

___

### `Const` easeInOutElastic

▸ **easeInOutElastic**(): *any*

Defined in src/time/anim.ts:211

**Returns:** *any*

___

### `Const` easeInOutExpo

▸ **easeInOutExpo**(): *any*

Defined in src/time/anim.ts:246

**Returns:** *any*

___

### `Const` easeInOutQuad

▸ **easeInOutQuad**(): *any*

Defined in src/time/anim.ts:98

**Returns:** *any*

___

### `Const` easeInOutQuart

▸ **easeInOutQuart**(): *any*

Defined in src/time/anim.ts:167

**Returns:** *any*

___

### `Const` easeInOutQuint

▸ **easeInOutQuint**(): *any*

Defined in src/time/anim.ts:196

**Returns:** *any*

___

### `Const` easeInQuad

▸ **easeInQuad**(): *any*

Defined in src/time/anim.ts:94

**Returns:** *any*

___

### `Const` easeInQuart

▸ **easeInQuart**(): *any*

Defined in src/time/anim.ts:160

**Returns:** *any*

___

### `Const` easeInQuint

▸ **easeInQuint**(): *any*

Defined in src/time/anim.ts:175

**Returns:** *any*

___

### `Const` easeInSine

▸ **easeInSine**(): *any*

Defined in src/time/anim.ts:204

**Returns:** *any*

___

### `Const` easeOutBack

▸ **easeOutBack**(): *any*

Defined in src/time/anim.ts:265

**Returns:** *any*

___

### `Const` easeOutBounce

▸ **easeOutBounce**(): *any*

Defined in src/time/anim.ts:123

**Returns:** *any*

___

### `Const` easeOutCubic

▸ **easeOutCubic**(): *any*

Defined in src/time/anim.ts:145

**Returns:** *any*

___

### `Const` easeOutElastic

▸ **easeOutElastic**(): *any*

Defined in src/time/anim.ts:229

**Returns:** *any*

___

### `Const` easeOutQuad

▸ **easeOutQuad**(): *any*

Defined in src/time/anim.ts:96

**Returns:** *any*

___

### `Const` easeOutQuint

▸ **easeOutQuint**(): *any*

Defined in src/time/anim.ts:182

**Returns:** *any*

___

### `Const` elastic

▸ **elastic**(`x`: number): *(Anonymous function)*

Defined in src/time/anim.ts:79

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`x` | number | 1.5 | “initial range”  |

**Returns:** *(Anonymous function)*

___

###  makeEaseInOut

▸ **makeEaseInOut**(`timing`: [Timing](_time_anim_.md#timing)): *(Anonymous function)*

Defined in src/time/anim.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_time_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  makeEaseOut

▸ **makeEaseOut**(`timing`: [Timing](_time_anim_.md#timing)): *(Anonymous function)*

Defined in src/time/anim.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`timing` | [Timing](_time_anim_.md#timing) |

**Returns:** *(Anonymous function)*

___

###  quad

▸ **quad**(`timeFraction`: number): *number*

Defined in src/time/anim.ts:67

parabolic curve

**Parameters:**

Name | Type |
------ | ------ |
`timeFraction` | number |

**Returns:** *number*
