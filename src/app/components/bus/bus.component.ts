import { Bus } from "src/app/models/bus";
import { Component, Input } from "@angular/core";
import { DispatchService } from "src/app/services/dispatch.service";
import { Line } from "src/app/models/line";
import { Stop } from "src/app/models/stop";

@Component({
  selector: "app-bus",
  template: `
    <button class="add-people" (click)="action()">Add passengers</button>
  `,
  styleUrls: ["./bus.component.css"],
})
export class BusComponent {
  @Input() addPeople: Function;

  constructor(private dispatchService: DispatchService) {}

  action(): void {
    const line = new Line("32", [], 4, "name", true, []);
    const stop = new Stop("321", 3, "some name", []);
    const bus = new Bus("23", line, stop, 6, 8, []);

    this.addPeople();
    this.dispatchService.dispatch(bus, "goToNextStop");
  }
}
