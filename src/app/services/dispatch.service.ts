import { Bus } from "../models/bus";
import { Event } from "src/app/models/event";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DispatchService {
  events: Event[] = [];

  constructor() {}

  dispatch(bus: Bus, action: string): void {
    this.events.push(new Event("00:05", action, bus));
  }
}
