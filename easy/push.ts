type Push<T extends any[],U>=[...T,U]

namespace plus{
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
}