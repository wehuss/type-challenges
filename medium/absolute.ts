namespace absolute {
  type Test = -100;
  type Absolute<T extends string | number | bigint> =
  // 需要转化为字符串
    `${T}` extends `-${infer S}` ? S : never;
  type Result = Absolute<Test>; // expected to be "100"
}
