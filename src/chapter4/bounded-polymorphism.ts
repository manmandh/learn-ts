type TreeNode = {
  value: string
}
type LeafNode = TreeNode & {
  isLeaf: true
}
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}
let a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode

function mapNode<T extends TreeNode>(
  node: T,
  f: (value: string) => string
  ): T {
  return {
    ...node,
    value: f(node.value)
  }
}

//Multiple contraints
type HasSides = {numberOfSides: number}
type SidesHaveLength = {sideLength: number}
function logPerimeter<Shape extends HasSides & SidesHaveLength>(s: Shape): Shape {
  console.log(s.numberOfSides * s.sideLength)
  return s
}
type Square = HasSides & SidesHaveLength
let square: Square = {numberOfSides: 4, sideLength: 3}
logPerimeter(square) // Square, logs "12"

//Using bounded polymorphism to model arity
function call<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

//Generic Type Defaults
type MyEvent2<Type extends string, Target extends HTMLElement = HTMLElement,> =
{
  target: Target
  type: Type
}

//Type-driven development
