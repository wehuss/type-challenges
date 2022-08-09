type Replace<S extends string,From extends string,TO extends string>=From extends ''?S:S extends`${infer L}${From}${infer R}`?`${L}${TO}${R}`:S

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'