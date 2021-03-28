{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      // 이 함수의 단점은 숫자만 판단할수있다.
      // 문자열 도 객체도 하고 싶은데 그럼 다른함수도 만들어줘야하나?
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg; // 이렇게 any 타입으로 하면  리턴 값도 any가 되기 때문에
    // 타입이 보장이 되지 않는다.  => 나쁜 예제
  }

  const result = checkNotNullBad(123);

  // 제네릭을 쓰면 해결이 가능하다.
  // 제네릭 => 통상적인 ,일반적인 => 다포용하는 느낌
  // 보통 대문자  T로 써준다.  Generic 이라고 써줘도 상관없다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
