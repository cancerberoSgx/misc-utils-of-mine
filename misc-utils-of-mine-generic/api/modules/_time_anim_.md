[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["time/anim"](_time_anim_.md)

# Module: "time/anim"

## Index

### Namespaces

* [easing](_time_anim_.easing.md)

### Interfaces

* [AnimateOptions](../interfaces/_time_anim_.animateoptions.md)

### Type aliases

* [Timing](_time_anim_.md#timing)
* [TimingObject](_time_anim_.md#timingobject)

### Functions

* [animate](_time_anim_.md#animate)
* [requestAnimationFrame](_time_anim_.md#requestanimationframe)

## Type aliases

###  Timing

Ƭ **Timing**: *function*

*Defined in [src/time/anim.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/time/anim.ts#L3)*

#### Type declaration:

▸ (`n`: number, `c?`: undefined | number, `d?`: undefined | number, `x?`: undefined | number, `y?`: undefined | number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`c?` | undefined &#124; number |
`d?` | undefined &#124; number |
`x?` | undefined &#124; number |
`y?` | undefined &#124; number |

___

###  TimingObject

Ƭ **TimingObject**: *object*

*Defined in [src/time/anim.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/time/anim.ts#L5)*

#### Type declaration:

* **fn**(): *function*

  * (`duration`: number): *[Timing](_time_anim_.md#timing)*

## Functions

###  animate

▸ **animate**(`__namedParameters`: object): *Promise‹void›*

*Defined in [src/time/anim.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/time/anim.ts#L17)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`draw` | function |
`duration` | number |
`end` | undefined &#124; [Fn](_type_.md#fn)‹any[], any› |
`lapse` | undefined &#124; number |
`timing` | [Timing](_time_anim_.md#timing) &#124; [TimingObject](_time_anim_.md#timingobject) |

**Returns:** *Promise‹void›*

___

###  requestAnimationFrame

▸ **requestAnimationFrame**(`f`: function, `lapse`: number): *void*

*Defined in [src/time/anim.ts:39](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/time/anim.ts#L39)*

**Parameters:**

▪ **f**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **lapse**: *number*= 0

**Returns:** *void*
