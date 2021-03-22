type Check<T> = T extends string ? boolean : number;
//T타입이 문자열을 상속하면 boolean,  아니면 넘버

type Type = Check<string>; // =>타입이 boolean이 된다.

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type To = TypeName<string>; // string 타입이 된다.
type T1 = TypeName<"a">; // string
type T2 = TypeName<() => void>; // function 타입 이 된다.
