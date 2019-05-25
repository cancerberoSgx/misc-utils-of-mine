[misc-utils-of-mine-generic](../README.md) > ["promise"](../modules/_promise_.md) > [Deferred](../classes/_promise_.deferred.md)

# Class: Deferred

Promise like object that allows to resolve it promise from outside code. Example:

```
class Api {
fooReady = new Deferred<Data>()
private knower() {
inOtherMoment(data=>{
this.fooReady.resolve(data)
})
}
}
```

## Type parameters
#### R 
#### J 
## Hierarchy

**Deferred**

## Index

### Constructors

* [constructor](_promise_.deferred.md#constructor)

### Properties

* [promise](_promise_.deferred.md#promise)
* [reject](_promise_.deferred.md#reject)
* [resolve](_promise_.deferred.md#resolve)

### Methods

* [catch](_promise_.deferred.md#catch)
* [then](_promise_.deferred.md#then)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Deferred**(callback?: *`undefined` \| `function`*): [Deferred](_promise_.deferred.md)

*Defined in [promise.ts:33](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/promise.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | `undefined` \| `function` |

**Returns:** [Deferred](_promise_.deferred.md)

___

## Properties

<a id="promise"></a>

### `<Private>` promise

**● promise**: *`Promise`<`R`>*

*Defined in [promise.ts:33](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/promise.ts#L33)*

___
<a id="reject"></a>

###  reject

**● reject**: *`function`*

*Defined in [promise.ts:32](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/promise.ts#L32)*

#### Type declaration
▸(r: *`J`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | `J` |

**Returns:** `void`

___
<a id="resolve"></a>

###  resolve

**● resolve**: *`function`*

*Defined in [promise.ts:31](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/promise.ts#L31)*

#### Type declaration
▸(r: *`R`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | `R` |

**Returns:** `void`

___

## Methods

<a id="catch"></a>

###  catch

▸ **catch**(r: *`function`*): `Promise`<`void` \| `R`>

*Defined in [promise.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/promise.ts#L49)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| r | `function` |

**Returns:** `Promise`<`void` \| `R`>

___
<a id="then"></a>

###  then

▸ **then**(resolve: *`function`*): `Promise`<`void`>

*Defined in [promise.ts:46](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/promise.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| resolve | `function` |

**Returns:** `Promise`<`void`>

___

