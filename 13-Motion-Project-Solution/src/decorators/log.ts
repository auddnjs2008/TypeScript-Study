function Log(
  _: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const newDescripter = {
    ...descriptor,
    value: function (...args: any[]): any {
      console.log(`Calling ${name} with argument`);
      console.log(args);
      const result = descriptor.value.apply(this, args);
      console.log("Result");
      console.dir(result);
      return result;
    },
  };

  return newDescripter;
}

class Calculator {
  @Log
  add(x: number, y: number): number {
    return x + y;
  }
}
const calculator = new Calculator();
console.log(calculator.add(1, 2));
