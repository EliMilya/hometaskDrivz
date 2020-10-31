import { Entity } from "./entity";

export class Person extends Entity {
  constructor(
    id: string,
    public from: number,
    public line: number,
    public to: number
  ) {
    super(id);
  }

  idToString(): string {
    return `Id is: ${this.id}`;
  }

  toString(): void {
    console.log("From: " + this.from, "To: " + this.to, "Line: " + this.line);
  }
}
