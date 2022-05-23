[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["promise"](../modules/_promise_.md) › [Deferred](_promise_.deferred.md)

# Class: Deferred ‹**R, J**›

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

*Defined in [src/promise.ts:51](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *[Deferred](_promise_.deferred.md)*

## Properties

### `Private` promise

• **promise**: *Promise‹R›*

*Defined in [src/promise.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L50)*

___

###  reject

• **reject**: *function*

*Defined in [src/promise.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L49)*

#### Type declaration:

▸ (`r`: J): *void*

**Parameters:**

Name | Type |
------ | ------ |
`r` | J |

___

###  resolve

• **resolve**: *function*

*Defined in [src/promise.ts:48](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L48)*

#### Type declaration:

▸ (`r`: R): *void*

**Parameters:**

Name | Type |
------ | ------ |
`r` | R |

___

###  status

• **status**: *"resolved" | "pending" | "rejected"*

*Defined in [src/promise.ts:51](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L51)*

## Methods

###  catch

▸ **catch**(`r`: function): *Promise‹void | R›*

*Defined in [src/promise.ts:68](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L68)*

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

*Defined in [src/promise.ts:65](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L65)*

**Parameters:**

▪ **resolve**: *function*

▸ (`r`: R): *void*

**Parameters:**

Name | Type |
------ | ------ |
`r` | R |

**Returns:** *Promise‹void›*
