{
  // 기존형태를 이용하면서 조금 다른형태로 타입을 변환시키는 타입

  type Video = {
    title: string;
    author: string;
    descrition: string;
  }; // 이렇게 비디오 타입을 만들었는데
  // 선택적인 비디오 타입을 만들고 싶어 밑에도 만들엇다.
  //근데 비디오 타입을 변경시키켠  밑에도 변경을 시켜줘야 한다.

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly descrition: string;
  // };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for in과 똑같은 기능  for in (객체의 키를 순회 )
    // T가 가지고있는 키들중에 들어있는 하나의 P
  }; // keyof 는  타입 값에 존재하는 모든 포러퍼티의 키값을 union형태로 리턴
  // 위의 처럼 만들면  VideoOptional과 마찬가지로 기능이 같다.

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    age: 23,
  };

  animal.name = "elle";

  const video: ReadOnly<Video> = {
    title: "df",
    author: "eeli",
    descrition: "dfasdfasdf",
  };

  //video.title="asdf" 바꿀라하면 에러가 난다.

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    title: null, // null 도 쓸수있고  기존의 타입도 쓸수있다.
    author: null,
    descrition: "Asdfasdf",
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
