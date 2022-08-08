type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

// 为什么要判断keyof T extends never: https://stackoverflow.com/questions/68693054/what-is-extends-never-used-for
type DeepReadonly<T>=keyof T extends never?T:{
  // 才知道ts支持递归😅
  readonly [K in keyof T]:DeepReadonly<T[K]>
}

namespace deepReadonly{
  type Todo = DeepReadonly<X> // should be same as `Expected`
}