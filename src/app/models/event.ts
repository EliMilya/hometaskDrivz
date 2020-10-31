import { Bus } from "./bus";

export class Event {
  constructor(public time: string, public action: string, public bus: Bus) {}

  message() {}

  execute() {}
}
