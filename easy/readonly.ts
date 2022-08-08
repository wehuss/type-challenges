import { Test } from "./test"

type MyReadonly<T>={
  readonly [key in keyof T]:T[key]
}

type ToReadonly=MyReadonly<Test>