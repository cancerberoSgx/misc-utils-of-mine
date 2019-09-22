**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["time/anim"](_time_anim_.md)

# External module: "time/anim"

## Index

### Modules

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

*Defined in [time/anim.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8751647/misc-utils-of-mine-generic/src/time/anim.ts#L3)*

#### Type declaration:

▸ (`n`: number, `c?`: undefined | number, `d?`: undefined | number, `x?`: undefined | number, `y?`: undefined | number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`c?` | undefined \| number |
`d?` | undefined \| number |
`x?` | undefined \| number |
`y?` | undefined \| number |

___

###  TimingObject

Ƭ **TimingObject**: *object*

*Defined in [time/anim.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8751647/misc-utils-of-mine-generic/src/time/anim.ts#L5)*

#### Type declaration:

* **fn**(): *function*

  * (`duration`: number): *[Timing](_time_anim_.md#timing)*

## Functions

###  animate

▸ **animate**(`__namedParameters`: object): *Promise‹void›*

*Defined in [time/anim.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8751647/misc-utils-of-mine-generic/src/time/anim.ts#L17)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`draw` | function |
`duration` | number |
`end` | undefined \| function |
`lapse` | undefined \| number |
`timing` | function \| object |

**Returns:** *Promise‹void›*

___

###  requestAnimationFrame

▸ **requestAnimationFrame**(`f`: function, `lapse`: number): *void*

*Defined in [time/anim.ts:39](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8751647/misc-utils-of-mine-generic/src/time/anim.ts#L39)*

**Parameters:**

▪ **f**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **lapse**: *number*= 0

**Returns:** *void*