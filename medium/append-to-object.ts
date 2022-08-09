namespace appendToObject {
  // type AppendToObject<Obj, K extends string, V> = {
  //   [Key in keyof Obj]: Obj[Key];
  // } & {
  //   [key in K]: V;
  // };
  type AppendToObject<T, K extends string, V> = {
    [Key in keyof T | K]: Key extends keyof T ? T[Key] : V;
  };
  type Test = { id: "1" };
  type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
}
