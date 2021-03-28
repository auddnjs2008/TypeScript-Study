{
  const obj = {
    name: "ellie",
  };

  obj.name; // ellie
  obj["name"]; //ellie

  //위에처럼 타입도 인덱스를 기반으로 결정을 할 수 가 있다.

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "feamle";
  };

  type Name = Animal["name"]; // string 타입이 된다.
  const text: Name = "hello";

  type Gener = Animal["gender"]; // "male" | "female"

  type Keys = keyof Animal; // keyof라고 하면  Animal에 있는 모든 타입을
  // Kesy에 할당  => "name" | "age" | "gender"
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "kk",
    gender: "feamle",
  };
}
