import { Test } from "./test"

type MyPick<T,K extends keyof T>={
  [key in K]:T[key]
}



type NewType=MyPick<Test,'num'>