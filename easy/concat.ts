type Concat<T extends any[],F extends any[]>=[...T,...F]

namespace concat{
  type Result = Concat<[1], [2]> // expected to be [1, 2]
}