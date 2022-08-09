namespace replaceall {
  type ReplaceAll<
    S extends string,
    From extends string,
    TO extends string
  > = From extends ""
    ? S
    : S extends `${infer L}${From}${infer R}`
    // 每次截取一个from,直到匹配不到为止
    ? ReplaceAll<`${L}${TO}${R}`, From, TO>
    : S;
  type replaced = ReplaceAll<"t y p e s", " ", "">; // 期望是 'types'
}
