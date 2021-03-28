{
  interface Stack {
    readonly size: number; // 값을 내부적으로 결정
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    //next: StackNode | undefined;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0; // 언더바를 써주면 내부에서 쓰인다는 의미
    private head?: StackNode; // 스택노드를 가질수도 있고 가지지 않을수도
    get size() {
      return this._size;
    }

    constructor(private capacity: number) {}

    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error("Stac is Full!");
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
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
  const stack = new StackImpl(10);
  stack.push("Ellie 1");
  stack.push("2");

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
