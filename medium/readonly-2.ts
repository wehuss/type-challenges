interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T,U extends keyof T>={
  readonly [K in U]:T[K]
} & {
  [K in keyof T as (K extends U?never:K)]:T[K]
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

//@ts-ignore
todo.title = "Hello" // Error: cannot reassign a readonly property
//@ts-ignore
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK