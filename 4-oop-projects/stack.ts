{
  // 어떠한 자료구조도 쓰면 안된다.
  // 스택  ->  pop:마지막 요소를 끄내는 역할     push:마지막에 추가해주는 역할   저장소가 필요
  //  주의사항 : 데이터가 저장소의 크기보다  크면  에러 발생시켜야 됨

  type Node = {
    prev: Node | null;
    content: string;
  };

  class Stack {
    private STACK_SIZE: number = 10;
    private nodeNumber: number = 0;
    private nowNode: Node | null = null;
    private result: string = "";

    push(content: string) {
      if (this.nodeNumber < this.STACK_SIZE) {
        //첫번째로 들어오는 경우
        if (this.nodeNumber === 0) {
          this.nowNode = { prev: null, content };
          this.result = content;
        } else {
          this.nowNode = { prev: this.nowNode, content };
          this.result += ` ${content}`;
        }
        this.nodeNumber += 1;
      } else {
        throw new Error("there is enough Space in Stack");
      }
    }

    pop() {
      if (this.nodeNumber > 0) {
        if (this.nowNode) {
          this.nowNode = this.nowNode.prev ? this.nowNode.prev : null;
        }
        if (this.nodeNumber !== 1) {
          let test = this.result.split(" ");
          test = test.slice(0, test.length - 1);
          this.result = test.join(" ");
        } else {
          this.result = "";
        }

        this.nodeNumber -= 1;
      }
    }

    allPrint() {
      console.log(this.result);
    }
  }

  const testStack = new Stack();
  testStack.push("M.W");
  testStack.allPrint();
  testStack.pop();
  testStack.allPrint();
  testStack.push("1");
  testStack.push("2");
  testStack.push("3");
  testStack.push("4");
  testStack.push("5");
  testStack.allPrint();
  testStack.pop();
  testStack.pop();
  testStack.pop();
  testStack.allPrint();
  testStack.push("1");
  testStack.push("2");
  testStack.push("3");
  testStack.push("4");
  testStack.push("5");
  testStack.allPrint();
}
