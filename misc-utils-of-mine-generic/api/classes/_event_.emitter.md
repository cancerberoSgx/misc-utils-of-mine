**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["event"](../modules/_event_.md) › [Emitter](_event_.emitter.md)

# Class: Emitter <**E, L**>

The simplest implementation of an event emitter.

## Type parameters

▪ **E**

▪ **L**: *[Listener](../modules/_event_.md#listener)‹E›*

## Hierarchy

* **Emitter**

## Index

### Properties

* [l](_event_.emitter.md#private-l)

### Methods

* [add](_event_.emitter.md#add)
* [emit](_event_.emitter.md#emit)
* [remove](_event_.emitter.md#remove)

## Properties

### `Private` l

• **l**: *L[]* =  []

*Defined in [event.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/event.ts#L5)*

## Methods

###  add

▸ **add**(`l`: L): *void*

*Defined in [event.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/event.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | L |

**Returns:** *void*

___

###  emit

▸ **emit**(`e`: E): *void*

*Defined in [event.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/event.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | E |

**Returns:** *void*

___

###  remove

▸ **remove**(`l`: L): *void*

*Defined in [event.ts:12](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/event.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | L |

**Returns:** *void*