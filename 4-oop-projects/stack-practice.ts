interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
  print(): void;
}
type NodeType = {
  prev: NodeType | null;
  content: string;
};

class StackObject implements Stack {
  size = 10;
  private head: NodeType | null = null;
  private nowIndex: number = 0;
  private memory: string = "";

  push(value: string) {
    if (this.nowIndex < this.size) {
      this.nowIndex += 1;
      this.nowIndex !== 1
        ? (this.memory += ` ${value}`)
        : (this.memory = value);
      this.nowIndex === 1
        ? (this.head = { prev: null, content: value })
        : (this.head = { prev: this.head, content: value });
    } else {
      throw new Error("there are no enough Room");
    }
  }

  pop(): string {
    if (this.head) {
      this.settingMemory();
      let result: string = this.head.content;
      this.head = this.head.prev;
      this.nowIndex -= 1;
      return result;
    }
    return "";
  }

  protected settingMemory(): void {
    if (this.nowIndex > 1) {
      const lastIndex = this.memory.lastIndexOf(" ");
      this.memory = this.memory.substring(0, lastIndex);
    } else if (this.nowIndex === 1) {
      this.memory = "";
    }
  }

  print(): void {
    console.log(this.memory);
  }
}

const testStack = new StackObject();
testStack.push("3");
testStack.push("4");
testStack.print();
console.log(testStack.pop());
testStack.print();
testStack.pop();
testStack.print();
testStack.push("1");
testStack.push("2");
testStack.push("3");
testStack.push("4");
testStack.push("5");
testStack.push("6");
testStack.pop();
testStack.pop();
testStack.pop();
testStack.pop();
testStack.pop();
testStack.push("3");
testStack.push("4");
testStack.push("5");
testStack.push("6");
testStack.print();
