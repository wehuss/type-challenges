type LengthOfString<
  S extends string,
  L extends string[]=[]
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...L, F]>
  : L["length"];


 namespace lengthOfString{
  type Length=LengthOfString<'test'>
 }