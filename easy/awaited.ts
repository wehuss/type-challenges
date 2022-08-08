type ExampleType = Promise<string>

// https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> 
? X extends Promise<unknown> 
  ? MyAwaited<X> 
  : X 
: never

type Result = MyAwaited<ExampleType> // string