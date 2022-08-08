interface Todo {
  title: string
  description: string
  completed: boolean
}


type MyOmit<T,K extends keyof T>={
  // 不是很懂，有时间再研究
  [P in keyof T as(P extends K?never:P)]:T[P]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>