import { Entity } from "./entity";
import { Line } from "./line";
import { Person } from "./person";
import { Stop } from "./stop";

export class Bus extends Entity {
  constructor(
    id: string,
    public currentLine: Line,
    public currentStop: Stop,
    public currentStopIndex: number,
    public maxCapacity: number,
    public passengers: Person[]
  ) {
    super(id);
  }

  idToString(): string {
    return `Id is: ${this.id}`;
  }

  toString(): void {
    console.log(
      "Current line is: " + this.currentLine,
      "Current stop is: " + this.currentStop,
      "Current stop index is: " + this.currentStopIndex,
      "Max capacity is: " + this.maxCapacity,
      "Passengers are: " + this.passengers
    );
  }

  reset() {}

  changeColor() {}

  showPeople(): Person[] {
    return this.passengers;
  }

  getPassengersGetOn() {}

  addPeople() {}

  removePeople(): void {
    this.passengers = [];
  }
}
