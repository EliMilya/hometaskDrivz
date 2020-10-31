export class Entity {
  constructor(public id: string) {}

  idToString(): string {
    return `Id is: ${this.id}`;
  }
}
