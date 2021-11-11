[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["environment"](_environment_.md)

# Module: "environment"

## Index

### Variables

* [Node](_environment_.md#node)
* [_this](_environment_.md#const-_this)
* [document](_environment_.md#document)
* [inDOM](_environment_.md#const-indom)
* [inNode](_environment_.md#const-innode)
* [isBrowser](_environment_.md#const-isbrowser)
* [isDOM](_environment_.md#const-isdom)
* [self](_environment_.md#self)
* [window](_environment_.md#window)

### Functions

* [getGlobal](_environment_.md#getglobal)
* [inBrowser](_environment_.md#inbrowser)
* [isJSDOM](_environment_.md#isjsdom)
* [isNode](_environment_.md#isnode)
* [isWebWorker](_environment_.md#iswebworker)

## Variables

###  Node

• **Node**: *any*

Defined in src/environment.ts:1

___

### `Const` _this

• **_this**: *globalThis* = this

Defined in src/environment.ts:46

___

###  document

• **document**: *any*

Defined in src/environment.ts:1

___

### `Const` inDOM

• **inDOM**: *[inBrowser](_environment_.md#inbrowser)* = inBrowser

Defined in src/environment.ts:35

___

### `Const` inNode

• **inNode**: *[isNode](_environment_.md#isnode)* = isNode

Defined in src/environment.ts:21

___

### `Const` isBrowser

• **isBrowser**: *[inBrowser](_environment_.md#inbrowser)* = inBrowser

Defined in src/environment.ts:33

___

### `Const` isDOM

• **isDOM**: *[inBrowser](_environment_.md#inbrowser)* = inBrowser

Defined in src/environment.ts:37

___

###  self

• **self**: *any*

Defined in src/environment.ts:44

___

###  window

• **window**: *any*

Defined in src/environment.ts:44

## Functions

###  getGlobal

▸ **getGlobal**(): *any*

Defined in src/environment.ts:47

**Returns:** *any*

___

###  inBrowser

▸ **inBrowser**(): *boolean*

Defined in src/environment.ts:23

**Returns:** *boolean*

___

###  isJSDOM

▸ **isJSDOM**(): *boolean*

Defined in src/environment.ts:17

**Returns:** *boolean*

___

###  isNode

▸ **isNode**(): *boolean*

Defined in src/environment.ts:3

**Returns:** *boolean*

___

###  isWebWorker

▸ **isWebWorker**(): *boolean*

Defined in src/environment.ts:39

**Returns:** *boolean*
