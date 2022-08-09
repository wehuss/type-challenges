// 第一次时R='Hello World  ',会再次调用TrimLeft<R>
type TrimLeft<S extends string>=S extends ` ${infer R}`?TrimLeft<R> : S

type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '