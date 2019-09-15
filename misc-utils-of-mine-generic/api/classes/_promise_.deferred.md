**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["promise"](../modules/_promise_.md) › [Deferred](_promise_.deferred.md)

# Class: Deferred <**R, J**>

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

▪ **R**

▪ **J**

## Hierarchy

* **Deferred**

## Index

### Constructors

* [constructor](_promise_.deferred.md#constructor)

### Properties

* [promise](_promise_.deferred.md#private-promise)
* [reject](_promise_.deferred.md#reject)
* [resolve](_promise_.deferred.md#resolve)
* [status](_promise_.deferred.md#status)

### Methods

* [catch](_promise_.deferred.md#catch)
* [then](_promise_.deferred.md#then)

## Constructors

###  constructor

\+ **new Deferred**(`callback?`: undefined | function): *[Deferred](_promise_.deferred.md)*

*Defined in [promise.ts:35](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/promise.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined \| function |

**Returns:** *[Deferred](_promise_.deferred.md)*

## Properties

### `Private` promise

• **promise**: *Promise‹R›*

*Defined in [promise.ts:34](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/promise.ts#L34)*

___

###  reject

• **reject**: *function*

*Defined in [promise.ts:33](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/promise.ts#L33)*

#### Type declaration:

▸ (`r`: J): *void*

**Parameters:**

Name | Type |
------ | ------ |
`r` | J |

___

###  resolve

• **resolve**: *function*

*Defined in [promise.ts:32](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/promise.ts#L32)*

#### Type declaration:

▸ (`r`: R): *void*

**Parameters:**

Name | Type |
------ | ------ |
`r` | R |

___

###  status

• **status**: *"resolved" | "pending" | "rejected"*

*Defined in [promise.ts:35](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/promise.ts#L35)*

## Methods

###  catch

▸ **catch**(`r`: function): *Promise‹void | R›*

*Defined in [promise.ts:52](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/promise.ts#L52)*

**Parameters:**

▪ **r**: *function*

▸ (`reject`: J): *void*

**Parameters:**

Name | Type |
------ | ------ |
`reject` | J |

**Returns:** *Promise‹void | R›*

___

###  then

▸ **then**(`resolve`: function): *Promise‹void›*

*Defined in [promise.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/promise.ts#L49)*

**Parameters:**

▪ **resolve**: *function*

▸ (`r`: R): *void*

**Parameters:**

Name | Type |
------ | ------ |
`r` | R |

**Returns:** *Promise‹void›*