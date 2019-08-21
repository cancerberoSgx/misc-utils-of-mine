**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["tree"](../modules/_tree_.md) › [VisitorOptions](_tree_.visitoroptions.md)

# Interface: VisitorOptions

settings for visitDescendants regarding visiting order and visit interruption modes.

## Hierarchy

* **VisitorOptions**

## Index

### Properties

* [andSelf](_tree_.visitoroptions.md#optional-andself)
* [breakOnDescendantSignal](_tree_.visitoroptions.md#optional-breakondescendantsignal)
* [childrenFirst](_tree_.visitoroptions.md#optional-childrenfirst)
* [visitDescendantsOnSelfSignalAnyway](_tree_.visitoroptions.md#optional-visitdescendantsonselfsignalanyway)

## Properties

### `Optional` andSelf

• **andSelf**? : *undefined | false | true*

*Defined in [tree.ts:118](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2200176/misc-utils-of-mine-generic/src/tree.ts#L118)*

___

### `Optional` breakOnDescendantSignal

• **breakOnDescendantSignal**? : *undefined | false | true*

*Defined in [tree.ts:113](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2200176/misc-utils-of-mine-generic/src/tree.ts#L113)*

if a descendant visitor returned true, we stop visiting and signal up

___

### `Optional` childrenFirst

• **childrenFirst**? : *undefined | false | true*

*Defined in [tree.ts:109](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2200176/misc-utils-of-mine-generic/src/tree.ts#L109)*

___

### `Optional` visitDescendantsOnSelfSignalAnyway

• **visitDescendantsOnSelfSignalAnyway**? : *undefined | false | true*

*Defined in [tree.ts:117](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2200176/misc-utils-of-mine-generic/src/tree.ts#L117)*

no matter if visitor returns true for a node, it will still visit its descendants and then break the chain