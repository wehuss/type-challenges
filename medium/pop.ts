namespace pop {
  type arr1 = ["a", "b", "c", "d"];
  type arr2 = [3, 2, 1];

  // 邪神解法
  // type Pop<T extends any[]>=keyof {
  //   [K in T[number] as (K extends last.Last<T>?never:K)]:K
  // }

  type Pop<T extends any[]> = T extends [...infer R, any]?R:never

  type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2>; // expected to be [3, 2]
}
