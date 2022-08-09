namespace trim{
  type Trim<T extends string>=T extends ` ${infer R} `?Trim<R>:T
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
}