type Arr = ["1", "2", "3"];

// 这么简单？？？？？？
type TupleToUnion<T extends any[]> = keyof {
  [K in T[number]]: K;
};

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
