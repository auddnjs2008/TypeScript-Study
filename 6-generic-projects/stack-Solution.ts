{
  interface Stack<T> {
    readonly size: number; // 값을 내부적으로 결정
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    //next: StackNode | undefined;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0; // 언더바를 써주면 내부에서 쓰인다는 의미
    private head?: StackNode<T>; // 스택노드를 가질수도 있고 가지지 않을수도
    get size() {
      return this._size;
    }

    constructor(private capacity: number) {}

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stac is Full!");
      }
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      // null 과  undefined는 똑같다
      // null == undefined , null !== undefined
      //  == 동등연산자  === 일치연산자
      //  두개의 차이점은  일치연산자는 타입변환을 시도하지 않는다.
      // 일치 연산자는 다른 타입을 가진 피연산자는 다르다고 판단한다.
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl<string>(10);
  stack.push("4");
  stack.push("3");
  stack.push("2");

  const stack2 = new StackImpl<number>(10);
  stack2.push(1);
  stack2.push(2);

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
