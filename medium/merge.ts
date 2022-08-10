namespace t202208102114 {
  type foo = {
    name: string;
    age: string;
  };

  type coo = {
    age: number;
    sex: string;
  };

  type Merge<T1 extends object, T2 extends object> = {
    [K in keyof T1 | keyof T2]: K extends keyof T1
      ? K extends keyof T2
        ? T2[K]
        : T1[K]
      : K extends keyof T2
      ? T2[K]
      : never;
  };

  type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
}
