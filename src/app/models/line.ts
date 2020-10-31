import { Bus } from "./bus";
import { Entity } from "./entity";
import { Stop } from "./stop";

export class Line extends Entity {
  constructor(
    id: string,
    public buses: Bus[],
    public interval: number,
    public name: string,
    public onSim: boolean,
    public stops: Stop[]
  ) {
    super(id);
  }

  idToString(): string {
    return `Id is: ${this.id}`;
  }

  toString(): void {
    console.log(
      "Busses are: " + this.buses,
      "Interval is: " + this.interval,
      "Name is: " + this.name,
      "Is on sim: " + this.onSim,
      "Stops are: " + this.stops
    );
  }

  reset() {}
}
