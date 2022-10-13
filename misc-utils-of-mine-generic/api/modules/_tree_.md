[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["tree"](_tree_.md)

# Module: "tree"

## Index

### Interfaces

* [Node](../interfaces/_tree_.node.md)
* [VisitorOptions](../interfaces/_tree_.visitoroptions.md)

### Type aliases

* [NodeKindPredicate](_tree_.md#nodekindpredicate)
* [NodePredicate](_tree_.md#nodepredicate)
* [NodeSimplePredicate](_tree_.md#nodesimplepredicate)
* [Visitor](_tree_.md#visitor)

### Functions

* [filterAncestors](_tree_.md#filterancestors)
* [filterChildren](_tree_.md#filterchildren)
* [filterDescendants](_tree_.md#filterdescendants)
* [findAncestor](_tree_.md#findancestor)
* [findChildren](_tree_.md#findchildren)
* [findDescendant](_tree_.md#finddescendant)
* [findRootElement](_tree_.md#findrootelement)
* [getAncestors](_tree_.md#getancestors)
* [getChildIndex](_tree_.md#getchildindex)
* [getDistanceToAncestor](_tree_.md#getdistancetoancestor)
* [getNextSibling](_tree_.md#getnextsibling)
* [getPreviousSibling](_tree_.md#getprevioussibling)
* [getSiblings](_tree_.md#getsiblings)
* [mapChildren](_tree_.md#mapchildren)
* [mapDescendants](_tree_.md#mapdescendants)
* [visitAncestors](_tree_.md#visitancestors)
* [visitChildren](_tree_.md#visitchildren)
* [visitDescendants](_tree_.md#visitdescendants)

## Type aliases

###  NodeKindPredicate

Ƭ **NodeKindPredicate**: *function*

*Defined in [src/tree.ts:158](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L158)*

#### Type declaration:

▸ (`n`: T, `i?`: undefined | number, `a?`: T[]): *n is T*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |
`i?` | undefined &#124; number |
`a?` | T[] |

___

###  NodePredicate

Ƭ **NodePredicate**: *[NodeSimplePredicate](_tree_.md#nodesimplepredicate)‹T› | function*

*Defined in [src/tree.ts:160](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L160)*

___

###  NodeSimplePredicate

Ƭ **NodeSimplePredicate**: *function*

*Defined in [src/tree.ts:156](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L156)*

#### Type declaration:

▸ (`n`: T, `i?`: undefined | number, `a?`: T[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |
`i?` | undefined &#124; number |
`a?` | T[] |

___

###  Visitor

Ƭ **Visitor**: *function*

*Defined in [src/tree.ts:103](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L103)*

#### Type declaration:

▸ (`n`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

## Functions

###  filterAncestors

▸ **filterAncestors**‹**T**›(`n`: T, `p`: [NodeSimplePredicate](_tree_.md#nodesimplepredicate)‹T›, `o`: [VisitorOptions](../interfaces/_tree_.visitoroptions.md)): *T[]*

*Defined in [src/tree.ts:92](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L92)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | T | - |
`p` | [NodeSimplePredicate](_tree_.md#nodesimplepredicate)‹T› | - |
`o` | [VisitorOptions](../interfaces/_tree_.visitoroptions.md) | {} |

**Returns:** *T[]*

___

###  filterChildren

▸ **filterChildren**‹**T**›(`n`: [Node](../interfaces/_tree_.node.md), `p`: [NodePredicate](_tree_.md#nodepredicate)‹T›): *T[]*

*Defined in [src/tree.ts:27](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L27)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Node](../interfaces/_tree_.node.md) |
`p` | [NodePredicate](_tree_.md#nodepredicate)‹T› |

**Returns:** *T[]*

___

###  filterDescendants

▸ **filterDescendants**‹**T**›(`n`: T, `p`: [NodePredicate](_tree_.md#nodepredicate)‹T›, `o`: [VisitorOptions](../interfaces/_tree_.visitoroptions.md)): *T[]*

*Defined in [src/tree.ts:162](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L162)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | T | - |
`p` | [NodePredicate](_tree_.md#nodepredicate)‹T› | - |
`o` | [VisitorOptions](../interfaces/_tree_.visitoroptions.md) | {} |

**Returns:** *T[]*

___

###  findAncestor

▸ **findAncestor**‹**T**›(`n`: T, `p`: [NodePredicate](_tree_.md#nodepredicate)‹T›, `o`: object): *T | undefined*

*Defined in [src/tree.ts:72](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L72)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | T | - |
`p` | [NodePredicate](_tree_.md#nodepredicate)‹T› | - |
`o` | object | {} |

**Returns:** *T | undefined*

___

###  findChildren

▸ **findChildren**‹**T**›(`n`: T, `p`: [NodePredicate](_tree_.md#nodepredicate)‹T›): *T | undefined*

*Defined in [src/tree.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L23)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |
`p` | [NodePredicate](_tree_.md#nodepredicate)‹T› |

**Returns:** *T | undefined*

___

###  findDescendant

▸ **findDescendant**‹**T**›(`n`: T, `p`: [NodePredicate](_tree_.md#nodepredicate)‹T›, `o`: [VisitorOptions](../interfaces/_tree_.visitoroptions.md)): *T | undefined*

*Defined in [src/tree.ts:190](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L190)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | T | - |
`p` | [NodePredicate](_tree_.md#nodepredicate)‹T› | - |
`o` | [VisitorOptions](../interfaces/_tree_.visitoroptions.md) | {} |

**Returns:** *T | undefined*

___

###  findRootElement

▸ **findRootElement**‹**T**›(`n`: T): *undefined | T*

*Defined in [src/tree.ts:88](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L88)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

**Returns:** *undefined | T*

___

###  getAncestors

▸ **getAncestors**‹**T**›(`node`: T | undefined): *T[]*

*Defined in [src/tree.ts:208](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L208)*

Gets given node's Ancestors in order from node.parent to top most one .

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | T &#124; undefined |

**Returns:** *T[]*

___

###  getChildIndex

▸ **getChildIndex**(`node`: [Node](../interfaces/_tree_.node.md), `children`: [Node](../interfaces/_tree_.node.md)[] | undefined): *number*

*Defined in [src/tree.ts:36](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L36)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`node` | [Node](../interfaces/_tree_.node.md) | - | - |
`children` | [Node](../interfaces/_tree_.node.md)[] &#124; undefined | undefined | if caller already have called getChildren he can pass it here so this call is faster.  |

**Returns:** *number*

___

###  getDistanceToAncestor

▸ **getDistanceToAncestor**‹**T**›(`node?`: T, `ancestor?`: T): *number*

*Defined in [src/tree.ts:220](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L220)*

Get the distance from given node to its Ancestor .

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type |
------ | ------ |
`node?` | T |
`ancestor?` | T |

**Returns:** *number*

___

###  getNextSibling

▸ **getNextSibling**(`node`: [Node](../interfaces/_tree_.node.md)): *[Node](../interfaces/_tree_.node.md) | undefined*

*Defined in [src/tree.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](../interfaces/_tree_.node.md) |

**Returns:** *[Node](../interfaces/_tree_.node.md) | undefined*

___

###  getPreviousSibling

▸ **getPreviousSibling**(`node`: [Node](../interfaces/_tree_.node.md)): *[Node](../interfaces/_tree_.node.md) | undefined*

*Defined in [src/tree.ts:63](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](../interfaces/_tree_.node.md) |

**Returns:** *[Node](../interfaces/_tree_.node.md) | undefined*

___

###  getSiblings

▸ **getSiblings**(`node`: [Node](../interfaces/_tree_.node.md), `getChildrenMode`: boolean): *[Node](../interfaces/_tree_.node.md)[]*

*Defined in [src/tree.ts:57](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`node` | [Node](../interfaces/_tree_.node.md) | - |
`getChildrenMode` | boolean | false |

**Returns:** *[Node](../interfaces/_tree_.node.md)[]*

___

###  mapChildren

▸ **mapChildren**‹**N**, **T**›(`n`: N, `v`: function): *T[]*

*Defined in [src/tree.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L17)*

**Type parameters:**

▪ **N**: *[Node](../interfaces/_tree_.node.md)*

▪ **T**

**Parameters:**

▪ **n**: *N*

▪ **v**: *function*

▸ (`c`: N): *T*

**Parameters:**

Name | Type |
------ | ------ |
`c` | N |

**Returns:** *T[]*

___

###  mapDescendants

▸ **mapDescendants**‹**T**, **V**›(`n`: T, `p`: function, `o`: [VisitorOptions](../interfaces/_tree_.visitoroptions.md)): *V[]*

*Defined in [src/tree.ts:177](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L177)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

▪ **V**

**Parameters:**

▪ **n**: *T*

▪ **p**: *function*

▸ (`p`: T): *V*

**Parameters:**

Name | Type |
------ | ------ |
`p` | T |

▪`Default value`  **o**: *[VisitorOptions](../interfaces/_tree_.visitoroptions.md)*= {}

**Returns:** *V[]*

___

###  visitAncestors

▸ **visitAncestors**‹**T**›(`n`: T, `v`: [Visitor](_tree_.md#visitor)‹T›, `o`: object): *boolean*

*Defined in [src/tree.ts:68](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L68)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | T | - |
`v` | [Visitor](_tree_.md#visitor)‹T› | - |
`o` | object | {} |

**Returns:** *boolean*

___

###  visitChildren

▸ **visitChildren**‹**T**›(`n`: T, `v`: function): *void*

*Defined in [src/tree.ts:12](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L12)*

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

▪ **n**: *T*

▪ **v**: *function*

▸ (`c`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | T |

**Returns:** *void*

___

###  visitDescendants

▸ **visitDescendants**‹**T**›(`n`: T, `v`: [Visitor](_tree_.md#visitor)‹T›, `o`: [VisitorOptions](../interfaces/_tree_.visitoroptions.md), `inRecursion`: boolean): *boolean*

*Defined in [src/tree.ts:127](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/8ac077d/misc-utils-of-mine-generic/src/tree.ts#L127)*

Visit node's descendants until the visitor function return true or there are no more. In the first
different modes on which visiting the rest of descenda|nts or Ancestors are configurable through the
options. By default, first the parent is evaluated which is configurable configurable with
[[[VisitorOptions.childrenFirst]]

**Type parameters:**

▪ **T**: *[Node](../interfaces/_tree_.node.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`n` | T | - |
`v` | [Visitor](_tree_.md#visitor)‹T› | - |
`o` | [VisitorOptions](../interfaces/_tree_.visitoroptions.md) | {} |
`inRecursion` | boolean | false |

**Returns:** *boolean*
