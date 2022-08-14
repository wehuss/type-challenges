type IsUp<S extends string> = S extends Uppercase<S>
  ? S extends Lowercase<S>
    ? false
    : true
  : false;

type KebabCase<
  S extends string,
  IsFirst = true
> = S extends `${infer F}${infer R}`
  ? `${IsUp<F> extends true
      ? `${IsFirst extends true ? "" : "-"}${Lowercase<F>}`
      : F}${KebabCase<R, false>}`
  : S;

namespace kebabCase {
  type Result = KebabCase<"FooBarBaz">;
}
