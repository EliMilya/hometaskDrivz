import { Entity } from "./entity";
import { Person } from "./person";

export class Stop extends Entity {
  constructor(
    id: string,
    public location: number,
    public name: string,
    public passengers: Person[]
  ) {
    super(id);
  }

  idToString(): string {
    return `Id is ${this.id}`;
  }

  toString(): void {
    console.log(
      "Location is: " + this.location,
      "Name is: " + this.name,
      "Passengers are: " + this.passengers
    );
  }

  showPeople(): Person[] {
    return this.passengers;
  }
}
