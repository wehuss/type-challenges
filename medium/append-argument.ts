namespace appendArgument {
  type Fn = (a: number, b: string) => number;
  type AppendArgument<Fn,Arg>=Fn extends (...args: infer P)=>infer R?(...args:[...P,...[x:Arg]])=>R:never
  // 完成了，但好像没有完全完成
  type Result = AppendArgument<Fn, boolean>;
  // 期望是 (a: number, b: string, x: boolean) => number
}
