namespace last {
  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  // 对我来说并不是很直观
  // type Last<T extends any[]>=T extends [...any[], infer L] ? L : never

  // 这对我这个对ts了解不深的人更加直观
  type Last<T extends any[]>=[any,...T][T['length']]

  type tail1 = Last<arr1>; // expected to be 'c'
  type tail2 = Last<arr2>; // expected to be 1
}
