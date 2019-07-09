[misc-utils-of-mine-generic](../README.md) > ["event"](../modules/_event_.md) > [Emitter](../classes/_event_.emitter.md)

# Class: Emitter

The simplest implementation of an event emitter.

## Type parameters
#### E 
#### L :  [Listener](../modules/_event_.md#listener)<`E`>
## Hierarchy

**Emitter**

## Index

### Properties

* [l](_event_.emitter.md#l)

### Methods

* [add](_event_.emitter.md#add)
* [emit](_event_.emitter.md#emit)
* [remove](_event_.emitter.md#remove)

---

## Properties

<a id="l"></a>

### `<Private>` l

**● l**: *`L`[]* =  []

*Defined in [event.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6844400/misc-utils-of-mine-generic/src/event.ts#L5)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(l: *`L`*): `void`

*Defined in [event.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6844400/misc-utils-of-mine-generic/src/event.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | `L` |

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(e: *`E`*): `void`

*Defined in [event.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6844400/misc-utils-of-mine-generic/src/event.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `E` |

**Returns:** `void`

___
<a id="remove"></a>

###  remove

▸ **remove**(l: *`L`*): `void`

*Defined in [event.ts:12](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6844400/misc-utils-of-mine-generic/src/event.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | `L` |

**Returns:** `void`

___

