// 不是太理解infer
type MyCapitalize<S extends string>=S extends `${infer L}${infer R}`?`${Uppercase<L>}${R}`:never

type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'